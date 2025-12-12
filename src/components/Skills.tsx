"use client";

import { motion, Variants } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaCuttlefish } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiJest,
  SiJsonwebtokens,
  SiChartdotjs,
  SiNodedotjs,
  SiVercel,
  SiFirebase,
  SiVite,
  SiNpm,
  SiRender,
  SiRedis
} from "react-icons/si";
import { JSX } from "react/jsx-runtime";

//  Skill Type 
interface SkillItem {
  name: string;
  icon: JSX.Element;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

//  Skill Data 
const categories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript (ES6+)", icon: <SiJavascript color="#F7E025" /> },
      { name: "TypeScript", icon: <SiTypescript color="#007ACC" /> },
      { name: "C", icon: <FaCuttlefish color="#A8B9CC" /> },
      { name: "C++", icon: <FaCuttlefish color="#00599C" /> },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <FaReact color="#61DBFB" /> },
      { name: "Next.js", icon: <SiNextdotjs color="white" /> },
      { name: "HTML5", icon: <FaHtml5 color="#E44D26" /> },
      { name: "CSS3", icon: <FaCss3Alt color="#264DE4" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
      { name: "Redux Toolkit", icon: <SiRedux color="#764ABC" /> },
      { name: "Hooks / Context API / Router", icon: <FaReact color="#61DBFB" /> },
      { name: "Bootstrap", icon: <FaCss3Alt color="#563D7C" /> },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs color="#68A063" /> },
      { name: "Express.js", icon: <SiExpress color="white" /> },
      { name: "REST APIs", icon: <SiNodedotjs color="#3C873A" /> },
      { name: "JWT / OAuth / Cookies", icon: <SiJsonwebtokens color="#D63AFF" /> },
      { name: "Multer / Nodemailer", icon: <FaNodeJs color="#68A063" /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
      { name: "Mongoose", icon: <SiMongodb color="#4DB33D" /> },
      { name: "MySQL", icon: <SiMysql color="#00758F" /> },
      { name: "Redis", icon: <SiRedis color="#DC382D" /> },
    ],
  },
  {
    title: "AI Integration",
    skills: [
      { name: "Translation API (MyMemory) / Voice TTS (ElevenLabs)", icon: <SiFirebase color="#FFCB2B" /> },
    ],
  },
  {
    title: "Tools & Testing",
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt color="#F34F29" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
      { name: "Jest / Supertest", icon: <SiJest color="#99425B" /> },
      { name: "Chart.js", icon: <SiChartdotjs color="#FF6384" /> },
      { name: "Morgan", icon: <SiNodedotjs color="#3C873A" /> },
      { name: "Vite", icon: <SiVite color="#41D1FF" /> },
      { name: "npm", icon: <SiNpm color="#DC382D" /> },
      { name: "Cloudinary", icon: <SiFirebase color="#00ADEF" /> },
    ],
  },
  {
    title: "Deployment",
    skills: [
      { name: "Vercel", icon: <SiVercel color="white" /> },
      { name: "Render", icon: <SiRender color="white" /> },
    ],
  },
];

//  Animation Variants 
const containerVariant: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } }, // slower stagger
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 50 }, // slower slide
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 120, damping: 14, duration: 0.8 } 
  },
};

//  Skills Component 
export default function Skills() {
  return (
    <section id="skills" className="min-h-screen w-full px-6 py-24 bg-black text-white">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="text-6xl font-extrabold text-center mb-24  text-purple-400"
      >
        My Skills
      </motion.h2>

      <div className="space-y-24 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Category Title */}
            <motion.h3
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="text-4xl font-bold text-cyan-300 tracking-wide" // new category title color
            >
              {cat.title}
            </motion.h3>

            {/* Skill Cards */}
            <div className="flex flex-wrap gap-6">
              {cat.skills.map((skill, i) => (
                <motion.div key={i} variants={itemVariant}>
                  <Tilt
                    glareEnable
                    glareMaxOpacity={0.35}
                    tiltMaxAngleX={20}
                    tiltMaxAngleY={20}
                    scale={1.1}
                    className="px-6 py-5 min-w-[180px] rounded-2xl bg-white/10 border border-white/10 shadow-lg backdrop-blur-xl hover:shadow-[0_0_35px_rgba(255,0,255,0.35)] transition-all cursor-pointer flex items-center gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.35, rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.6 }}
                      className="text-4xl"
                    >
                      {skill.icon}
                    </motion.div>

                    <p className="text-xl font-medium">{skill.name}</p>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
