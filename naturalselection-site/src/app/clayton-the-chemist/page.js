import Image from "next/image";
import Link from "next/link";
import ClaytonTabs from "@/components/ClaytonTabs";

export const metadata = {
  title: "Clayton the Chemist | Producer & DJ | Natural Selection",
  description: "Artist portfolio for Dave Clayton (Clayton The Chemist) - DJ sets, YouTube playlist, music releases, photo gallery, and electronic press kit (EPK).",
};

export default function ClaytonTheChemist() {
  return (
    <div className="min-h-screen gradient-primary">
      {/* Streamlined Hero Section */}
      <div className="bg-gradient-to-br from-purple-950 via-black to-blue-950 text-white py-8 sm:py-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-col items-center sm:items-center gap-6">

            {/* Header Content */}
            <div className="flex-1 text-center sm:text-center min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 justify-center sm:justify-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                  Clayton the Chemist
                </h1>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 mb-3">
                House • Bass Music • Drum & Bass • Nu Funk • Nu Jazz • Nu Soul
              </p>

              {/* Quote & Bio */}
             
                &quot;You look like a mad scientist up there mixing records, like some crazy chemist&quot;
                <span className="text-gray-400 not-italic ml-1">- JJ Brown</span>

            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Tabs & Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* 5-Tab Section: DJ Mixes, Videos, Releases, Photos, EPK */}
        <div className="mb-12">
          <ClaytonTabs />
        </div>

        {/* Philosophy */}
        <div className="gradient-primary from-purple-950/40 to-blue-950/40 rounded-xl p-6 mb-10 border border-white/10 shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-center text-gray-200">The Chemist&apos;s Philosophy</h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              &quot;When you hear the first notes of Stevie Wonder&apos;s voice, you instantly feel what he&apos;s singing about. The range of my sets, and musical library, will be broad, but the thing that ties everything together, the essential element, is that you will feel the emotion the song is conveying.&quot;
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="gradient-mesh text-white rounded-xl p-6 text-center border border-white/10 shadow-lg">
          <p className="text-sm sm:text-base text-gray-300 mb-4">
            Stay connected for new releases, remixes, and musical experiments.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="https://soundcloud.com/claytonthechemist" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 shadow-md shadow-orange-900/30"
            >
              Follow on SoundCloud
            </a>
            <Link 
              href="/contact" 
              className="inline-block border border-white/70 hover:border-white text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white hover:text-purple-900 transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}