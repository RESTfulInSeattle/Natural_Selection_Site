import Image from "next/image";
import Link from "next/link";
import { SoundCloudPlayer, SpotifyPlayer, AppleMusicPlayer } from "@/components/MusicPlayers";

export default function Music() {
  return (
    <div className="min-h-screen theme-page">
      {/* Hero Section */}
      <div className="theme-hero py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    
          <h1 className="text-xl md:text-xl font-bold mb-4 tracking-tight theme-heading">
            Music for your soul, as well as your backside
          </h1>
          <p className="text-base md:text-lg theme-muted max-w-3xl mx-auto font-normal leading-relaxed">
            Clayton and Fulcrum&apos;s 2 albums spanning multiple genres and moods.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Featured Albums */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            {/* The Soul Purpose */}
            <div className="theme-card rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-6 text-center theme-heading">The Soul Purpose</h2>
              
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
            <div className="theme-card rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-6 text-center theme-heading">Songs from the Soul City</h2>
              
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
        <div className="theme-cta rounded-2xl p-10 text-center border shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight theme-heading">Want to License Our Music?</h2>
          <p className="text-base md:text-lg theme-muted mb-8 max-w-2xl mx-auto">
            Check out our publishing page for licensing opportunities or contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/publishing" 
              className="inline-block gradient-accent text-white px-8 py-3.5 rounded-xl font-bold hover:scale-105 transition-all duration-200 shadow-md"
            >
              View Publishing
            </Link>
            <Link 
              href="/contact" 
              className="inline-block theme-card border-2 px-8 py-3.5 rounded-xl font-bold theme-heading hover:bg-emerald-500/10 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}