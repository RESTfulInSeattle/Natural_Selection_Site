# Natural Selection — AI-First Web Platform & Legacy Migration

A modern web application ecosystem powering three distinct web properties for Dave Clayton's **Natural Selection** brand, engineered from the ground up using an **AI-First Software Development Life Cycle (AI-First SDLC)**.

This project transitions a 20+ year legacy web presence (originally founded in October 2003 with static HTML, transitioning to WordPress, and then a Hugo static site baseline) into a cutting-edge Next.js 16, React 19, and Tailwind CSS v4 platform.

---

## 🌐 The Three Target Web Properties

A unified Next.js codebase serves three distinct target domains under Dave Clayton's umbrella:

### 1. `naturalselectionmusic.com` — Music Label, Audio Engineering and Mastering, Acoustic Consultation
- **Music Releases** (`/music`): Catalog showcase with embedded streaming players (SoundCloud, Spotify, Apple Music).
- **Audio Mastering** (`/mastering`): Professional mastering service descriptions across multiple high-resolution delivery formats (MP3, WAV, FLAC, Apple Lossless, Redbook-compliant CD).
- **Publishing & Licensing** (`/publishing`): Catalog representation, sync licensing contact pathways, and rights management.
- **Acoustics & Sound Engineering** (`/acoustics` — *In Active Roadmap*):
  - *Room Acoustics*: Studio acoustic design, measurement, and treatment consultation.
  - *Event Sound Acoustics*: Venue audio optimization, coverage analysis, and system tuning.
  - *PA Speaker & Subwoofer Design*: Custom enclosure engineering (ported, tapped horn, bandpass), driver specifications, and acoustic measurement case studies.

### 2. `naturalselectiondeejaying.com` — Event & Venue DJ Services
- **DJ Services & Equipment** (`/dj-services`): Comprehensive services covering 8+ event types (weddings, corporate galas, nightclubs, fundraisers, lounges, casinos, private events).
- **Hero Presentation**: High-impact ballroom visual experience (`dj-ballroom-hero.jpg` overlooking the ballroom and Puget Sound) with ambient contrast scrims and instant quote requests.
- **Scalable Sound & Lighting**: Multi-zone audio distribution, wireless microphones, subwoofer reinforcement, venue acoustic digital signal processing, and sound-activated/programmable lighting.
- **Client DJ Mixes**: Mixcloud embedded players showcasing genre-specific promotional sets (Disco, 80s/90s, Top 40, Lounge).
- **Event Experience & Visual Gallery**: Dynamic tabbed photo gallery and slideshow (`TabbedEventGallery.js`) with responsive categories (Weddings, Corporate Events, Nightclubs, Races & Festivals), dynamic image resolution via `src/lib/djGallery.js`, mobile touch-swipe support, and fullscreen lightbox modal.
- **Social Proof** (*Upcoming*): Client thank-you card visual gallery and verified Yelp review integrations ([Natural Selection on Yelp](http://yelp.com/biz/natural-selection-seattle)).

### 3. `claytonthechemist.com` — Artist Identity (Dave Clayton / Clayton The Chemist)
- **Artist Bio & Philosophy** (`/clayton-the-chemist`): Producer/DJ specializing in House, Bass Music, Drum & Bass, Nu Funk, Nu Jazz, and Nu Soul. Notable performance history (opening for De La Soul, Massive Attack, LTJ Bukem, DJ Krush).
- **Audio Streaming & Mix Player**: Custom streaming audio player powered by AWS S3 with persistent viewport audio transport bar, cue markers, tracklists, and download triggers.
- **Archival Galleries** (*Upcoming*): Performance photography slideshows, vintage DJ gig flyers, event posters, and music release artwork.

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
│  • Comprehensive Documentation Hub (/docs)                             │
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
│  • ESLint 9 Flat Config  • Next.js / Turbopack Build   • CI Gates     │
│  (Self-diagnosis, automatic syntax correction, zero-warning standards) │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🏗️ Repository Architecture

```
Natural_Selction_Site/
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI quality gate (lint + build)
├── docs/                        # Comprehensive architectural documentation
│   ├── ARCHITECTURE.md          # System design & component contracts
│   ├── AUDIO_STREAMING.md       # Audio streaming engine, S3 architecture & player enhancements
│   ├── CONTENT_GUIDE.md         # Content management & Markdown schema guide
│   ├── DEVELOPMENT_GUIDE.md     # Local development, scripts & conventions
│   ├── ROADMAP.md               # Upcoming feature specifications & roadmap
│   └── MIGRATION_HISTORY.md     # 2003–Present migration history & deprecations
├── legacy/                      # Archived WordPress & Hugo assets (isolated from runtime)
│   ├── wordpress/
│   │   ├── wp_global_styles/    # Historical theme styling presets
│   │   ├── wp_navigation/       # Historical navigation configurations
│   │   └── wp_content/          # Deprecated nested date content structure
│   └── README.md                # Legacy archive explanation
├── naturalselection-site/       # Active Next.js 16 Web Application
│   ├── content/                 # Clean Markdown CMS
│   │   ├── blog/                # Technical articles & acoustic case studies
│   │   └── pages/               # Primary site page content
│   ├── public/                  # Public web assets
│   │   ├── documents/           # Downloadable PDFs (EPK, tech riders)
│   │   └── images/              # Clean slugs for pages and blog posts
│   │       ├── blog/            # Blog illustrations & acoustic diagrams
│   │       └── pages/           # Page imagery (home, dj-services categories, etc.)
│   ├── src/
│   │   ├── app/                 # Next.js App Router (pages & layouts)
│   │   ├── components/          # Reusable React components (AudioPlayer, TabbedEventGallery, etc.)
│   │   ├── context/             # Global React contexts (AudioContext)
│   │   ├── data/                # Static data stores (djMixes.js, claytonPhotos.js)
│   │   └── lib/                 # Content parsing & gallery engines (content.js, djGallery.js)
│   ├── eslint.config.mjs        # Native ESLint 9 Flat Configuration
│   ├── next.config.mjs          # Next.js runtime configuration
│   ├── package.json             # App package dependencies & scripts
│   └── postcss.config.mjs       # Tailwind CSS v4 PostCSS configuration
├── .editorconfig                # Universal indentation and charset conventions
├── .gitignore                   # Tailored Git ignore rules
├── AGENTS.md                    # Core AI coding agent instructions & ground truth
├── CONTRIBUTING.md               # Contribution, AI-First SDLC & commit guidelines
├── package.json                 # Monorepo root workspace scripts
└── README.md                    # Project overview & quickstart (this file)
```

---

## 📚 Documentation Index

For in-depth guides, specifications, and workflows, please see:

- [**Technical Architecture (`docs/ARCHITECTURE.md`)**](./docs/ARCHITECTURE.md): System layout, technology choices, routing, and design tokens.
- [**Audio Streaming Engine (`docs/AUDIO_STREAMING.md`)**](./docs/AUDIO_STREAMING.md): S3 streaming architecture, AudioContext state machine, and player feature roadmap.
- [**Content Management Guide (`docs/CONTENT_GUIDE.md`)**](./docs/CONTENT_GUIDE.md): Markdown frontmatter schemas, image asset conventions, and `content.js` API methods.
- [**Developer Workflows (`docs/DEVELOPMENT_GUIDE.md`)**](./docs/DEVELOPMENT_GUIDE.md): Environment setup, linting rules, and Turbopack commands.
- [**Active Roadmap (`docs/ROADMAP.md`)**](./docs/ROADMAP.md): Track active progress on upcoming slideshows, Yelp reviews, and acoustics sections.
- [**Migration History (`docs/MIGRATION_HISTORY.md`)**](./docs/MIGRATION_HISTORY.md): Detailed 20+ year evolution of Natural Selection web assets.
- [**Agent Guidelines (`AGENTS.md`)**](./agents.md): Specifications and ground-truth rules for autonomous coding agents.
- [**Contributing Guidelines (`CONTRIBUTING.md`)**](./CONTRIBUTING.md): AI and human collaboration norms, branch naming, and commit standards.

---

## 🚀 Quickstart & Development

Commands can be run from the **repository root** or from inside the `naturalselection-site/` directory:

```bash
# Start local development server with Turbopack (http://localhost:3000)
npm run dev

# Run ESLint quality checks (ESLint 9 Flat Config)
npm run lint

# Auto-fix linting issues where possible
npm run lint:fix

# Compile production build
npm run build

# Start production server
npm start
```

---

## 📄 License & Attribution

All music, audio mastering materials, acoustical designs, and branding are © 2003–Present Dave Clayton / Natural Selection. All rights reserved.
Codebase engineered for modern web standards and AI-driven development.
