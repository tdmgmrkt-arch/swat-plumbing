import type { Metadata } from "next"
import Image from "next/image"
import { Tag } from "lucide-react"

import { siteConfig } from "@/lib/site-config"
import { blogPageSchema, blogBreadcrumbSchema } from "@/lib/schema"
import {
  allBlogPosts,
  formatBlogDate,
  getPostsForPage,
  TOTAL_BLOG_PAGES,
} from "@/lib/blog-posts-config"
import { canonicalUrl } from "@/lib/utils"
import { defaultOgImages, defaultTwitterImages } from "@/lib/metadata"
import { TacticalLabel, AccentLine } from "@/components/ui/tactical-panel"
import {
  FeaturedCard,
  PostCard,
  PaginationNav,
} from "@/components/blog-hub/blog-cards"

import UtilityBar from "@/components/site/utility-bar"
import SiteHeader from "@/components/site/site-header"
import PageBreadcrumb from "@/components/site/page-breadcrumb"
import SiteFooter from "@/components/site/site-footer"
import MobileCtaBar from "@/components/site/mobile-cta-bar"
import FinalCta from "@/components/sections/final-cta"

const CANONICAL = canonicalUrl("/blog")

export const metadata: Metadata = {
  title: "Plumbing Guides for North Texas Homeowners",
  description:
    "Practical plumbing knowledge from licensed Texas Master Plumbers in Aledo and Fort Worth — emergency response, slab leaks, water heaters, gas safety, and more.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Plumbing Guides for North Texas Homeowners | S.W.A.T. Plumbing",
    description:
      "Practical plumbing knowledge from licensed pros in Aledo and Fort Worth — slab leaks, water heaters, drains, gas safety, and emergency response.",
    siteName: siteConfig.name,
    images: defaultOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Plumbing Guides for North Texas Homeowners",
    description:
      "Plumbing tips, project breakdowns, and seasonal guides for North Texas homeowners.",
    images: defaultTwitterImages,
  },
}

export default function BlogPage() {
  const pagePosts = getPostsForPage(1)
  const [featured, second, ...rest] = pagePosts
  const totalPosts = allBlogPosts.length
  const lastUpdated = formatBlogDate(allBlogPosts[0].date)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogBreadcrumbSchema()),
        }}
      />

      <UtilityBar />
      <SiteHeader />

      <main id="main-content">
        <PageBreadcrumb current="Blog" />

        {/* ============================================================== */}
        {/* HERO — compact so the post grid peeks above the fold           */}
        {/* ============================================================== */}
        <section
          className="relative isolate bg-[#080a0c] pt-12 pb-8 lg:pt-16 lg:pb-10 overflow-hidden"
          aria-labelledby="blog-hero-heading"
        >
          <Image
            src="/hero-images/hero-blog.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center -z-10 opacity-55"
            priority
          />
          <div
            className="absolute inset-0 -z-10 bg-linear-to-r from-[#050608] from-0% via-[#080a0c]/85 via-50% to-[#080a0c]/60 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -z-10 bg-linear-to-t from-[#050608] via-transparent to-[#050608]/50 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 tactical-grid opacity-25"
            aria-hidden="true"
          />
          <div
            className="absolute left-0 inset-y-0 w-1 bg-red-600"
            aria-hidden="true"
          />
          <div
            className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-red-600/30"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-red-600/30"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_40%,rgba(220,38,38,0.08),transparent)]"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="relative flex h-2 w-2"
                aria-hidden="true"
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-red-400 font-mono">
                Intelligence Briefings
              </span>
            </div>

            <TacticalLabel>Field Notes</TacticalLabel>
            <AccentLine />

            <h1
              id="blog-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-5"
            >
              Know Before We Roll.
              <br />
              <span className="text-red-500">Plumbing Guides for North Texas.</span>
            </h1>

            <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-2xl mb-3">
              Practical plumbing knowledge from licensed Texas Master Plumbers
              — slab leaks, water heaters, gas safety, sewer line diagnostics,
              and what to do before we arrive.
            </p>

            <p className="text-white/40 text-sm font-mono tracking-wide">
              Aledo, TX · Fort Worth, TX · North Texas Homeowners
            </p>

            {/* Stats strip */}
            <div className="mt-9 inline-grid grid-cols-3 gap-0 border border-white/10 rounded-sm divide-x divide-white/10 overflow-hidden">
              {[
                {
                  value: String(totalPosts),
                  label: "Published",
                },
                {
                  value: "M-39596",
                  label: "Master License",
                },
                {
                  value: "2013",
                  label: "Founded",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="px-5 py-3.5 bg-[#0a0c0e]"
                >
                  <div className="text-lg sm:text-xl font-black text-white tracking-tight leading-none font-mono">
                    {s.value}
                  </div>
                  <div className="text-[9px] font-mono tracking-[0.2em] uppercase text-white/45 mt-1.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* INTEGRATED FEED — asymmetric featured row + standard grid       */}
        {/*                                                                  */}
        {/* Asymmetric top row (featured spans 2/3, second-newest in 1/3)    */}
        {/* immediately signals "this is a feed of multiple articles"       */}
        {/* without requiring the user to scroll past a full-width hero.    */}
        {/* ============================================================== */}
        <section
          className="relative bg-[#0e1012] border-t border-white/8 py-10 lg:py-14 overflow-hidden"
          aria-labelledby="feed-heading"
        >
          <div
            className="absolute inset-0 tactical-grid opacity-20"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
            {/* Section header — tight, lets the grid breathe */}
            <div className="flex items-end justify-between gap-6 mb-7 lg:mb-9">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span
                    className="relative flex h-2 w-2"
                    aria-hidden="true"
                  >
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-red-400 font-bold">
                    Latest Dispatch
                  </span>
                </div>
                <h2
                  id="feed-heading"
                  className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight"
                >
                  {totalPosts} posts published.
                  <span className="text-red-500"> Newest first.</span>
                </h2>
              </div>
              <span className="hidden sm:inline-flex text-[10px] font-mono tracking-[0.2em] uppercase text-white/30 font-semibold whitespace-nowrap pb-1.5">
                {totalPosts} entries
              </span>
            </div>

            {/* Asymmetric top row — featured (col-span-2) + second (col-span-1) */}
            {featured && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 mb-4 lg:mb-5">
                <div className="lg:col-span-2">
                  <FeaturedCard post={featured} />
                </div>
                {second && (
                  <div className="lg:col-span-1">
                    <PostCard post={second} />
                  </div>
                )}
              </div>
            )}

            {/* Remaining posts — standard 3-col grid */}
            {rest.length > 0 && (
              <ul
                role="list"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
              >
                {rest.map((p) => (
                  <li key={p.slug}>
                    <PostCard post={p} />
                  </li>
                ))}
              </ul>
            )}

            <PaginationNav currentPage={1} totalPages={TOTAL_BLOG_PAGES} />
          </div>
        </section>

        {/* ============================================================== */}
        {/* FINAL CTA                                                       */}
        {/* ============================================================== */}
        <FinalCta />

        {/* Last updated stamp */}
        <div className="bg-[#080a0c] border-t border-white/6 py-4">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 flex items-center gap-2">
            <Tag
              className="h-3 w-3 text-white/25 shrink-0"
              aria-hidden="true"
            />
            <p className="text-white/30 text-xs font-mono">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
      <MobileCtaBar />
      <div className="h-14 lg:hidden" aria-hidden="true" />
    </>
  )
}
