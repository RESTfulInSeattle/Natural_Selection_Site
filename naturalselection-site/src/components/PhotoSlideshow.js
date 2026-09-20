'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { claytonPhotos, DRIVE_FOLDER_URL } from '@/data/claytonPhotos';

export default function PhotoSlideshow({ photos = claytonPhotos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const autoplayTimerRef = useRef(null);
  const containerRef = useRef(null);

  const total = photos.length;
  const currentPhoto = photos[currentIndex] || photos[0];

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, isLightboxOpen]);

  // Autoplay functionality
  useEffect(() => {
    if (isPlaying) {
      autoplayTimerRef.current = setInterval(() => {
        goToNext();
      }, 4500);
    } else {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    }
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isPlaying, goToNext]);

  // Touch Swipe handlers
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
      // Swiped left -> next
      goToNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev
      goToPrev();
    }
  };

  if (!photos || photos.length === 0) {
    return (
      <div className="p-8 text-center text-gray-400">
        No photos available at this time.
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="gradient-primary rounded-2xl p-4 sm:p-6 border border-white/10 shadow-2xl"
      aria-label="Clayton The Chemist Photo Slideshow"
      role="region"
    >
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 pb-4 border-b border-gray-700/60 gap-3">
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <span>📷</span> Clayton The Chemist Photo Gallery
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            Live DJ sets, club gigs, and artist photography
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Autoplay Toggle */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
              isPlaying
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            title={isPlaying ? 'Pause Autoplay' : 'Start Autoplay'}
          >
            {isPlaying ? (
              <>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
                <span>Autoplay ON</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Autoplay</span>
              </>
            )}
          </button>

          {/* Google Drive Link */}
          <a
            href={DRIVE_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-blue-600/80 hover:bg-blue-600 text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 shadow-md shadow-blue-900/30"
            title="Open full Google Drive folder"
          >
            <span>Google Drive</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Slide Viewport */}
      <div
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] max-h-[560px] rounded-xl overflow-hidden bg-black/80 shadow-2xl select-none group"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          fill
          priority={currentIndex === 0}
          className="object-contain transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
        />

        {/* Gradient overlays for controls readability */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

        {/* Top-Right: Slide Count & Fullscreen Button */}
        <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
          <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-mono px-2.5 py-1 rounded-full border border-white/10">
            {currentIndex + 1} / {total}
          </span>
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="p-2 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white rounded-full border border-white/10 transition-colors shadow-lg"
            title="Expand Fullscreen / Lightbox"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
            </svg>
          </button>
        </div>

        {/* Previous Button */}
        <button
          onClick={goToPrev}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/60 hover:bg-black/90 text-white rounded-full backdrop-blur-sm border border-white/15 transition-all opacity-80 group-hover:opacity-100 hover:scale-105 z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/60 hover:bg-black/90 text-white rounded-full backdrop-blur-sm border border-white/15 transition-all opacity-80 group-hover:opacity-100 hover:scale-105 z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Bottom Caption Overlay */}
        <div className="absolute bottom-3 left-4 right-4 text-left z-10">
          <h4 className="text-white font-semibold text-base sm:text-lg drop-shadow-md">
            {currentPhoto.title}
          </h4>
          <p className="text-gray-300 text-xs sm:text-sm drop-shadow line-clamp-1">
            {currentPhoto.alt}
          </p>
        </div>
      </div>

      {/* Thumbnail Navigation Strip */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        {photos.map((photo, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={photo.id}
              onClick={() => goToSlide(index)}
              className={`relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                isActive
                  ? 'border-blue-500 scale-105 shadow-lg shadow-blue-500/40 ring-2 ring-blue-400/30'
                  : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-500'
              }`}
              title={photo.title}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Lightbox Top bar */}
          <div className="flex items-center justify-between text-white z-20" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-base sm:text-lg">{currentPhoto.title}</span>
              <span className="text-xs text-gray-400 font-mono bg-white/10 px-2.5 py-0.5 rounded-full">
                {currentIndex + 1} / {total}
              </span>
            </div>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              title="Close (Esc)"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Lightbox Main Image */}
          <div
            className="relative flex-1 w-full my-4 flex items-center justify-center select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-h-[85vh] max-w-[90vw]">
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                fill
                className="object-contain"
                sizes="95vw"
                priority
              />
            </div>

            {/* Lightbox Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 bg-black/70 hover:bg-black/90 text-white rounded-full border border-white/20 transition-all hover:scale-110"
              aria-label="Previous photo"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Lightbox Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 bg-black/70 hover:bg-black/90 text-white rounded-full border border-white/20 transition-all hover:scale-110"
              aria-label="Next photo"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Lightbox Footer */}
          <div className="text-center text-xs text-gray-400 z-20" onClick={(e) => e.stopPropagation()}>
            Use Arrow keys to navigate • Press Esc or click outside to close
          </div>
        </div>
      )}
    </div>
  );
}
