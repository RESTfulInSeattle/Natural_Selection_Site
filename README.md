# Natural Selection DJ Services Website

This is a modern Next.js website conversion from the original WordPress site for Natural Selection DJ Services.

## Features

- **Responsive Design** - Works on all devices
- **Modern Tech Stack** - Next.js 15, React 19, Tailwind CSS
- **Service Pages** - DJ Services, Mastering, Music, Publishing
- **Professional Presentation** - Clean, modern design
- **Music Integration** - Ready for SoundCloud/Spotify embeds

## Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Project Overview

**Natural Selection** is a professional music production and DJ services website created and maintained by Dave Clayton since October 2003. The project is a modern migration of the original WordPress site to a contemporary Next.js application with a clean, organized content structure.

### About Natural Selection

Natural Selection provides a comprehensive range of music and audio services:

- **Venue & Event DJ Services** - Professional DJ services for events and venues
- **Sound System & DJ Lighting** - High-quality sound systems and professional lighting setup
- **Audio Mastering & Engineering** - Professional mastering services with world-class digital technology, delivering multiple formats (MP3, WAV, FLAC, Apple Lossless, Redbook-compliant CD)
- **Acoustical Consultation** - Expert acoustical advice and consultation

### Architecture

The project contains two main implementations:

1. **Modern Next.js Site** (`naturalselection-site/`)
   - Next.js 15 with React 19
   - Tailwind CSS for styling
   - ESLint configuration included
   - Markdown-based content with frontmatter (gray-matter)
   - Markdown to HTML conversion (remark)
   - Clean content directory structure separated from WordPress legacy folders

2. **Legacy Hugo Static Site** (`static_site/naturalselection-hugo/`)
   - Original Hugo-based static site generation
   - Maintained for reference/backup purposes
   - Old WordPress-style nested date folder structure

### Technology Stack

**Next.js Application:**
- `next@^16.0.7` - React framework
- `react@^19.0.0` & `react-dom@^19.0.0` - UI library
- `tailwindcss@^4` - Utility-first CSS framework
- `gray-matter@^4.0.3` - YAML frontmatter parsing
- `remark@^15.0.1` & `remark-html@^16.0.1` - Markdown processing
- `eslint@^9` - Code quality linting

### Content Structure

The project uses a clean, modern content organization:

```
content/
├── pages/          # Static pages (about, contact, services, etc.)
└── blog/           # Blog posts and articles

public/images/
├── pages/          # Page-specific images
└── blog/           # Blog post images
```

**Supported content files:**
- `about.md` - About Natural Selection and services
- `contact.md` - Contact information
- `music.md` - Music portfolio with SoundCloud and Spotify embeds
- `mastering.md` - Audio mastering services
- `publishing.md` - Music publishing information
- `clayton-the-chemist.md` - Artist profile
- `dj-services.md` - DJ services details
- Blog posts including subwoofer design studies and equipment reviews

### Key Features

- **Responsive Design** - Mobile-first, works seamlessly on all devices
- **Modern Tech Stack** - Latest Next.js, React, and styling technologies
- **Content Management** - Markdown-based content with frontmatter for easy updates
- **Music Integration** - Native support for SoundCloud, Spotify, and Apple Music embeds
- **Professional Presentation** - Clean, modern design showcasing services
- **Performance Optimized** - Uses Turbopack for fast development builds
- **SEO Friendly** - Clean URL structure and semantic markup

### Development Scripts

- `npm run dev` - Start development server with Turbopack (http://localhost:3000)
- `npm run build` - Create optimized production build
- `npm start` - Run production server
- `npm run lint` - Run ESLint code quality checks

### Project Organization

- `naturalselection-site/` - Main Next.js application (active development)
- `static_site/` - Legacy Hugo site and old structure backups
- `wp_global_styles/` - WordPress theme configuration archives
- `wp_navigation/` - WordPress navigation exports

This project represents a modern, maintainable approach to presenting professional music services with clean content management and responsive design.
