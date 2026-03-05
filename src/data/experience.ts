import { Lang } from "@/lib/i18n";

export type ProjectDetailItem = {
  title: string;
  company: string;
  timeline: string;
  summary?: string;
  liveUrl?: string;
  badges?: string[];
  features: string[];
  stack: string[];
  note?: string;
};

export function getProjectDetails(lang: Lang): ProjectDetailItem[] {
  const data: Record<Lang, ProjectDetailItem[]> = {
    en: [
      {
        title: "Portfolio Website",
        company: "Personal Project",
        timeline: "2025",
        liveUrl: "https://portofolioghulam.vercel.app/",
        badges: ["Bilingual (EN/JP)", "Responsive UI"],
        summary:
          "A clean portfolio site designed for clarity and readability, with structured sections and bilingual content for a Japan-focused job search.",
        features: [
          "Section-based layout: Hero, About, Projects, Project Details, Testimonials, Contact",
          "Language toggle (EN/JP) with persistent preference",
          "Reusable components and maintainable structure",
          "Deployed to Vercel via GitHub workflow",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
        note: "Focus: clean UI, clear messaging, and maintainable structure.",
      },
      {
        title: "Simple Todo List",
        company: "Personal Project",
        timeline: "2026",
        liveUrl: "https://todolist-simple-theta.vercel.app/",
        badges: ["Local Persistence", "Usability"],
        summary:
          "A practical todo app built to practice core UI behaviors and usability—simple, fast, and focused on everyday features.",
        features: [
          "Core todo flows: add, edit, complete, delete",
          "Filtering and sorting for better usability",
          "Local data persistence for a simple experience (no backend)",
          "Clean UI with clear states (empty, active, completed)",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
        note:
          "Next step: backend + database integration once the API layer is ready.",
      },
    ],
    ja: [
      {
        title: "ポートフォリオサイト",
        company: "個人プロジェクト",
        timeline: "2025年",
        liveUrl: "https://portofolioghulam.vercel.app/",
        badges: ["EN/JP対応", "レスポンシブ"],
        summary:
          "見やすさと可読性を重視したポートフォリオサイト。日本での応募を意識し、二言語表示に対応しています。",
        features: [
          "セクション構成：Hero / 自己紹介 / 制作物 / 制作物の詳細 / 推薦コメント / 連絡先",
          "EN/JP の切り替え（選択状態を保持）",
          "再利用可能なコンポーネント設計で保守性を向上",
          "GitHub → Vercel の運用でデプロイ",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
        note: "方針：読みやすい UI と、伝わる文章・構成を重視。",
      },
      {
        title: "シンプルTodoリスト",
        company: "個人プロジェクト",
        timeline: "2026年",
        liveUrl: "https://todolist-simple-theta.vercel.app/",
        badges: ["ローカル保存", "使いやすさ重視"],
        summary:
          "基本的な UI 挙動と使いやすさを意識して作成した Todo アプリ。シンプルで軽快に動作します。",
        features: [
          "追加・編集・完了・削除など基本機能を実装",
          "フィルタ・並び替えで日常的な使い勝手を改善",
          "バックエンドなしでローカルに保存し、シンプルな体験を実現",
          "空状態/完了状態などの表示を整理",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
        note: "次のステップ：API 層を整備し、DB 連携へ拡張予定。",
      },
    ],
  };

  return data[lang];
}