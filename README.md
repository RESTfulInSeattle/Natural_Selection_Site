# Natural Selection — AI-First Web Platform & Legacy Migration

A modern web application ecosystem powering three distinct web properties for Dave Clayton's **Natural Selection** brand, engineered from the ground up using an **AI-First Software Development Life Cycle (AI-First SDLC)**.

This project transitions a 20+ year legacy web presence (originally founded in October 2003 as a WordPress site, later preserved as a Hugo static site) into a cutting-edge Next.js 15, React 19, and Tailwind CSS platform.

---

## 🤖 The AI-First SDLC Philosophy

This repository is engineered specifically to maximize the velocity, accuracy, and autonomy of **AI coding agents** (e.g., Antigravity, Claude Code, Cursor) collaborating with a human architect and product owner.

```
       ┌────────────────────────────────────────────────────────┐
       │             Human Architect & Product Owner            │
       │    (Creative Direction, Acoustics Science, Review)    │
       └───────────────────────────┬────────────────────────────┘
                                   │ Strategic Intent & Approval
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        Context Engineering Layer                       │
│  • AGENTS.md (Component contracts, domain rules, active roadmap)       │
│  • Modular Content Specs (Structured Markdown, frontmatter schemas)    │
│  • Architecture Decision Records (ADRs)                                │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │ Context & Constraints
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        Autonomous Agent Execution                      │
│  • Research & Analysis  ──►  Implementation Plan  ──►  Code Generation │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │ Build, Lint & Test Loops
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        Automated Verification                          │
│  • ESLint 9 Checks      • Next.js / Turbopack Build   • Vitest / E2E   │
│  (Self-diagnosis, automatic syntax correction, and regression testing) │
└────────────────────────────────────────────────────────────────────────┘
```

### Core Principles of Our AI-First Workflow

1. **Specification as Code (`AGENTS.md`)**:
   Instead of scattered requirements, all technical expectations, domain models, player requirements, and active roadmaps are codified in [`AGENTS.md`](./agents.md). This file serves as the ground truth context for AI agents across every session.
2. **Human-in-the-Loop Orchestration**:
   The human architect provides strategic goals, acoustic engineering data, and creative aesthetic approval. AI agents operate semi-autonomously through a rigorous loop: **Research ➔ Implementation Plan ➔ User Review ➔ Execution ➔ Automated Verification**.
3. **Machine-Actionable Context**:
   The repository separates legacy data (`wp_global_styles/`, `wp_navigation/`, `static_site/`) from active runtime code (`naturalselection-site/`), giving AI agents clean, predictable context boundaries without hallucinating legacy structures.
4. **Self-Healing Verification Loops**:
   Agents execute development scripts (`npm run lint`, `npm run build`) directly in the shell to catch and repair issues autonomously prior to human review.

---

## 🌐 The Three Target Web Properties

A unified Next.js codebase serves three distinct target domains under Dave Clayton's umbrella:

### 1. `naturalselectionmusic.com` — Music Label, Mastering & Acoustical Engineering
- **Music Releases** (`/music`): Catalog showcase with embedded streaming players (SoundCloud, Spotify, Apple Music).
- **Audio Mastering** (`/mastering`): Professional mastering service descriptions across multiple high-resolution delivery formats (MP3, WAV, FLAC, Apple Lossless, Redbook-compliant CD).
- **Publishing & Licensing** (`/publishing`): Catalog representation, sync licensing contact pathways, and rights management.
- **Acoustics & Sound Engineering** (`/acoustics` — *In Active Development*):
  - *Room Acoustics*: Studio acoustic design, measurement, and treatment consultation.
  - *Event Sound Acoustics*: Venue audio optimization, coverage analysis, and system tuning.
  - *PA Speaker & Subwoofer Design*: Custom enclosure engineering (ported, tapped horn, bandpass), driver specifications, and acoustic measurement case studies.

### 2. `naturalselectiondeejaying.com` — Event & Venue DJ Services
- **DJ Services & Equipment** (`/dj-services`): Comprehensive services covering 8+ event types (weddings, corporate galas, nightclubs, fundraisers, lounges, casinos, private events).
- **Scalable Sound & Lighting**: Multi-zone audio distribution, wireless microphones, subwoofer reinforcement, venue acoustic digital signal processing, and sound-activated/programmable lighting.
- **Client DJ Mixes**: Mixcloud embedded players showcasing genre-specific promotional sets (Disco, 80s/90s, Top 40, Lounge).
- **Visual Galleries** (*Upcoming*): Interactive photo slideshows of past events, dance floors, and venue setups.
- **Social Proof** (*Upcoming*): Client thank-you card visual gallery and verified Yelp review integrations ([Natural Selection on Yelp](http://yelp.com/biz/natural-selection-seattle)).

### 3. `claytonthechemist.com` — Artist Identity (Dave Clayton / Clayton The Chemist)
- **Artist Bio & Philosophy** (`/clayton-the-chemist`): Producer/DJ specializing in House, Bass Music, Drum & Bass, Nu Funk, Nu Jazz, and Nu Soul. Notable performance history (opening for De La Soul, Massive Attack, LTJ Bukem, DJ Krush).
- **Google Drive DJ Mix Player**: Custom streaming audio player migrating legacy Dropbox MP3s to Google Drive, featuring cue markers, tracklists, audio waveforms, and download triggers.
- **Archival Galleries** (*Upcoming*): Performance photography slideshows, vintage DJ gig flyers, event posters, and music release artwork.

---

## 🏗️ Repository Architecture

```
Natural_Selection_Site/
├── AGENTS.md                   # Core instructions, domain specs & roadmap for AI agents
├── README.md                   # Project overview & AI-First SDLC documentation
├── agents.md                   # Mirror of AGENTS.md for agent runtime discovery
│
├── naturalselection-site/      # Active Next.js 15 application
│   ├── content/                # Markdown-based CMS content
│   │   ├── blog/               # Articles (speaker design, acoustic studies, reviews)
│   │   └── pages/              # Site pages (about, music, mastering, publishing, etc.)
│   ├── public/
│   │   └── images/             # Public web images organized by slug
│   ├── src/
│   │   ├── app/                # Next.js App Router (pages & API routes)
│   │   ├── components/         # Modular React components (players, navigation, layouts)
│   │   └── lib/                # Content parsers (gray-matter, remark) & utilities
│   ├── package.json            # App dependencies & scripts
│   └── next.config.mjs         # Next.js configuration
│
├── static_site/                # Legacy Hugo static site (reference & backup)
├── wp_global_styles/           # Archived WordPress theme & style configurations
└── wp_navigation/              # Archived WordPress navigation exports
```

---

## 🚀 Development Quickstart

All development commands must be executed within the `naturalselection-site/` application directory:

```bash
# Navigate to the Next.js app directory
cd naturalselection-site

# Install dependencies
npm install

# Start development server with Turbopack (http://localhost:3000)
npm run dev

# Run ESLint quality checks
npm run lint

# Compile production build
npm run build

# Start production server
npm start
```

---

## 💡 Strategic Recommendations to Further the AI-First SDLC

To elevate this repository from an *AI-assisted* project to a state-of-the-art **autonomous AI-First SDLC platform**, the following architectural and procedural enhancements are recommended:

### 1. Automated Agent Quality Gates (CI/CD via GitHub Actions)
- **Current Status**: Linting and building are run manually on local developer machines.
- **Recommendation**: Implement a GitHub Actions workflow (`.github/workflows/ai-gate.yml`) that runs on every pull request and agent branch:
  - Strict linting (`npm run lint`).
  - Next.js production build check (`npm run build`).
  - Automated dead link and markdown validation.
  - Automated bundle size and asset budget monitoring.
- **Agent Benefit**: AI agents can submit PRs and immediately evaluate pass/fail signals from GitHub Actions without waiting for manual human verification.

### 2. Schema Validation & Type Contracts (TypeScript & Zod)
- **Current Status**: JavaScript with loose Markdown frontmatter parsed via `gray-matter`.
- **Recommendation**:
  - Introduce **Zod** or migrate to **TypeScript** for content frontmatter schemas (`content/pages/*.md`, `content/blog/*.md`).
  - Formally define schemas for DJ Mixes (title, Google Drive ID, cue points, tracklist, genre tags, cover image URL) and Yelp reviews.
- **Agent Benefit**: AI agents excel when operating against rigid type systems. Strongly typed contracts eliminate hallucinations, preventing missing fields or broken frontmatter properties at build time.

### 3. Component & E2E Testing Harness (Vitest & Playwright)
- **Current Status**: Verification relies on visual inspection and `npm run lint`.
- **Recommendation**:
  - Install **Vitest** + React Testing Library for fast unit tests on core components (e.g., Google Drive streaming URL converter, audio player controls, slideshow state).
  - Add **Playwright** for headless end-to-end browser testing of critical user flows (audio playback start, tab switching in `TabbedDJMixes`, slideshow touch/keyboard navigation).
- **Agent Benefit**: Agents can write a feature, run `npx playwright test`, inspect failure traces or screenshots, and fix bugs autonomously before notifying the user.

### 4. AI-Assisted Media & Content Ingestion Pipeline
- **Current Status**: Manual organization of legacy media and Google Drive links.
- **Recommendation**: Create a `scripts/` directory with agent-executable Node.js utilities:
  - `scripts/sync-gdrive-mixes.js`: Validates Google Drive audio IDs and generates mix metadata.
  - `scripts/optimize-gallery-images.js`: Automatically generates responsive thumbnails and WebP/AVIF variants for slideshow galleries.
  - `scripts/fetch-yelp-reviews.js`: Automated caching of approved client testimonials and Yelp ratings.
- **Agent Benefit**: AI agents can execute these CLI scripts directly via background tasks to ingest and update live content without manual file manipulation.

### 5. Architecture Decision Records (ADRs)
- **Current Status**: High-level guidelines live in `AGENTS.md`.
- **Recommendation**: Establish a `docs/adr/` directory using lightweight markdown ADR templates.
  - Whenever an agent makes a significant architectural choice (e.g., Next.js API audio proxy vs. client direct streaming, multi-domain middleware routing, image gallery carousel engine), it records an ADR.
- **Agent Benefit**: Prevents context drift across different chat sessions and provides future agents with historical rationale for architectural patterns.

### 6. Subagent Persona Specialization
- **Current Status**: General coding agent handles all tasks.
- **Recommendation**: Codify task-specific agent profiles within the repository configuration:
  - **Audio & Streaming Engineer**: Focused on Google Drive audio streaming, waveform generation, and HTML5 audio APIs.
  - **UI/UX & Carousel Specialist**: Focused on responsive Tailwind v4 styling, accessible slideshow carousels, and mobile gestures.
  - **Acoustics & Content Writer**: Scoped to the `/acoustics` section, subwoofer case studies, and technical Markdown documentation.
- **Agent Benefit**: Scoped subagents have smaller context footprints, sharper focus, and higher task execution fidelity.

---

## 📄 License & Attribution

All music, mastering materials, acoustical designs, and branding are © 2003–Present Dave Clayton / Natural Selection. All rights reserved.
Codebase engineered for modern web standards and AI-driven development.
