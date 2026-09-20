import Link from "next/link";
import ClaytonTabs from "@/components/ClaytonTabs";

export const metadata = {
  title: "Clayton the Chemist | Producer & DJ | Natural Selection",
  description: "Artist portfolio for Dave Clayton (Clayton The Chemist) - DJ sets, YouTube playlist, music releases, photo gallery, and electronic press kit (EPK).",
};

export default function ClaytonTheChemist() {
  return (
    <div className="min-h-screen theme-page">
      {/* Streamlined Hero Section */}
      <div className="theme-hero py-8 sm:py-10 border-b border-slate-200/80 dark:border-emerald-500/20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center gap-3 text-center">
            {/* Header Content */}
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight theme-heading mb-2">
                Clayton the Chemist
              </h1>
              <p className="text-xs sm:text-sm theme-muted font-medium mb-4">
                House • Bass Music • Drum & Bass • Nu Funk • Nu Jazz • Nu Soul
              </p>

              {/* Quote & Bio */}
              <blockquote className="text-sm sm:text-base text-slate-700 dark:text-emerald-100/80 italic font-light">
                &quot;You look like a mad scientist up there mixing records, like some crazy chemist&quot;
                <span className="text-emerald-600 dark:text-emerald-300 not-italic ml-2 font-normal">— JJ Brown</span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Tabs & Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 5-Tab Section: DJ Mixes, Videos, Releases, Photos, EPK */}
        <div className="mb-12">
          <ClaytonTabs />
        </div>

        {/* Philosophy */}
        <div className="theme-card rounded-2xl p-8 mb-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center theme-heading">The Chemist&apos;s Philosophy</h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm sm:text-base theme-body leading-relaxed">
              &quot;When you hear the first notes of Stevie Wonder&apos;s voice, you instantly feel what he&apos;s singing about. The range of my sets, and musical library, will be broad, but the thing that ties everything together, the essential element, is that you will feel the emotion the song is conveying.&quot;
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="theme-cta rounded-2xl p-8 text-center border shadow-xl">
          <p className="text-sm sm:text-base theme-muted mb-6">
            Stay connected for new releases, remixes, and musical experiments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://soundcloud.com/claytonthechemist" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#ff5500] hover:bg-[#e04b00] text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 shadow-md shadow-orange-950/20"
            >
              Follow on SoundCloud
            </a>
            <Link 
              href="/contact" 
              className="inline-block gradient-accent text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:scale-105 transition-all duration-200 shadow-md"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}