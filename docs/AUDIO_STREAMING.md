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

## AWS S3 Audio Streaming Architecture & Migration Summary

The DJ mix player originally began in legacy WordPress with Dropbox-shared MP3 links via `DropboxMP3Player.js`. It was subsequently migrated directly to **AWS S3** (`clayton-the-chemist-dj-mixes.s3.us-west-2.amazonaws.com`), providing a robust, high-performance streaming architecture:

### Why AWS S3 is the Production Audio Engine
1. **Native HTTP Range Support**: AWS S3 inherently responds to `HTTP 206 Partial Content` (Range headers), enabling instant scrub and seek navigation within large 60–90 minute mix MP3s without lag or re-buffering.
2. **No File Size Gates**: Avoids the 100MB virus scan interstitial pages associated with Google Drive, eliminating the need for an intermediate server-side streaming proxy.
3. **High Throughput & Reliability**: Low latency, high bandwidth delivery across global client connections with persistent CORS headers.
4. **Clean Asset Separation**:
   - **Audio MP3s & Mix Artwork**: Hosted in AWS S3 (`src/data/djMixes.js`).
   - **Artist Photography & EPK Downloads**: Hosted via Google Drive shared folders (`src/data/claytonPhotos.js` and `ClaytonEPK.js`).

### S3 URL Builder Utility (`src/data/djMixes.js`)
URLs for both the audio stream and high-resolution cover artwork are generated dynamically using `buildMixUrls()`:

```javascript
const S3_BASE_URL = 'https://clayton-the-chemist-dj-mixes.s3.us-west-2.amazonaws.com';

export function buildMixUrls(folderName, mixName, options = {}) {
  const encodedFolder = encodeURIComponent(folderName);
  const encodedMp3 = encodeURIComponent(options.mp3Name || `Clayton the Chemist - ${mixName}.mp3`);
  const encodedArtwork = encodeURIComponent(options.artworkName || `Clayton the Chemist - ${mixName}.${options.artworkExt || 'jpg'}`);
  return {
    mp3Url: `${S3_BASE_URL}/${encodedFolder}/${encodedMp3}`,
    artworkUrl: `${S3_BASE_URL}/${encodedFolder}/${encodedArtwork}`,
    downloadUrl: `${S3_BASE_URL}/${encodedFolder}/${encodedMp3}`
  };
}
```

---

## Next-Gen Audio Player Features (Roadmap)

With AWS S3 delivering stable audio streaming, upcoming player development focuses on enhanced listener experience:

- **Tracklist & Interactive Cue Points**: Time-coded tracklists where clicking any individual track seeks directly to that timestamp in the mix.
- **Waveform Visualization**: Interactive audio waveforms (e.g. via Web Audio API `AudioBuffer` or pre-calculated peak data) providing visual cues for breakdowns, drops, and transitions.
- **Direct Download Triggers**: Seamless client-side download triggers with sanitized filenames and clean `Content-Disposition`.
- **Enhanced Queue & Playlist Controls**: Continuous playback queue across genres with forward/back skip across mixes.
