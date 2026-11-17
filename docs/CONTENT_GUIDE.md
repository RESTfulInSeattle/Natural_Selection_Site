# Content Management & Markdown Guide

## Overview

The Natural Selection web platform uses a lightweight, Git-backed Markdown CMS. All static site copy, artist biographies, and technical articles live in structured Markdown files with YAML frontmatter.

---

## Content Organization

```
naturalselection-site/
├── content/
│   ├── blog/                               # Articles, case studies, research
│   │   ├── apartment-monitor-placement.md
│   │   ├── sempa.md
│   │   └── subwoofer-design-study.md
│   └── pages/                              # Core site pages
│       ├── about.md
│       ├── clayton-the-chemist.md
│       ├── contact.md
│       ├── mastering.md
│       ├── music.md
│       └── publishing.md
└── public/
    └── images/                             # Associated image assets
        ├── blog/
        │   ├── apartment-monitor-placement/
        │   ├── sempa/
        │   └── subwoofer-design-study/
        └── pages/
            ├── about/
            ├── clayton-the-chemist/
            ├── dj-services/
            │   ├── dj-ballroom-hero.jpg
            │   ├── weddings/
            │   ├── corporate-events/
            │   ├── nightclubs/
            │   └── races-and-festivals/
            ├── home/
            │   └── dj-ballroom-hero.jpg
            ├── mastering/
            ├── music/
            └── publishing/
```

---

## Frontmatter Schema

Each Markdown file must begin with a YAML frontmatter block enclosed by `---`:

```yaml
---
title: "Article or Page Title"
date: "YYYY-MM-DD"
category: "acoustics"           # Optional: e.g., acoustics, dj, label
tags: ["subwoofer", "design"]   # Optional: array of topic tags
description: "Brief summary"     # Optional: for SEO meta descriptions
---
```

---

## Image Referencing Conventions

When authoring Markdown content:
1. Always place your images in `public/images/[type]/[slug]/`:
   - Pages: `public/images/pages/[slug]/[filename].jpg`
   - Blog posts: `public/images/blog/[slug]/[filename].jpg`
2. In your Markdown file, reference the image using the relative syntax:
   ```markdown
   ![Descriptive Alt Text](images/filename.jpg)
   ```
3. The content parser (`src/lib/content.js`) automatically transforms `images/filename.jpg` into the absolute public URL:
   `/images/pages/[slug]/filename.jpg` or `/images/blog/[slug]/filename.jpg`.

---

## Content Parser API (`src/lib/content.js`)

The application consumes Markdown via utility functions exported by `src/lib/content.js`:

| Function | Return Type | Description |
| :--- | :--- | :--- |
| `getPageContent(slug)` | `Promise<ContentObject>` | Fetches and renders a page from `content/pages/[slug].md` |
| `getAllPages()` | `Promise<ContentObject[]>` | Returns all rendered static pages sorted alphabetically by title |
| `getAllBlogPosts()` | `Promise<ContentObject[]>` | Returns all blog articles sorted by date (newest first) |
| `getContentBySlug(slug, type)` | `Promise<ContentObject>` | Retrieves content from `pages/` or `blog/` based on `type` |
| `getContentByCategory(cat)` | `Promise<ContentObject[]>` | Filters all posts and pages matching a given category or tag |
| `processContentImages(html, slug, type)` | `string` | Regex processor converting relative markdown image paths to public URLs |

---

## DJ Event Gallery API & Image Conventions (`src/lib/djGallery.js`)

The DJ services page (`/dj-services`) dynamically discovers and renders event photography via `getDJEventPhotos()` and `TabbedEventGallery.js`.

### Dynamic Event Loader API:
| Function | Return Type | Description |
| :--- | :--- | :--- |
| `getDJEventPhotos()` | `Record<string, CategoryGallery>` | Reads subdirectories under `public/images/pages/dj-services/`, returning categorised images, formatted titles, and icons. |

### Adding New Event Photos:
1. Place photo files directly into the target category folder:
   - `public/images/pages/dj-services/weddings/`
   - `public/images/pages/dj-services/corporate-events/`
   - `public/images/pages/dj-services/nightclubs/`
   - `public/images/pages/dj-services/races-and-festivals/`
2. **Supported formats**: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`, `.gif`.
3. **Automatic Title Generation**: File names are automatically converted to human-readable titles (e.g. `Love Lab Disco 1.JPEG` → "Love Lab Disco 1", `dj-setup-on-rooftop.jpeg` → "dj setup on rooftop").
4. **Instant Updates**: No code changes or database migrations needed. Photos added to these folders appear immediately in the tabbed gallery and lightbox modal upon reload.

### `ContentObject` Shape:
```javascript
{
  slug: 'subwoofer-design-study',
  type: 'blog',
  frontmatter: {
    title: 'Subwoofer Design Study',
    date: '2020-07-15',
    // ...
  },
  content: '<h1>Subwoofer Design Study</h1>...', // Compiled HTML
  images: [
    {
      filename: '3DModel.png',
      path: '/images/blog/subwoofer-design-study/3DModel.png',
      alt: '3DModel'
    }
  ],
  lastModified: Date
}
```

---

## Adding New Content

### To add a new static page:
1. Create `content/pages/[slug].md`.
2. Create `public/images/pages/[slug]/` if images are needed.
3. If the page requires a dedicated App Router layout or React components, create `src/app/[slug]/page.js` and call `await getPageContent('[slug]')`.

### To add a new blog or acoustics article:
1. Create `content/blog/[slug].md`.
2. Place all images in `public/images/blog/[slug]/`.
3. Reference images as `![Alt](images/filename.jpg)`.
4. The article will automatically be picked up by `getAllBlogPosts()`.
