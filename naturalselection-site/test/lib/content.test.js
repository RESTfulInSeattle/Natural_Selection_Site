import { describe, it, expect, vi } from 'vitest';
import * as contentModule from '@/lib/content';
import fs from 'fs';

describe('content.js library', () => {
  describe('getAllPageSlugs and getAllBlogSlugs', () => {
    it('returns slugs of markdown pages', () => {
      const pageSlugs = contentModule.getAllPageSlugs();
      expect(Array.isArray(pageSlugs)).toBe(true);
      expect(pageSlugs).toContain('about');
      expect(pageSlugs).toContain('contact');
      expect(pageSlugs).toContain('mastering');
      expect(pageSlugs).toContain('music');
      expect(pageSlugs).toContain('publishing');
    });

    it('returns slugs of markdown blog posts', () => {
      const blogSlugs = contentModule.getAllBlogSlugs();
      expect(Array.isArray(blogSlugs)).toBe(true);
      expect(blogSlugs).toContain('apartment-monitor-placement');
      expect(blogSlugs).toContain('sempa');
      expect(blogSlugs).toContain('subwoofer-design-study');
    });

    it('returns empty array when directory does not exist', () => {
      const existsSpy = vi.spyOn(fs, 'existsSync').mockReturnValue(false);
      expect(contentModule.getAllPageSlugs()).toEqual([]);
      expect(contentModule.getAllBlogSlugs()).toEqual([]);
      existsSpy.mockRestore();
    });
  });

  describe('getContentBySlug', () => {
    it('returns parsed page content with frontmatter, HTML, and images', async () => {
      const page = await contentModule.getContentBySlug('about', 'page');
      expect(page).not.toBeNull();
      expect(page.slug).toBe('about');
      expect(page.type).toBe('page');
      expect(page.frontmatter).toBeDefined();
      expect(typeof page.content).toBe('string');
      expect(page.content.length).toBeGreaterThan(0);
      expect(Array.isArray(page.images)).toBe(true);
      expect(page.lastModified).toBeInstanceOf(Date);
    });

    it('returns parsed blog post content with frontmatter and HTML', async () => {
      const post = await contentModule.getContentBySlug('subwoofer-design-study', 'blog');
      expect(post).not.toBeNull();
      expect(post.slug).toBe('subwoofer-design-study');
      expect(post.type).toBe('blog');
      expect(post.frontmatter.title).toBeDefined();
    });

    it('returns null when content file does not exist', async () => {
      const nonExistent = await contentModule.getContentBySlug('non-existent-slug-xyz');
      expect(nonExistent).toBeNull();
    });

    it('handles unexpected errors gracefully and returns null', async () => {
      const readSpy = vi.spyOn(fs, 'readFileSync').mockImplementation(() => {
        throw new Error('Disk read failure');
      });
      const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      const result = await contentModule.getContentBySlug('about', 'page');
      expect(result).toBeNull();

      readSpy.mockRestore();
      errorSpy.mockRestore();
    });
  });

  describe('getPageContent helper', () => {
    it('fetches page content using default type', async () => {
      const contact = await contentModule.getPageContent('contact');
      expect(contact).not.toBeNull();
      expect(contact.slug).toBe('contact');
      expect(contact.type).toBe('page');
    });
  });

  describe('getAllBlogPosts and getAllPages', () => {
    it('returns all blog posts sorted newest first', async () => {
      const posts = await contentModule.getAllBlogPosts();
      expect(posts.length).toBeGreaterThanOrEqual(1);

      for (let i = 0; i < posts.length - 1; i++) {
        const dateA = new Date(posts[i].frontmatter.date || '1970-01-01').getTime();
        const dateB = new Date(posts[i + 1].frontmatter.date || '1970-01-01').getTime();
        expect(dateA).toBeGreaterThanOrEqual(dateB);
      }
    });

    it('returns all pages sorted alphabetically by title or slug', async () => {
      const pages = await contentModule.getAllPages();
      expect(pages.length).toBeGreaterThanOrEqual(1);

      for (let i = 0; i < pages.length - 1; i++) {
        const titleA = pages[i].frontmatter.title || pages[i].slug;
        const titleB = pages[i + 1].frontmatter.title || pages[i + 1].slug;
        expect(titleA.localeCompare(titleB)).toBeLessThanOrEqual(0);
      }
    });
  });

  describe('getAllPosts', () => {
    it('aggregates both pages and blog posts sorted newest first', async () => {
      const all = await contentModule.getAllPosts();
      expect(all.length).toBeGreaterThan(0);
      const types = all.map((c) => c.type);
      expect(types).toContain('page');
      expect(types).toContain('blog');
    });
  });

  describe('getContentByCategory', () => {
    it('filters content by category, slug substring, or tags', async () => {
      const musicContent = await contentModule.getContentByCategory('music');
      expect(Array.isArray(musicContent)).toBe(true);
      expect(musicContent.some((c) => c.slug.includes('music'))).toBe(true);
    });
  });

  describe('processContentImages', () => {
    it('transforms relative markdown image syntax to public paths', () => {
      const markdown = 'Here is a photo: ![Cover](images/cover.jpg) and text.';
      const processed = contentModule.processContentImages(markdown, 'my-mix', 'pages');
      expect(processed).toBe('Here is a photo: ![Cover](/images/pages/my-mix/cover.jpg) and text.');
    });

    it('supports blog image paths', () => {
      const markdown = '![Diagram](images/graph.png)';
      const processed = contentModule.processContentImages(markdown, 'subwoofer', 'blog');
      expect(processed).toBe('![Diagram](/images/blog/subwoofer/graph.png)');
    });
  });

  describe('getContentByPath legacy resolver', () => {
    it('resolves legacy path segments to pages', async () => {
      const result = await contentModule.getContentByPath('/2020/07/about/');
      expect(result).not.toBeNull();
      expect(result.slug).toBe('about');
    });

    it('resolves legacy path segments to blog posts', async () => {
      const result = await contentModule.getContentByPath('/wp-content/posts/sempa');
      expect(result).not.toBeNull();
      expect(result.slug).toBe('sempa');
    });

    it('returns null if path cannot be resolved to any content', async () => {
      const result = await contentModule.getContentByPath('/unknown/unmapped/path');
      expect(result).toBeNull();
    });
  });
});
