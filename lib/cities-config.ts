import { aledo } from "./cities/aledo-tx"
import { fortWorth } from "./cities/fort-worth-tx"
import { weatherford } from "./cities/weatherford-tx"
import { arlington } from "./cities/arlington-tx"
import { mansfield } from "./cities/mansfield-tx"
import { bedford } from "./cities/bedford-tx"
import { euless } from "./cities/euless-tx"
import { hurst } from "./cities/hurst-tx"
import { northRichlandHills } from "./cities/north-richland-hills-tx"
import { keller } from "./cities/keller-tx"
import { grapevine } from "./cities/grapevine-tx"
import { southlake } from "./cities/southlake-tx"
// 37 new cities
import { annetta } from "./cities/annetta-tx"
import { annettaNorth } from "./cities/annetta-north-tx"
import { annettaSouth } from "./cities/annetta-south-tx"
import { azle } from "./cities/azle-tx"
import { blueMound } from "./cities/blue-mound-tx"
import { benbrook } from "./cities/benbrook-tx"
import { burleson } from "./cities/burleson-tx"
import { colleyville } from "./cities/colleyville-tx"
import { crowley } from "./cities/crowley-tx"
import { dalworthingtonGardens } from "./cities/dalworthington-gardens-tx"
import { edgecliffVillage } from "./cities/edgecliff-village-tx"
import { everman } from "./cities/everman-tx"
import { flowerMound } from "./cities/flower-mound-tx"
import { forestHill } from "./cities/forest-hill-tx"
import { grandPrairie } from "./cities/grand-prairie-tx"
import { haltomCity } from "./cities/haltom-city-tx"
import { haslet } from "./cities/haslet-tx"
import { hudsonOaks } from "./cities/hudson-oaks-tx"
import { kennedale } from "./cities/kennedale-tx"
import { lakeWorth } from "./cities/lake-worth-tx"
import { lakeside } from "./cities/lakeside-tx"
import { newark } from "./cities/newark-tx"
import { pantego } from "./cities/pantego-tx"
import { pelicanBay } from "./cities/pelican-bay-tx"
import { reno } from "./cities/reno-tx"
import { richlandHills } from "./cities/richland-hills-tx"
import { riverOaks } from "./cities/river-oaks-tx"
import { saginaw } from "./cities/saginaw-tx"
import { sansomPark } from "./cities/sansom-park-tx"
import { springtown } from "./cities/springtown-tx"
import { trophyClub } from "./cities/trophy-club-tx"
import { watauga } from "./cities/watauga-tx"
import { westlake } from "./cities/westlake-tx"
import { westoverHills } from "./cities/westover-hills-tx"
import { westworthVillage } from "./cities/westworth-village-tx"
import { whiteSettlement } from "./cities/white-settlement-tx"
import { willowPark } from "./cities/willow-park-tx"
import type { CityConfig } from "./cities/_types"
import { servicesConfig } from "./services-config"
import { siteConfig } from "./site-config"

// ---------------------------------------------------------------------------
// City registry — keyed by slug for O(1) lookup.
// Add new city files here as they are built. The aggregator IS the gate:
// only slugs in builtCities produce /areas-served/[slug] routes.
// ---------------------------------------------------------------------------
export const citiesConfig: Record<string, CityConfig> = {
  // Hubs
  [aledo.slug]: aledo,
  [fortWorth.slug]: fortWorth,
  // Parker County
  [weatherford.slug]: weatherford,
  [annetta.slug]: annetta,
  [annettaNorth.slug]: annettaNorth,
  [annettaSouth.slug]: annettaSouth,
  [hudsonOaks.slug]: hudsonOaks,
  [willowPark.slug]: willowPark,
  // Tarrant County — Arlington / south
  [arlington.slug]: arlington,
  [mansfield.slug]: mansfield,
  [burleson.slug]: burleson,
  [crowley.slug]: crowley,
  [edgecliffVillage.slug]: edgecliffVillage,
  [everman.slug]: everman,
  [forestHill.slug]: forestHill,
  [kennedale.slug]: kennedale,
  [pantego.slug]: pantego,
  // Tarrant County — HEB Mid-Cities
  [bedford.slug]: bedford,
  [euless.slug]: euless,
  [hurst.slug]: hurst,
  [northRichlandHills.slug]: northRichlandHills,
  [colleyville.slug]: colleyville,
  [richlandHills.slug]: richlandHills,
  // Tarrant County — north corridor
  [keller.slug]: keller,
  [grapevine.slug]: grapevine,
  [southlake.slug]: southlake,
  [trophyClub.slug]: trophyClub,
  [westlake.slug]: westlake,
  [flowerMound.slug]: flowerMound,
  // Tarrant County — west / inner
  [benbrook.slug]: benbrook,
  [blueMound.slug]: blueMound,
  [dalworthingtonGardens.slug]: dalworthingtonGardens,
  [grandPrairie.slug]: grandPrairie,
  [haltomCity.slug]: haltomCity,
  [lakeWorth.slug]: lakeWorth,
  [lakeside.slug]: lakeside,
  [riverOaks.slug]: riverOaks,
  [saginaw.slug]: saginaw,
  [sansomPark.slug]: sansomPark,
  [watauga.slug]: watauga,
  [westoverHills.slug]: westoverHills,
  [westworthVillage.slug]: westworthVillage,
  [whiteSettlement.slug]: whiteSettlement,
  // Tarrant County — north / haslet corridor
  [haslet.slug]: haslet,
  [azle.slug]: azle,
  // Wise County
  [newark.slug]: newark,
  // Parker County — Springtown / Reno / Pelican Bay
  [springtown.slug]: springtown,
  [reno.slug]: reno,
  [pelicanBay.slug]: pelicanBay,
}

export const builtCities: CityConfig[] = Object.values(citiesConfig)
export const builtCitySlugs = new Set(builtCities.map((c) => c.slug))

export function getCityConfig(slug: string): CityConfig | null {
  return citiesConfig[slug] ?? null
}

// ---------------------------------------------------------------------------
// Inline service shape for highlights that resolve outside /plumbing/[slug]
// ---------------------------------------------------------------------------
interface InlineService {
  name: string
  href: string
  heroPainLine?: string
}

export interface ResolvedServiceHighlight {
  service: InlineService
  localAngle: string
}

/**
 * Resolve a city's serviceHighlights against the services registry.
 * Falls back to siteConfig.serviceCategories for any slug that doesn't have a
 * full ServiceConfig — this handles tankless, water softener, etc. that live
 * under /water-heater/ or /water-quality/ rather than /plumbing/.
 * Drops highlights whose slug can't be found anywhere (typo-proof).
 */
export function resolveCityServiceHighlights(
  cfg: CityConfig
): ResolvedServiceHighlight[] {
  // Build a flat href map from ALL siteConfig service categories so we can
  // resolve water-heater and water-quality slugs correctly.
  type ServiceLink = { title: string; href: string }
  const siteconfigMap: Record<string, ServiceLink> = Object.fromEntries(
    (
      siteConfig.serviceCategories as unknown as Array<{
        services: ServiceLink[]
      }>
    )
      .flatMap((c) => c.services)
      .map((s) => {
        // Key by the final path segment: /water-heater/tankless-water-heaters → tankless-water-heaters
        const slug = s.href.replace(/^\/[^/]+\//, "").replace(/^\//, "")
        return [slug, s]
      })
  )

  return cfg.serviceHighlights
    .map((h): ResolvedServiceHighlight | null => {
      const full = servicesConfig[h.serviceSlug]
      if (full) {
        return {
          service: {
            name: full.name,
            href: full.href,
            heroPainLine: full.heroPainLine,
          },
          localAngle: h.localAngle,
        }
      }

      // Fall back to siteConfig lookup
      const link = siteconfigMap[h.serviceSlug]
      if (link) {
        return {
          service: {
            name: link.title,
            href: link.href,
          },
          localAngle: h.localAngle,
        }
      }

      return null
    })
    .filter((r): r is ResolvedServiceHighlight => r !== null)
}

/**
 * Return only the nearbyCities entries whose slug is in builtCitySlugs.
 * Unbuilt cities are still rendered as cards (coverage signal) but without
 * live links — this helper is for determining link vs. static-text rendering
 * inside city-nearby-cities.tsx.
 *
 * NOTE: we intentionally do NOT filter here — we return the full list with an
 * `isBuilt` flag. The component renders all of them; only built ones get <Link>.
 */
export function annotateNearbyCities(cfg: CityConfig) {
  return cfg.nearbyCities.map((nc) => ({
    ...nc,
    isBuilt: builtCitySlugs.has(nc.slug),
  }))
}
