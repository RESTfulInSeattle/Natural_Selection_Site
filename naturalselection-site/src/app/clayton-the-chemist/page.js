import Image from "next/image";
import Link from "next/link";
import { SoundCloudPlayer, MusicSection } from "@/components/MusicPlayers";

export default function ClaytonTheChemist() {
  return (
    <div className="min-h-screen gradient-primary">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Clayton the Chemist</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Producer & DJ
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            House • Bass Music • Drum & Bass • Nu Funk • Nu Jazz • Nu Soul
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Origin Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="/content/pages/2019/07/clayton-the-chemist/images/clayton-the-chemist-character-scaled.jpg"
              alt="Clayton the Chemist"
              width={500}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <blockquote className="text-2xl italic text-gray-300 mb-8 border-l-4 border-purple-600 pl-6">
              &quot;You look like a mad scientist up there mixing records, like some crazy chemist&quot;
              <footer className="text-base text-gray-200 mt-4 not-italic">- JJ Brown</footer>
            </blockquote>
            <p className="text-lg text-gray-300 mb-6">
              Dave Clayton is a renaissance man in the music industry. He is adept at DJing, Producing, 
              Live Performance, Mastering, Acoustical Design, and enjoys sharing his knowledge and mentoring others.
            </p>
            <p className="text-lg text-gray-300">
              His underground moniker, Clayton the Chemist, features vibes that run the gamut of House, Bass Music, 
              Drum & Bass, Nu Funk, Nu Jazz, and Nu Soul.
            </p>
          </div>
        </div>

        {/* Streaming Platforms */}
        <div className="mb-16">

          {/* Spotify */}
          <div className="gradient-primary  rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
              <span className="text-green-600 mr-3">🎵</span>
              Spotify
            </h3>
            <div className="gradient-primary  rounded-lg p-6 border-2 border-dashed border-gray-300">
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-4">Clayton the Chemist Artist Page</p>
                <p className="text-sm text-gray-500 mb-4">Artist ID: 5JakVmGiAB3D9RRqkXn2PZ</p>
                <p className="text-xs text-gray-400">Full embed integration coming soon</p>
              </div>
            </div>
          </div>

          {/* Apple Music */}
          <div className="gradient-primary  rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
              <span className="text-gray-800 mr-3">🍎</span>
              Apple Music
            </h3>
            <div className="gradient-primary  rounded-lg p-6 border-2 border-dashed border-gray-300">
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-4">Introspectral EP</p>
                <p className="text-sm text-gray-500 mb-4">Album ID: 1678143526</p>
                <p className="text-xs text-gray-400">Full embed integration coming soon</p>
              </div>
            </div>
          </div>

          {/* SoundCloud Playlists */}
          <div className="grid md:grid-cols-1 gap-8">
            <div className="gradient-primary  rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                <span className="text-orange-500 mr-3">☁️</span>
                SoundCloud
              </h3>
              
              <div className="space-y-6">
                {/* Introspectral EP */}
                <div className="gradient-primary  rounded-lg p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold mb-2">Introspectral EP</h4>
                  <p className="text-sm text-gray-600 mb-4">Latest electronic music release</p>
                  <div className="gradient-primary  p-4 rounded text-center">
                    <p className="text-xs text-gray-500">Playlist ID: 1614946756</p>
                    <p className="text-xs text-gray-400 mt-1">SoundCloud embed coming soon</p>
                  </div>
                </div>

                {/* Original Songs */}
                <div className="gradient-primary rounded-lg p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold mb-2 text-gray-300">Original Songs</h4>
                  <p className="text-sm text-gray-400 mb-4">Collection of original compositions and productions</p>
                  <SoundCloudPlayer 
                    playlistId="19050410" 
                    title="Original Compositions"
                    height="450"
                  />
                </div>

                {/* Remixes and Edits */}
                <div className="gradient-primary rounded-lg p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold mb-2 text-gray-300">Remixes and Edits</h4>
                  <p className="text-sm text-gray-400 mb-4">Remixes, edits, and reimagined tracks</p>
                  <SoundCloudPlayer 
                    playlistId="527718" 
                    title="Remixes & Edits"
                    height="450"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="gradient-primary from-purple-50 to-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-300">The Chemist&apos;s Philosophy</h2>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-6">
             When you hear the first notes of Stevie Wonder’s voice, you instantly feel what he’s singing about. The range of my sets, and musical library, will be broad, but the thing that ties everything together, the essential element, is that you will feel the emotion the song is conveying
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="gradient-mesh text-white rounded-lg p-8 text-center">
          <p className="text-lg text-gray-300 mb-6">
            Stay connected for new releases, remixes, and musical experiments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://soundcloud.com/claytonthechemist" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
            >
              Follow on SoundCloud
            </a>
            <Link 
              href="/contact" 
              className="inline-block border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}