const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const navStyle = [
    "fixed top-0 left-0 w-full z-50",
    "backdrop-blur-md bg-white/80",
    "border-b border-stone-100",
  ].join(" ");

  const linkStyle = [
    "text-xs uppercase tracking-widest text-stone-400",
    "hover:text-stone-900 transition-colors",
  ].join(" ");

  return (
    <nav className={navStyle}>
      <div className="max-w-4xl mx-auto px-8 py-4 flex justify-between items-center">
        <a href="#" className="font-bold text-stone-900 text-lg">
          Mario.
        </a>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={linkStyle}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}