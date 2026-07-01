"use client";

import { motion } from "framer-motion";
import useTypewriter from "@/hooks/useTypewriter";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
} from "react-icons/si";
import { JSX } from "react/jsx-runtime";

interface Project {
  name: string;
  bullets: string[];
  techIcons: JSX.Element[];
}

interface ExperienceCompany {
  company: string;
  role: string;
  duration: string;
  bullets: string[];
  //techIcons: JSX.Element[];
}

const experiences: ExperienceCompany[] = [
  {
    company: "Voyagex AI",
    role: "Software Engineer Intern",
    duration: "Feb 2026 – Present",
    bullets: [
      "Implemented multilingual support using language-based translation files and dynamic content translation for localized user experiences.",
      "Improved navigation through routing and deep linking (URL query parameters), enabling direct access to filtered views.",
      "Optimized UI performance by reducing unnecessary re-renders, improving responsiveness by 25%.",
      "Integrated REST APIs for real-time data synchronization, reducing stale UI states and improving data consistency.",
    ],
    // techIcons: [
    //   <FaReact className="text-blue-400" />,
    //   <SiTypescript className="text-blue-500" />,
    //   <SiTailwindcss className="text-cyan-400" />,
    //   <SiMongodb className="text-green-500" />,
    // ],
  },

  {
    company: "Centennial Infotech",
    role: "Full Stack Developer Intern",
    duration: "Oct 2025 – Jan 2026",
    bullets: [
      "Engineered a production-ready full-stack system handling 1000+ records with optimized data ingestion and querying.",
      "Designed and implemented scalable RESTful APIs with secure CRUD operations, validation, and error handling.",
      "Built responsive, mobile-first interfaces with optimized routing, state management, and seamless API integration.",
      "Enhanced application performance using search, filtering, and pagination for efficient large dataset access.",
    ],
    // techIcons: [
    //   <FaReact className="text-blue-400" />,
    //   <FaNodeJs className="text-green-500" />,
    //   <SiExpress className="text-gray-300" />,
    //   <SiMongodb className="text-green-400" />,
    //   <SiTypescript className="text-blue-500" />,
    // ],
  },
];

export default function Experience() {
  const heading = useTypewriter("Experience", 70);

  return (
    <section
      id="experience"
      className="w-full px-6 py-24 bg-black text-white flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold text-center bg-purple-400 bg-clip-text text-transparent mb-16"
      >
        {heading}
      </motion.h2>

      {/* Experience Companies */}
      <div className="w-full max-w-6xl flex flex-col gap-16">
        {experiences.map((exp, i) => (
          <div key={i} className="flex flex-col gap-8">
            {/* Company + Role + Duration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-cyan-300">{exp.role}</h3>
              <p className="text-gray-300 text-lg mt-1">
                {exp.company} | {exp.duration}
              </p>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#111] p-8 rounded-3xl border border-gray-800 shadow-2xl"
            >
              <ul className="list-disc list-inside text-gray-300 space-y-3">
                {exp.bullets.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>

              {/* <div className="flex gap-6 mt-8 text-5xl flex-wrap">
                {exp.techIcons.map((icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.3,
                      rotate: 8,
                      filter: "drop-shadow(0 0 10px white)",
                    }}
                  >
                    {icon}
                  </motion.div>
                ))}
              </div> */}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
