import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BadgePercent, Check, Shield } from "lucide-react"

export default function FinancingBanner() {
  return (
    <section
      className="relative bg-[#0e1012] border-y border-white/8 py-16 lg:py-20 overflow-hidden"
      aria-labelledby="financing-heading"
    >
      {/* Atmospheric background image — muted, grayscale, masked left-to-right */}
      <Image
        src="/financing.jpeg"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="absolute inset-0 object-cover grayscale opacity-20 pointer-events-none"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-[#0e1012] from-30% via-[#0e1012]/75 via-65% to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Tactical grid */}
      <div className="absolute inset-0 tactical-grid opacity-30" aria-hidden="true" />

      {/* Red accent line — left edge */}
      <div className="absolute left-0 inset-y-0 w-0.75 bg-linear-to-b from-transparent via-red-600 to-transparent" aria-hidden="true" />

      {/* Corner marks */}
      <div className="absolute top-5 right-5 w-5 h-5 border-t-2 border-r-2 border-red-600/30" aria-hidden="true" />
      <div className="absolute bottom-5 left-5 w-5 h-5 border-b-2 border-l-2 border-red-600/30" aria-hidden="true" />

      {/* Glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(220,38,38,0.06),transparent)]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-stretch">

          {/* Left: headline + supporting copy + secondary offer chip */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <div className="h-px w-8 bg-red-600/40" aria-hidden="true" />
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-red-400 font-mono">
                Payment &amp; Offers
              </span>
            </div>

            <h2
              id="financing-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
            >
              Flexible Payment.
              <br />
              <span className="text-red-500">No Surprises.</span>
            </h2>

            <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-lg">
              Flat-rate estimates upfront. Financing on approved repairs.
              Service discounts that stack.
            </p>

            {/* Secondary offer — Armed Forces / Public Defenders 10% */}
            <div className="mt-2 flex items-start gap-3 bg-white/4 border border-white/8 rounded-sm p-4 max-w-md">
              <div className="w-9 h-9 flex items-center justify-center bg-red-600/15 border border-red-600/25 rounded-sm shrink-0">
                <Shield className="h-4 w-4 text-red-400" aria-hidden="true" />
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="text-white font-bold text-base">10% Off</span>
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-red-400/80 font-mono">
                    Service Discount
                  </span>
                </div>
                <div className="text-white/55 text-xs leading-relaxed">
                  Armed Forces &amp; Public Defenders. Our way of saying thank you
                  to those who serve and protect.
                </div>
              </div>
            </div>
          </div>

          {/* Right: primary financing panel — substantive CTA block, not floating buttons */}
          <div className="relative bg-[#13181c] border border-red-600/30 rounded-sm p-7 lg:p-8 flex flex-col">
            {/* Red command stripe */}
            <div
              className="absolute left-0 top-0 bottom-0 w-0.75 bg-red-600"
              aria-hidden="true"
            />
            {/* Tactical corner marks */}
            <div
              className="absolute top-3 left-3 w-3 h-3 border-t border-l border-red-600/60"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-red-600/60"
              aria-hidden="true"
            />

            {/* Tag */}
            <div className="inline-flex items-center gap-1.5 mb-5 w-max">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
              </span>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-red-400 font-mono">
                Primary Financing
              </span>
            </div>

            {/* Big offer text */}
            <div className="mb-1">
              <div className="text-white text-3xl lg:text-4xl font-black tracking-tight leading-none">
                12 Months
              </div>
              <div className="text-red-500 text-3xl lg:text-4xl font-black tracking-tight leading-none mt-1">
                Same-As-Cash
              </div>
            </div>

            {/* Trust bullets */}
            <ul role="list" className="mt-6 space-y-2.5 border-t border-white/8 pt-5">
              {[
                "No interest if paid within term",
                "Fast approval",
                "Most repairs qualify",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2.5 text-white/80 text-sm font-medium"
                >
                  <Check
                    className="h-3.5 w-3.5 text-red-500 shrink-0"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                  {b}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/financing"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide uppercase px-6 py-3.5 rounded-sm border border-red-500/40 min-h-12 transition-colors"
              >
                <BadgePercent className="h-4 w-4" aria-hidden="true" />
                Apply for Financing
              </Link>
              <Link
                href="/coupons-rebates"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-white/60 hover:text-red-400 transition-colors"
              >
                View All Offers
                <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
