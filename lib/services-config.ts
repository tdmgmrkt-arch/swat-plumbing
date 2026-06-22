import { siteConfig } from "./site-config"
import { canonicalUrl } from "./utils"

// Per-service configs live in lib/services/ — one file per service. This
// keeps each page's content as a small, focused, reviewable unit and lets the
// catalog grow without bloating a single file.
import { emergencyPlumbers } from "./services/emergency-plumbers"
import { plumbingLeakRepairs } from "./services/plumbing-leak-repairs"
import { slabLeak } from "./services/slab-leak"
import { cloggedDrain } from "./services/clogged-drain"
import { waterLineRepairs } from "./services/water-line-repairs"
import { gasLineRepair } from "./services/gas-line-repair"
import { sewerCleaning } from "./services/sewer-cleaning"
import { hydroJetting } from "./services/hydro-jetting"
import { sewerCameraInspections } from "./services/sewer-camera-inspections"
import { sewerLineRepairs } from "./services/sewer-line-repairs"
import { mainWaterLineRepair } from "./services/main-water-line-repair"
import { wholeHouseRepiping } from "./services/whole-house-repiping"
import { trenchlessRepair } from "./services/trenchless-repair"
import { plumbingTunneling } from "./services/plumbing-tunneling"
import { toiletRepair } from "./services/toilet-repair"
import { garbageDisposals } from "./services/garbage-disposals"
import { plumbingFixtures } from "./services/plumbing-fixtures"
import { plumbingPumps } from "./services/plumbing-pumps"
import { plumbingMaintenance } from "./services/plumbing-maintenance"
import { commercialPlumbers } from "./services/commercial-plumbers"
import { residentialPlumbing } from "./services/residential-plumbing"
import { runningWater } from "./services/running-water"
import { tanklessWaterHeaters } from "./services/tankless-water-heaters"
import { tankHeaterInstallation } from "./services/tank-heater-installation"
import { waterFiltration } from "./services/water-filtration"
import { residentialWaterTreatment } from "./services/residential-water-treatment"
import { waterSoftener } from "./services/water-softener"
import { reverseOsmosis } from "./services/reverse-osmosis"

// Re-export the shared types so existing imports of `ServiceConfig`, `Faq`, etc.
// from "@/lib/services-config" continue to work without churn.
export type {
  ServiceConfig,
  ProcessStep,
  WhySwatPillar,
  Faq,
  RelatedService,
} from "./services/_types"
import type { ServiceConfig, RelatedService } from "./services/_types"

// ---------------------------------------------------------------------------
// Service registry — keyed by slug for O(1) lookup
// ---------------------------------------------------------------------------
export const servicesConfig: Record<string, ServiceConfig> = {
  [emergencyPlumbers.slug]: emergencyPlumbers,
  [plumbingLeakRepairs.slug]: plumbingLeakRepairs,
  [slabLeak.slug]: slabLeak,
  [cloggedDrain.slug]: cloggedDrain,
  [waterLineRepairs.slug]: waterLineRepairs,
  [gasLineRepair.slug]: gasLineRepair,
  [sewerCleaning.slug]: sewerCleaning,
  [hydroJetting.slug]: hydroJetting,
  [sewerCameraInspections.slug]: sewerCameraInspections,
  [sewerLineRepairs.slug]: sewerLineRepairs,
  [mainWaterLineRepair.slug]: mainWaterLineRepair,
  [wholeHouseRepiping.slug]: wholeHouseRepiping,
  [trenchlessRepair.slug]: trenchlessRepair,
  [plumbingTunneling.slug]: plumbingTunneling,
  [toiletRepair.slug]: toiletRepair,
  [garbageDisposals.slug]: garbageDisposals,
  [plumbingFixtures.slug]: plumbingFixtures,
  [plumbingPumps.slug]: plumbingPumps,
  [plumbingMaintenance.slug]: plumbingMaintenance,
  [commercialPlumbers.slug]: commercialPlumbers,
  [residentialPlumbing.slug]: residentialPlumbing,
  [runningWater.slug]: runningWater,
  [tanklessWaterHeaters.slug]: tanklessWaterHeaters,
  [tankHeaterInstallation.slug]: tankHeaterInstallation,
  [waterFiltration.slug]: waterFiltration,
  [residentialWaterTreatment.slug]: residentialWaterTreatment,
  [waterSoftener.slug]: waterSoftener,
  [reverseOsmosis.slug]: reverseOsmosis,
}

/** Services that render under /plumbing/[slug]. */
export const plumbingCategoryServices: ServiceConfig[] = Object.values(
  servicesConfig
).filter((cfg) => cfg.href.startsWith("/plumbing/"))

/** Services that render under /water-heater/[slug]. */
export const waterHeaterCategoryServices: ServiceConfig[] = Object.values(
  servicesConfig
).filter((cfg) => cfg.href.startsWith("/water-heater/"))

/** Services that render under /water-quality/[slug]. */
export const waterQualityCategoryServices: ServiceConfig[] = Object.values(
  servicesConfig
).filter((cfg) => cfg.href.startsWith("/water-quality/"))

/** Resolve the parent category crumb for a service. Drives both the visual
 *  breadcrumb component and the JSON-LD BreadcrumbList. */
export function categoryParent(
  href: string
): { name: string; href: string } | null {
  if (href.startsWith("/plumbing/"))
    return { name: "Plumbing Services", href: "/plumbing" }
  if (href.startsWith("/water-heater/"))
    return { name: "Water Heaters", href: "/water-heater" }
  if (href.startsWith("/water-quality/"))
    return { name: "Water Quality", href: "/water-quality" }
  return null
}

/** Ordered list of all service configs, for iteration (sitemap, nav, etc.) */
export const allServices: ServiceConfig[] = Object.values(servicesConfig)

/** Resolve a slug → config, or null if not found */
export function getServiceConfig(slug: string): ServiceConfig | null {
  return servicesConfig[slug] ?? null
}

/** Build the related services list from relatedSlugs.
 *  Falls back to siteConfig service list for title/href if a config page isn't
 *  built yet — this lets relatedSlugs reference legacy services safely.
 */
export function resolveRelatedServices(cfg: ServiceConfig): RelatedService[] {
  type ServiceLink = { title: string; href: string }
  const legacyMap = Object.fromEntries(
    (siteConfig.serviceCategories as unknown as Array<{ services: ServiceLink[] }>)
      .flatMap((c) => c.services)
      .map((s) => [
        s.href
          .replace("/plumbing/", "")
          .replace("/water-heater/", "")
          .replace("/water-quality/", ""),
        s,
      ])
  )

  return cfg.relatedSlugs.slice(0, 3).map((slug) => {
    const full = servicesConfig[slug]
    if (full) {
      return {
        slug,
        title: full.name,
        href: full.href,
        description: full.heroPainLine,
      }
    }
    const legacy = legacyMap[slug]
    return {
      slug,
      title: legacy?.title ?? slug,
      href: legacy?.href ?? `/plumbing/${slug}`,
      description:
        "Expert plumbing service from S.W.A.T. Plumbing — licensed, 24/7, upfront pricing.",
    }
  })
}

/** Generate JSON-LD Service schema for a service page */
export function servicePageSchema(cfg: ServiceConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: cfg.name,
    url: canonicalUrl(cfg.href),
    provider: {
      "@type": "Plumber",
      name: siteConfig.name,
      url: canonicalUrl("/"),
      telephone: siteConfig.phone.primary,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.locations[0].address,
        addressLocality: siteConfig.locations[0].city,
        addressRegion: siteConfig.locations[0].state,
        postalCode: siteConfig.locations[0].zip,
        addressCountry: "US",
      },
    },
    areaServed: siteConfig.serviceArea.map((city) => ({
      "@type": "City",
      name: city.name,
    })),
    description: cfg.metaDescription,
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone.primary,
        contactType: "customer service",
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
      },
    },
  }
}

/** Generate FAQPage JSON-LD from service config faqs */
export function serviceFaqSchema(cfg: ServiceConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cfg.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

/** Generate BreadcrumbList JSON-LD for a service page. Uses categoryParent()
 *  so the intermediate crumb matches the actual URL category (plumbing,
 *  water-heater, water-quality) — or is skipped for root-level legacy URLs. */
export function serviceBreadcrumbSchema(cfg: ServiceConfig) {
  const parent = categoryParent(cfg.href)

  const items: Array<Record<string, unknown>> = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: canonicalUrl("/"),
    },
  ]

  if (parent) {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: parent.name,
      item: canonicalUrl(parent.href),
    })
  }

  items.push({
    "@type": "ListItem",
    position: parent ? 3 : 2,
    name: cfg.name,
    item: canonicalUrl(cfg.href),
  })

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  }
}
