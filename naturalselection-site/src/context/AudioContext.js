'use client';

import { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';

const AudioContext = createContext(null);

export function AudioProvider({ children }) {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRateState] = useState(1);
  const [audioError, setAudioError] = useState(false);

  const audioRef = useRef(null);

  // Play a specific track (or resume if already selected)
  const playTrack = useCallback((track) => {
    if (!audioRef.current) return;

    if (currentTrack && (currentTrack.mp3Url === track.mp3Url || (currentTrack.id && currentTrack.id === track.id))) {
      if (!isPlaying) {
        setIsLoading(true);
        audioRef.current.play().catch(() => {
          setIsLoading(false);
          setAudioError(true);
        });
      }
      return;
    }

    // New track
    setCurrentTrack(track);
    setAudioError(false);
    setIsLoading(true);
    setCurrentTime(0);
    setDuration(0);

    const audio = audioRef.current;
    audio.src = track.mp3Url;
    audio.playbackRate = playbackRate;
    audio.volume = isMuted ? 0 : volume;

    audio.play().catch((err) => {
      console.warn('Audio playback error:', err);
      setIsLoading(false);
      setAudioError(true);
    });
  }, [currentTrack, isPlaying, playbackRate, isMuted, volume]);

  const pauseTrack = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }, []);

  const togglePlayPause = useCallback(() => {
    if (!audioRef.current || !currentTrack) return;
    if (isPlaying) {
      pauseTrack();
    } else {
      setIsLoading(true);
      audioRef.current.play().catch(() => {
        setIsLoading(false);
        setAudioError(true);
      });
    }
  }, [currentTrack, isPlaying, pauseTrack]);

  const seek = useCallback((timeInSeconds) => {
    if (!audioRef.current || !duration) return;
    const clampedTime = Math.max(0, Math.min(timeInSeconds, duration));
    audioRef.current.currentTime = clampedTime;
    setCurrentTime(clampedTime);
  }, [duration]);

  const skip = useCallback((deltaSeconds) => {
    if (!audioRef.current || !duration) return;
    const newTime = Math.max(0, Math.min(audioRef.current.currentTime + deltaSeconds, duration));
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  }, [duration]);

  const setVolume = useCallback((newVolume) => {
    const clamped = Math.max(0, Math.min(newVolume, 1));
    setVolumeState(clamped);
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : clamped;
    }
    if (clamped === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = volume || 0.5;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  }, [isMuted, volume]);

  const setPlaybackRate = useCallback((rate) => {
    setPlaybackRateState(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  }, []);

  const closePlayer = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.removeAttribute('src');
      audioRef.current.load();
    }
    setCurrentTrack(null);
    setIsPlaying(false);
    setIsLoading(false);
    setCurrentTime(0);
    setDuration(0);
    setAudioError(false);
  }, []);

  // Set up audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
      setIsLoading(false);
      setAudioError(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime || 0);
    };

    const handleWaiting = () => {
      setIsLoading(true);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleError = () => {
      setIsLoading(false);
      setAudioError(true);
      setIsPlaying(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handlePlay = () => {
      setIsPlaying(true);
      setIsLoading(false);
      setAudioError(false);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('play', handlePlay);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
    };
  }, []);

  // Synchronize Media Session API for mobile lock screens and keyboard media controls
  useEffect(() => {
    if (typeof window === 'undefined' || !('mediaSession' in navigator) || !currentTrack) return;

    try {
      navigator.mediaSession.metadata = new window.MediaMetadata({
        title: currentTrack.mixTitle || 'DJ Mix',
        artist: currentTrack.artistName || 'Clayton The Chemist',
        album: 'Natural Selection DJ Mixes',
        artwork: currentTrack.artworkUrl
          ? [
              { src: currentTrack.artworkUrl, sizes: '512x512', type: 'image/jpeg' },
              { src: currentTrack.artworkUrl, sizes: '256x256', type: 'image/jpeg' }
            ]
          : []
      });

      navigator.mediaSession.setActionHandler('play', () => {
        if (audioRef.current) audioRef.current.play();
      });
      navigator.mediaSession.setActionHandler('pause', () => {
        if (audioRef.current) audioRef.current.pause();
      });
      navigator.mediaSession.setActionHandler('seekbackward', () => skip(-10));
      navigator.mediaSession.setActionHandler('seekforward', () => skip(10));
    } catch {
      // Ignore browsers that don't support specific action handlers
    }
  }, [currentTrack, skip]);

  const value = {
    currentTrack,
    isPlaying,
    isLoading,
    currentTime,
    duration,
    volume,
    isMuted,
    playbackRate,
    audioError,
    playTrack,
    pauseTrack,
    togglePlayPause,
    seek,
    skip,
    setVolume,
    toggleMute,
    setPlaybackRate,
    closePlayer
  };

  return (
    <AudioContext.Provider value={value}>
      {children}
      {/* Global persistent audio element */}
      <audio ref={audioRef} preload="metadata" className="hidden" />
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}
