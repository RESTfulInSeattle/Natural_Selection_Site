'use client';

import { useState } from 'react';
import { DropboxMP3Player } from './DropboxMP3Player';

export default function TabbedDJMixes() {
  const [activeTab, setActiveTab] = useState('House');

  // Convert Dropbox URLs to direct format
  const convertDropboxUrl = (url, isAudio = false) => {
    if (url.includes('dl.dropboxusercontent.com')) {
      return url; // Already converted
    }
    
    // Convert www.dropbox.com to dl.dropboxusercontent.com
    let convertedUrl = url.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
    
    // Remove session tokens (&st=...)
    convertedUrl = convertedUrl.replace(/&st=[^&]+/, '');
    
    // For audio files, change dl=0 to dl=1, for images remove &dl=0
    if (isAudio) {
      convertedUrl = convertedUrl.replace('&dl=0', '&dl=1');
    } else {
      convertedUrl = convertedUrl.replace('&dl=0', '');
    }
    
    return convertedUrl;
  };

  const mixData = {
    'House': [
      {
        mixTitle: "Just Do You",
        artistName: "Deep and Funky House",
        mp3Url: convertDropboxUrl("https://www.dropbox.com/scl/fi/by7php2et4oxww3rd79ad/Just-Do-You.mp3?rlkey=bgbnn3yhkfdexo9gm26ndodtb&st=7m0lvw3t&dl=0", true),
        artworkUrl: convertDropboxUrl("https://www.dropbox.com/scl/fi/9r7umqcfndjhhpwuli0bb/Just-Do-You.jpg?rlkey=7ja3v9ouixlvxmddw3se6yywo&st=25jttvfw&dl=0"),
        description: "Nice deep, soulful, and funky flavors of house."
      },
      {
        mixTitle: "PURR Neitherworld 2024",
        artistName: "Deep and Funky House",
        mp3Url: "https://dl.dropboxusercontent.com/scl/fi/t02jmew6bb4h5mpljweq5/Clayton-The-Chemist-PURR-Neitherworld-2024.mp3?rlkey=bcqq7feumzkd97sdiw26ouhr5&dl=1",
        artworkUrl: "https://dl.dropboxusercontent.com/scl/fi/sfzuckzr0g0xy5dvpoiyb/PURR-Neitherworld-2024.JPG?rlkey=rs0uku8ieezhf7vhtsg94q1e0",
        description: "Replay of Clayton's set for PURR's Neitherworld event in 2024."
      },
      {
        mixTitle: "Moments of Gratitude",
        artistName: "Deep and Soulful House",
        mp3Url: convertDropboxUrl("https://www.dropbox.com/scl/fi/nv3z2qvwhske9gliy28pk/Clayton-Moments-of-Gratitude.mp3?rlkey=0srkaxx8w9dce1l8hzyzmm1pu&st=xscr20bn&dl=0", true),
        artworkUrl: convertDropboxUrl("https://www.dropbox.com/scl/fi/e2zkom7p1rdmdu2pqhke8/Moments-of-Gratitude.jpg?rlkey=s1r2cqizzouaj3m4l33m16yn6&st=k3v4nd67&dl=0"),
        description: "Deep and Soulful romp through house music"
      }
    ],
    'Drum & Bass': [
      {
        mixTitle: "In The Lab Podcast 003",
        artistName: "Drum & Bass",
        mp3Url: convertDropboxUrl("https://www.dropbox.com/scl/fi/d8zjgayhfdjd37hlcqgqj/In-The-Lab-Podcast-003-Clayton-the-Chemist.mp3?rlkey=x97wol74atjh7z2f4e24ct80g&st=60tsetdi&dl=0", true),
        artworkUrl: convertDropboxUrl("https://www.dropbox.com/scl/fi/1j9aspamhxoays5hkrqh4/In-The-Lab-Podcast.jpg?rlkey=6de3sm8sfv8iz8v77njcacnw4&st=iv20hwqu&dl=0"),
        description: "Soulful, deep, with rollers, reggae and dub influenced DnB"
      },
      {
        mixTitle: "Sci Clone Tribute Mix",
        artistName: "Drum & Bass",
        mp3Url: convertDropboxUrl("https://www.dropbox.com/scl/fi/nwsuddwvz6uv4vo6sqkkx/Clayton-The-Chemist-Sci-Clone-Mix.mp3?rlkey=2gg9kzku6ku1dz7l6zozavreo&st=v3tx5foy&dl=0", true),
        artworkUrl: convertDropboxUrl("https://www.dropbox.com/scl/fi/o4i059ndqearutfeas1l3/sci-clone-mix.jpg?rlkey=k20b22rk78xuhjgo9bdfr9jbe&st=xgjpbr33&dl=0"),
        description: "Sci Clone's catalog of Jazzy and Soulful DnB"
      }
    ],
    'Funk & Soul': [
      {
        mixTitle: "Sister Soul",
        artistName: "Soul, Funk, RnB",
        mp3Url: "https://dl.dropboxusercontent.com/scl/fi/wkiif3iqna1jdbi5rig8l/Clayton-the-Chemist-Sister-Soul.mp3?rlkey=iyjp1y7olkswuxfcls630x2nc&dl=1",
        artworkUrl: "https://dl.dropboxusercontent.com/scl/fi/unzg610phx64ld542yp3h/Clayton-the-Chemist-Sister-Soul-Original.jpg?rlkey=g01km3729ka53wwzp2wx1dlhc",
        description: "Recorded for International Women's Day, a mix of classic soul and modern RnB"
      },
      {
        mixTitle: "Winchester Goose Set",
        artistName: "Funk & Soul",
        mp3Url: convertDropboxUrl("https://www.dropbox.com/scl/fi/1f1bihd5xzs3jfuyah6rv/Clayton-Winchester-Goose-Set.mp3?rlkey=2bo0vakoa4e7bsvc6nwwjgq43&st=x3ffd5gj&dl=0", true),
        artworkUrl: convertDropboxUrl("https://www.dropbox.com/scl/fi/o0v6c0xicwx817h05qlhs/Winchester-Goose-Set.jpg?rlkey=hr48x19nkgatqc4artk2h1dmk&st=l2v631gp&dl=0"),
        description: "Clayton's set recorded at The Winchester Goose"
      }
    ]
  };

  const tabs = Object.keys(mixData);

  return (
    <div className="gradient-primary rounded-lg p-8">
      <div className="gradient-primary rounded-lg p-6 border border-gray-200">
        <h4 className="text-lg font-semibold mb-4 text-gray-300">DJ Mixes</h4>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-600">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-t-lg font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Mix Grid for Active Tab */}
        <div className="grid gap-6">
          {mixData[activeTab].map((mix, index) => (
            <DropboxMP3Player
              key={`${activeTab}-${index}`}
              mixTitle={mix.mixTitle}
              artistName={mix.artistName}
              mp3Url={mix.mp3Url}
              artworkUrl={mix.artworkUrl}
              downloadUrl={mix.mp3Url}
              description={mix.description}
            />
          ))}
        </div>

        {/* Genre Info */}
        <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
          <p className="text-sm text-gray-300">
            {activeTab === 'House' && '🏠 Deep, soulful, and funky flavors of house music'}
            {activeTab === 'Drum & Bass' && '🥁 Soulful, jazzy, and deep drum & bass selections'}
            {activeTab === 'Funk & Soul' && '🎵 Classic and modern funk, soul, and R&B vibes'}
          </p>
        </div>
      </div>
    </div>
  );
}