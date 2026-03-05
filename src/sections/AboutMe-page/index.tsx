"use client";

import React from "react";
import {getSkills} from "@/data/skills";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiGithub,
  SiSupabase,
  SiPrisma,
  SiPostgresql,
  SiVercel,
} from "react-icons/si";
import {FaGraduationCap, FaLanguage, FaCode} from "react-icons/fa";
import {Lang} from "@/lib/i18n";

type Props = {lang: Lang};

type IconType = React.ComponentType<{className?: string}>;

const skillIconMap: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  GitHub: SiGithub,
  Supabase: SiSupabase,
  Prisma: SiPrisma,
  PostgreSQL: SiPostgresql,
  Vercel: SiVercel,
};

function SkillPill({label}: {label: string}) {
  const Icon = skillIconMap[label];
  return (
    <span className="text-sm px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm inline-flex items-center gap-2 hover:shadow-md transition-shadow">
      {Icon ? <Icon className="w-4 h-4" /> : null}
      {label}
    </span>
  );
}

export default function AboutMeSection({lang}: Props) {
  const t = {
    en: {
      title: "About Me",
      subtitle: "A brief summary of my background and focus.",
      name: "Ghulam Al Hafizh",
      bio: `I majored in Japanese Literature, which strengthened my communication skills and cross-cultural perspective. During my studies, I also had the opportunity to study in Japan.
After several years of work experience in Japan, I’m now transitioning into web development. I focus on practical, production-oriented learning and building real projects with modern web technologies.
My goal is to become a reliable engineer who can contribute to a team with clear communication, ownership, and consistent improvement.`,
      eduTitle: "Education",
      stackTitle: "Core Skills (Tech Stack)",
      edu1Title: "Bachelor’s Degree in Japanese Literature",
      edu1Org: "Darma Persada University",
      edu1Year: "2013 - 2017",
      edu2Title: "Yono Japanese Language School",
      edu2Org: "Saitama, Japan",
      edu2Year: "2018 - 2019",
      edu3Title: "Web Development Bootcamp",
      edu3Org: "Purwadhika Digital School",
      edu3Year: "2025",
      stackNote:
        "Listed technologies are based on what I used or practiced in my portfolio and todo projects.",
    },
    ja: {
      title: "自己紹介",
      subtitle: "経歴と現在の取り組みを簡潔にまとめています。",
      name: "Ghulam Al Hafizh",
      bio: `大学では日本文学を専攻し、言語・文化・コミュニケーションを深く学びました。また在学中に日本で学ぶ機会も得て、異文化環境での適応力を養いました。
現在は Web 開発へキャリアチェンジし、制作物を通じて継続的に学習・改善を行っています。
報連相・やり切る姿勢・改善の積み重ねを強みに、チームに安心して任せてもらえるエンジニアを目指します。`,
      eduTitle: "学歴",
      stackTitle: "主要スキル（Tech Stack）",
      edu1Title: "日本文学 学士",
      edu1Org: "ダルマ・プルサダ大学",
      edu1Year: "2013 - 2017",
      edu2Title: "与野日本語学校",
      edu2Org: "埼玉県・日本",
      edu2Year: "2018 - 2019",
      edu3Title: "Web開発ブートキャンプ",
      edu3Org: "Purwadhika Digital School",
      edu3Year: "2025",
      stackNote:
        "※ ポートフォリオ / Todo アプリで使用・学習した技術を中心に記載しています。",
    },
  }[lang];

  // NEW skills.ts returns a single object: { title, items: [{label}] }
  const skills = getSkills(lang);

  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t.title}
          </h2>
          <p className="text-gray-500 text-lg">{t.subtitle}</p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Bio */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                {t.name}
              </h3>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {t.bio}
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="flex flex-col gap-8">
            <h3 className="text-xl font-semibold text-gray-700">
              {t.eduTitle}
            </h3>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-50 rounded-full">
                    <FaGraduationCap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {t.edu1Title}
                    </h4>
                    <p className="text-gray-600">{t.edu1Org}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      {t.edu1Year}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                    <FaLanguage className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {t.edu2Title}
                    </h4>
                    <p className="text-gray-600">{t.edu2Org}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {t.edu2Year}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 rounded-full">
                    <FaCode className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {t.edu3Title}
                    </h4>
                    <p className="text-gray-600">{t.edu3Org}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      {t.edu3Year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills (single unified list) */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-semibold text-gray-700">
              {skills?.title ?? t.stackTitle}
            </h3>

            <div className="flex flex-wrap gap-3">
              {(skills?.items ?? []).map((x) => (
                <SkillPill key={x.label} label={x.label} />
              ))}
            </div>

            <p className="text-xs text-gray-400">{t.stackNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
