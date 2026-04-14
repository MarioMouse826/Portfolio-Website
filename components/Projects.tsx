"use client";

import { motion } from "motion/react";

const projects = [
  {
    title: "Project Name",
    description:
      "A short description of what this project does and why it matters.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Another Project",
    description:
      "Describe the problem you solved and the impact it had.",
    tags: ["Python", "AWS", "Docker"],
    link: "#",
  },
  {
    title: "Side Project",
    description:
      "Something you built for fun or curiosity — shows personality.",
    tags: ["TypeScript", "GraphQL"],
    link: "#",
  },
];

export default function Projects() {
  const cardStyle = [
    "block group border border-stone-200 rounded-lg p-8",
    "transition-all duration-300",
    "hover:border-stone-400 hover:shadow-lg",
  ].join(" ");

  const titleStyle = [
    "text-xl font-semibold text-stone-900",
    "group-hover:text-stone-600 transition-colors",
  ].join(" ");

  const tagStyle = [
    "px-3 py-1 text-xs border border-stone-200",
    "text-stone-400 rounded-full",
  ].join(" ");

  const arrowStyle = [
    "text-stone-300 group-hover:text-stone-500",
    "text-xl transition-colors shrink-0",
  ].join(" ");

  return (
    <section id="projects" className="py-24 px-8 max-w-4xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-sm uppercase tracking-widest text-stone-400 mb-2"
      >
        Work
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl font-bold text-stone-900 mb-12"
      >
        Featured Projects
      </motion.h2>
      <div className="space-y-8">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            className={cardStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className={titleStyle}>{project.title}</h3>
                <p className="mt-2 text-stone-500 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className={tagStyle}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className={arrowStyle}>↗</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

