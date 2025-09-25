import Image from "next/image";

export default function DJServices() {
  return (
    <div className="min-h-screen gradient-section-light">
      {/* Hero Section */}
      <div className="gradient-hero text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Image
            src="/content/images/ns-deejaying_header_white.png"
            alt="Natural Selection DJ Services"
            width={550}
            height={94}
            className="mx-auto mb-8"
            priority
          />
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            A great DJ plays the right song at the right time
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            With 28 years of experience across nightclubs, weddings, corporate events, fundraisers, 
            lounges, casinos, and outdoor races, Dave Clayton brings the expertise and passion to make your event a success.
          </p>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="gradient-accent text-white py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg">
            📞 Call or text <a href="tel:206-851-0003" className="font-bold hover:underline">206-851-0003</a> for a quote
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Service Description */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Professional DJ Services</h2>
          <p className="text-lg text-gray-700 mb-4">
            No event and crowd are the same. You need a seasoned professional to both keep the event on schedule, 
            and the crowd entertained with music that speaks to them.
          </p>
          <p className="text-lg text-gray-700">
            Sound and Lighting can be scaled up and down to your needs and venue size.
          </p>
        </div>

        {/* Equipment & Services */}
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 mb-12 border border-white/30 shadow-xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Equipment & Capabilities</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Audio Equipment */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                <div className="gradient-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd"/>
                  </svg>
                </div>
                Audio Systems
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  2 Simultaneous wireless microphones (handheld, lapel, or combination)
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  3 Separate audio zones for ceremony, cocktail, and reception
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Subwoofer reinforced venue sound system
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Digital audio processing adapted to venue acoustics
                </li>
              </ul>
            </div>

            {/* Lighting */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                <div className="gradient-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 6.343a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464a1 1 0 10-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z"/>
                  </svg>
                </div>
                Lighting Systems
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Dance lighting that moves to the beat of the music
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Static or color-changing up-lighting
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Atmosphere enhancement for any venue
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Scalable to venue size and requirements
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Event Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Event Experience</h2>
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
              <div key={index} className="text-center p-4 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200">
                <div className="text-3xl mb-2">{event.icon}</div>
                <div className="font-semibold text-gray-900">{event.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* DJ Mixes Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 mb-12 border border-white/30 shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">DJ Mixes by Dave Clayton</h2>
          <p className="text-center text-gray-700 mb-8">
            Listen to various decades and genres showcasing Dave's versatility and skill
          </p>
          
          {/* Placeholder for Mixcloud embeds - will be implemented as components later */}
          <div className="grid md:grid-cols-1 gap-6">
            {[
              "Winchester Goose Set",
              "Natural Selection Disco",
              "Natural Selection 80s",
              "Natural Selection 90s", 
              "Natural Selection Top 40"
            ].map((mix, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded border border-white/20 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{mix}</span>
                  <span className="text-sm text-gray-500">Mixcloud Player</span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  🎵 Preview available - Full integration coming soon
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900"></h2>
          <div className="bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg p-6 text-center shadow-lg">
            <p className="text-lg text-gray-700 mb-4">
             
            </p>
            <p className="font-semibold text-gray-900"></p>
          </div>
          <div className="text-center mt-6">
            <a 
              href="http://yelp.com/biz/natural-selection-seattle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Check out Natural Selection on Yelp
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="gradient-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Book Your Event?</h2>
          <p className="text-lg text-gray-300 mb-6">
            Get a personalized quote for your event. Call, text, or use our contact form.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:206-851-0003" 
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              📞 Call 206-851-0003
            </a>
            <a 
              href="/contact" 
              className="inline-block border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Contact Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}