import { siteConfig } from "./site-config"
import { canonicalUrl } from "./utils"
import type { Offer } from "./coupons"
import type { Position } from "./careers-data"

/**
 * Office hours — when the phone is answered by a live receptionist.
 * Used in `openingHoursSpecification` on every LocalBusiness-flavored schema
 * and in the office `contactPoint`. After-hours calls roll to the 24/7
 * emergency dispatch crew — see `EMERGENCY_CONTACT_POINT` below.
 *
 * Mon–Fri 7 AM – 5 PM · Sat 8 AM – 1 PM · Sun closed.
 */
const OFFICE_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "17:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Saturday"],
    opens: "08:00",
    closes: "13:00",
  },
] as const

/**
 * 24/7 emergency dispatch contactPoint — separate from the office line.
 * Surfaced as a sibling ContactPoint so Google/AI Overviews can correctly
 * distinguish "office staffed Mon–Fri 7–5" from "emergency line answered
 * any hour." The phone number is the same primary number — after-hours
 * calls roll to the on-call crew.
 */
const EMERGENCY_CONTACT_POINT = {
  "@type": "ContactPoint",
  telephone: siteConfig.phone.primary,
  contactType: "Emergency",
  areaServed: "TX",
  availableLanguage: "English",
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
} as const

/**
 * `sameAs` array — official social profile URLs. Used by every
 * LocalBusiness-flavored schema for entity consolidation. Helps Google
 * and AI Overview crawlers confirm the brand entity by cross-referencing
 * authoritative third-party profiles (Facebook, Instagram, X/Twitter,
 * YouTube, Google Business Profile).
 */
const SAME_AS = [
  siteConfig.social.facebook,
  siteConfig.social.instagram,
  siteConfig.social.twitter,
  siteConfig.social.youtube,
  siteConfig.social.google,
] as const

/** LocalBusiness / Plumber JSON-LD schema for homepage and location pages */
export function plumberSchema() {
  type ServiceLink = { title: string; href: string }
  const allServices: ServiceLink[] = siteConfig.serviceCategories.flatMap(
    (c) => [...c.services] as ServiceLink[]
  )

  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": `${siteConfig.url}/#plumber-aledo`,
    name: siteConfig.name,
    url: canonicalUrl("/"),
    telephone: siteConfig.phone.primary,
    description: siteConfig.description,
    areaServed: siteConfig.serviceArea.map((city) => ({
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: "Texas",
      },
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.locations[0].address,
      addressLocality: siteConfig.locations[0].city,
      addressRegion: siteConfig.locations[0].state,
      postalCode: siteConfig.locations[0].zip,
      addressCountry: "US",
    },
    openingHoursSpecification: OFFICE_HOURS,
    sameAs: SAME_AS,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone.primary,
        contactType: "customer service",
        areaServed: "TX",
        availableLanguage: "English",
        hoursAvailable: OFFICE_HOURS,
      },
      EMERGENCY_CONTACT_POINT,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing Services",
      itemListElement: allServices.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: canonicalUrl(s.href),
        },
      })),
    },
  }
}

/**
 * OfferCatalog JSON-LD for the /coupons-rebates page.
 * Each coupon becomes an Offer with the business as seller.
 */
export function couponCatalogSchema(offerList: readonly Offer[]) {
  const seller = {
    "@type": "Plumber",
    name: siteConfig.name,
    url: canonicalUrl("/"),
    telephone: siteConfig.phone.primary,
  }

  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "S.W.A.T. Plumbing Coupons & Rebates",
    url: canonicalUrl("/coupons-rebates"),
    itemListElement: offerList.map((offer, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Offer",
        name: offer.title,
        description: offer.details,
        url: `${canonicalUrl("/coupons-rebates")}#${offer.id}`,
        seller,
      },
    })),
  }
}

/** BreadcrumbList for /coupons-rebates */
export function couponBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: canonicalUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Coupons & Rebates",
        item: canonicalUrl("/coupons-rebates"),
      },
    ],
  }
}

/** ContactPage JSON-LD for /contact-us */
export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact S.W.A.T. Plumbing",
    url: canonicalUrl("/contact-us"),
    mainEntity: {
      "@type": "Plumber",
      name: siteConfig.name,
      url: canonicalUrl("/"),
      telephone: siteConfig.phone.primary,
      description: siteConfig.description,
      sameAs: SAME_AS,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.locations[0].address,
        addressLocality: siteConfig.locations[0].city,
        addressRegion: siteConfig.locations[0].state,
        postalCode: siteConfig.locations[0].zip,
        addressCountry: "US",
      },
      contactPoint: [
        ...siteConfig.locations.map((loc) => ({
          "@type": "ContactPoint",
          telephone: loc.phone,
          contactType: "customer service",
          areaServed: "TX",
          availableLanguage: "English",
          hoursAvailable: OFFICE_HOURS,
        })),
        EMERGENCY_CONTACT_POINT,
      ],
    },
  }
}

/** JobPosting JSON-LD — one object per open position */
export function jobPostingSchema(position: Position, postedISO: string) {
  const hiringOrg = {
    "@type": "Organization",
    name: siteConfig.name,
    sameAs: canonicalUrl("/"),
    logo: `${siteConfig.url}/swatdevlogo.webp`,
  }

  const jobLocation = siteConfig.locations.map((loc) => ({
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.address,
      addressLocality: loc.city,
      addressRegion: loc.state,
      postalCode: loc.zip,
      addressCountry: "US",
    },
  }))

  const baseSalary =
    position.payMin && position.payUnit
      ? {
          "@type": "MonetaryAmount",
          currency: "USD",
          value: {
            "@type": "QuantitativeValue",
            minValue: position.payMin,
            ...(position.payMax ? { maxValue: position.payMax } : {}),
            unitText: position.payUnit,
          },
        }
      : undefined

  const description = [
    position.about,
    position.benefits?.length ? `Benefits: ${position.benefits.join("; ")}.` : "",
    position.skills?.length ? `Skills: ${position.skills.join("; ")}.` : "",
    position.requirements?.length
      ? `Requirements: ${position.requirements.join("; ")}.`
      : "",
  ]
    .filter(Boolean)
    .join("\n\n")

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: position.title,
    description,
    datePosted: postedISO,
    employmentType: position.employmentType,
    hiringOrganization: hiringOrg,
    jobLocation,
    ...(baseSalary ? { baseSalary } : {}),
    directApply: true,
  }
}

/** CollectionPage + ItemList + FAQPage JSON-LD for category hub pages
 *  (/plumbing, /water-heater, /water-quality). */
export function categoryHubSchema(opts: {
  href: string
  name: string
  description: string
  services: { name: string; href: string }[]
  faqs?: { question: string; answer: string }[]
}) {
  const pageUrl = canonicalUrl(opts.href)

  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: opts.name,
    url: pageUrl,
    description: opts.description,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: canonicalUrl("/"),
    },
    mainEntity: {
      "@type": "ItemList",
      name: opts.name,
      itemListElement: opts.services.map((s, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: s.name,
        url: canonicalUrl(s.href),
      })),
    },
    ...(opts.faqs && opts.faqs.length > 0
      ? {
          significantLink: opts.faqs.map((f) => f.question),
        }
      : {}),
  }

  return collectionPage
}

/** BreadcrumbList JSON-LD for category hub pages. Home → {Category}. */
export function hubBreadcrumbSchema(name: string, href: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: canonicalUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: name,
        item: canonicalUrl(href),
      },
    ],
  }
}

/** AboutPage JSON-LD for /about-us */
export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${siteConfig.name}`,
    url: canonicalUrl("/about-us"),
    description: `${siteConfig.name} — family-owned plumbing crew serving Aledo, Fort Worth, and surrounding North Texas communities. SWAT stands for Sewer, Water, Anytime Team.`,
    mainEntity: {
      "@type": "Plumber",
      name: siteConfig.name,
      url: canonicalUrl("/"),
      telephone: siteConfig.phone.primary,
      description: siteConfig.description,
      sameAs: SAME_AS,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.locations[0].address,
        addressLocality: siteConfig.locations[0].city,
        addressRegion: siteConfig.locations[0].state,
        postalCode: siteConfig.locations[0].zip,
        addressCountry: "US",
      },
    },
  }
}

/**
 * Person JSON-LD for Dillon Patterson — Owner & Principal Master Plumber.
 * Surfaces a credentialed individual to AI Overviews / Knowledge Graph and
 * anchors the LocalBusiness to a real, licensed person (E-E-A-T signal).
 */
export function dillonPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/about-us#dillon-patterson`,
    name: "Dillon Patterson",
    givenName: "Dillon",
    familyName: "Patterson",
    jobTitle: "Owner & Principal Master Plumber",
    image: `${siteConfig.url}/Dillon.Owner.MasterPlumber.webp`,
    url: canonicalUrl("/about-us"),
    worksFor: {
      "@type": "Plumber",
      "@id": `${siteConfig.url}/#plumber-aledo`,
      name: siteConfig.name,
      url: canonicalUrl("/"),
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Texas Master Plumber License",
        credentialCategory: "license",
        identifier: "M-39596",
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: "Texas State Board of Plumbing Examiners",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Texas Journeyman Plumber License",
        credentialCategory: "license",
        identifier: "42868",
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: "Texas State Board of Plumbing Examiners",
        },
      },
    ],
    knowsAbout: [
      "Leak detection and repair",
      "Slab leak diagnosis and repair",
      "Sewer camera inspections",
      "Drain cleaning and hydro-jetting",
      "Water heater repair and installation",
      "Tankless water heater systems",
      "Water softeners and filtration systems",
      "Gas line installation and repair",
      "Whole-home repiping",
      "Main water and sewer line replacement",
      "Trenchless sewer repair",
    ],
  }
}

/** BreadcrumbList for /about-us */
export function aboutBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: canonicalUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: canonicalUrl("/about-us"),
      },
    ],
  }
}

/** BreadcrumbList for /contact-us */
export function contactBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: canonicalUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: canonicalUrl("/contact-us"),
      },
    ],
  }
}

/** Service JSON-LD for /areas-served — lists all 49 cities as areaServed */
export function areasServedPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plumbing Services — North Texas Coverage",
    url: canonicalUrl("/areas-served"),
    provider: {
      "@type": "Plumber",
      name: siteConfig.name,
      url: canonicalUrl("/"),
      telephone: siteConfig.phone.primary,
    },
    areaServed: siteConfig.serviceArea.map((city) => ({
      "@type": "Place",
      name: `${city.name}, TX`,
    })),
    description:
      "S.W.A.T. Plumbing provides 24/7 residential and commercial plumbing service across 49 communities in Tarrant, Parker, Denton, and Johnson counties.",
  }
}

/** BreadcrumbList for /areas-served */
export function areasServedBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: canonicalUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Areas Served",
        item: canonicalUrl("/areas-served"),
      },
    ],
  }
}

/** Blog / CollectionPage JSON-LD for /blog */
export function blogPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Field Notes — S.W.A.T. Plumbing",
    url: canonicalUrl("/blog"),
    description:
      "Plumbing tips, project breakdowns, and seasonal homeowner guides from the S.W.A.T. Plumbing crew in Aledo and Fort Worth, TX.",
    publisher: {
      "@type": "Plumber",
      name: siteConfig.name,
      url: canonicalUrl("/"),
    },
  }
}

/** BreadcrumbList for /blog */
export function blogBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: canonicalUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: canonicalUrl("/blog"),
      },
    ],
  }
}

/**
 * BlogPosting JSON-LD for individual /blog/[slug] pages.
 * Author reference points at Dillon's Person node so authorship inherits the
 * Master Plumber credentials → strong E-E-A-T signal for AI Overviews.
 */
export function blogPostingSchema(post: {
  slug: string
  title: string
  metaDescription: string
  date: string
  lastUpdated?: string
  heroImage: string
  city: "Aledo" | "Fort Worth"
}) {
  const url = canonicalUrl(`/blog/${post.slug}`)
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#blogposting`,
    headline: post.title,
    description: post.metaDescription,
    url,
    mainEntityOfPage: url,
    datePublished: post.date,
    dateModified: post.lastUpdated ?? post.date,
    image: `${siteConfig.url}${post.heroImage}`,
    author: {
      "@type": "Person",
      "@id": `${siteConfig.url}/about-us#dillon-patterson`,
      name: "Dillon Patterson",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: canonicalUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/swatdevlogo.webp`,
      },
    },
    about: {
      "@type": "Place",
      name: `${post.city}, TX`,
    },
  }
}

/** BreadcrumbList for /blog/[slug] — Home → Blog → {Post Title}. */
export function blogPostBreadcrumbSchema(post: { slug: string; title: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: canonicalUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: canonicalUrl("/blog"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: canonicalUrl(`/blog/${post.slug}`),
      },
    ],
  }
}

// =============================================================================
// CITY HUB PAGE SCHEMA
// /areas-served/[slug-tx]/
// =============================================================================

/**
 * Minimal shape the city-hub page must supply. The parallel CityConfig type
 * will extend this — add fields there; this interface is the schema contract.
 */
export interface CitySchemaConfig {
  slug: string               // "aledo-tx"
  name: string               // "Aledo"
  county: string             // "Parker County"
  zipCodes: string[]         // ["76008", "76009"]
  geoCenter: { lat: number; lng: number }
  serviceRadiusMiles: number
  /** "aledo" | "fort-worth" — picks NAP + @id for the closest dispatch hub */
  closestHubSlug: "aledo" | "fort-worth"
  /** True only for Aledo and Fort Worth — these have verified GBP Place IDs */
  hasGbpListing: boolean
  faqs: { question: string; answer: string }[]
}

// Internal lookup — keeps hub NAP out of the caller's config
const HUB_DATA = {
  aledo: {
    id: `${siteConfig.url}/#plumber-aledo`,
    telephone: siteConfig.phone.aledo,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.locations[0].address,
      addressLocality: siteConfig.locations[0].city,
      addressRegion: siteConfig.locations[0].state,
      postalCode: siteConfig.locations[0].zip,
      addressCountry: "US",
    },
    placeId: siteConfig.locations[0].placeId,
    rating: { ratingValue: 4.2, reviewCount: 1710 },
  },
  "fort-worth": {
    id: `${siteConfig.url}/#plumber-fort-worth`,
    telephone: siteConfig.phone.fortWorth,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.locations[1].address,
      addressLocality: siteConfig.locations[1].city,
      addressRegion: siteConfig.locations[1].state,
      postalCode: siteConfig.locations[1].zip,
      addressCountry: "US",
    },
    placeId: siteConfig.locations[1].placeId,
    // Fort Worth GBP: 4.6 stars / 792 reviews as of 2026-06
    rating: { ratingValue: 4.6, reviewCount: 792 },
  },
} as const

/**
 * Primary schema for /areas-served/[slug-tx]/.
 *
 * ENTITY STRATEGY — two tiers:
 *
 * Tier 1 — GBP-backed cities (Aledo, Fort Worth):
 *   Emit a full `Plumber` block whose `@id` matches the dispatch hub entity
 *   (`/#plumber-aledo` or `/#plumber-fort-worth`). This tells Google these city
 *   pages describe the SAME business as the homepage — no duplicate entity
 *   problem. `aggregateRating` is safe here because the rating comes from a
 *   verified GBP listing for that physical address.
 *
 * Tier 2 — 47 non-GBP cities (SAB pattern):
 *   Emit a `Service` with `areaServed` as a `GeoCircle` around the city
 *   centroid plus a `provider` stub that references the hub entity by `@id`
 *   only — NO `address.addressLocality` set to the served city. This follows
 *   Google's service-area business guideline: do not claim a physical presence
 *   at an address you do not occupy. `aggregateRating` is omitted; there are
 *   no reviews specific to a non-GBP city.
 *
 * `openingHoursSpecification` (24/7) and `priceRange` are included on both
 * tiers — both are recommended properties for Plumber/LocalBusiness and are
 * visible in the Rich Results panel.
 *
 * NOTE: `plumberSchema()` on the homepage currently has no `@id`. Add
 * `"@id": "${siteConfig.url}/#plumber-aledo"` to that function to complete
 * entity consolidation via sameAs linking.
 */
export function cityPageSchema(city: CitySchemaConfig) {
  const pageUrl = canonicalUrl(`/areas-served/${city.slug}`)
  const hub = HUB_DATA[city.closestHubSlug]

  // ── Tier 1: GBP-backed location page ──────────────────────────────────────
  if (city.hasGbpListing) {
    return {
      "@context": "https://schema.org",
      "@type": "Plumber",
      "@id": hub.id,
      name: siteConfig.name,
      url: canonicalUrl("/"),
      // Page URL is the subject of this document; use mainEntityOfPage so
      // crawlers know this page describes the hub entity, not a new one.
      mainEntityOfPage: pageUrl,
      telephone: hub.telephone,
      address: hub.address,
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.geoCenter.lat,
        longitude: city.geoCenter.lng,
      },
      openingHoursSpecification: OFFICE_HOURS,
      sameAs: SAME_AS,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: hub.telephone,
          contactType: "customer service",
          areaServed: "TX",
          availableLanguage: "English",
          hoursAvailable: OFFICE_HOURS,
        },
        EMERGENCY_CONTACT_POINT,
      ],
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: hub.rating.ratingValue,
        reviewCount: hub.rating.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
      areaServed: {
        "@type": "City",
        name: city.name,
        containedInPlace: { "@type": "State", name: "Texas" },
      },
      hasOfferCatalog: _offerCatalog(),
    }
  }

  // ── Tier 2: SAB city — no physical address claim ───────────────────────────
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Plumbing Services in ${city.name}, TX`,
    url: pageUrl,
    description: `S.W.A.T. Plumbing provides 24/7 residential and commercial plumbing in ${city.name}, ${city.county}, TX. Licensed master plumber, family-owned.`,
    provider: {
      "@type": "Plumber",
      "@id": hub.id,
      name: siteConfig.name,
      url: canonicalUrl("/"),
      telephone: hub.telephone,
      openingHoursSpecification: OFFICE_HOURS,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: hub.telephone,
          contactType: "customer service",
          areaServed: "TX",
          availableLanguage: "English",
          hoursAvailable: OFFICE_HOURS,
        },
        EMERGENCY_CONTACT_POINT,
      ],
      hasOfferCatalog: _offerCatalog(),
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: city.geoCenter.lat,
        longitude: city.geoCenter.lng,
      },
      geoRadius: `${city.serviceRadiusMiles * 1609.34}`,  // metres — schema.org expects string
    },
  }
}

/** Shared OfferCatalog for city pages — all 29 services */
function _offerCatalog() {
  type ServiceLink = { title: string; href: string }
  const allServices = (
    siteConfig.serviceCategories as unknown as Array<{ services: ServiceLink[] }>
  ).flatMap((c) => c.services)
  return {
    "@type": "OfferCatalog",
    name: "Plumbing Services",
    itemListElement: allServices.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        url: canonicalUrl(s.href),
      },
    })),
  }
}

/**
 * FAQPage schema for /areas-served/[slug-tx]/.
 *
 * FAQPage no longer earns Google rich results on commercial sites (restricted
 * to government/healthcare since August 2023). It is included here because:
 * (a) it is valid, unspammy markup and (b) it aids AI Overview and LLM citation
 * — the Q&A structure is heavily weighted in generative answer sourcing.
 * Writers should produce 5–6 city-specific questions; avoid duplicating FAQs
 * that appear on service pages (Google deduplicates and may suppress both).
 *
 * Validation: `mainEntity` must be an array; each `acceptedAnswer.text` must
 * be non-empty plain text — no HTML tags allowed inside the value.
 */
export function cityFaqSchema(city: CitySchemaConfig) {
  if (!city.faqs || city.faqs.length === 0) return null

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

/**
 * BreadcrumbList for /areas-served/[slug-tx]/.
 *
 * Three-level trail: Home → Areas Served → [City], TX.
 * Google requires each `item` to be an absolute URL and each `name` to be
 * human-readable (not a URL). Position must be sequential starting at 1.
 * The intermediate "Areas Served" crumb is included because the page lives
 * two levels deep — omitting it would leave a gap that Google flags.
 */
export function cityBreadcrumbSchema(city: CitySchemaConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: canonicalUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Areas Served",
        item: canonicalUrl("/areas-served"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${city.name}, TX`,
        item: canonicalUrl(`/areas-served/${city.slug}`),
      },
    ],
  }
}

/**
 * Service schema for future programmatic combo pages:
 * /areas-served/[city-slug]/[service-slug]/
 *
 * Designed now so city hub pages and future combo pages share a consistent
 * entity model. The `provider` always references the hub by `@id` (never
 * by address) — same SAB-safe pattern as cityPageSchema Tier 2. The service
 * name is city-qualified so Google can distinguish "Slab Leak Repair in Aledo"
 * from the canonical service page, avoiding thin-content deduplication.
 *
 * `serviceConfig` shape mirrors the existing ServiceConfig from
 * lib/services/_types.ts. Pass the full config — the function extracts only
 * what it needs so it stays forward-compatible as ServiceConfig grows.
 */
export function cityServiceSchema(
  city: CitySchemaConfig,
  serviceConfig: { name: string; href: string; metaDescription: string }
) {
  const hub = HUB_DATA[city.closestHubSlug]

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceConfig.name} in ${city.name}, TX`,
    url: canonicalUrl(`/areas-served/${city.slug}${serviceConfig.href}`),
    description: serviceConfig.metaDescription,
    provider: {
      "@type": "Plumber",
      "@id": hub.id,
      name: siteConfig.name,
      url: canonicalUrl("/"),
      telephone: hub.telephone,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "State", name: "Texas" },
    },
    openingHoursSpecification: OFFICE_HOURS,
  }
}
