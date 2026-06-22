import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Phone,
  CalendarDays,
  Zap,
  DollarSign,
  Award,
  Sparkles,
  ShieldCheck,
  Clock,
  AlertTriangle,
} from "lucide-react"

import { siteConfig } from "@/lib/site-config"
import { cn, canonicalUrl } from "@/lib/utils"
import { TacticalLabel, AccentLine } from "@/components/ui/tactical-panel"
import { servicesConfig } from "@/lib/services-config"
import { categoryHubSchema, hubBreadcrumbSchema } from "@/lib/schema"

import UtilityBar from "@/components/site/utility-bar"
import SiteHeader from "@/components/site/site-header"
import SiteFooter from "@/components/site/site-footer"
import MobileCtaBar from "@/components/site/mobile-cta-bar"
import FinalCta from "@/components/sections/final-cta"
import HubServiceCard from "@/components/sections/hub/hub-service-card"
import HubReviews from "@/components/sections/hub/hub-reviews"
import PageBreadcrumb from "@/components/site/page-breadcrumb"

const HUB_HREF = "/plumbing"
const CANONICAL = canonicalUrl(HUB_HREF)

export const metadata: Metadata = {
  title: "Plumbing Services — Aledo & Fort Worth, TX | S.W.A.T. Plumbing",
  description:
    "Full-scope plumbing services across Aledo, Fort Worth, and 49 North Texas communities. Emergency, drain & sewer, repairs, installations, and maintenance. Licensed, insured, 24/7.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Plumbing Services — Aledo & Fort Worth, TX | S.W.A.T. Plumbing",
    description:
      "Full-scope plumbing services across Aledo & Fort Worth. Emergency, drain & sewer, repairs, installations, maintenance.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Plumbing Services — Aledo & Fort Worth, TX",
    description:
      "Full-scope plumbing across 49 North Texas communities. Licensed, insured, 24/7.",
  },
}

// Service clusters — 22 plumbing services organized by intent for scannability
const clusters = [
  {
    label: "Emergency & Repairs",
    description:
      "When water is moving where it shouldn't — burst pipes, slab leaks, gas line failures.",
    slugs: [
      "emergency-plumbers",
      "plumbing-leak-repairs",
      "slab-leak",
      "gas-line-repair",
      "water-line-repairs",
      "toilet-repair",
    ],
    primarySlug: "emergency-plumbers",
  },
  {
    label: "Drain & Sewer",
    description:
      "Clog clearing, camera-confirmed diagnosis, and trenchless options for sewer line failures.",
    slugs: [
      "clogged-drain",
      "sewer-cleaning",
      "hydro-jetting",
      "sewer-camera-inspections",
      "sewer-line-repairs",
      "trenchless-repair",
    ],
  },
  {
    label: "Installation & Major Work",
    description:
      "Repipes, main lines, fixtures, and the heavy lifts that need a licensed master plumber.",
    slugs: [
      "main-water-line-repair",
      "whole-house-repiping",
      "plumbing-tunneling",
      "plumbing-fixtures",
      "garbage-disposals",
    ],
  },
  {
    label: "Specialty & Maintenance",
    description:
      "Pumps, annual maintenance, commercial accounts, and the everyday residential plumbing every home needs.",
    slugs: [
      "plumbing-pumps",
      "plumbing-maintenance",
      "commercial-plumbers",
      "residential-plumbing",
      "running-water",
    ],
  },
] as const

const pillars = [
  {
    icon: Zap,
    title: "Rapid Response",
    bullets: ["24/7 dispatch", "Under 60-min arrival", "Live dispatcher, no answering service"],
    primary: true,
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    bullets: ["Flat-rate written estimates", "Approved before work starts", "No after-hours markup"],
  },
  {
    icon: Award,
    title: "Licensed Master Plumber",
    bullets: ["Texas state-licensed", "Master plumber on permitted work", "Liability + worker's comp insured"],
  },
  {
    icon: Sparkles,
    title: "Clean Execution",
    bullets: ["Drop cloths + floor protection", "Old fixture haul-off included", "Full cleanup before we leave"],
  },
] as const

const faqs = [
  {
    question:
      "What plumbing services does S.W.A.T. Plumbing offer in Aledo and Fort Worth?",
    answer:
      "Full-scope residential and light-commercial plumbing — emergency repair, leak detection, drain and sewer service, gas line work, fixture install, whole-house repipe, slab leak, water heater install and replacement, and water quality systems. 22 individual plumbing service pages cover the specific scopes, plus dedicated water heater and water quality categories. If it carries water, waste, or gas in your home, it's in scope.",
  },
  {
    question:
      "Are S.W.A.T. Plumbing's technicians licensed and insured in Texas?",
    answer:
      "Yes. Every permitted job carries a Texas-licensed master plumber, supported by journeyman and apprentice technicians as appropriate. The company carries full general liability insurance and worker's compensation coverage. License and insurance documentation is available on request, and the master plumber license number is on every permit we pull.",
  },
  {
    question:
      "Do you respond to plumbing emergencies after hours and on weekends?",
    answer:
      "Yes — 24 hours a day, 365 days a year. Live dispatcher picks up at any hour, a licensed plumber rolls within minutes, and the target arrival is under 60 minutes from call across all 49 service communities. There is no after-hours markup on emergency calls; the rate at 2 a.m. is the same as the rate at 2 p.m.",
  },
  {
    question:
      "How does S.W.A.T. Plumbing price plumbing service calls?",
    answer:
      "Flat-rate pricing with a written estimate before work begins. No hourly meter creep. The estimate covers parts, labor, permit (if needed), and any restoration coordination. You approve before we proceed. For larger projects (repipes, sewer replacement, water heater installs), financing options are presented during the estimate visit so you have full information.",
  },
  {
    question:
      "Which Tarrant and Parker County communities does S.W.A.T. Plumbing serve?",
    answer:
      "49 North Texas communities across Tarrant, Parker, Denton, and Johnson counties — Aledo, Fort Worth, Arlington, Weatherford, Mansfield, Keller, Southlake, Grapevine, Bedford, Hurst, Euless, North Richland Hills, and many more. Two dispatch hubs (Aledo and Fort Worth) cut drive time across the full service area. Full city list is on the Areas Served page.",
  },
] as const

export default function PlumbingHubPage() {
  // Resolve every service from the registry (filter out unfound, preserve order)
  const allServices = clusters.flatMap((c) =>
    c.slugs
      .map((slug) => servicesConfig[slug])
      .filter((s): s is NonNullable<typeof s> => Boolean(s))
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            categoryHubSchema({
              href: HUB_HREF,
              name: "Plumbing Services",
              description:
                "Full-scope plumbing services across Aledo, Fort Worth, and 49 North Texas communities.",
              services: allServices.map((s) => ({ name: s.name, href: s.href })),
              faqs: faqs.map((f) => ({ ...f })),
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hubBreadcrumbSchema("Plumbing Services", HUB_HREF)),
        }}
      />

      <UtilityBar />
      <SiteHeader />

      <main id="main-content">
        <PageBreadcrumb current="Plumbing Services" />

        {/* ============================================================== */}
        {/* 1. HERO                                                         */}
        {/* ============================================================== */}
        <section
          className="relative isolate bg-[#080a0c] pt-16 pb-20 lg:pt-24 lg:pb-24 overflow-hidden"
          aria-labelledby="hub-heading"
        >
          <Image
            src="/hero-images/hero-plumbing.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center -z-10 opacity-55"
            priority
          />
          <div
            className="absolute inset-0 -z-10 bg-linear-to-r from-[#050608] from-0% via-[#080a0c]/85 via-50% to-[#080a0c]/60 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -z-10 bg-linear-to-t from-[#050608] via-transparent to-[#050608]/50 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 tactical-grid opacity-30 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute left-0 inset-y-0 w-1 bg-red-600"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_15%_45%,rgba(220,38,38,0.09),transparent)] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-red-600/30 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-red-600/30 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
            <TacticalLabel>All Plumbing Services</TacticalLabel>
            <AccentLine />

            <h1
              id="hub-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.04] mb-6 max-w-4xl"
            >
              Full-Scope Plumbing.
              <br />
              <span className="text-red-500">One Crew. One Standard.</span>
            </h1>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mb-9">
              From a 2 a.m. burst pipe to a planned whole-house repipe,
              S.W.A.T. Plumbing handles it. {allServices.length} dedicated
              service scopes across emergency, diagnostics, drain & sewer,
              installation, and maintenance — every job done by a Texas-licensed
              crew with upfront pricing.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-9">
              <Link
                href="/schedule"
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide uppercase",
                  "px-7 py-3.5 rounded-sm border border-red-500/40 min-h-12 transition-colors"
                )}
              >
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Schedule Service
              </Link>
              <Link
                href={siteConfig.phone.primary_tel}
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "border border-white/25 text-white bg-transparent hover:bg-white/8 hover:border-white/40",
                  "font-semibold text-sm tracking-wide uppercase",
                  "px-7 py-3.5 rounded-sm min-h-12 transition-colors"
                )}
                aria-label={`Call S.W.A.T. Plumbing at ${siteConfig.phone.primary}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {siteConfig.phone.primary}
              </Link>
            </div>

            {/* Hero trust strip */}
            <div className="flex flex-wrap gap-2" role="list">
              {[
                { icon: Clock, label: "24/7 Dispatch" },
                { icon: ShieldCheck, label: "Licensed & Insured" },
                { icon: AlertTriangle, label: "<60-Min Arrival" },
                { icon: DollarSign, label: "Upfront Pricing" },
                { icon: Award, label: "Family Owned" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  role="listitem"
                  className="flex items-center gap-1.5 bg-white/4 border border-white/10 rounded-sm px-3 py-1.5 text-white/65 text-xs font-medium"
                >
                  <Icon className="h-3.5 w-3.5 text-red-400 shrink-0" aria-hidden="true" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. SERVICE GRID — clustered                                      */}
        {/* ============================================================== */}
        <section
          className="relative bg-[#0e1012] border-y border-white/8 py-20 lg:py-24 overflow-hidden"
          aria-labelledby="services-grid-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-20 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
            <div className="mb-14 max-w-2xl">
              <TacticalLabel>Service Catalog</TacticalLabel>
              <AccentLine />
              <h2
                id="services-grid-heading"
                className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight"
              >
                Find the right
                <br />
                <span className="text-red-500">service unit.</span>
              </h2>
              <p className="mt-4 text-white/55 text-base leading-relaxed">
                {allServices.length} specialized service scopes, organized by
                what&apos;s actually going on at your house. Click any to see
                full scope, process, and FAQs.
              </p>
            </div>

            <div className="space-y-14">
              {clusters.map((cluster, clusterIdx) => {
                const services = cluster.slugs
                  .map((slug) => servicesConfig[slug])
                  .filter((s): s is NonNullable<typeof s> => Boolean(s))

                return (
                  <div key={cluster.label}>
                    {/* Cluster header */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-red-400 font-mono whitespace-nowrap">
                        Unit {String(clusterIdx + 1).padStart(2, "0")} ·{" "}
                        {cluster.label}
                      </span>
                      <span
                        className="h-px flex-1 bg-linear-to-r from-red-600/30 to-transparent"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed max-w-2xl mb-6">
                      {cluster.description}
                    </p>

                    <ul
                      role="list"
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
                    >
                      {services.map((cfg, idx) => (
                        <li key={cfg.slug}>
                          <HubServiceCard
                            cfg={cfg}
                            primary={
                              "primarySlug" in cluster &&
                              cluster.primarySlug === cfg.slug
                            }
                            index={idx + 1}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. WHY SWAT                                                     */}
        {/* ============================================================== */}
        <section
          className="relative bg-[#080a0c] py-20 lg:py-24 overflow-hidden"
          aria-labelledby="why-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-30 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_90%_50%,rgba(220,38,38,0.07),transparent)]"
            aria-hidden="true"
          />
          <div
            className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-red-600/40 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-red-600/40 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
            <div className="mb-12 max-w-xl">
              <TacticalLabel className="text-red-400">Why S.W.A.T.</TacticalLabel>
              <AccentLine />
              <h2
                id="why-heading"
                className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight"
              >
                Built Different.
                <br />
                <span className="text-red-500">Deployed Better.</span>
              </h2>
              <p className="mt-4 text-white/55 text-base leading-relaxed">
                Local plumbers are everywhere. A plumber you can trust with
                your home, at any hour, with a price you agreed to — that&apos;s
                a different standard.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-sm overflow-hidden border border-white/8">
              {pillars.map((pillar) => {
                const Icon = pillar.icon
                const isPrimary = "primary" in pillar && pillar.primary
                return (
                  <div
                    key={pillar.title}
                    className={cn(
                      "group relative p-6 lg:p-7 flex flex-col transition-colors min-h-60",
                      isPrimary
                        ? "bg-[#10141a] hover:bg-[#141921]"
                        : "bg-[#0a0c0e] hover:bg-[#0f1113]"
                    )}
                  >
                    {isPrimary && (
                      <div
                        className="absolute left-0 top-0 bottom-0 w-0.75 bg-red-600"
                        aria-hidden="true"
                      />
                    )}

                    <div
                      className={cn(
                        "w-11 h-11 flex items-center justify-center border rounded-sm mb-5 transition-colors",
                        isPrimary
                          ? "border-red-600/50 bg-red-600/10"
                          : "border-white/10 group-hover:border-red-600/40"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-5 w-5",
                          isPrimary ? "text-red-400" : "text-red-500"
                        )}
                        aria-hidden="true"
                      />
                    </div>

                    <h3
                      className={cn(
                        "font-black tracking-wider uppercase leading-tight mb-5",
                        isPrimary
                          ? "text-white text-lg lg:text-xl"
                          : "text-white/90 text-base lg:text-lg"
                      )}
                    >
                      {pillar.title}
                    </h3>

                    <ul role="list" className="space-y-2 mt-auto">
                      {pillar.bullets.map((b) => (
                        <li
                          key={b}
                          className={cn(
                            "flex items-center gap-2.5 text-sm font-medium leading-snug",
                            isPrimary ? "text-white/80" : "text-white/60"
                          )}
                        >
                          <span
                            className={cn(
                              "h-1 w-1 rounded-full shrink-0",
                              isPrimary ? "bg-red-500" : "bg-red-500/60"
                            )}
                            aria-hidden="true"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. HUB FAQ                                                      */}
        {/* ============================================================== */}
        <section
          className="relative bg-[#0e1012] border-y border-white/8 py-20 lg:py-24 overflow-hidden"
          aria-labelledby="hub-faq-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-20 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-3xl mx-auto px-5 sm:px-6">
            <TacticalLabel>Common Questions</TacticalLabel>
            <AccentLine />
            <h2
              id="hub-faq-heading"
              className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-10"
            >
              Answered before
              <br />
              <span className="text-red-500">you have to ask.</span>
            </h2>

            <div className="divide-y divide-white/8 border-y border-white/10">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group py-4">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none text-white text-base font-semibold hover:text-red-400 transition-colors">
                    <span>{faq.question}</span>
                    <span
                      className="text-red-500 text-xl leading-none mt-0.5 group-open:rotate-45 transition-transform shrink-0"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="text-white/65 text-sm leading-loose pt-3">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. HUB REVIEWS — compact Google badge + 1 featured quote        */}
        {/* ============================================================== */}
        <HubReviews
          categoryName="Plumbing Services"
          categorySlug="plumbing"
        />

        {/* ============================================================== */}
        {/* 6. FINAL CTA (reuse)                                            */}
        {/* ============================================================== */}
        <FinalCta />
      </main>

      <SiteFooter />
      <MobileCtaBar />
      <div className="h-14 lg:hidden" aria-hidden="true" />
    </>
  )
}
