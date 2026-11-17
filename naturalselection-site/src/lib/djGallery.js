import fs from 'fs';
import path from 'path';

/**
 * Reads event gallery images dynamically from public/images/pages/dj-services/[category]
 */
export function getDJEventPhotos() {
  const possibleRoots = [
    path.join(process.cwd(), 'public', 'images', 'pages', 'dj-services'),
    path.join(process.cwd(), 'naturalselection-site', 'public', 'images', 'pages', 'dj-services'),
  ];
  const baseDir = possibleRoots.find((p) => fs.existsSync(p)) || possibleRoots[0];

  const categories = [
    { key: 'weddings', title: 'Weddings', icon: '💒' },
    { key: 'corporate-events', title: 'Corporate Events', icon: '🏢' },
    { key: 'nightclubs', title: 'Nightclubs', icon: '🎵' },
    { key: 'races-and-festivals', title: 'Races & Festivals', icon: '🏃' },
  ];

  const validExts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);
  const result = {};

  categories.forEach(({ key, title, icon }) => {
    const images = [];
    const folderPath = path.join(baseDir, key);

    if (fs.existsSync(folderPath)) {
      try {
        const files = fs.readdirSync(folderPath);
        for (const file of files) {
          const ext = path.extname(file).toLowerCase();
          if (validExts.has(ext)) {
            const formattedTitle = file
              .replace(/\.[^/.]+$/, '')
              .replace(/[-_]/g, ' ')
              .replace(/\s+/g, ' ')
              .trim();

            images.push({
              id: `${key}-${file}`,
              src: `/images/pages/dj-services/${key}/${encodeURI(file)}`,
              filename: file,
              title: formattedTitle,
              category: key,
            });
          }
        }
      } catch (err) {
        console.error(`Error reading ${folderPath}:`, err);
      }
    }

    result[key] = {
      key,
      title,
      icon,
      images,
    };
  });

  return result;
}
