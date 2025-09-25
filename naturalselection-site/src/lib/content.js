import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'public/content/pages');

/**
 * Get all content files recursively from the content directory
 */
export function getAllContentPaths() {
  const paths = [];
  
  function scanDirectory(dir, relativePath = '') {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath, path.join(relativePath, item));
      } else if (item === 'index.md') {
        paths.push(relativePath);
      }
    }
  }
  
  if (fs.existsSync(contentDirectory)) {
    scanDirectory(contentDirectory);
  }
  
  return paths;
}

/**
 * Get content by path (e.g., '2015/10/about')
 */
export async function getContentByPath(contentPath) {
  try {
    const fullPath = path.join(contentDirectory, contentPath, 'index.md');
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Process markdown to HTML
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(content);
    
    const contentHtml = processedContent.toString();
    
    // Get images directory if it exists
    const imagesDir = path.join(contentDirectory, contentPath, 'images');
    const images = [];
    
    if (fs.existsSync(imagesDir)) {
      const imageFiles = fs.readdirSync(imagesDir);
      for (const imageFile of imageFiles) {
        if (/\.(jpg|jpeg|png|gif|webp)$/i.test(imageFile)) {
          images.push({
            filename: imageFile,
            path: `/content/pages/${contentPath}/images/${imageFile}`,
            alt: imageFile.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' ')
          });
        }
      }
    }
    
    return {
      path: contentPath,
      frontmatter: data,
      content: contentHtml,
      images,
      lastModified: fs.statSync(fullPath).mtime
    };
  } catch (error) {
    console.error(`Error reading content at ${contentPath}:`, error);
    return null;
  }
}

/**
 * Get content by category/type
 */
export async function getContentByCategory(category) {
  const allPaths = getAllContentPaths();
  const categoryContent = [];
  
  for (const contentPath of allPaths) {
    if (contentPath.includes(category)) {
      const content = await getContentByPath(contentPath);
      if (content) {
        categoryContent.push(content);
      }
    }
  }
  
  return categoryContent.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || '1970-01-01');
    const dateB = new Date(b.frontmatter.date || '1970-01-01');
    return dateB - dateA; // Newest first
  });
}

/**
 * Get a specific page's content by slug
 */
export async function getPageContent(slug) {
  const allPaths = getAllContentPaths();
  
  // Look for content that matches the slug
  for (const contentPath of allPaths) {
    const content = await getContentByPath(contentPath);
    if (content && (
      content.frontmatter.slug === slug ||
      content.frontmatter.title?.toLowerCase() === slug.toLowerCase() ||
      contentPath.includes(slug)
    )) {
      return content;
    }
  }
  
  return null;
}

/**
 * Get all posts/projects for blog-style content
 */
export async function getAllPosts() {
  const allPaths = getAllContentPaths();
  const posts = [];
  
  for (const contentPath of allPaths) {
    const content = await getContentByPath(contentPath);
    if (content) {
      posts.push({
        ...content,
        slug: contentPath.replace(/\//g, '-')
      });
    }
  }
  
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || '1970-01-01');
    const dateB = new Date(b.frontmatter.date || '1970-01-01');
    return dateB - dateA; // Newest first
  });
}

/**
 * Process markdown content and fix image paths
 */
export function processContentImages(content, basePath) {
  return content.replace(
    /!\[([^\]]*)\]\(images\/([^)]+)\)/g,
    `![$1](/content/pages/${basePath}/images/$2)`
  );
}