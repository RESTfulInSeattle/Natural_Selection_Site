import React from 'react';
import { useClipboard } from '../hooks/useClipboard';

const ShareButton = ({ mixTitle, mixUrl }) => {
  const { copy } = useClipboard();

  const handleShare = () => {
    copy(mixUrl);
    alert('Link copied to clipboard! Share it on your favorite platform.');
  };

  return (
    <button
      onClick={handleShare}
      className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center text-white transition-colors duration-200"
      title={`Share ${mixTitle}`}
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 7V3l-6 6 6 6v-4h4V7h-4z" />
      </svg>
    </button>
  );
};

export default ShareButton;