"use client";
export default function ContactPage() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      {/* Container untuk membatasi lebar konten dan memusatkannya */}
      <div className="container mx-auto px-6 max-w-2xl">
        {/* Judul halaman kontak */}
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        {/* Form untuk mengirim pesan */}
        <form className="space-y-6">
          {/* Input untuk nama */}
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Input untuk email */}
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Textarea untuk pesan */}
          <div>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          {/* Tombol untuk mengirim pesan */}
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
