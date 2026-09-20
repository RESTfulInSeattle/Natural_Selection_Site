import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen theme-page">
      {/* Hero Section */}
      <div className="theme-hero py-10 md:py-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-14 mb-10">
              <Link 
                href="/dj-services" 
                className="transition-transform duration-200 hover:scale-105 focus:outline-none flex items-center justify-center"
                aria-label="Natural Selection Deejaying"
              >
                <Image
                  className="drop-shadow-md brightness-0 dark:brightness-100 transition-all duration-200 w-auto h-10 sm:h-14 md:h-16 lg:h-20 object-contain"
                  src="/images/ns-deejaying_header_white.png"
                  alt="Natural Selection Deejaying"
                  width={400}
                  height={188}
                  priority
                />
              </Link>
              <Link 
                href="/music" 
                className="transition-transform duration-200 hover:scale-105 focus:outline-none flex items-center justify-center"
                aria-label="Natural Selection Music"
              >
                <Image
                  className="drop-shadow-md brightness-0 dark:brightness-100 transition-all duration-200 w-auto h-10 sm:h-14 md:h-16 lg:h-20 object-contain"
                  src="/images/ns-music_header_white.png"
                  alt="Natural Selection Music"
                  width={399}
                  height={188}
                  priority
                />
              </Link>
              <Link 
                href="/mastering" 
                className="transition-transform duration-200 hover:scale-105 focus:outline-none flex items-center justify-center"
                aria-label="Natural Selection Mastering"
              >
                <Image
                  className="drop-shadow-md brightness-0 dark:brightness-100 transition-all duration-200 w-auto h-10 sm:h-14 md:h-16 lg:h-20 object-contain"
                  src="/images/ns-mastering_header_white.png"
                  alt="Natural Selection Mastering"
                  width={407}
                  height={188}
                  priority
                />
              </Link>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-10 tracking-tight theme-heading">
              Dedicated to the Art of Deejaying, Music Production, Audio Engineering, and Acoustics.
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-block gradient-accent text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-200 shadow-lg shadow-sky-950/20 dark:shadow-sky-950/60"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Banner */}
      <div className="theme-banner py-5 border-y">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-5 rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur-sm border border-emerald-500/15 shadow-sm">
              <div className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-emerald-600 to-sky-600 dark:from-emerald-400 dark:to-sky-300 bg-clip-text text-transparent">28</div>
              <div className="theme-muted font-medium">Years Experience</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur-sm border border-emerald-500/15 shadow-sm">
              <div className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-sky-600 to-emerald-600 dark:from-sky-400 dark:to-emerald-300 bg-clip-text text-transparent">100+</div>
              <div className="theme-muted font-medium">Events Completed</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur-sm border border-emerald-500/15 shadow-sm">
              <div className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">100%</div>
              <div className="theme-muted font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-10 theme-page">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold theme-heading mb-4">Our Services</h2>
            <p className="text-lg theme-muted max-w-3xl mx-auto">
              From DJing unforgettable events to professional audio mastering, 
              Natural Selection brings expertise across the entire music spectrum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* DJ Services */}
            <Link href="/dj-services" className="group">
              <div className="theme-card rounded-2xl p-6 text-center h-full hover:scale-[1.02] transition-all duration-200">
                <div className="gradient-accent text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200 shadow-md">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.369 4.369 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 theme-heading group-hover:text-emerald-500 transition-colors">DJ Services</h3>
                <p className="theme-muted text-sm leading-relaxed">Professional event DJing for weddings, corporate events, and entertainment</p>
              </div>
            </Link>

            {/* Audio Mastering */}
            <Link href="/mastering" className="group">
              <div className="theme-card rounded-2xl p-6 text-center h-full hover:scale-[1.02] transition-all duration-200">
                <div className="gradient-accent text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200 shadow-md">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 theme-heading group-hover:text-emerald-500 transition-colors">Audio Mastering</h3>
                <p className="theme-muted text-sm leading-relaxed">Professional mastering services to make your music sound its best</p>
              </div>
            </Link>

            {/* Music Production */}
            <Link href="/music" className="group">
              <div className="theme-card rounded-2xl p-6 text-center h-full hover:scale-[1.02] transition-all duration-200">
                <div className="gradient-accent text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200 shadow-md">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 theme-heading group-hover:text-emerald-500 transition-colors">Music & Production</h3>
                <p className="theme-muted text-sm leading-relaxed">Original music composition and production for media and licensing</p>
              </div>
            </Link>

            {/* Consultation */}
            <Link href="/about" className="group">
              <div className="theme-card rounded-2xl p-6 text-center h-full hover:scale-[1.02] transition-all duration-200">
                <div className="gradient-accent text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200 shadow-md">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 theme-heading group-hover:text-emerald-500 transition-colors">Consultation</h3>
                <p className="theme-muted text-sm leading-relaxed">Acoustical consultation and studio design expertise</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Equipment & Capabilities */}
      <div className="py-20 theme-page border-t border-slate-200/80 dark:border-emerald-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold theme-heading mb-4">Professional Equipment</h2>
            <p className="text-lg theme-muted">Sound and lighting scaled to your venue size and requirements</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="theme-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center theme-heading">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd"/>
                  </svg>
                </span>
                Audio Systems
              </h3>
              <ul className="space-y-3 theme-body">
                <li className="flex items-center"><span className="text-emerald-600 dark:text-emerald-400 mr-2 font-bold">✓</span> 2 Simultaneous wireless microphones</li>
                <li className="flex items-center"><span className="text-emerald-600 dark:text-emerald-400 mr-2 font-bold">✓</span> 3 Separate audio zones</li>
                <li className="flex items-center"><span className="text-emerald-600 dark:text-emerald-400 mr-2 font-bold">✓</span> Subwoofer reinforced sound system</li>
                <li className="flex items-center"><span className="text-emerald-600 dark:text-emerald-400 mr-2 font-bold">✓</span> Digital audio processing</li>
              </ul>
            </div>

            <div className="theme-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center theme-heading">
                <span className="w-8 h-8 rounded-lg bg-sky-500/15 text-sky-600 dark:text-sky-400 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 6.343a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1z"/>
                  </svg>
                </span>
                Lighting Systems
              </h3>
              <ul className="space-y-3 theme-body">
                <li className="flex items-center"><span className="text-sky-600 dark:text-sky-400 mr-2 font-bold">✓</span> Dance lighting that moves to the beat</li>
                <li className="flex items-center"><span className="text-sky-600 dark:text-sky-400 mr-2 font-bold">✓</span> Color-changing up-lighting</li>
                <li className="flex items-center"><span className="text-sky-600 dark:text-sky-400 mr-2 font-bold">✓</span> Atmosphere enhancement</li>
                <li className="flex items-center"><span className="text-sky-600 dark:text-sky-400 mr-2 font-bold">✓</span> Venue-appropriate scaling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 theme-cta border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight theme-heading">Ready to Make Your Event Unforgettable?</h2>
          <p className="text-lg md:text-xl theme-muted mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized quote. We typically respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block gradient-accent text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all duration-200 shadow-xl"
            >
              Get Your Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}