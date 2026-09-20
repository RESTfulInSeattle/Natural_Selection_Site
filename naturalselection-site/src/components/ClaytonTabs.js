'use client';

import { useState, useEffect } from 'react';
import TabbedDJMixes from '@/components/TabbedDJMixes';
import ClaytonVideos from '@/components/ClaytonVideos';
import ClaytonReleases from '@/components/ClaytonReleases';
import PhotoSlideshow from '@/components/PhotoSlideshow';
import ClaytonEPK from '@/components/ClaytonEPK';

export default function ClaytonTabs() {
  const tabs = [
    { id: 'dj-mixes', label: 'DJ Mixes', icon: '🎧', description: 'Curated sets & mixes' },
    { id: 'videos', label: 'Videos', icon: '📺', description: 'YouTube playlist & live sets' },
    { id: 'releases', label: 'Releases', icon: '🎵', description: 'Spotify, Apple & SoundCloud' },
    { id: 'photos', label: 'Photos', icon: '📷', description: 'Live gigs & photography' },
    { id: 'epk', label: 'EPK', icon: '📄', description: 'Electronic Press Kit' },
  ];

  const [activeTab, setActiveTab] = useState('dj-mixes');

  // Handle URL hash on initial load
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      const matchedTab = tabs.find((t) => t.id === hash);
      if (matchedTab) {
        setActiveTab(matchedTab.id);
      }
    }
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${tabId}`);
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* Tab Navigation Bar */}
      <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-2 sm:p-3 border border-white/10 shadow-2xl">
        <div className="flex overflow-x-auto gap-2 no-scrollbar scroll-smooth">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex-1 min-w-[120px] sm:min-w-0 py-3 px-3 sm:px-4 rounded-xl text-center transition-all duration-200 flex flex-col items-center justify-center gap-1 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 scale-[1.02]'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/70'
                }`}
                aria-selected={isActive}
                role="tab"
              >
                <div className="flex items-center gap-1.5 text-base sm:text-lg font-bold">
                  <span>{tab.icon}</span>
                  <span className="whitespace-nowrap">{tab.label}</span>
                </div>
                <span className={`text-[10px] sm:text-xs truncate max-w-full ${isActive ? 'text-blue-100' : 'text-gray-500'}`}>
                  {tab.description}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Panels */}
      <div className="tab-content transition-opacity duration-300">
        {activeTab === 'dj-mixes' && <TabbedDJMixes />}
        {activeTab === 'videos' && <ClaytonVideos />}
        {activeTab === 'releases' && <ClaytonReleases />}
        {activeTab === 'photos' && <PhotoSlideshow />}
        {activeTab === 'epk' && <ClaytonEPK />}
      </div>
    </div>
  );
}
