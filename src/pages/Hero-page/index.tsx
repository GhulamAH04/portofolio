"use client";

import { motion } from "framer-motion";

const links = [{ name: "Portofolio", href: "#portofolio" }];
const nameVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function Hero() {
  const name = "Ghulam Al Hafizh".split("");
  return (
    <section
      id="hero"
      className="pt-20 md:pt-24 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="md:w-1/2 lg:w-2/5">
          <img
            src="/hero-image.png"
            alt="Profile"
            className="rounded-lg shadow-lg object-cover w-full max-w-[400px] mx-auto"
          />
        </div>

        <div className="md:w-1/2 lg:w-3/5 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            {name.map((letter, index) => (
              <motion.span
                key={index}
                variants={nameVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Full-Stack Web Developer
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
            Hello! I'm Ghulam, a junior full-stack developer graduated by
            Purwadhika School. I have experience working with technologies such
            as JavaScript, React, Next.js, Tailwind CSS, and Node.js. <br />
            <br />
            In my journey to becoming a developer, I have completed several
            personal projects, including a responsive portfolio website and a
            simple web application that helps users track their daily tasks.
            These projects have not only honed my technical skills but also
            taught me the importance of user experience and accessibility in web
            design.
            <br /> <br />I am eager to learn and grow in a collaborative
            environment where I can contribute my skills and passion for web
            development. I am excited to take on new challenges and bring
            innovative ideas to life. Feel free to explore my portfolio and
            reach out if you’d like to connect!
          </p>
          <a
            href="#portofolio"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
