import Image from "next/image";
import { getPageContent, processContentImages } from "../../lib/content";
import { ContentHero, ContentSection, ContentRenderer, ImageGallery } from "../../components/Content";

export default async function About() {
  // Get the about page content from markdown
  const aboutContent = await getPageContent('about');
  
  if (!aboutContent) {
    // Fallback to existing content structure if markdown not found
    return <ExistingAboutContent />;
  }

  const processedContent = processContentImages(aboutContent.content, aboutContent.slug, 'page');

  return (
    <div className="min-h-screen gradient-primary">
      <ContentSection>
        <p className="text-lg text-gray-300 mb-6">
          Natural Selection was created by Dave Clayton in October 2003, and has remained an outlet for his passion for music.
        </p>        
          <div>
            {aboutContent.images && aboutContent.images.length > 0 && (
              <ImageGallery 
                images={aboutContent.images}
                className="grid-cols-1"
              />
            )}
          </div>

      </ContentSection>

      {/* Enhanced About Section with Dave's Background */}
      <ContentSection background="dark">
        <div className="gradient-primary Dgrid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Meet Dave Clayton</h2>
            <p className="text-lg text-gray-300 mb-6">
              With 28 years of industry experience, Dave is a renaissance man in the music industry 
              who is adept at DJing, producing, live performance, mastering, acoustical design, 
              and enjoys sharing his knowledge and mentoring others.
            </p>
            <p className="text-gray-300 mb-6">
              Natural Selection was created in October 2003 as an outlet for Dave's passion for music. 
              His underground moniker, Clayton the Chemist, features vibes that run the gamut of House, 
              Bass Music, Drum & Bass, Nu Funk, Nu Jazz, and Nu Soul.
            </p>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-300">Expertise:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  Professional Event DJ Services
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  Audio Mastering & Engineering
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  Sound System Design & Setup
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  Acoustical Consultation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

   

      {/* Call to Action */}
      <ContentSection background="dark">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Make Your Event Unforgettable?</h2>
          <p className="text-lg text-gray-300 mb-6">
            Let's discuss how Natural Selection can bring the perfect sound to your next event.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </ContentSection>
    </div>
  );
}

// Fallback to existing content structure if markdown isn't available
function ExistingAboutContent() {
  return (
    <div className="min-h-screen gradient-section-light">
      {/* Hero Section */}
      <div className="gradient-hero text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Natural Selection</h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Creating exceptional musical experiences since 2003
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <Image
              src="/images/pages/about/muralleveled.jpg"
              alt="Natural Selection Mural by Bret Seyfert"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Dave Clayton</h2>
            <p className="text-lg text-gray-700 mb-4">
              Natural Selection was created by Dave Clayton in October 2003, and has remained an outlet for his passion for music.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With 28 years of indstry experience, Dave is a renaissance man in the music industry who is adept at DJing, producing, live performance, mastering, acoustical design, and enjoys sharing his knowledge and mentoring others.
            </p>
            <p className="text-lg text-gray-700">
              His underground moniker, Clayton the Chemist, features vibes that run the gamut of House, Bass Music, Drum & Bass, Nu Funk, Nu Jazz, and Nu Soul.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.369 4.369 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Venue & Event DJ</h3>
              <p className="text-gray-600">Professional DJ services for all event types</p>
            </div>
            
            <div className="text-center">
              <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12c0-2.21-.896-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 12a5.983 5.983 0 01-.757 2.829 1 1 0 11-1.415-1.415A3.987 3.987 0 0014 12a3.987 3.987 0 00-1.172-2.829 1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">DJ Sound System & Lighting</h3>
              <p className="text-gray-600">Professional audio and visual equipment</p>
            </div>
            
            <div className="text-center">
              <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Audio Mastering</h3>
              <p className="text-gray-600">Professional audio mastering and engineering</p>
            </div>
            
            <div className="text-center">
              <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Acoustical Consultation</h3>
              <p className="text-gray-600">Studio design and acoustic treatment</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Experience & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-black mb-2">28</div>
              <div className="text-lg text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">100+</div>
              <div className="text-lg text-gray-600">Events Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">∞</div>
              <div className="text-lg text-gray-600">Musical Passion</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-black text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Make Your Event Unforgettable?</h2>
          <p className="text-lg text-gray-300 mb-6">
            Let's discuss how Natural Selection Deejaying can bring the perfect sound to your next event.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}