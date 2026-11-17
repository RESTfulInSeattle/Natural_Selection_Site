import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import TabbedEventGallery from '@/components/TabbedEventGallery';

const mockCategories = {
  weddings: {
    key: 'weddings',
    title: 'Weddings',
    icon: '💒',
    images: [
      {
        id: 'weddings-photo1.jpg',
        src: '/images/pages/dj-services/weddings/photo1.jpg',
        filename: 'photo1.jpg',
        title: 'Wedding Photo One',
        category: 'weddings',
      },
      {
        id: 'weddings-photo2.jpg',
        src: '/images/pages/dj-services/weddings/photo2.jpg',
        filename: 'photo2.jpg',
        title: 'Wedding Photo Two',
        category: 'weddings',
      },
    ],
  },
  nightclubs: {
    key: 'nightclubs',
    title: 'Nightclubs',
    icon: '🎵',
    images: [],
  },
};

describe('TabbedEventGallery component', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders category tabs with labels and image count badges', () => {
    render(<TabbedEventGallery categories={mockCategories} />);

    expect(screen.getByRole('tab', { name: /Weddings/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Nightclubs/i })).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('displays gallery images for the active category', () => {
    render(<TabbedEventGallery categories={mockCategories} />);

    expect(screen.getByAltText('Wedding Photo One')).toBeInTheDocument();
    expect(screen.getByAltText('Wedding Photo Two')).toBeInTheDocument();
  });

  it('switches tabs and displays empty state when category has no images', () => {
    render(<TabbedEventGallery categories={mockCategories} />);

    const nightclubTab = screen.getByRole('tab', { name: /Nightclubs/i });
    fireEvent.click(nightclubTab);

    expect(screen.getByText(/Nightclubs Gallery/i)).toBeInTheDocument();
    expect(screen.getByText(/Photos for this category are being prepared/i)).toBeInTheDocument();
    expect(screen.getByText(/Ready for images in: public\/images\/pages\/dj-services\/nightclubs/i)).toBeInTheDocument();
  });

  it('opens lightbox modal when image card is clicked and allows closing', () => {
    render(<TabbedEventGallery categories={mockCategories} />);

    const firstImageCard = screen.getByRole('button', { name: /View Wedding Photo One/i });
    fireEvent.click(firstImageCard);

    // Lightbox modal should now be open
    expect(screen.getByRole('dialog', { name: /Wedding Photo One/i })).toBeInTheDocument();
    expect(screen.getByText(/1 \/ 2 • Weddings/i)).toBeInTheDocument();

    // Close via close button
    const closeBtn = screen.getByLabelText('Close lightbox');
    fireEvent.click(closeBtn);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('supports lightbox navigation via next, previous, and keyboard keys', () => {
    render(<TabbedEventGallery categories={mockCategories} />);

    // Open lightbox via keyboard Enter
    const firstImageCard = screen.getByRole('button', { name: /View Wedding Photo One/i });
    fireEvent.keyDown(firstImageCard, { key: 'Enter' });

    expect(screen.getByRole('dialog', { name: /Wedding Photo One/i })).toBeInTheDocument();

    // Click next photo button
    const nextBtn = screen.getByLabelText('Next photo');
    fireEvent.click(nextBtn);
    expect(screen.getByRole('dialog', { name: /Wedding Photo Two/i })).toBeInTheDocument();
    expect(screen.getByText(/2 \/ 2 • Weddings/i)).toBeInTheDocument();

    // ArrowLeft keyboard navigation
    fireEvent.keyDown(window, { key: 'ArrowLeft' });
    expect(screen.getByRole('dialog', { name: /Wedding Photo One/i })).toBeInTheDocument();

    // ArrowRight keyboard navigation
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    expect(screen.getByRole('dialog', { name: /Wedding Photo Two/i })).toBeInTheDocument();

    // Escape key closes modal
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('supports touch swipe navigation in lightbox', () => {
    render(<TabbedEventGallery categories={mockCategories} />);

    fireEvent.click(screen.getByRole('button', { name: /View Wedding Photo One/i }));
    const dialog = screen.getByRole('dialog');

    // Swipe left (next)
    fireEvent.touchStart(dialog, { targetTouches: [{ clientX: 200 }] });
    fireEvent.touchMove(dialog, { targetTouches: [{ clientX: 100 }] });
    fireEvent.touchEnd(dialog);

    expect(screen.getByRole('dialog', { name: /Wedding Photo Two/i })).toBeInTheDocument();

    // Swipe right (prev)
    fireEvent.touchStart(dialog, { targetTouches: [{ clientX: 100 }] });
    fireEvent.touchMove(dialog, { targetTouches: [{ clientX: 200 }] });
    fireEvent.touchEnd(dialog);

    expect(screen.getByRole('dialog', { name: /Wedding Photo One/i })).toBeInTheDocument();
  });
});
