# Natural Selection — Next.js Application Package

This package contains the active Next.js 16 web application powering the three web properties for Dave Clayton's Natural Selection brand:
1. `naturalselectionmusic.com` (Label, Audio Engineering and Mastering, Acoustic Consultation)
2. `naturalselectiondeejaying.com` (Event & Venue DJ Services, Testimonials)
3. `claytonthechemist.com` (Clayton The Chemist Artist Portfolio & DJ Mixes)

> [!NOTE]
> This repository is managed via an **AI-First Software Development Life Cycle (SDLC)**.
> For the comprehensive project architecture, AI-First development workflow, and technical guides, please see the primary [Root README.md](../README.md), [AGENTS.md](../agents.md), and [`docs/`](../docs/).

---

## Quickstart

From inside this directory (`naturalselection-site/`):

```bash
# Install dependencies
npm install

# Start local development server with Turbopack (http://localhost:3000)
npm run dev

# Run ESLint quality checks (ESLint 9 Flat Config)
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Build production bundle
npm run build

# Start production server
npm start
```

---

## Directory Structure

- `content/`: Markdown-based content (`pages/` and `blog/`) with YAML frontmatter.
- `public/`: Public web assets (`images/` organized by slug, `documents/`, favicons).
- `src/app/`: Next.js App Router pages and layouts.
- `src/components/`: Modular UI components (`Navigation.js`, `NavbarTransport.js`, `AudioPlayer.js`, `MusicPlayers.js`, `TabbedDJMixes.js`, `TabbedEventGallery.js`, `PhotoSlideshow.js`, `Content.js`, etc.).
- `src/context/`: Global React contexts (`AudioContext.js`).
- `src/data/`: Centralized audio mix data (`djMixes.js`) and photo data (`claytonPhotos.js`).
- `src/lib/`: Content parsing and gallery engines (`content.js` leveraging `gray-matter` and `remark`, and `djGallery.js`).
