import { sewerLineRepairNearMeFortWorthTx } from "./blog/sewer-line-repair-near-me-fort-worth-tx"
import { slabLeakRepairFortWorthTxExperts } from "./blog/slab-leak-repair-fort-worth-tx-experts"
import { noHotWaterRepairAledoTxPlumber } from "./blog/no-hot-water-repair-aledo-tx-plumber"
import { waterLeakDetectionNearMeAledoTx } from "./blog/water-leak-detection-near-me-aledo-tx"
import { twentyFourHourPlumberFortWorthTxFastResponse } from "./blog/24-hour-plumber-fort-worth-tx-fast-response"
import { emergencyPlumberNearMeInAledoTx } from "./blog/emergency-plumber-near-me-in-aledo-tx"
import { noHotWaterInHouseFortWorth } from "./blog/no-hot-water-in-house-fort-worth"
import { whoToCallWithAGasSmellInHouse } from "./blog/who-to-call-with-a-gas-smell-in-house"
import { toiletKeepsRunningFortWorth } from "./blog/toilet-keeps-running-fort-worth"
import { kitchenSinkWontDrainAledoTx } from "./blog/kitchen-sink-wont-drain-aledo-tx"
import { tanklessVsTankWaterHeaterFortWorth } from "./blog/tankless-vs-tank-water-heater-fort-worth"
import { sewerCameraInspectionBeforeBuyingHomeFortWorth } from "./blog/sewer-camera-inspection-before-buying-home-fort-worth"
import { highWaterPressurePrvAledoTx } from "./blog/high-water-pressure-prv-aledo-tx"
import { summerPlumbingProblemsNorthTexas } from "./blog/summer-plumbing-problems-north-texas"
import { outdoorGasLineLeakAledoTx } from "./blog/outdoor-gas-line-leak-aledo-tx"
import { hydroJettingVsSnakingFortWorth } from "./blog/hydro-jetting-vs-snaking-fort-worth"
import { waterHeaterMakingNoiseFortWorth } from "./blog/water-heater-making-noise-fort-worth"
import { wholeHouseRepipingSignsAledoTx } from "./blog/whole-house-repiping-signs-aledo-tx"
import { lowWaterPressureFortWorth } from "./blog/low-water-pressure-fort-worth"
import { garbageDisposalHummingNotSpinningAledoTx } from "./blog/garbage-disposal-humming-not-spinning-aledo-tx"
import { pinholeLeaksCopperPipesFortWorth } from "./blog/pinhole-leaks-copper-pipes-fort-worth"
import { trenchlessSewerRepairAledoTx } from "./blog/trenchless-sewer-repair-aledo-tx"
import { mainWaterShutoffValveFortWorth } from "./blog/main-water-shutoff-valve-fort-worth"
import { smellGasNearStoveAledoTx } from "./blog/smell-gas-near-stove-aledo-tx"

export type { BlogPost, BlogCategory, ContentBlock } from "./blog/_types"
export { BLOG_CATEGORIES } from "./blog/_types"

import type { BlogPost } from "./blog/_types"

/**
 * Registry of every published blog post, keyed by slug for O(1) lookup.
 * Add a new post by importing it above and adding it to this object.
 */
export const blogPosts: Record<string, BlogPost> = {
  [sewerLineRepairNearMeFortWorthTx.slug]: sewerLineRepairNearMeFortWorthTx,
  [slabLeakRepairFortWorthTxExperts.slug]: slabLeakRepairFortWorthTxExperts,
  [noHotWaterRepairAledoTxPlumber.slug]: noHotWaterRepairAledoTxPlumber,
  [waterLeakDetectionNearMeAledoTx.slug]: waterLeakDetectionNearMeAledoTx,
  [twentyFourHourPlumberFortWorthTxFastResponse.slug]:
    twentyFourHourPlumberFortWorthTxFastResponse,
  [emergencyPlumberNearMeInAledoTx.slug]: emergencyPlumberNearMeInAledoTx,
  [noHotWaterInHouseFortWorth.slug]: noHotWaterInHouseFortWorth,
  [whoToCallWithAGasSmellInHouse.slug]: whoToCallWithAGasSmellInHouse,
  [toiletKeepsRunningFortWorth.slug]: toiletKeepsRunningFortWorth,
  [kitchenSinkWontDrainAledoTx.slug]: kitchenSinkWontDrainAledoTx,
  [tanklessVsTankWaterHeaterFortWorth.slug]: tanklessVsTankWaterHeaterFortWorth,
  [sewerCameraInspectionBeforeBuyingHomeFortWorth.slug]:
    sewerCameraInspectionBeforeBuyingHomeFortWorth,
  [highWaterPressurePrvAledoTx.slug]: highWaterPressurePrvAledoTx,
  [summerPlumbingProblemsNorthTexas.slug]: summerPlumbingProblemsNorthTexas,
  [outdoorGasLineLeakAledoTx.slug]: outdoorGasLineLeakAledoTx,
  [hydroJettingVsSnakingFortWorth.slug]: hydroJettingVsSnakingFortWorth,
  [waterHeaterMakingNoiseFortWorth.slug]: waterHeaterMakingNoiseFortWorth,
  [wholeHouseRepipingSignsAledoTx.slug]: wholeHouseRepipingSignsAledoTx,
  [lowWaterPressureFortWorth.slug]: lowWaterPressureFortWorth,
  [garbageDisposalHummingNotSpinningAledoTx.slug]:
    garbageDisposalHummingNotSpinningAledoTx,
  [pinholeLeaksCopperPipesFortWorth.slug]: pinholeLeaksCopperPipesFortWorth,
  [trenchlessSewerRepairAledoTx.slug]: trenchlessSewerRepairAledoTx,
  [mainWaterShutoffValveFortWorth.slug]: mainWaterShutoffValveFortWorth,
  [smellGasNearStoveAledoTx.slug]: smellGasNearStoveAledoTx,
}

/** All posts, sorted newest-first by `date`. */
export const allBlogPosts: BlogPost[] = Object.values(blogPosts).sort(
  (a, b) => (a.date < b.date ? 1 : -1)
)

/** Resolve a slug → post, or null if not found. */
export function getBlogPost(slug: string): BlogPost | null {
  return blogPosts[slug] ?? null
}

/**
 * Pick N "related" posts for the Related Reading rail.
 *
 * Strategy: same-category siblings first (sorted newest-first), then
 * backfill with the most recent posts from other categories so the list
 * always reaches `count` items even for sparse categories. Topical
 * relevance wins over pure recency — a Sewer & Drains post shouldn't
 * recommend Water Heater posts just because they're more recent.
 */
export function getRelatedPosts(currentSlug: string, count = 3): BlogPost[] {
  const current = blogPosts[currentSlug]
  if (!current) {
    return allBlogPosts.filter((p) => p.slug !== currentSlug).slice(0, count)
  }
  const sameCategory = allBlogPosts.filter(
    (p) => p.slug !== currentSlug && p.category === current.category
  )
  if (sameCategory.length >= count) return sameCategory.slice(0, count)
  const pickedSlugs = new Set<string>([
    currentSlug,
    ...sameCategory.map((p) => p.slug),
  ])
  const backfill = allBlogPosts.filter((p) => !pickedSlugs.has(p.slug))
  return [...sameCategory, ...backfill].slice(0, count)
}

/**
 * Posts per paginated hub page (pages 2..N). 9 = 3 clean rows of 3 in the
 * plain grid layout used on those pages.
 */
export const POSTS_PER_PAGE = 9

/**
 * Posts on page 1. Page 1 is asymmetric — 1 featured (2/3) + 1 secondary
 * (1/3) on top, then a 3-col grid below. 8 = the top pair + exactly 2 clean
 * rows of 3 in the grid (no orphaned card on page 1). Orphans shift to the
 * last page, which is the right place for them.
 */
export const POSTS_ON_PAGE_1 = 8

/** Total number of paginated hub pages — at least 1. */
export const TOTAL_BLOG_PAGES = (() => {
  const total = allBlogPosts.length
  if (total <= POSTS_ON_PAGE_1) return 1
  return 1 + Math.ceil((total - POSTS_ON_PAGE_1) / POSTS_PER_PAGE)
})()

/**
 * Slice `allBlogPosts` to the posts that belong on a given hub page.
 * `page` is 1-indexed. Page 1 returns the first POSTS_ON_PAGE_1 posts;
 * pages 2..N return POSTS_PER_PAGE each (last page may be shorter).
 * Returns [] for out-of-range pages.
 */
export function getPostsForPage(page: number): BlogPost[] {
  if (!Number.isInteger(page) || page < 1 || page > TOTAL_BLOG_PAGES) return []
  if (page === 1) return allBlogPosts.slice(0, POSTS_ON_PAGE_1)
  const start = POSTS_ON_PAGE_1 + (page - 2) * POSTS_PER_PAGE
  return allBlogPosts.slice(start, start + POSTS_PER_PAGE)
}

/** Format an ISO date (YYYY-MM-DD) as "Month D, YYYY" for display. */
export function formatBlogDate(iso: string): string {
  const [y, m, d] = iso.split("-").map((s) => parseInt(s, 10))
  const date = new Date(Date.UTC(y, m - 1, d))
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })
}
