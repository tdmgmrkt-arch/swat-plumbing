import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  CalendarDays,
  ArrowRight,
  ArrowUpRight,
  CreditCard,
  ShieldCheck,
  Clock,
  Sparkles,
  CheckCircle,
  Wallet,
  Flame,
  Droplets,
  Layers,
  Wrench,
  HelpCircle,
} from "lucide-react"

import { siteConfig } from "@/lib/site-config"
import { cn, canonicalUrl } from "@/lib/utils"
import { defaultOgImages, defaultTwitterImages } from "@/lib/metadata"
import { TacticalLabel, AccentLine } from "@/components/ui/tactical-panel"

import UtilityBar from "@/components/site/utility-bar"
import SiteHeader from "@/components/site/site-header"
import PageBreadcrumb from "@/components/site/page-breadcrumb"
import SiteFooter from "@/components/site/site-footer"
import MobileCtaBar from "@/components/site/mobile-cta-bar"
import FinalCta from "@/components/sections/final-cta"

const CANONICAL = canonicalUrl("/financing")
const GREENSKY_PREQUAL_URL =
  "https://www.greensky.com/prequal/gs/contact-verification?merchant=81029352&channel=External-Button-Prequal"

export const metadata: Metadata = {
  title:
    "Financing — S.W.A.T. Plumbing | GreenSky Home Improvement Financing",
  description:
    "Plumbing repairs and upgrades shouldn't wait for payday. S.W.A.T. Plumbing offers GreenSky financing for water heaters, repipes, slab leaks, and more — no impact to your credit to prequalify.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Financing — S.W.A.T. Plumbing | GreenSky Home Improvement Financing",
    description:
      "Plumbing repairs and upgrades shouldn't wait for payday. GreenSky financing available — no impact to your credit to prequalify.",
    siteName: siteConfig.name,
    images: defaultOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Financing — S.W.A.T. Plumbing | GreenSky",
    description:
      "Get the work done. Pay over time. GreenSky financing for plumbing repairs and upgrades.",
    images: defaultTwitterImages,
  },
}

const eligibleJobs = [
  {
    icon: Flame,
    title: "Tankless & tank water heaters",
    desc: "Installation, replacement, and upgrade — including same-as-cash promotional terms.",
  },
  {
    icon: Wrench,
    title: "Whole-home repiping",
    desc: "PEX or copper repipe projects that exceed typical service-call pricing.",
  },
  {
    icon: Layers,
    title: "Slab leak repair & rerouting",
    desc: "Major foundation-level repairs including tunneling and pipe reroutes.",
  },
  {
    icon: Droplets,
    title: "Water treatment systems",
    desc: "Whole-home filtration, softeners, and reverse osmosis installations.",
  },
] as const

const steps = [
  {
    n: "01",
    title: "Prequalify in minutes",
    body: "Click the GreenSky link below and complete a short eligibility check. It's a soft credit pull — no impact to your credit score.",
  },
  {
    n: "02",
    title: "Get approved & choose terms",
    body: "If you qualify, GreenSky shows you available loan options, monthly payment amounts, and promotional terms. Pick what works for your budget.",
  },
  {
    n: "03",
    title: "Schedule the work",
    body: "Once approved, call us to schedule. The crew arrives on time, completes the job, and you handle payment through GreenSky on the terms you chose.",
  },
] as const

const faqs = [
  {
    q: "Will applying affect my credit score?",
    a: "No. Prequalification is a soft credit check that does not impact your credit score. Only if you accept a loan offer and proceed to a full application does a hard inquiry occur.",
  },
  {
    q: "What kind of terms are available?",
    a: "GreenSky offers a range of promotional and standard terms, including reduced-rate, deferred-interest, and same-as-cash options depending on the loan amount and your credit profile. Available terms are shown to you during prequalification.",
  },
  {
    q: "Is there a minimum or maximum loan amount?",
    a: "Loan amounts vary by product and credit qualification. Most home improvement financing through GreenSky covers projects from a few hundred dollars up to several tens of thousands. The exact range you qualify for is presented during the application.",
  },
  {
    q: "Can I use financing for emergency repairs?",
    a: "Yes. Many homeowners use financing for unexpected plumbing emergencies — a slab leak, water heater failure, or sewer line collapse — because these repairs are urgent and often expensive. Our office can walk you through the prequalification process while we get a crew dispatched.",
  },
  {
    q: "Who is GreenSky?",
    a: "GreenSky is one of the largest home improvement financing providers in the United States, partnering with banks to offer loans through approved contractors. They have funded billions of dollars in home improvement projects and are owned by Sixth Street Partners.",
  },
] as const

/**
 * FAQPage JSON-LD — emitted from the same `faqs` array rendered visually
 * below, so the structured-data answer set matches what users see exactly.
 * Gives the page AI Overview + rich-result eligibility for financing Qs.
 */
const financingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
}

export default function FinancingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(financingFaqSchema),
        }}
      />

      <UtilityBar />
      <SiteHeader />

      <main id="main-content">
        <PageBreadcrumb current="Financing" />

        {/* ============================================================== */}
        {/* HERO                                                            */}
        {/* ============================================================== */}
        <section
          className="relative isolate bg-[#080a0c] overflow-hidden min-h-[520px] lg:min-h-[600px] flex items-center"
          aria-labelledby="financing-heading"
        >
          {/* Hero background image — sits behind all overlays. The dark
              gradient + radial glow + tactical grid layered on top keep the
              left-side copy area readable while the image bleeds through on
              the right where the GreenSky card lives. */}
          <Image
            src="/hero-images/hero-financing.webp"
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover object-center sm:object-right -z-20"
          />

          <div
            className="absolute inset-0 -z-10 bg-linear-to-r from-[#050608] from-0% via-[#080a0c]/85 via-45% to-[#080a0c]/55 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -z-10 bg-linear-to-t from-[#050608] via-transparent to-[#050608]/40 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_55%_at_20%_45%,rgba(220,38,38,0.13),transparent_70%)] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -z-10 tactical-grid opacity-25 pointer-events-none"
            aria-hidden="true"
          />

          <div
            className="absolute left-0 inset-y-0 w-1 bg-red-600 z-0"
            aria-hidden="true"
          />
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

          <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-12 items-center">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-red-600/15 border border-red-600/40 mb-5">
                  <CreditCard
                    className="h-3 w-3 text-red-400"
                    aria-hidden="true"
                  />
                  <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-red-300 font-bold">
                    Home Improvement Financing
                  </span>
                </span>

                <TacticalLabel>Financing</TacticalLabel>
                <AccentLine />

                <h1
                  id="financing-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-5"
                >
                  Get the work done.
                  <br />
                  <span className="text-red-500">Pay over time.</span>
                </h1>

                <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
                  Plumbing problems don&apos;t wait for payday. S.W.A.T. Plumbing
                  partners with{" "}
                  <span className="text-white font-semibold">GreenSky</span> to
                  offer flexible home improvement financing — including
                  same-as-cash promotional terms on qualifying installs.
                  Prequalify in minutes with no impact to your credit.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={GREENSKY_PREQUAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center justify-center gap-2",
                      "bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide uppercase",
                      "px-7 py-3.5 rounded-sm border border-red-500/40 min-h-12 transition-colors",
                      "shadow-[0_8px_32px_-8px_rgba(220,38,38,0.5)]"
                    )}
                  >
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                    See If You Prequalify
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href={siteConfig.phone.primary_tel}
                    className={cn(
                      "inline-flex items-center justify-center gap-2",
                      "border border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/35",
                      "font-semibold text-sm tracking-wide uppercase",
                      "px-7 py-3.5 rounded-sm min-h-12 transition-colors"
                    )}
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Talk to Us First
                  </Link>
                </div>

                <p className="mt-4 text-white/40 text-xs font-mono tracking-wide">
                  Soft credit check · No impact to your score · Approval in
                  minutes
                </p>
              </div>

              {/* GreenSky partner card */}
              <div className="relative bg-[#0a0c0e] border border-white/12 rounded-sm overflow-hidden lg:min-w-[320px] lg:max-w-[360px]">
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

                <div className="p-6 lg:p-7 pl-7 lg:pl-8">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-emerald-400 font-bold">
                      Financing Partner
                    </span>
                  </div>

                  <div className="mb-5">
                    <p className="text-3xl font-black text-white tracking-tight leading-none mb-1">
                      GreenSky
                      <span className="text-emerald-500">®</span>
                    </p>
                    <p className="text-white/55 text-xs mt-2 leading-relaxed">
                      Backed by federally insured, federal- and state-chartered
                      banks. Billions funded in home improvement loans.
                    </p>
                  </div>

                  <ul role="list" className="space-y-2.5 mb-5">
                    {[
                      "Simple application",
                      "Quick way to review your loan options",
                      "No impact to your credit score",
                    ].map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-2.5 text-white/75 text-xs leading-relaxed"
                      >
                        <CheckCircle
                          className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-px"
                          aria-hidden="true"
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={GREENSKY_PREQUAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center justify-center gap-2 w-full",
                      "bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wider uppercase",
                      "px-4 py-3 rounded-sm border border-emerald-500/40 min-h-11 transition-colors"
                    )}
                  >
                    See if You Prequalify
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* WHY FINANCING                                                   */}
        {/* ============================================================== */}
        <section
          className="relative bg-[#0e1012] border-y border-white/8 py-16 lg:py-20 overflow-hidden"
          aria-labelledby="why-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-20 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-5">
                <TacticalLabel>Why Financing</TacticalLabel>
                <AccentLine />
                <h2
                  id="why-heading"
                  className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-5"
                >
                  Big plumbing jobs
                  <br />
                  <span className="text-red-500">shouldn&apos;t wait.</span>
                </h2>
                <p className="text-white/65 text-base leading-relaxed mb-4">
                  Slab leaks, sewer line collapses, and water heater failures
                  don&apos;t schedule themselves around your budget. Waiting on a
                  major plumbing repair almost always makes the eventual
                  damage — and the eventual bill — worse.
                </p>
                <p className="text-white/55 text-sm leading-relaxed">
                  Financing lets you green-light the repair today, protect your
                  home from secondary damage, and spread the cost across
                  manageable monthly payments.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-5">
                  <Wallet
                    className="h-3.5 w-3.5 text-red-400"
                    aria-hidden="true"
                  />
                  <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-red-400 font-bold">
                    What You Can Finance
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
                  {eligibleJobs.map((job) => {
                    const Icon = job.icon
                    return (
                      <li
                        key={job.title}
                        className="relative bg-[#0a0c0e] border border-white/10 rounded-sm p-5 overflow-hidden"
                      >
                        <div
                          className="absolute left-0 top-0 bottom-0 w-0.75 bg-red-600"
                          aria-hidden="true"
                        />
                        <div className="pl-2">
                          <div className="flex items-center justify-center w-9 h-9 rounded-sm bg-red-600/10 border border-red-600/30 mb-3">
                            <Icon
                              className="h-4 w-4 text-red-400"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="text-white text-sm font-black tracking-tight leading-tight mb-2">
                            {job.title}
                          </p>
                          <p className="text-white/55 text-xs leading-relaxed">
                            {job.desc}
                          </p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* HOW IT WORKS                                                    */}
        {/* ============================================================== */}
        <section
          className="relative bg-[#080a0c] py-16 lg:py-20 overflow-hidden"
          aria-labelledby="how-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-25 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
            <div className="mb-12 max-w-2xl">
              <TacticalLabel>How It Works</TacticalLabel>
              <AccentLine />
              <h2
                id="how-heading"
                className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight"
              >
                Three steps.
                <br />
                <span className="text-red-500">No surprises.</span>
              </h2>
            </div>

            <ol
              role="list"
              className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5"
            >
              {steps.map((step) => (
                <li key={step.n}>
                  <article className="relative bg-[#0e1012] border border-white/10 rounded-sm p-6 lg:p-7 h-full overflow-hidden">
                    <div
                      className="absolute top-3 right-4 text-5xl font-black text-white/5 font-mono leading-none select-none"
                      aria-hidden="true"
                    >
                      {step.n}
                    </div>
                    <div className="relative">
                      <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-red-400 font-bold">
                        Step {step.n}
                      </span>
                      <div className="h-0.5 w-8 bg-red-600 mt-2 mb-4" aria-hidden="true" />
                      <h3 className="text-white text-lg font-black tracking-tight leading-tight mb-3">
                        {step.title}
                      </h3>
                      <p className="text-white/65 text-sm leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ol>

            {/* Trust signals */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-0 border border-white/10 rounded-sm divide-y sm:divide-y-0 sm:divide-x divide-white/10 overflow-hidden">
              {[
                {
                  icon: ShieldCheck,
                  value: "Soft pull",
                  label: "No credit impact to prequalify",
                },
                {
                  icon: Clock,
                  value: "Minutes",
                  label: "Average prequalification time",
                },
                {
                  icon: Sparkles,
                  value: "Promotional",
                  label: "Same-as-cash terms available",
                },
              ].map((s) => {
                const Icon = s.icon
                return (
                  <div
                    key={s.label}
                    className="bg-[#0a0c0e] p-5 flex items-start gap-3"
                  >
                    <div className="flex items-center justify-center w-9 h-9 rounded-sm bg-red-600/10 border border-red-600/30 shrink-0">
                      <Icon
                        className="h-4 w-4 text-red-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-white font-black text-sm tracking-tight leading-tight">
                        {s.value}
                      </p>
                      <p className="text-white/55 text-xs leading-relaxed mt-1">
                        {s.label}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* FAQ                                                             */}
        {/* ============================================================== */}
        <section
          className="relative bg-[#0e1012] border-y border-white/8 py-16 lg:py-20 overflow-hidden"
          aria-labelledby="faq-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-20 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-4xl mx-auto px-5 sm:px-6">
            <div className="mb-10 max-w-2xl">
              <TacticalLabel>Questions</TacticalLabel>
              <AccentLine />
              <h2
                id="faq-heading"
                className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight"
              >
                Common financing
                <br />
                <span className="text-red-500">questions.</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <article
                  key={faq.q}
                  className="relative bg-[#0a0c0e] border border-white/10 rounded-sm p-5 lg:p-6 overflow-hidden"
                >
                  <div
                    className="absolute left-0 top-0 bottom-0 w-0.75 bg-red-600"
                    aria-hidden="true"
                  />
                  <div className="pl-3">
                    <div className="flex items-start gap-2.5 mb-2.5">
                      <HelpCircle
                        className="h-4 w-4 text-red-400 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <h3 className="text-white text-base sm:text-lg font-black tracking-tight leading-snug">
                        {faq.q}
                      </h3>
                    </div>
                    <p className="text-white/65 text-sm sm:text-base leading-relaxed pl-6">
                      {faq.a}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* PREQUALIFY CTA                                                  */}
        {/* ============================================================== */}
        <section
          className="relative bg-[#080a0c] py-16 lg:py-20 overflow-hidden"
          aria-labelledby="cta-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-25"
            aria-hidden="true"
          />
          <div
            className="absolute right-0 inset-y-0 w-0.75 bg-linear-to-b from-transparent via-red-600 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-5xl mx-auto px-5 sm:px-6">
            <div className="relative bg-[#0e1012] border border-white/12 rounded-sm p-8 lg:p-12 overflow-hidden">
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

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 lg:items-center">
                <div>
                  <TacticalLabel>Ready When You Are</TacticalLabel>
                  <AccentLine />
                  <h2
                    id="cta-heading"
                    className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-4"
                  >
                    Check your eligibility now.
                  </h2>
                  <p className="text-white/65 text-base leading-relaxed max-w-lg">
                    A soft credit pull takes minutes and tells you exactly what
                    terms you qualify for. No commitment, no impact to your
                    score, no obligation to schedule work.
                  </p>
                </div>

                <div className="flex flex-col gap-3 lg:min-w-[18rem]">
                  <Link
                    href={GREENSKY_PREQUAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center justify-center gap-2",
                      "bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm tracking-wide uppercase",
                      "px-7 py-4 rounded-sm border border-emerald-500/40 min-h-13 transition-colors",
                      "shadow-[0_8px_32px_-8px_rgba(16,185,129,0.4)]"
                    )}
                  >
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                    See if You Prequalify
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/contact-us"
                    className={cn(
                      "inline-flex items-center justify-center gap-2",
                      "border border-white/25 text-white bg-transparent hover:bg-white/8 hover:border-white/40",
                      "font-semibold text-sm tracking-wide uppercase",
                      "px-7 py-4 rounded-sm min-h-13 transition-colors"
                    )}
                  >
                    <CalendarDays
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                    Schedule Service
                  </Link>
                  <Link
                    href={siteConfig.phone.primary_tel}
                    className="text-center text-white/55 hover:text-white text-xs font-mono tracking-wider transition-colors py-1 inline-flex items-center justify-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    Or call {siteConfig.phone.primary}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCta />
      </main>

      <SiteFooter />
      <MobileCtaBar />
    </>
  )
}
