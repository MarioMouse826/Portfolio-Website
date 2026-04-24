"use client";

import { motion } from "motion/react";

export default function Hero() {
  const headingStyle = [
    "text-4xl md:text-6xl font-bold",
    "text-blue-600 leading-tight",
  ].join(" ");

  return (
    <section className="min-h-screen flex flex-col justify-center px-8 pt-20 max-w-4xl mx-auto bg-white">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-sm uppercase tracking-widest text-blue-400 mb-4"
      >
        Software Engineer
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={headingStyle}
      >
        Hi, I'm Mario.
        <br />
        <span className="text-blue-400">I build things for the web.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-6 text-base md:text-lg text-blue-500 max-w-xl leading-relaxed"
      >
        Engineer focused on building clean, performant software.
        Currently open to new opportunities and collaborations.
      </motion.p>
    </section>
  );
}
