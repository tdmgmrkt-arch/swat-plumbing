import Image from "next/image"
import Link from "next/link"
import { BadgeCheck, Calendar, ShieldCheck } from "lucide-react"

/**
 * Compact horizontal credentials bar.
 *
 * Surfaces SWAT's highest-trust signals (BBB A+, Texas Master Plumber
 * license #, founding year) outside the about-us page so visitors
 * researching from a service page or city page don't have to navigate
 * away to verify credibility. Per the SXO audit, the "researcher"
 * persona never clicks through to /about-us — the evidence has to find
 * them where they land.
 *
 * Designed as a thin strip (no significant vertical weight) that sits
 * directly under the page hero.
 */
export default function CredentialsStrip() {
  return (
    <section
      className="relative bg-[#0e1012] border-y border-white/8 py-3 sm:py-4 lg:py-5 overflow-hidden"
      aria-label="Credentials and accreditations"
    >
      <div
        className="absolute left-0 inset-y-0 w-0.5 bg-red-600"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        {/* Layout strategy:
            - Mobile (<640px): 2x2 grid, smaller labels — halves vertical height
              and the row stops dominating above-the-fold space
            - Tablet (sm 640px+): 4-up grid
            - Desktop (lg 1024px+): flex row, full credentials text */}
        <ul
          role="list"
          className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 lg:flex lg:flex-wrap lg:items-center lg:justify-between lg:gap-x-6 text-white/80"
        >
          {/* BBB A+ — clickable, opens public profile */}
          <li>
            <a
              href="https://www.bbb.org/us/tx/aledo/profile/plumber/swat-plumbing-0825-235977455"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 sm:gap-2.5 transition-opacity hover:opacity-90"
              aria-label="BBB Accredited Business — A+ Rating since 2014 (opens BBB profile in new tab)"
            >
              {/* Light card behind badge so the BBB blue/orange reads cleanly on dark bg */}
              <span className="flex items-center justify-center w-8 h-7 sm:w-10 sm:h-8 bg-white rounded-sm p-1 shrink-0">
                <Image
                  src="/badges/bbb-accredited.webp"
                  alt=""
                  width={60}
                  height={32}
                  className="w-auto h-full object-contain"
                />
              </span>
              <span className="flex flex-col leading-tight min-w-0">
                <span className="text-[9px] font-mono tracking-[0.15em] uppercase text-white/55 font-semibold">
                  BBB
                </span>
                <span className="text-white text-xs sm:text-sm font-bold tracking-tight">
                  A+ <span className="hidden sm:inline">· Since 2014</span>
                </span>
              </span>
            </a>
          </li>

          {/* Texas Master Plumber license */}
          <li>
            <a
              href="https://www.tsbpe.texas.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 sm:gap-2.5 transition-opacity hover:opacity-90"
              aria-label="Texas Master Plumber License #M-39596 (verify on TSBPE.gov)"
            >
              <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-sm bg-red-600/10 border border-red-600/40 shrink-0">
                <BadgeCheck
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-400"
                  aria-hidden="true"
                />
              </span>
              <span className="flex flex-col leading-tight min-w-0">
                <span className="text-[9px] font-mono tracking-[0.15em] uppercase text-white/55 font-semibold">
                  TX <span className="hidden sm:inline">Master Plumber</span>
                  <span className="sm:hidden">License</span>
                </span>
                <span className="text-white text-xs sm:text-sm font-bold tracking-tight font-mono">
                  #M-39596
                </span>
              </span>
            </a>
          </li>

          {/* Founded — non-clickable, just a fact */}
          <li className="inline-flex items-center gap-2 sm:gap-2.5">
            <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-sm bg-red-600/10 border border-red-600/40 shrink-0">
              <Calendar
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-400"
                aria-hidden="true"
              />
            </span>
            <span className="flex flex-col leading-tight min-w-0">
              <span className="text-[9px] font-mono tracking-[0.15em] uppercase text-white/55 font-semibold">
                <span className="hidden sm:inline">Family-Owned</span>
                <span className="sm:hidden">Founded</span>
              </span>
              <span className="text-white text-xs sm:text-sm font-bold tracking-tight">
                <span className="hidden sm:inline">Serving North Texas </span>
                Since 2013
              </span>
            </span>
          </li>

          {/* Licensed · Bonded · Insured — non-clickable */}
          <li className="inline-flex items-center gap-2 sm:gap-2.5">
            <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-sm bg-red-600/10 border border-red-600/40 shrink-0">
              <ShieldCheck
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-400"
                aria-hidden="true"
              />
            </span>
            <span className="flex flex-col leading-tight min-w-0">
              <span className="text-[9px] font-mono tracking-[0.15em] uppercase text-white/55 font-semibold">
                Coverage
              </span>
              <span className="text-white text-xs sm:text-sm font-bold tracking-tight">
                <span className="hidden sm:inline">Licensed · Bonded · </span>
                Insured<span className="sm:hidden"> · Bonded</span>
              </span>
            </span>
          </li>

          {/* Full credentials → about-us. Anchor target uses scroll-mt to
              clear the sticky site header so the section top is visible.
              Spans both columns on mobile (centered below the 2x2) and sits
              inline on lg+. */}
          <li className="col-span-2 sm:col-span-4 lg:col-span-1 flex justify-center lg:justify-start mt-3 sm:mt-4 lg:mt-0">
            <Link
              href="/about-us#credentials"
              className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.18em] uppercase text-red-400 hover:text-red-300 font-bold transition-colors"
            >
              View all credentials
              <span aria-hidden="true">→</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
