import Image from "next/image";
import Link from "next/link";
import { SoundCloudPlayer, SpotifyPlayer, AppleMusicPlayer } from "@/components/MusicPlayers";

export default function Music() {
  return (
    <div className="min-h-screen theme-page relative overflow-x-hidden">
      {/* Flowing Hero Puget Sound Background */}
      <div className="absolute inset-x-0 top-0 h-[620px] sm:h-[720px] md:h-[860px] overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/pages/music/music-sound-hero.jpg"
          alt="Puget Sound shoreline and sunlit clouds over the water"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
        />

        {/* Ambient Scrim & Smooth Vertical Fade into Page Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/35 to-white/20 dark:from-black/80 dark:via-black/50 dark:to-black/40 backdrop-blur-[0.5px]" />
        <div className="absolute inset-x-0 bottom-0 h-56 sm:h-64 bg-gradient-to-t from-white via-white/75 to-transparent dark:from-[#02070a] dark:via-[#02070a]/75 dark:to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Hero Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-10 sm:pt-20 sm:pb-12">
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-3 tracking-tight text-white max-w-3xl mx-auto leading-tight drop-shadow-lg">
            Music for your soul, as well as your backside
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-md">
            Clayton and Fulcrum&apos;s 2 albums spanning multiple genres and moods.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-14">
          
          {/* Featured Albums */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 mb-12">
              {/* The Soul Purpose */}
              <div className="theme-card-glass rounded-2xl p-6 sm:p-8">
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
            <div className="theme-card-glass rounded-2xl p-6 sm:p-8">
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
    </div>
  );
}