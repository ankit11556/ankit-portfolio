"use client";
import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-8  bg-black text-white relative overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold text-center mb-8 tracking-wide bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-pink-500 drop-shadow-lg"
      >
        Contact Me
      </motion.h2>

      <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center gap-8 p-6"
        >
          <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>

          <a
            href="mailto:youremail@example.com"
            className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition transform hover:scale-105"
          >
            <FaEnvelope className="text-blue-400 text-2xl" />
            <span className="text-lg">ankitsaharan803@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/ankit-saharan-766a132ab"
            target="_blank"
            className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition transform hover:scale-105"
          >
            <FaLinkedin className="text-blue-500 text-2xl" />
            <span className="text-lg">LinkedIn</span>
          </a>

          <a
            href="https://github.com/ankit11556"
            target="_blank"
            className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition transform hover:scale-105"
          >
            <FaGithub className="text-gray-400 text-2xl" />
            <span className="text-lg">GitHub</span>
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg p-8 rounded-3xl flex flex-col gap-5 hover:shadow-blue-500/30 transition-all duration-300"
        >
          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-green-400 text-center font-medium animate-pulse"
            >
              ✔ Thank you! Your message has been sent.
            </motion.p>
          )}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-md hover:shadow-blue-500/20"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-md hover:shadow-blue-500/20"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white h-36 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-md hover:shadow-blue-500/20"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-white shadow-lg hover:shadow-blue-500/40 transition transform hover:scale-105"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
