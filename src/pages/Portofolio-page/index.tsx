// export default function PortofolioPage() {
//   return (
//     <section id="portofolio" className="py-20 bg-white">
//       <div className="container mx-auto px-4 md:px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
//           Development Experience
//         </h2>

//         <div className="relative max-w-3xl mx-auto">
//           {/* Timeline line */}
//           <div className="absolute left-1/2 w-1 h-full bg-gray-200 transform -translate-x-1/2"></div>

//           {/* Experience Item 1 - Personal Website */}
//           <div className="mb-12 flex items-center justify-between md:justify-start">
//             <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
//               <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
//                 <h3 className="text-xl font-bold mb-2 text-gray-800">
//                   Personal Portfolio Development
//                 </h3>
//                 <p className="text-gray-600 mb-2">Freelance Project</p>
//                 <p className="text-sm text-gray-500 mb-4">Jan 2023 - Present</p>
//                 <p className="text-gray-600 mb-4">
//                   Designed and developed modern personal portfolio website with:
//                 </p>
//                 <ul className="list-disc pl-6 space-y-2">
//                   <li className="text-gray-600">
//                     Responsive layout using Tailwind CSS
//                   </li>
//                   <li className="text-gray-600">
//                     SSR optimization with Next.js
//                   </li>
//                   <li className="text-gray-600">
//                     Type-safe components with TypeScript
//                   </li>
//                   <li className="text-gray-600">
//                     Interactive animations and transitions
//                   </li>
//                 </ul>
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {[
//                     "Next.js",
//                     "TypeScript",
//                     "Tailwind CSS",
//                     "Framer Motion",
//                   ].map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Timeline dot */}
//             <div className="hidden md:block w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 -ml-2"></div>
//           </div>

//           {/* Experience Item 2 - Client Project */}
//           <div className="mb-12 flex items-center justify-between md:justify-end">
//             <div className="md:w-1/2 md:pl-8">
//               <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
//                 <h3 className="text-xl font-bold mb-2 text-gray-800">
//                   Client Portfolio Websites
//                 </h3>
//                 <p className="text-gray-600 mb-2">Web Development Agency</p>
//                 <p className="text-sm text-gray-500 mb-4">
//                   Mar 2022 - Dec 2022
//                 </p>
//                 <p className="text-gray-600 mb-4">
//                   Developed 15+ custom portfolio websites for clients featuring:
//                 </p>
//                 <ul className="list-disc pl-6 space-y-2">
//                   <li className="text-gray-600">Custom theme development</li>
//                   <li className="text-gray-600">CMS integration (Sanity.io)</li>
//                   <li className="text-gray-600">Performance optimization</li>
//                   <li className="text-gray-600">SEO best practices</li>
//                 </ul>
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {["React", "Next.js", "Tailwind", "GraphQL"].map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function PortofolioPage() {
  return (
    <section
      id="portofolio"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          My Personal Website Journey
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-xl bg-gradient-to-r from-purple-100 to-blue-50 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Modern Portfolio Development
                  </h3>
                  <p className="text-purple-600 font-medium mb-4">
                    Self-Driven Project • 2024
                  </p>

                  <div className="prose prose-purple">
                    <p className="text-gray-600 mb-4">
                      Crafted a performant and modern web presence using
                      cutting-edge technologies:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <svg
                          className="w-5 h-5 text-purple-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                        <span>Next.js 14 (App Router)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg
                          className="w-5 h-5 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                        <span>TypeScript 5.0</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg
                          className="w-5 h-5 text-cyan-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                        <span>Tailwind CSS 3.3</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg
                          className="w-5 h-5 text-pink-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                        <span>Vercel Deployment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
