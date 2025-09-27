# Music Players Documentation

## Overview
The MusicPlayers.js component provides reusable music player components for various streaming platforms. All players are responsive and styled to match your site's design.

## Available Players

### 1. MixcloudPlayer
**Usage:**
```jsx
<MixcloudPlayer 
  url="/your-username/your-mix-name/"
  title="Mix Title"
  height="120" // optional, default: "120"
/>
```

**To update your Mixcloud URLs:**
1. Go to your Mixcloud page (e.g., mixcloud.com/naturalselection-seattle/)
2. Find the specific mix URL path (e.g., `/naturalselection-seattle/winchester-goose-set/`)
3. Update the `url` prop in the dj-services/page.js file

### 2. SoundCloudPlayer
**Usage:**
```jsx
{/* For playlists */}
<SoundCloudPlayer 
  playlistId="296341"
  title="Playlist Title"
  height="166" // optional, default: "166"
/>

{/* For individual tracks */}
<SoundCloudPlayer 
  trackId="123456789"
  title="Track Title"
/>
```

**To get SoundCloud IDs:**
1. Go to your SoundCloud playlist/track
2. Look at the URL or use browser dev tools to find the embed code
3. Extract the ID from the API URL

### 3. SpotifyPlayer
**Usage:**
```jsx
{/* For albums */}
<SpotifyPlayer 
  albumId="35mVsGO3cS1LAL0PlwfIkg"
  title="Album Title"
  height="352" // optional, default: "352"
/>

{/* For individual tracks */}
<SpotifyPlayer 
  trackId="track-id-here"
  title="Track Title"
/>

{/* For playlists */}
<SpotifyPlayer 
  playlistId="playlist-id-here"
  title="Playlist Title"
/>
```

**To get Spotify IDs:**
1. Go to Spotify Web Player
2. Right-click on album/track/playlist → Share → Copy Spotify URI
3. Extract the ID from the URI (e.g., spotify:album:35mVsGO3cS1LAL0PlwfIkg)

### 4. AppleMusicPlayer
**Usage:**
```jsx
{/* For albums */}
<AppleMusicPlayer 
  albumId="49523137"
  title="Album Title"
  height="450" // optional, default: "450"
/>

{/* For individual tracks */}
<AppleMusicPlayer 
  trackId="track-id-here"
  title="Track Title"
/>
```

**To get Apple Music IDs:**
1. Go to Apple Music web player or iTunes
2. Find the album/track URL
3. Extract the ID from the URL

## Current Implementation

### Music Page (/music)
- **The Soul Purpose**: SoundCloud playlist (296341), Spotify album (35mVsGO3cS1LAL0PlwfIkg), Apple Music (49523137)
- **Songs from the Soul City**: SoundCloud playlist (300979), Spotify album (2HI8vZKInuaab67WDTtidl), Apple Music (256424222)

### DJ Services Page (/dj-services)
- Mixcloud players for various DJ sets
- All use placeholder URLs that need to be updated with your actual Mixcloud paths

### Clayton the Chemist Page (/clayton-the-chemist)
- **Original Songs**: SoundCloud playlist (19050410)
- **Remixes and Edits**: SoundCloud playlist (527718)

## Customization Tips

1. **Update Real URLs**: Replace placeholder IDs with your actual platform IDs
2. **Adjust Heights**: Modify the height prop for different player sizes
3. **Add More Players**: Use the components in any other pages as needed
4. **Styling**: Players inherit the site's gradient and color scheme automatically

## Testing
All players are tested and build successfully. They are responsive and will work across desktop and mobile devices.

## Next Steps
1. Replace placeholder IDs with your actual music platform IDs
2. Test each player to ensure audio content loads correctly
3. Add more tracks/albums as needed using the same components