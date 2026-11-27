import Image from "next/image";
import Link from "next/link";
import { MixcloudPlayer } from "@/components/MusicPlayers";
import { getDJEventPhotos } from "@/lib/djGallery";
import TabbedEventGallery from "@/components/TabbedEventGallery";

export default function DJServices() {
  const eventCategories = getDJEventPhotos();

  return (
    <div className="min-h-screen theme-page">
      {/* Hero Section with DJ Ballroom Background */}
      <div className="relative min-h-[520px] md:min-h-[600px] lg:min-h-[660px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/pages/dj-services/dj-ballroom-hero.jpg"
          alt="Natural Selection DJ looking out over ballroom and Puget Sound"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center select-none pointer-events-none"
          quality={90}
        />

        {/* Ambient Dark Scrim & Gradients for Contrast and Depth */}
        <div className="absolute inset-0 bg-slate-950/60 dark:bg-black/70 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-slate-950/70" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-[#02070a] to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-8 md:py-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight text-white max-w-3xl mx-auto leading-tight drop-shadow-lg">
            A great DJ plays the right song at the right time
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-84font-normal leading-relaxed drop-shadow-md">
            With 28 years of experience across nightclubs, weddings, corporate events, fundraisers, 
            lounges, casinos, and outdoor races, Dave Clayton brings the expertise and passion to make your event a success.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
            <Link 
              href="/contact" 
              className="inline-block gradient-accent text-white px-8 py-3.5 rounded-xl font-semibold hover:scale-105 transition-all duration-200 shadow-xl shadow-sky-950/30"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Service Description */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold mb-6 theme-heading">Professional DJ Services</h2>
          <p className="text theme-body mb-4 leading-relaxed">
            No event and crowd are the same. You need a seasoned professional to both keep the event on schedule, 
            and the crowd entertained with music that speaks to them.
          </p>
        </div>

        {/* Event Experience Tabbed Gallery */}
        <TabbedEventGallery categories={eventCategories} />

        {/* Mixcloud Section */}
        <div className="theme-card rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold mb-2 text-center theme-heading">Sample DJ Mixes</h2>
          <p className="text-center theme-muted mb-8 text-sm">
            Curated event sets across Disco, 80s, 90s, and Top 40 by Dave Clayton
          </p>
          <div className="space-y-6">          
            <MixcloudPlayer 
              url="https://www.mixcloud.com/ClaytontheChemist/natural-selection-disco/"
              title="Natural Selection Disco"
              height="120"
            />
            
            <MixcloudPlayer 
              url="https://www.mixcloud.com/ClaytontheChemist/natural-selection-80s/"
              title="Natural Selection 80s"
              height="120"
            />
            
            <MixcloudPlayer 
              url="https://www.mixcloud.com/ClaytontheChemist/natural-selection-90s/"
              title="Natural Selection 90s"
              height="120"
            />
            
            <MixcloudPlayer 
              url="https://www.mixcloud.com/ClaytontheChemist/natural-selection-top-40/"
              title="Natural Selection Top 40"
              height="120"
            />
          </div>
        </div>
 {/* Equipment & Capabilities */}
        <div className="theme-card rounded-2xl p-8 mb-14">
          <h2 className="text-xl md:text-xl font-bold mb-4 text-center theme-heading">Equipment & Capabilities</h2>
          <p className="text-center theme-body leading-relaxed mb-4">
            Sound and lighting can be scaled up and down to your needs and venue size.
          </p>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Audio Equipment */}
            <div className="theme-card-subtle rounded-xl p-6">
              <h3 className="text font-bold mb-4 theme-heading flex items-center">
                <div className="gradient-accent text-white rounded-xl w-9 h-9 flex items-center justify-center mr-3 shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd"/>
                  </svg>
                </div>
                Audio Systems
              </h3>
              <ul className="space-y-3 theme-body">
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-3 font-bold">✓</span>
                  2 Simultaneous wireless microphones (handheld, lapel, or combination)
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-3 font-bold">✓</span>
                  3 Separate audio zones for ceremony, cocktail, and reception
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-3 font-bold">✓</span>
                  Subwoofer reinforced venue sound system
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-3 font-bold">✓</span>
                  Digital audio processing adapted to venue acoustics
                </li>
              </ul>
            </div>

            {/* Lighting */}
            <div className="theme-card-subtle rounded-xl p-6">
              <h3 className="text font-bold mb-4 theme-heading flex items-center">
                <div className="gradient-accent text-white rounded-xl w-9 h-9 flex items-center justify-center mr-3 shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 6.343a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
                  </svg>
                </div>
                Lighting Systems
              </h3>
              <ul className="space-y-3 theme-body">
                <li className="flex items-start">
                  <span className="text-sky-600 dark:text-sky-400 mr-3 font-bold">✓</span>
                  Dance lighting that moves to the beat of the music
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 dark:text-sky-400 mr-3 font-bold">✓</span>
                  Static or color-changing up-lighting
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 dark:text-sky-400 mr-3 font-bold">✓</span>
                  Atmosphere enhancement for any venue
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 dark:text-sky-400 mr-3 font-bold">✓</span>
                  Scalable to venue size and requirements
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Yelp Testimonial Link */}
        <div className="mb-14">
          <div className="theme-card rounded-2xl p-6 text-center">
            <a 
              href="http://yelp.com/biz/natural-selection-seattle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sky-600 dark:text-sky-400 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
            >
              Check out Natural Selection on Yelp
              <svg className="w-4 h-4 ml-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="theme-cta rounded-2xl p-10 text-center border shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight theme-heading">Ready to Book Your Event?</h2>
          <p className="text-base md:text-lg theme-muted mb-8 max-w-2xl mx-auto">
            Get a personalized quote for your event. Call, text, or use our contact form.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block gradient-accent text-white px-8 py-3.5 rounded-xl font-bold hover:scale-105 transition-all duration-200 shadow-md"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}