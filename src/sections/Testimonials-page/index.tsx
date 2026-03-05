"use client";

import {Lang} from "@/lib/i18n";
import {getTestimonials} from "@/data/testimonials";

type Props = {lang: Lang};

export default function Testimonials({lang}: Props) {
  const t = {
    en: {title: "Testimonials"},
    ja: {title: "推薦コメント"},
  }[lang];

  const testimonials = getTestimonials(lang);

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t.title}</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testi, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex-1 basis-full md:min-w-[calc(50%-32px)] md:basis-[calc(50%-32px)]">
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                “{testi.quote}”
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testi.name}</p>
                <p className="text-gray-500 text-sm">{testi.position}</p>

                {testi.note ? (
                  <p className="text-gray-400 text-xs mt-2">{testi.note}</p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
