"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Tilt from "react-parallax-tilt";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "projects", "skills", "contact"];

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (!el) return;

        const top = el.offsetTop - 120;
        const bottom = el.offsetTop + el.offsetHeight - 120;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(sec);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["about", "projects", "skills", "contact"];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
        ${scrolled
          ? "backdrop-blur-2xl bg-white/5 border-b border-white/10 shadow-lg scale-[1.01]"
          : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={true}>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-extrabold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(100,100,255,0.5)]"
          >
            Ankit
          </motion.span>
        </Tilt>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex gap-10 ">
          {links.map((item) => (
            <li key={item} className="relative group cursor-pointer">
              <Link
                href={`#${item}`}
                className={`text-lg font-medium transition-all ${
                  active === item
                    ? "text-blue-400"
                    : "text-gray-200 hover:text-blue-300"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>

              {/* Animated underline */}
              <motion.span
                layoutId="underline"
                className={`absolute left-0 -bottom-1 h-[0.5] rounded-full bg-linear-to-r 
                  from-blue-500 to-purple-500
                  ${active === item ? "w-full" : "w-0 group-hover:w-full"}
                `}
              />
            </li>
          ))}
        </ul>

        {/* RESUME BUTTON */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/resume.pdf"
          target="_blank"
          className="hidden md:block px-5 py-2 rounded-xl border backdrop-blur-xl 
          border-blue-500/40 text-blue-300 hover:bg-blue-500/10 shadow-[0_0_12px_rgba(50,100,255,0.4)] 
          transition-all"
        >
          Resume
        </motion.a>

        {/* MOBILE ICON */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* MOBILE MENU */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.35 }}
        className={`md:hidden bg-black/70 backdrop-blur-xl shadow-xl 
        flex flex-col gap-5 py-6 text-center ${menuOpen ? "block" : "hidden"}`}
      >
        {links.map((item) => (
          <Link
            key={item}
            href={`#${item}`}
            onClick={() => setMenuOpen(false)}
            className={`text-xl transition-all ${
              active === item ? "text-blue-400 font-semibold" : "text-white"
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}

        <a
          href="/resume.pdf"
          target="_blank"
          className="mx-auto px-6 py-2 rounded-xl border border-blue-400 text-blue-300 hover:bg-blue-500/20"
        >
          Resume
        </a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
