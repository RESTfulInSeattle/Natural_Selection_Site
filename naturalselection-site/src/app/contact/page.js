import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen theme-page relative overflow-x-hidden">
      {/* Flowing Hero Mural Background */}
      <div className="absolute inset-x-0 top-0 h-[620px] sm:h-[720px] md:h-[840px] overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/pages/about/muralleveled.jpg"
          alt="Natural Selection Mural by Bret Seyfert"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
          quality={90}
        />

        {/* Ambient Scrim & Smooth Vertical Fade into Page Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/35 to-white/25 dark:from-black/80 dark:via-black/50 dark:to-black/40 backdrop-blur-[0.5px]" />
        <div className="absolute inset-x-0 bottom-0 h-56 sm:h-64 bg-gradient-to-t from-white via-white/75 to-transparent dark:from-[#02070a] dark:via-[#02070a]/75 dark:to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Hero Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-10 sm:pt-20 sm:pb-12">
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-3 tracking-tight text-white max-w-3xl mx-auto leading-tight drop-shadow-lg">
            Contact Natural Selection
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md">
            Whether you need event DJ services, audio mastering, or music licensing, we&apos;re here to help.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-14">
          <div className="theme-card-glass rounded-2xl p-8 sm:p-12 shadow-xl">
          <h2 className="text-xl md:text-xl font-bold mb-8 text-center theme-heading">Send Us a Message</h2>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold theme-heading mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="First name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-[#030c10] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold theme-heading mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Last name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-[#030c10] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold theme-heading mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-[#030c10] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold theme-heading mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-[#030c10] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="serviceType" className="block text-sm font-semibold theme-heading mb-2">
                Service Interest
              </label>
              <select
                id="serviceType"
                name="serviceType"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-[#030c10] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm"
              >
                <option value="">Select a service...</option>
                <option value="dj-services">DJ Services</option>
                <option value="wedding">Wedding DJ</option>
                <option value="corporate">Corporate Event</option>
                <option value="mastering">Audio Mastering</option>
                <option value="music-licensing">Music Licensing</option>
                <option value="consultation">Acoustical Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="eventDate" className="block text-sm font-semibold theme-heading mb-2">
                  Event Date (if applicable)
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-[#030c10] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="venue" className="block text-sm font-semibold theme-heading mb-2">
                  Venue / Location
                </label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  placeholder="Event venue or city"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-[#030c10] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold theme-heading mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell us about your event, music preferences, timeline, budget range, or any specific requirements..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-[#030c10] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm"
              ></textarea>
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                className="gradient-accent text-white px-10 py-3.5 rounded-xl font-bold hover:scale-105 transition-all duration-200 shadow-lg cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}