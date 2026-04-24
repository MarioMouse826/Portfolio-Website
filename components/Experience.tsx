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
    <section id="experience" className="py-24 px-8 max-w-7xl mx-auto bg-white">
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

      {/* Bounded Dashboard Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="border-2 border-blue-200 rounded-2xl p-12 bg-gradient-to-br from-blue-50 to-white"
      >
        {/* Timeline with SVG lines connecting dots */}
        <div className="relative">
          {/* SVG for connecting lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
          >
            {sortedAndValidatedMilestones.length > 1 && (
              <defs>
                <pattern
                  id="dashline"
                  x="0"
                  y="0"
                  width="8"
                  height="8"
                  patternUnits="userSpaceOnUse"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="4"
                    y2="0"
                    stroke="#bfdbfe"
                    strokeWidth="2"
                  />
                </pattern>
              </defs>
            )}
            {/* Horizontal connecting line */}
            {sortedAndValidatedMilestones.length > 1 && (
              <line
                x1="50"
                y1="30"
                x2="calc(100% - 50px)"
                y2="30"
                stroke="url(#dashline)"
                strokeWidth="2"
              />
            )}
          </svg>

          {/* Timeline dots and cards */}
          <div className="relative pt-16 pb-12">
            <div className="flex justify-between gap-6 min-h-96">
              {sortedAndValidatedMilestones.map((milestone, index) => {
                const isActive = active === index;
                const totalMilestones = sortedAndValidatedMilestones.length;
                const dotPosition = totalMilestones > 1 
                  ? (index / (totalMilestones - 1)) * 100 
                  : 50;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center flex-shrink-0 flex-1"
                  >
                    {/* Timeline dot */}
                    <motion.button
                      onClick={() => setActive(isActive ? null : index)}
                      onHoverStart={() => setActive(index)}
                      onHoverEnd={() => setActive(null)}
                      className="w-12 h-12 rounded-full border-4 border-blue-200 bg-white flex items-center justify-center cursor-pointer transition-all relative z-10 shadow-md"
                      animate={{
                        borderColor: isActive ? "#3b82f6" : "#bfdbfe",
                        scale: isActive ? 1.3 : 1,
                        boxShadow: isActive 
                          ? "0 0 20px rgba(59, 130, 246, 0.5)" 
                          : "0 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                      whileHover={{
                        borderColor: "#60a5fa",
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="w-3 h-3 rounded-full"
                        animate={{
                          backgroundColor: isActive ? "#3b82f6" : "#93c5fd",
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>

                    {/* Date label below dot */}
                    <div className="mt-4 text-center min-h-10">
                      <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        {milestone.startDate}
                      </p>
                      <p className="text-xs text-blue-400 mt-0.5">
                        to {milestone.endDate}
                      </p>
                    </div>

                    {/* Expandable card below date */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.85, y: -15 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.85, y: -15 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="mt-6 bg-white rounded-xl p-5 shadow-xl border-2 border-blue-100 hover:shadow-2xl transition-shadow w-full"
                        >
                          {/* Role and Company */}
                          <h3 className="text-base font-bold text-blue-700 line-clamp-2">
                            {milestone.role}
                          </h3>
                          <p className="text-xs text-blue-600 mt-1 font-semibold">
                            {milestone.company}
                          </p>
                          <p className="text-xs text-blue-500 mt-1">
                            📍 {milestone.location}
                          </p>

                          {/* Description */}
                          <p className="text-xs text-blue-600 mt-3 leading-relaxed line-clamp-4">
                            {milestone.description}
                          </p>

                          {/* Skills */}
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {milestone.skills.slice(0, 4).map((skill) => (
                              <span key={skill} className={skillStyle}>
                                {skill}
                              </span>
                            ))}
                            {milestone.skills.length > 4 && (
                              <span className="px-2 py-1 text-xs text-blue-500 font-medium">
                                +{milestone.skills.length - 4}
                              </span>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Collapsed state - shows when not active */}
                    <AnimatePresence>
                      {!isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 text-center text-xs"
                        >
                          <p className="font-semibold text-blue-700 line-clamp-2">{milestone.role}</p>
                          <p className="text-blue-500 text-xs mt-0.5 line-clamp-1">{milestone.company}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
