const jobs = [
  {
    date: "2023 — Present",
    role: "Senior Software Engineer",
    company: "Company Name",
    description:
      "Describe what you did, the impact you made, and any key metrics.",
  },
  {
    date: "2021 — 2023",
    role: "Software Engineer",
    company: "Another Company",
    description:
      "Describe your responsibilities, projects, and accomplishments.",
  },
  {
    date: "2019 — 2021",
    role: "Junior Developer",
    company: "Startup Inc.",
    description:
      "Describe how you got started and what you learned.",
  },
];

export default function Experience() {
  const dotStyle = [
    "absolute left-0 top-2 w-3 h-3 rounded-full",
    "border-2 border-stone-300 bg-white",
  ].join(" ");

  return (
    <section id="experience" className="py-24 px-8 max-w-4xl mx-auto">
      <p className="text-sm uppercase tracking-widest text-stone-400 mb-2">
        Career
      </p>
      <h2 className="text-3xl font-bold text-stone-900 mb-12">
        Experience
      </h2>
      <div className="space-y-12 relative">
        <div className="absolute left-[5px] top-3 bottom-3 w-px bg-stone-200" />
        {jobs.map((job, i) => (
          <div key={i} className="relative pl-10">
            <div className={dotStyle} />
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">
              {job.date}
            </p>
            <h3 className="text-lg font-semibold text-stone-900">
              {job.role}
            </h3>
            <p className="text-sm text-stone-400 mb-2">
              {job.company}
            </p>
            <p className="text-stone-500 leading-relaxed">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
