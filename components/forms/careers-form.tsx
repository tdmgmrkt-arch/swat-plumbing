"use client"

import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  CheckCircle,
  AlertTriangle,
  Phone,
  Loader2,
  Paperclip,
  X,
} from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  careersSchema,
  type CareersFormValues,
  RESUME_MAX_BYTES,
  RESUME_ACCEPTED_TYPES,
  RESUME_ACCEPT_ATTR,
} from "@/lib/careers-schema"
import { POSITION_OPTIONS } from "@/lib/careers-data"
import { siteConfig } from "@/lib/site-config"

type SubmitState = "idle" | "loading" | "success" | "error"

export function CareersForm({
  defaultPosition,
}: {
  defaultPosition?: string
}) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle")
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [resumeError, setResumeError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CareersFormValues>({
    resolver: zodResolver(careersSchema),
    defaultValues: defaultPosition ? { position: defaultPosition } : undefined,
  })

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setResumeError(null)
    const file = e.target.files?.[0] ?? null
    if (!file) {
      setResumeFile(null)
      return
    }
    if (file.size > RESUME_MAX_BYTES) {
      setResumeError("Resume exceeds 5 MB limit")
      setResumeFile(null)
      e.target.value = ""
      return
    }
    if (
      !RESUME_ACCEPTED_TYPES.includes(
        file.type as (typeof RESUME_ACCEPTED_TYPES)[number]
      )
    ) {
      setResumeError("Unsupported format — use PDF, DOC, DOCX, or TXT")
      setResumeFile(null)
      e.target.value = ""
      return
    }
    setResumeFile(file)
  }

  function clearFile() {
    setResumeFile(null)
    setResumeError(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  async function onSubmit(values: CareersFormValues) {
    setSubmitState("loading")
    const fd = new FormData()
    fd.append("first_name", values.first_name)
    fd.append("last_name", values.last_name)
    fd.append("phone", values.phone)
    fd.append("email", values.email)
    fd.append("position", values.position)
    fd.append("additional_info", values.additional_info ?? "")
    fd.append("website", values.website ?? "")
    if (resumeFile) fd.append("resume", resumeFile)

    try {
      const res = await fetch("/api/careers", { method: "POST", body: fd })
      const json = await res.json().catch(() => ({ ok: false }))
      if (json.ok) {
        setSubmitState("success")
        reset()
        clearFile()
      } else {
        setSubmitState("error")
      }
    } catch {
      setSubmitState("error")
    }
  }

  if (submitState === "success") {
    return (
      <div className="bg-[#13181c] border border-white/12 border-t-0 rounded-b-sm p-8 lg:p-12 flex flex-col items-center text-center gap-5">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-600/15 border border-red-600/30">
          <CheckCircle className="h-7 w-7 text-red-400" aria-hidden="true" />
        </div>
        <div>
          <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-red-400 font-semibold mb-2">
            Application Received
          </p>
          <h3 className="text-white text-2xl font-black tracking-tight mb-3">
            Welcome to the queue.
          </h3>
          <p className="text-white/65 text-sm leading-relaxed max-w-sm mx-auto">
            We&apos;ve received your application. If you&apos;re a fit for the
            role, our team will reach out — usually within a few business days.
          </p>
        </div>
      </div>
    )
  }

  if (submitState === "error") {
    return (
      <div className="bg-[#13181c] border border-red-600/30 border-t-0 rounded-b-sm p-8 lg:p-12 flex flex-col items-center text-center gap-5">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-600/15 border border-red-600/30">
          <AlertTriangle className="h-7 w-7 text-red-400" aria-hidden="true" />
        </div>
        <div>
          <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-red-400 font-semibold mb-2">
            Submission Failed
          </p>
          <h3 className="text-white text-2xl font-black tracking-tight mb-3">
            Something didn&apos;t go through.
          </h3>
          <p className="text-white/65 text-sm leading-relaxed max-w-sm mx-auto mb-6">
            Give us a call directly — we&apos;d still love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={siteConfig.phone.aled_tel}
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide uppercase px-6 py-3 rounded-sm border border-red-500/40 min-h-11 transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Aledo: {siteConfig.phone.aledo}
            </Link>
            <Link
              href={siteConfig.phone.fw_tel}
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white bg-transparent hover:bg-white/8 hover:border-white/40 font-semibold text-sm tracking-wide uppercase px-6 py-3 rounded-sm min-h-11 transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Fort Worth: {siteConfig.phone.fortWorth}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form
      // react-hook-form's handleSubmit internally reads refs from registered
      // inputs. React 19's stricter ref-during-render lint flags this, but
      // the pattern is RHF's documented usage and works as intended.
      // eslint-disable-next-line react-hooks/refs
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      encType="multipart/form-data"
      className="bg-[#13181c] border border-white/12 border-t-0 rounded-b-sm p-6 lg:p-8"
    >
      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden"
        {...register("website")}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* First name */}
        <Field
          id="careers-first-name"
          label="First Name"
          required
          error={errors.first_name?.message}
        >
          <input
            id="careers-first-name"
            type="text"
            autoComplete="given-name"
            placeholder="Jane"
            aria-invalid={!!errors.first_name}
            className={inputCls(!!errors.first_name)}
            {...register("first_name")}
          />
        </Field>

        {/* Last name */}
        <Field
          id="careers-last-name"
          label="Last Name"
          required
          error={errors.last_name?.message}
        >
          <input
            id="careers-last-name"
            type="text"
            autoComplete="family-name"
            placeholder="Smith"
            aria-invalid={!!errors.last_name}
            className={inputCls(!!errors.last_name)}
            {...register("last_name")}
          />
        </Field>

        {/* Phone */}
        <Field
          id="careers-phone"
          label="Phone"
          required
          error={errors.phone?.message}
        >
          <input
            id="careers-phone"
            type="tel"
            autoComplete="tel"
            placeholder="(817) 555-0100"
            aria-invalid={!!errors.phone}
            className={inputCls(!!errors.phone)}
            {...register("phone")}
          />
        </Field>

        {/* Email */}
        <Field
          id="careers-email"
          label="Email"
          required
          error={errors.email?.message}
        >
          <input
            id="careers-email"
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            aria-invalid={!!errors.email}
            className={inputCls(!!errors.email)}
            {...register("email")}
          />
        </Field>

        {/* Position */}
        <div className="lg:col-span-2">
          <Field
            id="careers-position"
            label="Position You're Applying For"
            required
            error={errors.position?.message}
          >
            <select
              id="careers-position"
              aria-invalid={!!errors.position}
              defaultValue={defaultPosition ?? ""}
              className={cn(
                "bg-[#0a0c0e] text-white text-base",
                "border rounded-sm px-4 min-h-12",
                "focus:outline-none focus:ring-2 focus:ring-red-500/60 focus:border-red-500/60",
                "transition-colors appearance-none cursor-pointer",
                errors.position
                  ? "border-red-500/60"
                  : "border-white/15 hover:border-white/25"
              )}
              {...register("position")}
            >
              <option value="" disabled className="text-white/40 bg-[#0a0c0e]">
                Select a position…
              </option>
              {POSITION_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-[#0a0c0e]">
                  {opt}
                </option>
              ))}
            </select>
          </Field>
        </div>

        {/* Additional info */}
        <div className="lg:col-span-2">
          <Field
            id="careers-additional"
            label="Additional Information"
            optional
          >
            <textarea
              id="careers-additional"
              rows={5}
              placeholder="Years of experience, license status, why you'd be a fit for the crew — anything you'd want us to know."
              className={cn(
                "bg-[#0a0c0e] text-white text-base placeholder:text-white/40",
                "border border-white/15 hover:border-white/25 rounded-sm px-4 py-3.5",
                "focus:outline-none focus:ring-2 focus:ring-red-500/60 focus:border-red-500/60",
                "transition-colors resize-none"
              )}
              {...register("additional_info")}
            />
          </Field>
        </div>

        {/* Resume upload */}
        <div className="lg:col-span-2">
          <label
            htmlFor="careers-resume"
            className="block text-xs font-mono tracking-[0.18em] uppercase text-white/75 font-semibold mb-1.5"
          >
            Upload Resume{" "}
            <span className="text-white/40 normal-case tracking-normal text-[10px]">
              optional · PDF, DOC, DOCX, or TXT · 5 MB max
            </span>
          </label>

          {/* Hidden native input, custom dropzone-style trigger */}
          <input
            ref={fileInputRef}
            id="careers-resume"
            type="file"
            accept={RESUME_ACCEPT_ATTR}
            onChange={handleFileChange}
            className="sr-only"
          />

          {resumeFile ? (
            <div className="flex items-center justify-between gap-3 bg-[#0a0c0e] border border-red-600/40 rounded-sm px-4 py-3.5 min-h-14">
              <div className="flex items-center gap-3 min-w-0">
                <Paperclip
                  className="h-4 w-4 text-red-400 shrink-0"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <div className="text-white text-sm font-semibold truncate">
                    {resumeFile.name}
                  </div>
                  <div className="text-white/45 text-[11px] font-mono">
                    {(resumeFile.size / 1024).toFixed(1)} KB · {resumeFile.type || "file"}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={clearFile}
                className="inline-flex items-center gap-1 text-white/55 hover:text-red-400 text-[11px] font-mono uppercase tracking-wider shrink-0 transition-colors"
                aria-label="Remove uploaded resume"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
                Remove
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className={cn(
                "w-full flex items-center justify-center gap-2.5",
                "bg-[#0a0c0e] border border-dashed rounded-sm px-4 py-5",
                "text-white/65 hover:text-white text-sm font-semibold",
                "transition-colors min-h-16",
                resumeError
                  ? "border-red-500/60 hover:border-red-500/80"
                  : "border-white/20 hover:border-red-600/50"
              )}
            >
              <Paperclip className="h-4 w-4 text-red-400" aria-hidden="true" />
              Choose a file or drop here
            </button>
          )}
          {resumeError && (
            <p role="alert" className="text-red-400 text-xs mt-1.5">
              {resumeError}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="lg:col-span-2">
          <button
            type="submit"
            disabled={submitState === "loading"}
            className={cn(
              "w-full lg:w-auto inline-flex items-center justify-center gap-2",
              "bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide uppercase",
              "px-10 py-4 rounded-sm border border-red-500/40 min-h-14 transition-colors",
              "disabled:opacity-60 disabled:cursor-not-allowed"
            )}
          >
            {submitState === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Submitting…
              </>
            ) : (
              "Submit Application"
            )}
          </button>
          <p className="text-white/40 text-xs mt-3 font-mono">
            Fields marked <span className="text-red-500">*</span> are required.
            We respond to every application.
          </p>
          <p className="text-white/45 text-[11px] mt-3 leading-relaxed max-w-2xl">
            By submitting this application, you agree to be contacted by
            S.W.A.T. Plumbing LLC by phone, text, or email regarding your
            application. Message and data rates may apply; reply STOP to opt
            out. See our{" "}
            <Link
              href="/privacy-policy"
              className="text-white/70 hover:text-red-400 underline underline-offset-2 transition-colors"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms-of-service"
              className="text-white/70 hover:text-red-400 underline underline-offset-2 transition-colors"
            >
              Terms of Service
            </Link>{" "}
            for details on how we handle your information.
          </p>
        </div>
      </div>
    </form>
  )
}

/* ------------------------------------------------------------------ */
/* Field — shared label/error wrapper                                   */
/* ------------------------------------------------------------------ */
function Field({
  id,
  label,
  required,
  optional,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  optional?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-mono tracking-[0.18em] uppercase text-white/75 font-semibold"
      >
        {label}{" "}
        {required && <span className="text-red-500">*</span>}
        {optional && (
          <span className="text-white/40 normal-case tracking-normal text-[10px]">
            optional
          </span>
        )}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-red-400 text-xs mt-0.5">
          {error}
        </p>
      )}
    </div>
  )
}

function inputCls(invalid: boolean) {
  return cn(
    "bg-[#0a0c0e] text-white text-base placeholder:text-white/40",
    "border rounded-sm px-4 min-h-12",
    "focus:outline-none focus:ring-2 focus:ring-red-500/60 focus:border-red-500/60",
    "transition-colors",
    invalid
      ? "border-red-500/60"
      : "border-white/15 hover:border-white/25"
  )
}
