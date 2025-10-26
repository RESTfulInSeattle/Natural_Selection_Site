'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export function DropboxMP3Player({
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
  const [artworkError, setArtworkError] = useState(false);
  const [audioError, setAudioError] = useState(false);

  const audioEl = useRef(null);

  // expose audio element to parent
  useEffect(() => {
    if (audioRef && audioEl.current) {
      audioRef(audioEl.current);
    }
  }, [audioRef]);

  // wire audio events + safer error logging
  useEffect(() => {
    const audio = audioEl.current;
    if (!audio) return;

    const codeName = { 1: 'ABORTED', 2: 'NETWORK', 3: 'DECODE', 4: 'SRC_NOT_SUPPORTED', 5: 'ENCRYPTED' };

    const handleLoadStart = () => { setIsLoading(true); setAudioError(false); };
    const handleCanPlay = () => setIsLoading(false);
    const handleLoadedMeta = () => { setDuration(audio.duration || 0); setIsLoading(false); };
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime || 0);
    const handleEnded = () => setIsPlaying(false);
    const handlePlayEvent = () => { setIsPlaying(true); onPlay?.(); };
    const handlePause = () => setIsPlaying(false);
    const handleError = (e) => {
      const mediaErr = audio.error || e?.target?.error || e?.currentTarget?.error;
      if (mediaErr?.code) {
        console.warn('Audio error:', { code: mediaErr.code, name: codeName[mediaErr.code] || 'UNKNOWN', src: audio.currentSrc || mp3Url });
      }
      setIsLoading(false);
      setIsPlaying(false);
      setAudioError(true);
    };
    const handleStalled = () => setIsLoading(true);
    const handleWaiting = () => setIsLoading(true);

    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadedmetadata', handleLoadedMeta);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('play', handlePlayEvent);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);
    audio.addEventListener('stalled', handleStalled);
    audio.addEventListener('waiting', handleWaiting);

    audio.preload = 'metadata';
    audio.crossOrigin = 'anonymous';

    return () => {
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadedmetadata', handleLoadedMeta);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('play', handlePlayEvent);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('stalled', handleStalled);
      audio.removeEventListener('waiting', handleWaiting);
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
      console.warn('Playback error:', err?.name || err);
      setIsLoading(false);
      if (err?.name === 'NotAllowedError') {
        alert('Please tap the play button to start audio playback');
      } else if (err?.name === 'NotSupportedError') {
        setAudioError(true);
        alert('This audio format is not supported on your device');
      }
    }
  };

  const handleSeek = (e) => {
    const audio = audioEl.current;
    if (!audio || !duration || audioError) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioEl.current) audioEl.current.volume = v;
  };

  const formatTime = (s) => {
    if (isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = downloadUrl || mp3Url;
    a.download = `${mixTitle}.mp3`;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
      {/* 2-column top row; controls span both below (good for iPhone portrait) */}
      <div className="grid grid-cols-[88px,1fr] sm:grid-cols-[96px,1fr] gap-3 sm:gap-4">
        {/* Artwork (left) */}
        <div className="relative">
          {!artworkError ? (
            <Image
              src={artworkUrl}
              alt={`${mixTitle} artwork`}
              width={96}
              height={96}
              className="w-22 h-22 sm:w-24 sm:h-24 rounded-lg shadow-md hover:shadow-lg object-cover transition-shadow duration-200"
              onError={() => setArtworkError(true)}
              priority={false}
              loading="lazy"
            />
          ) : (
            <div className="w-22 h-22 sm:w-24 sm:h-24 bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-gray-400 text-xs text-center">🎵<br />Artwork<br />Loading</div>
            </div>
          )}

          {isLoading && !audioError && (
            <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
          )}

          {audioError && (
            <div className="absolute inset-0 bg-red-900/50 rounded-lg flex items-center justify-center">
              <div className="text-white text-xs text-center">⚠️<br />Error</div>
            </div>
          )}
        </div>

        {/* Text info (right) */}
        <div className="min-w-0">
          <h4 className="text-white font-semibold text-base sm:text-lg truncate">{mixTitle}</h4>
          <p className="text-gray-400 text-sm truncate">{artistName}</p>
          {description && (
            <p className="text-gray-500 text-xs mt-1 line-clamp-2">{description}</p>
          )}
          {audioError && (
            <p className="text-red-400 text-xs mt-1">⚠️ Audio failed to load</p>
          )}
        </div>

        {/* Transport + progress (full width below) */}
        <div className="col-span-2 mt-2">
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={togglePlayPause}
              disabled={isLoading || audioError}
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              title={audioError ? 'Audio failed to load' : isPlaying ? 'Pause' : 'Play'}
            >
              {isLoading && !audioError ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              ) : isPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="w-10 h-10 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              title="Download Mix"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <div className="hidden sm:flex items-center gap-2 flex-grow max-w-24">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 010 1.414A5.98 5.98 0 0118 12a5.98 5.98 0 01-2.343 4.243 1 1 0 01-1.414-1.414A3.98 3.98 0 0016 12a3.98 3.98 0 00-1.757-3.829 1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="flex-grow h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="text-gray-400 text-sm font-mono whitespace-nowrap">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          <div
            className="mt-2 w-full bg-gray-600 rounded-full h-2 cursor-pointer hover:bg-gray-500 transition-colors duration-200"
            onClick={handleSeek}
          >
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-100 ease-out"
              style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }}
            />
          </div>
        </div>
      </div>

      <audio ref={audioEl} src={mp3Url} preload="metadata" crossOrigin="anonymous" className="hidden" />
    </div>
  );
}