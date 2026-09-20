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
      color: 'hover:text-pink-400 hover:border-pink-500/40',
    },
    {
      name: 'YouTube',
      handle: 'youtube.com/claytonthechemist',
      href: 'https://www.youtube.com/claytonthechemist',
      color: 'hover:text-red-400 hover:border-red-500/40',
    },
    {
      name: 'SoundCloud',
      handle: 'soundcloud.com/claytonthechemist',
      href: 'https://soundcloud.com/claytonthechemist',
      color: 'hover:text-orange-400 hover:border-orange-500/40',
    },
    {
      name: 'MixCloud',
      handle: 'mixcloud.com/ClaytontheChemist',
      href: 'https://www.mixcloud.com/ClaytontheChemist/',
      color: 'hover:text-blue-400 hover:border-blue-500/40',
    },
    {
      name: 'BandCamp',
      handle: 'claytonthechemist.bandcamp.com',
      href: 'https://claytonthechemist.bandcamp.com/',
      color: 'hover:text-cyan-400 hover:border-cyan-500/40',
    },
    {
      name: 'Twitch',
      handle: 'twitch.tv/claytonthechemist',
      href: 'https://www.twitch.tv/claytonthechemist',
      color: 'hover:text-purple-400 hover:border-purple-500/40',
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
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-gray-900/90 border border-gray-700/60 shadow-lg">
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

      {/* EPK Main Dark Mode Card */}
      <div className="bg-gray-900/95 backdrop-blur-md text-gray-100 rounded-2xl p-6 sm:p-10 md:p-12 shadow-2xl border border-white/10">
        {/* Header Section */}
        <div className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-8 pb-8 border-b border-gray-800">
          {/* Identity & Basic Info */}
          <div className="space-y-6 flex-1">

            {/* Quick Meta */}
            <div className="space-y-1.5 text-sm sm:text-base text-gray-300">
              <p><span className="font-bold text-white">Name:</span> Dave Clayton</p>
              <p><span className="font-bold text-white">Location:</span> Seattle, WA</p>
              <p>
                <span className="font-bold text-white">Affiliations:</span>{' '}
                <a href="https://naturalselectionmusic.com" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">NaturalSelectionMusic.com</a>, SEMPA
              </p>
            </div>
          </div>
        </div>

        {/* Social & Streaming Channels */}
        <div className="py-6 border-b border-gray-800">
          <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-3">
            Social & Streaming Channels
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl border border-gray-800 bg-gray-800/60 hover:bg-gray-800 transition-all duration-150 flex flex-col ${item.color}`}
              >
                <span className="font-semibold text-white">{item.name}</span>
                <span className="text-xs text-gray-400 truncate mt-0.5">{item.handle}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="py-6 border-b border-gray-800">
          <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-3">
            Summary
          </h3>
          <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            <p>
              Dave Clayton is a renaissance man in the music industry. He is adept at DJing, Music Production, Audio Mastering and Engineering, Acoustical Design, and is an avid instructor and mentor. He gravitates towards funky, soulful, and deep vibes in his sets, and masters a wealth of different genres for musical fulfilment. This is also evident in his productions and remixes.
            </p>
            <p>
              His DJ and live performances are vibrant, fun, and incorporate fusions of different genres and places into an artistic flow of consciousness.
            </p>
          </div>
        </div>

        {/* Genres */}
        <div className="py-6 border-b border-gray-800">
          <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-3">
            Genres
          </h3>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <span
                key={genre}
                className="px-3.5 py-1.5 bg-gray-800 text-gray-200 rounded-full text-xs sm:text-sm font-medium border border-gray-700/80 shadow-sm"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Labels Released On */}
        <div className="py-6 border-b border-gray-800">
          <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-3">
            Labels Released On
          </h3>
          <div className="flex flex-wrap gap-2">
            {labels.map((label) => (
              <span
                key={label}
                className="px-3.5 py-1.5 bg-blue-950/60 text-blue-300 rounded-lg text-xs sm:text-sm font-medium border border-blue-800/60 shadow-sm"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Notable Opening Gigs */}
        <div className="py-6 border-b border-gray-800">
          <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-3">
            Notable Opening Gigs
          </h3>
          <div className="flex flex-wrap gap-2">
            {openingGigs.map((gig) => (
              <span
                key={gig}
                className="px-3.5 py-1.5 bg-purple-950/60 text-purple-300 rounded-lg text-xs sm:text-sm font-semibold border border-purple-800/60 shadow-sm"
              >
                {gig}
              </span>
            ))}
          </div>
        </div>

        {/* Press Assets Links */}
        <div className="pt-6 grid sm:grid-cols-2 gap-4 text-sm">
          <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/60 hover:border-gray-600 transition-colors">
            <span className="font-bold text-white block mb-1">📸 Photos:</span>
            <a
              href={DRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 flex items-center gap-1.5 text-sm"
            >
              <span>View & Download Photos on Google Drive</span>
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
