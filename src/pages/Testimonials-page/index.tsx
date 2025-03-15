import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testi, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg flex-1 basis-full md:min-w-[calc(50%-32px)] md:basis-[calc(50%-32px)]"
            >
              <p className="text-gray-600 mb-4 italic">"{testi.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testi.name}</p>
                <p className="text-gray-500 text-sm">{testi.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
