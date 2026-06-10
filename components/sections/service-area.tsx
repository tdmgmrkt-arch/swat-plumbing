import Link from "next/link"
import { MapPin, ArrowRight, ArrowUpRight } from "lucide-react"
import { AccentLine, TacticalLabel } from "@/components/ui/tactical-panel"
import { siteConfig } from "@/lib/site-config"

type City = { name: string; slug: string; featured?: boolean }

/**
 * Two hubs (Aledo + Fort Worth) shown as peers — visualizes the coordination
 * story we tell everywhere else but never previously rendered. Primary
 * Response Zones below shows 10 featured cities (49-total list lives in the
 * footer to avoid duplicate scroll real estate).
 */

type Hub = {
  name: string
  cityState: string
  label: string
  coords: { lat: string; lon: string }
  coverage: string
  primary?: boolean
}

const hubs: Hub[] = [
  {
    name: "Aledo",
    cityState: "ALEDO, TX",
    label: "Primary Base",
    coords: { lat: "32.6987° N", lon: "97.6097° W" },
    coverage: "Tarrant + Parker county dispatch",
    primary: true,
  },
  {
    name: "Fort Worth",
    cityState: "FORT WORTH, TX",
    label: "Response Hub",
    coords: { lat: "32.7555° N", lon: "97.3308° W" },
    coverage: "Urban core + East Tarrant dispatch",
  },
]

export default function ServiceArea() {
  const cities = siteConfig.serviceArea as readonly City[]
  const hubSlugs = new Set(["aledo-tx", "fort-worth-tx"])

  // Featured cities, minus the two hubs (which get their own cards above)
  const featured = cities.filter(
    (c) => c.featured && !hubSlugs.has(c.slug)
  )

  const cityCount = cities.length

  return (
    <section
      className="relative bg-[#080a0c] py-20 lg:py-28 overflow-hidden"
      aria-labelledby="area-heading"
    >
      {/* Tactical grid texture — reinforces the command-center vibe */}
      <div className="absolute inset-0 tactical-grid opacity-40 pointer-events-none" aria-hidden="true" />

      {/* Radar / concentric rings — centered behind the hub cards */}
      <svg
        className="absolute left-1/2 top-72 -translate-x-1/2 w-225 max-w-none opacity-[0.08] pointer-events-none"
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="300" cy="300" r="80" stroke="rgb(220 38 38)" strokeWidth="1" />
        <circle cx="300" cy="300" r="160" stroke="rgb(220 38 38)" strokeWidth="1" strokeDasharray="3 5" />
        <circle cx="300" cy="300" r="240" stroke="rgb(255 255 255)" strokeWidth="1" strokeDasharray="2 8" />
        <circle cx="300" cy="300" r="290" stroke="rgb(255 255 255)" strokeWidth="1" strokeDasharray="1 12" />
        <line x1="10" y1="300" x2="590" y2="300" stroke="rgb(255 255 255)" strokeWidth="0.5" strokeDasharray="2 6" />
        <line x1="300" y1="10" x2="300" y2="590" stroke="rgb(255 255 255)" strokeWidth="0.5" strokeDasharray="2 6" />
        <circle cx="300" cy="300" r="3" fill="rgb(220 38 38)" />
      </svg>

      {/* Soft red center glow behind the hubs */}
      <div
        className="absolute left-1/2 top-72 -translate-x-1/2 w-180 h-180 -translate-y-1/4 bg-[radial-gradient(circle,rgba(220,38,38,0.05),transparent_60%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">

        {/* Section header — tight, brand-voice headline */}
        <div className="mb-12 lg:mb-16 max-w-3xl">
          <TacticalLabel className="text-red-400">Area of Operations</TacticalLabel>
          <AccentLine />
          <h2
            id="area-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Two Hubs. {cityCount} Cities.
            <br />
            <span className="text-red-500">One Standard.</span>
          </h2>
          <p className="mt-5 text-white/55 text-base sm:text-lg leading-relaxed">
            Coordinated dispatch from Aledo and Fort Worth — covering{" "}
            {cityCount} communities across four North Texas counties.
          </p>
        </div>

        {/* Two hub cards — equal peers, with a visual coordination cue between them */}
        <div className="relative mb-14 lg:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {hubs.map((hub) => (
              <HubCard key={hub.name} hub={hub} />
            ))}
          </div>
        </div>

        {/* Primary Response Zones header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1 bg-white/10" aria-hidden="true" />
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-red-400 shrink-0">
            Primary Response Zones
          </div>
          <div className="h-px flex-1 bg-white/10" aria-hidden="true" />
        </div>

        {/* Featured cities (excluding the two hubs) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {featured.map((city, index) => (
            <CityCard key={city.slug} city={city} index={index + 1} />
          ))}
        </div>

        {/* Closing CTA + note — extended coverage lives in the footer */}
        <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-mono leading-relaxed">
            Don&apos;t see your city? Call us — extended coverage across {cityCount} North Texas communities.
          </p>
          <Link
            href="/areas-served"
            className="inline-flex items-center gap-2 border border-white/15 hover:border-red-600/40 text-white/75 hover:text-white text-xs font-semibold tracking-[0.15em] uppercase px-5 py-2.5 rounded-sm transition-colors font-mono shrink-0"
          >
            View All {cityCount} Communities
            <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Hub Card — tactical data card, used for both Aledo + Fort Worth      */
/* ------------------------------------------------------------------ */
function HubCard({ hub }: { hub: Hub }) {
  return (
    <div
      className="relative bg-[#0e1012] rounded-sm overflow-hidden border border-white/10"
    >
      {/* Primary hub gets a red command stripe — consistent with our other primary cards */}
      {hub.primary && (
        <div
          className="absolute left-0 top-0 bottom-0 w-0.75 bg-red-600"
          aria-hidden="true"
        />
      )}

      {/* Tactical corner marks */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-red-600/55 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-red-600/55 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-red-600/55 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-red-600/55 pointer-events-none" aria-hidden="true" />

      {/* Header row: label + live indicator */}
      <div className="flex items-center justify-between px-6 pt-6 pb-3.5 border-b border-white/8">
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/65 font-semibold">
          {hub.label}
        </span>
        <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
        </span>
      </div>

      {/* Main identifier */}
      <div className="px-6 pt-5 pb-4">
        <div className="text-white text-xl lg:text-2xl font-black tracking-[0.12em] font-mono">
          {hub.cityState}
        </div>
      </div>

      {/* Coordinate readout */}
      <div className="px-6 pb-5 space-y-1.5">
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-red-400/80 tracking-widest">LAT</span>
          <span className="text-white/65">{hub.coords.lat}</span>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-red-400/80 tracking-widest">LON</span>
          <span className="text-white/65">{hub.coords.lon}</span>
        </div>
      </div>

      {/* Coverage note */}
      <div className="px-6 pb-5">
        <div className="flex items-center gap-2 text-xs">
          <MapPin className="h-3 w-3 text-white/35 shrink-0" aria-hidden="true" />
          <span className="text-white/50 leading-relaxed">{hub.coverage}</span>
        </div>
      </div>

      {/* Status footer — neutral on both cards; Aledo's primary cue is the
          red command stripe + "Primary Base" label, not a tinted footer */}
      <div className="px-6 py-2.5 border-t bg-white/4 border-white/8">
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase font-bold text-white/55">
          Active · 24/7
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Featured city card — dark themed                                     */
/* ------------------------------------------------------------------ */
function CityCard({ city, index }: { city: City; index: number }) {
  const inner = (
    <>
      <div className="font-mono text-[9px] text-white/40 tracking-wider group-hover:text-red-400 transition-colors">
        {String(index).padStart(2, "0")}
      </div>
      <div className="flex items-center gap-1.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5">
        <MapPin className="h-3.5 w-3.5 text-red-500 shrink-0" aria-hidden="true" />
        <span className="text-white text-base font-semibold leading-tight group-hover:text-red-300 transition-colors">
          {city.name}
        </span>
      </div>
      <ArrowUpRight
        className="absolute top-3 right-3 h-3.5 w-3.5 text-red-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out"
        aria-hidden="true"
      />
    </>
  )

  const cls =
    "group relative flex flex-col items-start gap-2 bg-[#0e1012] border border-white/10 rounded-sm p-4 hover:border-red-600/50 hover:bg-[#13181c] transition-colors duration-200 min-h-20"

  if (siteConfig.cityPagesLive) {
    return (
      <Link
        href={`/areas-served/${city.slug}`}
        className={cls}
        aria-label={`Plumbing service in ${city.name}, TX`}
      >
        {inner}
      </Link>
    )
  }

  return (
    <div className={cls} aria-label={`Plumbing service in ${city.name}, TX`}>
      {inner}
    </div>
  )
}
