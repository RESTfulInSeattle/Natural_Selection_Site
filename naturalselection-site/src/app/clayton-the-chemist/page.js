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
        <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
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
        <div className="mb-8">

          {/* Spotify */}
          <div className="gradient-primary rounded-lg p-8 mb-4">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 shadow-lg">
              <iframe 
                data-testid="embed-iframe" 
                style={{borderRadius: '12px'}} 
                src="https://open.spotify.com/embed/artist/5JakVmGiAB3D9RRqkXn2PZ?utm_source=generator" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              />
            </div>
          </div>

          {/* Apple Music */}
          <div className="gradient-primary rounded-lg p-8 mb-4">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 shadow-lg">
              <iframe 
                src="https://embed.music.apple.com/us/artist/clayton-the-chemist/942054999"
                height="450"
                width="100%"
                frameBorder="0" 
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                className="rounded"
              />
            </div>
          </div>

          {/* SoundCloud Playlists */}
          <div className="grid md:grid-cols-1 gap-8">
            <div className="gradient-primary  rounded-lg p-8">
              <div className="space-y-6">
                {/* Introspectral EP */}
                <div className="gradient-primary rounded-lg p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold mb-2 text-gray-300">Introspectral EP</h4>
                  <p className="text-sm text-gray-400 mb-4">Latest electronic music release</p>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 shadow-lg">
                    <iframe 
                      width="100%" 
                      height="300" 
                      scrolling="no" 
                      frameBorder="no" 
                      allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1614946756&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                      className="rounded"
                    />
                    <div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}>
                      <a href="https://soundcloud.com/claytonthechemist" title="Clayton the Chemist" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Clayton the Chemist</a> · <a href="https://soundcloud.com/claytonthechemist/sets/introspectral-ep" title="Introspectral EP" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Introspectral EP</a>
                    </div>
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