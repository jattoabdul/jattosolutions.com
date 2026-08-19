# Jatto IT Solutions website review and redesign direction

## Executive decision

The redesign uses the Pop Site reference as its primary system, adapted to Jatto's existing brand blue and a coordinated dark mode. The reference is the strongest fit because it treats product interfaces as the proof, uses typography to create confidence, and gives one accent colour a clear job.

Jatto is positioned as an independent product studio first, with selective technical partnerships as a secondary offer. The site leads with the five active projects: Discova, TrustKarry, Pinnr, RuleNorth, and InferGo.

## Review of the previous site

### What worked

- The site was visually polished and technically compact.
- The operating-system metaphor gave it a distinctive first impression.
- Theme support and responsive device treatments showed care in implementation.
- The core brand mark remained recognizable.

### What held it back

- The macOS and iPhone mockups became the main story, so the company and its work were difficult to understand quickly.
- Project windows used abstract placeholders instead of real product evidence.
- Pinnr and RuleNorth were absent, while an unnamed placeholder project weakened credibility.
- There was no complete navigation or path to product details, studio positioning, contact, privacy, or terms.
- Product statuses and availability were not clear enough for prospective users or partners.
- Mobile visitors reached a simulated lock screen before receiving a concise company explanation.
- The copy described a general software studio but did not explain the portfolio's specific workflows.

## Reference comparison

### Motto

Monochrome, editorial, and highly typographic. It is elegant, but the near absence of imagery would underuse the strongest material available: real product interfaces.

### Creative Giants

Warm, image-led, and art-book inspired. It works well for a creative roster, but its chromatic variety and photography-first approach would make a multi-product software portfolio feel less coherent.

### Pop Site

Stark product-gallery structure, monumental sans typography, one action colour, rounded media frames, hairline borders, and product screenshots. It provides the clearest system for presenting five different products as one intentional portfolio.

### EPIC

Dark, editorial, serif-led, and illustration-heavy. It is distinctive, but the cultural-publication tone and custom 3D visual language would compete with Jatto's software interfaces and require a less truthful visual layer.

## Adapted design system

- Primary reference: Pop Site
- Display and body type: Geist Sans
- Technical labels: Geist Mono
- Light canvas: cool off-white
- Dark canvas: charcoal
- Primary action: Jatto blue
- Media surfaces: 24px radius
- Controls: 12px radius
- Borders: neutral hairlines
- Shadows: reserved for temporary overlays only
- Motion: restrained reveal and image-scale transitions, with reduced-motion support
- Design variance: 7 of 10
- Motion intensity: 5 of 10
- Visual density: 4 of 10

## Information architecture

1. Home
   - Company position
   - Five-product status rail
   - Four commercial product stories
   - InferGo open-source spotlight
   - Studio operating principles
   - Contact call to action
2. Products
   - Complete portfolio index
3. Product detail
   - Current status
   - Workflow problem
   - Product approach
   - Key capabilities
   - Release note and external link where available
4. Studio
   - Positioning
   - Partnership fit
   - Working principles
5. Contact
6. Privacy
7. Terms

## Content and asset provenance

- Discova: screenshot captured from the local Discova application and product facts checked against its repository.
- TrustKarry: screenshots and product facts sourced from its local repository. The site states that TrustKarry is not a carrier, escrow provider, or payment processor.
- Pinnr: screenshots and product facts sourced from its local website and product repositories. Status is represented as deployed in prelaunch while awaiting Shopify App Store approval.
- RuleNorth: product facts sourced from its local repository. The displayed interface is newly generated with synthetic data because private reference orders and customer information are not suitable for public use. The site states that RuleNorth does not provide legal advice.
- InferGo: public repository facts and a public GitHub social preview are used. Status is represented as public alpha.

## Guardrails for future updates

- Every project must show a named release state.
- Replace imagery only with public or explicitly approved assets.
- Keep customer-facing copy specific to the workflow and successful path.
- Keep internal caveats, review notes, and implementation details out of the interface.
- Do not imply availability, certification, compliance outcomes, or automation that the product does not provide.
- Add new portfolio items through the shared product data model so index and detail views remain consistent.
