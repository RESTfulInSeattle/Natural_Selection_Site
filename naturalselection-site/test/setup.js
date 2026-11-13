import '@testing-library/jest-dom/vitest';
import { vi, beforeEach } from 'vitest';
import React from 'react';

// Mock Next.js image component
vi.mock('next/image', () => ({
  default: ({ src, alt, fill, priority, loading, onError, className, ...props }) => {
    return React.createElement('img', {
      src,
      alt: alt || '',
      className,
      onError,
      'data-fill': fill ? 'true' : undefined,
      ...props,
    });
  },
}));

// Mock Next.js navigation hooks
const mockPathname = vi.fn().mockReturnValue('/');
const mockRouter = {
  push: vi.fn(),
  replace: vi.fn(),
  prefetch: vi.fn(),
  back: vi.fn(),
  forward: vi.fn(),
  refresh: vi.fn(),
};

vi.mock('next/navigation', () => ({
  usePathname: () => mockPathname(),
  useRouter: () => mockRouter,
  useSearchParams: () => new URLSearchParams(),
}));

export { mockPathname, mockRouter };

// Mock Next.js Link
vi.mock('next/link', () => ({
  default: ({ href, children, ...props }) => {
    return React.createElement('a', { href, ...props }, children);
  },
}));

// Mock Next.js Google Fonts
vi.mock('next/font/google', () => ({
  Geist: () => ({ variable: '--font-geist-sans' }),
  Geist_Mono: () => ({ variable: '--font-geist-mono' }),
}));

// Mock HTMLMediaElement for <audio> testing
if (typeof window !== 'undefined') {
  window.HTMLMediaElement.prototype.play = vi.fn().mockImplementation(function() {
    this.dispatchEvent(new Event('play'));
    return Promise.resolve();
  });
  window.HTMLMediaElement.prototype.pause = vi.fn().mockImplementation(function() {
    this.dispatchEvent(new Event('pause'));
  });
  window.HTMLMediaElement.prototype.load = vi.fn();
  window.HTMLMediaElement.prototype.canPlayType = vi.fn().mockReturnValue('maybe');

  // Mock window.matchMedia to default to dark mode
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: query ? query.includes('dark') : true,
      media: query || '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  // Mock MediaSession API
  if (!('mediaSession' in navigator)) {
    Object.defineProperty(navigator, 'mediaSession', {
      writable: true,
      value: {
        metadata: null,
        setActionHandler: vi.fn(),
      },
    });
  }

  window.MediaMetadata = class MediaMetadata {
    constructor(init = {}) {
      Object.assign(this, init);
    }
  };

  // Mock localStorage
  const localStorageMock = (() => {
    let store = {};
    return {
      getItem: vi.fn((key) => store[key] || null),
      setItem: vi.fn((key, value) => {
        store[key] = value.toString();
      }),
      removeItem: vi.fn((key) => {
        delete store[key];
      }),
      clear: vi.fn(() => {
        store = {};
      }),
    };
  })();

  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });
}

beforeEach(() => {
  mockPathname.mockReturnValue('/');
  if (typeof window !== 'undefined') {
    window.localStorage.clear();
  }
});
