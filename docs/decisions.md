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

## 2026-11-08 · Contact form promises a reply within two business days
- Decided by: Claude, default until the owner chooses
- Why: the plan asks for a stated reply time; two business days is achievable for a one-person studio and is stated once in the lede, beside the submit button and in the success message (`REPLY_TIME` in `src/lib/contact.ts`)
- Rejected: "within 24 hours", which is easy to miss on weekends; no stated time
- Rests on: docs/evaluation-jattosolutions-site.md, contact finding

## 2026-11-08 · Contact form validates in the browser and again in the server action
- Decided by: Claude, default
- Why: without JavaScript the browser's own checks (required, type=email) run and the server action returns inline errors with the visitor's values kept; once hydrated, inline messages replace browser bubbles and check on blur and on submit. One rule set in `src/lib/contact.ts` serves both
- Rejected: client-only validation, which fails without JavaScript; adding zod, which is a dependency for five fields
- Rests on: Phase 3 contact item; Next.js forms guide

## 2026-11-08 · Spam control is a honeypot plus an in-memory per-IP limit
- Decided by: Claude, default
- Why: a filled honeypot gets a normal success message and nothing is sent, so bots learn nothing; five submissions per IP per 15 minutes is held in memory, which is enough for one long-lived Node process on Railway and resets on deploy
- Rejected: a CAPTCHA, which taxes every real visitor; a Redis-backed limiter, which adds a service for low traffic. Revisit if spam gets through or the site runs more than one instance
- Rests on: Phase 3 contact item

## 2026-11-08 · A failed send shows the email fallback with the message prefilled
- Decided by: Claude, default
- Why: when Resend is not configured (no `RESEND_API_KEY` or `CONTACT_FROM_EMAIL`) or rejects the message, the visitor gets a mailto button that opens their email app with their message filled in, a copy-email button, and the form with their values kept; local builds pass with no key
- Rejected: a generic error asking them to retry, which loses leads when the cause is configuration
- Rests on: Phase 3 contact item
