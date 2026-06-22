# SWAT Plumbing — SEO Action Plan (Pre-Launch)

Generated: 2026-06-18 · Site health score: **82/100**

Prioritized by impact and effort. Critical items should ship before launch.

---

## CRITICAL — Fix before launch

### 1. Blog post `<title>` template duplication
**Issue:** All 8 blog posts render `…Sewer Line Repair Near Me Fort Worth TX | S.W.A.T. Plumbing Blog | S.W.A.T. Plumbing LLC` — double suffix causing ~85-char titles that will truncate in Google SERPs and lower CTR.

**Root cause:** Per-post `generateMetadata` in [app/blog/[slug]/page.tsx](app/blog/[slug]/page.tsx) sets title to `"{post.title} | S.W.A.T. Plumbing Blog"`. The root layout's `title.template` then appends `| S.W.A.T. Plumbing LLC` on top.

**Fix:** In [app/blog/[slug]/page.tsx](app/blog/[slug]/page.tsx), drop the `| S.W.A.T. Plumbing Blog` suffix so it becomes just `post.title`. The layout template will append the company name once. Result: `Sewer Line Repair Near Me Fort Worth TX | S.W.A.T. Plumbing LLC` (~65 chars, clean).

**Effort:** 2 minutes. **Files:** 1.

---

## HIGH — Fix within 1 week

### 2. SXO cannibalization on 2 blog posts
**Issue:** `/blog/24-hour-plumber-fort-worth-tx-fast-response` and `/blog/slab-leak-repair-fort-worth-tx-experts` target the same transactional keywords as their corresponding service pages. Google's top 10 for these queries is all service pages — blog post can't win and will dilute the service page's authority.

**Fix (Option A — best long-term):** Rewrite these two blog posts to informational angles:
- 24-hour plumber → "What Counts as a Plumbing Emergency? (And What Doesn't)"
- Slab leak → "5 Warning Signs of a Slab Leak Every North Texas Homeowner Should Know"
Both should link aggressively to the matching service page.

**Fix (Option B — quick stopgap):** Add `<link rel="canonical" href="...">` from each blog post to the service page. Concedes the blog post's separate indexation but resolves the conflict immediately.

**Effort:** Option A: ~3 hours of writing per post · Option B: 5 minutes.

### 3. Manual Lighthouse run + hero video perf decision
**Issue:** Performance subagent failed. The 14 MB autoplay hero MP4 is the biggest unknown variable. If it hurts mobile LCP, it could tank a 0.5-point score and frustrate cellular users.

**Fix:** Run Lighthouse from Chrome DevTools (Mobile profile, Slow 4G throttling) against `http://localhost:3001/`. If LCP > 2.5s on mobile:
- Compress video further (target ≤8 MB)
- Add `<source media="(min-width: 768px)">` and serve mobile a static poster image only

**Effort:** 15 minutes to measure · 30-60 minutes to fix if LCP is poor.

### 4. Add FAQPage schema to /financing
**Issue:** 5 substantive FAQs displayed but no JSON-LD. Missed AI Overview + rich result opportunity.

**Fix:** The financing page already has the FAQ array inline. Add an FAQPage script using the same pattern as service pages. Pseudo-code:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    }),
  }}
/>
```

**Effort:** 10 minutes.

---

## MEDIUM — Fix within 1 month

### 5. FAQPage schema on 3 hub pages
`/plumbing`, `/water-heater`, `/water-quality` would benefit from FAQ schema if any FAQ content lives on those pages. Audit each hub's content; if no FAQ exists, consider adding a 5-question FAQ block per hub then marking it up.

### 6. llms.txt expansion
Current `/llms.txt` lists services. Extend to include:
- All 8 published blog post URLs with one-line descriptions
- Key static pages (about, financing, areas-served)
- Key Tier-1 city URLs (aledo-tx, fort-worth-tx)

### 7. Security headers review on Vercel
Before deploy, in Vercel project settings (or `next.config.js` headers): confirm Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.

### 8. Surface trust signals outside /about-us
Per SXO report: BBB A+ badge + Master Plumber license # don't appear on service pages or city pages. Researchers comparing 3 plumbers never visit /about-us. Add a small trust strip (license # + BBB) to service-page and city-page hero sections.

### 9. Author byline on blog posts
Blog posts already wire Person schema to Dillon. Add a visible byline component above the article body: avatar, name, title (Owner & Principal Master Plumber), license number. Strengthens E-E-A-T for human readers.

---

## LOW — Backlog

### 10. Programmatic city+service pages
SXO report notes: legacy site had ~150 city+service combo pages (e.g., "hydro jetting Fort Worth"). New site has the service infrastructure (`cityServiceSchema()` already exists in schema.ts) but no actual routes built. After launch, consider a programmatic build for the top 5 service queries × top 10 cities = 50 high-intent pages.

### 11. Product schema on water heater pages
`/water-heater/tank-heater-installation` and `/water-heater/tankless-water-heaters` could carry Product schema for Google Shopping eligibility. Not high priority for a service business but a possible expansion.

### 12. Review/Testimonial schema
Currently using AggregateRating from GBP. Could add individual Review schema on testimonials section using the live Google review data.

### 13. Social profile expansion
Site only links Facebook + Google in social. When Yelp / Angi / Nextdoor / Instagram accounts mature, add to siteConfig.social and footer.

---

## POST-LAUNCH — Re-run full audit

Once deployed at https://www.swatplumbing.com:
1. Verify in Google Search Console + Bing Webmaster Tools
2. Submit sitemap.xml in GSC
3. Wait 1-2 weeks for indexation
4. Re-run a FULL audit including live-data subagents: seo-google (CrUX + GSC + GA4), seo-dataforseo (live SERPs), seo-backlinks (referring domains), seo-maps (geo-grid + competitor radius)
5. Set up a `seo-drift` baseline so future regressions are caught automatically

---

## Estimated Time to Ship-Ready

If all CRITICAL + HIGH items are done: **~4 hours of work** brings the site from 82/100 to ~88/100 and resolves every pre-launch blocker.

MEDIUM items push to ~92/100 over the following month.

The remaining 8 points (toward a theoretical 100) come almost entirely from post-launch signals: real Google rankings, backlinks accumulated over time, review velocity, content depth growth.
