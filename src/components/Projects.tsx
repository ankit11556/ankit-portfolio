"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaPlay, FaPause, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectType {
  name: string;
  description: string;
  impact: string; // NEW: recruiter-focused impact line
  tech: string[];
  features: string[];
  video: string;
  github: string;
  live?: string;
  featured?: boolean; // NEW
}

const projects: ProjectType[] = [
  {
    name: "SayMyTask — AI Voice Reminder",
    description:
      "AI-based multilingual voice reminder platform with secure auth & automation.",
    impact:
      "Built to help users never miss important tasks using AI-powered voice alerts.",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind", "ElevenLabs TTS"],
    features: [
      "Multilingual AI voice alerts",
      "JWT + Google OAuth authentication",
      "Automated cron-based reminders",
    ],
    video: "/videos/saymytask.mp4",
    github: "https://github.com/ankit11556/SayMyTask",
    live: "https://say-my-task.vercel.app/",
    featured: true,
  },

  {
    name: "Virtual Trading Platform — Real-Time Trading Simulator",
    description:
      "Practice trading across Forex, Stocks, Commodities, and Crypto markets with virtual money in real conditions.",
    impact:
      "Enables users to learn trading strategies and market behavior safely without financial risk.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind",
      "Chart.js",
      "Binance API",
    ],
    features: [
      "User Authentication with JWT",
      "Virtual Wallet with automatic balance updates",
      "Real-time market data & interactive charts",
      "Buy/Sell execution and order tracking",
      "Portfolio & analytics dashboard",
      "Admin panel for monitoring and user management",
    ],
    video: "/videos/virtual-trading.mp4",
    github: "https://github.com/ankit11556/virtual-trading-platform",
    live: "https://virtual-trading-platform-ruby.vercel.app",
    featured: true,
  },

  {
    name: "LostFoundr — Lost & Found Platform",
    description:
      "MERN-based platform to report and find lost items with secure authentication.",
    impact:
      "Designed to simplify reporting and recovering lost items through a single platform.",
    tech: ["React.js", "Node.js", "MongoDB", "Cloudinary", "Tailwind"],
    features: [
      "Lost & Found item posting",
      "Protected routes + email verification",
      "Search and filters",
    ],
    video: "/videos/lostfoundr.mp4",
    github: "https://github.com/ankit11556/Lost-Foundr",
    live: "https://lost-foundr.vercel.app/",
  },
];

// PROJECT CARD
const ProjectCard = ({ project }: { project: ProjectType }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`w-full bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-lg p-8 flex flex-col gap-6 ${
        project.featured ? "ring-2 ring-purple-500" : ""
      }`}
    >
      {/* FEATURED BADGE */}
      {project.featured && (
        <span className="w-fit px-4 py-1 text-sm bg-purple-600/80 rounded-full">
          🚀 Featured Project
        </span>
      )}

      {/* TITLE */}
      <h3 className="text-3xl sm:text-4xl font-extrabold text-cyan-300">
        {project.name}
      </h3>

      {/* IMPACT LINE */}
      <p className="text-purple-300 font-semibold text-lg">{project.impact}</p>

      {/* DESCRIPTION */}
      <p className="text-gray-300 max-w-3xl">{project.description}</p>

      {/* TECH */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs bg-pink-700/60 text-pink-200 rounded-full border border-pink-600"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* FEATURES */}
      <ul className="list-disc ml-5 text-gray-400 space-y-1 max-w-3xl">
        {project.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      {/* VIDEO */}
      <div
        className="relative w-full rounded-xl overflow-hidden cursor-pointer"
        onMouseEnter={() => {
          videoRef.current?.play();
          setIsPlaying(true);
        }}
        onMouseLeave={() => {
          videoRef.current?.pause();
          setIsPlaying(false);
        }}
      >
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          className={`w-full object-cover rounded-xl ${project.featured}`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {isPlaying ? (
            <FaPause className="text-white text-4xl opacity-80" />
          ) : (
            <FaPlay className="text-white text-4xl opacity-80" />
          )}
        </div>
      </div>

      {/* LINKS */}
      <div className="flex gap-4 flex-wrap">
        <a
          href={project.github}
          target="_blank"
          className="flex items-center gap-2 px-6 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          <FaGithub /> GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            className="flex items-center gap-2 px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-500"
          >
            <FaExternalLinkAlt /> Live
          </a>
        )}
      </div>
    </motion.div>
  );
};

// MAIN SECTION
const ProjectsSection = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="min-h-screen w-full px-6 py-20 bg-[#0a0a0a] text-white"
    >
      <h2 className="text-4xl sm:text-6xl font-extrabold text-center mb-20 text-purple-400">
        My Projects
      </h2>

      {/* FEATURED PROJECTS */}
      {featured.map((project, index) => (
        <div key={index} className="max-w-6xl mx-auto mb-28">
          <ProjectCard project={project} />
        </div>
      ))}

      {/* OTHERS */}
      <div className="max-w-5xl mx-auto flex flex-col gap-20">
        {others.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
