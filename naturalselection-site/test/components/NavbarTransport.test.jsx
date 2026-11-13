import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import NavbarTransport from '@/components/NavbarTransport';
import { AudioProvider, useAudio } from '@/context/AudioContext';

function TransportTester() {
  const { playTrack } = useAudio();
  return (
    <div>
      <NavbarTransport />
      <button
        onClick={() =>
          playTrack({
            id: 'transport-mix-1',
            mixTitle: 'Late Night Sessions',
            artistName: 'Clayton The Chemist',
            mp3Url: 'https://test.com/transport.mp3',
          })
        }
      >
        Load Mix
      </button>
    </div>
  );
}

describe('NavbarTransport component', () => {
  it('renders nothing when no track is loaded', () => {
    render(
      <AudioProvider>
        <NavbarTransport />
      </AudioProvider>
    );
    expect(screen.queryByRole('region', { name: 'Audio Transport Controls' })).toBeNull();
  });

  it('renders transport controls when a track is active', () => {
    render(
      <AudioProvider>
        <TransportTester />
      </AudioProvider>
    );

    act(() => {
      screen.getByText('Load Mix').click();
    });

    const region = screen.getByRole('region', { name: 'Audio Transport Controls' });
    expect(region).toBeInTheDocument();
    expect(screen.getByText('Late Night Sessions')).toBeInTheDocument();
    expect(screen.getByText('Clayton The Chemist')).toBeInTheDocument();
  });

  it('handles play/pause toggle, skip, mute, and close', () => {
    render(
      <AudioProvider>
        <TransportTester />
      </AudioProvider>
    );

    act(() => {
      screen.getByText('Load Mix').click();
    });

    // Play/Pause button
    const playPauseBtn = screen.getByLabelText(/mix/i);
    expect(playPauseBtn).toBeInTheDocument();

    act(() => {
      playPauseBtn.click();
    });

    // Skip forward
    const skipFwd = screen.getByTitle('Forward 10 seconds');
    act(() => {
      skipFwd.click();
    });

    // Mute toggle
    const muteBtn = screen.getByLabelText(/mute/i);
    act(() => {
      muteBtn.click();
    });

    // Close player
    const closeBtn = screen.getByLabelText('Close audio player');
    act(() => {
      closeBtn.click();
    });

    expect(screen.queryByRole('region', { name: 'Audio Transport Controls' })).toBeNull();
  });

  it('handles progress bar scrubbing', () => {
    const { container } = render(
      <AudioProvider>
        <TransportTester />
      </AudioProvider>
    );

    act(() => {
      screen.getByText('Load Mix').click();
    });

    const progressBar = container.querySelector('.cursor-pointer');
    expect(progressBar).not.toBeNull();

    progressBar.getBoundingClientRect = vi.fn(() => ({
      left: 0,
      top: 0,
      width: 150,
      height: 6,
      right: 150,
      bottom: 6,
    }));

    fireEvent.click(progressBar, { clientX: 75 });
  });

  it('renders extended transport states: artwork, rewind, hour timestamps, seek with duration', async () => {
    // We can spy on useAudio or mock it
    const mockSeek = vi.fn();
    const mockSkip = vi.fn();
    const mockTogglePlayPause = vi.fn();
    const mockToggleMute = vi.fn();
    const mockClosePlayer = vi.fn();

    vi.spyOn(await import('@/context/AudioContext'), 'useAudio').mockReturnValue({
      currentTrack: {
        id: 'full-mix',
        mixTitle: 'Long Journey Mix',
        artistName: 'Clayton The Chemist',
        genre: 'Drum & Bass',
        artworkUrl: '/images/long-journey.jpg',
      },
      isPlaying: true,
      isLoading: false,
      currentTime: 3665, // 1:01:05
      duration: 7200,    // 2 hours
      volume: 0,
      isMuted: true,
      audioError: null,
      togglePlayPause: mockTogglePlayPause,
      seek: mockSeek,
      skip: mockSkip,
      toggleMute: mockToggleMute,
      closePlayer: mockClosePlayer,
    });

    const { container } = render(<NavbarTransport />);

    // Check title, artist, genre
    expect(screen.getByText('Long Journey Mix')).toBeInTheDocument();
    expect(screen.getByText('Drum & Bass')).toBeInTheDocument();

    // Timestamp with hour format
    expect(screen.getByText('1:01:05')).toBeInTheDocument();

    // Rewind 10s button
    const rewindBtn = screen.getByTitle('Rewind 10 seconds');
    act(() => {
      rewindBtn.click();
    });
    expect(mockSkip).toHaveBeenCalledWith(-10);

    // Forward 10s button
    const forwardBtn = screen.getByTitle('Forward 10 seconds');
    act(() => {
      forwardBtn.click();
    });
    expect(mockSkip).toHaveBeenCalledWith(10);

    // Unmute button (since isMuted is true)
    const unmuteBtn = screen.getByLabelText('Unmute');
    act(() => {
      unmuteBtn.click();
    });
    expect(mockToggleMute).toHaveBeenCalled();

    // Seek on progress bar
    const progressBar = container.querySelector('.cursor-pointer');
    progressBar.getBoundingClientRect = vi.fn(() => ({
      left: 10,
      top: 0,
      width: 100,
      height: 6,
      right: 110,
      bottom: 6,
    }));
    fireEvent.click(progressBar, { clientX: 60 });
    expect(mockSeek).toHaveBeenCalledWith(3600); // 50 / 100 * 7200 = 3600

    vi.restoreAllMocks();
  });
});
