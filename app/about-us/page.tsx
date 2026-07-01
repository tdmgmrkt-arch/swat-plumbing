import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  CalendarDays,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Scale,
  ShieldCheck,
  Hammer,
  Handshake,
  Building2,
  Check,
  BadgeCheck,
  Award,
  Wrench,
  ExternalLink,
} from "lucide-react"

import { siteConfig } from "@/lib/site-config"
import {
  aboutPageSchema,
  aboutBreadcrumbSchema,
  dillonPersonSchema,
} from "@/lib/schema"
import { cn, canonicalUrl } from "@/lib/utils"
import { defaultOgImages, defaultTwitterImages } from "@/lib/metadata"
import { TacticalLabel, AccentLine } from "@/components/ui/tactical-panel"

import UtilityBar from "@/components/site/utility-bar"
import SiteHeader from "@/components/site/site-header"
import PageBreadcrumb from "@/components/site/page-breadcrumb"
import SiteFooter from "@/components/site/site-footer"
import MobileCtaBar from "@/components/site/mobile-cta-bar"
import FinalCta from "@/components/sections/final-cta"

const CANONICAL = canonicalUrl("/about-us")

export const metadata: Metadata = {
  title:
    "About S.W.A.T. Plumbing — Family-Owned Plumbers in Aledo & Fort Worth, TX",
  description:
    "Sewer, Water, Anytime Team — meet the family-owned plumbing crew serving Fort Worth, Aledo, and surrounding North Texas. Licensed techs, real dispatch, 24/7 response.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title:
      "About S.W.A.T. Plumbing — Family-Owned Plumbers in Aledo & Fort Worth, TX",
    description:
      "Sewer, Water, Anytime Team. Meet the family-owned plumbing crew serving Fort Worth, Aledo, and surrounding North Texas communities.",
    siteName: siteConfig.name,
    images: defaultOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "About S.W.A.T. Plumbing — Family-Owned, 24/7, North Texas",
    description:
      "Sewer, Water, Anytime Team. Meet the licensed crew serving Aledo, Fort Worth & 49+ North Texas communities.",
    images: defaultTwitterImages,
  },
}

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const acronym = [
  { letter: "S", word: "Sewer" },
  { letter: "W", word: "Water" },
  { letter: "A", word: "Anytime" },
  { letter: "T", word: "Team" },
] as const

const coreValues = [
  {
    icon: Compass,
    title: "Leadership",
    body:
      "Every member of the crew operates with the same vision and the same standard. Clarity from the top of the org chart down to the last service call.",
  },
  {
    icon: Scale,
    title: "Honesty",
    body:
      "Straight answers, upfront pricing, real explanations. You'll know what's wrong, what it costs, and what the fix actually is — before any tool comes out of the truck.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    body:
      "If it isn't right, we don't leave. The job ends when you're satisfied — not when the clock says it's time to roll. How we do anything is how we do everything.",
  },
] as const

type TeamMember = {
  name: string
  role: string
  photo: string
  /** Short professional bio shown beneath role on team cards (1–2 sentences). */
  bio: string
  /** Optional CSS object-position override. Defaults to "center top". */
  objectPosition?: string
}

const owners: readonly TeamMember[] = [
  {
    name: "Dillon",
    role: "Owner · Master Plumber",
    photo: "/Dillon.Owner.MasterPlumber.webp",
    objectPosition: "center 25%",
    bio: "Co-founded S.W.A.T. Plumbing with Danielle in 2013. Texas Master Plumber #M-39596 — leads field operations, complex diagnostics, and the crew. Full bio in the Leadership section below.",
  },
  {
    name: "Danielle",
    role: "Owner · CFO",
    photo: "/Danielle.CFO.Owner.webp",
    bio: "Co-founded S.W.A.T. Plumbing with Dillon in 2013. Runs the financial and operational side of the business — accounting, payroll, vendor relationships, and the office that keeps every truck rolling.",
  },
] as const

const crew: readonly TeamMember[] = [
  {
    name: "Chloe",
    role: "Dispatching",
    photo: "/Chloe.Dispatching.webp",
    bio: "Coordinates field crews from HQ — live phone dispatch, scheduling, and routing the right tech to the right job.",
  },
  {
    name: "Autumn",
    role: "SWAT Office",
    photo: "/Autumn.SwatOffice.webp",
    bio: "Headquarters team. Manages schedules, supports incoming customer calls, and keeps the field crews equipped for the day's work.",
  },
  {
    name: "Cindy",
    role: "SWAT Office",
    photo: "/Cindy.SwatOffice.webp",
    bio: "Office and customer support. Day-to-day scheduling, follow-ups, and the voice on the line when a homeowner needs help.",
  },
  {
    name: "Suzanna",
    role: "SWAT Office",
    photo: "/Suzanna.SwatOffice.webp",
    bio: "Business administration and operations support. Coordinates with field crews and works directly with customers from first call to final repair.",
  },
  {
    name: "Ruben",
    role: "Technician",
    photo: "/Ruben.Technician.webp",
    bio: "Service technician — residential and commercial calls across North Texas. Diagnostics, repairs, and installations done right the first time.",
  },
  {
    name: "Jason",
    role: "Technician",
    photo: "/Jason.Technician.webp",
    bio: "Service technician. Runs diagnostics, repairs, and installations across the DFW Metroplex. Methodical with the work, calm with the homeowner.",
  },
  {
    name: "Matthew",
    role: "Technician",
    photo: "/Matthew.Technician.webp",
    bio: "Service technician. Drains, water heaters, leak diagnostics, full-scope residential service. Strong at walking homeowners through real options before any tool comes out of the truck.",
  },
] as const

const codeOfEthics = [
  {
    icon: Building2,
    label: "Our Company & Ourselves",
    items: [
      "We take full responsibility for everything we do.",
      "We hold ourselves to the highest standard — a model of excellence to others.",
      "We push ourselves to be better than we were before.",
      "We build an environment where each team member contributes their best — and is rewarded for it.",
      "We earn an ethical, respectable income for the value we deliver.",
      "We leave a positive, lasting impression on everyone we meet.",
      "How you do anything is how you do everything.",
    ],
  },
  {
    icon: Handshake,
    label: "Our Clients",
    items: [
      "We market our services ethically.",
      "We serve our clients, not the other way around.",
      "We give people every way possible to encounter our company.",
      "We deliver strategies that work — and work hard to make them better.",
      "We add value, and accept fair compensation for that value.",
      "We provide accountability for those who want it.",
    ],
  },
  {
    icon: Hammer,
    label: "Our Vendors",
    items: [
      "We build vendor relationships that positively serve our clients.",
      "We build win/win relationships with our vendors.",
      "We hold our vendors to the highest standards — and hold ourselves to the same.",
    ],
  },
] as const

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutBreadcrumbSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dillonPersonSchema()),
        }}
      />

      <UtilityBar />
      <SiteHeader />

      <main id="main-content">
        <PageBreadcrumb current="About Us" />

        {/* ============================================================== */}
        {/* 1. HERO — acronym reveal + brand story + photo                 */}
        {/* ============================================================== */}
        <section
          className="relative bg-[#080a0c] pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden"
          aria-labelledby="about-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-30 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute left-0 inset-y-0 w-1 bg-red-600"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_20%_45%,rgba(220,38,38,0.08),transparent)] pointer-events-none"
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* LEFT — copy + CTAs */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <TacticalLabel>Family Owned · 2 Hubs · 24/7</TacticalLabel>
                <AccentLine />

                <h1
                  id="about-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6"
                >
                  Sewer. Water.
                  <br />
                  <span className="text-red-500">Anytime Team.</span>
                </h1>

                {/* Acronym readout */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-7 max-w-md">
                  {acronym.map((a) => (
                    <div
                      key={a.letter}
                      className="bg-[#0e1012] border border-white/10 rounded-sm px-2 sm:px-3 py-3 flex flex-col items-center text-center"
                    >
                      <span className="text-2xl sm:text-3xl font-black text-red-500 font-mono leading-none mb-1.5">
                        {a.letter}
                      </span>
                      <span className="text-[10px] sm:text-xs font-mono tracking-[0.12em] uppercase text-white/65 font-semibold">
                        {a.word}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                  S.W.A.T. Plumbing is your dedicated plumbing crew — proudly
                  family-owned, fully licensed, and serving Fort Worth, Aledo,
                  and surrounding Tarrant County communities. From slab leaks
                  at 2&nbsp;a.m. to a faucet swap on a Tuesday, we run the same
                  standard every call.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact-us"
                    className={cn(
                      "inline-flex items-center justify-center gap-2",
                      "bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide uppercase",
                      "px-7 py-3.5 rounded-sm border border-red-500/40 min-h-12 transition-colors"
                    )}
                  >
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    Schedule Online
                  </Link>
                  <Link
                    href={siteConfig.phone.aled_tel}
                    className={cn(
                      "inline-flex items-center justify-center gap-2",
                      "border border-white/25 text-white bg-transparent hover:bg-white/8 hover:border-white/40",
                      "font-semibold text-sm tracking-wide uppercase",
                      "px-7 py-3.5 rounded-sm min-h-12 transition-colors"
                    )}
                    aria-label={`Call Aledo at ${siteConfig.phone.aledo}`}
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {siteConfig.phone.aledo}
                  </Link>
                </div>
              </div>

              {/* RIGHT — hero photo with tactical frame */}
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative">
                  <div
                    className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-red-600/60 pointer-events-none z-10"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-red-600/60 pointer-events-none z-10"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-red-600/60 pointer-events-none z-10"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-red-600/60 pointer-events-none z-10"
                    aria-hidden="true"
                  />

                  <div className="relative bg-[#0e1012] border border-white/10 rounded-sm overflow-hidden aspect-4/3 lg:aspect-3/4">
                    <Image
                      src="/aboutusimage.webp"
                      alt="S.W.A.T. Plumbing crew and family — the team behind every dispatch"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#080a0c]/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                      <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-white/75 font-semibold">
                        Family Owned · Aledo, TX
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. STORY / MISSION                                              */}
        {/* ============================================================== */}
        <section
          className="relative bg-[#0e1012] border-y border-white/8 py-20 lg:py-24 overflow-hidden"
          aria-labelledby="story-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-20 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute left-0 inset-y-0 w-0.75 bg-linear-to-b from-transparent via-red-600 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Heading + intro */}
              <div className="lg:col-span-5">
                <TacticalLabel>Our Crew</TacticalLabel>
                <AccentLine />
                <h2
                  id="story-heading"
                  className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-5"
                >
                  Years in the field.
                  <br />
                  <span className="text-red-500">One standard at every door.</span>
                </h2>
                <p className="text-white/65 text-base leading-relaxed mb-4">
                  S.W.A.T. Plumbing has been serving North Texas{" "}
                  <span className="text-white font-semibold">since 2013</span>{" "}
                  — and in that time we&apos;ve seen it all: preventative
                  maintenance, clogged drains, professional slab-leak
                  detection, full repipes. No job is too tough for the crew.
                </p>
                <p className="text-white/55 text-sm leading-relaxed">
                  Plumbing emergencies don&apos;t keep business hours. Neither
                  do we. Seven days a week, around the clock.
                </p>
              </div>

              {/* Two narrative beats — exceptional repairs / proven results */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                <div className="bg-[#0a0c0e] border border-white/10 rounded-sm p-6 lg:p-7 flex flex-col">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-red-400 font-semibold">
                      Specialty
                    </span>
                    <div className="h-px flex-1 bg-red-600/30" aria-hidden="true" />
                  </div>
                  <h3 className="text-white text-xl font-black tracking-tight leading-tight mb-3">
                    Exceptional Repairs
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed flex-1">
                    Slab leaks, leak detection, drain cleaning, video
                    inspection, indoor/outdoor faucets, repipes — all done by
                    licensed pros. Not sure if it&apos;s in our scope? Call
                    anyway. We assess, then we fix.
                  </p>
                </div>

                <div className="bg-[#0a0c0e] border border-white/10 rounded-sm p-6 lg:p-7 flex flex-col">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-red-400 font-semibold">
                      Proof
                    </span>
                    <div className="h-px flex-1 bg-red-600/30" aria-hidden="true" />
                  </div>
                  <h3 className="text-white text-xl font-black tracking-tight leading-tight mb-3">
                    Proven Results
                  </h3>
                  <blockquote className="text-white/65 text-sm leading-relaxed italic flex-1">
                    &ldquo;The best plumbing experience I&apos;ve ever had — so
                    quick and easy. In and out, brand-new garbage disposal, 20
                    minutes.&rdquo;
                  </blockquote>
                  <p className="mt-3 text-[10px] font-mono tracking-[0.2em] uppercase text-white/40 font-semibold">
                    — Recent client, Fort Worth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. CORE VALUES                                                  */}
        {/* ============================================================== */}
        <section
          className="relative bg-[#080a0c] py-20 lg:py-24 overflow-hidden"
          aria-labelledby="values-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-30 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
            <div className="mb-12 max-w-2xl">
              <TacticalLabel>Core Values</TacticalLabel>
              <AccentLine />
              <h2
                id="values-heading"
                className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight"
              >
                The standard.
                <br />
                <span className="text-red-500">Non-negotiable.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
              {coreValues.map((v, idx) => {
                const Icon = v.icon
                return (
                  <article
                    key={v.title}
                    className="relative bg-[#0e1012] border border-white/10 rounded-sm p-6 lg:p-8 flex flex-col"
                  >
                    <div
                      className="absolute top-3 right-3 font-mono text-[10px] text-white/30 tracking-wider"
                      aria-hidden="true"
                    >
                      0{idx + 1}
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-red-600/10 border border-red-600/30 mb-5">
                      <Icon className="h-5 w-5 text-red-400" aria-hidden="true" />
                    </div>
                    <h3 className="text-white text-xl font-black tracking-tight uppercase leading-tight mb-3">
                      {v.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {v.body}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. MEET THE TEAM — owners (2-col) + crew (4-col w/ hiring tile) */}
        {/* ============================================================== */}
        <section
          className="relative bg-[#0e1012] border-y border-white/8 py-20 lg:py-24 overflow-hidden"
          aria-labelledby="team-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-20 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
            <div className="mb-12 max-w-2xl">
              <TacticalLabel>Meet The Team</TacticalLabel>
              <AccentLine />
              <h2
                id="team-heading"
                className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight"
              >
                Real names. Real faces.
                <br />
                <span className="text-red-500">Real pride in the work.</span>
              </h2>
            </div>

            {/* Owners — featured row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 mb-5">
              {owners.map((p) => (
                <TeamCard key={p.name} member={p} featured />
              ))}
            </div>

            {/* Crew — 4-col grid (7 crew + 1 hiring tile = 8 = clean 2-row grid) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
              {crew.map((p) => (
                <TeamCard key={p.name} member={p} />
              ))}
              <HiringTile />
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. LEADERSHIP — Dillon bio + credentials (E-E-A-T)              */}
        {/* ============================================================== */}
        <LeadershipSection />

        {/* ============================================================== */}
        {/* 6. CREDENTIALS & AFFILIATIONS — verified trust badges           */}
        {/* ============================================================== */}
        <AffiliationsSection />

        {/* ============================================================== */}
        {/* 7. CODE OF ETHICS                                               */}
        {/* ============================================================== */}
        <section
          className="relative bg-[#080a0c] py-20 lg:py-24 overflow-hidden"
          aria-labelledby="ethics-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-30 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute right-0 inset-y-0 w-0.75 bg-linear-to-b from-transparent via-red-600 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
            <div className="mb-12 max-w-2xl">
              <TacticalLabel>Code of Ethics</TacticalLabel>
              <AccentLine />
              <h2
                id="ethics-heading"
                className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight"
              >
                The way we work —
                <br />
                <span className="text-red-500">written down.</span>
              </h2>
              <p className="mt-4 text-white/55 text-base leading-relaxed">
                Three commitments. To ourselves, to the people we serve, and to
                the partners who help us serve them.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
              {codeOfEthics.map((block, idx) => {
                const Icon = block.icon
                return (
                  <article
                    key={block.label}
                    className="relative bg-[#0e1012] border border-white/10 rounded-sm overflow-hidden flex flex-col"
                  >
                    {/* Header strip */}
                    <div className="flex items-center justify-between gap-3 px-6 pt-6 pb-4 border-b border-white/8">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 rounded-sm bg-red-600/10 border border-red-600/30 shrink-0">
                          <Icon className="h-4 w-4 text-red-400" aria-hidden="true" />
                        </div>
                        <h3 className="text-white text-base sm:text-lg font-black tracking-tight leading-tight uppercase">
                          {block.label}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono tracking-[0.2em] text-white/35 font-semibold shrink-0">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Items */}
                    <ul role="list" className="px-6 py-6 space-y-3.5 flex-1">
                      {block.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-white/70 text-sm leading-relaxed"
                        >
                          <span
                            className="mt-0.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-600/15 border border-red-600/40 shrink-0"
                            aria-hidden="true"
                          >
                            <Check className="h-2.5 w-2.5 text-red-400" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 8. FINAL CTA (reuse)                                            */}
        {/* ============================================================== */}
        <FinalCta />
      </main>

      <SiteFooter />
      <MobileCtaBar />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Team Card                                                            */
/* ------------------------------------------------------------------ */
function TeamCard({
  member,
  featured = false,
}: {
  member: TeamMember
  featured?: boolean
}) {
  return (
    <div
      className={cn(
        "group relative bg-[#0a0c0e] border border-white/10 rounded-sm overflow-hidden flex flex-col",
        "hover:border-red-600/40 transition-colors"
      )}
    >
      {/* Tactical corner marks (featured cards only — keeps grid clean) */}
      {featured && (
        <>
          <div
            className="absolute top-2 left-2 w-3 h-3 border-t border-l border-red-600/55 pointer-events-none z-10"
            aria-hidden="true"
          />
          <div
            className="absolute top-2 right-2 w-3 h-3 border-t border-r border-red-600/55 pointer-events-none z-10"
            aria-hidden="true"
          />
        </>
      )}

      {/* Photo */}
      <div
        className={cn(
          "relative w-full bg-[#13181c] overflow-hidden",
          featured ? "aspect-4/3 sm:aspect-3/2" : "aspect-square"
        )}
      >
        <Image
          src={member.photo}
          alt={`${member.name} — ${member.role} at S.W.A.T. Plumbing`}
          fill
          sizes={
            featured
              ? "(min-width: 1024px) 35vw, (min-width: 640px) 50vw, 100vw"
              : "(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 50vw"
          }
          className={cn(
            "object-cover group-hover:scale-[1.02] transition-transform duration-300 ease-out",
            !member.objectPosition && "object-top"
          )}
          style={
            member.objectPosition
              ? { objectPosition: member.objectPosition }
              : undefined
          }
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-[#0a0c0e] via-[#0a0c0e]/30 to-transparent pointer-events-none"
        />
      </div>

      {/* Name + role + bio */}
      <div
        className={cn(
          "px-4 py-4 border-t border-white/8 flex flex-col gap-1.5 flex-1",
          featured && "px-5 py-5 gap-2"
        )}
      >
        <h3
          className={cn(
            "text-white font-black tracking-tight leading-tight",
            featured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
          )}
        >
          {member.name}
        </h3>
        <p
          className={cn(
            "font-mono tracking-[0.15em] uppercase text-red-400 font-semibold",
            featured ? "text-xs" : "text-[10px]"
          )}
        >
          {member.role}
        </p>
        <p
          className={cn(
            "text-white/60 leading-relaxed mt-1",
            featured ? "text-sm" : "text-xs"
          )}
        >
          {member.bio}
        </p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Hiring Tile — sits in the crew grid as the 8th slot                  */
/* ------------------------------------------------------------------ */
function HiringTile() {
  return (
    <Link
      href="/careers"
      className={cn(
        "group relative flex flex-col justify-between",
        "bg-linear-to-br from-red-600/15 via-red-600/5 to-transparent",
        "border border-red-600/40 hover:border-red-600/70 rounded-sm overflow-hidden",
        "p-5 transition-colors min-h-full"
      )}
      aria-label="Join the S.W.A.T. Plumbing team — view careers"
    >
      <div
        className="absolute top-2 left-2 w-3 h-3 border-t border-l border-red-500/70 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-2 right-2 w-3 h-3 border-t border-r border-red-500/70 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-red-500/70 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-red-500/70 pointer-events-none"
        aria-hidden="true"
      />

      <div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-red-600/20 border border-red-600/40 mb-4">
          <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
          </span>
          <span className="text-[9px] font-mono tracking-[0.22em] uppercase text-red-300 font-bold">
            Now Hiring
          </span>
        </span>
        <h3 className="text-white text-lg sm:text-xl font-black tracking-tight leading-tight mb-2">
          Join the crew.
        </h3>
        <p className="text-white/65 text-xs sm:text-sm leading-relaxed">
          Licensed techs, dispatchers, office team. If you hold the standard,
          we want you.
        </p>
      </div>
      <div className="flex items-center gap-2 mt-5 text-red-400 group-hover:text-red-300 transition-colors">
        <span className="text-[10px] font-mono tracking-[0.22em] uppercase font-bold">
          View Openings
        </span>
        <ArrowUpRight
          className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          aria-hidden="true"
        />
        <ArrowRight className="h-3.5 w-3.5 sr-only" aria-hidden="true" />
      </div>
    </Link>
  )
}

/* ------------------------------------------------------------------ */
/* Leadership — featured Dillon bio with credentials block             */
/* E-E-A-T: surfaces the credentialed Master Plumber behind the LLC.    */
/* ------------------------------------------------------------------ */
const dillonExpertise = [
  "Leak detection & repair",
  "Slab leak diagnosis",
  "Sewer camera inspections",
  "Drain cleaning & hydro-jetting",
  "Water heater repair & installation",
  "Tankless water heater systems",
  "Water softeners & filtration",
  "Gas line installation & repair",
  "Whole-home repiping",
  "Main water & sewer line replacement",
] as const

const dillonCredentials = [
  {
    icon: BadgeCheck,
    label: "Texas Master Plumber License",
    value: "#M-39596",
  },
  {
    icon: BadgeCheck,
    label: "Texas Journeyman Plumber License",
    value: "#42868",
  },
  {
    icon: Award,
    label: "Owner, S.W.A.T. Plumbing LLC",
    value: "Founded 2013",
  },
  {
    icon: ShieldCheck,
    label: "BBB Accredited Business",
    value: "Since 2014",
  },
] as const

function LeadershipSection() {
  return (
    <section
      className="relative bg-[#080a0c] py-20 lg:py-24 overflow-hidden"
      aria-labelledby="leadership-heading"
    >
      <div
        className="absolute inset-0 tactical-grid opacity-25 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute left-0 inset-y-0 w-0.75 bg-linear-to-b from-transparent via-red-600 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <TacticalLabel>Leadership</TacticalLabel>
          <AccentLine />
          <h2
            id="leadership-heading"
            className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight"
          >
            The licensed hand
            <br />
            <span className="text-red-500">behind every job.</span>
          </h2>
          <p className="mt-4 text-white/55 text-base leading-relaxed">
            S.W.A.T. is led by a credentialed Texas Master Plumber — not a
            holding company, not a franchise. The buck stops at the truck.
          </p>
        </div>

        {/* Bio card */}
        <article
          className="relative bg-[#0e1012] border border-white/10 rounded-sm overflow-hidden"
          itemScope
          itemType="https://schema.org/Person"
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-1 bg-red-600"
            aria-hidden="true"
          />
          <div
            className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-red-600/60"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-red-600/60"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-0">
            {/* Photo column */}
            <div className="relative bg-[#0a0c0e] border-b lg:border-b-0 lg:border-r border-white/8 overflow-hidden">
              <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full min-h-[360px]">
                <Image
                  src="/Dillon.Owner.MasterPlumber.webp"
                  alt="Dillon Patterson, Owner and Principal Master Plumber of S.W.A.T. Plumbing LLC"
                  fill
                  sizes="(min-width: 1280px) 320px, (min-width: 1024px) 280px, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "center 25%" }}
                  itemProp="image"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-[#0a0c0e]/85 via-[#0a0c0e]/10 to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-transparent lg:to-[#0e1012]/30 pointer-events-none"
                  aria-hidden="true"
                />
                {/* Name plate overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="h-px w-5 bg-red-600" aria-hidden="true" />
                    <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-red-400 font-bold">
                      Master Plumber
                    </span>
                  </div>
                  <p
                    className="text-white text-xl lg:text-2xl font-black tracking-tight leading-tight"
                    itemProp="name"
                  >
                    Dillon Patterson
                  </p>
                  <p
                    className="text-white/65 text-xs font-medium tracking-wide mt-1"
                    itemProp="jobTitle"
                  >
                    Owner &amp; Principal Master Plumber
                  </p>
                </div>
              </div>
            </div>

            {/* Bio + expertise column */}
            <div className="p-6 sm:p-8 lg:p-10 pl-7 sm:pl-9 lg:pl-11">
              <div className="space-y-4 text-white/75 text-sm sm:text-base leading-relaxed">
                <p>
                  Dillon Patterson is the owner and Principal Master Plumber of{" "}
                  S.W.A.T. Plumbing LLC (Texas Master Plumber License{" "}
                  <span className="text-white font-semibold font-mono">
                    #M-39596
                  </span>
                  ), a family-owned company serving Fort Worth, Aledo, and
                  surrounding North Texas communities. After years of working
                  for large corporate plumbing companies, Dillon and Danielle
                  Patterson founded S.W.A.T. Plumbing in{" "}
                  <span className="text-white font-semibold">2013</span> with a
                  clear mission: to provide a more personalized,
                  service-focused alternative for local homeowners.
                </p>
                <p>
                  With more than a decade of proven company history and{" "}
                  <span className="text-white font-semibold">
                    BBB accreditation since 2014
                  </span>
                  , Dillon leads a highly trained, licensed plumbing team. As a
                  Master Plumber, he specializes in diagnosing and resolving
                  complex residential plumbing issues, with extensive expertise
                  in non-invasive leak detection, slab leak remediation,
                  trenchless sewer repair, and whole-home repiping. Under his
                  leadership, S.W.A.T. Plumbing also provides advanced water
                  treatment solutions including tankless water heater
                  installations, water softeners, and reverse osmosis systems.
                </p>
              </div>

              {/* Expertise chips */}
              <div className="mt-7 pt-6 border-t border-white/8">
                <div className="flex items-center gap-2.5 mb-4">
                  <Wrench
                    className="h-3.5 w-3.5 text-red-400"
                    aria-hidden="true"
                  />
                  <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-red-400 font-bold">
                    Areas of Expertise
                  </span>
                  <div
                    className="h-px flex-1 bg-red-600/20"
                    aria-hidden="true"
                  />
                </div>
                <ul
                  role="list"
                  className="flex flex-wrap gap-1.5"
                >
                  {dillonExpertise.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#0a0c0e] border border-white/10 rounded-sm text-white/70 text-[11px] sm:text-xs font-medium"
                    >
                      <span
                        className="h-1 w-1 rounded-full bg-red-500 shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Credentials strip — bottom band, full-width */}
          <div className="border-t border-white/10 bg-[#0a0c0e]">
            <div className="px-6 sm:px-8 lg:px-10 py-5">
              <div className="flex items-center gap-2.5 mb-4">
                <BadgeCheck
                  className="h-3.5 w-3.5 text-red-400"
                  aria-hidden="true"
                />
                <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-red-400 font-bold">
                  Credentials
                </span>
                <div className="h-px flex-1 bg-red-600/20" aria-hidden="true" />
              </div>
              <ul
                role="list"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4"
              >
                {dillonCredentials.map((c) => {
                  const Icon = c.icon
                  return (
                    <li
                      key={c.label}
                      className="flex items-start gap-2.5 bg-[#0e1012] border border-white/10 rounded-sm p-3.5"
                    >
                      <div className="flex items-center justify-center w-7 h-7 rounded-sm bg-red-600/10 border border-red-600/30 shrink-0">
                        <Icon
                          className="h-3.5 w-3.5 text-red-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-white/85 text-xs font-semibold leading-tight">
                          {c.label}
                        </div>
                        <div className="text-red-300 text-[11px] font-mono tracking-wide mt-1">
                          {c.value}
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* AffiliationsSection — verified credentials & licensing body badges   */
/* Visible trust signals + E-E-A-T: BBB Accredited, TSBPE-licensed.     */
/* ------------------------------------------------------------------ */
type Affiliation = {
  src: string
  alt: string
  title: string
  tagline: string
  detail: string
  verifyLabel: string
  verifyHref: string
}

const affiliations: readonly Affiliation[] = [
  {
    src: "/badges/bbb-accredited.webp",
    alt: "Better Business Bureau Accredited Business — A+ Rating",
    title: "BBB Accredited Business · A+ Rating",
    tagline: "Accredited since September 19, 2014",
    detail:
      "A+ rating from the Better Business Bureau, recognized for meeting accreditation standards on transparency, advertising honesty, and customer responsiveness.",
    verifyLabel: "Verify on BBB.org",
    verifyHref:
      "https://www.bbb.org/us/tx/aledo/profile/plumber/swat-plumbing-0825-235977455",
  },
  {
    src: "/badges/tsbpe-licensed.webp",
    alt: "Texas State Board of Plumbing Examiners — Licensed Master Plumber",
    title: "Texas State Board of Plumbing Examiners",
    tagline: "Licensed Master Plumber · #M-39596",
    detail:
      "Operating under the Texas State Board of Plumbing Examiners license held by Dillon Patterson — Responsible Master Plumber for S.W.A.T. Plumbing LLC.",
    verifyLabel: "Verify on TSBPE.gov",
    verifyHref: "https://www.tsbpe.texas.gov/",
  },
] as const

type Award = {
  src: string
  alt: string
  title: string
  year: string
  location: string
  source: string
  verifyHref: string
}

const awards: readonly Award[] = [
  {
    src: "/badges/pulse-award-2026.webp",
    alt: "2026 Pulse of the City News Award Winner — SWAT Plumbing LLC",
    title: "Pulse Award for Excellence",
    year: "2026",
    location: "Fort Worth, TX",
    source: "Pulse of the City News · 5/5 Customer Satisfaction",
    verifyHref:
      "https://awards.pulseofthecitynews.com/swat-plumbing-llc-Fort-Worth-TX",
  },
  {
    src: "/badges/businessrate-best-of-2025.webp",
    alt: "Best of BusinessRate 2025 — Plumber, Aledo Texas",
    title: "Best of BusinessRate · Plumber",
    year: "2025",
    location: "Aledo, TX",
    source: "BusinessRate · Google review analysis",
    verifyHref:
      "https://businessrate.com/report/11001658?geocatSerial=1439861978",
  },
] as const

function AffiliationsSection() {
  return (
    <section
      id="credentials"
      // scroll-mt offsets the scroll target so the sticky SiteHeader doesn't
      // cover the top of this section when linked from #credentials.
      className="relative bg-[#0e1012] border-t border-white/8 py-16 lg:py-20 overflow-hidden scroll-mt-24 lg:scroll-mt-28"
      aria-labelledby="affiliations-heading"
    >
      <div
        className="absolute inset-0 tactical-grid opacity-20 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 inset-y-0 w-0.75 bg-linear-to-b from-transparent via-red-600 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Header */}
          <div className="lg:col-span-4">
            <TacticalLabel>Credentials &amp; Affiliations</TacticalLabel>
            <AccentLine />
            <h2
              id="affiliations-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-4"
            >
              Verified by the people
              <br />
              <span className="text-red-500">who hold the standard.</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              Our license, our accreditation, and the bodies that hold us to
              account for the work we do. Independently verifiable — click any
              badge to confirm.
            </p>
          </div>

          {/* Right column — credentials + awards stacked */}
          <div className="lg:col-span-8 space-y-8 lg:space-y-10">
            {/* Tier 1: Credentials & affiliations (large cards) */}
            <ul
              role="list"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5"
            >
              {affiliations.map((a) => (
                <li key={a.title}>
                  <a
                    href={a.verifyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block bg-[#0a0c0e] border border-white/12 hover:border-red-600/40 rounded-sm overflow-hidden transition-colors h-full"
                    aria-label={`${a.title} — opens external verification page`}
                  >
                    <div
                      className="absolute left-0 top-0 bottom-0 w-0.75 bg-red-600"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-red-600/60"
                      aria-hidden="true"
                    />

                    {/* Light-bg image plate — badges show best against near-white */}
                    <div className="relative h-32 sm:h-36 bg-white flex items-center justify-center p-5 border-b border-white/10">
                      <Image
                        src={a.src}
                        alt={a.alt}
                        width={220}
                        height={120}
                        className="max-h-full w-auto object-contain"
                      />
                    </div>

                    {/* Caption */}
                    <div className="p-5 pl-6">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="min-w-0">
                          <h3 className="text-white text-base font-black tracking-tight leading-tight">
                            {a.title}
                          </h3>
                          <p className="text-red-300 text-[11px] font-mono tracking-wide mt-1">
                            {a.tagline}
                          </p>
                        </div>
                        <ExternalLink
                          className="h-3.5 w-3.5 text-white/40 group-hover:text-red-400 transition-colors shrink-0 mt-1"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="text-white/55 text-xs leading-relaxed mb-3">
                        {a.detail}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono tracking-[0.18em] uppercase text-red-400 group-hover:text-red-300 font-bold transition-colors">
                        {a.verifyLabel}
                        <ExternalLink
                          className="h-3 w-3"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            {/* Tier 2: Awards & Recognition — compact row, supporting evidence */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Award
                  className="h-3.5 w-3.5 text-red-400"
                  aria-hidden="true"
                />
                <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-red-400 font-bold">
                  Awards &amp; Recognition
                </span>
                <div
                  className="h-px flex-1 bg-red-600/20"
                  aria-hidden="true"
                />
              </div>

              <ul
                role="list"
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4"
              >
                {awards.map((aw) => (
                  <li key={aw.title}>
                    <a
                      href={aw.verifyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-stretch gap-3 bg-[#0a0c0e] border border-white/10 hover:border-red-600/40 rounded-sm overflow-hidden transition-colors h-full"
                      aria-label={`${aw.title} (${aw.year}) — opens external verification page`}
                    >
                      {/* Compact dark plate — awards have gold/red palettes
                          with internal contrast, so they pop against the
                          card's dark surface (vs. credentials which need
                          white plates because of their black text). A subtle
                          warm radial glow under the badge gives a "lit
                          trophy" feel without an actual spotlight. */}
                      <div className="relative w-24 sm:w-28 shrink-0 flex items-center justify-center p-3 border-r border-white/10 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(251,191,36,0.10),transparent_70%)] pointer-events-none"
                          aria-hidden="true"
                        />
                        <Image
                          src={aw.src}
                          alt={aw.alt}
                          width={120}
                          height={120}
                          className="relative max-h-full w-auto object-contain"
                        />
                      </div>

                      {/* Caption */}
                      <div className="flex-1 min-w-0 p-3.5 pr-4 flex flex-col justify-center">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <p className="text-white text-sm font-black tracking-tight leading-tight">
                            {aw.title}
                          </p>
                          <ExternalLink
                            className="h-3 w-3 text-white/40 group-hover:text-red-400 transition-colors shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="text-red-300 text-[10px] font-mono tracking-wide mb-1.5">
                          {aw.year} · {aw.location}
                        </p>
                        <p className="text-white/50 text-[11px] leading-snug">
                          {aw.source}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-white/35 text-[11px] leading-relaxed">
                Click any award to view its public listing on the awarding
                body&apos;s website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
