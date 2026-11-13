import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  MixcloudPlayer,
  SoundCloudPlayer,
  SpotifyPlayer,
  AppleMusicPlayer,
  MusicSection,
  MusicGrid,
} from '@/components/MusicPlayers';

describe('MusicPlayers components', () => {
  describe('MixcloudPlayer', () => {
    it('renders with mixcloud url replacement', () => {
      const { container } = render(
        <MixcloudPlayer
          url="https://www.mixcloud.com/naturalselection/sample-set/"
          title="Sample Set"
        />
      );
      expect(screen.getByText('Sample Set')).toBeInTheDocument();
      const iframe = container.querySelector('iframe');
      expect(iframe).toBeInTheDocument();
      expect(iframe.src).toContain('/widget/iframe/?hide_cover=1&mini=1&feed=');
    });

    it('renders with raw feed key if url does not contain mixcloud.com', () => {
      const { container } = render(
        <MixcloudPlayer url="/user/feed-key/" title="Feed Mix" />
      );
      const iframe = container.querySelector('iframe');
      expect(iframe.src).toContain('https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=/user/feed-key/');
    });
  });

  describe('SoundCloudPlayer', () => {
    it('renders playlist embed when playlistId is supplied', () => {
      const { container } = render(
        <SoundCloudPlayer playlistId="12345" title="SoundCloud Playlist" />
      );
      expect(screen.getByText('SoundCloud Playlist')).toBeInTheDocument();
      const iframe = container.querySelector('iframe');
      expect(iframe.src).toContain('api.soundcloud.com/playlists/12345');
    });

    it('renders track embed when trackId is supplied', () => {
      const { container } = render(
        <SoundCloudPlayer trackId="67890" title="SoundCloud Track" />
      );
      const iframe = container.querySelector('iframe');
      expect(iframe.src).toContain('api.soundcloud.com/tracks/67890');
    });
  });

  describe('SpotifyPlayer', () => {
    it('renders album embed when albumId is provided', () => {
      const { container } = render(
        <SpotifyPlayer albumId="album-1" title="Spotify Album" />
      );
      expect(screen.getByText('Spotify Album')).toBeInTheDocument();
      const iframe = container.querySelector('iframe');
      expect(iframe.src).toContain('open.spotify.com/embed/album/album-1');
    });

    it('renders track embed when trackId is provided', () => {
      const { container } = render(
        <SpotifyPlayer trackId="track-2" />
      );
      const iframe = container.querySelector('iframe');
      expect(iframe.src).toContain('open.spotify.com/embed/track/track-2');
    });

    it('renders playlist embed when playlistId is provided', () => {
      const { container } = render(
        <SpotifyPlayer playlistId="playlist-3" />
      );
      const iframe = container.querySelector('iframe');
      expect(iframe.src).toContain('open.spotify.com/embed/playlist/playlist-3');
    });
  });

  describe('AppleMusicPlayer', () => {
    it('renders album embed when albumId is provided', () => {
      const { container } = render(
        <AppleMusicPlayer albumId="apple-album-1" title="Apple Album" />
      );
      expect(screen.getByText('Apple Album')).toBeInTheDocument();
      const iframe = container.querySelector('iframe');
      expect(iframe.src).toContain('embed.music.apple.com/us/album/apple-album-1');
    });

    it('renders song embed when trackId is provided', () => {
      const { container } = render(
        <AppleMusicPlayer trackId="apple-song-1" />
      );
      const iframe = container.querySelector('iframe');
      expect(iframe.src).toContain('embed.music.apple.com/us/song/apple-song-1');
    });
  });

  describe('MusicSection and MusicGrid', () => {
    it('renders section wrapper with heading and children', () => {
      render(
        <MusicSection title="Featured Streaming">
          <p>Player Children</p>
        </MusicSection>
      );
      expect(screen.getByText('Featured Streaming')).toBeInTheDocument();
      expect(screen.getByText('Player Children')).toBeInTheDocument();
    });

    it('renders responsive grid with 2 columns', () => {
      const { container } = render(
        <MusicGrid cols={2}>
          <div>Col 1</div>
          <div>Col 2</div>
        </MusicGrid>
      );
      expect(container.firstChild.className).toContain('md:grid-cols-2');
    });

    it('renders default 1 column space-y layout', () => {
      const { container } = render(
        <MusicGrid>
          <div>Item 1</div>
        </MusicGrid>
      );
      expect(container.firstChild.className).toContain('space-y-6');
    });
  });
});
