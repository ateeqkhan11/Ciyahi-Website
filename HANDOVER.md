# Ciyahi Website — Handover

This document exists so you (or an AI assistant like Cursor) can pick up this project cold and understand
what it is, why it's built the way it is, and what not to break. It was written by Claude Code after a long
series of sessions redesigning the site from scratch. Read this before making changes.

---

## 1. What this is

The marketing website for **Ciyahi Limited**, a Delaware C-Corp building enterprise AI implementation
services and AI-native products. Two founders: **Iqbal Shaikh** (Director & Co-Founder, active operator,
listed first everywhere) and **Ateequeullah Khan** (Non-Executive Director & Co-Founder — he's on an H-1B
visa, which is *why* his title is non-executive; don't upgrade it to an active officer title anywhere).

Ciyahi's flagship product is **InvoAIce.io**, an AI-native Accounts Payable automation platform, live in
production today. It has its own site (invoaice.io) — this repo is the *company* site (ciyahi.com), which
covers Ciyahi's broader AI services, not just AP automation.

**Positioning, one line:** "We implement AI for enterprise. We design it, build it, and ship it to
production — not a pilot." The site deliberately leads with *delivered, concrete work* (a real pipeline
you can point to) over abstract capability claims — that's the whole design philosophy below.

No backend. It's a pure static React SPA, no CMS, no database. Content lives in JS arrays inside the page
components.

---

## 2. Quick start

```bash
npm install
npm run dev      # Vite dev server, http://localhost:5173
npm run build    # production build → dist/
npm run lint     # eslint
```

Stack: **React 19** (native document-head hoisting for SEO — no react-helmet) + **Vite 8** +
**React Router v7** (`BrowserRouter`) + **lucide-react** icons. Fonts: **Space Grotesk** (headings/logo,
loaded via Google Fonts) + **Inter** (body). Deployed on **AWS Amplify** (see `amplify.yml`).

---

## 3. Site map

| Route | Page | Purpose |
|---|---|---|
| `/` | `Home.jsx` | Hero with rotating headline + animated system diagram, 4 service tiles, InvoAIce proof section, approach, why-Ciyahi, CTA |
| `/services` | `Services.jsx` | The 4 generic capability lines (numbered 01–04) + a slim promo banner pointing at the Use Case |
| `/use-cases` | `UseCases.jsx` | Index of **delivered, concrete engagements** — currently 1 real card + 1 honest "more coming" placeholder card |
| `/document-intelligence` | `DocumentIntelligence.jsx` | Deep-dive case study: the insurance-brokerage document intelligence + submission-to-quote pipeline (see §5) |
| `/products` | `Products.jsx` | InvoAIce.io spotlight + the 8-product platform roadmap (P2P/O2C tracks) |
| `/industries` | `Industries.jsx` | 6 verticals (Financial Services, Insurance, Healthcare, Manufacturing, Retail, Professional Services, Tech/SaaS) |
| `/about` | `About.jsx` | Company story, both founders, track record stats, structure |
| `/contact` | `Contact.jsx` | Multi-step contact form (Web3Forms), service picker |
| `/privacy`, `/terms` | Legal boilerplate |
| `/insights` | Redirects to `/` — **dead route**, kept as a 301-style redirect in case old links exist |

`src/pages/Insights.jsx` exists on disk but is **not routed** (App.jsx redirects `/insights` → `/`
instead of rendering it). It's leftover from an earlier iteration — safe to delete or to repurpose if you
ever build a real blog/insights section.

---

## 4. The information architecture — why Services and Use Cases are split

This split was deliberate and came from direct user feedback, so don't merge them back without a reason:

- **`/services`** = generic capability descriptions (what we're capable of building for anyone).
- **`/use-cases`** = concrete proof (what we've *actually shipped*, with a named client type but no
  client names, real stats, real pipeline diagrams).

Earlier iterations crammed a giant animated case-study block into Services as a fake "service #1." That
felt bloated and was pulled back out — now Services stays lean and links out to `/use-cases` via a
compact `.promo-banner` component instead of embedding the whole story.

---

## 5. Content facts — keep these accurate

The site describes one real delivered engagement in detail (on `/document-intelligence`, referenced from
`/use-cases`, `/services`, `/industries` Insurance card, and the Home page promo banner). Get these details
right if you touch that content:

- **No client names, ever.** Referred to generically as "an insurance brokerage" / "insurance brokerages
  running real-estate consortium programs."
- **The pipeline**: Intake (thousands of documents, any format) → Classify (60+ document types across 8
  categories) → Extract (policies, SOVs, loss runs) → Program (grouped into consortium programs) →
  Reconcile (losses vs. policies, per location) → **Risk Check** → **Price**.
- **Risk modeling and pricing are THIRD-PARTY SYSTEMS.** Ciyahi did not build the risk model or the
  pricing engine — those are the brokerage's existing tools. Ciyahi built the **automation that feeds
  them** (classification, extraction, reconciliation, and auto-submission). This is marked explicitly in
  the UI with a small "3rd-party" tag on those two pipeline stages (`.pipe-node-ext` in `style.css`) plus
  an explicit disclaimer sentence. **Never rewrite copy to imply Ciyahi built the risk/pricing engines** —
  this was a correction the client/user made explicitly.
- **The headline stat**: a full run (intake → priced premium) used to take an underwriter **2–3 weeks**;
  it's now automated end-to-end. Applies to both new-business onboarding and mid-term property additions
  (a client adding one property mid-year runs the same pipeline).
- **Second, broader use case** to keep in mind if extending this: the same team has also built LLM agents
  for **insurance claims and policy-servicing workflows** (mentioned in Services item 04 and the Industries
  Insurance card) — a separate, less-detailed engagement, not yet given its own `/use-cases` card.

---

## 6. Design system

### Tokens (`src/styles/style.css`, top of file)
Violet/cyan gradient brand (`--violet: #5b21b6`, `--cyan: #0284c7`), white/light backgrounds
(`--bg`, `--bg2`), a shadow scale (`--shadow-xs` → `--shadow-lg` and violet-tinted variants), and a
radius scale (`--rsm` → `--rxxl`). Reuse these instead of hardcoding new colors.

### The "premium" visual language — established patterns, reuse rather than reinvent
The site was explicitly reworked to feel more premium/animated after user feedback that it felt static
and generic. These are the components that resulted — reach for them before inventing something new:

- **Dark hero treatment** (`.hero`) — near-black violet gradient with slowly drifting background
  (`heroDrift` keyframe, 22s loop, respects `prefers-reduced-motion`), a masked dot-grid, and a rotating
  headline word (`.hero-cycle` / `.hero-cycle-word`, driven by a `setInterval` in `Home.jsx` — cycles
  "for enterprise." / "for insurance." / "for finance." / "for any industry.").
- **Orbit diagram** (`.orbit`, `.orbit-core`, `.orbit-chip`) — the living system diagram in the Home hero:
  a pulsing glowing core with floating capability chips orbiting it. Chip positions are hand-placed via
  `.oc-1`–`.oc-6` classes.
- **Magnetic tilt** — service tiles (`.svc-tile`) tilt in 3D toward the cursor and show a soft radial glow
  following the pointer, via CSS custom properties (`--tiltX`, `--tiltY`, `--px`, `--py`) set from a
  `mousemove` listener in `Home.jsx`. This is the single highest-leverage "feels premium" trick on the
  site — consider extending it to Industries/Products cards if you want more of that feel elsewhere.
- **Animated pipeline** (`.pipe`, `.pipe-track`, `.pipe-node`) — the flowing-light timeline component used
  on `/document-intelligence` to show the 7-stage automation pipeline. A light streak continuously
  animates along the track (`pipeFlow` keyframe); each node pulses in sequence (`nodePing`, staggered via
  the `--i` custom property). Nodes can carry a `.pipe-node-ext` "3rd-party" badge.
- **App-window mockup** (`.app-window`, `.app-row`, `.status-chip`) — a fake product-UI window (mac
  traffic-light dots, a LIVE badge, rows of data with status pills) used on Home and
  `/document-intelligence` to make "we automated this" feel concrete rather than abstract. Reuse this
  pattern any time you want to show "the system running" rather than describe it in prose.
- **Promo banner** (`.promo-banner`) — the compact horizontal callout (icon, badge, title, one-liner, CTA)
  used on both Home and Services to point at the Use Case without embedding the full story. This is the
  right component to reach for whenever you want a low-weight pointer to deeper content.
- **Featured-svc block** (`.featured-svc`) — a dark, full-width card style (same gradient treatment as the
  hero) for when you *do* want to embed a big story inline. Currently only used on
  `/document-intelligence`. Don't add a second one to `/services` — that's the exact bloat that got
  removed.
- **Scroll-reveal** — most pages fade cards/sections up on scroll via a small `IntersectionObserver` in a
  `useEffect`, targeting page-specific classes (`.svc-tile`, `.card`, `.svc-block`, `.method-step`, etc.).
  Follow the existing pattern in whichever page you're editing rather than introducing a new animation
  library.

### Copy style
Short. The user explicitly asked for "less information written but everything conveyed" — hero
subheads and tile descriptions were cut down to one tight sentence each in the last pass. Don't let
descriptions creep back up to multi-sentence paragraphs on tiles/cards; save the long-form prose for the
`/document-intelligence`-style deep-dive pages.

---

## 7. Known outstanding items

1. **AWS Amplify SPA rewrite rule is not yet configured in the console.** Because this is a client-side
   `BrowserRouter` app, a hard refresh (or direct link) on any non-root route (e.g. `/services`) will 404
   unless Amplify is told to serve `index.html` for all non-asset paths. Add in the Amplify console:
   source `</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json)$)([^.]+$)/>` → target
   `/index.html`, type `200`. (`public/_redirects` may already partially cover this depending on host —
   verify against actual deployed behavior.)
2. **`public/og-image.png` is missing.** Referenced by `index.html` and `SEO.jsx` for Open Graph /
   Twitter card previews (1200×630). Social share previews will be broken until this exists.
3. **`/use-cases` only has one real card.** The ghost "more case studies in progress" card is intentional
   and honest (not fabricated) — replace it with a real card as soon as a second engagement is ready to
   publish, following the pattern in `UseCases.jsx`.
4. **`src/pages/Insights.jsx`** is dead code (see §3) — delete or repurpose.

---

## 8. File map

```
src/
  App.jsx                  Route table
  main.jsx                 Entry point
  components/
    Navbar.jsx              Nav (desktop links + mobile slide-out)
    Footer.jsx               Footer link columns
    SEO.jsx                  Per-page <title>/meta via React 19 head hoisting
    JsonLd.jsx               Renders a schema.org JSON-LD <script> block
    AnimatedCounter.jsx       Counts up a number when scrolled into view
    ScrollToTop.jsx           Resets scroll position on route change
  pages/
    Home.jsx, Services.jsx, UseCases.jsx, DocumentIntelligence.jsx,
    Products.jsx, Industries.jsx, About.jsx, Contact.jsx,
    Privacy.jsx, Terms.jsx, NotFound.jsx, Insights.jsx (dead)
  seo/
    schema.js                buildBreadcrumb() helper — pure data, no JSX
  styles/
    style.css                Everything — design tokens + every component class
public/
  favicon.svg, icons.svg, robots.txt, sitemap.xml, _redirects
amplify.yml                  Build + security headers config
docs/
  LinkedIn_Post_Document_Intelligence.md   Drafted social copy for the use case
```

**Content convention:** most pages define their content as a JS array near the top of the file (e.g.
`const services = [...]` in `Services.jsx`) and map over it in JSX. One-off layout is inline `style={{}}`
objects (this codebase's convention — don't introduce a CSS-in-JS library); reusable/animated primitives
go in `style.css` as real classes. Follow whichever pattern the file you're editing already uses.

---

## 9. If you're Cursor picking this up

- Run `npm run dev` and keep it running — this is a visual marketing site, verify changes in the browser,
  not just by reading code.
- Don't reintroduce the DM Serif Display font or the old finance-only positioning — both were deliberately
  replaced (see §1, §6).
- Before writing new "we did X" copy, check §5 for what's factually established, and don't imply Ciyahi
  built third-party systems it only integrated with.
- Reach for the existing component patterns in §6 before inventing new animation/visual patterns — the
  whole site was just brought to a consistent premium visual language; don't fragment it.
