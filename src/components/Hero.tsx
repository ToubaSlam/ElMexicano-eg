export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-mex-red text-mex-cream"
    >
      <div className="absolute inset-0 bg-dots text-mex-cream/10" />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-32 flex flex-col items-center text-center gap-6">
        <p className="uppercase tracking-[0.3em] text-sm font-semibold text-mex-gold">
          Born in Mexico City &nbsp;•&nbsp; Made Fresh in Egypt
        </p>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight max-w-3xl">
          Fresh Mexican, <span className="text-mex-gold">Made Bold.</span>
        </h1>
        <p className="max-w-xl text-lg text-mex-cream/90">
          Burritos, tacos, quesadillas and bowls — built fresh in front of you
          with ingredients that taste like they should.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <a
            href="#order"
            className="bg-mex-gold text-mex-black font-bold px-8 py-3.5 rounded-full hover:brightness-95 transition"
          >
            Order Now
          </a>
          <a
            href="#menu"
            className="border-2 border-mex-cream/70 font-semibold px-8 py-3.5 rounded-full hover:bg-mex-cream hover:text-mex-red transition"
          >
            View Menu
          </a>
        </div>
        <div className="mt-10 flex items-center gap-6 text-5xl select-none" aria-hidden>
          🌮 🌯 🧀 🌽 🍩
        </div>
      </div>
    </section>
  );
}
