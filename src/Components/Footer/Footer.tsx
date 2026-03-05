"use client";

import {Lang} from "@/lib/i18n";

type Props = {lang: Lang};

export default function Footer({lang}: Props) {
  const year = new Date().getFullYear();

  const t = {
    en: {
      built: "Built with Next.js, TypeScript, and Tailwind CSS.",
      note: "This portfolio highlights personal projects and continuous learning.",
      rights: "All rights reserved.",
      links: "Links",
      github: "GitHub",
      top: "Back to top",
    },
    ja: {
      built: "Next.js / TypeScript / Tailwind CSS で作成しました。",
      note: "本サイトは個人制作と学習の内容をまとめたポートフォリオです。",
      rights: "All rights reserved.",
      links: "リンク",
      github: "GitHub",
      top: "トップへ戻る",
    },
  }[lang];

  const GITHUB = "https://github.com/GhulamAH04";

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-semibold text-gray-900">Ghulam Al Hafizh</p>
            <p className="text-sm text-gray-600 mt-2">{t.built}</p>
            <p className="text-sm text-gray-500 mt-1">{t.note}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition text-sm text-gray-800">
              {t.github} ↗
            </a>

            <a
              href="#hero"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition text-sm">
              {t.top}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-gray-400">
            © {year} Ghulam Al Hafizh. {t.rights}
          </p>
          <p className="text-xs text-gray-400">
            {t.links}:{" "}
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-600">
              {t.github}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
