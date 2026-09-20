import Image from "next/image";
import Link from "next/link";

export default function Publishing() {
  return (
    <div className="min-h-screen theme-page">
      {/* Hero Section */}
      <div className="theme-hero py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Image
            src="/content/pages/2015/10/publishing/images/ns-music_header_white.png"
            alt="Natural Selection Music Publishing"
            width={550}
            height={94}
            className="mx-auto mb-6 drop-shadow-md brightness-0 dark:brightness-100 transition-all duration-200"
            priority
          />
          <h1 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight theme-heading">
            Music Publishing & Licensing
          </h1>
          <p className="text-base md:text-lg theme-muted max-w-3xl mx-auto font-normal leading-relaxed">
            Original sample-free compositions available for film, television, advertising, and commercial projects.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 theme-heading">Music That Tells Your Story</h2>
          <p className="text-lg theme-body max-w-4xl mx-auto mb-8 leading-relaxed">
            Music invokes emotion, and can help take the viewer to that place in the scene. 
            Natural Selection Music&apos;s diverse catalog of moods should have one your movie is looking for.
          </p>
          <div className="theme-card rounded-2xl p-6 inline-block">
            <p className="text-sm font-semibold theme-muted mb-1">Licensed through</p>
            <p className="text-2xl font-bold theme-heading">Musica De NS</p>
            <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-1 font-semibold">ASCAP ID: 88537</p>
          </div>
        </div>

        {/* Featured Licensing Playlist */}
        <div className="theme-card rounded-2xl p-8 mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center theme-heading">Licensing Catalog</h2>
          <div className="text-center mb-4">
            <div className="bg-slate-100 dark:bg-slate-900/60 rounded-xl p-4 shadow-sm max-w-4xl mx-auto border border-emerald-500/20">
              <iframe 
                width="100%" 
                height="400" 
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1538598&color=%230284c7&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                className="rounded-lg"
              />
              <div style={{fontSize: '10px', color: '#94a3b8', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100, marginTop: '8px'}}>
                <a href="https://soundcloud.com/naturalselection" title="NaturalSelection" target="_blank" style={{color: '#94a3b8', textDecoration: 'none'}}>NaturalSelection</a> · <a href="https://soundcloud.com/naturalselection/sets/publishing-versions" title="Publishing Versions" target="_blank" style={{color: '#94a3b8', textDecoration: 'none'}}>Publishing Versions</a>
              </div>
            </div>
          </div>
        </div>

        {/* Available Tracks */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center theme-heading">Available Tracks</h2>
          <p className="text-center theme-muted mb-8 text-sm">
            All tracks are original, sample-free compositions ready for licensing
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "No Reason Why ft Moqita", id: "882026142", mood: "Uplifting, Inspirational" },
              { title: "Loving the Sunshine ft Moqita", id: "882025133", mood: "Warm, Positive" },
              { title: "Beautiful World ft Moqita", id: "882024415", mood: "Cinematic, Hopeful" },
              { title: "Healing Dub ft Moqita", id: "381004313", mood: "Ambient, Meditative" },
              { title: "Making With", id: "882044503", mood: "Creative, Energetic" },
              { title: "What You're Feeling ft Moqita", id: "882025297", mood: "Emotional, Introspective" },
              { title: "Holler ft Moqita", id: "882026278", mood: "Urban, Dynamic" },
              { title: "Resistance ft Moqita", id: "882025892", mood: "Powerful, Dramatic" },
              { title: "The Heart Area ft Moqita", id: "882026143", mood: "Soulful, Deep" },
              { title: "Too Slow ft Moqita", id: "882026410", mood: "Laid-back, Groove" }
            ].map((song, index) => (
              <div key={index} className="theme-card p-6 rounded-2xl hover:scale-[1.02] transition-all duration-200">
                <h3 className="text-lg font-semibold theme-heading mb-1.5">{song.title}</h3>
                <p className="text-sm theme-muted mb-3">{song.mood}</p>
                <div className="bg-emerald-500/10 rounded-lg px-3 py-1.5 border border-emerald-500/20 inline-block">
                  <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold">ASCAP ID: {song.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="theme-cta rounded-2xl p-10 text-center border shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight theme-heading">Ready to License Our Music?</h2>
          <p className="text-base md:text-lg theme-muted mb-8 max-w-2xl mx-auto">
            Contact us to discuss your project and find the perfect musical fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block gradient-accent text-white px-8 py-3.5 rounded-xl font-bold hover:scale-105 transition-all duration-200 shadow-md"
            >
              Start Licensing Process
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}