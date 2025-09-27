// Music Player Components for various streaming platforms

// Mixcloud Player Component
export function MixcloudPlayer({ url, title, height = "120" }) {
  // Extract username and mix key from URL if needed
  const getEmbedUrl = (url) => {
    if (url.includes('mixcloud.com')) {
      return url.replace('mixcloud.com', 'mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=');
    }
    return `https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=${url}`;
  };

  return (
    <div className="w-full">
      <div className="bg-gray-900 rounded-lg p-4 shadow-lg">
        <h3 className="text-white font-semibold mb-3 text-center">{title}</h3>
        <iframe 
          width="100%" 
          height={height}
          src={getEmbedUrl(url)}
          frameBorder="0"
          allow="autoplay"
          className="rounded"
        />
      </div>
    </div>
  );
}

// SoundCloud Player Component
export function SoundCloudPlayer({ trackId, playlistId, title, height = "166" }) {
  const embedUrl = playlistId 
    ? `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${playlistId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`
    : `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`;

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 shadow-lg">
        {title && <h3 className="text-gray-800 font-semibold mb-3 text-center">{title}</h3>}
        <iframe 
          width="100%" 
          height={height}
          scrolling="no" 
          frameBorder="no" 
          allow="autoplay"
          src={embedUrl}
          className="rounded"
        />
      </div>
    </div>
  );
}

// Spotify Player Component
export function SpotifyPlayer({ albumId, trackId, playlistId, title, height = "352" }) {
  let embedUrl = '';
  
  if (albumId) {
    embedUrl = `https://open.spotify.com/embed/album/${albumId}?utm_source=generator&theme=0`;
  } else if (trackId) {
    embedUrl = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`;
  } else if (playlistId) {
    embedUrl = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`;
  }

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 shadow-lg">
        {title && <h3 className="text-gray-800 font-semibold mb-3 text-center">{title}</h3>}
        <iframe 
          src={embedUrl}
          width="100%" 
          height={height}
          frameBorder="0" 
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
          className="rounded"
        />
      </div>
    </div>
  );
}

// Apple Music Player Component
export function AppleMusicPlayer({ albumId, trackId, title, height = "450" }) {
  const embedUrl = albumId 
    ? `https://embed.music.apple.com/us/album/${albumId}`
    : `https://embed.music.apple.com/us/song/${trackId}`;

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 shadow-lg">
        {title && <h3 className="text-gray-800 font-semibold mb-3 text-center">{title}</h3>}
        <iframe 
          src={embedUrl}
          height={height}
          width="100%"
          frameBorder="0" 
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          className="rounded"
        />
      </div>
    </div>
  );
}

// Combined Music Section Component for multiple platforms
export function MusicSection({ title, children, className = "" }) {
  return (
    <div className={`mb-8 ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-6 text-center text-gray-300">{title}</h2>}
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
}

// Responsive Grid for Multiple Players
export function MusicGrid({ children, cols = 1 }) {
  const gridClass = cols === 2 ? "grid md:grid-cols-2 gap-6" : "space-y-6";
  
  return (
    <div className={gridClass}>
      {children}
    </div>
  );
}