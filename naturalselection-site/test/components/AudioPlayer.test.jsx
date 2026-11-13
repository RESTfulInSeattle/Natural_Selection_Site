import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { AudioPlayer } from '@/components/AudioPlayer';
import { AudioProvider, useAudio } from '@/context/AudioContext';

const sampleMix = {
  id: 'test-mix-1',
  mixTitle: 'Deep Grooves',
  artistName: 'Clayton The Chemist',
  mp3Url: 'https://test.com/mix.mp3',
  artworkUrl: 'https://test.com/art.jpg',
  downloadUrl: 'https://test.com/mix.mp3',
  description: 'Deep soulful house mix for testing.',
  genre: 'House',
};

function TestPlayerWrapper() {
  const { seek } = useAudio();
  return (
    <div>
      <AudioPlayer {...sampleMix} />
      <button onClick={() => seek(3700)}>Seek Past 1h</button>
    </div>
  );
}

describe('AudioPlayer card component', () => {
  it('renders track info, description, and artwork', () => {
    render(
      <AudioProvider>
        <AudioPlayer {...sampleMix} />
      </AudioProvider>
    );

    expect(screen.getByText('Deep Grooves')).toBeInTheDocument();
    expect(screen.getByText('Clayton The Chemist')).toBeInTheDocument();
    expect(screen.getByText('Deep soulful house mix for testing.')).toBeInTheDocument();
    const img = screen.getByAltText('Deep Grooves artwork');
    expect(img).toBeInTheDocument();
  });

  it('handles play toggle and fires optional onPlay callback', () => {
    const onPlay = vi.fn();

    render(
      <AudioProvider>
        <AudioPlayer {...sampleMix} onPlay={onPlay} />
      </AudioProvider>
    );

    const playBtn = screen.getByTitle('Play');
    expect(playBtn).toBeInTheDocument();

    act(() => {
      playBtn.click();
    });

    expect(onPlay).toHaveBeenCalledTimes(1);
    expect(screen.getByText('LIVE')).toBeInTheDocument();

    // Clicking pause when already playing
    const pauseBtn = screen.getByTitle('Pause');
    act(() => {
      pauseBtn.click();
    });
  });

  it('cycles playback speed when clicked on active card', () => {
    render(
      <AudioProvider>
        <AudioPlayer {...sampleMix} />
      </AudioProvider>
    );

    act(() => {
      screen.getByTitle('Play').click();
    });

    const speedBtn = screen.getByTitle('Playback Speed');
    expect(speedBtn).toBeInTheDocument();

    act(() => {
      speedBtn.click();
    });
    expect(speedBtn.textContent).toContain('1.25');

    act(() => {
      speedBtn.click();
    });
    expect(speedBtn.textContent).toContain('1.5');

    act(() => {
      speedBtn.click();
    });
    expect(speedBtn.textContent).toContain('1');
  });

  it('handles skip buttons (+10s and -10s)', () => {
    render(
      <AudioProvider>
        <AudioPlayer {...sampleMix} />
      </AudioProvider>
    );

    act(() => {
      screen.getByTitle('Play').click();
    });

    const skipForward = screen.getByTitle('Forward 10s');
    const skipBack = screen.getByTitle('Rewind 10s');

    act(() => {
      skipForward.click();
    });
    act(() => {
      skipBack.click();
    });
  });

  it('handles volume slider and mute toggle', () => {
    const { container } = render(
      <AudioProvider>
        <AudioPlayer {...sampleMix} />
      </AudioProvider>
    );

    act(() => {
      screen.getByTitle('Play').click();
    });

    // Volume input range
    const volumeSlider = container.querySelector('input[type="range"]');
    if (volumeSlider) {
      fireEvent.change(volumeSlider, { target: { value: '0.4' } });
    }

    // Mute toggle
    const muteBtn = screen.getByTitle(/Mute|Unmute/i);
    act(() => {
      muteBtn.click();
    });
    act(() => {
      muteBtn.click();
    });
  });

  it('handles progress bar scrubbing and hover events', () => {
    const { container } = render(
      <AudioProvider>
        <AudioPlayer {...sampleMix} />
      </AudioProvider>
    );

    // Click seek before playing (starts track)
    const progressBar = container.querySelector('.cursor-pointer');
    expect(progressBar).not.toBeNull();

    progressBar.getBoundingClientRect = vi.fn(() => ({
      left: 0,
      top: 0,
      width: 200,
      height: 10,
      right: 200,
      bottom: 10,
    }));

    fireEvent.click(progressBar, { clientX: 100 });

    // Mouse move hover preview
    fireEvent.mouseMove(progressBar, { clientX: 100 });
    // Mouse leave
    fireEvent.mouseLeave(progressBar);
    // Click seek while playing
    fireEvent.click(progressBar, { clientX: 100 });
  });

  it('formats hours correctly when audio duration exceeds 1 hour', () => {
    const { container } = render(
      <AudioProvider>
        <TestPlayerWrapper />
      </AudioProvider>
    );

    const audio = container.querySelector('audio');
    act(() => {
      screen.getByTitle('Play').click();
    });

    Object.defineProperty(audio, 'duration', { value: 7200, configurable: true });
    Object.defineProperty(audio, 'currentTime', { value: 3661, configurable: true });

    act(() => {
      audio.dispatchEvent(new Event('loadedmetadata'));
      audio.dispatchEvent(new Event('timeupdate'));
    });

    expect(screen.getByText(/1:01:01/)).toBeInTheDocument();
  });

  it('displays fallback artwork when image fails to load', () => {
    render(
      <AudioProvider>
        <AudioPlayer {...sampleMix} />
      </AudioProvider>
    );

    const img = screen.getByAltText('Deep Grooves artwork');
    fireEvent.error(img);

    expect(screen.getByText('🎧')).toBeInTheDocument();
  });
});
