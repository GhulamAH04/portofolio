"use client";

import {motion} from "framer-motion";
import {Lang} from "@/lib/i18n";

const nameVariants = {
  hidden: {opacity: 0, y: 20},
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {delay: i * 0.05, duration: 0.45},
  }),
};

type Props = {lang: Lang};

export default function Hero({lang}: Props) {
  const name = "Ghulam Al Hafizh".split("");

  const content = {
    en: {
      role: "Full-Stack Web Developer Student",
      body: `Hi, I’m Ghulam. I completed a Full-Stack JavaScript program at Purwadhika and build web apps with React/Next.js, Node.js, and PostgreSQL/Prisma.
Previously, I worked in Japan in a nursing care facility, where I developed strong ownership, attention to detail, and clear communication (reporting, sharing updates, and coordinating with teams).
I’m now transitioning into software engineering and continuously improving through hands-on projects, focusing on user experience, maintainability, and clean code.`,
      cta: "View Portfolio",
    },
    ja: {
      role: "フルスタックWebエンジニア（ジュニア）",
      body: `こんにちは。Ghulam Al Hafizh と申します。Purwadhika にて Full-Stack JavaScript 開発を修了し、React / Next.js / Node.js / PostgreSQL / Prisma を中心に学習・実装してきました。
前職では日本の介護施設にて勤務し、報連相を徹底しながら、正確性と責任感を大切に業務を進めてまいりました。
現在は個人開発を通して、ユーザー体験・保守性・可読性を意識した開発を継続しています。`,
      cta: "制作物を見る",
    },
  }[lang];

  return (
    <section
      id="hero"
      className="pt-20 md:pt-24 min-h-screen flex items-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="md:w-1/2 lg:w-2/5">
          <img
            src="/hero-image.png"
            alt="Profile"
            className="rounded-lg shadow-lg object-cover w-full max-w-[400px] mx-auto"
          />
        </div>

        <div className="md:w-1/2 lg:w-3/5 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            {name.map((letter, index) => (
              <motion.span
                key={index}
                variants={nameVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                className="inline-block">
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            {content.role}
          </h2>

          <p className="text-gray-600 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed whitespace-pre-line">
            {content.body}
          </p>

          <a
            href="#portofolio"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            {content.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
