export default function About() {
  return (
    <section id="about" className="py-24 px-8 max-w-4xl mx-auto">
      <p className="text-sm uppercase tracking-widest text-stone-400 mb-2">
        About
      </p>
      <h2 className="text-3xl font-bold text-stone-900 mb-8">
        A little about me
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          I'm a software engineer who enjoys turning complex problems into
          simple, elegant solutions. I care deeply about writing clean code
          and building products that people actually want to use.
        </p>
        <p>
          When I'm not coding, you'll find me [your hobbies here — keep it
          personal, it makes you memorable].
        </p>
      </div>

      {/* Skills */}
      <div className="mt-12 flex flex-wrap gap-2">
        {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS"].map(
          (skill) => (
            <span
              key={skill}
              className="px-4 py-1.5 text-sm border border-stone-200 text-stone-500 rounded-full"
            >
              {skill}
            </span>
          )
        )}
      </div>
    </section>
  );
}