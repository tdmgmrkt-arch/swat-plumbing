import { siteConfig } from "./site-config"

/**
 * 10DLC / A2P carrier-mandated SMS disclosures.
 *
 * ──────────────────────────────────────────────────────────────────────────
 * DO NOT REWORD ANY STRING IN THIS FILE.
 * ──────────────────────────────────────────────────────────────────────────
 * The messaging carrier requires this exact verbiage (requested 2026-11-02)
 * for the S.W.A.T. Plumbing 10DLC campaign registration. A human reviewer
 * reads the rendered page and string-matches it. Only the bracketed
 * placeholders from the carrier's template were filled in: company name,
 * privacy policy URL, and terms URL.
 *
 * If a reviewer asks for changes, update here — both forms and the privacy
 * policy render from these constants, so there is exactly one copy to keep
 * in sync.
 */

export const SMS_PRIVACY_URL = `${siteConfig.url}/privacy-policy`
export const SMS_TERMS_URL = `${siteConfig.url}/terms-of-service`

/**
 * Opt-in text shown beside the consent checkbox on EVERY form that collects
 * a phone number. The two policy URLs are rendered as links immediately
 * after this sentence — see <SmsConsentCheckbox />.
 */
export const SMS_CONSENT_TEXT =
  `You are agreeing to receive SMS customer care and marketing notifications from ${siteConfig.name}. ` +
  `Message frequency may vary. Standard Message and Data Rates may apply. ` +
  `Reply STOP to opt out. Reply Help for help.`

/**
 * Data-sharing paragraph required in the privacy policy, immediately
 * following the list of information-sharing categories (Section 04).
 */
export const SMS_DATA_SHARING_DISCLOSURE =
  `All the above categories exclude text messaging originator opt-in data and consent; ` +
  `this information will not be shared with any third parties. We will not share your ` +
  `opt-in to an SMS campaign with any third party for purposes unrelated to providing ` +
  `you with the services of that campaign. We may share your Personal Data, including ` +
  `your SMS opt-in or consent status, with third parties that help us provide our ` +
  `messaging services, including but not limited to platform providers, phone companies, ` +
  `and any other vendors who assist us in the delivery of text messages.`
