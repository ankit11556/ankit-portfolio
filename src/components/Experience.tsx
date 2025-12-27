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
  projects: Project[];
}

const experiences: ExperienceCompany[] = [
  {
    company: "Centennial Infotech",
    role: "Full Stack Developer Intern (Remote)",
    duration: "Oct 2025 – Present",
    projects: [
      {
        name: "Intern Management System",
        bullets: [
          "Built a production-ready full-stack system using React, Node.js, Express, MongoDB & TypeScript to manage 500+ intern records.",
          "Designed RESTful APIs & MongoDB schemas with validation, error handling, and secure CRUD.",
          "Implemented search, filtering, and pagination for fast and scalable access to intern records.",
        ],
        techIcons: [
          <FaReact className="text-blue-400" />,
          <FaNodeJs className="text-green-400" />,
          <SiExpress className="text-gray-300" />,
          <SiMongodb className="text-emerald-400" />,
          <SiTypescript className="text-blue-500" />,
        ],
      },
      {
        name: "Real Estate Web Application",
        bullets: [
          "Developed responsive mobile-first UI using React.js & Tailwind CSS with reusable components.",
          "Implemented routing, API integration, and state handling for smooth navigation.",
          "Improved performance, accessibility, and cross-device consistency for production-grade UI.",
        ],
        techIcons: [
          <FaReact className="text-blue-400" />,
          <SiTailwindcss className="text-cyan-400" />,
        ],
      },
    ],
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
            {exp.projects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -120 : 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="bg-[#111] p-8 rounded-3xl border border-gray-800 shadow-2xl"
              >
                {/* Project Name */}
                <h4 className="text-2xl font-semibold text-blue-400 mb-4">
                  {proj.name}
                </h4>

                {/* Bullet Points */}
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  {proj.bullets.map((point, idx2) => (
                    <motion.li
                      key={idx2}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: idx2 * 0.2 }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Icons */}
                <div className="flex gap-6 flex-wrap text-5xl">
                  {proj.techIcons.map((icon, idx3) => (
                    <motion.div
                      key={idx3}
                      whileHover={{
                        scale: 1.5,
                        rotate: 12,
                        filter: "drop-shadow(0 0 12px white)",
                      }}
                      className="cursor-pointer transition-all"
                    >
                      {icon}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
