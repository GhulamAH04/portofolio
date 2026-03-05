"use client";

import {useState} from "react";
import {Lang} from "@/lib/i18n";
import {SiGithub} from "react-icons/si";
import {HiOutlineMail, HiOutlineDownload} from "react-icons/hi";

type Props = {lang: Lang};

export default function ContactPage({lang}: Props) {
  const t = {
    en: {
      title: "Contact",
      subtitle: "Send a message or reach out via email.",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      sent: "Message sent. Thank you!",
      github: "GitHub",
      emailBtn: "Email",
      cv: "CV",
      shokumu: "Work History",
      powered: "Form is powered by Formspree.",
    },
    ja: {
      title: "連絡先",
      subtitle: "フォームまたはメールでご連絡ください。",
      name: "お名前",
      email: "メールアドレス",
      message: "内容",
      send: "送信する",
      sent: "送信しました。ありがとうございます。",
      github: "GitHub",
      emailBtn: "メール",
      cv: "履歴書",
      shokumu: "職務経歴書",
      powered: "フォームは Formspree を利用しています。",
    },
  }[lang];

  const EMAIL = "ghulam.alhafizh@gmail.com";
  const GITHUB = "https://github.com/GhulamAH04";

  const CV_PATH = "/CV_GhulamAlHafizh.pdf";
  const SHOKUMU_PATH = "/shokumukeirekishoGhulam.pdf";

  const FORMSPREE_URL = "https://formspree.io/f/xzdjpyzg";

  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">{t.title}</h2>
          <p className="text-gray-500 mt-3">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Modern compact card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="text-sm text-gray-500">{t.emailBtn}</p>
            <p className="mt-1 font-semibold text-gray-900 break-all">
              {EMAIL}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {/* Compact pill links */}
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-sm transition text-sm text-gray-800"
                aria-label={t.github}
                title={t.github}>
                <SiGithub className="w-5 h-5" />
                <span className="font-medium">{t.github}</span>
                <span className="text-gray-400">↗</span>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-sm transition text-sm text-gray-800"
                aria-label={t.emailBtn}
                title={t.emailBtn}>
                <HiOutlineMail className="w-5 h-5" />
                <span className="font-medium">{t.emailBtn}</span>
              </a>

              <a
                href={CV_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-sm transition text-sm text-gray-800"
                aria-label={t.cv}
                title={t.cv}>
                <HiOutlineDownload className="w-5 h-5" />
                <span className="font-medium">{t.cv}</span>
              </a>

              <a
                href={SHOKUMU_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-sm transition text-sm text-gray-800"
                aria-label={t.shokumu}
                title={t.shokumu}>
                <HiOutlineDownload className="w-5 h-5" />
                <span className="font-medium">{t.shokumu}</span>
              </a>
            </div>

            <div className="mt-6 pt-5 border-t border-gray-100">
              <p className="text-xs text-gray-400">
                {lang === "ja"
                  ? "※ 履歴書・職務経歴書は PDF として公開しています。"
                  : "CV and work history are available as PDF downloads."}
              </p>
            </div>
          </div>

          {/* Right: Form card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            {submitted ? (
              <p className="text-sm text-green-600 font-medium">{t.sent}</p>
            ) : (
              <form
                action={FORMSPREE_URL}
                method="POST"
                className="space-y-4"
                onSubmit={() => setSubmitted(true)}>
                <input
                  type="hidden"
                  name="_subject"
                  value="Portfolio Contact"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    name="name"
                    type="text"
                    placeholder={t.name}
                    className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder={t.email}
                    className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <textarea
                  name="message"
                  placeholder={t.message}
                  rows={7}
                  className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors">
                  {t.send}
                </button>

                {/* ✅ Note under the button */}
                <p className="text-xs text-gray-400 text-center">{t.powered}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
