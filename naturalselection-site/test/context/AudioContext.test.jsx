import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { AudioProvider, useAudio } from '@/context/AudioContext';

function TestAudioConsumer() {
  const {
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
    closePlayer,
  } = useAudio();

  return (
    <div>
      <span data-testid="track-title">{currentTrack?.mixTitle || 'no-track'}</span>
      <span data-testid="is-playing">{isPlaying ? 'playing' : 'paused'}</span>
      <span data-testid="is-loading">{isLoading ? 'loading' : 'idle'}</span>
      <span data-testid="current-time">{currentTime}</span>
      <span data-testid="duration">{duration}</span>
      <span data-testid="volume">{volume}</span>
      <span data-testid="is-muted">{isMuted ? 'muted' : 'unmuted'}</span>
      <span data-testid="playback-rate">{playbackRate}</span>
      <span data-testid="audio-error">{audioError ? 'error' : 'ok'}</span>

      <button
        onClick={() =>
          playTrack({
            id: 'track-1',
            mixTitle: 'Mix One',
            mp3Url: 'https://test.com/1.mp3',
            artworkUrl: 'https://test.com/1.jpg',
          })
        }
      >
        Play Track 1
      </button>
      <button onClick={() => playTrack({ id: 'track-2', mixTitle: 'Mix Two', mp3Url: 'https://test.com/2.mp3' })}>
        Play Track 2
      </button>
      <button onClick={pauseTrack}>Pause</button>
      <button onClick={togglePlayPause}>Toggle Play/Pause</button>
      <button onClick={() => seek(45)}>Seek 45s</button>
      <button onClick={() => seek(-10)}>Seek Negative</button>
      <button onClick={() => seek(9999)}>Seek Overflow</button>
      <button onClick={() => skip(10)}>Skip +10s</button>
      <button onClick={() => skip(-10)}>Skip -10s</button>
      <button onClick={() => setVolume(0.5)}>Set Vol 0.5</button>
      <button onClick={() => setVolume(-1)}>Set Vol Underflow</button>
      <button onClick={() => setVolume(2)}>Set Vol Overflow</button>
      <button onClick={() => setVolume(0)}>Set Vol 0</button>
      <button onClick={toggleMute}>Toggle Mute</button>
      <button onClick={() => setPlaybackRate(1.5)}>Set Rate 1.5</button>
      <button onClick={closePlayer}>Close Player</button>
    </div>
  );
}

describe('AudioContext & AudioProvider', () => {
  it('throws an error if useAudio is used outside AudioProvider', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<TestAudioConsumer />)).toThrow(
      'useAudio must be used within an AudioProvider'
    );
    consoleError.mockRestore();
  });

  it('renders initial state with no active track', () => {
    render(
      <AudioProvider>
        <TestAudioConsumer />
      </AudioProvider>
    );

    expect(screen.getByTestId('track-title').textContent).toBe('no-track');
    expect(screen.getByTestId('is-playing').textContent).toBe('paused');
    expect(screen.getByTestId('volume').textContent).toBe('0.8');
    expect(screen.getByTestId('playback-rate').textContent).toBe('1');
    expect(screen.getByTestId('audio-error').textContent).toBe('ok');
  });

  it('plays a new track and updates audio element src', () => {
    const { container } = render(
      <AudioProvider>
        <TestAudioConsumer />
      </AudioProvider>
    );

    const audioElement = container.querySelector('audio');
    expect(audioElement).toBeInTheDocument();

    act(() => {
      screen.getByText('Play Track 1').click();
    });

    expect(screen.getByTestId('track-title').textContent).toBe('Mix One');
    expect(audioElement.src).toBe('https://test.com/1.mp3');

    // Playing same track resumes without error
    act(() => {
      screen.getByText('Play Track 1').click();
    });
  });

  it('handles pause and resume via togglePlayPause', () => {
    render(
      <AudioProvider>
        <TestAudioConsumer />
      </AudioProvider>
    );

    act(() => {
      screen.getByText('Play Track 1').click();
    });

    act(() => {
      screen.getByText('Pause').click();
    });

    act(() => {
      screen.getByText('Toggle Play/Pause').click();
    });
  });

  it('handles volume changes and muting logic with clamping', () => {
    const { container } = render(
      <AudioProvider>
        <TestAudioConsumer />
      </AudioProvider>
    );
    const audio = container.querySelector('audio');

    act(() => {
      screen.getByText('Set Vol 0.5').click();
    });
    expect(screen.getByTestId('volume').textContent).toBe('0.5');
    expect(audio.volume).toBe(0.5);

    // Clamping overflow
    act(() => {
      screen.getByText('Set Vol Overflow').click();
    });
    expect(audio.volume).toBe(1);

    // Clamping underflow
    act(() => {
      screen.getByText('Set Vol Underflow').click();
    });
    expect(audio.volume).toBe(0);

    // Setting volume to 0 should automatically mute
    act(() => {
      screen.getByText('Set Vol 0').click();
    });
    expect(screen.getByTestId('is-muted').textContent).toBe('muted');

    // Toggle mute back
    act(() => {
      screen.getByText('Toggle Mute').click();
    });
    expect(screen.getByTestId('is-muted').textContent).toBe('unmuted');
  });

  it('handles playback rate changes', () => {
    const { container } = render(
      <AudioProvider>
        <TestAudioConsumer />
      </AudioProvider>
    );
    const audio = container.querySelector('audio');

    act(() => {
      screen.getByText('Set Rate 1.5').click();
    });
    expect(screen.getByTestId('playback-rate').textContent).toBe('1.5');
    expect(audio.playbackRate).toBe(1.5);
  });

  it('handles seek and skip with boundary clamping', () => {
    const { container } = render(
      <AudioProvider>
        <TestAudioConsumer />
      </AudioProvider>
    );
    const audio = container.querySelector('audio');

    act(() => {
      screen.getByText('Play Track 1').click();
    });

    // Simulate loaded metadata with duration
    Object.defineProperty(audio, 'duration', { value: 100, configurable: true });
    act(() => {
      audio.dispatchEvent(new Event('loadedmetadata'));
    });
    expect(screen.getByTestId('duration').textContent).toBe('100');

    // Seek to 45
    act(() => {
      screen.getByText('Seek 45s').click();
    });
    expect(audio.currentTime).toBe(45);
    expect(screen.getByTestId('current-time').textContent).toBe('45');

    // Seek clamped to 0
    act(() => {
      screen.getByText('Seek Negative').click();
    });
    expect(audio.currentTime).toBe(0);

    // Seek clamped to duration 100
    act(() => {
      screen.getByText('Seek Overflow').click();
    });
    expect(audio.currentTime).toBe(100);

    // Skip +10s
    act(() => {
      screen.getByText('Skip -10s').click();
    });
    expect(audio.currentTime).toBe(90);
  });

  it('handles audio element lifecycle events (waiting, canplay, timeupdate, ended, error)', () => {
    const { container } = render(
      <AudioProvider>
        <TestAudioConsumer />
      </AudioProvider>
    );
    const audio = container.querySelector('audio');

    act(() => {
      screen.getByText('Play Track 1').click();
    });

    // waiting
    act(() => {
      audio.dispatchEvent(new Event('waiting'));
    });
    expect(screen.getByTestId('is-loading').textContent).toBe('loading');

    // canplay
    act(() => {
      audio.dispatchEvent(new Event('canplay'));
    });
    expect(screen.getByTestId('is-loading').textContent).toBe('idle');

    // timeupdate
    Object.defineProperty(audio, 'currentTime', { value: 24, configurable: true });
    act(() => {
      audio.dispatchEvent(new Event('timeupdate'));
    });
    expect(screen.getByTestId('current-time').textContent).toBe('24');

    // ended
    act(() => {
      audio.dispatchEvent(new Event('ended'));
    });
    expect(screen.getByTestId('is-playing').textContent).toBe('paused');
    expect(screen.getByTestId('current-time').textContent).toBe('0');

    // error
    act(() => {
      audio.dispatchEvent(new Event('error'));
    });
    expect(screen.getByTestId('audio-error').textContent).toBe('error');
    expect(screen.getByTestId('is-loading').textContent).toBe('idle');
  });

  it('triggers MediaSession action handlers', () => {
    const handlers = {};
    if (typeof navigator !== 'undefined' && navigator.mediaSession) {
      navigator.mediaSession.setActionHandler = vi.fn((action, handler) => {
        handlers[action] = handler;
      });
    }

    render(
      <AudioProvider>
        <TestAudioConsumer />
      </AudioProvider>
    );

    act(() => {
      screen.getByText('Play Track 1').click();
    });

    act(() => {
      if (handlers.play) handlers.play();
      if (handlers.pause) handlers.pause();
      if (handlers.seekbackward) handlers.seekbackward();
      if (handlers.seekforward) handlers.seekforward();
    });
  });

  it('closes player and resets state on closePlayer', () => {
    const { container } = render(
      <AudioProvider>
        <TestAudioConsumer />
      </AudioProvider>
    );
    const audio = container.querySelector('audio');

    act(() => {
      screen.getByText('Play Track 1').click();
    });
    expect(screen.getByTestId('track-title').textContent).toBe('Mix One');

    act(() => {
      screen.getByText('Close Player').click();
    });

    expect(screen.getByTestId('track-title').textContent).toBe('no-track');
    expect(screen.getByTestId('current-time').textContent).toBe('0');
    expect(screen.getByTestId('is-playing').textContent).toBe('paused');
    expect(audio.getAttribute('src')).toBeNull();
  });
});
