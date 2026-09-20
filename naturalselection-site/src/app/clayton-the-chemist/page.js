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
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Clayton the Chemist</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Producer & DJ
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            House • Bass Music • Drum & Bass • Nu Funk • Nu Jazz • Nu Soul
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Origin Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-10">
          <div>
            <Image
              src="/images/pages/clayton-the-chemist/Clayton-The-Chemist-Instax.jpeg"
              alt="Clayton the Chemist"
              width={400}
              height={400}
              className="rounded-lg shadow-xl"
              priority
            />
          </div>
          <div>
            <blockquote className="text-2xl italic text-gray-300 mb-6 border-l-4 border-purple-600 pl-6">
              &quot;You look like a mad scientist up there mixing records, like some crazy chemist&quot;
              <footer className="text-base text-gray-200 mt-4 not-italic">- JJ Brown</footer>
            </blockquote>
            <p className="text-lg text-gray-300 mb-4">
              Dave Clayton is a renaissance man in the music industry. He is adept at DJing, Music Production, Audio Mastering and Engineering, Acoustical Design, and is an avid instructor and mentor. He gravitates towards funky, soulful, and deep vibes in his sets, and masters a wealth of different genres for musical fulfilment. This is also evident in his productions and remixes.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              His DJ and live performances are vibrant, fun, and incorporate fusions of different genres and places into an artistic flow of consciousness.
            </p>
            <p className="text-base text-purple-300 font-medium">
              Notable Opening Gigs: De La Soul, Massive Attack, LTJ Bukem, DJ Krush
            </p>
          </div>
        </div>

        {/* 5-Tab Section: DJ Mixes, Videos, Releases, Photos, EPK */}
        <div className="mb-16">
          <ClaytonTabs />
        </div>

        {/* Philosophy */}
        <div className="gradient-primary from-purple-50 to-blue-50 rounded-2xl p-8 mb-16 border border-white/10 shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-200">The Chemist&apos;s Philosophy</h2>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              &quot;When you hear the first notes of Stevie Wonder&apos;s voice, you instantly feel what he&apos;s singing about. The range of my sets, and musical library, will be broad, but the thing that ties everything together, the essential element, is that you will feel the emotion the song is conveying.&quot;
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="gradient-mesh text-white rounded-2xl p-8 text-center border border-white/10 shadow-xl">
          <p className="text-lg text-gray-300 mb-6">
            Stay connected for new releases, remixes, and musical experiments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://soundcloud.com/claytonthechemist" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-lg shadow-orange-900/30"
            >
              Follow on SoundCloud
            </a>
            <Link 
              href="/contact" 
              className="inline-block border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}