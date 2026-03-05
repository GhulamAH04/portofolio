import { Lang } from "@/lib/i18n";

export type SkillItem = {
  label: string;
};

export function getSkills(lang: Lang): { title: string; items: SkillItem[] } {
  const items: SkillItem[] = [
    { label: "React" },
    { label: "Next.js" },
    { label: "Node.js" },
    { label: "Express" },
    { label: "GitHub" },
    { label: "Supabase" },
    { label: "Prisma" },
    { label: "PostgreSQL" },
    { label: "Vercel" },
  ];

  const title =
    lang === "ja" ? "主要スキル（Tech Stack）" : "Core Skills (Tech Stack)";

  return { title, items };
}