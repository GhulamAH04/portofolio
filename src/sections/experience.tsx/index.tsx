"use client";

import {Lang} from "@/lib/i18n";
import {getProjectDetails} from "@/data/experience";

type Props = {lang: Lang};

export default function Experience({lang}: Props) {
  const t = {
    en: {
      title: "Project Details",
      subtitle:
        "A closer look at features, implementation, and what I practiced.",
      features: "Key Features",
      stack: "Tech Stack",
    },
    ja: {
      title: "制作物の詳細",
      subtitle: "機能・実装内容・取り組みを簡潔にまとめています。",
      features: "主な機能",
      stack: "技術スタック",
    },
  }[lang];

  const items = getProjectDetails(lang);

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{t.title}</h2>
          <p className="text-gray-500 mt-3">{t.subtitle}</p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {items.map((p, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-2xl shadow border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {p.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    <span className="text-gray-600">{p.company}</span>
                    <span className="text-blue-600 font-medium">
                      {p.timeline}
                    </span>
                    {p.liveUrl ? (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-600 hover:text-blue-800">
                        {lang === "ja" ? "デモ ↗" : "Live Demo ↗"}
                      </a>
                    ) : null}
                  </div>
                </div>

                {p.badges?.length ? (
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {p.badges.map((b) => (
                      <span
                        key={b}
                        className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-700">
                        {b}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              {p.summary ? (
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {p.summary}
                </p>
              ) : null}

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    {t.features}
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    {p.features.map((x, i) => (
                      <li key={i} className="text-gray-600">
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    {t.stack}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((x) => (
                      <span
                        key={x}
                        className="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm">
                        {x}
                      </span>
                    ))}
                  </div>

                  {p.note ? (
                    <p className="text-xs text-gray-400 mt-3">{p.note}</p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
