"use client";
export default function ContactPage() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
