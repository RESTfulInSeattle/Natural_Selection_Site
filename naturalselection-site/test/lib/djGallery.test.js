import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import { getDJEventPhotos } from '@/lib/djGallery';

describe('getDJEventPhotos library', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('scans and returns all 4 standard event categories', () => {
    const gallery = getDJEventPhotos();

    expect(gallery).toHaveProperty('weddings');
    expect(gallery).toHaveProperty('corporate-events');
    expect(gallery).toHaveProperty('nightclubs');
    expect(gallery).toHaveProperty('races-and-festivals');

    expect(gallery['weddings'].title).toBe('Weddings');
    expect(gallery['weddings'].icon).toBe('💒');
    expect(Array.isArray(gallery['weddings'].images)).toBe(true);
  });

  it('filters by valid extensions and normalizes titles', () => {
    const gallery = getDJEventPhotos();
    const weddings = gallery['weddings'].images;

    expect(weddings.length).toBeGreaterThan(0);
    const sample = weddings[0];

    expect(sample).toHaveProperty('id');
    expect(sample).toHaveProperty('src');
    expect(sample).toHaveProperty('filename');
    expect(sample).toHaveProperty('title');
    expect(sample).toHaveProperty('category', 'weddings');
    expect(sample.src.startsWith('/images/pages/dj-services/weddings/')).toBe(true);
  });

  it('handles readdir errors gracefully and returns empty array for failed folders', () => {
    vi.spyOn(fs, 'existsSync').mockReturnValue(true);
    vi.spyOn(fs, 'readdirSync').mockImplementation(() => {
      throw new Error('Disk read failure');
    });

    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const gallery = getDJEventPhotos();
    expect(gallery['weddings'].images).toEqual([]);
    expect(errorSpy).toHaveBeenCalled();
  });
});
