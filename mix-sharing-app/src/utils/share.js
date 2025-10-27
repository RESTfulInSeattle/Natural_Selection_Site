export const generateShareLink = (slug) => {
  const baseUrl = window.location.origin;
  return `${baseUrl}/mix/${slug}`;
};

export const shareOnSocialMedia = (platform, slug) => {
  const shareLink = generateShareLink(slug);
  let url;

  switch (platform) {
    case 'facebook':
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`;
      break;
    case 'twitter':
      url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareLink)}`;
      break;
    case 'reddit':
      url = `https://www.reddit.com/submit?url=${encodeURIComponent(shareLink)}`;
      break;
    case 'instagram':
      alert('Instagram does not support direct sharing via URL. Please share the link manually.');
      return;
    default:
      console.warn('Unsupported platform');
      return;
  }

  window.open(url, '_blank');
};