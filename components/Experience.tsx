"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const milestones = [
  {
    role: "Senior Software Engineer",
    company: "Company Name",
    date: "2023 — Present",
    description:
      "Describe what you did, the impact you made, and any key metrics.",
    tags: ["React", "TypeScript", "AWS"],
  },
  {
    role: "Software Engineer",
    company: "Another Company",
    date: "2021 — 2023",
    description:
      "Describe your responsibilities, projects, and accomplishments.",
    tags: ["Python", "Node.js", "Docker"],
  },
  {
    role: "Junior Developer",
    company: "Startup Inc.",
    date: "2019 — 2021",
    description:
      "Describe how you got started and what you learned.",
    tags: ["JavaScript", "Git", "SQL"],
  },
];

export default function Experience() {
  const [active, setActive] = useState<number | null>(null);

  const barWidths = ["100%", "75%", "55%"];

  const tagStyle = [
    "px-3 py-1 text-xs rounded-full",
    "bg-stone-100 text-stone-500",
  ].join(" ");

  return (
    <section id="experience" className="py-24 px-8 max-w-4xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-sm uppercase tracking-widest text-stone-400 mb-2"
      >
        Journey
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl font-bold text-stone-900 mb-4"
      >
        My Experience
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-stone-400 mb-12 text-sm"
      >
        Hover or tap each bar to see details about the role.
      </motion.p>

      <div className="space-y-6">
        {milestones.map((m, i) => {
          const isActive = active === i;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Bar row */}
              <div className="flex items-center gap-4">
                <span className="text-xs text-stone-400 w-20 md:w-28 shrink-0 text-right">
                  {m.date.split("—")[0].trim()}
                </span>
                <div className="flex-1">
                  <motion.div
                    className="h-3 rounded-full cursor-pointer"
                    style={{ width: barWidths[i] }}
                    animate={{
                      backgroundColor: isActive ? "#1c1917" : "#e7e5e4",
                    }}
                    whileHover={{ backgroundColor: "#a8a29e" }}
                    transition={{ duration: 0.3 }}
                    onHoverStart={() => setActive(i)}
                    onHoverEnd={() => setActive(null)}
                    onClick={() => setActive(isActive ? null : i)}
                  />
                </div>
                <span className="text-xs text-stone-400 w-16 md:w-20 shrink-0">
                  {m.date.split("—")[1]?.trim() || ""}
                </span>
              </div>

              {/* Detail card */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="ml-0 md:ml-32 overflow-hidden"
                  >
                    <div className="bg-stone-50 rounded-lg p-6 border border-stone-100">
                      <h3 className="text-lg font-semibold text-stone-900">
                        {m.role}
                      </h3>
                      <p className="text-sm text-stone-400 mt-1">
                        {m.company} · {m.date}
                      </p>
                      <p className="text-sm text-stone-500 mt-3 leading-relaxed">
                        {m.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {m.tags.map((tag) => (
                          <span key={tag} className={tagStyle}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
