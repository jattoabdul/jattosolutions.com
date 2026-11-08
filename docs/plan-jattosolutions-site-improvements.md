# jattosolutions.com improvement plan

Each milestone ships on its own and leaves the site better than before. Findings are described in `docs/evaluation-jattosolutions-site.md`.

## Phase 0: Fix what is broken (about 1 day)

Exit: content visible with Reduce motion on and with JS disabled; no cropped text in any product image.

- [x] Rewrite `Reveal` so content is visible by default; animate only under `prefers-reduced-motion: no-preference` after hydration; render a plain element when motion is reduced
- [x] Remove server-rendered `opacity:0` from the hero and collage so LCP does not wait for JS
- [x] Stop `object-cover` on UI screenshots: per-image `aspect` and `objectPosition` fields in `products.ts`, or `object-contain` on a framed surface
- [x] Fix the TrustKarry and InferGo crops on home and /products
- [x] Dark mode header: use the inverse brandmark that keeps the circle
- [x] Dark mode primary button: a blue derived from the logo blue instead of lavender
- [x] Test: headless run with `reducedMotion: 'reduce'`, JS disabled, 390px, 1440px, both themes

## Phase 1: Positioning and messaging (2 to 3 days)

Exit: a first-time visitor can say in one sentence what Jatto builds for client teams and finds one clear contact action; a product user reaches the product they came for in one click from the home page.

Two audiences, one page: clients get the lead message, and product users get a direct path that never makes them read the studio pitch.

Home page order, studio clients first:
1. Hero: what Jatto builds for client teams, primary action "Start a project", secondary "Explore products"
2. Product strip directly under the hero: the five products, each with its mark, one line for its user, its status, and its own action ("Open Discova", "Request TrustKarry access", "Get notified for Pinnr", "Follow RuleNorth", "InferGo on GitHub"). For a user it is the way in; for a client it is the proof
3. What we build for clients: three engagement types
4. Client work: Fera.ai, named
5. Founder: who leads the work
6. Selected products: two or three, each showing the skill it proves
7. How a project starts: three plain steps from first note to first release
8. Contact band

- [ ] Public name "Jatto Solutions" in the header, footer brand line, page titles, OG images, email signatures and metadata; legal name "Jatto IT Solutions Inc." in the copyright line, Privacy, Terms, the contact page footer note and `legalName` in structured data. Update `siteConfig.name`, `shortName` and `legalName` together
- [ ] Footer line once: "Jatto Solutions is a trade name of Jatto IT Solutions Inc."
- [ ] New hero headline and subline, 20 words or fewer, written for a client. Candidates to react to:
  - "Product engineering for teams that need software to work in production." / "We design, build and run our own products. We bring the same standard to a few client builds."
  - "We build the software your team runs on." / "Commerce integrations, workflow tools and AI-enabled products, from first version to live operation."
  - "A product studio that ships and operates its own software." / "Hire the team behind Discova, TrustKarry, Pinnr and InferGo for your next build."
- [ ] One contact label across nav, hero, band and footer (default: "Start a project")
- [ ] "What we build for clients" section: three engagement types in plain words (new product from zero to launch, Shopify and commerce integrations, AI-enabled internal workflows), each with who it suits and a typical first deliverable
- [ ] Map each product to the client capability it proves (Pinnr: Shopify app and Pinterest API; TrustKarry: two-sided marketplace and messaging; RuleNorth: review workflows with audit trails; InferGo: Go backend and ML inference; Discova: content product and curation) and use that line in the home "Selected products" section only
- [ ] Product pages are written for the product's own users: who it is for, what it does for them, status, and the status action above the fold; the studio line moves to one small "Built by Jatto" note at the bottom instead of the full partnership band
- [ ] Nav keeps "Products" next to "Start a project" so both audiences see their path in the header
- [ ] Each product has its own user-facing line, separate from the client-facing capability line, stored as two fields in `products.ts`
- [ ] "How a project starts" section: first note, scoping call, written proposal with scope and timeline, first release
- [ ] Fera.ai client section on home (short) and a case study page `/work/fera` (full): what Fera does, the engagement (role, duration, ongoing), what was built or improved, the stack, and an outcome stated in numbers only where Fera agrees; Fera logo with permission; a quote from a named Fera contact if they will give one. Content confirmed with Fera before publishing; nothing private from the engagement goes on the page
- [ ] Hero subline candidate that uses it: "Engineering partner to Fera.ai, and the team behind Discova, TrustKarry, Pinnr and InferGo."
- [ ] Founder block on home and Studio: photo, role, years, 3 concrete things built or led, link to jattoabdul.com
- [ ] Studio page becomes the full services page: engagement types, how pricing works (fixed scope or monthly retainer), who is a good fit and who is not
- [ ] Rewrite the three home principles and four Studio principles as client outcomes, no method shorthand
- [ ] "Five projects" becomes "Five products"
- [ ] Copy pass: every visible string re-read for jargon, vague referents and em dashes

## Phase 2: Product imagery and logos (3 to 5 days, mostly capture work)

Exit: every product image is readable on a phone, shows realistic data, and no image shows a dev label, internal job name, or demo store product.

Standards for every screenshot:
- [ ] Seeded demo data: believable merchant or user names, non-zero activity over a week, real-looking products
- [ ] Production chrome only: no "dev" badges, review-account names, internal job IDs, or test prices
- [ ] Captured at 2x (2880px for full-width, 1600px or more for card crops), exported as WebP/AVIF under 300 KB
- [ ] One frame treatment for all products (same radius, border and backdrop); one theme per image row
- [ ] A desktop crop and a separate mobile crop per product, both readable at display size
- [ ] Alt text describes what the image proves, not just what it shows

Shot list:
- [ ] Discova: topic picker plus one opened article, light and dark pair if the product supports both
- [ ] TrustKarry: trip card with verified traveler and "Request space"; request inbox with two or three handoffs at different stages
- [ ] Pinnr: pin editor with a finished branded pin on a realistic product; dashboard with a populated week; one generated pin as a standalone visual
- [ ] RuleNorth: tight crop of the review decision panel with evidence; caption it as a concept preview while in development
- [ ] InferGo: replace the GitHub card with a code panel rendered as real text, taken from `open-source/infergo/docs/GETTING_STARTED.md` (`go get`, export, load, predict), plus repo and docs links; use figures from `BENCHMARKS.md` only as published there; no star counts
- [ ] Hero: replace the three-shot collage with one large composed product moment, or a product switcher driven by the status strip

Logos and brand assets:
- [ ] Export the Jatto wordmark and brandmark as SVG (full colour, black, white, inverse)
- [ ] Header and footer use the horizontal wordmark; favicon and app icons from the brandmark
- [ ] OG image rebuilt with the real wordmark; one OG image per product with its hero crop
- [ ] Product marks shown in the product strip, product index and product headers, copied as SVG from each product's own repo:
  - Discova: `discova/discova-dev/src/app/icon.svg` (indigo tile with shuffle arrows)
  - TrustKarry: "tk" mark from `trustkarry/trustkarry_ui/src/components/logo.tsx` (`LogoMark`, uses currentColor, so it works in both themes); export it to a standalone SVG
  - Pinnr: red stacked-squares mark, `pinnr/pinnr-website/public/logo.svg` (same file in `pinnr-app/public/logo.svg`; used in the Pinnr site header), with `logo-alt.svg` as the variant for dark backgrounds. The red circle pin in `pinnr-design-system/design_guide/assets/logo-mark.svg` is an older asset and is not used
  - RuleNorth: temporary mark in use on the RuleNorth site, `rulenorth/site/public/brand/rulenorth-mark.svg` (navy track with an orange square) and `rulenorth-mark-on-ink.svg` for dark; full lockup at `rulenorth/design_system/assets/logo/rulenorth-lockup.svg`. Not the yellow "R" placeholder in `site/public/favicon.svg` or `platform/design-system`
  - InferGo: no mark in `open-source/infergo`; use a plain monogram tile in the same style as RuleNorth, or the Pergamon Labs mark if Pergamon approves
- [ ] All product marks shown at one size on a neutral tile so five different colours sit together; never recoloured

## Phase 3: Flows and structure (3 to 4 days)

Exit: every product page ends in a status-specific action; the studio path ends in a confirmed submission.

- [x] /contact form: name, email, company, what you are building, timing; inline validation; success state with reply time; copy-email button; mailto fallback. Sent with a Next.js server action through Resend to hello@jattosolutions.com, with the visitor's address as reply-to; honeypot field and a rate limit for spam; API key in an env var on Railway
- [ ] Status-specific product actions in `products.ts`: Live "Open", Closed beta "Request access", Shopify review "Get notified at launch", In development "Become a design partner", Open source "View on GitHub" plus docs
- [ ] /products becomes an index: grid with mark, one line, status, primary action; filter by status if more than six products
- [ ] Home product section trimmed to two or three products in varied layouts, each labelled with the capability it proves; the proof strip covers the rest
- [ ] Nav: rename "Open source" to "InferGo" or add /open-source
- [ ] Product pages: each highlight gets one sentence and, where possible, a feature crop; add a short "What is next" line per product
- [ ] Reduce eyebrows to one per three sections; remove 01/02/03 numbering and decorative dots
- [ ] Theme toggle: sun and moon icon, existing aria-label kept

## Phase 4: Trust, search and measurement (1 to 2 days)

Exit: success measured, search metadata complete, accessibility checked in both themes.

- [ ] JSON-LD: `Organization` on the root, `SoftwareApplication` per product
- [ ] Per-product titles and descriptions written for search, not reused taglines
- [ ] Privacy-friendly analytics (Plausible or Vercel Analytics) with events: contact submit, product outbound click, beta and launch sign-ups
- [ ] Success measures: contact submissions per month, product outbound click-through, sign-ups per non-live product
- [ ] Real quotes from Fera.ai and beta users, attributed with name and role, only where permission exists
- [ ] Lighthouse and axe in light and dark at 390px and 1440px: LCP under 2.5 s, CLS under 0.1, no contrast failures
- [ ] Update `docs/redesign-review.md` guardrails with the screenshot standards from Phase 2

## Phase 5: Verify (about 1 day)

- [ ] Re-run the evaluation against the deployed site
- [ ] Six-person check: three founders or product leads answer "What does Jatto build for clients?" and complete "start a project"; three product users (a Shopify merchant, a Canada-Nigeria sender, a developer) each reach their product's action from the home page in one click
