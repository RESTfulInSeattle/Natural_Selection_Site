export default function Contact() {
  return (
    <div className="min-h-screen gradient-primary">


      {/* Contact Information */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Contact Form */}
        <div className="gradient-mesh backdrop-blur-sm rounded-lg p-8 mb-12 border border-white/30 shadow-xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-300">Send Us a Message</h2>
          <form className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-300 mb-2">
                Service Interest
              </label>
              <select
                id="serviceType"
                name="serviceType"
                className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80"
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

            <div className="mb-6">
              <label htmlFor="eventDate" className="block text-sm font-medium text-gray-300 mb-2">
                Event Date (if applicable)
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="venue" className="block text-sm font-medium text-gray-300 mb-2">
                Venue/Location
              </label>
              <input
                type="text"
                id="venue"
                name="venue"
                placeholder="Event venue or city"
                className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Tell us about your event, music preferences, timeline, budget range, or any specific requirements..."
                className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="gradient-accent text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105"
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