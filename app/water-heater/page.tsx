import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Phone,
  CalendarDays,
  Zap,
  Flame,
  ShieldCheck,
  Clock,
  DollarSign,
  Award,
  Check,
  X,
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

const HUB_HREF = "/water-heater"
const CANONICAL = canonicalUrl(HUB_HREF)

export const metadata: Metadata = {
  title: "Water Heater Services — Aledo & Fort Worth, TX",
  description:
    "Tank and tankless water heater installation, repair, and replacement across Aledo & Fort Worth. Permits pulled, brand-agnostic, code-compliant. Same-day swaps available.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Water Heater Services — Aledo & Fort Worth, TX | S.W.A.T. Plumbing",
    description:
      "Tank and tankless water heater installation, repair, and replacement across Aledo & Fort Worth.",
    siteName: siteConfig.name,
    images: defaultOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Heater Services — Aledo & Fort Worth, TX",
    description:
      "Tank and tankless install + replacement. Brand-agnostic, permitted, same-day swaps available.",
    images: defaultTwitterImages,
  },
}

// Tank vs Tankless comparison rows — the meat of the hub since only 2 services
const comparison = [
  {
    label: "Hot Water Supply",
    tank: "Limited by tank size (40–75 gal)",
    tankless: "Endless on-demand hot water",
    tanklessWins: true,
  },
  {
    label: "Upfront Cost",
    tank: "$1,800 – $2,800 installed",
    tankless: "$4,500 – $7,500 installed",
    tanklessWins: false,
  },
  {
    label: "Operating Cost",
    tank: "Higher — heats and re-heats stored water 24/7",
    tankless: "20–35% lower — heats only on demand",
    tanklessWins: true,
  },
  {
    label: "Lifespan (North Texas)",
    tank: "8–12 years (gas), 10–15 (electric)",
    tankless: "20+ years with annual descaling",
    tanklessWins: true,
  },
  {
    label: "Footprint",
    tank: "Tall floor unit, 2'×2' minimum",
    tankless: "Wall-mounted, 1/4 the space",
    tanklessWins: true,
  },
  {
    label: "Recovery After Heavy Use",
    tank: "30–60 minutes to recover full tank",
    tankless: "Instant — no recovery needed",
    tanklessWins: true,
  },
  {
    label: "Install Complexity",
    tank: "Direct swap, same-day common",
    tankless: "Gas line upsize, venting, condensate plan",
    tanklessWins: false,
  },
  {
    label: "Maintenance Demand",
    tank: "Annual flush + 5-year anode check",
    tankless: "Annual descaling (critical in hard water)",
    tanklessWins: false,
  },
] as const

const pillars = [
  {
    icon: Zap,
    title: "Same-Day Swaps",
    bullets: ["Standard tanks on truck", "Most replacements 4–6 hours", "Hot water restored same day"],
    primary: true,
  },
  {
    icon: ShieldCheck,
    title: "Permits + Sign-Off",
    bullets: ["City permit pulled", "T&P, expansion tank, vent to code", "Inspection included"],
  },
  {
    icon: Award,
    title: "Brand-Agnostic",
    bullets: ["Rinnai, Navien, Rheem, A.O. Smith", "Recommendation by warranty + reliability", "No installer-rebate pushing"],
  },
] as const

const faqs = [
  {
    question:
      "Should I replace my tank water heater with another tank or upgrade to tankless?",
    answer:
      "Honest answer: depends on the household. A tank-to-tank swap is faster, cheaper, and a known quantity. Tankless is the upgrade if you want unlimited hot water, lower long-term operating costs, smaller footprint, or longer service life (20+ years vs 8–12 for tanks). For most homes staying in place 7+ years, tankless pays back. For shorter ownership horizons or low-demand homes, tank is the smarter financial call. We'll be honest about your specific case.",
  },
  {
    question:
      "How long does a water heater installation take in Aledo or Fort Worth?",
    answer:
      "A standard same-unit tank replacement runs 4–6 hours from shut-off to hot water restored. A tank-to-tankless conversion is typically one full day on site, with hot water restored before we leave. Tankless-replacing-tankless installs run 5–7 hours. Fuel-type changes, venting upgrades, or relocations add time — we give a realistic estimate before approval.",
  },
  {
    question:
      "Do I need a water softener with a tankless water heater?",
    answer:
      "Strong recommendation in North Texas. Hardness in Aledo, Weatherford, and unincorporated areas runs 10–15 grains per gallon — enough to scale tankless heat exchangers within 12–18 months without treatment. Manufacturers void warranties on scale-damaged heat exchangers. A whole-house softener pays for itself in tankless longevity. We test and discuss before committing.",
  },
  {
    question:
      "What size water heater do I need for my home?",
    answer:
      "Tank rule of thumb: 40-gallon for 1–2 person households, 50-gallon for 2–4 person, 75-gallon for 4+ or homes with jet tubs or multi-head showers. Tankless sizing is by GPM (gallons per minute) at peak simultaneous use — a 9 GPM unit handles two showers + a sink simultaneously in North Texas climates. The right answer depends on simultaneous-use patterns; we'll ask the right questions before recommending.",
  },
  {
    question:
      "How long does a water heater last in North Texas?",
    answer:
      "Standard residential tanks: 8–12 years for gas, 10–15 years for electric. North Texas water chemistry (moderate-to-high hardness, varying chloride) shortens tank lifespan compared to softer-water regions. Annual sediment flushes and anode rod inspection at year 5 can stretch lifespan considerably. Tankless heaters last 20+ years with annual descaling and softened water. We flag unit age on every maintenance visit so replacement can be planned.",
  },
] as const

export default function WaterHeaterHubPage() {
  const services = [
    servicesConfig["tankless-water-heaters"],
    servicesConfig["tank-heater-installation"],
  ].filter((s): s is NonNullable<typeof s> => Boolean(s))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            categoryHubSchema({
              href: HUB_HREF,
              name: "Water Heater Services",
              description:
                "Tank and tankless water heater installation, repair, and replacement across Aledo, Fort Worth, and surrounding North Texas communities.",
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
          __html: JSON.stringify(hubBreadcrumbSchema("Water Heaters", HUB_HREF)),
        }}
      />

      <UtilityBar />
      <SiteHeader />

      <main id="main-content">
        <PageBreadcrumb current="Water Heaters" />

        {/* HERO */}
        <section
          className="relative isolate bg-[#080a0c] pt-16 pb-20 lg:pt-24 lg:pb-24 overflow-hidden"
          aria-labelledby="hub-heading"
        >
          <Image
            src="/hero-images/hero-water-heater.webp"
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
            <TacticalLabel>Water Heater Services</TacticalLabel>
            <AccentLine />

            <h1
              id="hub-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.04] mb-6 max-w-4xl"
            >
              Hot Water.
              <br />
              <span className="text-red-500">Installed Right.</span>
            </h1>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mb-9">
              Tank or tankless, replacement or first install — S.W.A.T. Plumbing
              handles the sizing, the gas line, the venting, the permit, and the
              inspection. Standard tank swaps complete same-day; tankless
              conversions inside one full day.
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

            <div className="flex flex-wrap gap-2" role="list">
              {[
                { icon: Clock, label: "Same-Day Tank Swaps" },
                { icon: Flame, label: "Tank & Tankless" },
                { icon: ShieldCheck, label: "Permits Pulled" },
                { icon: Award, label: "Brand-Agnostic" },
                { icon: DollarSign, label: "Upfront Pricing" },
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

        {/* SERVICE CARDS */}
        <section
          className="relative bg-[#0e1012] border-y border-white/8 py-20 lg:py-24 overflow-hidden"
          aria-labelledby="services-grid-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-20 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
            <div className="mb-12 max-w-2xl">
              <TacticalLabel>Choose Your System</TacticalLabel>
              <AccentLine />
              <h2
                id="services-grid-heading"
                className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight"
              >
                Tankless or tank.
                <br />
                <span className="text-red-500">Both done right.</span>
              </h2>
            </div>

            <ul role="list" className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
              {services.map((cfg, idx) => (
                <li key={cfg.slug}>
                  <HubServiceCard cfg={cfg} primary={idx === 0} index={idx + 1} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TANK VS TANKLESS COMPARISON */}
        <section
          className="relative bg-[#080a0c] py-20 lg:py-24 overflow-hidden"
          aria-labelledby="comparison-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-30 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute right-0 inset-y-0 w-0.75 bg-linear-to-b from-transparent via-red-600 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-5xl mx-auto px-5 sm:px-6">
            <div className="mb-10 max-w-2xl">
              <TacticalLabel>Side-By-Side</TacticalLabel>
              <AccentLine />
              <h2
                id="comparison-heading"
                className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight"
              >
                Tank vs Tankless.
                <br />
                <span className="text-red-500">Honest tradeoffs.</span>
              </h2>
              <p className="mt-4 text-white/55 text-base leading-relaxed">
                No sales spin. The decision depends on your household,
                ownership horizon, and budget — here&apos;s what each system
                actually costs and delivers.
              </p>
            </div>

            <div className="bg-[#0e1012] border border-white/10 rounded-sm overflow-hidden">
              {/* Header row */}
              <div className="grid grid-cols-[1.2fr_1fr_1fr] sm:grid-cols-[1.4fr_1fr_1fr] border-b border-white/10 bg-[#0a0c0e]">
                <div className="px-4 sm:px-6 py-4">
                  <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/45 font-mono">
                    Category
                  </span>
                </div>
                <div className="px-3 sm:px-6 py-4 border-l border-white/8">
                  <span className="text-xs sm:text-sm font-black text-white tracking-tight uppercase">
                    Tank
                  </span>
                </div>
                <div className="px-3 sm:px-6 py-4 border-l border-white/8 bg-red-600/8">
                  <span className="text-xs sm:text-sm font-black text-red-300 tracking-tight uppercase">
                    Tankless
                  </span>
                </div>
              </div>

              {/* Rows */}
              {comparison.map((row, idx) => (
                <div
                  key={row.label}
                  className={cn(
                    "grid grid-cols-[1.2fr_1fr_1fr] sm:grid-cols-[1.4fr_1fr_1fr]",
                    idx < comparison.length - 1 && "border-b border-white/8"
                  )}
                >
                  <div className="px-4 sm:px-6 py-4 flex items-center">
                    <span className="text-white/80 text-xs sm:text-sm font-semibold">
                      {row.label}
                    </span>
                  </div>
                  <div className="px-3 sm:px-6 py-4 border-l border-white/8 flex items-start gap-2">
                    {!row.tanklessWins && (
                      <Check
                        className="h-3.5 w-3.5 text-red-500 shrink-0 mt-0.5"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                    )}
                    {row.tanklessWins && (
                      <X
                        className="h-3.5 w-3.5 text-white/25 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                    )}
                    <span className="text-white/65 text-xs leading-relaxed">
                      {row.tank}
                    </span>
                  </div>
                  <div className="px-3 sm:px-6 py-4 border-l border-white/8 bg-red-600/4 flex items-start gap-2">
                    {row.tanklessWins && (
                      <Check
                        className="h-3.5 w-3.5 text-red-500 shrink-0 mt-0.5"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                    )}
                    {!row.tanklessWins && (
                      <X
                        className="h-3.5 w-3.5 text-white/25 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                    )}
                    <span className="text-white/65 text-xs leading-relaxed">
                      {row.tankless}
                    </span>
                  </div>
                </div>
              ))}
            </div>
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
                Heater install
                <br />
                <span className="text-red-500">done the right way.</span>
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
          categoryName="Water Heater Services"
          categorySlug="water-heater"
        />

        <FinalCta />
      </main>

      <SiteFooter />
      <MobileCtaBar />
      <div className="h-14 lg:hidden" aria-hidden="true" />
    </>
  )
}
