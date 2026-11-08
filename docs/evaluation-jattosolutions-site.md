# jattosolutions.com: user flow, UI, UX, imagery and messaging

Reviewed live on 2026-11-08 at 1440px and 390px, light and dark mode, all public routes: Home, Products, five product pages, Studio, Contact, Privacy, 404.

## Anti-Pattern Verdict

Clean. No manipulative patterns: no fake urgency, no pre-checked consent, no tracking walls. Release states are stated honestly ("Closed beta", "In development", "does not provide legal advice"), which is a real strength. Every problem below is a usability, accessibility, or credibility failure, not a deceptive one.

## Priority Issues

### Critical

**Page body is blank for visitors with "Reduce motion" turned on**
Where: every page that uses `Reveal` (`src/components/ui/Reveal.tsx`), which is all of them.
What happens: the server renders each section with `opacity:0; transform:translateY(24px)`. On the client, `useReducedMotion()` returns true, so `initial` becomes `false` and `whileInView` becomes `undefined`. Nothing ever animates the content back to `opacity:1`. With macOS or iOS "Reduce motion" on, the visitor sees the header and an empty page. Verified in headless Chromium with `reducedMotion: 'reduce'`: 13 of 13 reveal blocks stayed at opacity 0 after 3 seconds.
Why it matters: Reduce motion is a common accessibility and battery setting on iPhone and Mac. Those visitors get no content, no products, and no contact path, and they cannot tell why. The same SSR `opacity:0` also hides all content until JavaScript hydrates, which delays Largest Contentful Paint on slow connections.
Heuristic: visibility of system status; accessibility (WCAG 2.2, 1.3 and 2.3.3 intent).
Change: render content visible by default. Hide it only when motion is allowed and JS has loaded (for example a `motion-safe` CSS class or a `data-js` flag on `<html>`), and in the reduced-motion branch render a plain `div` with no inline opacity.

### Major

**Product screenshots are cropped through their content**
Where: `ProductCard` forces every image into `aspect-[16/10]` with `object-cover object-top`.

- TrustKarry `find-trips.png` is 1185x520 (2.3:1). The crop cuts both sides, so visible text reads "aveler trips for your sender items", "a -> Ogun, Nigeria", "est Space", and the green "Accept" chip is cut off at the edge.
- InferGo `infergo-github.png` is 1200x600 (2:1). On /products the title reads "ergamon-labs/ nfergo" and "-native inference ... rvices".
- Pinnr dashboard (16:9) loses the Shopify sidebar labels ("ify", "ucts", "omers").
  Why it matters: cropped words look like a rendering bug. Screenshots are the main proof that the products are real, and on this site they read as broken.
  Heuristic: aesthetic and minimalist design; consistency and standards.
  Change: capture every product image at one target ratio (16:10), or give each image its own aspect and focal point in the data model and stop using `object-cover` on UI screenshots.

**Screenshots show test data, dev environments and internal names**
Where: home, /products, and product pages.

- Pinnr: the Shopify header shows "Pinnr Jatto Dev" with a "dev" badge, the board is "@pinnr_app_review", the product is Shopify's demo "The 3p Fulfilled Snowboard, $2,629.95", the activity log shows the internal job name "pin-draft-update:update-draft", and the KPIs read 1 published, 1 scheduled, with a 7-day chart of six zeros and a single 1.
- TrustKarry: "Traveler 13", a single trip, and dark UI cropped mid-sentence.
- InferGo: the GitHub card advertises 2 contributors, 2 issues, 5 stars, 0 forks, under another organization's lion logo.
  Why it matters: a buyer or partner reads near-empty dashboards and dev labels as "nobody uses this", which is the opposite of what the section is meant to prove. Public star and fork counts invite comparison the project does not win yet.
  Heuristic: match between system and the real world.
  Change: re-shoot every product with realistic seeded demo data (believable merchant name, real-looking catalog, a week of non-zero activity), production chrome, and no internal identifiers. For InferGo, replace the GitHub social card with a real code example rendered as text (export, load, predict) and keep star counts off the page.

**Images are illegible at the size they are shown, especially on mobile**
Where: hero collage, all product rows, all mobile views.
What: source files are 1185 to 1600px wide, captured from full desktop viewports, then shown at about 725 CSS px (desktop) and about 370 CSS px (mobile). UI text in the Pinnr and RuleNorth shots renders at roughly 4 to 6px. On a 2x screen the 1185px TrustKarry image is upscaled and soft. The hero collage overlaps three such shots at about a third of that size, mixing one light and two dark interfaces.
Why it matters: a screenshot that cannot be read proves nothing. On mobile the product section becomes grey texture.
Heuristic: aesthetic and minimalist design; recognition rather than recall.
Change: crop each shot to the one moment that explains the product (the pin editor with a finished pin, the trip card with "Request space", the review decision panel), capture at 2x (2880px wide for full-bleed, about 1600px for card crops), and ship a separate tighter mobile crop through `<picture>` or `sizes`. Replace the three-way collage with one large, readable composition or a product switcher.

**The brand wordmark never appears, and the brand name varies**
Where: header, footer, Open Graph image, page titles.
What: the identity in `public/logo/` is a distinctive "Jatto" wordmark with "SOLUTIONS INC." beneath it. The site shows only the 32px "J" circle plus "Jatto IT Solutions" set in Geist. The OG image uses a plain blue square, not the logo. In dark mode the header swaps to the white mark, which drops the circle and leaves a lone "J". The company is named four ways: "Jatto IT Solutions" (header), "Jatto Solutions Inc." (logo), "Jatto IT Solutions Inc." (copyright), "Jatto" (page titles). Logo files are 500x500 PNGs with large padding; there is no SVG.
Why it matters: the strongest visual brand asset is unused, so the site reads as a well-made template rather than a company. Name drift weakens recall and search.
Heuristic: consistency and standards.
Change: export the wordmark and brandmark as SVG, use the horizontal wordmark in the header and footer, keep the circled mark in both themes (inverse variant on dark), and put the real logo on the OG image. Pick one public name and use it everywhere.

**Positioning does not tell either audience what Jatto is for**
Where: hero, home sections, Studio.
What: "Software for useful work." could describe any company. The subline lists four unrelated markets (commerce, communities, learning, developer infrastructure), which reads as unfocused rather than broad. The site serves two audiences, people who might use a product and people who might hire the studio, but the home page speaks to neither directly. The partnership offer appears only as a closing question ("Building something that needs a durable technical partner?") with no list of services, no past client work, no founder background, and no testimonial behind it.
Why it matters: a prospective client cannot tell what they would be buying, and a product user has to scroll past the studio story to find a product. The founder is named once, in a subline on /about, with no photo or track record, which is the strongest credibility lever a small studio has.
Heuristic: match between system and the real world; help users recognize what they can do.
Change: lead with a one-sentence position that names who it is for and what Jatto does (see the checklist for candidate lines), add a short "Work with Jatto" section with concrete engagement types, and put the founder (photo, years, notable systems shipped) on the home page and Studio.

**Contact is a mailto link only, with four labels for the same action**
Where: header "Talk to us", hero "Work with us", contact band "Talk to Jatto", eyebrow "Start a conversation", contact page "Email hello@jattosolutions.com".
What: every contact path ends in `mailto:`. On a work laptop with no mail client configured, or on a phone using webmail, the click opens nothing or the wrong app. There is no form, no booking link, no expected response time, and no confirmation.
Why it matters: this is the only conversion the studio side has, and it can silently fail.
Heuristic: visibility of system status; consistency and standards.
Change: one label for the contact intent across the site ("Start a project" or "Talk to Jatto"), a short form on /contact (name, email, what you are building, timing) with a success state and a stated reply time, a copy-email button, and the mailto as a fallback.

**Products that are not live have no next step**
Where: TrustKarry, Pinnr, RuleNorth pages.
What: RuleNorth has no URL, so its page ends at "In development" and then a partnership pitch. TrustKarry says "Closed beta" but its only action is "Visit TrustKarry", with no way to request access from here. Pinnr says it awaits Shopify approval with no way to be notified.
Why it matters: three of five product pages are dead ends for the person most interested in them.
Heuristic: user control and freedom; help users recognize what they can do.
Change: a status-specific action on every product: Live opens the product; Closed beta requests access; Shopify review joins the launch list; In development asks for design partners; Open source links to the repo and docs.

### Minor

**Home and Products are the same page**
/products repeats the home portfolio section with the same images, copy and alternating layout, so the nav item adds nothing. Change: keep the home page to the strongest two or three products plus the status strip, and make /products a scannable index (grid with logo, one line, status, primary action).

**Five identical alternating rows in a row**
The portfolio is four image/text zigzags followed by a fifth split for InferGo. By the third row the layout no longer signals anything new. Change: vary the composition (one full-width feature, a two-up, the open-source block as a code panel).

**"Open source" in the nav goes to one product page**
The label promises a section; it lands on InferGo. Change: rename the link "InferGo", or build a small /open-source page.

**Product highlight cards carry no information**
On product pages the four highlights ("Shopify-native workflow", "Template-based creative") are labels in numbered boxes with no explanation. Change: one sentence each, or pair each with a cropped screenshot of that feature.

**Copy leans on internal method language**
"Find the real job", "Build the narrow path", "Ship with evidence", "Five projects. Each built around a clear job." use jobs-to-be-done shorthand a client will not share. "Projects" also undersells shipped products. Change: plain outcomes ("We start with the task your team repeats every day"), and call them products.

**Theme toggle label is ambiguous**
The button reads "DARK" in light mode and "LIGHT" in dark mode, so it is unclear whether it shows the current state or the action. Dark mode also turns the primary button lavender, away from the brand blue. Change: a sun/moon icon with the existing aria-label, and a dark-mode blue derived from the logo blue.

### Cosmetic

**Templated rhythm**
Nine mono uppercase eyebrows on the home page, decorative status dots, and "01 / 02 / 03" numbering on principles are the most recognisable markers of generated marketing layouts. Change: keep one eyebrow per three sections and drop the numbering.

**No structured data**
No JSON-LD on any page. Change: `Organization` on the root, `SoftwareApplication` on each product, plus per-product OG images.

## Heuristic Verdicts

- Visibility of system status: broken. Page body is blank for visitors with "Reduce motion" turned on.
- Match between system and the real world: broken. Screenshots show test data, dev environments and internal names.
- User control and freedom: broken. Products that are not live have no next step.
- Consistency and standards: broken. The brand wordmark never appears, and the brand name varies.
- Error prevention: strained. Contact is a mailto link only, with four labels for the same action.
- Recognition rather than recall: strained. Images are illegible at the size they are shown.
- Flexibility and efficiency of use: holds.
- Aesthetic and minimalist design: broken. Product screenshots are cropped through their content.
- Help users recognize, diagnose and recover from errors: holds. The 404 page offers a way back.
- Help and documentation: holds.

## Cognitive Walkthrough Results

Task: a founder wants to hire Jatto for a build.

| Step                                           | Will they try?                        | Will they see it? | Will they understand it? | Will they see progress?      | Finding                                                     |
| ---------------------------------------------- | ------------------------------------- | ----------------- | ------------------------ | ---------------------------- | ----------------------------------------------------------- |
| Land on home, decide if Jatto does client work | No: hero names products, not services | Yes               | No                       | n/a                          | Positioning does not tell either audience what Jatto is for |
| Look for proof (past clients, founder)         | Yes                                   | No: none exists   | n/a                      | n/a                          | Positioning does not tell either audience what Jatto is for |
| Click "Work with us"                           | Yes                                   | Yes               | Yes                      | No: mail client may not open | Contact is a mailto link only                               |

Task: a Shopify merchant wants Pinnr.

| Step                               | Will they try? | Will they see it? | Will they understand it?                  | Will they see progress? | Finding                                      |
| ---------------------------------- | -------------- | ----------------- | ----------------------------------------- | ----------------------- | -------------------------------------------- |
| Judge Pinnr from its screenshot    | Yes            | Yes               | No: dev store, demo snowboard, zero chart | n/a                     | Screenshots show test data                   |
| Get access while in Shopify review | Yes            | No action exists  | n/a                                       | n/a                     | Products that are not live have no next step |

Task: a visitor with Reduce motion on opens the site.

| Step                           | Will they try? | Will they see it?        | Will they understand it? | Will they see progress? | Finding                                                        |
| ------------------------------ | -------------- | ------------------------ | ------------------------ | ----------------------- | -------------------------------------------------------------- |
| Read anything below the header | Yes            | No: content is invisible | No                       | No                      | Page body is blank for visitors with "Reduce motion" turned on |

## Positive Findings

- Honest release states on every product, with legal and scope caveats stated plainly.
- Tight, fast stack: pages return in under 100 ms, Geist via `next/font`, `next/image` throughout.
- One accent colour, one radius system, generous spacing; the type scale is confident and the hero headline is genuinely strong typography.
- Skip link, single `h1` per page, descriptive alt text on product images, working sitemap, robots and OG image.
- The status strip under the hero is a good idea: five products, five states, all linked.
- The product data model (`src/data/products.ts`) already centralises copy and images, so most fixes are data changes, not layout rewrites.

## Recommended Actions

1. Page body is blank for visitors with "Reduce motion" turned on
2. Product screenshots are cropped through their content
3. Screenshots show test data, dev environments and internal names
4. Images are illegible at the size they are shown, especially on mobile
5. The brand wordmark never appears, and the brand name varies
6. Positioning does not tell either audience what Jatto is for
7. Contact is a mailto link only, with four labels for the same action
8. Products that are not live have no next step
9. Home and Products are the same page
10. Five identical alternating rows in a row
11. Product highlight cards carry no information
12. Copy leans on internal method language
13. "Open source" in the nav goes to one product page
14. Theme toggle label is ambiguous
15. Templated rhythm
16. No structured data
