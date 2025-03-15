"use client";

import React from "react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaGraduationCap, FaLanguage, FaCode } from "react-icons/fa";

export default function AboutMeSection() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-gray-500 text-lg">
            A little bit about my journey.
          </p>
        </div>

        {/* Main Content - Flex Column */}
        <div className="flex flex-col gap-12">
          {/* Bio Section */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Ghulam Al Hafizh
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I am a graduate of Japanese Literature from a university in
                Jakarta, where I developed a deep appreciation for language,
                culture, and communication. During my studies, I had the
                incredible opportunity to immerse myself in the Japanese
                language and culture by studying in Japan, which not only
                enhanced my linguistic skills but also broadened my perspective
                on global collaboration and problem-solving.
                <br /> <br /> Currently, I am transitioning into the world of
                technology as I pursue my passion for web development at
                Purwadhika School. As a lifelong learner, I am constantly
                exploring new tools and technologies to improve my craft. My
                goal is to become a skilled web developer who can contribute to
                meaningful projects while bridging the gap between technology
                and human-centered design.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="flex flex-col gap-8">
            <h3 className="text-xl font-semibold text-gray-700">Education</h3>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Education Card 1 */}
              <div className="flex-1 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-50 rounded-full">
                    <FaGraduationCap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Bachelor's Degree in Japanese Literature
                    </h4>
                    <p className="text-gray-600">Darma Persada University</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      2013 - 2017
                    </span>
                  </div>
                </div>
              </div>

              {/* Education Card 2 */}
              <div className="flex-1 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                    <FaLanguage className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Yono Japanese Language School
                    </h4>
                    <p className="text-gray-600">Saitama, Japan</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      2018 - 2019
                    </span>
                  </div>
                </div>
              </div>

              {/* Education Card 3 */}
              <div className="flex-1 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 rounded-full">
                    <FaCode className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Web Development Bootcamp
                    </h4>
                    <p className="text-gray-600">Purwadhika Digital School</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      2025
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="flex flex-col gap-8">
            <h3 className="text-xl font-semibold text-gray-700">Core Skills</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex-1 basis-24">
                <SiJavascript className="w-8 h-8 text-yellow-400 mb-2" />
                <span className="text-sm text-gray-600">JavaScript</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex-1 basis-24">
                <SiReact className="w-8 h-8 text-blue-500 mb-2" />
                <span className="text-sm text-gray-600">React</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex-1 basis-24">
                <SiNodedotjs className="w-8 h-8 text-green-600 mb-2" />
                <span className="text-sm text-gray-600">Node.js</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex-1 basis-24">
                <SiTailwindcss className="w-8 h-8 text-blue-400 mb-2" />
                <span className="text-sm text-gray-600">Tailwind</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex-1 basis-24">
                <SiTypescript className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm text-gray-600">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
