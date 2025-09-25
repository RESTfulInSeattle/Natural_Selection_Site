'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMusicDropdownOpen, setIsMusicDropdownOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'DJ Services', href: '/dj-services' },
    { name: 'Mastering', href: '/mastering' },
    { name: 'Contact', href: '/contact' }
  ];

  const musicItems = [
    { name: 'Natural Selection Albums', href: '/music' },
    { name: 'Clayton the Chemist', href: '/clayton-the-chemist' },
    { name: 'Music Publishing', href: '/publishing' }
  ];

  return (
    <nav className="gradient-primary text-white sticky top-0 z-50 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/content/images/ns-deejaying_header_white.png"
              alt="Natural Selection"
              width={200}
              height={34}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Music Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsMusicDropdownOpen(true)}
                  onMouseLeave={() => setIsMusicDropdownOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors duration-200 flex items-center"
                >
                  Music
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isMusicDropdownOpen && (
                  <div
                    onMouseEnter={() => setIsMusicDropdownOpen(true)}
                    onMouseLeave={() => setIsMusicDropdownOpen(false)}
                    className="absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-md shadow-xl z-50"
                  >
                    <div className="py-1">
                      {musicItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-white transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-white transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 gradient-accent backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Music Section */}
            <div className="border-t border-gray-700 pt-2 mt-2">
              <div className="px-3 py-2 text-base font-medium text-gray-300">Music</div>
              {musicItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-6 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}