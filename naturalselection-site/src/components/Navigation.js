'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMusicDropdownOpen, setIsMusicDropdownOpen] = useState(false);
  const pathname = usePathname();

  const getLogo = () => {
    if (pathname?.startsWith('/dj-services')) {
      return {
        src: '/images/ns-deejaying_header_white.png',
        alt: 'Natural Selection Deejaying',
        width: 400,
        height: 188,
      };
    }
    if (pathname?.startsWith('/mastering')) {
      return {
        src: '/images/ns-mastering_header_white.png',
        alt: 'Natural Selection Mastering',
        width: 407,
        height: 188,
      };
    }
    return {
      src: '/images/ns-music_header_white.png',
      alt: 'Natural Selection Music',
      width: 399,
      height: 188,
    };
  };

  const currentLogo = getLogo();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'DJ Services', href: '/dj-services' },
    { name: 'Mastering', href: '/mastering' },
    { name: 'Contact', href: '/contact' }
  ];

  const musicItems = [
    { name: 'Natural Selection Music', href: '/music' },
    { name: 'Clayton the Chemist', href: '/clayton-the-chemist' },
    { name: 'Music Publishing', href: '/publishing' }
  ];

  return (
    <nav className="bg-white/95 dark:bg-[#02070a]/95 text-slate-800 dark:text-white sticky top-0 z-50 shadow-sm dark:shadow-2xl backdrop-blur-md border-b border-slate-200/80 dark:border-emerald-500/20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Dynamic based on active page route & adapts brightness between Light and Dark mode */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              key={currentLogo.src}
              src={currentLogo.src}
              alt={currentLogo.alt}
              width={currentLogo.width}
              height={currentLogo.height}
              className="h-8 w-auto brightness-0 dark:brightness-100 hover:opacity-90 transition-all duration-200"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-300 hover:bg-emerald-50/80 dark:hover:bg-emerald-950/40 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Music Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsMusicDropdownOpen(true)}
                onMouseLeave={() => setIsMusicDropdownOpen(false)}
              >
                <button
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-300 hover:bg-emerald-50/80 dark:hover:bg-emerald-950/40 transition-colors duration-200 flex items-center gap-1"
                >
                  Music
                  <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isMusicDropdownOpen && (
                  <div
                    className="absolute right-0 mt-0 w-56 bg-white dark:bg-[#061217] rounded-xl shadow-xl dark:shadow-2xl border border-slate-200 dark:border-emerald-500/30 z-[9999] backdrop-blur-md overflow-hidden"
                    style={{ pointerEvents: 'auto', top: '100%' }}
                  >
                    <div className="py-1.5">
                      {musicItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Theme Switch */}
            <div className="pl-2 border-l border-slate-200 dark:border-emerald-500/30">
              <ThemeToggle showLabel={false} />
            </div>
          </div>

          {/* Mobile menu and theme toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle showLabel={false} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500 text-slate-700 dark:text-white"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <div className={`w-5 h-0.5 bg-slate-800 dark:bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-slate-800 dark:bg-white transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-slate-800 dark:bg-white transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-emerald-500/20 bg-white/98 dark:bg-[#02070a]/98 backdrop-blur-xl">
          <div className="px-3 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/40 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Music Section */}
            <div className="border-t border-slate-200 dark:border-emerald-500/20 pt-3 mt-3">
              <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Music Sections
              </div>
              {musicItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/40 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Theme Toggle Row */}
            <div className="border-t border-slate-200 dark:border-emerald-500/20 pt-3 mt-3 px-3 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Appearance</span>
              <ThemeToggle showLabel={true} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}