import { Lang } from "@/lib/i18n";

export type TestimonialItem = {
  quote: string;
  name: string;
  position: string;
  note?: string;
};

export function getTestimonials(lang: Lang): TestimonialItem[] {
  const data: Record<Lang, TestimonialItem[]> = {
    en: [
      {
        quote:
          "Ghulam communicates clearly, learns quickly, and takes ownership until tasks are completed.",
        name: "Bootcamp Mentor",
        position: "Full-Stack Program (Purwadhika)",
        note: "Reference details available upon request.",
      },
      {
        quote:
          "Strong attention to detail and consistent improvements. Code changes are tidy and easy to review.",
        name: "Peer Reviewer",
        position: "Project Collaboration",
        note: "Reference details available upon request.",
      },
    ],
    ja: [
      {
        quote:
          "報連相が丁寧で、学習スピードが速く、最後まで責任を持ってやり切る方です。",
        name: "ブートキャンプ講師",
        position: "フルスタック講座（Purwadhika）",
        note: "詳細はご要望に応じて共有可能です。",
      },
      {
        quote:
          "細部まで気を配り、改善を積み重ねられます。変更点も整理されていてレビューしやすいです。",
        name: "同僚（共同開発）",
        position: "プロジェクト協力",
        note: "詳細はご要望に応じて共有可能です。",
      },
    ],
  };

  return data[lang];
}