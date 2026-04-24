"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Milestone {
  role: string;
  company: string;
  location: string;
  startDate: string; // Format: "Mon YYYY" (e.g., "Jan 2017", "Sep 2024") or "YYYY" for year only
  endDate: string;   // Format: "Mon YYYY" (e.g., "Dec 2024", "Present") or "YYYY" for year only
  description: string;
  skills: string[];
}

/**
 * Converts a date string to a comparable number for sorting
 * Supports formats: "Jan 2017", "2017", "Present"
 */
function dateToNumber(dateStr: string): number {
  if (dateStr.toLowerCase() === "present") {
    return 999999; // Present is always last
  }

  // Split by space to separate month and year
  const parts = dateStr.trim().split(/\s+/);
  
  if (parts.length === 2) {
    // Format: "Jan 2017"
    const monthStr = parts[0];
    const year = parseInt(parts[1], 10);
    
    const monthMap: { [key: string]: number } = {
      jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
      jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
    };
    
    const month = monthMap[monthStr.toLowerCase()] || 1;
    return year * 100 + month;
  } else if (parts.length === 1) {
    // Format: "2017" (year only)
    const year = parseInt(parts[0], 10);
    return year * 100 + 1; // Default to January
  }
  
  return 0;
}

/**
 * Sorts milestones by start date in ascending order (oldest to newest)
 * Validates that end date is not before start date
 */
function sortedMilestones(milestones: Milestone[]): Milestone[] {
  const sorted = [...milestones].sort((a, b) => {
    const aStart = dateToNumber(a.startDate);
    const bStart = dateToNumber(b.startDate);
    return aStart - bStart;
  });

  // Validate that end dates are after start dates
  sorted.forEach((milestone, index) => {
    const startNum = dateToNumber(milestone.startDate);
    const endNum = dateToNumber(milestone.endDate);
    
    if (endNum < startNum && milestone.endDate.toLowerCase() !== "present") {
      console.warn(
        `Milestone "${milestone.role}" has an end date (${milestone.endDate}) before its start date (${milestone.startDate}). Please verify.`
      );
    }
  });

  return sorted;
}

const milestones: Milestone[] = [
  {
    role: "Data Science Intern",
    company: "Smith College",
    location: "Northampton, MA",
    startDate: "Sep 2024",
    endDate: "Dec 2024",
    description:
      "Built Python scripts to automate data cleaning and analysis workflows for reporting, improving efficiency and reducing manual processing.",
    skills: ["Python", "Data Analysis", "Automation", "Reporting"],
  },
  {
    role: "Software Engineer",
    company: "Another Company",
    location: "City, State",
    startDate: "Feb 2021",
    endDate: "Dec 2023",
    description:
      "Describe your responsibilities, projects, and accomplishments.",
    skills: ["Python", "Node.js", "Docker"],
  },
  {
    role: "Junior Developer",
    company: "Startup Inc.",
    location: "Another City, State",
    startDate: "Jun 2019",
    endDate: "Jan 2021",
    description:
      "Describe how you got started and what you learned.",
    skills: ["JavaScript", "Git", "SQL"],
  },
];

export default function Experience() {
  const [active, setActive] = useState<number | null>(null);

  const skillStyle = "px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700";
  
  // Always sort milestones chronologically
  const sortedAndValidatedMilestones = sortedMilestones(milestones);

  return (
    <section id="experience" className="py-24 px-8 max-w-5xl mx-auto bg-white">
      {/* Header */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-sm uppercase tracking-widest text-blue-400 mb-2"
      >
        My Journey
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl font-bold text-blue-600 mb-4"
      >
        My Journey
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-blue-500 mb-16 text-base max-w-2xl"
      >
        A timeline of my roles and growth over the years. Hover or tap each milestone to see more
        details about the experience, including descriptions and skills gained.
      </motion.p>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical dotted line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-dotted"
          style={{
            backgroundImage: "repeating-linear-gradient(to bottom, #bfdbfe 0px, #bfdbfe 2px, transparent 2px, transparent 8px)",
          }}
        />

        {/* Milestones */}
        <div className="space-y-12 md:space-y-16">
          {sortedAndValidatedMilestones.map((milestone, index) => {
            const isActive = active === index;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 transform -translate-x-1/2 z-10">
                  <motion.button
                    onClick={() => setActive(isActive ? null : index)}
                    onHoverStart={() => setActive(index)}
                    onHoverEnd={() => setActive(null)}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-blue-200 bg-white flex items-center justify-center cursor-pointer transition-all"
                    animate={{
                      borderColor: isActive ? "#3b82f6" : "#bfdbfe",
                      scale: isActive ? 1.15 : 1,
                    }}
                    whileHover={{
                      borderColor: "#60a5fa",
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-300"
                      animate={{
                        backgroundColor: isActive ? "#3b82f6" : "#93c5fd",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </div>

                {/* Content - alternates left/right on desktop */}
                <div className={`md:w-1/2 ${isEven ? "md:ml-0 md:pr-12" : "md:ml-1/2 md:pl-12"} ml-20 md:ml-0`}>
                  {/* Timeline label */}
                  <div className="mb-4">
                    <p className="text-xs md:text-sm font-semibold text-blue-500 uppercase tracking-wider">
                      {milestone.startDate} — {milestone.endDate}
                    </p>
                  </div>

                  {/* Card - shows on hover/click */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow"
                      >
                        {/* Role and Company */}
                        <h3 className="text-lg md:text-xl font-bold text-blue-700">
                          {milestone.role}
                        </h3>
                        <p className="text-sm text-blue-500 mt-1">
                          {milestone.company} · {milestone.location}
                        </p>

                        {/* Description */}
                        <p className="text-sm text-blue-600 mt-4 leading-relaxed">
                          {milestone.description}
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {milestone.skills.map((skill) => (
                            <span key={skill} className={skillStyle}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Collapsed state - shows when not active */}
                  <AnimatePresence>
                    {!isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-blue-600"
                      >
                        <p className="font-semibold text-blue-700">{milestone.role}</p>
                        <p className="text-blue-500">{milestone.company}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
