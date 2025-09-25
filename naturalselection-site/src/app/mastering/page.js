import Image from "next/image";

export default function Mastering() {
  return (
    <div className="min-h-screen gradient-primary">
      {/* Hero Section */}
      <div className="gradient-mesh text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Image
            src="/content/pages/2015/10/mastering/images/ns-mastering_header_white.png"
            alt="Natural Selection Mastering"
            width={550}
            height={94}
            className="mx-auto mb-8"
            priority
          />
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
            Professional Audio Mastering Services
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            The final step to ensure your music translates perfectly on any system. 
            World-class digital mastering technology in an acoustically neutral environment.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Service Introduction */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Mastering Excellence</h2>
          <p className="text-lg text-gray-300 mb-4">
            You've completed that mix or album you live for, and now you need mastering to push your vision further. 
            Dave Clayton will assure your mix translates, and makes an impact, on any system played.
          </p>
          <p className="text-lg text-gray-300">
            Mastering is the last chance for your project before delivery. You get an un-biased critical ear 
            in an acoustically neutral environment with world-class digital mastering technology.
          </p>
        </div>

        {/* Mastering Chain */}
        <div className="gradient-primary backdrop-blur-sm rounded-lg p-8 mb-12 border border-white/30 shadow-xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Current Mastering Chain</h2>
          <div className="text-center mb-8">
            <Image
              src="/content/pages/2015/10/mastering/images/currentmasteringchain.png"
              alt="Natural Selection Mastering Chain"
              width={600}
              height={400}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <p className="text-center text-gray-300">
            Professional-grade digital processing chain optimized for clarity, punch, and translation across all playback systems.
          </p>
        </div>

        {/* Services Offered */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-300">What You Get</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Digital Formats */}
            <div className="gradient-primary backdrop-blur-sm border border-white/30 rounded-lg p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-300 flex items-center">
                <div className="gradient-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
                Digital Delivery
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  High quality MP3s optimized for compression
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Lossless delivery (.WAV, FLAC, Apple Lossless)
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Multiple format options for different platforms
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Streaming platform optimization
                </li>
              </ul>
            </div>

            {/* CD Production */}
            <div className="gradient-primary backdrop-blur-sm border border-white/30 rounded-lg p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-300 flex items-center">
                <div className="gradient-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.798 7.45c.512-.67 1.135-.95 1.702-.95s1.19.28 1.702.95a.75.75 0 001.192-.91C12.637 5.55 11.596 5 10.5 5s-2.137.55-2.894 1.54a.75.75 0 001.192.91z" clipRule="evenodd"/>
                  </svg>
                </div>
                CD Production
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Full Redbook compliant CD creation
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  SRC codes and CD Text implementation
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  DDP 2.0 with CD Text Addendum
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Professional disc preparation
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="gradient-primary backdrop-blur-sm rounded-lg p-8 mb-12 border border-white/30 shadow-xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-300">Mastering Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="text-center">
              <div className="gradient-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold mb-2">Critical Analysis</h3>
              <p className="text-gray-300 text-sm">
                Unbiased evaluation of your mix in an acoustically neutral environment
              </p>
            </div>
            
            <div className="text-center">
              <div className="gradient-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold mb-2">Professional Processing</h3>
              <p className="text-gray-300 text-sm">
                World-class digital mastering technology to enhance your vision
              </p>
            </div>
            
            <div className="text-center">
              <div className="gradient-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold mb-2">Quality Delivery</h3>
              <p className="text-gray-300 text-sm">
                Multiple format delivery ensuring translation across all systems
              </p>
            </div>
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-300">Technical Excellence</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "EQ & Dynamics", 
                description: "Precise frequency balancing and dynamic control",
                icon: "📊"
              },
              { 
                title: "Stereo Enhancement", 
                description: "Width and imaging optimization",
                icon: "🎯"
              },
              { 
                title: "Level Optimization", 
                description: "Competitive loudness with preserved dynamics",
                icon: "📈"
              },
              { 
                title: "Format Conversion", 
                description: "High-quality sample rate and bit depth conversion",
                icon: "🔄"
              }
            ].map((service, index) => (
              <div key={index} className="text-center p-4 gradient-primary backdrop-blur-sm border border-white/30 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200">
                <div className="text-2xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Acoustical Environment */}
        <div className="gradient-primary backdrop-blur-sm border border-white/30 rounded-lg p-8 mb-12 shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-300">Acoustically Neutral Environment</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Monitoring Environment</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Acoustically treated monitoring room
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Reference-grade studio monitors
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Multiple playback system testing
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Calibrated monitoring chain
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="gradient-primary rounded-lg p-8">
                <div className="text-4xl mb-4">🏠</div>
                <h4 className="text-lg font-semibold mb-2">The Natural Selection Lab</h4>
                <p className="text-gray-300 text-sm">
                  Dedicated mastering environment designed for critical listening and professional audio production
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="gradient-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Master Your Music?</h2>
          <p className="text-lg text-gray-300 mb-6">
            Let's discuss your project and how mastering can take your music to the next level.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Get Mastering Quote
          </a>
        </div>
      </div>
    </div>
  );
}