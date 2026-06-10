import Image from "next/image"
import { Image as ImageIcon } from "lucide-react"
import { AccentLine, TacticalLabel } from "@/components/ui/tactical-panel"
import { cn } from "@/lib/utils"

/**
 * "Meet the Unit" — humanizes the brand with team + fleet imagery.
 * Currently shows photo PLACEHOLDERS with descriptions and AI prompts.
 *
 * To ship: either (a) drop real photography into /public/team/* and replace
 * each slot's `img` prop, or (b) generate AI imagery via creative-director
 * using the `prompt` strings below.
 */

type PhotoSlot = {
  /** Section header label */
  label: string
  /** Editorial caption that ships with the photo */
  caption: string
  /** Target output dimensions */
  dimensions: string
  /** Brief description of subject for the photographer / generator */
  description: string
  /** AI generation prompt — Nano Banana / Midjourney compatible */
  prompt: string
  /** Aspect ratio for the placeholder box */
  aspect: "16/9" | "4/5" | "1/1" | "3/4"
  /** Visual span on lg+ — for layout balance */
  span: "lg:col-span-2" | "lg:col-span-1"
  /** Featured: gets larger title + tag */
  featured?: boolean
  /** Real image source — when present, renders the photo instead of placeholder */
  img?: string
  /** Alt text for the real image */
  alt?: string
}

const slots: PhotoSlot[] = [
  {
    label: "The Team",
    caption: "Texas-licensed master plumbers. Background-checked. Trained on every truck.",
    dimensions: "1600 × 900",
    description:
      "Group shot: 4–6 S.W.A.T. Plumbing technicians in branded red-and-black uniforms standing in front of a service truck, mid-morning natural light, confident relaxed stance — not posed military formation. Visible name patches and SWAT logo.",
    prompt:
      "Editorial photograph of a team of 5 plumbing technicians in matching dark uniforms with red accents and small SWAT-style logo patches, standing relaxed in front of a black service truck on a Texas residential street, golden hour lighting, shallow depth of field, 35mm lens look, candid not posed, faces visible and confident, clean professional, no AI artifacts, photorealistic.",
    aspect: "16/9",
    span: "lg:col-span-2",
    featured: true,
    img: "/team.jpg",
    alt: "S.W.A.T. Plumbing technicians in branded uniforms standing in front of a service truck.",
  },
  {
    label: "Fleet Ready",
    caption: "Fully stocked trucks. Parts to finish most jobs in a single visit.",
    dimensions: "1200 × 1500",
    description:
      "Hero shot of one S.W.A.T. service truck — black with red accent stripes and clean SWAT branding — parked in driveway, low-angle three-quarter view, blue hour lighting, headlights on. Should feel cinematic, not catalog.",
    prompt:
      "Cinematic photograph of a black plumbing service truck with red accent stripes and minimal SWAT-style branding, parked in a Texas driveway at blue hour, headlights on, low three-quarter angle, moody automotive photography style, sharp detail, photorealistic, no AI artifacts.",
    aspect: "4/5",
    span: "lg:col-span-1",
    img: "/swatvandriveway.jpeg",
    alt: "S.W.A.T. Plumbing service van parked in a residential driveway.",
  },
  {
    label: "At Work",
    caption: "Diagnosing a slab leak — electronic detection, no demolition guesswork.",
    dimensions: "1200 × 900",
    description:
      "Close-up of a technician kneeling on a residential floor using electronic leak-detection equipment. Hands and equipment in focus, branded uniform sleeve visible. Documentary style — looks like real work, not a stock photo.",
    prompt:
      "Documentary photograph of a plumber kneeling on a tiled residential floor, using handheld electronic leak detection equipment, hands and tool sharp in focus, dark uniform sleeve with subtle red trim visible at edge of frame, warm indoor lighting, shallow depth of field, photojournalism aesthetic, photorealistic, no AI artifacts.",
    aspect: "4/5",
    span: "lg:col-span-1",
    img: "/atwork.jpeg",
    alt: "S.W.A.T. Plumbing technician on a residential job.",
  },
  {
    label: "Dispatch Center",
    caption: "Coordinated response — every call routed to the closest available unit.",
    dimensions: "1600 × 900",
    description:
      "Wide shot of the Aledo dispatch office — multiple monitors showing job-map view, dispatcher in branded polo, ambient red glow from screens. Should feel like an operations room, not a generic office.",
    prompt:
      "Wide editorial photograph of a small plumbing-company dispatch center, two monitors with map software visible, a dispatcher wearing a dark polo with subtle red branding, warm ambient lighting with subtle red screen glow, modern industrial office aesthetic, shallow depth of field, photorealistic, professional documentary style.",
    aspect: "16/9",
    span: "lg:col-span-2",
    img: "/dispatch.jpeg",
    alt: "S.W.A.T. Plumbing dispatch center routing service calls.",
  },
]

export default function TeamFleet() {
  return (
    <section
      className="relative bg-white py-20 lg:py-28"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Section header */}
        <div className="mb-12 lg:mb-16 max-w-3xl">
          <TacticalLabel>The Unit</TacticalLabel>
          <AccentLine />
          <h2
            id="team-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight"
          >
            Meet the Team
            <br />
            <span className="text-red-600">Behind the Response.</span>
          </h2>
          <p className="mt-5 text-gray-500 text-base sm:text-lg leading-relaxed">
            Texas-licensed master plumbers, fully stocked trucks, and a dispatch
            team that routes every call to the closest available unit.
          </p>
        </div>

        {/* Mobile: horizontal snap carousel (peek of next card hints at swipe).
            lg+: classic 3-column grid. */}
        <div
          className={cn(
            "-mx-5 sm:-mx-6",
            "flex gap-5 overflow-x-auto snap-x snap-mandatory",
            "px-5 sm:px-6 scroll-px-5 sm:scroll-px-6 pb-2",
            "scrollbar-none",
            "lg:mx-0 lg:px-0 lg:pb-0 lg:scroll-px-0",
            "lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible"
          )}
        >
          {slots.map((slot) => (
            <PlaceholderCard key={slot.label} slot={slot} />
          ))}
        </div>

      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Placeholder Card — styled box with photo dimensions, description,    */
/* and the AI prompt ready to copy.                                     */
/* ------------------------------------------------------------------ */
function PlaceholderCard({ slot }: { slot: PhotoSlot }) {
  return (
    <article
      className={cn(
        "group relative bg-gray-950 rounded-sm overflow-hidden border border-gray-200",
        "snap-start shrink-0 w-[80vw] sm:w-[55vw]",
        "lg:w-auto lg:shrink lg:snap-align-none",
        slot.span
      )}
    >
      {/* Photo area — uniform 4/5 portrait on mobile carousel for consistent
          card heights; reverts to the slot's natural aspect on lg+. */}
      <div
        className="relative bg-linear-to-br from-gray-900 via-gray-950 to-black border-b border-white/10 overflow-hidden aspect-4/5 lg:aspect-(--lg-aspect)"
        style={{ ["--lg-aspect" as string]: slot.aspect } as React.CSSProperties}
      >
        {slot.img ? (
          <Image
            src={slot.img}
            alt={slot.alt ?? slot.label}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority={slot.featured}
          />
        ) : (
          <>
            {/* Diagonal hatching to make it obvious this is a placeholder */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(220,38,38,0.4) 0, rgba(220,38,38,0.4) 1px, transparent 1px, transparent 16px)",
              }}
              aria-hidden="true"
            />
            {/* Center placeholder content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-600/15 border border-red-600/40 rounded-sm mb-4">
                <ImageIcon className="h-3 w-3 text-red-400" aria-hidden="true" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-red-300 font-mono">
                  Placeholder
                </span>
              </div>
              <div className="text-white text-lg sm:text-xl font-black tracking-tight mb-1.5 uppercase">
                {slot.label}
              </div>
              <div className="text-white/45 text-[10px] sm:text-xs font-mono tracking-wider mb-3">
                {slot.dimensions}
              </div>
              <div className="text-white/65 text-xs sm:text-sm leading-relaxed max-w-md">
                {slot.description}
              </div>
            </div>
          </>
        )}

        {/* Tactical corner marks */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-red-600/50 z-10" aria-hidden="true" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-red-600/50 z-10" aria-hidden="true" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-red-600/50 z-10" aria-hidden="true" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-red-600/50 z-10" aria-hidden="true" />

        {/* Featured tag */}
        {slot.featured && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#0a0d12]/90 border border-red-600/40 rounded-sm backdrop-blur-sm z-10">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
            </span>
            <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-red-400 font-mono">
              Hero Shot
            </span>
          </div>
        )}
      </div>

      {/* Caption + AI prompt expandable area */}
      <div className="p-5 lg:p-6 bg-gray-950">
        <div className="text-white text-sm font-bold tracking-wide mb-2 uppercase">
          {slot.label}
        </div>
        <p className="text-white/65 text-sm leading-relaxed mb-4">
          {slot.caption}
        </p>
      </div>
    </article>
  )
}
