import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen gradient-section-light">
      {/* Hero Section */}
      <div className="gradient-mesh text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Image
              className="mx-auto mb-8"
              src="/content/images/ns-deejaying_header_white.png"
              alt="Natural Selection Deejaying"
              width={550}
              height={94}
              priority
            />
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              A great DJ plays the right song at the right time
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              No event and crowd are the same. You need a seasoned professional to both keep the event on schedule, 
              and the crowd entertained with music that speaks to them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Get Quote
              </Link>
              <a 
                href="tel:206-851-0003" 
                className="inline-block border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-200"
              >
                📞 206-851-0003
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Banner */}
      <div className="gradient-primary text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-gray-300">Events Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From DJing unforgettable events to professional audio mastering, 
              Natural Selection brings expertise across the entire music spectrum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* DJ Services */}
            <Link href="/dj-services" className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center hover:shadow-xl transition-all duration-200 border border-white/20">
                <div className="gradient-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.369 4.369 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">DJ Services</h3>
                <p className="text-gray-600 text-sm">Professional event DJing for weddings, corporate events, and entertainment</p>
              </div>
            </Link>

            {/* Audio Mastering */}
            <Link href="/mastering" className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center hover:shadow-xl transition-all duration-200 border border-white/20">
                <div className="gradient-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Audio Mastering</h3>
                <p className="text-gray-600 text-sm">Professional mastering services to make your music sound its best</p>
              </div>
            </Link>

            {/* Music Production */}
            <Link href="/music" className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center hover:shadow-xl transition-all duration-200 border border-white/20">
                <div className="gradient-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Music & Production</h3>
                <p className="text-gray-600 text-sm">Original music composition and production for media and licensing</p>
              </div>
            </Link>

            {/* Consultation */}
            <Link href="/about" className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center hover:shadow-xl transition-all duration-200 border border-white/20">
                <div className="gradient-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Consultation</h3>
                <p className="text-gray-600 text-sm">Acoustical consultation and studio design expertise</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* About Dave Section */}
      <div className="py-16 gradient-section-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Dave Clayton</h2>
              <p className="text-lg text-gray-700 mb-6">
                With 20 years of experience in playing everything from nightclubs, weddings, corporate events, 
                fundraisers, lounges, casinos, and Outdoor Races, Dave Clayton has the experience and passion 
                to make your event a success!
              </p>
              <p className="text-lg text-gray-700 mb-6">
                A renaissance man in the music industry, Dave is also known as "Clayton the Chemist" in the 
                underground music scene, producing music across House, Bass Music, Drum & Bass, Nu Funk, Nu Jazz, and Nu Soul.
              </p>
              <Link 
                href="/about" 
                className="inline-block gradient-accent text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Learn More About Dave
              </Link>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-6xl mb-4">🎵</div>
                <h3 className="text-xl font-semibold mb-2">Natural Selection</h3>
                <p className="text-gray-600">Est. October 2003</p>
                <p className="text-sm text-gray-500 mt-4">Seattle, WA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Equipment & Capabilities */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Equipment</h2>
            <p className="text-lg text-gray-600">Sound and lighting that can be scaled to your venue size and requirements</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-white/30">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd"/>
                </svg>
                Audio Systems
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 2 Simultaneous wireless microphones</li>
                <li>• 3 Separate audio zones</li>
                <li>• Subwoofer reinforced sound system</li>
                <li>• Digital audio processing</li>
              </ul>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-white/30">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 6.343a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1z"/>
                </svg>
                Lighting Systems
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Dance lighting that moves to the beat</li>
                <li>• Color-changing up-lighting</li>
                <li>• Atmosphere enhancement</li>
                <li>• Venue-appropriate scaling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make Your Event Unforgettable?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a personalized quote. We typically respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Your Quote
            </Link>
            <a 
              href="tel:206-851-0003" 
              className="inline-block border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-200"
            >
              Call 206-851-0003
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}