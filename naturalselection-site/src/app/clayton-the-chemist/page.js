import Image from "next/image";
import Link from "next/link";
import ClaytonTabs from "@/components/ClaytonTabs";

export const metadata = {
  title: "Clayton the Chemist | Producer & DJ | Natural Selection",
  description: "Artist portfolio for Dave Clayton (Clayton The Chemist) - DJ sets, YouTube playlist, music releases, photo gallery, and electronic press kit (EPK).",
};

export default function ClaytonTheChemist() {
  return (
    <div className="min-h-screen theme-page relative overflow-x-hidden">
      {/* Flowing Hero Seattle Skyline Background */}
      <div className="absolute inset-x-0 top-0 h-[440px] sm:h-[500px] md:h-[560px] overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/pages/clayton-the-chemist/clayton-seattle-panorama-hero.jpg"
          alt="Seattle skyline and Space Needle overlooking Elliott Bay"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
        />

        {/* Ambient Scrim & Smooth Vertical Fade into Page Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/45 to-white/20 dark:from-black/80 dark:via-black/55 dark:to-black/40 backdrop-blur-[0.5px]" />
        <div className="absolute inset-x-0 bottom-0 h-56 sm:h-64 bg-gradient-to-t from-white via-white/75 to-transparent dark:from-[#02070a] dark:via-[#02070a]/75 dark:to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Hero Header */}
        <div className="py-10 sm:py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-3 text-center">
              {/* Header Content */}
              <div className="max-w-2xl">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2 drop-shadow-lg">
                  Clayton the Chemist
                </h1>
                <p className="text-xs sm:text-sm text-slate-200 font-medium mb-4 drop-shadow-md">
                  House • Bass Music • Drum & Bass • Nu Funk • Nu Jazz • Nu Soul
                </p>

                {/* Quote & Bio */}
                <blockquote className="text-sm sm:text-base text-slate-100 italic font-light drop-shadow-md">
                  &quot;You look like a mad scientist up there mixing records, like some crazy chemist&quot;
                  <span className="text-emerald-300 not-italic ml-2 font-medium">— JJ Brown</span>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Tabs & Sections */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8">
          {/* 5-Tab Section: DJ Mixes, Videos, Releases, Photos, EPK */}
          <div className="mb-12">
            <ClaytonTabs />
          </div>

          {/* Philosophy */}
          <div className="theme-card-glass rounded-2xl p-8 mb-10">
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
    </div>
  );
}