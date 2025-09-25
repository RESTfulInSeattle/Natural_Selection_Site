import Image from "next/image";
import Link from "next/link";

export default function ClaytonTheChemist() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Clayton the Chemist</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            roducer & DJ
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
            <blockquote className="text-2xl italic text-gray-700 mb-8 border-l-4 border-purple-600 pl-6">
              "You look like a mad scientist up there mixing records, like some crazy chemist"
              <footer className="text-base text-gray-500 mt-4 not-italic">- JJ Brown</footer>
            </blockquote>
            <p className="text-lg text-gray-700 mb-6">
              Dave Clayton is a renaissance man in the music industry. He is adept at DJing, Producing, 
              Live Performance, Mastering, Acoustical Design, and enjoys sharing his knowledge and mentoring others.
            </p>
            <p className="text-lg text-gray-700">
              His underground moniker, Clayton the Chemist, features vibes that run the gamut of House, Bass Music, 
              Drum & Bass, Nu Funk, Nu Jazz, and Nu Soul.
            </p>
          </div>
        </div>

        {/* Streaming Platforms */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Listen Now</h2>
          
          {/* Spotify */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
              <span className="text-green-600 mr-3">🎵</span>
              Spotify
            </h3>
            <div className="bg-white rounded-lg p-6 border-2 border-dashed border-gray-300">
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-4">Clayton the Chemist Artist Page</p>
                <p className="text-sm text-gray-500 mb-4">Artist ID: 5JakVmGiAB3D9RRqkXn2PZ</p>
                <p className="text-xs text-gray-400">Full embed integration coming soon</p>
              </div>
            </div>
          </div>

          {/* Apple Music */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
              <span className="text-gray-800 mr-3">🍎</span>
              Apple Music
            </h3>
            <div className="bg-white rounded-lg p-6 border-2 border-dashed border-gray-300">
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-4">Introspectral EP</p>
                <p className="text-sm text-gray-500 mb-4">Album ID: 1678143526</p>
                <p className="text-xs text-gray-400">Full embed integration coming soon</p>
              </div>
            </div>
          </div>

          {/* SoundCloud Playlists */}
          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                <span className="text-orange-500 mr-3">☁️</span>
                SoundCloud
              </h3>
              
              <div className="space-y-6">
                {/* Introspectral EP */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold mb-2">Introspectral EP</h4>
                  <p className="text-sm text-gray-600 mb-4">Latest electronic music release</p>
                  <div className="bg-gray-100 p-4 rounded text-center">
                    <p className="text-xs text-gray-500">Playlist ID: 1614946756</p>
                    <p className="text-xs text-gray-400 mt-1">SoundCloud embed coming soon</p>
                  </div>
                </div>

                {/* Original Songs */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold mb-2">Original Songs</h4>
                  <p className="text-sm text-gray-600 mb-4">Collection of original compositions and productions</p>
                  <div className="bg-gray-100 p-4 rounded text-center">
                    <p className="text-xs text-gray-500">Playlist ID: 19050410</p>
                    <p className="text-xs text-gray-400 mt-1">SoundCloud embed coming soon</p>
                  </div>
                </div>

                {/* Remixes and Edits */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold mb-2">Remixes and Edits</h4>
                  <p className="text-sm text-gray-600 mb-4">Remixes, edits, and reimagined tracks</p>
                  <div className="bg-gray-100 p-4 rounded text-center">
                    <p className="text-xs text-gray-500">Playlist ID: 527718</p>
                    <p className="text-xs text-gray-400 mt-1">SoundCloud embed coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Musical Styles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Musical Styles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { style: "House Music", emoji: "🏠", description: "Deep, progressive, and tech house vibes" },
              { style: "Bass Music", emoji: "🔊", description: "Heavy bass lines and electronic drops" },
              { style: "Drum & Bass", emoji: "🥁", description: "Fast breakbeats and intricate rhythms" },
              { style: "Nu Funk", emoji: "🕺", description: "Modern funk with electronic elements" },
              { style: "Nu Jazz", emoji: "🎺", description: "Contemporary jazz fusion and improvisation" },
              { style: "Nu Soul", emoji: "💜", description: "Soulful melodies with modern production" }
            ].map((genre, index) => (
              <div key={index} className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{genre.emoji}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{genre.style}</h3>
                <p className="text-sm text-gray-600">{genre.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">The Chemist's Philosophy</h2>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Music is chemistry. Each track is an experiment, each beat a reaction, each melody a discovery. 
              Clayton the Chemist approaches electronic music with the precision of a scientist and the passion of an artist.
            </p>
            <p className="text-lg text-gray-700">
              The laboratory is the studio. The formula is always evolving. The result is music that moves both 
              the mind and the body, creating connections between genres and bridging the gap between underground 
              and accessible.
            </p>
          </div>
        </div>

        {/* Other Projects Link */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Explore More</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Natural Selection Music */}
            <Link href="/music" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎵</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-black">Natural Selection Music</h3>
                  <p className="text-gray-600 text-sm">
                    Dave's main musical project featuring soul, jazz, and R&B influenced compositions
                  </p>
                </div>
              </div>
            </Link>

            {/* DJ Services */}
            <Link href="/dj-services" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎧</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-black">DJ Services</h3>
                  <p className="text-gray-600 text-sm">
                    Professional event DJing with 20+ years of experience across all venues
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Follow the Experiment</h2>
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