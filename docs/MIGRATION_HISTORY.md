# 20+ Year Migration History (2003–Present)

## Phase 1: Static HTML Origins (2003–2014)
- **October 2003**: Dave Clayton founded Natural Selection as an independent music label and DJ service in Seattle, WA.
- Built as static HTML/CSS pages hosted on shared Linux Apache hosting.
- Featured real-time MP3 downloads and embedded Flash audio players.

---

## Phase 2: WordPress Era (2015–2024)
- Transitioned to WordPress CMS to accommodate rapid client intake, audio mastering inquiries, and blog articles.
- Content was stored in date-nested directories (`/2015/10/about/`, `/2016/02/client-contracts/`, etc.).
- Relied on custom themes, plugins, and third-party widgets.
- WordPress global styles and navigation block exports from this era are permanently archived under `legacy/wordpress/`.

---

## Phase 3: Hugo Static Site Conversion (2024)
- Converted WordPress database exports into Markdown content files using Hugo static site generator.
- Preserved historical post dates and metadata while transitioning away from database-backed CMS vulnerabilities.

---

## Phase 4: Modern Next.js 16 Web Platform (2025–Present)
- Complete ground-up re-architecture using:
  - **Next.js 16 (App Router)** with Turbopack for sub-second build times.
  - **React 19** with strict hook safety and `useSyncExternalStore` hydration.
  - **Tailwind CSS v4** for modern CSS token-based styling.
  - **AWS S3 + Cloud Audio Streaming** with persistent viewport transport controls.
  - **Clean Content Structure**: Deprecated nested date folders in favor of flat `content/pages/` and `content/blog/` with matching `public/images/`.
  - **AI-First SDLC**: Full codified guidelines in `AGENTS.md` and automated CI quality gates.
