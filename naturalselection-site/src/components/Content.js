import Image from 'next/image';

/**
 * ContentRenderer - Displays processed markdown content with proper styling
 */
export function ContentRenderer({ content, className = "" }) {
  return (
    <div 
      className={`prose prose-lg max-w-none ${className}`}
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
        <div key={index} className="relative overflow-hidden rounded-2xl border border-emerald-500/20 shadow-md">
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
  const { frontmatter, content, images } = post;
  const previewImage = images && images.length > 0 ? images[0] : null;

  return (
    <div className={`theme-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-200 ${className}`}>
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
        <h3 className="text-xl font-semibold mb-2 theme-heading">
          {frontmatter.title}
        </h3>
        
        {frontmatter.date && (
          <p className="text-sm theme-muted mb-3">
            {new Date(frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        )}
        
        <div 
          className="theme-body prose prose-sm"
          dangerouslySetInnerHTML={{ 
            __html: content.split('</p>')[0] + '</p>' // First paragraph as preview
          }}
        />
        
        {frontmatter.category && (
          <div className="mt-4">
            <span className="inline-block gradient-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
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
    <div className={`gradient-mesh text-white py-16 relative overflow-hidden ${className}`}>
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
      
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{title}</h1>
        
        {subtitle && (
          <p className="text-xl md:text-2xl text-emerald-100/90 mb-4 font-light">{subtitle}</p>
        )}
        
        {date && (
          <p className="text-emerald-200/70 text-sm">
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
    ? "theme-page" 
    : background === "dark" 
    ? "gradient-primary text-white" 
    : background === "card"
    ? "theme-card"
    : "theme-page";

  const textClass = background === "dark" 
    ? "text-white" 
    : "theme-body";

  return (
    <div className={`py-16 ${bgClass} ${className}`}>
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${textClass}`}>
        {children}
      </div>
    </div>
  );
}