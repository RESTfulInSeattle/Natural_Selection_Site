'use client';

import { useEffect, useState } from 'react';
import DropboxMP3Player from '../components/DropboxMP3Player';
import ShareButton from '../components/ShareButton';

export default function HomePage() {
  const [mixes, setMixes] = useState([]);

  useEffect(() => {
    // Fetch mixes from an API or a local source
    const fetchMixes = async () => {
      // Replace with actual data fetching logic
      const response = await fetch('/api/mixes');
      const data = await response.json();
      setMixes(data);
    };

    fetchMixes();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mix Sharing App</h1>
      <div className="grid grid-cols-1 gap-4">
        {mixes.map((mix) => (
          <div key={mix.id} className="bg-gray-800 rounded-lg p-4 shadow-lg">
            <DropboxMP3Player
              mixTitle={mix.title}
              artistName={mix.artist}
              mp3Url={mix.audioUrl}
              artworkUrl={mix.artworkUrl}
              downloadUrl={mix.downloadUrl}
              description={mix.description}
            />
            <ShareButton mixId={mix.id} />
          </div>
        ))}
      </div>
    </div>
  );
}