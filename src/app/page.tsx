"use client";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
