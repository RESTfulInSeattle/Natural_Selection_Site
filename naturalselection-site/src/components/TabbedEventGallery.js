'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export default function TabbedEventGallery({ categories = {} }) {
  const categoryKeys = Object.keys(categories);
  const [activeTab, setActiveTab] = useState(categoryKeys[0] || 'weddings');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const activeCategory = categories[activeTab] || { images: [], title: '', icon: '' };
  const currentImages = activeCategory.images || [];

  const isLightboxOpen = lightboxIndex !== null && currentImages[lightboxIndex] !== undefined;
  const currentPhoto = isLightboxOpen ? currentImages[lightboxIndex] : null;

  const goToNext = useCallback(() => {
    if (currentImages.length <= 1) return;
    setLightboxIndex((prev) => (prev + 1) % currentImages.length);
  }, [currentImages.length]);

  const goToPrev = useCallback(() => {
    if (currentImages.length <= 1) return;
    setLightboxIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  }, [currentImages.length]);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, goToNext, goToPrev, closeLightbox]);

  // Handle touch gestures for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrev();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div className="mb-14">

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8" role="tablist" aria-label="Event categories">
        {categoryKeys.map((key) => {
          const category = categories[key];
          const isActive = activeTab === key;
          const count = category.images?.length || 0;

          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              role="tab"
              aria-selected={isActive}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'gradient-accent text-white shadow-lg shadow-sky-950/20 dark:shadow-sky-950/50 scale-[1.02]'
                  : 'bg-white/80 dark:bg-slate-900/80 theme-body hover:theme-heading border border-slate-200/80 dark:border-emerald-500/20 hover:border-emerald-500/40'
              }`}
            >
              <span className="text-base">{category.icon}</span>
              <span>{category.title}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Gallery Grid or Empty State */}
      {currentImages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {currentImages.map((image, idx) => (
            <div
              key={image.id || `${activeTab}-${idx}`}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer theme-card border border-slate-200/80 dark:border-emerald-500/20 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              role="button"
              tabIndex={0}
              aria-label={`View ${image.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxIndex(idx);
                }
              }}
            >
              <Image
                src={image.src}
                alt={image.title || `${activeCategory.title} photo`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-white text-sm font-semibold truncate drop-shadow-sm">
                  {image.title}
                </span>
                <span className="text-emerald-300 text-xs flex items-center gap-1 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  Click to enlarge
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="theme-card-subtle rounded-2xl p-10 sm:p-14 text-center border-2 border-dashed border-slate-300/80 dark:border-emerald-500/20 max-w-2xl mx-auto">
          <div className="text-5xl mb-3">{activeCategory.icon}</div>
          <h3 className="text-lg font-bold theme-heading mb-1">
            {activeCategory.title} Gallery
          </h3>
          <p className="theme-muted text-sm mb-4 leading-relaxed">
            Photos for this category are being prepared and will be available soon.
          </p>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
            <span>📁 Ready for images in: public/images/pages/dj-services/{activeTab}</span>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && currentPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label={currentPhoto.title}
        >
          {/* Top Bar with Counter and Close Button */}
          <div className="absolute top-4 inset-x-4 sm:inset-x-6 flex items-center justify-between text-white z-10 pointer-events-none">
            <div className="pointer-events-auto bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-white/10">
              {lightboxIndex + 1} / {currentImages.length} • {activeCategory.title}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="pointer-events-auto w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              title="Close (Esc)"
              aria-label="Close lightbox"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Previous Button */}
          {currentImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="hidden sm:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white items-center justify-center border border-white/20 transition-all duration-200 hover:scale-110 active:scale-95 z-10 cursor-pointer"
              title="Previous Photo (Left Arrow)"
              aria-label="Previous photo"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Main Photo Container */}
          <div
            className="relative w-full max-w-5xl h-[75vh] sm:h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentPhoto.src}
              alt={currentPhoto.title || 'Event photo'}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-contain"
            />
          </div>

          {/* Next Button */}
          {currentImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="hidden sm:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white items-center justify-center border border-white/20 transition-all duration-200 hover:scale-110 active:scale-95 z-10 cursor-pointer"
              title="Next Photo (Right Arrow)"
              aria-label="Next photo"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Bottom Title Bar */}
          <div className="absolute bottom-4 inset-x-4 sm:inset-x-6 flex justify-center pointer-events-none">
            <div className="pointer-events-auto bg-black/70 backdrop-blur-md px-5 py-2 rounded-xl text-white text-sm font-medium border border-white/10 max-w-lg text-center truncate">
              {currentPhoto.title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
