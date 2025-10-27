'use client';

import { useCallback } from 'react';

export const useClipboard = () => {
  const copyToClipboard = useCallback((text) => {
    if (navigator.clipboard) {
      return navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed'; // Prevent scrolling to bottom of page in MS Edge.
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  }, []);

  return { copyToClipboard };
};