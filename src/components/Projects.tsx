"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaPlay, FaPause, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Variants } from "framer-motion";


interface ProjectType {
  name: string;
  description: string;
  tech: string[];
  features: string[];
  video: string;
  github: string;
  live?: string;
}

const projects: ProjectType[] = [
  {
    name: "SayMyTask — AI Voice Reminder",
    description:
      "AI-based multilingual voice reminder platform with JWT, Google OAuth, cron automation & voice notifications.",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind", "ElevenLabs TTS"],
    features: [
      "Multilingual AI voice alerts",
      "Secure JWT + Google OAuth",
      "Automated cron reminders",
    ],
    video: "/videos/saymytask.mp4",
    github: "https://github.com/ankit11556/SayMyTask",
    live: "https://say-my-task.vercel.app/",
  },
  {
    name: "LostFoundr — Lost & Found Platform",
    description:
      "MERN-based platform to report & find lost items with Cloudinary images & secure auth.",
    tech: ["React.js", "Node.js", "MongoDB", "Cloudinary", "Tailwind"],
    features: [
      "Lost/Found posting",
      "Protected routes + email verification",
      "Smart search & filters",
    ],
    video: "/videos/lostfoundr.mp4",
    github: "https://github.com/ankit11556/Lost-Foundr",
    live: "https://lost-foundr.vercel.app/",
  },
];

// ANIMATED TEXT COMPONENT
const AnimatedText = ({
  text,
  inView,
  colorClass = "text-white",
  delay = 0,
}: {
  text: string;
  inView: boolean;
  colorClass?: string;
  delay?: number;
}) => {
  return (
    <span className={`inline-block ${colorClass}`}>
      {Array.from(text).map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: delay + i * 0.03, type: "spring", stiffness: 500 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

// PROJECT CARD COMPONENT
const ProjectCard = ({ project }: { project: ProjectType }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-100px" });

  const handleVideoEnter = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };
  const handleVideoLeave = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
  };

  const techVariants: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.05 + 0.3, type: "spring", stiffness: 300 },
    }),
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center text-center w-full bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-lg hover:shadow-purple-500/40 transition-all"
    >
      {/* PROJECT NAME */}
      <h3 className="text-6xl sm:text-5xl font-extrabold text-center  text-purple-400   tracking-wide drop-shadow-lg mb-12"
      >
        <AnimatedText text={project.name} inView={inView} colorClass="text-cyan-300" delay={0.1} />
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-300 mb-4 text-lg sm:text-xl leading-relaxed font-medium">
        <AnimatedText text={project.description} inView={inView} colorClass="text-gray-300" delay={0.3} />
      </p>

      {/* TECH TAGS */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {project.tech.map((tech, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={techVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            className="px-3 py-1 bg-pink-700 text-pink-200 rounded-full text-xs font-semibold border border-pink-600 shadow-md cursor-pointer transition-all"
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {/* FEATURES */}
      <ul className="text-gray-400 text-sm mb-4 space-y-1 list-disc ml-4 text-left w-full max-w-xl">
        {project.features.map((f, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.05 + 0.4 }}
            className="hover:text-indigo-400 transition-all cursor-default"
          >
            {f}
          </motion.li>
        ))}
      </ul>

      {/* VIDEO */}
      <div
        className="relative mb-4 w-full rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
        onMouseEnter={handleVideoEnter}
        onMouseLeave={handleVideoLeave}
      >
        <motion.video
          ref={videoRef}
          src={project.video}
          loop
          muted
          className="w-full h-120 sm:h-full object-cover rounded-xl transition-all"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {isPlaying ? (
            <FaPause className="text-white text-4xl opacity-80 animate-pulse" />
          ) : (
            <FaPlay className="text-white text-4xl opacity-80 animate-pulse" />
          )}
        </div>
        <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-40 transition-all"></div>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-4 justify-center flex-wrap mt-2">
        <a
          href={project.github}
          target="_blank"
          className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition shadow-md"
        >
          <FaGithub /> <span>GitHub</span>
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            className="flex items-center gap-2 px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 transition shadow-md"
          >
            <FaExternalLinkAlt /> <span>Live</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

// MAIN PROJECTS COMPONENT
const ProjectsSection = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="min-h-screen w-full px-6 py-20 bg-[#0a0a0a] text-white flex flex-col items-center"
    >
      {/* HEADING */}
      <h2
        ref={headingRef}
        className="text-4xl sm:text-6xl font-extrabold text-center mb-16"
      >
        <AnimatedText text="My Projects" inView={headingInView} colorClass="text-purple-400" />
      </h2>

      {/* PROJECT LIST */}
      <div className="flex flex-col gap-20 w-full max-w-5xl">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
