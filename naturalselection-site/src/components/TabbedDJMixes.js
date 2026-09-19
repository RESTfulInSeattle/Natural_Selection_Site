'use client';

import { useState, useEffect, useRef } from 'react';
import { AudioPlayer } from './AudioPlayer';
import { djMixData } from '@/data/djMixes';

export default function TabbedDJMixes() {
  const tabs = Object.keys(djMixData);
  const [activeTab, setActiveTab] = useState(tabs[0] || 'House');
  const [loadedTabs, setLoadedTabs] = useState(new Set([tabs[0] || 'House']));
  const audioRefs = useRef({});
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  // Handle tab switching
  const handleTabSwitch = (tab) => {
    // Pause currently playing audio when switching tabs
    Object.values(audioRefs.current).forEach((audio) => {
      if (audio && !audio.paused) {
        audio.pause();
      }
    });

    setCurrentlyPlaying(null);
    setActiveTab(tab);

    setTimeout(() => {
      setLoadedTabs((prev) => new Set([...prev, tab]));
    }, 50);
  };

  // Ensure only one mix plays at a time
  const handlePlay = (audioKey) => {
    if (currentlyPlaying && currentlyPlaying !== audioKey) {
      const previousAudio = audioRefs.current[currentlyPlaying];
      if (previousAudio && !previousAudio.paused) {
        previousAudio.pause();
      }
    }
    setCurrentlyPlaying(audioKey);
  };

  // Cleanup audio elements on unmount
  useEffect(() => {
    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.src = '';
        }
      });
    };
  }, []);

  const activeMixes = djMixData[activeTab] || [];

  return (
    <div className="gradient-primary rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 pb-4 border-b border-gray-700/60 gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <span>🎧</span> Clayton The Chemist DJ Mixes
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            Stream high-definition DJ sets directly or download for offline listening
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 bg-gray-900/60 p-1.5 rounded-xl border border-gray-700/40">
          {tabs.map((tab) => {
            const count = djMixData[tab]?.length || 0;
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => handleTabSwitch(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/80'
                }`}
              >
                <span>{tab}</span>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-blue-700 text-white' : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mix List for Active Tab */}
      <div className="space-y-4">
        {loadedTabs.has(activeTab) &&
          activeMixes.map((mix, index) => {
            const audioKey = `${activeTab}-${index}`;

            return (
              <AudioPlayer
                key={mix.id || audioKey}
                mixTitle={mix.mixTitle}
                artistName={mix.artistName}
                mp3Url={mix.mp3Url}
                artworkUrl={mix.artworkUrl}
                downloadUrl={mix.downloadUrl}
                description={mix.description}
                audioRef={(ref) => {
                  if (ref) {
                    audioRefs.current[audioKey] = ref;
                  } else {
                    delete audioRefs.current[audioKey];
                  }
                }}
                onPlay={() => handlePlay(audioKey)}
              />
            );
          })}
      </div>
    </div>
  );
}

// Reusable Mix Grid for any page
export function DJMixGrid({ mixes }) {
  return (
    <div className="grid gap-4 sm:gap-6">
      {mixes.map((mix, index) => (
        <AudioPlayer key={mix.id || index} {...mix} />
      ))}
    </div>
  );
}