import { describe, it, expect, beforeEach } from 'vitest';
import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import Navigation from '@/components/Navigation';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AudioProvider } from '@/context/AudioContext';
import { mockPathname } from '../../test/setup';

describe('Navigation component', () => {
  beforeEach(() => {
    mockPathname.mockReturnValue('/');
  });

  it('renders default music logo when on root path', () => {
    mockPathname.mockReturnValue('/');

    render(
      <ThemeProvider>
        <AudioProvider>
          <Navigation />
        </AudioProvider>
      </ThemeProvider>
    );

    const logo = screen.getByAltText('Natural Selection Music');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/ns-music_header_white.png');
  });

  it('renders DJ services logo when on /dj-services path', () => {
    mockPathname.mockReturnValue('/dj-services');

    render(
      <ThemeProvider>
        <AudioProvider>
          <Navigation />
        </AudioProvider>
      </ThemeProvider>
    );

    const logo = screen.getByAltText('Natural Selection Deejaying');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/ns-deejaying_header_white.png');
  });

  it('renders mastering logo when on /mastering path', () => {
    mockPathname.mockReturnValue('/mastering');

    render(
      <ThemeProvider>
        <AudioProvider>
          <Navigation />
        </AudioProvider>
      </ThemeProvider>
    );

    const logo = screen.getByAltText('Natural Selection Mastering');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/ns-mastering_header_white.png');
  });

  it('renders desktop navigation links', () => {
    render(
      <ThemeProvider>
        <AudioProvider>
          <Navigation />
        </AudioProvider>
      </ThemeProvider>
    );

    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('DJ Services').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Mastering').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
  });

  it('toggles mobile drawer navigation and renders links', () => {
    render(
      <ThemeProvider>
        <AudioProvider>
          <Navigation />
        </AudioProvider>
      </ThemeProvider>
    );

    // Hamburger button
    const toggleBtn = screen.getByText('Open main menu').closest('button');
    expect(toggleBtn).toBeInTheDocument();

    act(() => {
      toggleBtn.click();
    });

    // Mobile drawer should be rendered and visible
    const mobileLinks = screen.getAllByText('Clayton the Chemist');
    expect(mobileLinks.length).toBeGreaterThan(0);

    // Mobile music section header
    expect(screen.getByText('Music Sections')).toBeInTheDocument();

    // Clicking a mobile music item closes menu
    const publishingLink = screen.getByText('Music Publishing');
    act(() => {
      publishingLink.click();
    });

    // Re-open and click regular link
    act(() => {
      toggleBtn.click();
    });
    const contactLinks = screen.getAllByText('Contact');
    act(() => {
      contactLinks[contactLinks.length - 1].click();
    });
  });

  it('opens and closes the desktop music dropdown on mouse enter and leave', () => {
    const { container } = render(
      <ThemeProvider>
        <AudioProvider>
          <Navigation />
        </AudioProvider>
      </ThemeProvider>
    );

    const musicBtn = screen.getByRole('button', { name: /Music/i });
    expect(musicBtn).toBeInTheDocument();

    const dropdownContainer = musicBtn.closest('.relative');
    expect(dropdownContainer).not.toBeNull();

    // Mouse enter opens dropdown
    fireEvent.mouseEnter(dropdownContainer);
    expect(screen.getAllByText('Music Publishing').length).toBeGreaterThan(0);

    // Mouse leave closes dropdown
    fireEvent.mouseLeave(dropdownContainer);
  });
});
