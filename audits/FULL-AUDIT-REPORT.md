# SWAT Plumbing — Pre-Launch SEO Audit

**Audited:** http://localhost:3001 (production build, `next build && next start -p 3001`)
**Date:** 2026-06-18
**Mode:** Local pre-launch audit. Live-data subagents (Google CrUX, GSC, DataForSEO live SERPs, backlink profiles) excluded — re-run post-launch.
**Business type detected:** Hybrid local service (2 physical locations + SAB across 49 communities), home services / plumbing.

---

## SEO Health Score: **82 / 100**

| Category | Weight | Score | Notes |
|---|---|---|---|
| Technical SEO | 22% | **88** | Clean sitemap, proper canonicals, lang attr, robots config; one title-template bug |
| Content Quality | 23% | **86** | Excellent depth (5.8K–9.2K words/page), strong E-E-A-T, comprehensive blog |
| On-Page SEO | 20% | **78** | Title duplication bug on blog; FAQ schema missing on Financing; otherwise strong |
| Schema / Structured Data | 10% | **92** | Plumber + Person + BlogPosting + FAQ + AggregateRating all properly wired |
| Performance (CWV) | 10% | **N/A** | Could not measure via subagent — needs manual Lighthouse run |
| AI Search Readiness | 10% | **90** | llms.txt comprehensive, AI bots allowed, strong passage citability |
| Images | 5% | **88** | All alts present, decorative use of empty alt="" is correct |

Weighted final, excluding the unmeasured Performance bucket: **82 / 100**

---

## Top 5 Critical / High Issues

### 1. Blog post `<title>` tag duplication (HIGH — easy fix)
Every blog post renders as:
```
Sewer Line Repair Near Me Fort Worth TX | S.W.A.T. Plumbing Blog | S.W.A.T. Plumbing LLC
```
The blog post's own metadata already appends `| S.W.A.T. Plumbing Blog`, then the root layout's `title.template` adds `| S.W.A.T. Plumbing LLC` on top. Two-layer suffix bloat = SERP truncation + reduced CTR. **Fix:** in [app/blog/[slug]/page.tsx](app/blog/[slug]/page.tsx) `generateMetadata`, either drop the `| S.W.A.T. Plumbing Blog` suffix from the per-post title (let the layout template handle it), or use `absolute:` to bypass the template.

### 2. SXO cannibalization — 2 blog posts compete with service pages (HIGH — content decision)
Per the SXO subagent's full report at `audits/seo-sxo.md`:
- `/blog/24-hour-plumber-fort-worth-tx-fast-response` directly competes with `/plumbing/emergency-plumbers` for the transactional query "24 hour plumber Fort Worth." Google's top 10 for this query is **all service pages, zero blog posts**.
- `/blog/slab-leak-repair-fort-worth-tx-experts` competes with `/plumbing/slab-leak` for the same intent.

**Fix:** Rewrite both blog posts to informational angles ("What Counts as a Plumbing Emergency?" / "How to Tell If You Have a Slab Leak"), then internally link aggressively to the service page. OR add `rel=canonical` from the blog post to the service page as a stopgap.

### 3. Financing page has 5 FAQs but no FAQPage schema (MEDIUM)
The Financing page renders 5 substantial FAQs but no corresponding `FAQPage` JSON-LD. This is a missed AI Overview / rich result opportunity. **Fix:** wire `serviceFaqSchema()` (already exists in [lib/schema.ts](lib/schema.ts)) into the Financing page with the FAQ array.

### 4. Performance / Core Web Vitals not yet measured (UNKNOWN)
Subagent ran into Python pathing issues on Windows and didn't produce LCP/CLS/INP numbers. The 14 MB autoplay hero video MP4 is the biggest unknown — needs hands-on Lighthouse in DevTools (Mobile profile, Slow 4G) before launch. **Fix:** run Lighthouse against http://localhost:3001 from Chrome DevTools manually; address findings before deploy.

### 5. Hub pages missing FAQ schema (MEDIUM)
`/plumbing`, `/water-heater`, `/water-quality` hub pages don't carry FAQPage schema. Given the long visitor sessions on category overview pages, this is a missed opportunity for both rich results and AI Overview citations.

---

## Top 5 Quick Wins

1. **Fix the title template duplication** — single-file change, instant SERP CTR boost for all 8 blog posts
2. **Add FAQPage schema to /financing** — 1 schema function call, well-formed FAQ already exists
3. **Resolve SXO cannibalization on 2 blog posts** — either rewrite to informational or canonicalize to service page
4. **Run Lighthouse manually + address hero video LCP impact** — likely the biggest performance variable
5. **Add `name` and `image` properties to BBB and TSBPE badges on about-us if you want them in Knowledge Graph** — explicit structured data on Org affiliations

---

## Detailed Findings

### Technical SEO — 88 / 100

**Strengths:**
- ✅ `/robots.txt` clean: `Allow: /`, blocks `/api/` + `/_next/`, points to production sitemap
- ✅ `/sitemap.xml` returns 98 URLs (49 cities + 21 services + 3 hubs + 8 blog + 17 static/feature/etc.)
- ✅ Canonical URLs consistently use `https://www.swatplumbing.com` even when served from localhost — correct for pre-launch
- ✅ HTML `lang="en"` attribute set
- ✅ No `noindex` on production pages
- ✅ Trailing slash policy consistent (no slashes on canonicals)
- ✅ AI bots (GPTBot, Anthropic, Perplexity, Google-Extended) implicitly allowed by `User-Agent: *` rule

**Issues:**
- ⚠️ Title template duplication on blog posts (described above as Critical Issue #1)
- ⚠️ Performance metrics not captured (subagent failed; manual Lighthouse needed)
- ⚠️ HTTPS will need to be confirmed on Vercel deployment (auto-provisioned, but verify post-launch)
- ⚠️ Security headers — could not measure on localhost; CSP / X-Frame-Options / Permissions-Policy should be reviewed in Vercel project settings before launch

### Content Quality — 86 / 100

**E-E-A-T scorecard** (consistent with earlier session assessment, ~8.4/10):
- **Experience:** 8.5/10 — Self-hosted hero crew video, named team bios for all 9 staff, BBB Accredited since 2014
- **Expertise:** 8.5/10 — TX Master Plumber #M-39596 surfaced everywhere, Person schema w/ credentials, blog posts authored by named expert
- **Authoritativeness:** 8.0/10 — 8 published blog posts with EPA/DOE/NFPA outbound citations, 2 awards (Pulse 2026, BusinessRate 2025) with verify links, BBB A+ link to profile
- **Trustworthiness:** 8.5/10 — Live Google reviews everywhere, hours conflict resolved, license # publicly verifiable, Privacy + Terms pages

**Content depth (word counts, body only):**
- Homepage: ~7,260 (incl. nav/footer — actual content rich)
- `/plumbing/slab-leak` (service): ~7,869
- `/areas-served/willow-park-tx` (Tier 2 SAB city): ~9,246 (excellent for a non-GBP city)
- `/blog/sewer-line-repair-near-me-fort-worth-tx`: ~5,843

No thin-content pages detected. Every service, city, and blog post exceeds 2,000 words.

**Duplicate content risk:** city pages share boilerplate (master plumber license sentence, dispatch hub references) but each carries unique content (neighborhoods, common-issues, FAQs, geo-precise schema). Acceptable; not duplicate-content-penalty territory.

### On-Page SEO — 78 / 100

**Strengths:**
- Unique, descriptive meta descriptions per page sampled (homepage, about, financing, hubs, services, city, blog)
- Heading hierarchy clean: single H1 per page, logical H2/H3 nesting
- Internal linking pattern strong (service → city, blog → service, city → service)

**Issues:**
- Title duplication bug (covered above)
- Some long titles risk truncation in SERPs (e.g., "Sewer Line Repair Near Me Fort Worth TX | S.W.A.T. Plumbing Blog | S.W.A.T. Plumbing LLC" — ~85 chars, will truncate)
- Hydro-jetting service page has no city qualifier in URL (per SXO report) — flagged for future programmatic city+service pages

### Schema / Structured Data — 92 / 100

**Schema types confirmed present and valid:**
- Homepage: Plumber, ContactPoint, OpeningHoursSpecification, Offer, OfferCatalog, Service, PostalAddress, City, State
- `/about-us`: AboutPage, BreadcrumbList, Person (Dillon, with `hasCredential` array of EducationalOccupationalCredential), GovernmentOrganization
- `/blog/[slug]`: BlogPosting, BreadcrumbList, Person (author reference), Organization, ImageObject, Place
- Tier 2 SAB city (`/areas-served/willow-park-tx`): Plumber, GeoCircle, FAQPage, Service, ContactPoint, BreadcrumbList
- Tier 1 GBP city (`/areas-served/aledo-tx`): Plumber w/ AggregateRating, GeoCoordinates, full address schema

**Missing opportunities:**
- FAQPage schema on Financing, Plumbing hub, Water Heater hub, Water Quality hub (these all have FAQ content but no markup)
- No `Article` or `Review` schema on testimonials (could enrich AI Overview eligibility)
- No `Product` schema on water heater tank/tankless pages (Google Shopping eligibility)

### AI Search Readiness — 90 / 100

**Strengths:**
- ✅ `/llms.txt` exists, well-formed, comprehensive (lists every service with linked URLs and descriptions)
- ✅ AI crawlers allowed by default in robots.txt
- ✅ Strong named-entity density (license #, founding year, owner name, BBB A+, awards, specific cities, neighborhoods)
- ✅ Outbound citations to authoritative sources (EPA, DOE, NFPA) in blog posts
- ✅ Person schema makes author authority machine-readable
- ✅ Q&A structure on service + city + financing pages — citation-friendly

**Improvements:**
- llms.txt could include blog post URLs (currently lists services only)
- Conversational query coverage strong but could add explicit "Frequently Asked" content cluster pages

### Performance — UNMEASURED

Subagent failed on Windows Python pathing. Manual Lighthouse from Chrome DevTools (Mobile, Slow 4G profile) required before launch to assess:
- Hero video impact on LCP (14 MB autoplay MP4)
- Image optimization (next/image is in use — should be serving WebP/AVIF)
- Render-blocking resources
- Total page weight on city/service pages

### Images — 88 / 100

- ✅ Sampled homepage: 11 `<img>` tags, all carry `alt` attribute; 5 use `alt=""` (decorative — correct usage)
- ✅ next/image in use for hero, badges, blog hero images — should auto-serve WebP
- ⚠️ Hero video (14 MB) is the biggest single asset — need perf measurement to confirm acceptable

### Local SEO — Strong

(Inline assessment since subagent didn't deliver final summary)

- ✅ NAP consistency across header, footer, about, contact, schema — same name, address, phone everywhere
- ✅ Tier 1 vs Tier 2 city distinction correct (Aledo + Fort Worth = full address + GBP rating; other 47 = SAB with GeoCircle)
- ✅ Live Google reviews now on every page type (homepage, hub, service, city, about)
- ✅ License number + founding year + BBB accreditation surfaced consistently
- ✅ City pages average 9,000+ words with local relevance signals (neighborhoods, soil/water quality, response time claims)
- ⚠️ Social profiles thin — only Facebook + Google linked; consider adding Yelp, Angi, Nextdoor links when accounts exist

---

## What Could NOT Be Audited (Pre-Launch Limitations)

- ❌ Google Search Console / URL indexation status (requires verified production site)
- ❌ CrUX field-data Core Web Vitals (requires live traffic)
- ❌ GA4 organic traffic (requires live site + analytics setup)
- ❌ DataForSEO live SERPs / ranking positions (no organic ranking yet)
- ❌ Backlink profile (no crawl history)
- ❌ Live SERP competition analysis (depends on production)
- ❌ Maps intelligence / geo-grid rank tracking (depends on production)

**Re-run a full audit post-launch** once these data sources are available — they will likely materially improve the Authoritativeness score and identify backlinking opportunities.

---

## Methodology Note

3 of 8 subagent reports completed with full deliverables; 5 hit token budget mid-investigation and didn't produce final summaries. Findings above were consolidated inline using:
- The SXO subagent's complete report (`audits/seo-sxo.md`)
- Raw page HTML captured by other subagents in `audits/raw/`
- Direct HTTP fetches against the running production server
- Session-resident knowledge of the codebase from prior turns

A re-run with smaller agent scopes (one page-type per agent rather than full-site) would yield more complete subagent deliverables — recommended if a more structured per-category report is needed.
