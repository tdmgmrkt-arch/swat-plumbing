export type Offer = {
  id: string
  title: string
  savings: string
  details: string
  featured?: true
  footerNote?: string
}

export const offers = [
  // FEATURED — gets hero card treatment
  {
    id: "armed-forces",
    title: "10% Off for Armed Forces & Public Defenders",
    savings: "10%",
    details:
      "Our way of saying thank you to those who serve and protect. Eligible: Army, Navy, Marines, Air Force, Fire Department, Police Department. Call 817-438-6142 for full eligibility.",
    featured: true,
  },
  // STANDARD GRID
  {
    id: "bradford-white-300",
    title: "Save $300 on a New Bradford White Water Heater",
    savings: "$300",
    details:
      "As low as $34.76/month. No interest for 12 months. Up to 12-year parts and labor warranty.",
    footerNote: "Mention this offer when you call.",
  },
  {
    id: "leak-check-89",
    title: "$89 Water Leak Check",
    savings: "$89",
    details: "Diagnostic only — does not include access or repairs.",
    footerNote: "Mention this offer when you call.",
  },
  {
    id: "toilet-125",
    title: "$125 Off Any New Toilet Purchase & Installation",
    savings: "$125 OFF",
    details: "Offer details apply. Call for full terms.",
    footerNote: "Mention this offer when you call.",
  },
  {
    id: "service-79",
    title: "$79.28 Off Any Plumbing Service",
    savings: "$79.28",
    details:
      "Min. $200 invoice. Cannot be combined with other offers. 1 per household. Residential use only. Show at time of service.",
  },
  {
    id: "tankless-estimate",
    title: "Free Estimate for Tankless Upgrade",
    savings: "FREE",
    details: "12 months no interest. As low as $1.48/day. 15-year warranty.",
    footerNote: "Mention this offer when you call.",
  },
  {
    id: "sewer-static-125",
    title: "$125 Sewer Static Test",
    savings: "$125",
    details: "Save $200 off regular price (from outside cleanouts).",
    footerNote: "Mention this offer when you call.",
  },
  {
    id: "911-drain",
    title: "911 Drain — $91.11 Same-Day Service",
    savings: "$91.11",
    details:
      "Clogged drain or sewer? Includes our 91-day guarantee. Over $374 in savings.",
    footerNote: "Mention this offer when you call.",
  },
  {
    id: "disposal-279",
    title: "$279 1/2 H.P. Garbage Disposal",
    savings: "$279",
    details: "$200 in savings off regular price.",
    footerNote: "Mention this offer when you call.",
  },
  {
    id: "whole-home-leak-225",
    title: "Whole-Home Leak Test — $225",
    savings: "$225",
    details:
      "Sewer & water — a savings of over $450. Does not include repairs.",
    footerNote: "Mention this offer when you call.",
  },
] as const satisfies Offer[]

export const featuredOffer = offers[0]
export const standardOffers = offers.slice(1)
