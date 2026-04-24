"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function CV() {
  const [expanded, setExpanded] = useState<"resume" | "cv" | null>(null);

  const buttonStyle = [
    "px-6 py-3 text-sm font-semibold rounded-lg",
    "transition-all duration-300 border-2",
    "hover:shadow-lg active:scale-95",
  ].join(" ");

  const resumeButtonStyle = `${buttonStyle} ${
    expanded === "resume"
      ? "border-blue-600 bg-blue-50 text-blue-700"
      : "border-blue-200 bg-white text-blue-600 hover:border-blue-400"
  }`;

  const cvButtonStyle = `${buttonStyle} ${
    expanded === "cv"
      ? "border-blue-600 bg-blue-50 text-blue-700"
      : "border-blue-200 bg-white text-blue-600 hover:border-blue-400"
  }`;

  const toggleResume = () => {
    setExpanded(expanded === "resume" ? null : "resume");
  };

  const toggleCV = () => {
    setExpanded(expanded === "cv" ? null : "cv");
  };

  return (
    <section id="cv" className="py-24 px-8 max-w-7xl mx-auto bg-white">
      {/* Header */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-sm uppercase tracking-widest text-blue-400 mb-2"
      >
        Documents
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl font-bold text-blue-600 mb-4"
      >
        Resume & CV
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-blue-500 mb-12 text-base max-w-2xl"
      >
        Download or view my professional documents. Click to expand and see my resume or full CV.
      </motion.p>

      {/* Button Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex gap-4 mb-8 flex-wrap"
      >
        <button
          onClick={toggleResume}
          className={resumeButtonStyle}
          aria-expanded={expanded === "resume"}
          aria-label="Toggle Resume"
        >
          {expanded === "resume" ? "Hide Resume" : "View Resume"}
        </button>
        <button
          onClick={toggleCV}
          className={cvButtonStyle}
          aria-expanded={expanded === "cv"}
          aria-label="Toggle CV"
        >
          {expanded === "cv" ? "Hide CV" : "View CV"}
        </button>
      </motion.div>

      {/* Resume Container */}
      <AnimatePresence>
        {expanded === "resume" && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: "auto", marginBottom: 24 }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="border-2 border-blue-200 rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-white shadow-lg"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-blue-700">Resume</h3>
                <span className="text-sm text-blue-500 font-semibold">One Page</span>
              </div>

              {/* PDF Viewer or Placeholder */}
              <div className="bg-white border border-blue-100 rounded-lg p-8 min-h-96 flex flex-col items-center justify-center">
                <p className="text-blue-600 mb-4 font-semibold">📄 Resume Preview</p>
                <p className="text-blue-500 text-sm mb-6 text-center max-w-md">
                  Add your resume PDF here. You can embed it using an iframe or PDF viewer library.
                </p>

                {/* Placeholder for PDF - Replace with actual PDF viewer */}
                <div className="w-full h-96 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg border border-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-blue-600 font-semibold mb-2">PDF Viewer Coming Soon</p>
                    <p className="text-blue-500 text-xs">
                      Point to: /public/resume.pdf
                    </p>
                  </div>
                </div>

                {/* Download Button */}
                <a
                  href="/resume.pdf"
                  download
                  className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm"
                >
                  ⬇ Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CV Container */}
      <AnimatePresence>
        {expanded === "cv" && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: "auto", marginBottom: 24 }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="border-2 border-blue-200 rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-white shadow-lg"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-blue-700">Curriculum Vitae</h3>
                <span className="text-sm text-blue-500 font-semibold">Full Document</span>
              </div>

              {/* PDF Viewer or Placeholder */}
              <div className="bg-white border border-blue-100 rounded-lg p-8 min-h-96 flex flex-col items-center justify-center">
                <p className="text-blue-600 mb-4 font-semibold">📋 CV Preview</p>
                <p className="text-blue-500 text-sm mb-6 text-center max-w-md">
                  Add your full CV PDF here. You can embed it using an iframe or PDF viewer library.
                </p>

                {/* Placeholder for PDF - Replace with actual PDF viewer */}
                <div className="w-full h-96 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg border border-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-blue-600 font-semibold mb-2">PDF Viewer Coming Soon</p>
                    <p className="text-blue-500 text-xs">
                      Point to: /public/cv.pdf
                    </p>
                  </div>
                </div>

                {/* Download Button */}
                <a
                  href="/cv.pdf"
                  download
                  className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm"
                >
                  ⬇ Download CV
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
