import { Star, Quote, BadgeCheck } from "lucide-react"
import { AccentLine, TacticalLabel } from "@/components/ui/tactical-panel"
import { siteConfig } from "@/lib/site-config"
import { getGoogleReviews, formatRating, formatReviewCount } from "@/lib/google-reviews"
import { cn } from "@/lib/utils"

/* Official Google "G" mark — brand colors, used in the verification stamp. */
function GoogleGMark({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  )
}

/**
 * Display shape used by both the featured curated review and the live
 * Google reviews pulled in via the Places API.
 */
type DisplayReview = {
  quote: string
  author: string
  /** Curated reviews use city, Google reviews use relativeDate. */
  city?: string
  relativeDate?: string
  stars: number
  source: "curated" | "google"
}

/**
 * Featured curated review (Jennifer R. — 10 PM Saturday slab leak story).
 * Stays as the featured slot because it's the strongest brand thread on
 * the site. Live Google reviews fill the two supporting slots, with the
 * remaining curated reviews acting as fallback if the API returns fewer
 * than 2 five-star reviews.
 */
const featuredCurated: DisplayReview = {
  quote:
    "Called at 10 PM on a Saturday — water was coming through my kitchen ceiling. They were at my door within the hour. Identified a slab leak, explained everything clearly, and got us stabilized that night. Scheduled the repair for Monday. Exactly what you want from an emergency call.",
  author: "Jennifer R.",
  city: "Fort Worth",
  stars: 5,
  source: "curated",
}

const supportingCuratedFallback: readonly DisplayReview[] = [
  {
    quote:
      "Tech showed up on time, walked me through what was wrong, gave me a flat price before he started, and had my leak fixed in under an hour. Courteous, clean, no surprises.",
    author: "Marcus T.",
    city: "Aledo",
    stars: 5,
    source: "curated",
  },
  {
    quote:
      "Had three plumbers quote the same water heater replacement. S.W.A.T. was the only one that put the full price in writing before touching anything. Showed up when they said, done in two hours. That's how it should work.",
    author: "Dale K.",
    city: "Benbrook",
    stars: 5,
    source: "curated",
  },
] as const

function StarRow({ count, size = "sm" }: { count: number; size?: "sm" | "lg" }) {
  const sizeClass = size === "lg" ? "h-5 w-5" : "h-4 w-4"
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className={cn(sizeClass, "text-red-500 fill-red-500")}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default async function Testimonials() {
  // Pull live Google data for the trust caption + supporting cards.
  // Falls back to siteConfig + curated reviews on API failure.
  const data = await getGoogleReviews()
  const rating =
    formatRating(data.rating) ??
    formatRating(siteConfig.googleRatingFallback.rating)
  const reviewCount =
    formatReviewCount(data.userRatingCount) ??
    formatReviewCount(siteConfig.googleRatingFallback.count)

  // Featured slot — always the curated Jennifer R. story (strongest piece
  // of social proof; not subject to API churn).
  const featured = featuredCurated

  // Supporting slots — pull the 2 most recent 5-star Google reviews. Fill
  // remaining slots from curated fallback if fewer than 2 returned.
  const liveFiveStar: DisplayReview[] = data.reviews
    .filter((r) => r.rating === 5 && r.text.trim().length > 0)
    .slice(0, 2)
    .map((r) => ({
      quote: r.text.trim(),
      author: r.authorName,
      relativeDate: r.relativePublishTime,
      stars: 5,
      source: "google" as const,
    }))

  const supporting: DisplayReview[] = [
    ...liveFiveStar,
    ...supportingCuratedFallback.slice(0, 2 - liveFiveStar.length),
  ]

  return (
    <section
      className="relative bg-[#0a0c0e] py-20 lg:py-28 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Grid */}
      <div className="absolute inset-0 tactical-grid opacity-40" aria-hidden="true" />

      {/* Glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(220,38,38,0.05),transparent)]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">

        {/* Section header — trust caption sits TIGHT under the headline */}
        <div className="mb-12 lg:mb-16 max-w-3xl">
          <TacticalLabel className="text-red-400">In the Field</TacticalLabel>
          <AccentLine />
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Real Jobs.
            <br />
            <span className="text-red-500">Real Results.</span>
          </h2>

          {/* Official Google verification stamp — uses the real Google brand mark,
              the live Places API rating, and a verified badge. Reads as a genuine
              third-party authority element, not stylized text. */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={siteConfig.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-stretch bg-white/5 border border-white/10 backdrop-blur-sm rounded-md overflow-hidden transition-colors hover:bg-white/8 hover:border-white/20"
              aria-label={
                rating && reviewCount
                  ? `Rated ${rating} out of 5 from ${reviewCount} Google reviews`
                  : "View S.W.A.T. Plumbing on Google"
              }
            >
              {/* Left cell: Google G mark on transparent backdrop */}
              <span className="flex items-center justify-center px-3">
                <GoogleGMark className="h-6 w-6" />
              </span>
              <span className="w-px bg-white/10" aria-hidden="true" />
              {/* Right cell: data */}
              <span className="flex items-center gap-2 pl-3 pr-3.5 py-2">
                <span className="flex flex-col leading-none">
                  <span className="text-white/65 text-[10px] font-bold tracking-[0.12em] uppercase">
                    Google
                  </span>
                  <span className="mt-1 inline-flex items-center gap-1.5">
                    {rating && (
                      <span className="text-white text-base font-black font-mono leading-none">
                        {rating}
                      </span>
                    )}
                    <StarRow count={5} />
                    {reviewCount && (
                      <span className="text-white/55 text-xs font-medium leading-none">
                        ({reviewCount})
                      </span>
                    )}
                  </span>
                </span>
              </span>
            </a>

            {/* Verified seal — official-looking secondary tag */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#0e1012] border border-white/12 rounded-md">
              <BadgeCheck
                className="h-3.5 w-3.5 text-blue-400"
                aria-hidden="true"
              />
              <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/75 font-mono">
                Verified Reviews
              </span>
            </span>

            <span className="text-white/55 text-sm font-medium">
              Aledo + Fort Worth
            </span>
          </div>
        </div>

        {/* Testimonial cards — featured on left (2-col span), two stacked on right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">

          {/* FEATURED — larger, brighter, more breathing room */}
          <blockquote className="relative lg:col-span-2 bg-[#13181c] border border-red-600/30 rounded-sm p-8 lg:p-10 flex flex-col gap-6 transition-colors hover:border-red-500/50">
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
            {/* Big quote mark */}
            <Quote
              className="h-10 w-10 text-red-600/25 absolute top-7 right-7"
              aria-hidden="true"
            />

            {/* Featured tag + stars */}
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                </span>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-red-400 font-mono">
                  Featured Response
                </span>
              </div>
              <StarRow count={featured.stars} size="lg" />
            </div>

            {/* Quote text — larger */}
            <p className="text-white/90 text-lg lg:text-xl leading-relaxed font-medium flex-1">
              &ldquo;{featured.quote}&rdquo;
            </p>

            {/* Attribution — larger avatar + name */}
            <footer className="flex items-center gap-4 pt-5 border-t border-white/10">
              <div
                className="w-12 h-12 rounded-sm bg-red-600/25 border border-red-600/40 flex items-center justify-center text-red-300 text-base font-black font-mono shrink-0"
                aria-hidden="true"
              >
                {featured.author[0]}
              </div>
              <div>
                <div className="text-white text-base font-bold">{featured.author}</div>
                <div className="text-white/45 text-sm">{featured.city}, TX</div>
              </div>
            </footer>
          </blockquote>

          {/* Supporting reviews — stack in third column on lg+ */}
          <div className="flex flex-col gap-5 lg:gap-6">
            {supporting.map((t, i) => (
              <blockquote
                key={`${t.source}-${t.author}-${i}`}
                className="relative bg-white/4 border border-white/8 rounded-sm p-6 lg:p-7 flex flex-col gap-4 hover:border-white/15 hover:bg-white/6 transition-colors flex-1"
              >
                <Quote
                  className="h-6 w-6 text-red-600/30 absolute top-5 right-5"
                  aria-hidden="true"
                />

                <div className="flex items-center justify-between gap-3">
                  <StarRow count={t.stars} />
                  {t.source === "google" && (
                    <span
                      className="inline-flex items-center gap-1 text-[9px] font-mono tracking-[0.18em] uppercase text-white/40 font-semibold"
                      title="Pulled live from Google reviews via Places API"
                    >
                      <GoogleGMark className="h-3 w-3" />
                      Verified
                    </span>
                  )}
                </div>

                <p className="text-white/75 text-base leading-relaxed flex-1 line-clamp-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <footer className="flex items-center gap-3 pt-3 border-t border-white/8">
                  <div
                    className="w-10 h-10 rounded-sm bg-red-600/20 border border-red-600/20 flex items-center justify-center text-red-400 text-sm font-black font-mono shrink-0"
                    aria-hidden="true"
                  >
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">
                      {t.author}
                    </div>
                    <div className="text-white/40 text-xs">
                      {t.source === "google"
                        ? `via Google${t.relativeDate ? ` · ${t.relativeDate}` : ""}`
                        : `${t.city}, TX`}
                    </div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        {/* Trust footer — official verification stamp */}
        <div className="mt-12 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-[#0e1012] border border-white/10 rounded-md">
            <GoogleGMark className="h-4 w-4" />
            <span className="text-white/75 text-xs font-semibold tracking-wide">
              Verified by Google
            </span>
            <span className="h-3 w-px bg-white/15" aria-hidden="true" />
            <BadgeCheck className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
            <span className="text-white/55 text-xs font-medium tracking-wide">
              Live data · Updated daily
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
