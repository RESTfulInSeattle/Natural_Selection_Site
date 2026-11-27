import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen theme-page">
      {/* Hero Section with DJ Ballroom Background */}
      <div className="relative flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/pages/home/dj-ballroom-hero.jpg"
          alt="Natural Selection DJ looking out over ballroom and Puget Sound"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_55%] select-none pointer-events-none"
          quality={90}
        />

        {/* Ambient Dark Scrim & Gradients for Readability and Depth */}
        <div className="absolute inset-0 bg-slate-950/60 dark:bg-black/70 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/70" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white dark:from-[#02070a] to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-14 md:py-16 text-center">
          <h1 className="text-xl sm:text-xl md:text-xl lg:text-xl font-extrabold mb-6 tracking-tight text-white max-w-4xl mx-auto leading-tight drop-shadow-lg">
            Dedicated to the Art of Deejaying, Music Production, Audio Engineering, and Acoustics.
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="inline-block gradient-accent text-white px-8 py-3.5 rounded-xl font-semibold hover:scale-105 transition-all duration-200 shadow-xl shadow-sky-950/30"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      
      {/* Services Section */}
      <div className="py-10 theme-page">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                href: "/dj-services",
                title: "DJ Services",
                description: "Professional event DJing for weddings, corporate events, and entertainment",
                logo: "ns-deejaying",
                alt: "Natural Selection Deejaying",
                width: 1008,
                height: 474,
              },
              {
                href: "/mastering",
                title: "Audio Mastering",
                description: "Professional mastering services to make your music sound its best",
                logo: "ns-mastering",
                alt: "Natural Selection Mastering",
                width: 1024,
                height: 473,
              },
              {
                href: "/music",
                title: "Music & Production",
                description: "Original music composition and production for media and licensing",
                logo: "ns-music",
                alt: "Natural Selection Music",
                width: 1006,
                height: 474,
              },
              {
                href: "/about",
                title: "Consultation",
                description: "Acoustical consultation and studio design expertise",
                logo: "ns-music",
                alt: "Natural Selection Music",
                width: 1006,
                height: 474,
              },
            ].map((service) => (
              <Link key={service.title} href={service.href} className="group">
                <div className="theme-card rounded-2xl p-6 text-center h-full hover:scale-[1.02] transition-all duration-200">
                  <div className="h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200">
                    <Image
                      src={`/images/${service.logo}-black.png`}
                      alt={service.alt}
                      width={service.width}
                      height={service.height}
                      className="h-14 w-auto object-contain dark:hidden"
                    />
                    <Image
                      src={`/images/${service.logo}-white.png`}
                      alt={service.alt}
                      width={service.width}
                      height={service.height}
                      className="h-14 w-auto object-contain hidden dark:block"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 theme-heading group-hover:text-emerald-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="theme-muted text-sm leading-relaxed">{service.description}</p>
                </div>
              </Link>
            ))}
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