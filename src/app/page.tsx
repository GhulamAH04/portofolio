import React from "react";
import Hero from "@/pages/Hero-page";
import Portofolio from "@/pages/Portofolio-page";
import Aboutme from "@/pages/AboutMe-page";
import Navbar from "@/Components/Navbar/Navbar";
import Testimonials from "@/pages/Testimonials-page";
import ContactPage from "@/pages/contact-page/contact";
import Experience from "@/pages/experience.tsx";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutme />
      <Portofolio />
      <Experience />
      <Testimonials />
      <ContactPage />
    </div>
  );
}
