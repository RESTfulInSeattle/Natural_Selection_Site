'use client';

import { useState } from 'react';
import { SoundCloudPlayer } from '@/components/MusicPlayers';

export default function ClaytonReleases() {
  const [activePlatform, setActivePlatform] = useState('all');

  const platforms = [
    { id: 'all', label: 'All Platforms', icon: '💿' },
    { id: 'spotify', label: 'Spotify', icon: '🎵' },
    { id: 'apple', label: 'Apple Music', icon: '🍎' },
    { id: 'soundcloud', label: 'SoundCloud', icon: '☁️' },
  ];

  return (
    <div className="theme-card rounded-2xl p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 pb-4 border-b border-slate-200/80 dark:border-slate-800 gap-4">
        <div>
          <h3 className="text-2xl font-bold theme-heading tracking-tight flex items-center gap-2">
            <span>🎵</span> Releases & Streaming
          </h3>
          <p className="text-sm theme-muted mt-1">
            Original productions, EPs, edits, and remixes across major streaming platforms
          </p>
        </div>

        {/* Platform Filter Buttons */}
        <div className="flex flex-wrap gap-1.5 bg-slate-100 dark:bg-slate-900/80 p-1.5 rounded-xl border border-slate-200 dark:border-emerald-500/20">
          {platforms.map((p) => {
            const isActive = activePlatform === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActivePlatform(p.id)}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'gradient-accent text-white shadow-md shadow-emerald-950/20'
                    : 'theme-muted hover:theme-heading hover:bg-white dark:hover:bg-slate-800'
                }`}
              >
                <span>{p.icon}</span>
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-8">
        {/* Spotify Section */}
        {(activePlatform === 'all' || activePlatform === 'spotify') && (
          <div className="theme-card-subtle rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">🎵</span>
                <div>
                  <h4 className="theme-heading font-bold text-lg">Spotify</h4>
                  <p className="text-xs theme-muted">Stream artist catalog and latest releases</p>
                </div>
              </div>
              <a
                href="https://open.spotify.com/artist/5JakVmGiAB3D9RRqkXn2PZ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline font-semibold flex items-center gap-1 transition-colors"
              >
                <span>Open Spotify</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/artist/5JakVmGiAB3D9RRqkXn2PZ?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Clayton The Chemist on Spotify"
            />
          </div>
        )}

        {/* Apple Music Section */}
        {(activePlatform === 'all' || activePlatform === 'apple') && (
          <div className="theme-card-subtle rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">🍎</span>
                <div>
                  <h4 className="theme-heading font-bold text-lg">Apple Music</h4>
                  <p className="text-xs theme-muted">Listen in lossless audio on Apple Music</p>
                </div>
              </div>
              <a
                href="https://music.apple.com/us/artist/clayton-the-chemist/942054999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-pink-600 dark:text-pink-400 hover:underline font-semibold flex items-center gap-1 transition-colors"
              >
                <span>Open Apple Music</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <iframe
              src="https://embed.music.apple.com/us/artist/clayton-the-chemist/942054999"
              height="450"
              width="100%"
              frameBorder="0"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              className="rounded-xl w-full"
              title="Clayton The Chemist on Apple Music"
            />
          </div>
        )}

        {/* SoundCloud Section */}
        {(activePlatform === 'all' || activePlatform === 'soundcloud') && (
          <div className="theme-card-subtle rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">☁️</span>
                <div>
                  <h4 className="theme-heading font-bold text-lg">SoundCloud</h4>
                  <p className="text-xs theme-muted">Original compositions, EPs, and exclusive remixes</p>
                </div>
              </div>
              <a
                href="https://soundcloud.com/claytonthechemist"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-orange-600 dark:text-orange-400 hover:underline font-semibold flex items-center gap-1 transition-colors"
              >
                <span>Follow on SoundCloud</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Introspectral EP */}
            <div className="p-5 rounded-xl theme-card border border-slate-200 dark:border-slate-800">
              <div className="mb-3">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/25">
                  Featured EP
                </span>
                <h5 className="theme-heading font-semibold text-base mt-2">Introspectral EP (2023)</h5>
                <p className="text-xs theme-muted">Clayton&apos;s full-length 2023 EP release</p>
              </div>
              <iframe
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1614946756&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                className="rounded-lg"
                title="Introspectral EP on SoundCloud"
              />
            </div>

            {/* Original Songs */}
            <div className="p-5 rounded-xl theme-card border border-slate-200 dark:border-slate-800">
              <div className="mb-3">
                <h5 className="theme-heading font-semibold text-base">Original Songs</h5>
                <p className="text-xs theme-muted">Collection of original productions and tracks</p>
              </div>
              <SoundCloudPlayer
                playlistId="19050410"
                title="Original Compositions"
                height="380"
              />
            </div>

            {/* Remixes and Edits */}
            <div className="p-5 rounded-xl theme-card border border-slate-200 dark:border-slate-800">
              <div className="mb-3">
                <h5 className="theme-heading font-semibold text-base">Remixes & Edits</h5>
                <p className="text-xs theme-muted">Remixes, bootlegs, and reimagined tracks</p>
              </div>
              <SoundCloudPlayer
                playlistId="527718"
                title="Remixes & Edits"
                height="380"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
