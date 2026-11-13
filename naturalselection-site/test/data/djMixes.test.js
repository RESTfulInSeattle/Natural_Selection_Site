import { describe, it, expect } from 'vitest';
import { djMixData, allMixes, buildMixUrls } from '@/data/djMixes';

describe('djMixes data module', () => {
  describe('buildMixUrls helper', () => {
    it('builds standard S3 URLs with default prefix and extension', () => {
      const urls = buildMixUrls('Soulful House', 'Summer Breeze');
      expect(urls.mp3Url).toContain('https://clayton-the-chemist-dj-mixes.s3.us-west-2.amazonaws.com/');
      expect(urls.mp3Url).toContain('Soulful%20House');
      expect(urls.mp3Url).toContain('Clayton%20the%20Chemist%20-%20Summer%20Breeze.mp3');
      expect(urls.artworkUrl).toContain('Clayton%20the%20Chemist%20-%20Summer%20Breeze.jpg');
      expect(urls.downloadUrl).toBe(urls.mp3Url);
    });

    it('respects custom artworkExt, mp3Prefix, and artworkPrefix options', () => {
      const urls = buildMixUrls('Special Event', 'Live 2024', {
        artworkExt: 'PNG',
        mp3Prefix: 'Dave Clayton',
        artworkPrefix: 'Dave Clayton Promo',
      });
      expect(urls.artworkUrl).toContain('.PNG');
      expect(urls.artworkUrl).toContain('Dave%20Clayton%20Promo%20-%20Live%202024.PNG');
      expect(urls.mp3Url).toContain('Dave%20Clayton%20-%20Live%202024.mp3');
    });

    it('respects custom mp3Name and artworkName overrides', () => {
      const urls = buildMixUrls('Custom', 'Mix', {
        mp3Name: 'ExplicitTrack.mp3',
        artworkName: 'ExplicitCover.jpg',
      });
      expect(urls.mp3Url).toContain('ExplicitTrack.mp3');
      expect(urls.artworkUrl).toContain('ExplicitCover.jpg');
    });
  });

  describe('djMixData structure', () => {
    it('contains expected genres', () => {
      expect(djMixData).toHaveProperty('House');
      expect(djMixData).toHaveProperty('Drum & Bass');
      expect(djMixData).toHaveProperty('Funk & Soul');
    });

    it('ensures each mix has all required fields', () => {
      Object.entries(djMixData).forEach(([genre, mixes]) => {
        expect(Array.isArray(mixes)).toBe(true);
        expect(mixes.length).toBeGreaterThan(0);

        mixes.forEach((mix) => {
          expect(mix.id).toBeDefined();
          expect(typeof mix.id).toBe('string');
          expect(mix.mixTitle).toBeDefined();
          expect(mix.artistName).toBeDefined();
          expect(mix.genre).toBe(genre);
          expect(mix.mp3Url).toMatch(/^https:\/\//);
          expect(mix.artworkUrl).toMatch(/^https:\/\//);
          expect(mix.downloadUrl).toMatch(/^https:\/\//);
        });
      });
    });
  });

  describe('allMixes aggregation', () => {
    it('flattens all mixes correctly', () => {
      const totalCount =
        djMixData['House'].length +
        djMixData['Drum & Bass'].length +
        djMixData['Funk & Soul'].length;

      expect(allMixes.length).toBe(totalCount);
      expect(allMixes.map((m) => m.id)).toEqual(
        expect.arrayContaining(['just-do-you', 'in-the-lab-podcast-003', 'sister-soul'])
      );
    });
  });
});
