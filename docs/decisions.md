## 2026-11-08 · The site review covers the live site, not a local build
- Decided by: Claude, default
- Why: the request names jattosolutions.com; the live site is what visitors see
- Rejected: reviewing a local dev build, which could differ from production
- Rests on: docs/evaluation-jattosolutions-site.md

## 2026-11-08 · Phase 0 fixes ship before any messaging or redesign work
- Decided by: Claude, default
- Why: the reduced-motion bug blanks the site for some visitors and cropped screenshots read as broken; both are cheap to fix
- Rejected: folding them into the redesign phases, which leaves the site broken for longer
- Rests on: docs/evaluation-jattosolutions-site.md, Critical and Major findings

## 2026-11-08 · The home page leads with studio clients and keeps a direct path for product users
- Decided by: the owner
- Why: the studio offer leads the message; product users still need to reach their product in one click, so the product strip sits directly under the hero with each product's own action, and product pages speak to their users
- Rejected: product users first, which keeps the hero on the portfolio and leaves the partnership offer as a closing question; clients only, which turns product pages into sales pages for the studio
- Rests on: docs/evaluation-jattosolutions-site.md, positioning finding

## 2026-11-08 · Default contact label is "Start a project"
- Decided by: Claude, default until the owner chooses
- Why: names the outcome for a client, distinct from product actions such as "Open" or "Request access"
- Rejected: "Talk to us", "Work with us", "Talk to Jatto" (all currently in use for the same action)
- Rests on: docs/evaluation-jattosolutions-site.md, contact finding

## 2026-11-08 · Public name is "Jatto Solutions"; legal name is "Jatto IT Solutions Inc."
- Decided by: the owner
- Why: the company is Jatto IT Solutions Inc. and trades as Jatto Solutions, which matches the logo lockup and the domain
- Rejected: "Jatto IT Solutions" as the public name; "Jatto" alone in titles
- Rests on: owner answer, 2026-11-08

## 2026-11-08 · Fera.ai is shown by name as client work
- Decided by: the owner
- Why: it is the company's past and current contract engagement, and the only proof of client delivery
- Rejected: anonymised client work
- Rests on: owner answer, 2026-11-08; case study content is confirmed with Fera before publishing

## 2026-11-08 · Product marks come from each product's own repo
- Decided by: the owner
- Why: keeps one source of truth per product. Pinnr uses its red stacked-squares mark and RuleNorth its temporary track mark, as each product's own site does; InferGo has no mark, so it uses a monogram until one exists
- Rejected: drawing new marks for the site
- Rests on: owner answer, 2026-11-08; file paths in the plan, Phase 2

## 2026-11-08 · Contact form sends through Resend from a server action
- Decided by: Claude, default (owner approved a form service such as Resend or Formspree)
- Why: Resend sends from the jattosolutions.com domain with reply-to set to the visitor, keeps the form inside the Next.js app, and needs no third-party form page
- Rejected: Formspree, which adds an external endpoint and branding on the free tier; email-only, which can fail silently
- Rests on: owner answer, 2026-11-08

## 2026-11-08 · Product marks render through one `ProductMark` component
- Decided by: Claude, default
- Why: one place maps slug to file, so `products.ts` stays content-only; every mark sits on the same neutral surface tile (40, 56 or 80 px) with the glyph at 60%, and dark mode swaps in each product's own on-ink file rather than recolouring
- Files: `public/marks/<slug>.svg` and `<slug>-on-ink.svg`. Discova (`icon.svg`), Pinnr (`logo.svg`, `logo-alt.svg`) and RuleNorth (`rulenorth-mark.svg`, `rulenorth-mark-on-ink.svg`) are byte-for-byte copies. TrustKarry's `LogoMark` uses currentColor, so it is exported twice, black and white, matching how its own UI renders it. Discova has no dark variant; its indigo tile works on both
- Rejected: inline SVG components per product (duplicates the source repos); CSS filters to invert marks (recolours them)
- Rests on: plan Phase 2 "Logos and brand assets"; owner corrections on Pinnr and RuleNorth marks

## 2026-11-08 · InferGo uses a temporary "IG" monogram
- Decided by: Claude, default until InferGo has a mark or Pergamon Labs approves theirs
- Why: InferGo has no mark; the monogram is drawn in the RuleNorth mark's style (48 grid, 3 px round strokes, navy `#0F1A2B` on light, white on ink) with no accent colour, so it reads as a placeholder rather than a brand
- Rejected: drawing a new pictorial mark; borrowing the Pergamon Labs mark without approval
- Rests on: plan Phase 2, InferGo line

## 2026-11-08 · No SVG Jatto logos until a vector source exists
- Decided by: Claude, following the brief
- Why: `public/logo/` holds only PNG wordmarks and brandmarks, and no design file (SVG, AI, EPS, PDF, Figma) exists in this repo. Tracing the PNGs would produce an inexact copy of the brand
- Next: owner supplies the original vector files; then export full colour, black, white and inverse SVGs into `public/logo/`
- Rests on: search of the repo and `public/logo/`, 2026-11-08

## 2026-11-08 · Hero leads with "A product studio that ships and operates its own software."
- Decided by: the owner
- Why: names what makes the studio different (it runs its own products) and the subline lists the products as proof
- Rejected: "Product engineering for teams that need software to work in production."; "We build the software your team runs on."
- Rests on: owner answer, 2026-11-08; plan Phase 1 candidates

## 2026-11-08 · Fera content ships as a marked placeholder until the owner supplies it
- Decided by: the owner
- Why: Fera facts must be cleared with Fera first; the layout can land now. (The founder block was a placeholder too, until the next entry)
- Rejected: holding the whole Phase 1 change until content arrives; inventing facts
- Rests on: owner answers, 2026-11-08. Placeholders live in `src/data/studio.ts` with `placeholder: true` and render a visible "Placeholder" tag. Do not deploy to production until they are replaced. `/work/fera` is not built

## 2026-11-08 · Titles use the public name; `shortName` stays "Jatto" for tight spaces only
- Decided by: Claude, default
- Why: titles and metadata now use `siteConfig.name` ("Jatto Solutions"), following the earlier decision against "Jatto" alone in titles; `legalName` is unchanged and the trade-name line comes from `siteConfig.tradeNameNotice`
- Rejected: setting `shortName` to "Jatto Solutions", which makes the field pointless
- Rests on: plan Phase 1, naming item

## 2026-11-08 · The contact label lives in `siteConfig.contact`
- Decided by: Claude, default
- Why: one source for "Start a project" in the nav, mobile menu, hero, Studio hero, contact band and footer
- Rejected: repeating the string in each component
- Rests on: decision "Default contact label is Start a project"

## 2026-11-08 · Selected products on home are Pinnr, TrustKarry and InferGo
- Decided by: Claude, default
- Why: they prove the three engagement types most directly (Shopify integrations, a full product with users, backend and ML work); the strip above already links all five
- Rejected: Discova (lightest client signal); RuleNorth (in development, with synthetic data)
- Rests on: plan Phase 1, capability mapping

## 2026-11-08 · Each product has a status action in `products.ts`, and RuleNorth's is an email
- Decided by: Claude, default
- Why: the strip needs one action per product ("Open Discova", "Request TrustKarry access", "Get notified for Pinnr", "Follow RuleNorth", "InferGo on GitHub"). RuleNorth has no public site yet, so "Follow RuleNorth" opens an email to hello@jattosolutions.com
- Rejected: linking RuleNorth's action to its own product page, which goes nowhere from that page
- Rests on: plan Phase 1, product strip; Phase 3 replaces these with the full status-action set

## 2026-11-08 · Product pages drop the contact band for a "Built by Jatto Solutions" note
- Decided by: Claude, default
- Why: product pages speak to the product's users; the studio pitch stays one link away
- Rejected: keeping the full partnership band on every product page
- Rests on: decision "The home page leads with studio clients and keeps a direct path for product users"

## 2026-11-08 · Services pricing and fit copy is a first draft for owner review
- Decided by: Claude, default
- Why: the plan names the models (fixed scope, monthly retainer) but no figures; the good-fit and not-a-fit lists are drafted from the evaluation's positioning findings
- Rejected: publishing prices or day rates without the owner
- Rests on: plan Phase 1, Studio page item; `src/data/studio.ts`

## 2026-11-08 · Founder block uses public content from jattoabdul.com, under the name "Jatto Abdul"
- Decided by: the owner (use jattoabdul.com for the photo and details); wording by Claude
- Why: the owner's own public site already states the role history and has a portrait; "Jatto Abdul" is the name used there, so the studio site matches it
- Rejected: waiting for separate answers; "Abdulqahhar Jatto", the name the old Studio page used
- Rests on: jattoabdul.com home and /about, read 2026-11-08; portrait copied to `public/founder/jatto-abdul.webp`. Highlights: TrustKarry founding engineer, Minerva Senior Software Engineer II (AML screening, Pergamon platform), Andela from 2017. Fera is left out of the founder block until Fera facts are cleared
