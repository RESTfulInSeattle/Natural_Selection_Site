# Content Structure Documentation

## Overview
This project has been restructured from a WordPress-style nested date folder system to a clean, Next.js best practices structure.

## New Directory Structure

```
naturalselection-site/
├── content/                     # Clean content directory (NEW)
│   ├── pages/                   # Static pages content
│   │   ├── about.md
│   │   ├── contact.md
│   │   ├── music.md
│   │   ├── mastering.md
│   │   ├── publishing.md
│   │   └── clayton-the-chemist.md
│   └── blog/                    # Blog posts and articles
│       ├── subwoofer-design-study.md
│       ├── apartment-monitor-placement.md
│       └── sempa.md
├── public/
│   └── images/                  # Organized images (NEW)
│       ├── pages/               # Images for static pages
│       │   ├── about/
│       │   ├── music/
│       │   └── clayton-the-chemist/
│       └── blog/                # Images for blog posts
│           └── subwoofer-design-study/
└── src/
    └── lib/
        └── content.js           # Updated content library
```

## Old WordPress Structure (DEPRECATED)
```
public/content/pages/
├── 2015/10/about/index.md       # → content/pages/about.md
├── 2015/10/music/index.md       # → content/pages/music.md
├── 2015/10/mastering/index.md   # → content/pages/mastering.md
├── 2015/10/publishing/index.md  # → content/pages/publishing.md
├── 2019/07/contact/index.md     # → content/pages/contact.md
├── 2019/07/clayton-the-chemist/index.md # → content/pages/clayton-the-chemist.md
├── 2020/07/subwoofer-design-study/index.md # → content/blog/subwoofer-design-study.md
└── ...
```

## Content Management

### Adding New Pages
1. Create a new `.md` file in `content/pages/`
2. Add images to `public/images/pages/[page-name]/`
3. Reference images in markdown with `![alt](images/filename.jpg)`

### Adding New Blog Posts
1. Create a new `.md` file in `content/blog/`
2. Add images to `public/images/blog/[post-name]/`
3. Reference images in markdown with `![alt](images/filename.jpg)`

### Frontmatter Structure
```yaml
---
title: "Page Title"
date: "2025-01-01"
category: "optional-category"
tags: ["tag1", "tag2"]
---
```

## API Functions

### New Functions
- `getPageContent(slug)` - Get page by slug (e.g., 'about')
- `getContentBySlug(slug, type)` - Get content by slug and type ('page' or 'blog')
- `getAllPages()` - Get all pages
- `getAllBlogPosts()` - Get all blog posts

### Updated Functions
- `processContentImages(content, slug, type)` - Process image paths for new structure
- `getAllPosts()` - Returns both pages and blog posts
- `getContentByCategory(category)` - Works with new structure

### Legacy Support
- `getContentByPath(path)` - Maintained for backward compatibility

## Benefits of New Structure

1. **Cleaner URLs**: `/about` instead of `/2015/10/about`
2. **Easier Navigation**: Simple flat structure vs deep nested folders
3. **Better Organization**: Clear separation between pages and blog content
4. **Faster Development**: Easier to find and edit content
5. **SEO Friendly**: Clean, semantic URLs
6. **Maintainable**: Standard Next.js content management patterns

## Migration Notes

- All content has been preserved
- Image paths automatically updated
- Legacy path support maintained for backward compatibility
- Old WordPress structure can be safely removed once verified working

## Image Path Examples

### Old (WordPress style)
```markdown
![](images/muralleveled.jpg)
```
Resolves to: `/content/pages/2015/10/about/images/muralleveled.jpg`

### New (Clean structure)
```markdown
![Natural Selection Mural](images/muralleveled.jpg)
```
Resolves to: `/images/pages/about/muralleveled.jpg`