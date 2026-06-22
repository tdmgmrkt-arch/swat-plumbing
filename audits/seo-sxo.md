# SXO Audit — S.W.A.T. Plumbing LLC
**Analyst:** SXO Agent (Claude Sonnet 4.6)
**Date:** 2026-06-17
**Site:** http://localhost:3001 (pre-launch Next.js build)
**Status:** Pre-launch — no live domain authority yet; analysis is architecture + intent analysis, not rank-position data.

---

## SXO Gap Score: 61 / 100

**Score breakdown (7 dimensions):**

| Dimension | Score | Max | Notes |
|---|---|---|---|
| Page Type Alignment | 9 | 15 | Strong service pages; blog type mismatch on 2 keywords |
| Content Depth | 12 | 15 | Service pages excellent; blog posts thin/generic |
| UX Signals | 11 | 15 | CTA bar, schedule CTAs good; no click-to-call on blog posts |
| Schema | 13 | 15 | Service + FAQPage + Breadcrumb on service pages; blog lacks Article schema |
| Media | 7 | 15 | Hero images stubbed (webp placeholders, no real photography yet) |
| Authority | 5 | 15 | Zero inbound links, pre-launch; BBB badge is live on /about-us only |
| Freshness | 4 | 10 | All content dated June 2026; no review date cadence set |

---

## 1. Page-Type Alignment Table

| Keyword | Google Rewards | Our Best Page | Page Type Match | Mismatch Severity |
|---|---|---|---|---|
| emergency plumber Aledo TX | Local Pack + SAB city landing page | /areas-served/aledo-tx | ALIGNED | ALIGNED |
| slab leak repair Fort Worth | Commercial service page (transactional) | /plumbing/slab-leak | ALIGNED | ALIGNED |
| slab leak repair Fort Worth (blog) | Service page, NOT blog | /blog/slab-leak-repair-fort-worth-tx-experts | MISALIGNED | HIGH |
| 24 hour plumber Fort Worth | Service page + Local Pack | /plumbing/emergency-plumbers | ALIGNED | ALIGNED |
| 24 hour plumber Fort Worth (blog) | Service page, NOT blog | /blog/24-hour-plumber-fort-worth-tx-fast-response | MISALIGNED | CRITICAL |
| water heater installation Aledo | Service page (transactional, local) | /water-heater/tank-heater-installation | ALIGNED | ALIGNED |
| plumber near me | Local Pack dominates; city page + homepage as organic backup | /areas-served/aledo-tx | ALIGNED | MEDIUM |
| hydro jetting Fort Worth | Service page (transactional) | /plumbing/hydro-jetting | MEDIUM | MEDIUM — no city in URL |
| BBB accredited plumber Aledo | About/trust page (informational) | /about-us | ALIGNED | ALIGNED |
| no hot water in house Fort Worth | Informational / how-to | /blog/no-hot-water-in-house-fort-worth | ALIGNED | ALIGNED |

---

## 2. Cannibalization Risk Analysis

### CRITICAL: "24 hour plumber Fort Worth" — Two Pages Targeting Same Transactional Intent

**Competing pages:**
- `/plumbing/emergency-plumbers` — full service page, 24/7 emergency copy, FAQs, schema, CTA strip
- `/blog/24-hour-plumber-fort-worth-tx-fast-response` — blog post targeting identical transactional query

**SERP signal:** The top 10 for "24 hour plumber Fort Worth TX" are 100% service pages and directory listings (Roto-Rooter, Mr. Rooter, Berkeys, Milestone, Rockwater). Zero blog posts rank. Google classifies this as a transactional / local-services query.

**Outcome if uncorrected:** Google receives two pages with overlapping signals. Neither will rank as strongly as a single authoritative page would. The blog post's `priority: 0.7` in the sitemap vs service page's `priority: 0.85` does signal hierarchy, but content overlap undermines the service page's authority.

**Fix:** Canonicalize the blog post to the service page (rel=canonical), OR reorient the blog post to a genuinely informational angle (e.g., "What Counts as a Plumbing Emergency?") that doesn't overlap the transactional query.

---

### HIGH: "slab leak repair Fort Worth" — Blog Post vs Service Page

**Competing pages:**
- `/plumbing/slab-leak` — authoritative service page with detection process, pricing, schema
- `/blog/slab-leak-repair-fort-worth-tx-experts` — blog post targeting the same commercial keyword

**SERP signal:** For "slab leak repair Fort Worth TX," the top results are commercial service pages (American Leak Detection, Mr. Rooter, NCT Plumbing, Ron Hale). One Yelp aggregator page appears. No blog posts in top 10. This is a transactional query — the searcher wants to book, not read.

**Outcome if uncorrected:** The blog post competes with the service page for the same query intent. Google may choose the blog post (shorter, more crawlable) and suppress the more authoritative service page — the opposite of what you want for conversion.

**Fix:** Same as above — either canonical the blog to the service page, or refocus the blog post to a non-competing angle: "How to Tell If You Have a Slab Leak" (pure informational) with a CTA → /plumbing/slab-leak. That way they stack, not compete.

---

### LOW: "emergency plumber Aledo TX" — Three Candidate Pages

**Candidate pages:**
- `/plumbing/emergency-plumbers` — service page (geographic: "Aledo & Fort Worth" in meta)
- `/areas-served/aledo-tx` — city page (HQ city, comprehensive local content)
- `/blog/emergency-plumber-near-me-in-aledo-tx` — blog post

**Assessment:** Lower risk than the FW examples. The blog post targets "emergency plumber near me in Aledo TX" — a slightly different query angle that skews informational ("what to do first"). The city page targets the local Pack + organic city intent. The service page targets service + city. These three can coexist because they occupy slightly different positions. The bigger risk is the blog post if it gets keyword-stuffed or misdirected.

**SWAT advantage:** The existing SWAT legacy domain (swatplumbing.com) already ranks for `/emergency-plumber-aledo-tx/` and `/areas-served/aledo-tx/`. This is strong signal — Google already associates the brand with this query. On launch, redirect equity should flow to `/plumbing/emergency-plumbers` and `/areas-served/aledo-tx`.

---

## 3. Keyword-Specific Page-Type Analysis

### "emergency plumber Aledo TX"
- **Google rewards:** Local Pack (3 positions) + SAB landing pages. Lightfoot, Rockwater, DrainGene, and SWAT's own legacy pages rank.
- **Best page to rank:** `/areas-served/aledo-tx` — this is the HQ city, has address schema, GBP backing, and the Plumber entity with the exact address. Secondary: `/plumbing/emergency-plumbers` targets the service itself.
- **Recommendation:** /areas-served/aledo-tx is the primary organic contender for this query. The service page handles "emergency plumber" generically across all 49 cities; the city page handles Aledo specifically.

### "slab leak repair Fort Worth"
- **Google rewards:** Specialized service pages (detection + repair process, pricing, photo evidence).
- **Best page to rank:** `/plumbing/slab-leak` — well-structured, FAQs, schema, process steps, pricing range.
- **Gap:** The page URL is `/plumbing/slab-leak` (no city qualifier). Competitors like NCT Plumbing and American Leak Detection have city-specific slab leak URLs. A Fort Worth city page linking strongly to this service page is the fix.

### "24 hour plumber Fort Worth"
- **Google rewards:** Pure service pages (Roto-Rooter, Mr. Rooter, Berkeys, Milestone). Local Pack dominates above fold.
- **Best page to rank:** `/plumbing/emergency-plumbers` — correct page type.
- **Gap (CRITICAL):** Blog post creates cannibalization. Service page must win this signal war.

### "water heater installation Aledo"
- **Google rewards:** SWAT's own legacy pages rank #1 and #2 on this query already. Page type is service-specific landing page with city modifier.
- **Best page to rank:** `/water-heater/tank-heater-installation` for tank; `/water-heater/tankless-water-heaters` for tankless.
- **Gap:** The `/water-heater` hub page (category hub) lacks a city-specific heading. Neither sub-service page has "Aledo" in the URL. The city page at `/areas-served/aledo-tx` mentions water heater services and links to the hub. The cluster is present but thin on city+service signal depth.

### "plumber near me"
- **Google rewards:** Local Pack entirely. Organic results are city/zip-level pages or directories.
- **Best page:** No single page wins "plumber near me" as an organic result — this is a Local Pack query. The /areas-served/aledo-tx page with GBP-backing and address schema is the infrastructure that feeds the Local Pack position.
- **Recommendation:** Optimize GBP heavily. The site architecture is correct; this keyword lives or dies on GBP signals, not page content.

### "hydro jetting Fort Worth"
- **Google rewards:** City-specific service pages (Molberg, Stinson, Schrader, Mother Modern all have `/hydro-jetting-fort-worth-tx/` or similar URLs).
- **Best page:** `/plumbing/hydro-jetting` — correct page type but missing Fort Worth in the URL.
- **Gap (MEDIUM):** The service page covers "Aledo & Fort Worth" in the meta but the URL has no city signal. Competitors have city-qualified URLs. This is the strongest case in the portfolio for a service+city combo page: `/hydro-jetting-fort-worth-tx` or a section on the Fort Worth city page with a deep link.

### "BBB accredited plumber Aledo"
- **Google rewards:** BBB's own search results page, then individual BBB profiles. Commercial intent is low — this is a trust-verification query.
- **Best page:** `/about-us` — correct match. However, about-us doesn't surface on a "BBB accredited plumber Aledo" SERP directly. The brand's BBB profile will rank above it. The about page's job here is conversion, not ranking: when a user finds SWAT's BBB profile and clicks through, `/about-us` must close the trust gap.
- **Gap:** The BBB badge needs to be prominent above the fold on /about-us. If it currently lives below the scroll break, move it up.

### "no hot water in house Fort Worth"
- **Google rewards:** Informational how-to pages (causes, DIY checks, when to call). Water heater service company pages also appear.
- **Best page:** `/blog/no-hot-water-in-house-fort-worth` — ALIGNED. This is the one blog post that matches informational SERP intent correctly.
- **Gap:** The blog post exists but needs stronger internal links to `/water-heater/tank-heater-installation` and `/water-heater/tankless-water-heaters` to capture the user who has read the diagnostic content and is ready to book.

---

## 4. Persona Scoring

Three personas mapped across the eight target keywords:

### Persona A: "Panicked Homeowner — Burst Pipe at 11pm"
**Journey stage:** Decision (need to act NOW)
**Pages encountered:** /plumbing/emergency-plumbers, /areas-served/aledo-tx

| Dimension | Score | Notes |
|---|---|---|
| Relevance | 23/25 | Emergency page speaks directly to late-night panic |
| Clarity | 20/25 | Process steps are clear; sticky mobile CTA bar is critical for this user |
| Trust | 22/25 | No-markup pricing, dispatch speed, license info all present |
| Action | 18/25 | Phone CTA exists; blog posts for emergency queries (24hr, slab leak) may intercept this user and send them to content they don't need |

**Score: 83/100** — Strong. Biggest risk: if Google ranks the blog post over the service page for "24 hour plumber Fort Worth," this persona gets a content page instead of a conversion page. That delay costs them.

---

### Persona B: "Researcher — Comparing 3 Plumbers Before Choosing"
**Journey stage:** Consideration
**Pages encountered:** /about-us, /areas-served/aledo-tx, /plumbing/slab-leak, /blog/slab-leak-repair-fort-worth-tx-experts

| Dimension | Score | Notes |
|---|---|---|
| Relevance | 20/25 | Service pages give depth; about-us gives trust signals |
| Clarity | 19/25 | Strong on service pages; blog posts feel generic/lower trust |
| Trust | 16/25 | BBB accreditation, license number, family-owned story are present but need to be more prominent across all service pages, not just /about-us |
| Action | 15/25 | No comparison table vs competitors; no "Why SWAT vs Lightfoot" angle; financing section helps |

**Score: 70/100** — Medium. This persona is making a deliberate choice. They want proof: photos of techs, real license number on service pages (not just /about-us), and reviews pulled from Google inline. All three are either missing or gated behind /about-us.

**Top fix for this persona:** Surface the TX Master Plumber license number (M-39596) on every service page and city page, not just the blog index. The BBB badge belongs on /plumbing/slab-leak, /plumbing/emergency-plumbers, etc. — not just the about page.

---

### Persona C: "First-Time Homeowner — Unsure If They Need a Plumber"
**Journey stage:** Awareness
**Pages encountered:** /blog/no-hot-water-in-house-fort-worth, /blog/24-hour-plumber-fort-worth-tx-fast-response, /plumbing/emergency-plumbers

| Dimension | Score | Notes |
|---|---|---|
| Relevance | 22/25 | Blog content addresses diagnostic questions well |
| Clarity | 18/25 | Body text answers questions; no clear "here's how to know if this is a 5-minute fix or a call-now situation" decision tree |
| Trust | 15/25 | Blog posts feel generic compared to service pages; no author bio / tech photo on blog |
| Action | 12/25 | CTAs in blog posts exist but are weak (callout links, not sticky CTAs) |

**Score: 67/100** — Below average for this persona. Blog posts currently serve this user but don't convert them. The biggest gap: blog articles have no author attribution (photo, name, "reviewed by Master Plumber Dillon"), which is the exact E-E-A-T signal that separates a helpful article from a generic content-farm post.

---

## 5. Top 3 SXO Fixes (Priority Order)

### Fix 1 — Resolve the Two Cannibalization Conflicts (CRITICAL)
**Affect:** Keywords #2 (slab leak Fort Worth) and #3 (24 hour plumber Fort Worth)

Apply `rel=canonical` pointing to the service page on both conflicting blog posts, OR rewrite the blog posts to genuinely informational angles that don't overlap transactional queries:
- Blog: "Slab Leak Repair Fort Worth TX Experts" → retitle to "How to Tell If You Have a Slab Leak (Fort Worth Homeowner Guide)" — shift to diagnostic/awareness, link strongly to /plumbing/slab-leak for conversion.
- Blog: "24 Hour Plumber Fort Worth TX Fast Response" → retitle to "What Counts as a Plumbing Emergency? (Fort Worth Homeowner Checklist)" — informational angle, link to /plumbing/emergency-plumbers.

**Expected impact:** Service pages gain undivided topical authority on the transactional queries. Blog posts gain a distinct informational position that can rank for PAA-style queries without cannibalizing.

---

### Fix 2 — Add City Signal to Hydro-Jetting + High-Value Service Pages (HIGH)
**Affect:** Keywords #6 (hydro jetting Fort Worth) + general competitive positioning

Every competitor ranking for "hydro jetting Fort Worth" has a Fort Worth city modifier in the URL. Options:
- Add a dedicated section to `/areas-served/fort-worth-tx` that covers hydro-jetting with a link to the service page (already the stronger option — leverages city page authority).
- Long-term: build service+city combo pages for the highest-volume service queries in Fort Worth and Aledo. Legacy swatplumbing.com had ~150 of these; they carry significant link equity. Priority combos: `/hydro-jetting-fort-worth-tx`, `/slab-leak-repair-aledo-tx`, `/water-heater-installation-aledo-tx`.

**Expected impact:** Hydro jetting ranking position improvement in Fort Worth SERP. City page authority strengthened for all service queries.

---

### Fix 3 — Surface E-E-A-T Signals Across Service Pages and Blog (HIGH)
**Affect:** Keywords #7 (BBB accredited plumber Aledo) + Persona B and C conversion

Currently, trust signals are concentrated on /about-us. The researcher and the first-time homeowner never visit /about-us unless they go looking. Move these signals to where ranking intent happens:
1. Add TX Master Plumber License #M-39596 to the trust strip on every service page and city page (it's already in blog index hero and both city configs — it just needs to propagate).
2. Add a "Reviewed by Dillon [Owner, Master Plumber]" byline to blog post templates.
3. Add the BBB badge (with link to the live BBB profile) to the /plumbing/emergency-plumbers and /plumbing/slab-leak pages above the fold — not just on /about-us.

**Expected impact:** Improved trust signals for Persona B (researcher). Better E-E-A-T for Google's quality rater guidelines. Blog posts become eligible for featured snippet consideration with author attribution.

---

## 6. Structural Notes

- **Blog sitemap priority (0.7) vs service pages (0.85):** Correct hierarchy. Maintain this.
- **canonical tags:** All service pages and city pages set canonical. Blog posts must also set canonical (check blog/[slug]/page.tsx to verify).
- **metaTitle template duplication warning:** Do NOT append `| S.W.A.T. Plumbing` to metaTitle strings — root layout already does this via `title.template`. Current service configs do this correctly; check blog configs for violations.
- **/running-water root-level URL:** Legacy URL preserved correctly. Ensure 301 redirect from old domain maps this correctly on launch.
- **Internal linking from blog posts:** Both the 24hr and slab-leak blog posts include callout links to service pages. These are weak (inline text, not CTAs). Upgrade to a styled "Related Service" card component (same pattern as relatedServices on service pages) for better click-through.

---

## 7. Limitations

- **No live domain authority measured:** Site is pre-launch. All SERP analysis reflects competitor landscape, not SWAT's actual rankings.
- **No click/impression data available:** Google Search Console not yet configured. All gaps are structural/intent-based, not validated by performance data.
- **Legacy domain redirect map not confirmed:** The legacy swatplumbing.com site has multiple URLs (e.g., `/emergency-plumber-aledo-tx/`) that carry link equity. If those 301s don't land on the correct new pages, page-type alignment becomes moot.
- **Real photography not in place:** Hero images are stubbed. LCP scores are unverifiable until real images are loaded. Media dimension score (7/15) reflects this structural gap.
- **Local Pack position not analyzable:** "Plumber near me" and "emergency plumber [city]" queries are heavily Local Pack-driven. GBP optimization (not the site build) determines those positions. GBP not audited in this SXO analysis.
- **Blog posts not individually fetched:** Body content was read from source config files, not rendered HTML. CTA rendering, internal link depth, and actual word counts on blog pages were not verified on the live dev server.

---

*Generated by SXO Agent · S.W.A.T. Plumbing LLC pre-launch audit · 2026-06-17*
*Next recommended audit: 60 days post-launch with GSC data*
