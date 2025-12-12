"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import useTypewriter from "@/hooks/useTypewriter";

export default function Hero() {
  const typeText = useTypewriter("Full-Stack MERN Developer", 80);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 text-white bg-linear-to-br from-[#050505] via-[#0a0a0a] to-[#101010] overflow-hidden pt-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 h-72 w-72 bg-blue-500/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 h-72 w-72 bg-purple-500/20 blur-[140px] rounded-full"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* LEFT - Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 max-w-xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-pink-500">
            {typeText || ""}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I build modern, scalable, high-performance web applications using
            <span className="text-blue-400"> React.js</span>,
            <span className="text-green-400"> Node.js & Express</span>,
            <span className="text-yellow-400"> MongoDB</span>. I leverage{" "}
            <span className="text-purple-400">Tailwind CSS</span>, integrate
            <span className="text-pink-400"> JWT & OAuth</span>, and implement
            <span className="text-teal-400"> APIs & cloud solutions</span>.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4 flex-wrap">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#projects"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl text-lg font-semibold shadow-lg transition-transform"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="px-6 py-3 border border-gray-500 hover:border-white rounded-xl text-lg font-semibold transition-transform"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT - Image */}
        <Tilt
          glareEnable
          glareMaxOpacity={0.2}
          glareColor="#ffffff"
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          className="relative group w-[300px] md:w-[500px]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 rounded-3xl bg-blue-400/20 blur-[60px] -z-10"
          />
          <Image
            src="/hero-dev.png"
            alt="Developer Illustration"
            width={500}
            height={500}
            className="rounded-3xl drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Tilt>
      </div>
    </section>
  );
}
