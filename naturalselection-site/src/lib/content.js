import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Use the new clean content directory structure
const contentDirectory = path.join(process.cwd(), 'content');
const pagesDirectory = path.join(contentDirectory, 'pages');
const blogDirectory = path.join(contentDirectory, 'blog');

/**
 * Get all page content files from the pages directory
 */
export function getAllPageSlugs() {
  if (!fs.existsSync(pagesDirectory)) {
    return [];
  }

  return fs.readdirSync(pagesDirectory)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''));
}

/**
 * Get all blog post slugs from the blog directory
 */
export function getAllBlogSlugs() {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs.readdirSync(blogDirectory)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''));
}

/**
 * Get content by slug from either pages or blog
 */
export async function getContentBySlug(slug, type = 'page') {
  try {
    const contentDir = type === 'blog' ? blogDirectory : pagesDirectory;
    const filePath = path.join(contentDir, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Process markdown to HTML
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(content);
    
    const contentHtml = processedContent.toString();
    
    // Get associated images
    const images = getContentImages(slug, type);
    
    return {
      slug,
      type,
      frontmatter: data,
      content: contentHtml,
      images,
      lastModified: fs.statSync(filePath).mtime
    };
  } catch (error) {
    console.error(`Error reading content for ${slug}:`, error);
    return null;
  }
}

/**
 * Get images associated with a content piece
 */
function getContentImages(slug, type = 'page') {
  const imagesDir = path.join(process.cwd(), 'public', 'images', type === 'blog' ? 'blog' : 'pages', slug);
  const images = [];
  
  if (fs.existsSync(imagesDir)) {
    const imageFiles = fs.readdirSync(imagesDir);
    for (const imageFile of imageFiles) {
      if (/\.(jpg|jpeg|png|gif|webp)$/i.test(imageFile)) {
        images.push({
          filename: imageFile,
          path: `/images/${type === 'blog' ? 'blog' : 'pages'}/${slug}/${imageFile}`,
          alt: imageFile.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' ')
        });
      }
    }
  }
  
  return images;
}

/**
 * Get a specific page's content by slug
 */
export async function getPageContent(slug) {
  return await getContentBySlug(slug, 'page');
}

/**
 * Get all blog posts
 */
export async function getAllBlogPosts() {
  const slugs = getAllBlogSlugs();
  const posts = [];
  
  for (const slug of slugs) {
    const post = await getContentBySlug(slug, 'blog');
    if (post) {
      posts.push(post);
    }
  }
  
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || '1970-01-01');
    const dateB = new Date(b.frontmatter.date || '1970-01-01');
    return dateB - dateA; // Newest first
  });
}

/**
 * Get all pages
 */
export async function getAllPages() {
  const slugs = getAllPageSlugs();
  const pages = [];
  
  for (const slug of slugs) {
    const page = await getContentBySlug(slug, 'page');
    if (page) {
      pages.push(page);
    }
  }
  
  return pages.sort((a, b) => {
    const titleA = a.frontmatter.title || a.slug;
    const titleB = b.frontmatter.title || b.slug;
    return titleA.localeCompare(titleB);
  });
}

/**
 * Get all posts/content for backward compatibility
 */
export async function getAllPosts() {
  const [pages, posts] = await Promise.all([
    getAllPages(),
    getAllBlogPosts()
  ]);
  
  return [...pages, ...posts].sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || '1970-01-01');
    const dateB = new Date(b.frontmatter.date || '1970-01-01');
    return dateB - dateA; // Newest first
  });
}

/**
 * Get content by category/type - updated for new structure
 */
export async function getContentByCategory(category) {
  const allContent = await getAllPosts();
  
  return allContent.filter(content => 
    content.frontmatter.category === category ||
    content.slug.includes(category) ||
    content.frontmatter.tags?.includes(category)
  );
}

/**
 * Process markdown content and fix image paths for new structure
 */
export function processContentImages(content, slug, type = 'page') {
  return content.replace(
    /!\[([^\]]*)\]\(images\/([^)]+)\)/g,
    `![$1](/images/${type === 'blog' ? 'blog' : 'pages'}/${slug}/$2)`
  );
}

/**
 * Legacy function for WordPress-style paths - now redirects to new structure
 * @deprecated Use getContentBySlug instead
 */
export async function getContentByPath(contentPath) {
  // Try to map old WordPress paths to new slugs
  const pathSegments = contentPath.split('/');
  const slug = pathSegments[pathSegments.length - 1] || pathSegments[pathSegments.length - 2];
  
  // First try as page
  let content = await getContentBySlug(slug, 'page');
  if (content) return content;
  
  // Then try as blog post
  content = await getContentBySlug(slug, 'blog');
  if (content) return content;
  
  return null;
}