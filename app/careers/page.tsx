import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Truck,
  HeartPulse,
  CalendarCheck,
  GraduationCap,
  Users,
  DollarSign,
  ClipboardCheck,
  ChevronDown,
} from "lucide-react"

import { siteConfig } from "@/lib/site-config"
import { positions } from "@/lib/careers-data"
import { jobPostingSchema } from "@/lib/schema"
import { cn, canonicalUrl } from "@/lib/utils"
import { TacticalLabel, AccentLine } from "@/components/ui/tactical-panel"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { CareersForm } from "@/components/forms/careers-form"

import UtilityBar from "@/components/site/utility-bar"
import SiteHeader from "@/components/site/site-header"
import PageBreadcrumb from "@/components/site/page-breadcrumb"
import SiteFooter from "@/components/site/site-footer"
import MobileCtaBar from "@/components/site/mobile-cta-bar"

const CANONICAL = canonicalUrl("/careers")

export const metadata: Metadata = {
  title: "Careers — S.W.A.T. Plumbing | DFW Plumber Jobs in Aledo & Fort Worth",
  description:
    "Join one of the fastest-growing plumbing companies in DFW. Open roles: Journeyman Plumber, Office Lead, Plumber Apprentice. Company truck, full benefits, family-owned culture.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Careers — S.W.A.T. Plumbing",
    description:
      "Open roles at S.W.A.T. Plumbing — Journeyman Plumber, Office Lead, Plumber Apprentice. DFW Metroplex.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers — S.W.A.T. Plumbing",
    description:
      "Join the crew. Open roles in Aledo & Fort Worth — company truck, full benefits, family culture.",
  },
}

const POSTED_ISO = "2026-06-16"

const benefits = [
  { icon: DollarSign, label: "Hourly or commission" },
  { icon: Truck, label: "Company truck + iPad" },
  { icon: HeartPulse, label: "Medical · dental · vision" },
  { icon: CalendarCheck, label: "Paid holidays + vacation" },
  { icon: GraduationCap, label: "Training & coaching" },
  { icon: Users, label: "Family-owned culture" },
] as const

export default function CareersPage() {
  // Default to the first position so the accordion has an item open when the
  // user lands and scrolls; also drives the application form's default select.
  const defaultPosition = positions[0].title

  return (
    <>
      {positions.map((p) => (
        <script
          key={p.slug}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jobPostingSchema(p, POSTED_ISO)),
          }}
        />
      ))}

      <UtilityBar />
      <SiteHeader />

      <main id="main-content">
        <PageBreadcrumb current="Careers" />

        {/* ============================================================== */}
        {/* 1. HERO — full-bleed background image                          */}
        {/* ============================================================== */}
        <section
          className="relative isolate bg-[#080a0c] overflow-hidden min-h-[640px] lg:min-h-[720px] flex items-center"
          aria-labelledby="careers-heading"
        >
          {/* Background image */}
          <Image
            src="/conferencetable.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center -z-10"
            priority
          />

          {/* Stacked overlays for legibility — left-weighted so copy stays readable */}
          <div
            className="absolute inset-0 -z-10 bg-linear-to-r from-[#050608] from-0% via-[#080a0c]/82 via-45% to-[#080a0c]/55 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -z-10 bg-linear-to-t from-[#050608] via-transparent to-[#050608]/40 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_55%_at_18%_45%,rgba(220,38,38,0.15),transparent_70%)] pointer-events-none"
            aria-hidden="true"
          />
          {/* Tactical grid sits on top of overlay but under content */}
          <div
            className="absolute inset-0 -z-10 tactical-grid opacity-25 pointer-events-none"
            aria-hidden="true"
          />

          {/* Red left stripe */}
          <div
            className="absolute left-0 inset-y-0 w-1 bg-red-600 z-0"
            aria-hidden="true"
          />
          {/* Corner marks */}
          <div
            className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-red-600/50 pointer-events-none z-0"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-red-600/50 pointer-events-none z-0"
            aria-hidden="true"
          />
          <div
            className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-red-600/50 pointer-events-none z-0 hidden sm:block"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-red-600/50 pointer-events-none z-0 hidden sm:block"
            aria-hidden="true"
          />

          <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 py-20 lg:py-28">
            <div className="max-w-2xl">
              {/* Now-hiring pill */}
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-red-600/20 border border-red-600/50 backdrop-blur-sm mb-5">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                </span>
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-red-200 font-bold">
                  Now Hiring · {positions.length} Open Roles
                </span>
              </span>

              <TacticalLabel>Careers</TacticalLabel>
              <AccentLine />

              <h1
                id="careers-heading"
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.03] mb-6 drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)]"
              >
                Join the crew.
                <br />
                <span className="text-red-500">Hold the standard.</span>
              </h1>

              <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-xl mb-8 drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]">
                S.W.A.T. Plumbing is one of the fastest-growing plumbing
                companies in the DFW Metroplex — and we&apos;re looking for
                pros who believe in Trust, Quality, and Care. If that&apos;s
                you, we want you.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#openings"
                  className={cn(
                    "inline-flex items-center justify-center gap-2",
                    "bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide uppercase",
                    "px-7 py-3.5 rounded-sm border border-red-500/40 min-h-12 transition-colors",
                    "shadow-[0_8px_32px_-8px_rgba(220,38,38,0.5)]"
                  )}
                >
                  <Briefcase className="h-4 w-4" aria-hidden="true" />
                  View Open Roles
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#apply"
                  className={cn(
                    "inline-flex items-center justify-center gap-2",
                    "border border-white/40 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/55",
                    "font-semibold text-sm tracking-wide uppercase",
                    "px-7 py-3.5 rounded-sm min-h-12 transition-colors"
                  )}
                >
                  <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
                  Apply Now
                </Link>
              </div>

              {/* Hub call lines — secondary path for those who'd rather talk */}
              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                <span className="text-white/55 text-[10px] font-mono tracking-[0.22em] uppercase">
                  Or call a hub
                </span>
                <Link
                  href={siteConfig.phone.aled_tel}
                  className="inline-flex items-center gap-1.5 text-white hover:text-red-400 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-red-400" aria-hidden="true" />
                  <span className="font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
                    Aledo · {siteConfig.phone.aledo}
                  </span>
                </Link>
                <Link
                  href={siteConfig.phone.fw_tel}
                  className="inline-flex items-center gap-1.5 text-white hover:text-red-400 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-red-400" aria-hidden="true" />
                  <span className="font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
                    Fort Worth · {siteConfig.phone.fortWorth}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. BENEFITS RIBBON                                              */}
        {/* ============================================================== */}
        <section
          className="relative bg-[#0e1012] border-y border-white/8 py-14 lg:py-16 overflow-hidden"
          aria-labelledby="benefits-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-20 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
              <div className="max-w-2xl">
                <TacticalLabel>What You Get</TacticalLabel>
                <AccentLine />
                <h2
                  id="benefits-heading"
                  className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight"
                >
                  Real pay. Real benefits.
                  <br />
                  <span className="text-red-500">Real team.</span>
                </h2>
              </div>
            </div>

            <ul
              role="list"
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
            >
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <li
                    key={b.label}
                    className="flex flex-col items-start gap-3 bg-[#0a0c0e] border border-white/10 rounded-sm p-4 min-h-24"
                  >
                    <div className="flex items-center justify-center w-9 h-9 rounded-sm bg-red-600/10 border border-red-600/30">
                      <Icon className="h-4 w-4 text-red-400" aria-hidden="true" />
                    </div>
                    <span className="text-white/85 text-xs sm:text-sm font-semibold leading-tight">
                      {b.label}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. OPEN POSITIONS — accordions                                  */}
        {/* ============================================================== */}
        <section
          id="openings"
          className="relative bg-[#080a0c] py-20 lg:py-24 overflow-hidden scroll-mt-24"
          aria-labelledby="openings-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-30 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-5xl mx-auto px-5 sm:px-6">
            <div className="mb-10 lg:mb-12 max-w-2xl">
              <TacticalLabel>Open Positions</TacticalLabel>
              <AccentLine />
              <h2
                id="openings-heading"
                className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight"
              >
                {positions.length} roles open.
                <br />
                <span className="text-red-500">All hands needed.</span>
              </h2>
              <p className="mt-4 text-white/55 text-base leading-relaxed">
                Click any role to see the full description, benefits, and
                requirements. Ready to apply? Scroll to the form — or call a hub
                directly.
              </p>
            </div>

            <Accordion multiple className="flex flex-col gap-3">
              {positions.map((p) => (
                <AccordionItem
                  key={p.slug}
                  value={p.slug}
                  className="bg-[#0e1012] border border-white/10 rounded-sm overflow-hidden not-last:border-b"
                >
                  <AccordionTrigger
                    className={cn(
                      "px-5 sm:px-6 py-5 hover:no-underline group/trigger",
                      "border-transparent rounded-none"
                    )}
                  >
                    <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pr-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-red-400 font-bold">
                            Full-Time
                          </span>
                          <span className="text-red-600/40 text-xs" aria-hidden="true">·</span>
                          <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-white/45 font-semibold">
                            DFW Metroplex
                          </span>
                        </div>
                        <h3 className="text-white text-lg sm:text-xl font-black tracking-tight leading-tight">
                          {p.title}
                        </h3>
                        <p className="text-white/55 text-sm mt-1 truncate sm:whitespace-normal">
                          {p.shortDescription}
                        </p>
                      </div>
                      <div className="shrink-0 self-start sm:self-center inline-flex items-center px-3 py-1.5 rounded-sm bg-red-600/10 border border-red-600/30">
                        <span className="text-red-300 text-xs font-mono font-bold tracking-wide">
                          {p.payDisplay}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-5 sm:px-6 pb-6 pt-2 [&_a]:no-underline">
                    {/* About */}
                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                      {p.about}
                    </p>

                    {/* 3-col block: benefits / skills / requirements */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                      {p.benefits && p.benefits.length > 0 && (
                        <SpecBlock label="Benefits" items={p.benefits} />
                      )}
                      {p.skills && p.skills.length > 0 && (
                        <SpecBlock label="Skills" items={p.skills} />
                      )}
                      {p.requirements && p.requirements.length > 0 && (
                        <SpecBlock label="Requirements" items={p.requirements} />
                      )}
                    </div>

                    {/* Apply CTA inside accordion */}
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between border-t border-white/8 pt-5">
                      <span className="text-white/45 text-xs font-mono tracking-wider uppercase">
                        Pay: {p.payDisplay}
                      </span>
                      <Link
                        href={`#apply?role=${encodeURIComponent(p.title)}`}
                        className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-wide uppercase px-5 py-2.5 rounded-sm border border-red-500/40 min-h-11 transition-colors self-start"
                      >
                        Apply for this role
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. APPLICATION FORM                                             */}
        {/* ============================================================== */}
        <section
          id="apply"
          className="relative bg-[#0e1012] border-y border-white/8 py-20 lg:py-24 overflow-hidden scroll-mt-24"
          aria-labelledby="apply-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-20 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute left-0 inset-y-0 w-0.75 bg-linear-to-b from-transparent via-red-600 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-4xl mx-auto px-5 sm:px-6">
            <div className="mb-10">
              <TacticalLabel>Employment Application</TacticalLabel>
              <AccentLine />
              <h2
                id="apply-heading"
                className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight"
              >
                Send us your application.
              </h2>
              <p className="mt-3 text-white/55 text-base leading-relaxed max-w-lg">
                One quick form. Upload your resume if you have it — or skip it
                and tell us about yourself in the notes field.
              </p>
            </div>

            <div className="relative">
              <div
                className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-red-600/60 pointer-events-none z-10"
                aria-hidden="true"
              />
              <div
                className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-red-600/60 pointer-events-none z-10"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-red-600/60 pointer-events-none z-10"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-red-600/60 pointer-events-none z-10"
                aria-hidden="true"
              />

              <div className="relative bg-[#0e1012] border border-white/12 border-b-0 rounded-t-sm px-6 lg:px-8 pt-5 pb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-red-400 font-semibold mb-1">
                    Application
                  </p>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                    Tell us about yourself.
                  </h3>
                </div>
                <div className="hidden sm:flex flex-col items-end gap-1 shrink-0">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                  </span>
                  <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-white/45 font-semibold">
                    Hiring Now
                  </span>
                </div>
              </div>

              <CareersForm defaultPosition={defaultPosition} />
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. FALLBACK CONTACT STRIP                                       */}
        {/* ============================================================== */}
        <section
          className="relative bg-[#080a0c] py-16 lg:py-20 overflow-hidden"
          aria-labelledby="fallback-heading"
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
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-xl">
                <TacticalLabel>Prefer to Talk?</TacticalLabel>
                <AccentLine />
                <h2
                  id="fallback-heading"
                  className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-3"
                >
                  Give us a call.
                </h2>
                <p className="text-white/55 text-base leading-relaxed">
                  Have questions about a role? Want to come in and meet the
                  team? Pick a hub — we&apos;ll point you to the right person.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:shrink-0 lg:min-w-[26rem]">
                <CallHub
                  label="Aledo"
                  phone={siteConfig.phone.aledo}
                  tel={siteConfig.phone.aled_tel}
                />
                <CallHub
                  label="Fort Worth"
                  phone={siteConfig.phone.fortWorth}
                  tel={siteConfig.phone.fw_tel}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileCtaBar />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* SpecBlock — labeled list (benefits / skills / requirements)         */
/* ------------------------------------------------------------------ */
function SpecBlock({
  label,
  items,
}: {
  label: string
  items: readonly string[]
}) {
  return (
    <div className="bg-[#0a0c0e] border border-white/10 rounded-sm p-4 sm:p-5">
      <div className="flex items-center gap-2.5 mb-3">
        <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-red-400 font-bold">
          {label}
        </span>
        <div className="h-px flex-1 bg-red-600/25" aria-hidden="true" />
      </div>
      <ul role="list" className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-white/70 text-xs sm:text-[13px] leading-relaxed"
          >
            <span
              className="mt-1.5 h-1 w-1 rounded-full bg-red-500 shrink-0"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* CallHub — secondary phone CTA card                                  */
/* ------------------------------------------------------------------ */
function CallHub({
  label,
  phone,
  tel,
}: {
  label: string
  phone: string
  tel: string
}) {
  return (
    <Link
      href={tel}
      className={cn(
        "group flex items-center justify-between gap-3",
        "bg-[#0e1012] border border-white/12 hover:border-red-600/55",
        "rounded-sm px-4 py-3.5 min-h-16 transition-colors"
      )}
      aria-label={`Call ${label} at ${phone}`}
    >
      <div className="flex flex-col gap-0.5">
        <span className="flex items-center gap-2">
          <Phone className="h-3.5 w-3.5 text-red-500 shrink-0" aria-hidden="true" />
          <span className="text-[9px] font-mono tracking-[0.22em] uppercase text-white/55 font-semibold">
            {label}
          </span>
        </span>
        <span className="text-white font-bold text-base tracking-tight group-hover:text-red-400 transition-colors">
          {phone}
        </span>
      </div>
      <ArrowUpRight
        className="h-4 w-4 text-white/40 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
        aria-hidden="true"
      />
    </Link>
  )
}
