import React from 'react';
import ShareButton from './ShareButton';

const ShareMenu = ({ mixTitle, mixUrl }) => {
  const sharePlatforms = [
    { name: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(mixUrl)}` },
    { name: 'Twitter', url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(mixUrl)}&text=${encodeURIComponent(mixTitle)}` },
    { name: 'Reddit', url: `https://www.reddit.com/submit?url=${encodeURIComponent(mixUrl)}&title=${encodeURIComponent(mixTitle)}` },
    { name: 'Instagram', url: `https://www.instagram.com/?url=${encodeURIComponent(mixUrl)}` } // Note: Instagram doesn't support direct sharing links
  ];

  return (
    <div className="share-menu">
      <h4 className="text-white font-semibold">Share this mix:</h4>
      <div className="flex gap-2">
        {sharePlatforms.map(platform => (
          <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2">
            {platform.name}
          </a>
        ))}
        <ShareButton mixUrl={mixUrl} />
      </div>
    </div>
  );
};

export default ShareMenu;