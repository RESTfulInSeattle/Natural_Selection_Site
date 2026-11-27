import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import fs from 'fs';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import About from '@/app/about/page';
import ClaytonTheChemist from '@/app/clayton-the-chemist/page';
import Contact from '@/app/contact/page';
import DJServices from '@/app/dj-services/page';
import Mastering from '@/app/mastering/page';
import Music from '@/app/music/page';
import Publishing from '@/app/publishing/page';
import RootLayout from '@/app/layout';
import { AudioProvider } from '@/context/AudioContext';
import { ThemeProvider } from '@/components/ThemeProvider';

describe('App Router Pages and Layout', () => {
  describe('RootLayout', () => {
    it('renders RootLayout wrapping children in Providers', () => {
      render(
        <RootLayout>
          <div data-testid="layout-child">Child Content</div>
        </RootLayout>
      );
      expect(screen.getByTestId('layout-child')).toBeInTheDocument();
    });
  });

  describe('Home Page', () => {
    it('renders hero title and primary call to action links', () => {
      render(<Home />);
      expect(
        screen.getByText(/Dedicated to the Art of Deejaying, Music Production, Audio Engineering, and Acoustics/i)
      ).toBeInTheDocument();
    });
  });

  describe('About Page (Server Component)', () => {
    it('resolves markdown content and renders about narrative', async () => {
      const PageJSX = await About();
      render(PageJSX);
      expect(screen.getByText(/About Natural Selection/i)).toBeInTheDocument();
      expect(screen.getByAltText(/Natural Selection Mural by Bret Seyfert/i)).toBeInTheDocument();
      expect(screen.queryByAltText('muralleveled')).not.toBeInTheDocument();
    });

    it('renders ExistingAboutContent fallback when markdown content is missing', async () => {
      const existsSpy = vi.spyOn(fs, 'existsSync').mockReturnValue(false);
      const FallbackJSX = await About();
      render(FallbackJSX);

      expect(screen.getByAltText(/Natural Selection Mural by Bret Seyfert/i)).toBeInTheDocument();
      expect(screen.getAllByText(/Dave Clayton/i).length).toBeGreaterThan(0);
      existsSpy.mockRestore();
    });
  });

  describe('Clayton The Chemist Page', () => {
    it('renders artist header and section tabs', () => {
      render(
        <ThemeProvider>
          <AudioProvider>
            <ClaytonTheChemist />
          </AudioProvider>
        </ThemeProvider>
      );
      expect(screen.getAllByText(/Clayton the Chemist/i).length).toBeGreaterThan(0);
      expect(screen.getByText(/The Chemist's Philosophy/i)).toBeInTheDocument();
      expect(screen.getByAltText(/Seattle skyline and Space Needle/i)).toBeInTheDocument();
    });
  });

  describe('Contact Page', () => {
    it('renders contact options and booking pathways', () => {
      render(<Contact />);
      expect(screen.getByText(/Contact Natural Selection/i)).toBeInTheDocument();
      expect(screen.getByText(/Send Us a Message/i)).toBeInTheDocument();
      expect(screen.getByAltText(/Natural Selection Mural by Bret Seyfert/i)).toBeInTheDocument();
    });
  });

  describe('DJ Services Page', () => {
    it('renders service tiers, event types, and sound equipment specs', () => {
      render(<DJServices />);
      expect(screen.getByText(/Professional DJ Services/i)).toBeInTheDocument();
      expect(screen.getByText(/Equipment & Capabilities/i)).toBeInTheDocument();
    });
  });

  describe('Mastering Page', () => {
    it('renders mastering rates, gear list, and submission guidelines', () => {
      render(<Mastering />);
      expect(screen.getByText(/Professional Audio Mastering Services/i)).toBeInTheDocument();
      expect(screen.getByText(/Current Mastering Chain/i)).toBeInTheDocument();
      expect(screen.getByAltText(/Natural Selection audio mastering studio/i)).toBeInTheDocument();
    });
  });

  describe('Music Label Page', () => {
    it('renders music releases and label catalog', () => {
      render(<Music />);
      expect(screen.getByText(/The Soul Purpose/i)).toBeInTheDocument();
      expect(screen.getByText(/Music for your soul/i)).toBeInTheDocument();
    });
  });

  describe('Publishing Page', () => {
    it('renders sync licensing and publishing rights information', () => {
      render(<Publishing />);
      expect(screen.getByText(/Music Publishing & Licensing/i)).toBeInTheDocument();
      expect(screen.getByText(/Licensing Catalog/i)).toBeInTheDocument();
    });
  });
});
