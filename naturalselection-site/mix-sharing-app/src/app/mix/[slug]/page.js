'use client';

import { useEffect, useState } from 'react';
import { DropboxMP3Player } from '../../../components/DropboxMP3Player';
import ShareButton from '../../../components/ShareButton';
import { getMixData } from '../../../utils/share';

export default function MixPage({ params }) {
  const { slug } = params;
  const [mixData, setMixData] = useState(null);

  useEffect(() => {
    const fetchMixData = async () => {
      const data = await getMixData(slug);
      setMixData(data);
    };

    fetchMixData();
  }, [slug]);

  if (!mixData) {
    return <div>Loading...</div>;
  }

  const { mixTitle, artistName, mp3Url, artworkUrl, downloadUrl, description } = mixData;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white">{mixTitle}</h1>
      <p className="text-gray-400">{artistName}</p>
      <DropboxMP3Player
        mixTitle={mixTitle}
        artistName={artistName}
        mp3Url={mp3Url}
        artworkUrl={artworkUrl}
        downloadUrl={downloadUrl}
        description={description}
      />
      <ShareButton url={`https://yourdomain.com/mix/${slug}`} />
    </div>
  );
}