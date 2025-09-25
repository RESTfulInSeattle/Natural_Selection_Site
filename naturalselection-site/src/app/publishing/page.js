import Image from "next/image";
import Link from "next/link";

export default function Publishing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/content/pages/2015/10/publishing/images/ns-music_header_white.png"
            alt="Natural Selection Music Publishing"
            width={550}
            height={94}
            className="mx-auto mb-8"
            priority
          />
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Music Publishing & Licensing
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Original sample-free compositions available for film, television, advertising, and commercial projects.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Music That Tells Your Story</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Music invokes emotion, and can help take the viewer to that place in the scene. 
            Natural Selection Music's diverse catalog of moods should have one your movie is looking for.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 inline-block">
            <p className="text-lg font-semibold text-gray-900 mb-2">Licensed through</p>
            <p className="text-2xl font-bold text-black">Musica De NS</p>
            <p className="text-sm text-gray-600">ASCAP ID: 88537</p>
          </div>
        </div>

        {/* Featured Licensing Playlist */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Licensing Catalog</h2>
          <div className="text-center mb-8">
            <div className="bg-white rounded-lg p-8 border-2 border-dashed border-gray-300 max-w-2xl mx-auto">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-semibold mb-4">SoundCloud Licensing Playlist</h3>
              <p className="text-sm text-gray-600 mb-4">Complete catalog of licensable tracks</p>
              <p className="text-xs text-gray-500">Playlist ID: 1538598</p>
              <p className="text-xs text-gray-400 mt-2">Full embed integration coming soon</p>
            </div>
          </div>
        </div>

        {/* Available Tracks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Available Tracks</h2>
          <p className="text-center text-gray-600 mb-8">
            All tracks are original, sample-free compositions ready for licensing
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "No Reason Why ft Moqita", id: "882026142", mood: "Uplifting, Inspirational" },
              { title: "Loving the Sunshine ft Moqita", id: "882025133", mood: "Warm, Positive" },
              { title: "Beautiful World ft Moqita", id: "882024415", mood: "Cinematic, Hopeful" },
              { title: "Healing Dub ft Moqita", id: "381004313", mood: "Ambient, Meditative" },
              { title: "Making With", id: "882044503", mood: "Creative, Energetic" },
              { title: "What You're Feeling ft Moqita", id: "882025297", mood: "Emotional, Introspective" },
              { title: "Holler ft Moqita", id: "882026278", mood: "Urban, Dynamic" },
              { title: "Resistance ft Moqita", id: "882025892", mood: "Powerful, Dramatic" },
              { title: "The Heart Area ft Moqita", id: "882026143", mood: "Soulful, Deep" },
              { title: "Too Slow ft Moqita", id: "882026410", mood: "Laid-back, Groove" }
            ].map((song, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{song.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{song.mood}</p>
                <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                  <div className="font-mono">ASCAP ID: {song.id}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Licensing Uses */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Perfect For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { use: "Film & TV", icon: "🎬", description: "Soundtracks, background music, and scene setting" },
              { use: "Advertising", icon: "📺", description: "Commercial spots, brand videos, and marketing" },
              { use: "Corporate", icon: "🏢", description: "Presentations, training videos, and events" },
              { use: "Digital Media", icon: "💻", description: "YouTube, podcasts, and online content" },
              { use: "Gaming", icon: "🎮", description: "Video game soundtracks and interactive media" },
              { use: "Documentaries", icon: "📽️", description: "Educational and documentary productions" },
              { use: "Retail", icon: "🛍️", description: "In-store music and shopping experiences" },
              { use: "Events", icon: "🎪", description: "Live events, exhibitions, and installations" }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.use}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Licensing Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="text-center">
              <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold mb-3">Browse & Preview</h3>
              <p className="text-gray-700">
                Listen to our catalog and identify tracks that fit your project's mood and style
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold mb-3">Contact & Discuss</h3>
              <p className="text-gray-700">
                Reach out with your project details, usage requirements, and licensing needs
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold mb-3">License & Use</h3>
              <p className="text-gray-700">
                Receive your license agreement and high-quality audio files for your project
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Our Music */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Why Choose Natural Selection Music?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                100% Original
              </h3>
              <p className="text-gray-700 mb-6">
                All compositions are completely original with no samples, ensuring clear rights and no copyright conflicts.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                Professional Quality
              </h3>
              <p className="text-gray-700 mb-6">
                Recorded and mastered in professional studios with world-class equipment and expertise.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                ASCAP Registered
              </h3>
              <p className="text-gray-700 mb-6">
                All tracks are properly registered with ASCAP for legitimate licensing and royalty collection.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                Flexible Licensing
              </h3>
              <p className="text-gray-700 mb-6">
                Various licensing options available from single-use to broad commercial rights.
              </p>
            </div>
          </div>
        </div>

        {/* Explore More */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Explore Our Music</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Natural Selection Albums */}
            <Link href="/music" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎵</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-black">Natural Selection Albums</h3>
                  <p className="text-gray-600 text-sm">
                    Explore our full catalog of soul, jazz, and R&B influenced compositions
                  </p>
                </div>
              </div>
            </Link>

            {/* Clayton the Chemist */}
            <Link href="/clayton-the-chemist" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">🧪</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-black">Clayton the Chemist</h3>
                  <p className="text-gray-600 text-sm">
                    Electronic music productions perfect for modern, urban, and high-energy projects
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-black text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to License Our Music?</h2>
          <p className="text-lg text-gray-300 mb-6">
            Contact us to discuss your project and find the perfect musical fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Licensing Process
            </Link>
            <a 
              href="mailto:info@naturalselectiondeejaying.com" 
              className="inline-block border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-200"
            >
              Email Directly
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}