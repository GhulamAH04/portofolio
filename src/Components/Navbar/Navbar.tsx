"use client";

import {useState} from "react";
import {motion} from "framer-motion";
import {Lang, navDict, setLangStorage} from "@/lib/i18n";

type Props = {
  lang: Lang;
};

export default function Navbar({lang}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const t = navDict[lang];

  const links = [
    {name: t.home, href: "#hero"},
    {name: t.about, href: "#about"},
    {name: t.portfolio, href: "#portofolio"},
    {name: t.experience, href: "#experience"},
    {name: t.testimonials, href: "#testimonials"},
    {name: t.contact, href: "#contact"},
  ];

  const toggleLang = () => {
    setLangStorage(lang === "ja" ? "en" : "ja");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-semibold tracking-tight">
          Ghulam
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-700 hover:text-gray-900">
              {l.name}
            </a>
          ))}

          <button
            onClick={toggleLang}
            className="text-sm px-3 py-1.5 rounded-full border border-gray-200 hover:border-gray-300"
            aria-label="Toggle language">
            {t.langLabel}:{" "}
            <span className="font-semibold">{lang.toUpperCase()}</span>
          </button>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu">
          ☰
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{opacity: 0, y: -8}}
          animate={{opacity: 1, y: 0}}
          className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setIsOpen(false)}>
                {l.name}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLang();
                setIsOpen(false);
              }}
              className="text-left px-3 py-2 rounded-lg border border-gray-200">
              {t.langLabel}:{" "}
              <span className="font-semibold">{lang.toUpperCase()}</span>
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
