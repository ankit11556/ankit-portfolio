"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

// ---------------------
// Smooth Typewriter
// ---------------------
function useScrollTypewriter(text: string, active: boolean, speed = 60) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!active) return;
    let i = 0;
    setOutput("");

    const type = () => {
      setOutput(text.slice(0, i));
      i++;
      if (i <= text.length) setTimeout(type, speed + Math.random() * 30);
    };

    const timeout = setTimeout(type, 200);
    return () => clearTimeout(timeout);
  }, [text, active, speed]);

  return output;
}

// ---------------------
// Stats Type
// ---------------------
interface StatProps {
  num: number;
  label: string;
  delay: number;
}

export default function About() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);

  const titleInView = useInView(titleRef, { once: true });
  const introInView = useInView(introRef, { once: true });

  const title = useScrollTypewriter("About Me", titleInView, 90);

  const intro = useScrollTypewriter(
    "Hi, I'm Ankit — a passionate MERN Stack Developer who builds modern UI, optimized backend systems, and high-performance web apps.",
    introInView,
    35
  );

  const strengths = [
    {
      title: "Quick Learner",
      desc: "I pick up new technologies fast and adapt instantly.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Problem Solver",
      desc: "I focus on clean logic and efficient solutions.",
      color: "from-green-500 to-emerald-400",
    },
    {
      title: "Clean UI/UX",
      desc: "I create modern, beautiful and minimal interfaces.",
      color: "from-pink-500 to-rose-400",
    },
    {
      title: "Consistency",
      desc: "I learn every day with discipline and passion.",
      color: "from-yellow-500 to-orange-400",
    },
  ];

  const stats = [
    { num: 500, label: "GitHub Contributions" },
    { num: 15, label: "Projects Completed" },
    { num: 3, label: "Major Full-Stack Projects" },
  ];

  return (
    <section className="min-h-screen w-full px-6 py-24 bg-[#050505] text-white flex flex-col items-center">
      
      {/* Heading */}
      <motion.h2
        ref={titleRef}
        initial={{ opacity: 0, y: 80 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold text-center tracking-wide mb-10
         bg-purple-400 bg-clip-text text-transparent animate-linear"
      >
        {title}
      </motion.h2>

      {/* Intro */}
      <motion.p
        ref={introRef}
        initial={{ opacity: 0, y: 60 }}
        animate={introInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-4xl text-center text-2xl text-gray-300 leading-relaxed mb-20"
      >
        {intro}
      </motion.p>

      {/* Strength Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl w-full">
        {strengths.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group p-8 rounded-2xl shadow-xl bg-white/5 backdrop-blur-xl border border-white/10
            hover:-translate-y-3 transition-all duration-300 relative"
          >
            {/* 3D Shine */}
            <div className="absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-20 transition-all duration-700
            pointer-events-none" />

            {/* Title */}
            <h3
              className={`text-3xl font-bold bg-linear-to-r ${item.color} text-transparent bg-clip-text mb-4`}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-lg">{item.desc}</p>

            {/* 3D Tilt */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br opacity-0 group-hover:opacity-10 group-hover:blur-xl transition-all"></div>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-center gap-12 mt-20">
        {stats.map((stat, i) => (
          <StatCard key={i} num={stat.num} label={stat.label} delay={i * 0.3} />
        ))}
      </div>
    </section>
  );
}

// ---------------------
// STAT CARD
// ---------------------
function StatCard({ num, label, delay }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, num, {
        duration: 2,
        delay,
        ease: "easeOut",
        onUpdate: (v) => setCurrent(Math.round(v)),
      });
      return () => controls.stop();
    }
  }, [inView, num, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, delay }}
      className="px-12 py-6 rounded-2xl bg-[#111] border border-[#222] shadow-lg 
      hover:shadow-blue-500/30 hover:-translate-y-2 transition-all text-center"
    >
      <h3 className="text-6xl font-bold bg-linear-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
        {current}+
      </h3>
      <p className="text-gray-400 mt-2 text-xl">{label}</p>
    </motion.div>
  );
}
