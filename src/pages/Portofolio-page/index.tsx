"use client";

export default function PortofolioPage() {
  return (
    <section
      id="portofolio"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          My Personal Website Journey
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Kartu proyek portofolio */}
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transition-transform duration-300 hover:scale-[1.02]">
              {/* Flex container untuk gambar dan deskripsi */}
              <div className="flex flex-col md:flex-row gap-8">
                {/* Bagian gambar proyek */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-xl bg-gradient-to-r from-purple-100 to-blue-50 flex items-center justify-center">
                    {/* Ikon proyek */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                </div>

                {/* Bagian deskripsi proyek */}
                <div className="flex-grow">
                  {/* Judul proyek dan tautan demo langsung */}
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-2xl font-bold text-gray-800">
                      Modern Portfolio Development
                    </h3>
                    {/* link untuk demo langsung proyek */}
                    <a
                      href="http://portofolioghulam.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 transition-colors flex items-center gap-1.5 group/link"
                    >
                      <span className="text-sm font-medium">Live Demo</span>
                      {/* Ikon untuk link demo langsung */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 -mt-px stroke-current"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </a>
                  </div>
                  {/* Informasi proyek */}
                  <p className="text-purple-600 font-medium mb-4">
                    Self-Driven Project • 2025
                  </p>

                  {/* Deskripsi proyek dan teknologi yang digunakan */}
                  <div className="prose prose-purple">
                    <p className="text-gray-600 mb-4">
                      Crafted a performant and modern web presence using
                      cutting-edge technologies:
                    </p>

                    {/* Grid untuk teknologi yang digunakan */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {/* Setiap item teknologi */}
                      <div className="flex items-center space-x-3">
                        <svg
                          className="w-5 h-5 text-purple-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                        <span>Next.js 14</span>
                      </div>
                      {/* Item teknologi lainnya */}
                      <div className="flex items-center space-x-3">
                        <svg
                          className="w-5 h-5 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                        <span>TypeScript</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg
                          className="w-5 h-5 text-cyan-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                        <span>Tailwind CSS</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg
                          className="w-5 h-5 text-pink-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                        <span>Vercel Deployment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
