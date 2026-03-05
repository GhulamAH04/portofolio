"use client";

import {Lang} from "@/lib/i18n";

type Props = {lang: Lang};

type Project = {
  title: string;
  year: string;
  meta: string;
  description: string;
  tech: string[];
  liveUrl: string;
};

export default function PortofolioPage({lang}: Props) {
  const t = {
    en: {
      heading: "Projects",
      sub: "Selected projects showcasing my current focus and skills.",
      live: "Live Demo",
    },
    ja: {
      heading: "制作物",
      sub: "学習・実装を通じて作成したプロジェクトの一部です。",
      live: "デモを見る",
    },
  }[lang];

  const projects: Project[] = [
    {
      title: lang === "ja" ? "ポートフォリオサイト" : "Portfolio Website",
      year: "2025",
      meta: lang === "ja" ? "個人開発" : "Personal Project",
      description:
        lang === "ja"
          ? "セクション構成で見やすいレイアウトを設計し、EN/JP の二言語表示に対応。"
          : "A clean portfolio layout with reusable sections, improved copywriting, and EN/JP bilingual support.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://portofolioghulam.vercel.app/",
    },
    {
      title: lang === "ja" ? "シンプルTodoリスト" : "Simple Todo List",
      year: "2026",
      meta: lang === "ja" ? "個人開発" : "Personal Project",
      description:
        lang === "ja"
          ? "ローカル保存とフィルタ/並び替えなど、日常で使える基本機能を実装。"
          : "A practical todo app with local persistence and core features (add/edit/complete, filtering, sorting).",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://todolist-simple-theta.vercel.app/",
    },
  ];

  return (
    <section
      id="portofolio"
      className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {t.heading}
          </h2>
          <p className="text-gray-500 mt-3">{t.sub}</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-7 hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1.5">
                  {t.live}
                  <span aria-hidden>↗</span>
                </a>
              </div>

              <p className="text-sm text-gray-500 mt-1">
                {p.meta} • {p.year}
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {p.tech.map((x) => (
                  <span
                    key={x}
                    className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
