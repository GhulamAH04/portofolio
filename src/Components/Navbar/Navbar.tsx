"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // Library untuk animasi

export default function Navbar() {
  // State untuk toggle menu mobile
  const [isOpen, setIsOpen] = useState(false);

  // Daftar navigasi
  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portofolio" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-2xl z-50">
      {/* Container utama dengan padding dan alignment */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo dengan responsif text */}
          <a href="#hero">
            <span className="flex flex-row text-xl font-bold text-gray-800 decrypted-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
              {/* Text yang berbeda untuk mobile dan desktop */}
              <span className="block md:hidden">GHULAM</span>
              <span className="hidden md:block">GHULAM AL HAFIZH</span>
            </span>
          </a>

          {/* Navigasi Desktop - hidden di mobile */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Tombol Menu Mobile */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-blue-500 transition-colors hover:cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu" // Accessibility label
            aria-expanded={isOpen} // Accessibility state
          >
            {/* Icon menu dinamis (hamburger/close) */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path // Icon X (close)
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path // Icon hamburger
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigasi Mobile dengan animasi */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} // State awal animasi
            animate={{ opacity: 1, y: 0 }} // State akhir animasi
            transition={{ duration: 0.3 }} // Durasi transisi
            className="md:hidden mt-4 space-y-4"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)} // Tutup menu saat diklik
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
