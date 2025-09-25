import Image from "next/image";
import Link from "next/link";

export default function Music() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-16">
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
            Music for your soul, as well as, your backside
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Clayton and Fulcrum's original compositions and releases spanning multiple genres and moods.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Featured Albums */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Featured Albums</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* The Soul Purpose */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-center">The Soul Purpose</h3>
              <div className="bg-white rounded-lg p-4 mb-6">
                {/* Placeholder for SoundCloud embed */}
                <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded">
                  <div className="text-4xl mb-4">🎵</div>
                  <p className="text-sm text-gray-600 mb-2">SoundCloud Playlist</p>
                  <p className="text-xs text-gray-500">Playlist ID: 296341</p>
                </div>
              </div>
              
              {/* Spotify Embed Placeholder */}
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="text-center p-6 border-2 border-dashed border-gray-300 rounded">
                  <div className="text-green-600 text-3xl mb-2">♪</div>
                  <p className="text-sm text-gray-600 mb-2">Available on Spotify</p>
                  <p className="text-xs text-gray-500">Album ID: 35mVsGO3cS1LAL0PlwfIkg</p>
                </div>
              </div>

              {/* Apple Music Embed Placeholder */}
              <div className="bg-white rounded-lg p-4">
                <div className="text-center p-6 border-2 border-dashed border-gray-300 rounded">
                  <div className="text-gray-800 text-3xl mb-2">🍎</div>
                  <p className="text-sm text-gray-600 mb-2">Available on Apple Music</p>
                  <p className="text-xs text-gray-500">Album ID: 49523137</p>
                </div>
              </div>
            </div>

            {/* Songs from the Soul City */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-center">Songs from the Soul City</h3>
              <div className="bg-white rounded-lg p-4 mb-6">
                {/* Placeholder for SoundCloud embed */}
                <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded">
                  <div className="text-4xl mb-4">🎵</div>
                  <p className="text-sm text-gray-600 mb-2">SoundCloud Playlist</p>
                  <p className="text-xs text-gray-500">Playlist ID: 300979</p>
                </div>
              </div>
              
              {/* Spotify Embed Placeholder */}
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="text-center p-6 border-2 border-dashed border-gray-300 rounded">
                  <div className="text-green-600 text-3xl mb-2">♪</div>
                  <p className="text-sm text-gray-600 mb-2">Available on Spotify</p>
                  <p className="text-xs text-gray-500">Album ID: 2HI8vZKInuaab67WDTtidl</p>
                </div>
              </div>

              {/* Apple Music Embed Placeholder */}
              <div className="bg-white rounded-lg p-4">
                <div className="text-center p-6 border-2 border-dashed border-gray-300 rounded">
                  <div className="text-gray-800 text-3xl mb-2">🍎</div>
                  <p className="text-sm text-gray-600 mb-2">Available on Apple Music</p>
                  <p className="text-xs text-gray-500">Album ID: 256424222</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation to Other Music Pages */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Explore More</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Clayton the Chemist */}
            <Link href="/clayton-the-chemist" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">🧪</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-black">Clayton the Chemist</h3>
                  <p className="text-gray-600 text-sm">
                    Dave's underground moniker featuring House, Bass Music, Drum & Bass, Nu Funk, Nu Jazz, and Nu Soul
                  </p>
                </div>
              </div>
            </Link>

            {/* Music Publishing */}
            <Link href="/publishing" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">📄</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-black">Music Publishing</h3>
                  <p className="text-gray-600 text-sm">
                    Original sample-free songs available for licensing in film, TV, and commercial projects
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Musical Styles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Musical Styles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { style: "Soul", emoji: "💜", description: "Deep, emotional compositions" },
              { style: "Jazz", emoji: "🎺", description: "Sophisticated harmonies and improvisation" },
              { style: "R&B", emoji: "🎤", description: "Smooth vocals and groove" },
              { style: "Electronic", emoji: "🎛️", description: "Modern production techniques" },
              { style: "Hip-Hop", emoji: "🎤", description: "Urban beats and rhythms" },
              { style: "Instrumental", emoji: "🎹", description: "Music for meditation and focus" }
            ].map((genre, index) => (
              <div key={index} className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="text-4xl mb-3">{genre.emoji}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{genre.style}</h3>
                <p className="text-sm text-gray-600">{genre.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-black text-white rounded-lg p-8 text-center">
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