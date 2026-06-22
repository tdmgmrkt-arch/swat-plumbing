import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Match the legacy swatplumbing.com URL pattern (trailing slashes) so
  // Google's existing index aligns 1:1 with the new site after DNS cutover —
  // no re-canonicalization, no ranking wobble.
  trailingSlash: true,

  // Permanent redirects — 308 status, preserves any query string.
  // `/schedule` is referenced from header CTAs, mobile CTA bar, hero CTAs,
  // and a handful of section components, but no `/schedule` route exists.
  // Route them to the contact form, which is the actual scheduling surface.
  async redirects() {
    return [
      {
        source: "/schedule",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/running-water",
        destination: "/plumbing/running-water",
        permanent: true,
      },
      // Legacy URL pattern preservation. The previous swatplumbing.com had
      // city pages at /[city]-tx (e.g. /aledo-tx, /fort-worth-tx) alongside
      // the /areas-served/[city]-tx pattern the new site uses. After DNS
      // cutover the legacy single-segment URLs would 404 — and they carry
      // years of accumulated backlinks. Catch any top-level *-tx slug and
      // route it to the matching /areas-served page so equity transfers.
      // [^/] keeps this to single-segment paths; no real route ends in -tx.
      {
        source: "/:citySlug([^/]+-tx)",
        destination: "/areas-served/:citySlug/",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
