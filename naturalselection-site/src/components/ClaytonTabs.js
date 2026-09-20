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
    <div className="w-full space-y-6">
      {/* Tab Navigation Bar - compact, responsive, no scrollbars */}
      <div className="theme-card rounded-2xl p-1.5 shadow-xl">
        <div className="grid grid-cols-5 gap-1 sm:gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                title={tab.description}
                className={`py-2 px-1 sm:px-3 rounded-xl text-center transition-all duration-200 flex items-center justify-center gap-1 sm:gap-1.5 ${
                  isActive
                    ? 'gradient-accent text-white shadow-md shadow-emerald-950/30 font-semibold'
                    : 'theme-muted hover:theme-heading hover:bg-emerald-500/10 font-medium'
                }`}
                aria-selected={isActive}
                role="tab"
              >
                <span className="text-sm sm:text-base leading-none">{tab.icon}</span>
                <span className="text-[11px] sm:text-xs md:text-sm truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Panels */}
      <div className="tab-content">
        {activeTab === 'dj-mixes' && <TabbedDJMixes />}
        {activeTab === 'videos' && <ClaytonVideos />}
        {activeTab === 'releases' && <ClaytonReleases />}
        {activeTab === 'photos' && <PhotoSlideshow />}
        {activeTab === 'epk' && <ClaytonEPK />}
      </div>
    </div>
  );
}
