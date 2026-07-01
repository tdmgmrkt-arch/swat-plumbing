import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Phone, Shield, Tag } from "lucide-react"

import { siteConfig } from "@/lib/site-config"
import { offers } from "@/lib/coupons"
import { couponCatalogSchema, couponBreadcrumbSchema } from "@/lib/schema"
import { cn, canonicalUrl } from "@/lib/utils"
import { defaultOgImages, defaultTwitterImages } from "@/lib/metadata"
import { TacticalLabel, AccentLine } from "@/components/ui/tactical-panel"

import UtilityBar from "@/components/site/utility-bar"
import SiteHeader from "@/components/site/site-header"
import PageBreadcrumb from "@/components/site/page-breadcrumb"
import SiteFooter from "@/components/site/site-footer"
import MobileCtaBar from "@/components/site/mobile-cta-bar"
import FinalCta from "@/components/sections/final-cta"

const CANONICAL = canonicalUrl("/coupons-rebates")

export const metadata: Metadata = {
  title: "Plumbing Coupons & Rebates",
  description:
    "Current plumbing coupons from S.W.A.T. Plumbing — save on water heaters, leak checks, drains, toilets, and more. Serving Aledo & Fort Worth, TX.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Plumbing Coupons & Rebates",
    description:
      "Current plumbing coupons from S.W.A.T. Plumbing — save on water heaters, leak checks, drains, toilets, and more.",
    siteName: siteConfig.name,
    images: defaultOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Plumbing Coupons & Rebates",
    description:
      "Current plumbing coupons from S.W.A.T. Plumbing — save on water heaters, leak checks, drains, toilets, and more.",
    images: defaultTwitterImages,
  },
}

// ─── Eligible branches — text only, no logo assets ───────────────────────────
const eligibleBranches = [
  "Army",
  "Navy",
  "Marines",
  "Air Force",
  "Fire Department",
  "Police Department",
] as const

// ─── Redemption steps ─────────────────────────────────────────────────────────
const redeemSteps = [
  {
    number: "01",
    label: "Contact",
    title: "Call or Schedule Online",
    description:
      "Reach us by phone or book through our online scheduler. Both routes go straight to dispatch — no queue, no voicemail roulette.",
  },
  {
    number: "02",
    label: "Activate",
    title: "Mention the Offer",
    description:
      "Tell us which coupon applies before work begins. One offer per household. Cannot be combined unless noted.",
  },
  {
    number: "03",
    label: "Save",
    title: "Deducted at Time of Service",
    description:
      "Savings come off your flat-rate invoice when the job is done. No rebate forms. No waiting.",
  },
] as const

export default function CouponsRebatesPage() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  })

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(couponCatalogSchema(offers)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(couponBreadcrumbSchema()),
        }}
      />

      <UtilityBar />
      <SiteHeader />

      <main id="main-content">
        <PageBreadcrumb current="Coupons & Rebates" />

        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          className="relative bg-[#080a0c] pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden"
          aria-labelledby="coupons-hero-heading"
        >
          {/* Tactical grid */}
          <div className="absolute inset-0 tactical-grid opacity-25" aria-hidden="true" />

          {/* Red left accent stripe */}
          <div className="absolute left-0 inset-y-0 w-0.75 bg-linear-to-b from-transparent via-red-600/60 to-transparent" aria-hidden="true" />

          {/* Corner marks */}
          <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-red-600/50" aria-hidden="true" />
          <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-red-600/30" aria-hidden="true" />
          <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-red-600/30" aria-hidden="true" />

          {/* Center glow */}
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(220,38,38,0.07),transparent)]"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
            {/* Label row */}
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-red-400 font-mono">
                Payment &amp; Offers
              </span>
            </div>

            <h1
              id="coupons-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-5"
            >
              Coupons &amp; Rebates
              <br />
              <span className="text-red-500">Worth Keeping.</span>
            </h1>

            <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-xl mb-10">
              Real savings on the services you need most. Mention the offer before
              work begins — no coupons to print, no codes to remember.
            </p>

            {/* CTA cluster */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact-us"
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "bg-red-600 hover:bg-red-700 text-white font-bold",
                  "px-7 py-4 rounded-sm text-sm tracking-wide uppercase border border-red-500/40",
                  "min-h-[52px] transition-colors"
                )}
              >
                <CalendarDays className="h-5 w-5" aria-hidden="true" />
                Schedule Online
              </Link>
              <Link
                href={siteConfig.phone.aled_tel}
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "border border-white/20 text-white bg-transparent hover:bg-white/6 hover:border-white/35",
                  "font-semibold px-7 py-4 rounded-sm text-sm tracking-wide uppercase",
                  "min-h-[52px] transition-colors"
                )}
                aria-label={`Call Aledo at ${siteConfig.phone.aledo}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Aledo {siteConfig.phone.aledo}
              </Link>
              <Link
                href={siteConfig.phone.fw_tel}
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "border border-white/20 text-white bg-transparent hover:bg-white/6 hover:border-white/35",
                  "font-semibold px-7 py-4 rounded-sm text-sm tracking-wide uppercase",
                  "min-h-[52px] transition-colors"
                )}
                aria-label={`Call Fort Worth at ${siteConfig.phone.fortWorth}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Fort Worth {siteConfig.phone.fortWorth}
              </Link>
            </div>
          </div>
        </section>

        {/* ── 2. UNIFIED OFFER GRID — Priority + all standard offers ──────── */}
        <section
          id="offers-grid"
          className="relative bg-[#080a0c] py-10 lg:py-14 overflow-hidden scroll-mt-20"
          aria-label="Active offers"
        >
          {/* Tactical grid */}
          <div className="absolute inset-0 tactical-grid opacity-25" aria-hidden="true" />

          {/* Subtle red glow behind priority card area */}
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_40%_70%_at_25%_30%,rgba(220,38,38,0.05),transparent)]"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
            <ul
              role="list"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
            >
              {offers.map((offer, idx) => {
                const isFeatured = "featured" in offer && offer.featured
                const isLast = idx === offers.length - 1
                return (
                  <li
                    key={offer.id}
                    id={offer.id}
                    className={cn(
                      // Priority card spans 2 cols on tablet+ for visual weight
                      isFeatured && "sm:col-span-2",
                      // Last std card spans 2 cols at lg to fill 4-col grid cleanly (10 cards → balanced corners)
                      !isFeatured && isLast && "lg:col-span-2"
                    )}
                  >
                    {isFeatured ? (
                      // PRIORITY CARD — always-lit red border, dashed treatment, shield + branches
                      <div className="relative h-full flex flex-col bg-[#13181c] border-2 border-dashed border-red-600/70 rounded-sm p-7 lg:p-8 shadow-[0_0_0_1px_rgba(220,38,38,0.15),0_8px_30px_-12px_rgba(220,38,38,0.35)]">
                        {/* Red command stripe */}
                        <div className="absolute left-0 top-0 bottom-0 w-0.75 bg-red-600 rounded-l-sm" aria-hidden="true" />

                        {/* Tactical corner marks */}
                        <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-red-600/70" aria-hidden="true" />
                        <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-red-600/70" aria-hidden="true" />

                        {/* Brand mark — top-right corner stamp */}
                        <Image
                          src="/swatdevlogo.webp"
                          alt=""
                          aria-hidden="true"
                          width={375}
                          height={322}
                          className="absolute top-5 right-5 lg:top-6 lg:right-6 h-11 lg:h-12 w-auto opacity-80 pointer-events-none"
                        />

                        {/* PRIORITY tag */}
                        <div className="inline-flex items-center gap-1.5 mb-5">
                          <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                          </span>
                          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-red-400 font-mono">
                            Priority Offer
                          </span>
                        </div>

                        {/* Shield + savings */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 flex items-center justify-center bg-red-600/10 border border-red-600/30 rounded-sm shrink-0">
                            <Shield className="h-5 w-5 text-red-400" aria-hidden="true" />
                          </div>
                          <span className="text-4xl lg:text-5xl font-black font-mono text-white leading-none tracking-tight">
                            {offer.savings}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-white/90 leading-snug mb-3">
                          {offer.title}
                        </h3>

                        {/* Accent line */}
                        <div className="h-px w-8 bg-red-600 mb-4" aria-hidden="true" />

                        {/* Details */}
                        <p className="text-white/60 text-sm leading-relaxed mb-5">
                          {offer.details}
                        </p>

                        {/* Eligible branches — pinned bottom */}
                        <div className="mt-auto pt-4 border-t border-white/8">
                          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 font-mono mb-2.5">
                            Eligible
                          </p>
                          <ul
                            role="list"
                            className="flex flex-wrap gap-1.5"
                            aria-label="Eligible service branches and departments"
                          >
                            {eligibleBranches.map((branch) => (
                              <li
                                key={branch}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/4 border border-white/8 rounded-sm text-white/70 text-[11px] font-semibold tracking-wide"
                              >
                                <span className="h-1 w-1 rounded-full bg-red-500 shrink-0" aria-hidden="true" />
                                {branch}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      // STANDARD CARD
                      <div className="group relative bg-[#0e1012] border-2 border-dashed border-white/25 rounded-sm p-7 lg:p-8 h-full flex flex-col transition-colors hover:border-red-600/55">

                        {/* Tactical corner marks */}
                        <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-red-600/35" aria-hidden="true" />
                        <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b-2 border-r-2 border-red-600/35" aria-hidden="true" />

                        {/* Brand mark — top-right corner stamp */}
                        <Image
                          src="/swatdevlogo.webp"
                          alt=""
                          aria-hidden="true"
                          width={375}
                          height={322}
                          className="absolute top-5 right-5 lg:top-6 lg:right-6 h-11 lg:h-12 w-auto opacity-70 pointer-events-none"
                        />

                        {/* Savings — large mono visual hook */}
                        <div className="mb-3">
                          <span className="text-4xl lg:text-5xl font-black font-mono text-white leading-none tracking-tight">
                            {offer.savings}
                          </span>
                        </div>

                        {/* Offer title */}
                        <h3 className="text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-white/85 leading-snug mb-3">
                          {offer.title}
                        </h3>

                        {/* Accent line */}
                        <div className="h-px w-8 bg-red-600 mb-4" aria-hidden="true" />

                        {/* Details / fine print */}
                        <p className="text-white/55 text-sm leading-relaxed flex-1">
                          {offer.details}
                        </p>

                        {/* Footer note */}
                        {"footerNote" in offer && offer.footerNote && (
                          <p className="mt-5 pt-4 border-t border-white/8 text-[11px] font-semibold tracking-[0.12em] uppercase text-red-400/80 font-mono">
                            {offer.footerNote}
                          </p>
                        )}
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>

            {/* Subfoot — offer count + active status */}
            <div className="mt-10 flex items-center gap-4">
              <span className="h-px flex-1 bg-white/6" aria-hidden="true" />
              <div className="inline-flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 font-mono">
                  {offers.length} offers active
                </span>
              </div>
              <span className="h-px flex-1 bg-white/6" aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* ── 4. HOW TO REDEEM — 3-step strip ─────────────────────────────── */}
        <section
          className="relative bg-[#0a0c0e] border-y border-white/8 py-16 lg:py-20 overflow-hidden"
          aria-labelledby="redeem-heading"
        >
          {/* Tactical grid */}
          <div className="absolute inset-0 tactical-grid opacity-35" aria-hidden="true" />

          {/* Right glow */}
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_85%_50%,rgba(220,38,38,0.06),transparent)]"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6">

            {/* Section header */}
            <div className="mb-12 lg:mb-14 max-w-xl">
              <TacticalLabel className="text-red-400">Redemption Protocol</TacticalLabel>
              <AccentLine />
              <h2
                id="redeem-heading"
                className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight"
              >
                How to Redeem
                <br />
                <span className="text-red-500">in Three Steps.</span>
              </h2>
            </div>

            {/* Steps */}
            <ol
              className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6"
              role="list"
              aria-label="Offer redemption steps"
            >
              {redeemSteps.map((step, idx) => (
                <li key={step.number} className="relative flex lg:flex-col gap-5 lg:gap-0">
                  {/* Connector on desktop */}
                  {idx < redeemSteps.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-9 left-[calc(100%_+_12px)] right-[-12px] h-px bg-red-600/20 z-0"
                      aria-hidden="true"
                    />
                  )}

                  <div
                    className={cn(
                      "relative border rounded-sm p-6 lg:p-7 flex-1 transition-colors",
                      idx === 0
                        ? "bg-[#13181c] border-red-600/35"
                        : "bg-[#0e1012] border-white/8"
                    )}
                  >
                    {/* Primary stripe on step 01 */}
                    {idx === 0 && (
                      <div
                        className="absolute left-0 top-0 bottom-0 w-0.75 bg-red-600 rounded-l-sm"
                        aria-hidden="true"
                      />
                    )}

                    {/* Corner marks */}
                    <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-red-600/40" aria-hidden="true" />
                    <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-red-600/40" aria-hidden="true" />

                    {/* Step number */}
                    <div className="flex items-baseline gap-0.5 mb-4">
                      <span className="text-5xl font-black font-mono text-white leading-none tracking-tight">
                        {step.number}
                      </span>
                      <span className="text-xl font-black font-mono text-red-500 leading-none">.</span>
                    </div>

                    {/* Unit label */}
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-red-400 font-mono mb-2">
                      {step.label}
                    </p>

                    {/* Title */}
                    <h3 className="text-white font-black text-base lg:text-lg tracking-wide uppercase leading-tight mb-3">
                      {step.title}
                    </h3>

                    {/* Divider */}
                    <div className="h-px w-8 bg-red-600 mb-4" aria-hidden="true" />

                    {/* Description */}
                    <p className="text-white/55 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Call pair below steps — this page is phone-conversion-driven */}
            <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={siteConfig.phone.aled_tel}
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "border border-white/20 text-white bg-white/4 hover:bg-white/8",
                  "font-semibold px-7 py-4 rounded-sm text-sm tracking-wide uppercase",
                  "min-h-[52px] transition-colors"
                )}
                aria-label={`Call our Aledo location at ${siteConfig.phone.aledo}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Aledo: {siteConfig.phone.aledo}
              </Link>
              <Link
                href={siteConfig.phone.fw_tel}
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "border border-white/20 text-white bg-white/4 hover:bg-white/8",
                  "font-semibold px-7 py-4 rounded-sm text-sm tracking-wide uppercase",
                  "min-h-[52px] transition-colors"
                )}
                aria-label={`Call our Fort Worth location at ${siteConfig.phone.fortWorth}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Fort Worth: {siteConfig.phone.fortWorth}
              </Link>
            </div>
          </div>
        </section>

        {/* ── 5. FINAL CTA ────────────────────────────────────────────────── */}
        <FinalCta />

        {/* Last updated — SEO signal */}
        <div className="bg-[#080a0c] border-t border-white/6 py-4">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 flex items-center gap-2">
            <Tag className="h-3 w-3 text-white/25 shrink-0" aria-hidden="true" />
            <p className="text-white/30 text-xs font-mono">
              Offers last updated: {lastUpdated}
            </p>
          </div>
        </div>

      </main>

      <SiteFooter />
      <MobileCtaBar />
      {/* Spacer so mobile CTA bar doesn't overlap footer */}
      <div className="h-14 lg:hidden" aria-hidden="true" />
    </>
  )
}
