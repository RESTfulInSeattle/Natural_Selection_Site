import Image from "next/image";
import Link from "next/link";
import { SoundCloudPlayer, SpotifyPlayer, AppleMusicPlayer, MusicSection } from "@/components/MusicPlayers";

export default function Music() {
  return (
    <div className="min-h-screen gradient-primary">
      {/* Hero Section */}
      <div className="gradient-mesh text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/content/pages/2015/10/music/images/ns-music_header_white.png"
            alt="Natural Selection Music"
            width={550}
            height={94}
            className="mx-auto mb-8"
            priority
          />
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Music for your soul, as well as your backside
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Clayton and Fulcrum&apos;s original compositions and releases spanning multiple genres and moods.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Featured Albums */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* The Soul Purpose */}
            <div className="gradient-primary rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-300">The Soul Purpose</h3>
              
              {/* SoundCloud Playlist */}
              <div className="mb-6">
                <SoundCloudPlayer 
                  playlistId="296341" 
                  title="Full Album - SoundCloud"
                />
              </div>
              
              {/* Spotify Album */}
              <div className="mb-6">
                <SpotifyPlayer 
                  albumId="35mVsGO3cS1LAL0PlwfIkg" 
                  title="Stream on Spotify"
                />
              </div>

              {/* Apple Music Album */}
              <div className="mb-4">
                <AppleMusicPlayer 
                  albumId="49523137" 
                  title="Listen on Apple Music"
                />
              </div>
            </div>

            {/* Songs from the Soul City */}
            <div className="gradient-primary rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-300">Songs from the Soul City</h3>
              
              {/* SoundCloud Playlist */}
              <div className="mb-6">
                <SoundCloudPlayer 
                  playlistId="300979" 
                  title="Full Album - SoundCloud"
                />
              </div>
              
              {/* Spotify Album */}
              <div className="mb-6">
                <SpotifyPlayer 
                  albumId="2HI8vZKInuaab67WDTtidl" 
                  title="Stream on Spotify"
                />
              </div>

              {/* Apple Music Album */}
              <div className="mb-4">
                <AppleMusicPlayer 
                  albumId="256424222" 
                  title="Listen on Apple Music"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="gradient-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to License Our Music?</h2>
          <p className="text-lg text-gray-300 mb-6">
            Check out our publishing page for licensing opportunities or contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/publishing" 
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              View Publishing
            </Link>
            <Link 
              href="/contact" 
              className="inline-block border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}