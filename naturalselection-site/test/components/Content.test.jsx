import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  ContentRenderer,
  ImageGallery,
  PostCard,
  ContentHero,
  ContentSection,
} from '@/components/Content';

describe('Content components', () => {
  describe('ContentRenderer', () => {
    it('renders html string inside container', () => {
      render(<ContentRenderer content="<p>Sample Rendered HTML</p>" />);
      expect(screen.getByText('Sample Rendered HTML')).toBeInTheDocument();
    });
  });

  describe('ImageGallery', () => {
    it('returns null if images array is empty or undefined', () => {
      const { container } = render(<ImageGallery images={[]} />);
      expect(container.firstChild).toBeNull();
    });

    it('renders gallery images with proper alt tags and paths', () => {
      const images = [
        { path: '/images/1.jpg', alt: 'First Image' },
        { path: '/images/2.jpg', alt: 'Second Image' },
      ];
      render(<ImageGallery images={images} />);

      expect(screen.getByAltText('First Image')).toBeInTheDocument();
      expect(screen.getByAltText('Second Image')).toBeInTheDocument();
    });
  });

  describe('PostCard', () => {
    it('renders post card with title, date, excerpt, and category badge', () => {
      const post = {
        frontmatter: {
          title: 'Subwoofer Design Study',
          date: '2024-05-10',
          category: 'Acoustics',
        },
        content: '<p>Acoustic enclosure engineering analysis.</p>',
        images: [{ path: '/images/sub.jpg', alt: 'Subwoofer Enclosure' }],
      };

      render(<PostCard post={post} />);

      expect(screen.getByText('Subwoofer Design Study')).toBeInTheDocument();
      expect(screen.getByText('Acoustics')).toBeInTheDocument();
      expect(screen.getByAltText('Subwoofer Enclosure')).toBeInTheDocument();
      expect(screen.getByText(/Acoustic enclosure engineering analysis/)).toBeInTheDocument();
    });
  });

  describe('ContentHero', () => {
    it('renders title, subtitle, date, and optional background image', () => {
      render(
        <ContentHero
          title="Mastering Services"
          subtitle="Precision Audio Engineering"
          date="2024-01-01"
          image="/images/console.jpg"
        />
      );

      expect(screen.getByText('Mastering Services')).toBeInTheDocument();
      expect(screen.getByText('Precision Audio Engineering')).toBeInTheDocument();
      expect(screen.getByAltText('Mastering Services')).toBeInTheDocument();
    });
  });

  describe('ContentSection', () => {
    it('renders light background by default', () => {
      const { container } = render(
        <ContentSection>
          <p>Section Body</p>
        </ContentSection>
      );
      expect(container.firstChild.className).toContain('theme-page');
    });

    it('renders dark background and card background variants', () => {
      const { container: darkContainer } = render(
        <ContentSection background="dark">
          <p>Dark Content</p>
        </ContentSection>
      );
      expect(darkContainer.firstChild.className).toContain('gradient-primary text-white');

      const { container: cardContainer } = render(
        <ContentSection background="card">
          <p>Card Content</p>
        </ContentSection>
      );
      expect(cardContainer.firstChild.className).toContain('theme-card');
    });
  });
});
