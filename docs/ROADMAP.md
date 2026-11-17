# Active Development Roadmap & Specifications

This document tracks upcoming architectural features, UI components, and domain integrations across the three web properties.

---

## 1. AWS S3 DJ Mix Player Enhancements (`claytonthechemist.com`)
- [x] **AWS S3 Audio Streaming Migration**:
  - Centralized DJ mix streaming and artwork delivery via AWS S3 bucket `clayton-the-chemist-dj-mixes` in `us-west-2` (`src/data/djMixes.js`).
  - Native browser HTTP Range (`206 Partial Content`) seeking support and high-performance audio streaming.
  - Integrated with global viewport transport (`NavbarTransport.js`) and persistent audio engine (`AudioContext.js`).
- [ ] **Next-Gen Player Feature Expansion**:
  - Implement interactive cue points and timestamped tracklist seek navigation (clicking track seeks directly to point in mix).
  - Add interactive waveform rendering (visualizing amplitude/frequency dynamics).
  - Add direct download triggers with sanitized filenames and clean `Content-Disposition`.

---

## 2. Interactive Slideshow Components
- [x] **Event Photos Slideshow & Experience Gallery (`naturalselectiondeejaying.com`)**:
  - Implemented via `TabbedEventGallery.js` component and dynamic filesystem loader `src/lib/djGallery.js`.
  - Organizes event photos across Weddings (`💒`), Corporate Events (`🏢`), Nightclubs (`🎵`), and Races & Festivals (`🏃`).
  - Automatically reads and formats images dynamically from `public/images/pages/dj-services/[category]/` without code changes.
  - Interactive modal lightbox with smooth backdrop blur, counter indicators, and title overlay captions.
  - Full mobile touch-swipe gesture support and keyboard accessibility (`ArrowLeft`, `ArrowRight`, `Escape`).
  - Empty state fallback with drop-in folder path instructions.
- [ ] **Thank You Cards Slideshow (`naturalselectiondeejaying.com`)**:
  - Dedicated gallery showcasing handwritten client thank-you cards, notes, and letters.
- [ ] **Gigs & Performance Photography Slideshow (`claytonthechemist.com`)**:
  - Performance photography across notable club appearances, festival stages, and DJ booths (`PhotoSlideshow.js`).
- [ ] **Flyers & Archival Release Artwork Slideshow (`claytonthechemist.com`)**:
  - Vintage flyers, event posters, and album artwork from 2003–present.

---

## 3. Verified Yelp Reviews Integration (`naturalselectiondeejaying.com`)
- [ ] **Client Testimonial Showcase**:
  - Add dedicated review carousel or grid section on `/dj-services`.
  - Include 5-star ratings, quotes, reviewer names, event dates, and direct links to verify on [Natural Selection on Yelp](http://yelp.com/biz/natural-selection-seattle).
  - Add structured data (`Review` / `AggregateRating` schema.org markup) for SEO rich snippets.

---

## 4. Audio Engineering, Mastering & Acoustic Consultation Section (`naturalselectionmusic.com`)
- [ ] **Acoustics & Engineering Route (`/acoustics` or `/services/acoustics`)**:
  - **Audio Engineering & Mastering**: Studio recording, tracking, mixing, and high-resolution mastering delivery formats (MP3, WAV, FLAC, Apple Lossless, Redbook CD).
  - **Room Acoustics**: Studio acoustic design, treatment consultation, and reverberation measurement (RT60).
  - **Event Sound Acoustics**: Venue audio coverage modeling, acoustic digital signal processing, and line array / subwoofer array tuning.
  - **PA Speaker & Subwoofer Design**: Custom loudspeaker engineering case studies (tapped horn, ported, 6th-order bandpass), driver specifications, Thiele/Small parameters, and measurement data.

---

## 5. Multi-Domain Routing & Middleware
- [ ] **Next.js Host Middleware**:
  - Map incoming request `Host` headers (`naturalselectionmusic.com`, `naturalselectiondeejaying.com`, `claytonthechemist.com`) to property-specific layouts, SEO titles, and home landing pages.
