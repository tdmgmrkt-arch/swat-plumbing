/**
 * Shared Open Graph / Twitter metadata helpers.
 *
 * WHY THIS EXISTS
 * Next.js metadata does NOT deep-merge nested objects. When a child page
 * exports `openGraph: { title, description, url }` without `images`, the
 * child's openGraph object fully replaces the root layout's — so no OG image
 * renders on that page. These helpers give every page a single import to
 * pull in the fallback image so no page is left without a share image.
 *
 * USAGE
 *   import { defaultOgImages, defaultTwitterImages } from "@/lib/metadata"
 *
 *   openGraph: {
 *     ...,
 *     images: defaultOgImages,
 *   },
 *   twitter: {
 *     ...,
 *     images: defaultTwitterImages,
 *   },
 */

import { siteConfig } from "@/lib/site-config"

/** Absolute URL to the fallback social-share image. */
const FALLBACK_IMAGE_URL = `${siteConfig.url}/3vanlineup.webp`

/**
 * Array shaped for `metadata.openGraph.images`.
 * Dimensions are the standard 1200×630 (1.91:1) that OG consumers expect —
 * platforms crop to that ratio regardless of the source file dimensions.
 */
export const defaultOgImages = [
  {
    url: FALLBACK_IMAGE_URL,
    width: 1200,
    height: 630,
    alt: "S.W.A.T. Plumbing LLC — service trucks in Aledo & Fort Worth, TX",
  },
]

/**
 * Array shaped for `metadata.twitter.images`.
 * Twitter/X accepts the same URL string or array; we use an array to stay
 * consistent with the openGraph shape and allow alt text.
 */
export const defaultTwitterImages = [FALLBACK_IMAGE_URL]
