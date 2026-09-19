// Centralized DJ mix data for Clayton The Chemist artist page
// Hosted on AWS S3 in bucket: clayton-the-chemist-dj-mixes (us-west-2)

const S3_BASE_URL = 'https://clayton-the-chemist-dj-mixes.s3.us-west-2.amazonaws.com';

/**
 * Helper to build properly encoded S3 URLs for a mix's MP3 and artwork
 */
function buildMixUrls(folderName, mixName, artworkExt = 'jpg') {
  const encodedFolder = encodeURIComponent(folderName);
  const encodedFile = encodeURIComponent(`Clayton the Chemist - ${mixName}`);
  return {
    mp3Url: `${S3_BASE_URL}/${encodedFolder}/${encodedFile}.mp3`,
    artworkUrl: `${S3_BASE_URL}/${encodedFolder}/${encodedFile}.${artworkExt}`,
    downloadUrl: `${S3_BASE_URL}/${encodedFolder}/${encodedFile}.mp3`
  };
}

export const djMixData = {
  'House': [
    {
      id: 'just-do-you',
      mixTitle: 'Just Do You',
      artistName: 'Deep and Funky House',
      description: 'Nice deep, soulful, and funky flavors of house.',
      genre: 'House',
      ...buildMixUrls('Just Do You', 'Just Do You')
    },
    {
      id: 'purr-neitherworld-2024',
      mixTitle: 'PURR Neitherworld 2024',
      artistName: 'Deep and Funky House',
      description: "Replay of Clayton's set for PURR's Neitherworld event in 2024.",
      genre: 'House',
      ...buildMixUrls('PURR Neitherworld 2024', 'PURR Neitherworld 2024')
    },
    {
      id: 'moments-of-gratitude',
      mixTitle: 'Moments of Gratitude',
      artistName: 'Deep and Soulful House',
      description: 'Deep and Soulful romp through house music.',
      genre: 'House',
      ...buildMixUrls('Moments of Gratitude', 'Moments of Gratitude')
    }
  ],
  'Drum & Bass': [
    {
      id: 'in-the-lab-podcast-003',
      mixTitle: 'In The Lab Podcast 003',
      artistName: 'Drum & Bass',
      description: 'Soulful, deep, with rollers, reggae and dub influenced DnB.',
      genre: 'Drum & Bass',
      ...buildMixUrls('In The Lab Podcast 003', 'In The Lab Podcast 003')
    },
    {
      id: 'sci-clone-tribute-mix',
      mixTitle: 'Sci Clone Tribute Mix',
      artistName: 'Drum & Bass',
      description: "Sci Clone's catalog of Jazzy and Soulful DnB.",
      genre: 'Drum & Bass',
      ...buildMixUrls('Sci Clone Tribute Mix', 'Sci Clone Tribute Mix')
    }
  ],
  'Funk & Soul': [
    {
      id: 'sister-soul',
      mixTitle: 'Sister Soul',
      artistName: 'Soul, Funk, RnB',
      description: "Recorded for International Women's Day, a mix of classic soul and modern RnB.",
      genre: 'Funk & Soul',
      ...buildMixUrls('Sister Soul', 'Sister Soul')
    },
    {
      id: 'winchester-goose-set',
      mixTitle: 'Winchester Goose Set',
      artistName: 'Funk & Soul',
      description: "Clayton's set recorded at The Winchester Goose.",
      genre: 'Funk & Soul',
      ...buildMixUrls('Winchester Goose Set', 'Winchester Goose Set')
    }
  ]
};

export const allMixes = Object.values(djMixData).flat();
