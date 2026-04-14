export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 max-w-4xl mx-auto">
      <p className="text-sm uppercase tracking-widest text-stone-400 mb-4">
        Software Engineer
      </p>
      <h1 className="text-6xl font-bold text-stone-900 leading-tight">
        Hi, I'm Mario.
        <br />
        <span className="text-stone-400">I build things for the web.</span>
      </h1>
      <p className="mt-6 text-lg text-stone-500 max-w-xl leading-relaxed">
        Engineer focused on building clean, performant software.
        Currently open to new opportunities and collaborations.
      </p>
    </section>
  );
}