import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-gray-600">{exp.company}</span>
                <span className="text-blue-500">{exp.timeline}</span>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="text-gray-600">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
