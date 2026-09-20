'use client';

import Image from 'next/image';
import { DRIVE_FOLDER_URL } from '@/data/claytonPhotos';

export default function ClaytonEPK() {
  const pdfDownloadUrl = '/documents/Dave-Clayton-Clayton-The-Chemist-EPK.pdf';

  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@claytonthechemist',
      href: 'https://instagram.com/claytonthechemist',
      color: 'hover:text-pink-400',
    },
    {
      name: 'YouTube',
      handle: 'youtube.com/claytonthechemist',
      href: 'https://www.youtube.com/claytonthechemist',
      color: 'hover:text-red-400',
    },
    {
      name: 'SoundCloud',
      handle: 'soundcloud.com/claytonthechemist',
      href: 'https://soundcloud.com/claytonthechemist',
      color: 'hover:text-orange-400',
    },
    {
      name: 'MixCloud',
      handle: 'mixcloud.com/ClaytontheChemist',
      href: 'https://www.mixcloud.com/ClaytontheChemist/',
      color: 'hover:text-blue-400',
    },
    {
      name: 'BandCamp',
      handle: 'claytonthechemist.bandcamp.com',
      href: 'https://claytonthechemist.bandcamp.com/',
      color: 'hover:text-cyan-400',
    },
    {
      name: 'Twitch',
      handle: 'twitch.tv/claytonthechemist',
      href: 'https://www.twitch.tv/claytonthechemist',
      color: 'hover:text-purple-400',
    },
  ];

  const genres = ['House', 'Bass', 'Drum & Bass', 'Acid Jazz', 'Downtempo'];

  const labels = [
    'Selekta Recordings',
    'Emby',
    'Om Records',
    'Fort Knox Recordings',
    'Funk Weapons',
    'Super Hi Fi',
    'IDR',
    'Dae Recordings',
    'Natural Selection',
  ];

  const openingGigs = ['De La Soul', 'Massive Attack', 'LTJ Bukem', 'DJ Krush'];

  return (
    <div className="space-y-6">
      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-gray-900/80 border border-gray-700/60 shadow-lg">
        <div>
          <h4 className="text-white font-bold text-lg flex items-center gap-2">
            <span>📄</span> Electronic Press Kit (EPK)
          </h4>
          <p className="text-gray-400 text-xs sm:text-sm">
            Official press, booking, and media kit for Dave Clayton (Clayton The Chemist)
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Download PDF Button */}
          <a
            href={pdfDownloadUrl}
            download="Dave-Clayton-Clayton-The-Chemist-EPK.pdf"
            className="flex-1 sm:flex-initial px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/30 hover:scale-105"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download EPK (PDF)</span>
          </a>

          {/* Print Button */}
          <button
            onClick={() => window.print()}
            className="px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white rounded-lg text-sm font-medium transition-colors border border-gray-700 flex items-center gap-2"
            title="Print or Save as PDF"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <span className="hidden sm:inline">Print</span>
          </button>
        </div>
      </div>

      {/* EPK Main Paper Card */}
      <div className="bg-white text-gray-900 rounded-2xl p-6 sm:p-10 md:p-12 shadow-2xl border border-gray-200">
        {/* Header Section */}
        <div className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-8 pb-8 border-b border-gray-200">
          {/* Identity & Basic Info */}
          <div className="space-y-6 flex-1">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <circle cx="50" cy="50" r="48" stroke="#111" strokeWidth="4" />
                <circle cx="50" cy="50" r="40" stroke="#111" strokeWidth="3" />
                <circle cx="50" cy="50" r="32" stroke="#111" strokeWidth="2.5" />
                <circle cx="50" cy="50" r="24" stroke="#111" strokeWidth="2" />
                <circle cx="50" cy="50" r="16" stroke="#111" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="8" fill="#111" />
                <circle cx="50" cy="50" r="3" fill="#fff" />
              </svg>
              <div>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 leading-tight">
                  clayton<br />the chemist
                </h1>
              </div>
            </div>

            {/* Quick Meta */}
            <div className="space-y-1 text-sm sm:text-base text-gray-700">
              <p><span className="font-bold text-gray-900">Name:</span> Dave Clayton</p>
              <p><span className="font-bold text-gray-900">Location:</span> Seattle, WA</p>
              <p>
                <span className="font-bold text-gray-900">Affiliations:</span>{' '}
                <a href="https://naturalselectionmusic.com" className="text-blue-600 hover:underline">NaturalSelectionMusic.com</a>, SEMPA
              </p>
            </div>
          </div>

          {/* Instax Polaroid Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="w-48 sm:w-56 bg-white p-2 pb-6 rounded shadow-xl border border-gray-200 transform md:rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="relative w-full aspect-square bg-gray-100 rounded overflow-hidden">
                <Image
                  src="/images/pages/clayton-the-chemist/Clayton-The-Chemist-Instax.jpeg"
                  alt="Dave Clayton - Clayton The Chemist"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-xs text-gray-500 mt-2 font-mono">Clayton The Chemist</p>
            </div>
          </div>
        </div>

        {/* Contact & Links Section */}
        <div className="py-6 border-b border-gray-200 grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <span className="font-bold text-gray-900">Contact: </span>
            <a href="mailto:clayton@naturalselectionmusic.com" className="text-blue-600 hover:underline">
              clayton@naturalselectionmusic.com
            </a>
            {' '}| 206-851-0003
          </div>
          <div>
            <span className="font-bold text-gray-900">Websites: </span>
            <a href="https://claytonthechemist.com" className="text-blue-600 hover:underline">claytonthechemist.com</a>,{' '}
            <a href="https://naturalselectionmusic.com" className="text-blue-600 hover:underline">naturalselectionmusic.com</a>
          </div>
        </div>

        {/* Social & Streaming Channels */}
        <div className="py-6 border-b border-gray-200">
          <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-3">
            Social & Streaming Channels
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-gray-200 hover:border-gray-400 bg-gray-50 hover:bg-gray-100 transition-colors flex flex-col"
              >
                <span className="font-semibold text-gray-900">{item.name}</span>
                <span className="text-xs text-gray-600 truncate">{item.handle}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="py-6 border-b border-gray-200">
          <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-3">
            Summary
          </h3>
          <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            <p>
              Dave Clayton is a renaissance man in the music industry. He is adept at DJing, Music Production, Audio Mastering and Engineering, Acoustical Design, and is an avid instructor and mentor. He gravitates towards funky, soulful, and deep vibes in his sets, and masters a wealth of different genres for musical fulfilment. This is also evident in his productions and remixes.
            </p>
            <p>
              His DJ and live performances are vibrant, fun, and incorporate fusions of different genres and places into an artistic flow of consciousness.
            </p>
          </div>
        </div>

        {/* Genres */}
        <div className="py-6 border-b border-gray-200">
          <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-3">
            Genres
          </h3>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <span
                key={genre}
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs sm:text-sm font-medium border border-gray-300"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Labels Released On */}
        <div className="py-6 border-b border-gray-200">
          <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-3">
            Labels Released On
          </h3>
          <div className="flex flex-wrap gap-2">
            {labels.map((label) => (
              <span
                key={label}
                className="px-3 py-1 bg-blue-50 text-blue-900 rounded-md text-xs sm:text-sm font-medium border border-blue-200"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Notable Opening Gigs */}
        <div className="py-6 border-b border-gray-200">
          <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-3">
            Notable Opening Gigs
          </h3>
          <div className="flex flex-wrap gap-2">
            {openingGigs.map((gig) => (
              <span
                key={gig}
                className="px-3 py-1 bg-purple-50 text-purple-900 rounded-md text-xs sm:text-sm font-semibold border border-purple-200"
              >
                {gig}
              </span>
            ))}
          </div>
        </div>

        {/* Press Assets Links */}
        <div className="pt-6 grid sm:grid-cols-2 gap-4 text-sm">
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">📸 Press Photos:</span>
            <a
              href={DRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-1 text-sm"
            >
              <span>View & Download Photos on Google Drive</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">🎨 Logos & Artwork:</span>
            <a
              href={DRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-1 text-sm"
            >
              <span>View & Download Logos on Google Drive</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
