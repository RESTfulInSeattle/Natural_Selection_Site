'use client';

export default function ClaytonVideos() {
  const playlistId = 'PL5D7pwtwDqm59Fnb1ZsiniikD0S-LkyXe';
  const playlistUrl = `https://youtube.com/playlist?list=${playlistId}`;
  const embedUrl = `https://www.youtube.com/embed/videoseries?list=${playlistId}`;

  return (
    <div className="theme-card rounded-2xl p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 pb-4 border-b border-slate-200/80 dark:border-slate-800 gap-4">
        <div>
          <h3 className="text-2xl font-bold theme-heading tracking-tight flex items-center gap-2">
            <span>📺</span> Clayton The Chemist Video Series
          </h3>
          <p className="text-sm theme-muted mt-1">
            Live DJ performances, mixes, and video sessions on YouTube
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-xl text-sm font-semibold transition-colors duration-200 flex items-center gap-2 shadow-md shadow-red-950/20"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            <span>Open on YouTube</span>
          </a>
        </div>
      </div>

      {/* Embedded YouTube Playlist Player */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-xl border border-slate-200 dark:border-slate-800">
        <iframe
          className="w-full h-full"
          src={embedUrl}
          title="Clayton The Chemist YouTube Playlist"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>

      {/* Additional Channel Info */}
      <div className="mt-6 p-4 rounded-xl theme-card-subtle border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h4 className="theme-heading font-semibold text-sm sm:text-base">
            Subscribe to Clayton The Chemist on YouTube
          </h4>
          <p className="theme-muted text-xs sm:text-sm mt-0.5">
            Never miss upcoming livestream sets, music videos, and behind-the-decks footage.
          </p>
        </div>
        <a
          href="https://www.youtube.com/claytonthechemist?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-slate-300 dark:border-slate-700 hover:border-red-500 theme-heading rounded-xl text-xs sm:text-sm font-medium transition-colors whitespace-nowrap"
        >
          Subscribe Channel
        </a>
      </div>
    </div>
  );
}
