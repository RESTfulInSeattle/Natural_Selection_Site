import Image from 'next/image';

/**
 * ContentRenderer - Displays processed markdown content with proper styling
 */
export function ContentRenderer({ content, className = "" }) {
  return (
    <div 
      className={`prose prose-lg max-w-none text-gray-900 ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

/**
 * ImageGallery - Displays a gallery of images with Next.js optimization
 */
export function ImageGallery({ images, className = "" }) {
  if (!images || images.length === 0) return null;

  return (
    <div className={`grid gap-6 ${className}`}>
      {images.map((image, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg">
          <Image
            src={image.path}
            alt={image.alt || `Gallery image ${index + 1}`}
            width={800}
            height={600}
            className="w-full h-auto object-cover"
            style={{ objectFit: 'cover' }}
          />
        </div>
      ))}
    </div>
  );
}

/**
 * PostCard - Card component for displaying content summaries
 */
export function PostCard({ post, className = "" }) {
  const { frontmatter, content, images, slug } = post;
  const previewImage = images && images.length > 0 ? images[0] : null;

  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden hover:shadow-xl transition-all duration-200 ${className}`}>
      {previewImage && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={previewImage.path}
            alt={previewImage.alt || frontmatter.title}
            fill
            className="object-cover"
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">
          {frontmatter.title}
        </h3>
        
        {frontmatter.date && (
          <p className="text-sm text-gray-600 mb-3">
            {new Date(frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        )}
        
        <div 
          className="text-gray-700 prose prose-sm"
          dangerouslySetInnerHTML={{ 
            __html: content.split('</p>')[0] + '</p>' // First paragraph as preview
          }}
        />
        
        {frontmatter.category && (
          <div className="mt-4">
            <span className="inline-block bg-gradient-accent text-white px-3 py-1 rounded-full text-xs font-medium">
              {frontmatter.category}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * ContentHero - Hero section component for content pages
 */
export function ContentHero({ title, subtitle, date, image, className = "" }) {
  return (
    <div className={`gradient-hero text-white py-16 relative overflow-hidden ${className}`}>
      {image && (
        <div className="absolute inset-0 opacity-20">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-300 mb-4">{subtitle}</p>
        )}
        
        {date && (
          <p className="text-gray-400">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        )}
      </div>
    </div>
  );
}

/**
 * ContentSection - Wrapper for content sections with consistent styling
 */
export function ContentSection({ children, className = "", background = "light" }) {
  const bgClass = background === "light" 
    ? "gradient-section-light" 
    : background === "dark" 
    ? "gradient-primary text-white" 
    : "bg-white";

  return (
    <div className={`py-16 ${bgClass} ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}