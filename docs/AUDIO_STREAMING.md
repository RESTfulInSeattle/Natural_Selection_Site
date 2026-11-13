# Audio Streaming Architecture & Player Specifications

## Overview

High-fidelity audio playback is central to the Natural Selection web platform across all three web properties:
- **`claytonthechemist.com`**: Full-length DJ mixes, original tracks, remixes, and live sets.
- **`naturalselectionmusic.com`**: Studio releases, mastering comparisons, and label catalog.
- **`naturalselectiondeejaying.com`**: Genre-specific promotional DJ mixes for event and wedding clients.

---

## Current Audio Subsystems

### 1. Centralized Mix Data Store (`src/data/djMixes.js`)
Mix metadata is structured by genre category (`House`, `Drum & Bass`, `Funk & Soul`).
Audio files are hosted in an AWS S3 bucket: `clayton-the-chemist-dj-mixes` in `us-west-2`:

```javascript
const S3_BASE_URL = 'https://clayton-the-chemist-dj-mixes.s3.us-west-2.amazonaws.com';

export const djMixData = {
  'House': [
    {
      id: 'just-do-you',
      mixTitle: 'Just Do You',
      artistName: 'Deep and Funky House',
      description: 'Nice deep, soulful, and funky flavors of house.',
      genre: 'House',
      mp3Url: '...',
      artworkUrl: '...',
      downloadUrl: '...'
    },
    // ...
  ]
};
```

### 2. Audio State Engine (`src/context/AudioContext.js`)
An application-wide React Context that wraps the entire tree in `src/app/layout.js`.
- Maintains a single HTML5 `Audio` element instance in memory.
- Ensures playback continues uninterrupted when navigating between `/clayton-the-chemist`, `/music`, `/mastering`, etc.
- Synchronizes the current active track with both the in-page cards and the persistent `NavbarTransport`.

### 3. Audio UI Components
- **`AudioPlayer.js`**: Card-level player showing cover art, playback progress, track info, and play/pause controls.
- **`NavbarTransport.js`**: Viewport-docked persistent bottom player bar with seek scrubber, track details, and volume controls.
- **`TabbedDJMixes.js`**: Tabbed genre browser (`House`, `Drum & Bass`, `Funk & Soul`) rendering sets of mixes.
- **`MusicPlayers.js`**: Third-party embed components:
  - `MixcloudPlayer`: Embedded Mixcloud widget (`/username/mix-name/`)
  - `SoundCloudPlayer`: Embedded SoundCloud playlist or track iframe
  - `SpotifyPlayer`: Embedded Spotify album, playlist, or track iframe
  - `AppleMusicPlayer`: Embedded Apple Music player iframe

---

## Google Drive Audio Migration Roadmap

Per the specifications in `AGENTS.md`, the DJ mix player is targeted for Google Drive integration to allow direct streaming and cover art loading from Google Drive shared files.

### Technical Challenges of Direct Google Drive Streaming
1. **Direct Stream URLs**: Standard Google Drive share URLs (`https://drive.google.com/file/d/FILE_ID/view?usp=sharing`) cannot be directly consumed by an `<audio>` tag.
2. **CORS & HTTP Range Requests**: Seeking within large MP3 files (often 100MB+ for 60-90 minute DJ sets) requires `HTTP 206 Partial Content` (Range headers). Google Drive direct links frequently fail range request negotiation.
3. **Download Rate Limits & Antivirus Scans**: Files larger than 100MB trigger a Google virus scan warning page instead of serving the binary audio file.

### Recommended Architecture: Next.js Audio Proxy Route
To deliver a smooth, high-fidelity experience with Google Drive:

```
[Browser Audio Element]
         │
         ▼ (HTTP Range Request)
[/api/audio/[id]/route.js] ── (Next.js Server / Streaming Proxy)
         │
         ▼ (Google Drive API / Direct Download Stream)
[Google Drive File Storage]
```

#### Implementation Blueprint (`/api/audio/[id]/route.js`):
1. **File ID Extraction**: Route receives the Google Drive file ID: `/api/audio/[id]`.
2. **Range Header Forwarding**: Checks `request.headers.get('range')` and forwards it to Google Drive.
3. **Stream Pipe**: Streams chunked audio bytes back to the browser with:
   - `Content-Type: audio/mpeg`
   - `Accept-Ranges: bytes`
   - `Content-Range: bytes START-END/TOTAL`
   - `Content-Length: CHUNK_LENGTH`
   - `Cache-Control: public, max-age=31536000, immutable`

### Next-Gen Audio Player Features
- **Tracklist & Cue Points**: Display time-coded tracklists where clicking a track seeks directly to that point in the set.
- **Waveform Visualization**: Pre-rendered or client-generated audio waveforms (e.g., via WaveSurfer.js or Web Audio API `AudioBuffer`).
- **Direct Download Triggers**: Clean download pathway with proper `Content-Disposition: attachment; filename="MixName.mp3"` headers.
