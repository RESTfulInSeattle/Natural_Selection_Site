import Image from "next/image";
import Link from "next/link";
import { MixcloudPlayer } from "@/components/MusicPlayers";

export default function DJServices() {
  return (
    <div className="min-h-screen theme-page">
      {/* Hero Section */}
      <div className="theme-hero py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Image
            src="/content/images/ns-deejaying_header_white.png"
            alt="Natural Selection DJ Services"
            width={550}
            height={94}
            className="mx-auto mb-8 drop-shadow-md brightness-0 dark:brightness-100 transition-all duration-200"
            priority
          />
          <h1 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight theme-heading">
            A great DJ plays the right song at the right time
          </h1>
          <p className="text-base md:text-lg theme-muted max-w-3xl mx-auto mb-8 font-normal leading-relaxed">
            With 28 years of experience across nightclubs, weddings, corporate events, fundraisers, 
            lounges, casinos, and outdoor races, Dave Clayton brings the expertise and passion to make your event a success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block gradient-accent text-white px-8 py-3.5 rounded-xl font-semibold hover:scale-105 transition-all duration-200 shadow-lg shadow-sky-950/20 dark:shadow-sky-950/60"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Service Description */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold mb-6 theme-heading">Professional DJ Services</h2>
          <p className="text-lg theme-body mb-4 leading-relaxed">
            No event and crowd are the same. You need a seasoned professional to both keep the event on schedule, 
            and the crowd entertained with music that speaks to them.
          </p>
          <p className="text-lg theme-body leading-relaxed">
            Sound and lighting can be scaled up and down to your needs and venue size.
          </p>
        </div>

        {/* Equipment & Capabilities */}
        <div className="theme-card rounded-2xl p-8 mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center theme-heading">Equipment & Capabilities</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Audio Equipment */}
            <div className="theme-card-subtle rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 theme-heading flex items-center">
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
              <h3 className="text-xl font-bold mb-4 theme-heading flex items-center">
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

        {/* Event Types */}
        <div className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center theme-heading">Event Experience</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Weddings", icon: "💒" },
              { name: "Corporate Events", icon: "🏢" },
              { name: "Nightclubs", icon: "🎵" },
              { name: "Fundraisers", icon: "💝" },
              { name: "Lounges", icon: "🍸" },
              { name: "Casinos", icon: "🎰" },
              { name: "Races and Festivals", icon: "🏃" },
              { name: "Private Parties", icon: "🎉" }
            ].map((event, index) => (
              <div key={index} className="text-center p-5 theme-card rounded-2xl hover:scale-[1.02] transition-all duration-200">
                <div className="text-3xl mb-2">{event.icon}</div>
                <div className="font-semibold theme-heading">{event.name}</div>
              </div>
            ))}
          </div>
        </div>

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