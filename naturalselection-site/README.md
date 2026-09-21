# Natural Selection — Next.js Application Package

This package contains the active Next.js 15 web application powering the three web properties for Dave Clayton's Natural Selection brand:
1. `naturalselectionmusic.com` (Label, Audio Mastering, Acoustics Consultation)
2. `naturalselectiondeejaying.com` (Event & Venue DJ Services, Testimonials)
3. `claytonthechemist.com` (Clayton The Chemist Artist Portfolio & DJ Mixes)

> [!NOTE]
> This repository is managed via an **AI-First Software Development Life Cycle (SDLC)**.
> For the comprehensive project architecture, AI-First development workflow, and strategic recommendations, please see the primary [Root README.md](../README.md) and [AGENTS.md](../AGENTS.md).

---

## Quickstart

From inside this directory (`naturalselection-site/`):

```bash
# Install dependencies
npm install

# Start local development server with Turbopack (http://localhost:3000)
npm run dev

# Run ESLint quality checks
npm run lint

# Build production bundle
npm run build

# Start production server
npm start
```

---

## Directory Structure

- `content/`: Markdown-based content (`pages/` and `blog/`) with YAML frontmatter.
- `public/images/`: Optimized public images organized by page and blog slug.
- `src/app/`: Next.js App Router pages and API routes.
- `src/components/`: Modular UI components (`Navigation.js`, `MusicPlayers.js`, `TabbedDJMixes.js`, `Content.js`, etc.).
- `src/lib/`: Content parsing engine (`content.js` leveraging `gray-matter` and `remark`).
