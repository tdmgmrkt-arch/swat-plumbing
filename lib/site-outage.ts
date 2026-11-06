/**
 * Temporary site-wide outage notice.
 *
 * Mounted from `app/layout.tsx` while `SITE_OUTAGE_BANNER_ENABLED` is true.
 * Internet is restored, so the flag is false and the notice is not rendered.
 * Set it back to `true` and redeploy if the notice needs to return.
 * Dismissal is stored in sessionStorage, so a refresh in the same visit stays
 * quiet and a new visit shows the notice again.
 */
export const SITE_OUTAGE_BANNER_ENABLED = false

export const OUTAGE_NOTICE_STORAGE_KEYS = {
  dismissed: "swat-outage-notice-dismissed",
  popupSeen: "swat-outage-popup-seen",
} as const

export const OUTAGE_NOTICE_COPY = {
  label: "Service Notice",
  title: "Hold times are longer right now",
  paragraphs: [
    "We're sorry for the inconvenience.",
    "Circumstances beyond our control have taken our internet down, which is limiting our phone line, so hold times are longer than expected.",
    "Thank you for sticking with us — we're still here and will get to you as quickly as we can.",
  ],
  strip: "Our internet is down, so phone hold times are longer than expected.",
} as const
