const links = [
  { label: "Email", href: "mailto:you@email.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Contact() {
  const pillStyle = [
    "px-5 py-2.5 border border-stone-200 text-sm text-stone-600",
    "rounded-full transition-all duration-300",
    "hover:border-stone-400 hover:text-stone-900",
  ].join(" ");

  return (
    <section id="contact" className="py-24 px-8 max-w-4xl mx-auto text-center">
      <p className="text-sm uppercase tracking-widest text-stone-400 mb-2">
        Contact
      </p>
      <h2 className="text-3xl font-bold text-stone-900 mb-4">
        Let's work together
      </h2>
      <p className="text-stone-500 max-w-md mx-auto mb-10 leading-relaxed">
        I'm always open to new opportunities and interesting
        conversations. Feel free to reach out.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={pillStyle}
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </section>
  );
}
