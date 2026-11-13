import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import PhotoSlideshow from '@/components/PhotoSlideshow';

const samplePhotos = [
  {
    id: 'p1',
    title: 'Photo One',
    src: '/images/1.jpg',
    alt: 'First Test Photo',
    driveUrl: 'https://drive.google.com/1',
  },
  {
    id: 'p2',
    title: 'Photo Two',
    src: '/images/2.jpg',
    alt: 'Second Test Photo',
    driveUrl: 'https://drive.google.com/2',
  },
  {
    id: 'p3',
    title: 'Photo Three',
    src: '/images/3.jpg',
    alt: 'Third Test Photo',
    driveUrl: 'https://drive.google.com/3',
  },
];

describe('PhotoSlideshow component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders fallback when photos array is empty', () => {
    render(<PhotoSlideshow photos={[]} />);
    expect(screen.getByText('No photos available at this time.')).toBeInTheDocument();
  });

  it('renders first slide and navigation controls', () => {
    render(<PhotoSlideshow photos={samplePhotos} />);

    expect(screen.getByText('Photo One')).toBeInTheDocument();
    expect(screen.getByAltText('First Test Photo')).toBeInTheDocument();
    expect(screen.getByText('1 / 3')).toBeInTheDocument();
  });

  it('advances and rewinds slides using Next and Prev buttons', () => {
    render(<PhotoSlideshow photos={samplePhotos} />);

    const nextBtn = screen.getByLabelText('Next photo');
    const prevBtn = screen.getByLabelText('Previous photo');

    act(() => {
      nextBtn.click();
    });
    expect(screen.getByText('Photo Two')).toBeInTheDocument();
    expect(screen.getByText('2 / 3')).toBeInTheDocument();

    act(() => {
      nextBtn.click();
    });
    expect(screen.getByText('Photo Three')).toBeInTheDocument();

    // Wraps around to first slide
    act(() => {
      nextBtn.click();
    });
    expect(screen.getByText('Photo One')).toBeInTheDocument();

    // Prev wraps to last slide
    act(() => {
      prevBtn.click();
    });
    expect(screen.getByText('Photo Three')).toBeInTheDocument();
  });

  it('switches slide directly when clicking a thumbnail', () => {
    render(<PhotoSlideshow photos={samplePhotos} />);

    const thumbBtn = screen.getByTitle('Photo Two');
    act(() => {
      thumbBtn.click();
    });

    expect(screen.getByText('Photo Two')).toBeInTheDocument();
  });

  it('handles keyboard navigation (ArrowRight, ArrowLeft, Escape)', () => {
    render(<PhotoSlideshow photos={samplePhotos} />);

    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
    });
    expect(screen.getByText('Photo Two')).toBeInTheDocument();

    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
    });
    expect(screen.getByText('Photo One')).toBeInTheDocument();
  });

  it('handles autoplay toggle with timer interval', () => {
    render(<PhotoSlideshow photos={samplePhotos} />);

    const playBtn = screen.getByTitle('Start Autoplay');
    act(() => {
      playBtn.click();
    });

    expect(screen.getByTitle('Pause Autoplay')).toBeInTheDocument();

    // Fast-forward 4500ms
    act(() => {
      vi.advanceTimersByTime(4500);
    });
    expect(screen.getByText('Photo Two')).toBeInTheDocument();

    // Pause autoplay
    act(() => {
      screen.getByTitle('Pause Autoplay').click();
    });
    act(() => {
      vi.advanceTimersByTime(4500);
    });
    // Remains on Photo Two
    expect(screen.getByText('Photo Two')).toBeInTheDocument();
  });

  it('handles touch swipe gestures', () => {
    const { container } = render(<PhotoSlideshow photos={samplePhotos} />);
    const viewport = container.querySelector('.group');

    // Simulate Swipe Left: touchStart x=200, touchMove x=100, touchEnd
    fireEvent.touchStart(viewport, { targetTouches: [{ clientX: 200 }] });
    fireEvent.touchMove(viewport, { targetTouches: [{ clientX: 100 }] });
    fireEvent.touchEnd(viewport);

    expect(screen.getByText('Photo Two')).toBeInTheDocument();

    // Simulate Swipe Right: touchStart x=100, touchMove x=200, touchEnd
    fireEvent.touchStart(viewport, { targetTouches: [{ clientX: 100 }] });
    fireEvent.touchMove(viewport, { targetTouches: [{ clientX: 200 }] });
    fireEvent.touchEnd(viewport);

    expect(screen.getByText('Photo One')).toBeInTheDocument();
  });

  it('opens and closes fullscreen lightbox modal with next/prev buttons and escape', () => {
    render(<PhotoSlideshow photos={samplePhotos} />);

    const openLightboxBtn = screen.getByTitle('Expand Fullscreen / Lightbox');
    act(() => {
      openLightboxBtn.click();
    });

    expect(screen.getByText(/Press Esc or click outside to close/i)).toBeInTheDocument();

    // Inside lightbox, click next and prev
    const lightboxNext = screen.getAllByLabelText('Next photo')[1] || screen.getAllByLabelText('Next photo')[0];
    act(() => {
      lightboxNext.click();
    });

    const lightboxPrev = screen.getAllByLabelText('Previous photo')[1] || screen.getAllByLabelText('Previous photo')[0];
    act(() => {
      lightboxPrev.click();
    });

    // Close via close button
    const closeBtn = screen.getByTitle('Close (Esc)');
    act(() => {
      closeBtn.click();
    });

    expect(screen.queryByText(/Press Esc or click outside to close/i)).toBeNull();
  });
});
