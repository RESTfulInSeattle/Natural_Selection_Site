import { describe, it, expect } from 'vitest';
import { claytonPhotos, DRIVE_FOLDER_URL } from '@/data/claytonPhotos';

describe('claytonPhotos data module', () => {
  it('exports a valid Google Drive folder URL', () => {
    expect(DRIVE_FOLDER_URL).toMatch(/^https:\/\/drive\.google\.com\/drive\/folders\//);
  });

  it('exports an array of photo objects with non-empty items', () => {
    expect(Array.isArray(claytonPhotos)).toBe(true);
    expect(claytonPhotos.length).toBeGreaterThan(0);
  });

  it('ensures each photo item has required fields and valid paths', () => {
    const ids = new Set();

    claytonPhotos.forEach((photo) => {
      expect(photo.id).toBeDefined();
      expect(typeof photo.id).toBe('string');
      expect(photo.title).toBeDefined();
      expect(photo.src).toMatch(/^\/images\//);
      expect(photo.alt).toBeDefined();
      expect(photo.alt.length).toBeGreaterThan(0);
      expect(photo.driveId).toBeDefined();
      expect(photo.driveUrl).toContain(photo.driveId);

      // Verify ID uniqueness
      expect(ids.has(photo.id)).toBe(false);
      ids.add(photo.id);
    });
  });
});
