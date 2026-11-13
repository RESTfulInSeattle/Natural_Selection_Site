import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import TabbedDJMixes, { DJMixGrid } from '@/components/TabbedDJMixes';
import { AudioProvider } from '@/context/AudioContext';
import { djMixData } from '@/data/djMixes';

describe('TabbedDJMixes & DJMixGrid components', () => {
  it('renders tab buttons for all genres with correct mix counts', () => {
    render(
      <AudioProvider>
        <TabbedDJMixes />
      </AudioProvider>
    );

    Object.keys(djMixData).forEach((genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
      const count = djMixData[genre].length.toString();
      expect(screen.getAllByText(count).length).toBeGreaterThan(0);
    });
  });

  it('switches active tab and displays matching mixes on click', () => {
    render(
      <AudioProvider>
        <TabbedDJMixes />
      </AudioProvider>
    );

    // Initial default tab is House
    const firstHouseMix = djMixData['House'][0].mixTitle;
    expect(screen.getByText(firstHouseMix)).toBeInTheDocument();

    // Click Drum & Bass tab
    const dnbTab = screen.getByText('Drum & Bass');
    act(() => {
      dnbTab.click();
    });

    const firstDnbMix = djMixData['Drum & Bass'][0].mixTitle;
    expect(screen.getByText(firstDnbMix)).toBeInTheDocument();
  });

  it('DJMixGrid renders standalone mix cards', () => {
    const testMixes = [
      {
        id: 'grid-1',
        mixTitle: 'Grid Track 1',
        artistName: 'Artist 1',
        mp3Url: 'https://test.com/1.mp3',
        artworkUrl: 'https://test.com/1.jpg',
        genre: 'House',
      },
      {
        id: 'grid-2',
        mixTitle: 'Grid Track 2',
        artistName: 'Artist 2',
        mp3Url: 'https://test.com/2.mp3',
        artworkUrl: 'https://test.com/2.jpg',
        genre: 'DnB',
      },
    ];

    render(
      <AudioProvider>
        <DJMixGrid mixes={testMixes} />
      </AudioProvider>
    );

    expect(screen.getByText('Grid Track 1')).toBeInTheDocument();
    expect(screen.getByText('Grid Track 2')).toBeInTheDocument();
  });
});
