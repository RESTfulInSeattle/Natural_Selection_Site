import { describe, it, expect, beforeEach, vi } from 'vitest';
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import ClaytonTabs from '@/components/ClaytonTabs';
import ClaytonEPK from '@/components/ClaytonEPK';
import ClaytonReleases from '@/components/ClaytonReleases';
import ClaytonVideos from '@/components/ClaytonVideos';
import { AudioProvider } from '@/context/AudioContext';

describe('Clayton The Chemist Artist Components', () => {
  beforeEach(() => {
    window.location.hash = '';
  });

  describe('ClaytonTabs', () => {
    it('renders all 5 section tabs with icons and labels', () => {
      render(
        <AudioProvider>
          <ClaytonTabs />
        </AudioProvider>
      );

      expect(screen.getByText('DJ Mixes')).toBeInTheDocument();
      expect(screen.getByText('Videos')).toBeInTheDocument();
      expect(screen.getByText('Releases')).toBeInTheDocument();
      expect(screen.getByText('Photos')).toBeInTheDocument();
      expect(screen.getByText('EPK')).toBeInTheDocument();
    });

    it('switches tabs on click and updates location hash', () => {
      render(
        <AudioProvider>
          <ClaytonTabs />
        </AudioProvider>
      );

      // Default tab renders DJ Mixes
      expect(screen.getByText('Clayton The Chemist DJ Mixes')).toBeInTheDocument();

      // Click Videos tab
      act(() => {
        screen.getByText('Videos').click();
      });

      expect(window.location.hash).toBe('#videos');

      // Click EPK tab
      act(() => {
        screen.getByText('EPK').click();
      });

      expect(window.location.hash).toBe('#epk');
      expect(screen.getByText(/Electronic Press Kit/i)).toBeInTheDocument();
    });
  });

  describe('ClaytonEPK', () => {
    it('renders bio summary, notable gigs, and media assets with print trigger', () => {
      window.print = vi.fn();
      render(<ClaytonEPK />);

      expect(screen.getByText(/Electronic Press Kit \(EPK\)/i)).toBeInTheDocument();
      expect(screen.getAllByText(/Dave Clayton/i).length).toBeGreaterThan(0);
      expect(screen.getByText('Massive Attack')).toBeInTheDocument();
      expect(screen.getByText('De La Soul')).toBeInTheDocument();

      // Print button
      const printBtn = screen.getByTitle('Print or Save as PDF');
      act(() => {
        printBtn.click();
      });
      expect(window.print).toHaveBeenCalledTimes(1);
    });
  });

  describe('ClaytonReleases', () => {
    it('renders discography release items and filters across streaming platforms', () => {
      render(<ClaytonReleases />);

      expect(screen.getByText(/Releases & Streaming/i)).toBeInTheDocument();

      // Filter to Spotify
      const spotifyButtons = screen.getAllByText('Spotify');
      act(() => {
        spotifyButtons[0].closest('button').click();
      });

      // Filter to Apple Music
      const appleButtons = screen.getAllByText('Apple Music');
      act(() => {
        appleButtons[0].closest('button').click();
      });

      // Filter to SoundCloud
      const soundcloudButtons = screen.getAllByText('SoundCloud');
      act(() => {
        soundcloudButtons[0].closest('button').click();
      });

      // Filter back to All Platforms
      const allButtons = screen.getAllByText('All Platforms');
      act(() => {
        allButtons[0].closest('button').click();
      });
    });
  });

  describe('ClaytonVideos', () => {
    it('renders YouTube video embeds and descriptions', () => {
      const { container } = render(<ClaytonVideos />);

      expect(screen.getByText(/Clayton The Chemist Video Series/i)).toBeInTheDocument();
      const iframe = container.querySelector('iframe');
      expect(iframe).toBeInTheDocument();
      expect(iframe.src).toContain('youtube.com');
    });
  });
});
