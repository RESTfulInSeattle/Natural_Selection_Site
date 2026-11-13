# Active Development Roadmap & Specifications

This document tracks upcoming architectural features, UI components, and domain integrations across the three web properties.

---

## 1. Google Drive DJ Mix Player (`claytonthechemist.com`)
- [ ] **Next.js Audio Proxy (`/api/audio/[id]`)**:
  - Implement streaming proxy handling HTTP Range requests for Google Drive audio files.
  - Bypass Google Drive download confirmation screens for large files (>100MB).
- [ ] **Universal Audio Player Component**:
  - Migrate away from `DropboxMP3Player.js` to a universal player supporting S3, Google Drive, and local audio.
  - Implement interactive cue points and timestamped tracklist seek navigation.
  - Add interactive waveform rendering (visualizing amplitude/frequency dynamics).
  - Add direct download triggers with sanitized filenames.

---

## 2. Interactive Slideshow Components
- [ ] **Event Photos Slideshow (`naturalselectiondeejaying.com`)**:
  - High-resolution gallery of wedding dance floors, corporate setups, and festival stages.
  - Touch-swipe support for mobile devices and keyboard arrow navigation.
  - Fullscreen lightbox mode with zoom and thumbnail navigation.
- [ ] **Thank You Cards Slideshow (`naturalselectiondeejaying.com`)**:
  - Dedicated gallery showcasing handwritten client thank-you cards, notes, and letters.
- [ ] **Gigs & Performance Photography Slideshow (`claytonthechemist.com`)**:
  - Performance photography across notable club appearances, festival stages, and DJ booths.
- [ ] **Flyers & Archival Release Artwork Slideshow (`claytonthechemist.com`)**:
  - Vintage flyers, event posters, and album artwork from 2003–present.

---

## 3. Verified Yelp Reviews Integration (`naturalselectiondeejaying.com`)
- [ ] **Client Testimonial Showcase**:
  - Add dedicated review carousel or grid section on `/dj-services`.
  - Include 5-star ratings, quotes, reviewer names, event dates, and direct links to verify on [Natural Selection on Yelp](http://yelp.com/biz/natural-selection-seattle).
  - Add structured data (`Review` / `AggregateRating` schema.org markup) for SEO rich snippets.

---

## 4. Acoustics & Sound Engineering Section (`naturalselectionmusic.com`)
- [ ] **Acoustics Route (`/acoustics` or `/services/acoustics`)**:
  - **Room Acoustics**: Studio acoustic design, treatment consultation, and reverberation measurement (RT60).
  - **Event Sound Acoustics**: Venue audio coverage modeling, acoustic digital signal processing, and line array / subwoofer array tuning.
  - **PA Speaker & Subwoofer Design**: Custom loudspeaker engineering case studies (tapped horn, ported, 6th-order bandpass), driver specifications, Thiele/Small parameters, and measurement data.

---

## 5. Multi-Domain Routing & Middleware
- [ ] **Next.js Host Middleware**:
  - Map incoming request `Host` headers (`naturalselectionmusic.com`, `naturalselectiondeejaying.com`, `claytonthechemist.com`) to property-specific layouts, SEO titles, and home landing pages.
