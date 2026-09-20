export default function Contact() {
  return (
    <div className="min-h-screen theme-page">
      {/* Hero Header */}
      <div className="theme-hero py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight theme-heading">Contact Natural Selection</h1>
          <p className="text-base md:text-lg theme-muted max-w-2xl mx-auto font-normal leading-relaxed">
            Whether you need event DJ services, audio mastering, or music licensing, we&apos;re here to help.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="theme-card rounded-2xl p-8 sm:p-12 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center theme-heading">Send Us a Message</h2>
          
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
  );
}