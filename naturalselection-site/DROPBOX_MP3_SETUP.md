# Dropbox MP3 Player Setup Guide

## Getting Your Dropbox URLs

### 1. For MP3 Files (Audio Streaming)
1. Upload your MP3 file to Dropbox
2. Get the shareable link (Right-click → Share → Copy Link)
3. Convert the link format:
   - Original: `https://www.dropbox.com/s/abc123/mix.mp3?dl=0`
   - For Streaming: `https://www.dropbox.com/s/abc123/mix.mp3?dl=1`
   - **Change `?dl=0` to `?dl=1`**

### 2. For Artwork Images
1. Upload your artwork image (JPG/PNG) to Dropbox
2. Get the shareable link
3. Convert the link format:
   - Original: `https://www.dropbox.com/s/xyz456/artwork.jpg?dl=0`
   - For Display: `https://dl.dropboxusercontent.com/s/xyz456/artwork.jpg`
   - **Replace `www.dropbox.com` with `dl.dropboxusercontent.com` and remove `?dl=0`**

### 3. For Download Links
- Use the original Dropbox link with `?dl=1`
- This will force download when clicked

## Example Usage

```jsx
<DropboxMP3Player
  mixTitle="Winchester Goose Set"
  artistName="Dave Clayton"
  mp3Url="https://www.dropbox.com/s/abc123/winchester-goose-set.mp3?dl=1"
  artworkUrl="https://dl.dropboxusercontent.com/s/xyz456/winchester-artwork.jpg"
  downloadUrl="https://www.dropbox.com/s/abc123/winchester-goose-set.mp3?dl=1"
  description="Deep house and electronic vibes from the Winchester Goose sessions"
/>
```

## Features

- ✅ **Square Artwork Display**: Shows mix artwork prominently
- ✅ **Full Audio Controls**: Play/pause, seek, volume control
- ✅ **Download Button**: Direct download from Dropbox
- ✅ **Progress Bar**: Visual playback progress with time display
- ✅ **Loading States**: Shows loading spinner while audio loads
- ✅ **Responsive Design**: Works on desktop and mobile
- ✅ **Professional Styling**: Dark theme with blue accents

## File Organization Tips

### Recommended Dropbox Folder Structure:
```
/DJ Mixes/
  /Audio/
    winchester-goose-set.mp3
    natural-selection-disco.mp3
    natural-selection-80s.mp3
  /Artwork/
    winchester-artwork.jpg
    disco-artwork.jpg
    80s-artwork.jpg
```

### Artwork Specifications:
- **Size**: 500x500px minimum (square format)
- **Format**: JPG or PNG
- **Quality**: High resolution for crisp display
- **File Size**: Under 2MB for fast loading

## Next Steps

1. Upload your MP3 files and artwork to Dropbox
2. Get the shareable links
3. Convert URLs using the format above
4. Replace the example data in your DJ Services page
5. Test the players to ensure they work correctly