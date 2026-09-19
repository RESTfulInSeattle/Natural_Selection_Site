'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

export function AudioPlayer({
  mixTitle,
  artistName,
  mp3Url,
  artworkUrl,
  downloadUrl,
  description,
  audioRef,
  onPlay
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [artworkError, setArtworkError] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [hoverTime, setHoverTime] = useState(null);
  const [hoverPosition, setHoverPosition] = useState(0);

  const audioEl = useRef(null);
  const progressBarRef = useRef(null);

  // Expose audio element to parent
  useEffect(() => {
    if (audioRef && audioEl.current) {
      audioRef(audioEl.current);
    }
  }, [audioRef]);

  // Format seconds to H:MM:SS or MM:SS
  const formatTime = useCallback((secs) => {
    if (isNaN(secs) || secs === Infinity || secs < 0) return '0:00';
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = Math.floor(secs % 60);

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, []);

  // Wire audio events
  useEffect(() => {
    const audio = audioEl.current;
    if (!audio) return;

    const handleLoadStart = () => { setIsLoading(true); setAudioError(false); };
    const handleCanPlay = () => setIsLoading(false);
    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
      setIsLoading(false);
    };
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime || 0);
    const handleEnded = () => setIsPlaying(false);
    const handlePlayEvent = () => {
      setIsPlaying(true);
      onPlay?.();
    };
    const handlePauseEvent = () => setIsPlaying(false);
    const handleErrorEvent = () => {
      setIsLoading(false);
      setIsPlaying(false);
      setAudioError(true);
    };
    const handleWaiting = () => setIsLoading(true);
    const handlePlaying = () => setIsLoading(false);

    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('play', handlePlayEvent);
    audio.addEventListener('pause', handlePauseEvent);
    audio.addEventListener('error', handleErrorEvent);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('playing', handlePlaying);

    audio.preload = 'metadata';

    return () => {
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('play', handlePlayEvent);
      audio.removeEventListener('pause', handlePauseEvent);
      audio.removeEventListener('error', handleErrorEvent);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('playing', handlePlaying);
    };
  }, [mp3Url, onPlay]);

  const togglePlayPause = async () => {
    const audio = audioEl.current;
    if (!audio || audioError) return;

    try {
      if (isPlaying) {
        audio.pause();
      } else {
        setIsLoading(true);
        await audio.play();
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      console.warn('Playback error:', err?.name || err);
      if (err?.name === 'NotAllowedError') {
        alert('Please click play to start audio playback');
      } else if (err?.name === 'NotSupportedError') {
        setAudioError(true);
      }
    }
  };

  const handleSkip = (seconds) => {
    const audio = audioEl.current;
    if (!audio || !duration || audioError) return;
    const newTime = Math.min(Math.max(audio.currentTime + seconds, 0), duration);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleSeek = (e) => {
    const audio = audioEl.current;
    if (!audio || !duration || audioError || !progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const newTime = (clickX / rect.width) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleMouseMove = (e) => {
    if (!duration || !progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const hoverX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const hoverSeconds = (hoverX / rect.width) * duration;
    setHoverTime(hoverSeconds);
    setHoverPosition(hoverX);
  };

  const handleMouseLeave = () => {
    setHoverTime(null);
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    setIsMuted(newVol === 0);
    if (audioEl.current) {
      audioEl.current.volume = newVol;
    }
  };

  const toggleMute = () => {
    if (!audioEl.current) return;
    if (isMuted) {
      audioEl.current.volume = volume || 0.5;
      setIsMuted(false);
    } else {
      audioEl.current.volume = 0;
      setIsMuted(true);
    }
  };

  const handleSpeedChange = () => {
    const speeds = [1, 1.25, 1.5];
    const nextIndex = (speeds.indexOf(playbackRate) + 1) % speeds.length;
    const nextSpeed = speeds[nextIndex];
    setPlaybackRate(nextSpeed);
    if (audioEl.current) {
      audioEl.current.playbackRate = nextSpeed;
    }
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-gray-900/90 backdrop-blur-md rounded-xl p-5 border border-gray-700/60 shadow-xl transition-all duration-200 hover:border-gray-600/80">
      {/* Top section: Artwork + Title + Description */}
      <div className="flex items-start gap-4">
        {/* Artwork */}
        <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden bg-gray-800 shadow-md">
          {!artworkError ? (
            <Image
              src={artworkUrl}
              alt={`${mixTitle} artwork`}
              fill
              sizes="(max-width: 640px) 96px, 112px"
              className="object-cover transition-transform duration-300 hover:scale-105"
              onError={() => setArtworkError(true)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 p-2 text-center text-xs">
              <span className="text-2xl mb-1">🎧</span>
              <span className="truncate w-full">{mixTitle}</span>
            </div>
          )}

          {isLoading && !audioError && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div className="animate-spin rounded-full h-7 w-7 border-2 border-blue-400 border-t-transparent"></div>
            </div>
          )}

          {audioError && (
            <div className="absolute inset-0 bg-red-950/80 flex flex-col items-center justify-center text-red-200 text-xs p-1 text-center">
              <span className="text-lg">⚠️</span>
              <span>Audio Error</span>
            </div>
          )}
        </div>

        {/* Text Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h4 className="text-white font-bold text-lg sm:text-xl truncate leading-snug">{mixTitle}</h4>
              <p className="text-blue-400 text-sm font-medium">{artistName}</p>
            </div>
            {/* Direct Download Button */}
            <a
              href={downloadUrl || mp3Url}
              download={`${mixTitle}.mp3`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-150"
              title="Download Mix (MP3)"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>

          {description && (
            <p className="text-gray-400 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}

          {audioError && (
            <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
              <span>⚠️</span> Audio stream unavailable. Please check back shortly.
            </p>
          )}
        </div>
      </div>

      {/* Controls & Progress Section */}
      <div className="mt-4 pt-4 border-t border-gray-800/80">
        {/* Timeline Scrubber */}
        <div className="relative mb-2">
          <div
            ref={progressBarRef}
            onClick={handleSeek}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full bg-gray-800 rounded-full h-2.5 cursor-pointer relative group overflow-hidden"
          >
            {/* Progress Fill */}
            <div
              className="bg-gradient-to-r from-blue-600 to-indigo-500 h-full rounded-full transition-all duration-75 relative"
              style={{ width: `${progressPercent}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>

          {/* Hover time tooltip */}
          {hoverTime !== null && (
            <div
              className="absolute -top-7 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-0.5 rounded shadow pointer-events-none font-mono"
              style={{ left: `${hoverPosition}px` }}
            >
              {formatTime(hoverTime)}
            </div>
          )}
        </div>

        {/* Transport buttons & Time */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          {/* Left: Play/Pause, Skips */}
          <div className="flex items-center gap-2">
            {/* Skip Back 10s */}
            <button
              onClick={() => handleSkip(-10)}
              disabled={audioError || !duration}
              className="p-2 text-gray-400 hover:text-white disabled:text-gray-600 transition-colors"
              title="Rewind 10s"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.334 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
              </svg>
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              disabled={isLoading || audioError}
              className="w-11 h-11 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-900/30 transition-all duration-200 hover:scale-105 active:scale-95"
              title={audioError ? 'Audio Error' : isPlaying ? 'Pause' : 'Play'}
            >
              {isLoading && !audioError ? (
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
              ) : isPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0v-12a.75.75 0 01.75-.75zm10.5 0a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0v-12a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                </svg>
              )}
            </button>

            {/* Skip Forward 10s */}
            <button
              onClick={() => handleSkip(10)}
              disabled={audioError || !duration}
              className="p-2 text-gray-400 hover:text-white disabled:text-gray-600 transition-colors"
              title="Forward 10s"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
              </svg>
            </button>

            {/* Current / Total Time */}
            <div className="text-gray-400 text-xs sm:text-sm font-mono ml-2 whitespace-nowrap">
              <span className="text-white font-medium">{formatTime(currentTime)}</span>
              <span className="mx-1 text-gray-600">/</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Right: Volume & Speed */}
          <div className="flex items-center gap-3">
            {/* Speed Selector */}
            <button
              onClick={handleSpeedChange}
              className="px-2 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded text-xs font-mono transition-colors"
              title="Playback Speed"
            >
              {playbackRate}x
            </button>

            {/* Volume Control */}
            <div className="flex items-center gap-1.5 group">
              <button
                onClick={toggleMute}
                className="p-1.5 text-gray-400 hover:text-white transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted || volume === 0 ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-16 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                title="Volume"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hidden HTML5 Audio Element */}
      <audio ref={audioEl} src={mp3Url} preload="metadata" className="hidden" />
    </div>
  );
}

// Backward-compatible alias for existing imports
export const DropboxMP3Player = AudioPlayer;
