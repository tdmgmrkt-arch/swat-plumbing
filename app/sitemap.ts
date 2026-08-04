import { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"
import { canonicalUrl } from "@/lib/utils"
import { allServices as builtServices } from "@/lib/services-config"
import { builtCities } from "@/lib/cities-config"
import { allBlogPosts, TOTAL_BLOG_PAGES } from "@/lib/blog-posts-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = siteConfig.staticPages.map((p) => ({
    url: canonicalUrl(p.href === "/" ? "/" : p.href),
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))

  // Category hub pages (/plumbing, /water-heater, /water-quality)
  const categoryHubs: MetadataRoute.Sitemap = siteConfig.serviceCategories.map((c) => ({
    url: canonicalUrl(c.hubHref),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }))

  // All sub-service pages, flattened across categories.
  // De-duplicate hrefs that point back to a category hub (e.g. "All Water Heaters" → /water-heater).
  type ServiceLink = { title: string; href: string }
  const hubHrefs = new Set<string>(
    siteConfig.serviceCategories.map((c) => c.hubHref)
  )
  const allServices: ServiceLink[] = siteConfig.serviceCategories.flatMap(
    (c) => [...c.services] as ServiceLink[]
  )
  const serviceRoutes: MetadataRoute.Sitemap = allServices
    .filter((s) => !hubHrefs.has(s.href))
    .map((s) => ({
      url: canonicalUrl(s.href),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }))

  // City pages: /areas-served/[slug]
  // Driven by builtCities aggregator — independent of siteConfig.cityPagesLive.
  // Only cities with a real config file produce routes; all 47 unbuilt slugs 404.
  const cityRoutes: MetadataRoute.Sitemap = builtCities.map((cfg) => ({
    url: canonicalUrl(cfg.href),
    lastModified: new Date(cfg.lastUpdated),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }))

  // Built service pages from servicesConfig — these have real content and get
  // priority 0.85; they also appear in serviceRoutes above (via siteConfig) but
  // the sitemap de-duplicates by URL in practice; we use the higher priority entry.
  const builtServiceRoutes: MetadataRoute.Sitemap = builtServices.map((cfg) => ({
    url: canonicalUrl(cfg.href),
    lastModified: new Date(cfg.lastUpdated),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }))

  // Merge: built service pages take precedence over the stub entries from siteConfig.
  // Compare via canonicalUrl(href) so the suffix matches whatever the helper produces.
  const builtUrlSet = new Set(builtServices.map((cfg) => canonicalUrl(cfg.href)))
  const filteredServiceRoutes = serviceRoutes.filter(
    (r) => !builtUrlSet.has(r.url as string)
  )

  // Blog posts: /blog/[slug]
  // Skip posts with a canonicalOverride — their authority intentionally
  // consolidates to a service page, so listing them here sends a conflicting
  // signal and Google may drop the post from the index entirely.
  const blogPostRoutes: MetadataRoute.Sitemap = allBlogPosts
    .filter((post) => !post.canonicalOverride)
    .map((post) => ({
      url: canonicalUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.lastUpdated ?? post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))

  // Paginated blog hub pages 2..N. Page 1 lives at /blog/ (already covered
  // by staticRoutes) and /blog/page/1/ is redirected to /blog/ in
  // next.config.ts, so neither belongs here.
  const blogPaginationRoutes: MetadataRoute.Sitemap = Array.from(
    { length: Math.max(0, TOTAL_BLOG_PAGES - 1) },
    (_, i) => ({
      url: canonicalUrl(`/blog/page/${i + 2}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })
  )

  return [
    ...staticRoutes,
    ...categoryHubs,
    ...filteredServiceRoutes,
    ...builtServiceRoutes,
    ...cityRoutes,
    ...blogPostRoutes,
    ...blogPaginationRoutes,
  ]
}
