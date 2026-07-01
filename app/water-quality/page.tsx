import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Phone,
  CalendarDays,
  Beaker,
  Droplets,
  ShieldCheck,
  Award,
  TestTube,
  Filter,
  Settings2,
  Sparkles,
} from "lucide-react"

import { siteConfig } from "@/lib/site-config"
import { cn, canonicalUrl } from "@/lib/utils"
import { defaultOgImages, defaultTwitterImages } from "@/lib/metadata"
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

const HUB_HREF = "/water-quality"
const CANONICAL = canonicalUrl(HUB_HREF)

export const metadata: Metadata = {
  title: "Water Quality Services — Aledo & Fort Worth, TX",
  description:
    "Whole-house water filtration, softening, reverse osmosis, and treatment across Aledo & Fort Worth. Free in-home water testing, designed against your actual results.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Water Quality Services — Aledo & Fort Worth, TX | S.W.A.T. Plumbing",
    description:
      "Whole-house filtration, softening, RO, and treatment across Aledo & Fort Worth. Free in-home water testing.",
    siteName: siteConfig.name,
    images: defaultOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Quality Services — Aledo & Fort Worth, TX",
    description:
      "Filtration, softening, RO, treatment. Free in-home water testing. Designed for your actual water.",
    images: defaultTwitterImages,
  },
}

// Treatment journey — the order most homes follow
const journey = [
  {
    step: "01",
    icon: TestTube,
    title: "Test",
    body:
      "Free in-home water test. Hardness, chlorine, iron, sulfur, pH, TDS — measured at your tap, not estimated by city average.",
  },
  {
    step: "02",
    icon: Settings2,
    title: "Soften",
    body:
      "Hardness in Aledo and Fort Worth runs 8–15 grains per gallon. Softening protects appliances, fixtures, and skin from the daily damage.",
  },
  {
    step: "03",
    icon: Filter,
    title: "Filter",
    body:
      "Whole-house carbon filtration removes chlorine, chloramine, organics, and sediment. Every tap in the house gets cleaner water.",
  },
  {
    step: "04",
    icon: Sparkles,
    title: "Polish",
    body:
      "Reverse osmosis at the kitchen sink for bottled-quality drinking water. The final stage for cooking, drinking, and ice.",
  },
] as const

const pillars = [
  {
    icon: TestTube,
    title: "Tested First",
    bullets: ["Free in-home water test", "Hardness, chlorine, TDS, iron measured", "System designed against actual results"],
    primary: true,
  },
  {
    icon: Beaker,
    title: "Full-Spectrum",
    bullets: ["Softening + carbon + RO + UV", "City water and well water systems", "Salt and salt-free options"],
  },
  {
    icon: Award,
    title: "Local Water Knowledge",
    bullets: ["Aledo, Fort Worth, Weatherford profiles known", "Parker & Tarrant County well patterns", "Recommendations grounded in local conditions"],
  },
] as const

const faqs = [
  {
    question:
      "Do I really need water treatment if my city water is already treated?",
    answer:
      "Depends on what's actually in your water. Municipal water in North Texas meets EPA safety standards but routinely contains chlorine or chloramine disinfectant, hardness (8–15 grains per gallon in most of Tarrant and Parker County), and varying levels of dissolved solids that affect taste, skin, and appliance longevity. A free water test answers the question honestly. Sometimes the answer is yes; sometimes a simpler point-of-use filter at the kitchen sink is enough.",
  },
  {
    question:
      "What's the difference between a water softener and a water filter?",
    answer:
      "A softener removes hardness (calcium and magnesium) by ion exchange — addresses scale, soap scum, and appliance wear. A filter removes other contaminants — chlorine, chloramine, sediment, iron, sulfur, organics — depending on the media. Most homes need both: the softener for hardness, the filter for everything else. They're complementary, not interchangeable. Reverse osmosis at the kitchen adds a third layer for drinking water.",
  },
  {
    question:
      "How much does a complete water treatment system cost in Aledo or Fort Worth?",
    answer:
      "A typical city-water home needing softening plus carbon filtration runs $2,800–$5,500 installed. Adding reverse osmosis at the kitchen sink adds $700–$1,400. Well-water systems with iron, sulfur, and UV typically run $4,500–$8,500. S.W.A.T. Plumbing quotes flat-rate after the water test so you see exactly what's being treated and why — no upselling against contaminants you don't actually have.",
  },
  {
    question:
      "How hard is the water in Aledo and Fort Worth?",
    answer:
      "Aledo water typically tests at 10–13 grains per gallon. Fort Worth varies by district but averages 8–12 GPG. Weatherford and Parker County run 10–15 GPG. Wells in unincorporated areas vary widely. 'Hard' starts at 7 GPG; 'very hard' starts at 10 GPG. We test your specific tap before sizing a softener — there's enough variation neighborhood-to-neighborhood that averages aren't precise enough.",
  },
  {
    question:
      "Will softened water be safe to drink and cook with?",
    answer:
      "Yes. Softened water is safe for drinking, cooking, and bathing — the softening process exchanges calcium and magnesium for sodium, adding 30–80 mg of sodium per glass depending on your starting hardness. If low-sodium intake matters for medical reasons, we route the kitchen cold line off the softener or install a reverse-osmosis system at the kitchen sink for sodium-free drinking water.",
  },
] as const

export default function WaterQualityHubPage() {
  const services = [
    servicesConfig["residential-water-treatment"],
    servicesConfig["water-softener"],
    servicesConfig["water-filtration"],
    servicesConfig["reverse-osmosis"],
  ].filter((s): s is NonNullable<typeof s> => Boolean(s))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            categoryHubSchema({
              href: HUB_HREF,
              name: "Water Quality Services",
              description:
                "Whole-house water filtration, softening, reverse osmosis, and treatment across Aledo, Fort Worth, and surrounding North Texas communities.",
              services: services.map((s) => ({ name: s.name, href: s.href })),
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
          __html: JSON.stringify(hubBreadcrumbSchema("Water Quality", HUB_HREF)),
        }}
      />

      <UtilityBar />
      <SiteHeader />

      <main id="main-content">
        <PageBreadcrumb current="Water Quality" />

        {/* HERO */}
        <section
          className="relative isolate bg-[#080a0c] pt-16 pb-20 lg:pt-24 lg:pb-24 overflow-hidden"
          aria-labelledby="hub-heading"
        >
          <Image
            src="/hero-images/hero-water-quality.webp"
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
            <TacticalLabel>Water Quality Services</TacticalLabel>
            <AccentLine />

            <h1
              id="hub-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.04] mb-6 max-w-4xl"
            >
              Clean Water.
              <br />
              <span className="text-red-500">Every Tap.</span>
            </h1>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mb-9">
              North Texas water is hard, chlorinated, and varies by neighborhood.
              S.W.A.T. Plumbing tests your specific water, designs the right
              treatment system, and installs it cleanly — softening, filtration,
              reverse osmosis, and UV when the test calls for it.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-9">
              <Link
                href="/contact-us"
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide uppercase",
                  "px-7 py-3.5 rounded-sm border border-red-500/40 min-h-12 transition-colors"
                )}
              >
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Book Free Water Test
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

            <div className="flex flex-wrap gap-2" role="list">
              {[
                { icon: TestTube, label: "Free Water Testing" },
                { icon: Droplets, label: "Whole-House Systems" },
                { icon: ShieldCheck, label: "Licensed & Insured" },
                { icon: Award, label: "Local Water Expertise" },
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

        {/* TREATMENT JOURNEY */}
        <section
          className="relative bg-[#0e1012] border-y border-white/8 py-20 lg:py-24 overflow-hidden"
          aria-labelledby="journey-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-20 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
            <div className="mb-12 max-w-2xl">
              <TacticalLabel>Treatment Journey</TacticalLabel>
              <AccentLine />
              <h2
                id="journey-heading"
                className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight"
              >
                From your tap
                <br />
                <span className="text-red-500">to drinking-water clean.</span>
              </h2>
              <p className="mt-4 text-white/55 text-base leading-relaxed">
                Most North Texas homes follow this sequence. Test first.
                Soften hardness. Filter the rest. Polish what you drink.
                We&apos;ll tell you exactly which stages you actually need.
              </p>
            </div>

            <ol role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
              {journey.map((step) => {
                const Icon = step.icon
                return (
                  <li
                    key={step.step}
                    className="relative bg-[#0a0c0e] border border-white/10 rounded-sm p-6 lg:p-7"
                  >
                    <div
                      className="absolute top-3 right-3 text-[10px] font-mono text-white/30 tracking-wider"
                      aria-hidden="true"
                    >
                      {step.step}
                    </div>
                    <div className="w-11 h-11 flex items-center justify-center bg-red-600/10 border border-red-600/30 rounded-sm mb-5">
                      <Icon className="h-5 w-5 text-red-400" aria-hidden="true" />
                    </div>
                    <h3 className="text-white text-lg font-black tracking-tight uppercase leading-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {step.body}
                    </p>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>

        {/* SERVICE CARDS */}
        <section
          className="relative bg-[#080a0c] py-20 lg:py-24 overflow-hidden"
          aria-labelledby="services-grid-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-30 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
            <div className="mb-12 max-w-2xl">
              <TacticalLabel>Service Catalog</TacticalLabel>
              <AccentLine />
              <h2
                id="services-grid-heading"
                className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight"
              >
                Pick your treatment.
                <br />
                <span className="text-red-500">Or let us design it.</span>
              </h2>
            </div>

            <ul
              role="list"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5"
            >
              {services.map((cfg, idx) => (
                <li key={cfg.slug}>
                  <HubServiceCard cfg={cfg} primary={idx === 0} index={idx + 1} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHY SWAT */}
        <section
          className="relative bg-[#0e1012] border-y border-white/8 py-20 lg:py-24 overflow-hidden"
          aria-labelledby="why-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-20 pointer-events-none"
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
                Tested. Designed.
                <br />
                <span className="text-red-500">Installed once.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-sm overflow-hidden border border-white/8">
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
                        className={cn("h-5 w-5", isPrimary ? "text-red-400" : "text-red-500")}
                        aria-hidden="true"
                      />
                    </div>
                    <h3
                      className={cn(
                        "font-black tracking-wider uppercase leading-tight mb-5",
                        isPrimary ? "text-white text-lg lg:text-xl" : "text-white/90 text-base lg:text-lg"
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

        {/* FAQ */}
        <section
          className="relative bg-[#080a0c] py-20 lg:py-24 overflow-hidden"
          aria-labelledby="hub-faq-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-30 pointer-events-none"
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

        <HubReviews
          categoryName="Water Quality Services"
          categorySlug="water-quality"
        />

        <FinalCta />
      </main>

      <SiteFooter />
      <MobileCtaBar />
      <div className="h-14 lg:hidden" aria-hidden="true" />
    </>
  )
}
