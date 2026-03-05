export type Lang = "en" | "ja";

export const LANG_KEY = "portfolio_lang_v1";

export function getInitialLang(): Lang {
  if (typeof window === "undefined") return "ja";
  const saved = window.localStorage.getItem(LANG_KEY);
  return saved === "en" || saved === "ja" ? saved : "ja";
}

export function setLangStorage(lang: Lang) {
  window.localStorage.setItem(LANG_KEY, lang);
  window.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
}

export const navDict = {
  en: {
    home: "Home",
    about: "About",
    portfolio: "Portfolio",
    experience: "Experience",
    testimonials: "Testimonials",
    contact: "Contact",
    langLabel: "JP / EN",
  },
  ja: {
    home: "ホーム",
    about: "自己紹介",
    portfolio: "制作物",
    experience: "経歴",
    testimonials: "推薦コメント",
    contact: "連絡先",
    langLabel: "JP / EN",
  },
} as const;