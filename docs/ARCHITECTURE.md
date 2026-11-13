# Technical Architecture Specification

## Overview

The Natural Selection web platform is a unified Next.js 16 application engineered to power three distinct brand properties under Dave Clayton's Natural Selection umbrella:

1. **`naturalselectionmusic.com`** — Music label catalog, audio mastering engineering, publishing & licensing representation, and acoustics consultation.
2. **`naturalselectiondeejaying.com`** — Event, nightclub, and private DJ services, Mixcloud promotional sets, client testimonials, and visual galleries.
3. **`claytonthechemist.com`** — Artist portfolio for Clayton The Chemist (DJ & Producer), featuring original productions, DJ mix players, and archival galleries.

---

## Technology Stack

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router, Turbopack) | `16.0.7` | Hybrid static & server-side rendering, asset optimization |
| **Runtime UI** | React | `19.0.0` | Component lifecycle, modern hooks, concurrent features |
| **Styling** | Tailwind CSS (PostCSS) | `v4.0.0` | Utility-first design tokens, theme variables, modern CSS grid |
| **Content CMS** | Gray-matter + Remark + Remark-HTML | `^4.0.3` / `^15.0.1` / `^16.0.1` | Static Markdown parsing with YAML frontmatter |
| **Quality & Linting** | ESLint (Flat Config) | `^9.39.1` | Static analysis, React 19 hook safety, Next.js rules |
| **Media Delivery** | AWS S3 + Google Drive | Cloud CDN | High-resolution MP3 audio streaming and cover artwork |

---

## Directory Organization

```
Natural_Selction_Site/
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI quality gate (lint + build)
├── docs/                        # Comprehensive architectural documentation
│   ├── ARCHITECTURE.md          # System design & component contracts (this file)
│   ├── AUDIO_STREAMING.md       # Audio streaming engine, S3 & Google Drive migration
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
│   ├── src/
│   │   ├── app/                 # Next.js App Router (pages & layouts)
│   │   ├── components/          # Reusable React components
│   │   ├── context/             # Global React contexts (AudioContext)
│   │   ├── data/                # Static data stores (djMixes.js, claytonPhotos.js)
│   │   └── lib/                 # Content parsing engine (content.js)
│   ├── eslint.config.mjs        # Native ESLint 9 Flat Configuration
│   ├── next.config.mjs          # Next.js runtime configuration
│   ├── package.json             # App package dependencies & scripts
│   └── postcss.config.mjs       # Tailwind CSS v4 PostCSS configuration
├── .editorconfig                # Universal indentation and charset conventions
├── .gitignore                   # Tailored Git ignore rules
├── AGENTS.md                    # Core AI coding agent instructions & ground truth
├── CONTRIBUTING.md               # Contribution, AI-First SDLC & commit guidelines
├── package.json                 # Monorepo root workspace scripts
└── README.md                    # Project overview & quickstart
```

---

## Core Subsystems

### 1. Global Navigation & Transport Bar
- **`Navigation.js`**: Site-wide header supporting responsive desktop menus and mobile drawer navigation with theme toggle.
- **`NavbarTransport.js`**: Persistent global audio transport bar docked at the bottom of the viewport. Displays track title, artist, play/pause controls, seek bar, time display, and volume slider. Synchronizes across page navigations without interrupting audio playback.

### 2. Audio State Management (`AudioContext.js`)
- Houses the global HTML5 audio engine.
- Manages playback states (`isPlaying`, `currentTime`, `duration`, `volume`, `isMuted`, `isLoading`).
- Exposes control methods: `playTrack(track)`, `togglePlay()`, `seek(time)`, `setVolume(volume)`, `toggleMute()`.
- Supports seamless transitions between different mix genres.

### 3. Theme Engine (`ThemeProvider.js` & `globals.css`)
- Zero-flash dark/light mode toggle utilizing an inline head script and `useSyncExternalStore` for SSR-safe reactivity.
- Supports system preference (`prefers-color-scheme: dark`) with user-selected `localStorage` persistence under key `ns-theme`.
- CSS custom properties define semantic color tokens for Leaf Green (`#10b981`), Ocean Blue (`#0ea5e9`), Dark Canvas (`#02070a`), and Card Surfaces (`#061217`).

### 4. Content Parsing Engine (`src/lib/content.js`)
- Parses Markdown files at build time using `gray-matter` for YAML frontmatter and `remark` / `remark-html` for HTML compilation.
- Transforms relative markdown image paths (`![](images/photo.jpg)`) into absolute public URLs (`/images/pages/[slug]/photo.jpg` or `/images/blog/[slug]/photo.jpg`).
- Provides type-safe query utilities: `getPageContent()`, `getAllBlogPosts()`, `getContentBySlug()`.

---

## Domain Routing Architecture

All three web properties are currently served through unified routes within the App Router:

| Route | Primary Web Property | Functional Scope |
| :--- | :--- | :--- |
| `/` | `naturalselectionmusic.com` / Hub | Brand portal, overview of label, DJ services, and artist identity |
| `/about` | All Properties | Dave Clayton's 20+ year background, vision, and credentials |
| `/music` | `naturalselectionmusic.com` | Music label releases, embedded SoundCloud/Spotify/Apple Music players |
| `/mastering` | `naturalselectionmusic.com` | Audio mastering engineering, mastering chain specs, delivery formats |
| `/publishing` | `naturalselectionmusic.com` | Publishing catalog representation and sync licensing inquiries |
| `/dj-services` | `naturalselectiondeejaying.com` | Event & venue DJ services, equipment packages, Mixcloud sample sets |
| `/clayton-the-chemist` | `claytonthechemist.com` | Clayton The Chemist artist page, DJ mix players, video sets, EPK, photos |
| `/contact` | All Properties | Unified inquiry and booking pathway |

Future architecture enables multi-domain host routing via Next.js middleware, mapping custom domain host headers directly to property-specific subpaths or landing layouts.
