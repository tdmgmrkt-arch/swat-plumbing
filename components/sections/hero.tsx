import Link from "next/link"
import { Phone, CalendarDays, Clock, Home, MapPin, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"
import GoogleRatingBadge from "@/components/site/google-rating-badge"

const trustBadges = [
  { icon: Clock, label: "24/7 Emergency Service" },
  { icon: Home, label: "Family Owned" },
  { icon: CheckCircle, label: "Financing Available" },
  { icon: MapPin, label: "Aledo & Fort Worth" },
]

export default async function Hero() {
  return (
    <>
      {/*
        Preload the hero poster at high priority — Next.js hoists this
        <link> tag into the document head. Browser starts fetching the
        poster alongside the HTML download instead of after parse, which
        shaves ~500-1000ms off LCP. fetchPriority="high" tells the
        browser this is more important than other below-fold assets.
      */}
      <link
        rel="preload"
        as="image"
        href="/hero-poster.webp"
        type="image/webp"
        fetchPriority="high"
      />

      <section
        className="relative min-h-[70vh] flex flex-col justify-end lg:justify-center overflow-hidden bg-[#080a0c]"
        aria-label="Hero"
      >
      {/* Background video — self-hosted, full-bleed, cover-scaled.
          Poster paints instantly (104 KB WebP) so LCP fires on the poster,
          not the video. preload="none" prevents aggressive video prefetch on
          mobile/cellular; the browser starts downloading when autoplay kicks in. */}
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/hero-poster.webp"
        aria-hidden="true"
      >
        <source src="/montage.webm" type="video/webm" />
      </video>

      {/* Dark overlay — keeps headline legible, lets video show on the right.
          Left third runs nearly opaque so the red headline dominates over the
          bright SWAT van behind it. */}
      <div
        className="absolute inset-0 bg-linear-to-r from-[#080a0c] via-[#080a0c]/90 to-[#080a0c]/60 lg:from-[#080a0c] lg:via-[#080a0c]/80 lg:to-[#080a0c]/35"
        aria-hidden="true"
      />

      {/* Tactical grid texture (subtle, over video) */}
      <div className="absolute inset-0 tactical-grid opacity-20 mix-blend-overlay" aria-hidden="true" />

      {/* Top vignette */}
      <div
        className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-[#080a0c] to-transparent"
        aria-hidden="true"
      />

      {/* Tactical corner marks */}
      <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-red-600/60" aria-hidden="true" />
      <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-red-600/60" aria-hidden="true" />

      {/* Red accent vertical line */}
      <div
        className="absolute left-0 top-0 h-full w-0.75 bg-linear-to-b from-transparent via-red-600/40 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-6 pb-16 lg:pb-0 pt-24 lg:pt-0">
        <div className="max-w-2xl">

          {/* Tactical label */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-red-400 font-mono">
                On Call Now
              </span>
            </div>
            <div className="h-px flex-1 max-w-16 bg-red-600/30" />
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.02] tracking-tight mb-5">
            Precision
            <br />
            Plumbing.
            <br />
            <span className="text-red-500">Deployed Fast.</span>
          </h1>

          {/* Supporting copy */}
          <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            24/7 emergency plumbing across Aledo, Fort Worth, and surrounding North Texas
            communities. Upfront pricing. Rapid dispatch. No surprises.
          </p>

          {/* Google rating — live data via Places API, falls back to siteConfig values */}
          <div className="mb-7">
            <GoogleRatingBadge />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link
              href="/schedule"
              className={cn(
                "inline-flex items-center justify-center gap-2",
                "bg-red-600 hover:bg-red-700 text-white font-bold",
                "px-7 py-4 rounded-lg text-base border border-red-500/50",
                "min-h-[52px] transition-colors"
              )}
            >
              <CalendarDays className="h-5 w-5" aria-hidden="true" />
              Schedule Online
            </Link>
            <Link
              href={siteConfig.phone.primary_tel}
              className={cn(
                "inline-flex items-center justify-center gap-2",
                "border border-white/25 text-white bg-transparent hover:bg-white/8 hover:border-white/40",
                "font-semibold px-7 py-4 rounded-lg text-base",
                "min-h-[52px] transition-colors"
              )}
              aria-label={`Call S.W.A.T. Plumbing at ${siteConfig.phone.primary}`}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {siteConfig.phone.primary}
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded px-2.5 py-1.5 text-white/70 text-xs font-medium backdrop-blur-sm"
              >
                <Icon className="h-3.5 w-3.5 text-red-400 shrink-0" aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#080a0c] to-transparent z-10"
        aria-hidden="true"
      />
      </section>
    </>
  )
}
