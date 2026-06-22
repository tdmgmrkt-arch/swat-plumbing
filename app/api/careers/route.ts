import { NextRequest, NextResponse } from "next/server"
import {
  careersSchema,
  RESUME_MAX_BYTES,
  RESUME_ACCEPTED_TYPES,
} from "@/lib/careers-schema"

// Bodies can include a resume up to 5 MB
export const runtime = "nodejs"
export const maxDuration = 15

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.GHL_CAREERS_WEBHOOK_URL

  let formData: FormData
  try {
    formData = await req.formData()
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body" },
      { status: 400 }
    )
  }

  // Extract non-file fields for zod validation
  const fields = {
    first_name: (formData.get("first_name") ?? "").toString(),
    last_name: (formData.get("last_name") ?? "").toString(),
    phone: (formData.get("phone") ?? "").toString(),
    email: (formData.get("email") ?? "").toString(),
    position: (formData.get("position") ?? "").toString(),
    additional_info: (formData.get("additional_info") ?? "").toString(),
    website: (formData.get("website") ?? "").toString(),
  }

  const parsed = careersSchema.safeParse(fields)
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 }
    )
  }

  const data = parsed.data

  // Honeypot — silently accept to avoid tipping off bots
  if (data.website) {
    return NextResponse.json({ ok: true })
  }

  // Resume validation (optional file)
  const resume = formData.get("resume")
  let resumeMeta:
    | { name: string; size: number; type: string; base64?: string }
    | null = null

  if (resume instanceof File && resume.size > 0) {
    if (resume.size > RESUME_MAX_BYTES) {
      return NextResponse.json(
        { ok: false, error: "Resume exceeds 5 MB limit" },
        { status: 413 }
      )
    }
    if (!RESUME_ACCEPTED_TYPES.includes(resume.type as (typeof RESUME_ACCEPTED_TYPES)[number])) {
      return NextResponse.json(
        { ok: false, error: "Unsupported resume format (PDF, DOC, DOCX, TXT)" },
        { status: 415 }
      )
    }
    const buf = Buffer.from(await resume.arrayBuffer())
    resumeMeta = {
      name: resume.name,
      size: resume.size,
      type: resume.type,
      base64: buf.toString("base64"),
    }
  }

  const payload = {
    first_name: data.first_name,
    last_name: data.last_name,
    full_name: `${data.first_name} ${data.last_name}`,
    phone: data.phone,
    email: data.email,
    position: data.position,
    additional_info: data.additional_info ?? "",
    resume_filename: resumeMeta?.name ?? null,
    resume_size_bytes: resumeMeta?.size ?? null,
    resume_mime: resumeMeta?.type ?? null,
    resume_base64: resumeMeta?.base64 ?? null,
    source_page: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.swatplumbing.com"}/careers`,
    submitted_at: new Date().toISOString(),
  }

  if (!webhookUrl) {
    console.warn(
      "[careers/route] GHL_CAREERS_WEBHOOK_URL is not set — application accepted but not forwarded"
    )
    console.info("[careers/route] application payload (resume body omitted):", {
      ...payload,
      resume_base64: payload.resume_base64 ? `[${payload.resume_size_bytes} bytes]` : null,
    })
    // Still return 200 so the user gets a confirmation; ghl-engineer will wire
    // the webhook URL when the careers workflow is built.
    return NextResponse.json({ ok: true, pending_integration: true })
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 10000)

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })

    if (!res.ok) {
      console.error(`[careers/route] GHL webhook returned ${res.status}`)
      return NextResponse.json(
        { ok: false, error: "Downstream error — please email us directly" },
        { status: 502 }
      )
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      console.error("[careers/route] GHL webhook timed out after 10s")
      return NextResponse.json(
        { ok: false, error: "Request timed out — please email us directly" },
        { status: 504 }
      )
    }
    console.error("[careers/route] Unexpected error:", err)
    return NextResponse.json(
      { ok: false, error: "Unexpected error — please email us directly" },
      { status: 500 }
    )
  } finally {
    clearTimeout(timeout)
  }
}
