"use client"

/**
 * Route-level error boundary.
 *
 * Catches uncaught client-side errors in any route below the root layout.
 * The root layout (header, footer, etc.) is still rendered around this —
 * for errors that take down the layout itself, see `app/global-error.tsx`.
 *
 * Must be a Client Component because it uses an error reset handler.
 */

import { useEffect } from "react"
import Link from "next/link"
import {
  Phone,
  Home,
  RefreshCcw,
  AlertOctagon,
  CalendarDays,
} from "lucide-react"

import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import { TacticalLabel, AccentLine } from "@/components/ui/tactical-panel"

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Surface uncaught errors to the browser console so devs (and any
    // future error-tracking integration like Sentry) can see them.
    // The `digest` is the production build's anonymized error fingerprint.
    console.error("[app/error]", error)
  }, [error])

  return (
    <section
      className="relative isolate bg-[#080a0c] overflow-hidden min-h-[70vh] flex items-center"
      aria-labelledby="error-heading"
    >
      <div
        className="absolute inset-0 -z-10 bg-linear-to-b from-[#050608] via-[#080a0c] to-[#0e1012] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_55%_at_50%_45%,rgba(220,38,38,0.15),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 tactical-grid opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute left-0 inset-y-0 w-1 bg-red-600 z-0"
        aria-hidden="true"
      />
      <div
        className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-red-600/50 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-red-600/50 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-4xl mx-auto px-5 sm:px-6 py-16 lg:py-24">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-red-600/15 border border-red-600/40 mb-5">
          <AlertOctagon
            className="h-3.5 w-3.5 text-red-400"
            aria-hidden="true"
          />
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-red-300 font-bold">
            System Error
          </span>
        </div>

        <TacticalLabel>Dispatch Interrupted</TacticalLabel>
        <AccentLine />

        <h1
          id="error-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.07] mb-5"
        >
          Something on this page broke.
        </h1>

        <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
          A technical fault interrupted this request. The crew has been
          notified. You can retry, head home, or call dispatch directly —
          the line is live 24/7 regardless of what the website does.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <button
            type="button"
            onClick={reset}
            className={cn(
              "inline-flex items-center justify-center gap-2",
              "bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide uppercase",
              "px-7 py-3.5 rounded-sm border border-red-500/40 min-h-12 transition-colors",
              "shadow-[0_8px_32px_-8px_rgba(220,38,38,0.5)]"
            )}
          >
            <RefreshCcw className="h-4 w-4" aria-hidden="true" />
            Retry
          </button>
          <Link
            href="/"
            className={cn(
              "inline-flex items-center justify-center gap-2",
              "border border-white/25 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40",
              "font-semibold text-sm tracking-wide uppercase",
              "px-7 py-3.5 rounded-sm min-h-12 transition-colors"
            )}
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Return to Base
          </Link>
          <Link
            href={siteConfig.phone.primary_tel}
            className={cn(
              "inline-flex items-center justify-center gap-2",
              "border border-white/15 text-white/85 bg-transparent hover:text-white hover:bg-white/5",
              "font-semibold text-sm tracking-wide uppercase",
              "px-7 py-3.5 rounded-sm min-h-12 transition-colors"
            )}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phone.primary}
          </Link>
        </div>

        {/* Schedule fallback — visible secondary path */}
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-1.5 text-white/55 hover:text-white text-xs font-mono tracking-wider transition-colors"
        >
          <CalendarDays className="h-3 w-3" aria-hidden="true" />
          Or schedule service online
        </Link>

        {/* Error digest — only in dev or when present (helps support route the issue) */}
        {error.digest && (
          <p className="mt-10 text-white/30 text-[10px] font-mono tracking-wider">
            Error ref: {error.digest}
          </p>
        )}
      </div>
    </section>
  )
}
