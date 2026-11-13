# AGENTS.md — Natural Selection Site Architecture & Agent Guidelines

## Overview

`naturalselection-site` is a Next.js 16 web application engineered to power three distinct websites / web properties under Dave Clayton's Natural Selection brand:

1. **`naturalselectionmusic.com`** — Music label, audio mastering, publishing & licensing, and acoustic consultation.
2. **`naturalselectiondeejaying.com`** — Professional event & venue DJ services, Mixcloud sets, client testimonials, and visual galleries.
3. **`claytonthechemist.com`** — Artist identity for Clayton The Chemist (DJ & Producer), featuring original productions, DJ mix players, and archival galleries.

---

## Target Websites & Functional Requirements

### 1. `naturalselectionmusic.com`
Focuses on music releases, audio engineering, publishing, and acoustical engineering.

* **Music Section** (`/music`):
  * Showcases music released under the label.
  * Features embedded streaming players (SoundCloud playlists/tracks, Spotify albums/singles, Apple Music embeds).
* **Mastering Section** (`/mastering`):
  * Audio mastering and engineering services.
  * Details technical delivery formats (MP3, WAV, FLAC, Apple Lossless, Redbook-compliant CD).
* **Publishing Section** (`/publishing`):
  * Licensing information and catalog representation for released music.
  * Sync licensing and usage rights contact pathways.
* **Acoustics Section** *(Upcoming / In Roadmap)*:
  * **Room Acoustics**: Studio acoustic design, acoustic treatment recommendations, and space measurement.
  * **Event Sound Acoustics**: Venue audio optimization, coverage analysis, and system tuning.
  * **PA Speaker Design**: Custom loudspeaker and subwoofer design (e.g., ported, tapped horn, bandpass enclosures), engineering case studies, and measurement data.

---

### 2. `naturalselectiondeejaying.com`
Focuses on commercial and private DJ services, client acquisition, and social proof.

* **DJ Services & Equipment** (`/dj-services`):
  * Comprehensive service descriptions across 8+ event types (weddings, corporate events, nightclubs, fundraisers, lounges, casinos, races/festivals, private parties).
  * Scalable audio setups (multi-zone audio, wireless mics, subwoofer reinforcement, venue acoustic digital processing).
  * Scalable lighting systems (sound-activated dance lighting, programmable up-lighting).
* **DJ Mixes**:
  * Embedded Mixcloud players (`MixcloudPlayer`) showcasing sample DJ sets (e.g., Disco, 80s, 90s, Top 40) for prospective clients.
* **Event Photo Slideshow** *(Upcoming / In Roadmap)*:
  * Interactive image slideshow / gallery showcasing photos from past events, dance floors, and venue setups.
* **Thank You Cards Slideshow** *(Upcoming / In Roadmap)*:
  * Dedicated visual slideshow of physical thank-you cards, handwritten notes, and letters from past clients and couples.
* **Yelp Reviews** *(Upcoming / In Roadmap)*:
  * Integration and display of verified Yelp reviews and ratings from [Natural Selection on Yelp](http://yelp.com/biz/natural-selection-seattle), highlighting client testimonials and reputation.

---

### 3. `claytonthechemist.com`
The artist portfolio for Dave Clayton (Clayton The Chemist) — DJ and producer specializing in House, Bass Music, Drum & Bass, Nu Funk, Nu Jazz, and Nu Soul.

* **Artist Bio & Philosophy** (`/clayton-the-chemist`):
  * Bio, notable gigs (opening for De La Soul, Massive Attack, LTJ Bukem, DJ Krush), and musical philosophy.
  * Embedded Spotify, Apple Music, and SoundCloud artist players.
* **DJ Mix Player (Google Drive Migration & Enhancements)** *(High Priority)*:
  * **Current State**: Mixes are centralized in `src/data/djMixes.js` and played via `AudioPlayer.js` and global `NavbarTransport.js` connected to `AudioContext.js`.
  * **Migration Requirement**: Update the DJ mix player to stream audio and load artwork directly from Google Drive links (via direct stream URL formatting, proxy API route, or Google Drive API).
  * **Feature Expansion**: Enhance the player beyond basic playback (e.g., tracklist display, timestamped cue points, audio waveforms, download triggers, enhanced queue/playlist controls).
* **Gigs & Pictures Slideshow** *(Upcoming / In Roadmap)*:
  * Visual slideshow of live DJ performances, club gigs, festival appearances, and behind-the-scenes photography.
* **Flyers & Release Artwork Slideshow** *(Upcoming / In Roadmap)*:
  * Archival gallery and slideshow featuring vintage/historical DJ gig flyers, event posters, and cover artwork from music releases.

---

## Technical Stack & Architecture

* **Framework**: Next.js 16+ (App Router, Turbopack) with React 19.
* **Styling**: Tailwind CSS v4 with custom utility gradients (`gradient-primary`, `gradient-mesh`, `gradient-accent`) and semantic theme tokens.
* **Content Management**:
  * Markdown-based content (`content/pages/` and `content/blog/`) with YAML frontmatter parsed via `gray-matter`, `remark`, and `remark-html`.
  * Managed via `src/lib/content.js`.
* **Assets**:
  * Public images cleanly organized in `public/images/pages/[slug]/` and `public/images/blog/[slug]/`.
  * Archived legacy WordPress files stored under `legacy/wordpress/` (completely isolated from runtime).
* **Component Architecture** (`src/components/`):
  * `Navigation.js`: Site navigation and responsive header.
  * `NavbarTransport.js`: Persistent viewport bottom audio transport player.
  * `AudioPlayer.js`: Modular audio player card.
  * `MusicPlayers.js`: Streaming embeds (`MixcloudPlayer`, `SoundCloudPlayer`, `SpotifyPlayer`, `AppleMusicPlayer`).
  * `TabbedDJMixes.js`: Tabbed genre browser for DJ mixes.
  * `Content.js`: Markdown content renderer.
  * `ThemeProvider.js`: Zero-flash theme engine supporting dark/light mode with SSR-safe `useSyncExternalStore`.
* **Architecture Docs**: For in-depth technical documentation, refer to:
  * [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md)
  * [`docs/AUDIO_STREAMING.md`](./docs/AUDIO_STREAMING.md)
  * [`docs/CONTENT_GUIDE.md`](./docs/CONTENT_GUIDE.md)
  * [`docs/DEVELOPMENT_GUIDE.md`](./docs/DEVELOPMENT_GUIDE.md)
  * [`docs/ROADMAP.md`](./docs/ROADMAP.md)
  * [`docs/MIGRATION_HISTORY.md`](./docs/MIGRATION_HISTORY.md)

---

## Key Workflows & Roadmap for AI Agents

When working on tasks in this repository, follow these specifications:

### 1. Google Drive DJ Mix Player
- Refactor audio streaming to support Google Drive (via `/api/audio/[id]` streaming proxy for HTTP range requests).
- Add support for tracklists, cue markers, waveforms, and download actions.

### 2. Slideshow Components
- Build reusable, responsive, accessible slideshow / carousel components:
  - Event photos slideshow for `naturalselectiondeejaying.com`.
  - Client thank-you cards slideshow for `naturalselectiondeejaying.com`.
  - Gigs & performance photography slideshow for `claytonthechemist.com`.
  - Archival flyers & release artwork slideshow for `claytonthechemist.com`.
- Slideshows should support touch swipe, keyboard navigation, full-screen lightbox / zoom preview, and lazy loading.

### 3. Yelp Reviews Integration
- Build a dedicated Yelp testimonial section or card carousel on `/dj-services`.
- Include star ratings, quotes, reviewer names, dates, and direct links to verify on Yelp.

### 4. Acoustics Section Implementation
- Implement the acoustics section under `naturalselectionmusic.com` (route `/acoustics` or `/services/acoustics`).
- Structure content around:
  - Room Acoustics (measurement, treatment, consultation).
  - Event Sound Acoustics (live sound coverage, venue tuning).
  - PA Speaker & Subwoofer Design (custom enclosure engineering, driver specs, case studies).

---

## Development Commands

Development commands can be run from the repository root or within `naturalselection-site/`:

```bash
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
