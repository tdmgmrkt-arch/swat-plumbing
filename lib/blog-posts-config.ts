import { sewerLineRepairNearMeFortWorthTx } from "./blog/sewer-line-repair-near-me-fort-worth-tx"
import { slabLeakRepairFortWorthTxExperts } from "./blog/slab-leak-repair-fort-worth-tx-experts"
import { noHotWaterRepairAledoTxPlumber } from "./blog/no-hot-water-repair-aledo-tx-plumber"
import { waterLeakDetectionNearMeAledoTx } from "./blog/water-leak-detection-near-me-aledo-tx"
import { twentyFourHourPlumberFortWorthTxFastResponse } from "./blog/24-hour-plumber-fort-worth-tx-fast-response"
import { emergencyPlumberNearMeInAledoTx } from "./blog/emergency-plumber-near-me-in-aledo-tx"
import { noHotWaterInHouseFortWorth } from "./blog/no-hot-water-in-house-fort-worth"
import { whoToCallWithAGasSmellInHouse } from "./blog/who-to-call-with-a-gas-smell-in-house"

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
}

/** All posts, sorted newest-first by `date`. */
export const allBlogPosts: BlogPost[] = Object.values(blogPosts).sort(
  (a, b) => (a.date < b.date ? 1 : -1)
)

/** Resolve a slug → post, or null if not found. */
export function getBlogPost(slug: string): BlogPost | null {
  return blogPosts[slug] ?? null
}

/** Pick N most recent posts excluding a given slug (for "Related Reading" lists). */
export function getRelatedPosts(currentSlug: string, count = 3): BlogPost[] {
  return allBlogPosts.filter((p) => p.slug !== currentSlug).slice(0, count)
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
