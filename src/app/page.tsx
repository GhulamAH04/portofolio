"use client";

import {useEffect, useState} from "react";
import Hero from "@/sections/Hero-page";
import Portofolio from "@/sections/Portofolio-page";
import Aboutme from "@/sections/AboutMe-page";
import Navbar from "@/Components/Navbar/Navbar";
import Testimonials from "@/sections/Testimonials-page";
import ContactPage from "@/sections/contact-page/contact";
import Experience from "@/sections/experience.tsx";
import {getInitialLang, Lang} from "@/lib/i18n";
import Footer from "@/Components/Footer/Footer";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("ja");

  useEffect(() => {
    setLang(getInitialLang());
    const onChange = (e: any) => setLang((e?.detail as Lang) ?? "ja");
    window.addEventListener("langchange", onChange);
    return () => window.removeEventListener("langchange", onChange);
  }, []);

  return (
    <div>
      <Navbar lang={lang} />
      <Hero lang={lang} />
      <Aboutme lang={lang} />
      <Portofolio lang={lang} />
      <Experience lang={lang} />
      <Testimonials lang={lang} />
      <ContactPage lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
