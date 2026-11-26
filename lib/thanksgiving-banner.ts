/**
 * Thanksgiving hours banner.
 *
 * Mounted from `app/layout.tsx` while `THANKSGIVING_BANNER_ENABLED` is true.
 * Set the flag to `false` and redeploy to remove it immediately.
 *
 * It also hides on its own after 11:59 PM on Nov 26, 2026 in
 * America/Los_Angeles (midnight at the start of Nov 27, Pacific Standard
 * Time). That cutoff is a fixed UTC instant, so it does not depend on the
 * server's timezone.
 */
export const THANKSGIVING_BANNER_ENABLED = true

/** 12:00:00 AM Nov 27, 2026 America/Los_Angeles (PST, UTC−8). */
export const THANKSGIVING_BANNER_HIDE_AT_MS = Date.parse(
  "2026-11-27T08:00:00.000Z"
)

export function isThanksgivingBannerActive(now = Date.now()) {
  return THANKSGIVING_BANNER_ENABLED && now < THANKSGIVING_BANNER_HIDE_AT_MS
}

/** Runs before paint so a visit after the cutoff does not flash the strip. */
export const THANKSGIVING_BANNER_HIDE_SCRIPT = `try{if(Date.now()>=${THANKSGIVING_BANNER_HIDE_AT_MS})document.documentElement.setAttribute("data-thanksgiving-hidden","")}catch(e){}`
