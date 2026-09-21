'use client';

import { useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAudio } from '@/context/AudioContext';

export default function NavbarTransport() {
  const {
    currentTrack,
    isPlaying,
    isLoading,
    currentTime,
    duration,
    volume,
    isMuted,
    audioError,
    togglePlayPause,
    seek,
    skip,
    toggleMute,
    closePlayer,
  } = useAudio();

  const progressBarRef = useRef(null);

  const formatTime = useCallback((timeInSeconds) => {
    if (isNaN(timeInSeconds) || timeInSeconds === null) return '0:00';
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, []);

  const handleSeek = (e) => {
    if (!progressBarRef.current || !duration) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const seekTime = (clickX / rect.width) * duration;
    seek(seekTime);
  };

  if (!currentTrack) return null;

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div 
      className="flex items-center gap-1.5 sm:gap-2.5 px-2 sm:px-3 py-1 rounded-full bg-slate-100/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-emerald-500/30 shadow-sm backdrop-blur-md min-w-0 max-w-[210px] xs:max-w-[260px] sm:max-w-md md:max-w-sm lg:max-w-lg xl:max-w-xl transition-all duration-200"
      role="region"
      aria-label="Audio Transport Controls"
    >
      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        disabled={isLoading || audioError}
        className="w-7 h-7 sm:w-8 sm:h-8 gradient-accent rounded-full flex items-center justify-center text-white shrink-0 shadow-xs hover:scale-105 active:scale-95 disabled:opacity-50 transition-transform duration-150"
        title={audioError ? 'Audio Error' : isPlaying ? 'Pause' : 'Play'}
        aria-label={isPlaying ? 'Pause mix' : 'Play mix'}
      >
        {isLoading && !audioError ? (
          <div className="animate-spin rounded-full h-3 w-3 border-2 border-white border-t-transparent"></div>
        ) : isPlaying ? (
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0v-12a.75.75 0 01.75-.75zm10.5 0a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0v-12a.75.75 0 01.75-.75z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {/* Rewind 10s (Hidden on small mobile) */}
      <button
        onClick={() => skip(-10)}
        disabled={audioError || !duration}
        className="hidden sm:inline-flex p-1 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300 disabled:opacity-30 transition-colors shrink-0"
        title="Rewind 10 seconds"
        aria-label="Rewind 10 seconds"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.334 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
        </svg>
      </button>

      {/* Track info & link back to player */}
      <Link
        href="/clayton-the-chemist#dj-mixes"
        className="flex items-center gap-1.5 min-w-0 max-w-[120px] sm:max-w-[140px] md:max-w-[160px] group text-left shrink"
        title={`Playing: ${currentTrack.mixTitle} — Click to view in DJ Mixes`}
      >
        {/* Tiny artwork thumbnail */}
        {currentTrack.artworkUrl && (
          <div className="relative w-6 h-6 rounded-md overflow-hidden shrink-0 bg-slate-200 dark:bg-slate-800 border border-slate-300/60 dark:border-slate-700/60 hidden md:block">
            <Image
              src={currentTrack.artworkUrl}
              alt=""
              fill
              sizes="24px"
              className="object-cover"
            />
          </div>
        )}

        <div className="min-w-0">
          <div className="flex items-center gap-1">
            {/* Animated sound wave bars when playing */}
            {isPlaying && (
              <span className="flex items-end gap-0.5 h-2.5 shrink-0" aria-hidden="true">
                <span className="w-0.5 bg-emerald-500 rounded-full animate-pulse h-2"></span>
                <span className="w-0.5 bg-teal-400 rounded-full animate-pulse h-3"></span>
                <span className="w-0.5 bg-sky-400 rounded-full animate-pulse h-1.5"></span>
              </span>
            )}
            <span className="text-xs font-semibold theme-heading truncate group-hover:text-emerald-500 transition-colors block leading-tight">
              {currentTrack.mixTitle}
            </span>
          </div>
          <span className="text-[10px] theme-muted truncate block leading-none">
            {currentTrack.genre || currentTrack.artistName || 'DJ Mix'}
          </span>
        </div>
      </Link>

      {/* Forward 10s (Hidden on small mobile) */}
      <button
        onClick={() => skip(10)}
        disabled={audioError || !duration}
        className="hidden sm:inline-flex p-1 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300 disabled:opacity-30 transition-colors shrink-0"
        title="Forward 10 seconds"
        aria-label="Forward 10 seconds"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
        </svg>
      </button>

      {/* Scrubber & Time (Visible on tablets & desktop) */}
      <div className="hidden sm:flex items-center gap-1.5 flex-1 min-w-[80px] lg:min-w-[140px]">
        <div
          ref={progressBarRef}
          onClick={handleSeek}
          className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5 cursor-pointer relative group overflow-hidden"
          title="Click to seek"
          role="slider"
          aria-label="Playback time"
          aria-valuemin="0"
          aria-valuemax={duration || 0}
          aria-valuenow={currentTime}
        >
          <div
            className="gradient-accent h-full rounded-full transition-all duration-75 relative"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="text-[10px] font-mono theme-muted tabular-nums shrink-0 whitespace-nowrap">
          {formatTime(currentTime)}
        </span>
      </div>

      {/* Mute/Volume Toggle (Visible on lg screens) */}
      <button
        onClick={toggleMute}
        className="hidden lg:inline-flex p-1 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors shrink-0"
        title={isMuted || volume === 0 ? 'Unmute' : 'Mute'}
        aria-label={isMuted || volume === 0 ? 'Unmute' : 'Mute'}
      >
        {isMuted || volume === 0 ? (
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>

      {/* Dismiss / Close Player Button */}
      <button
        onClick={closePlayer}
        className="p-1 text-slate-400 hover:text-red-500 dark:hover:text-red-400 rounded-full transition-colors shrink-0 ml-0.5"
        title="Close Player"
        aria-label="Close audio player"
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
