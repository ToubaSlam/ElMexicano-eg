export default function Bundle() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
      <div className="rounded-3xl bg-mex-gold/20 border border-mex-gold/40 grid lg:grid-cols-2 overflow-hidden">
        <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
          <p className="uppercase tracking-[0.3em] text-sm font-semibold text-mex-red mb-3">
            Best Value
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold mb-4">
            Your Go-To Burrito Bundle
          </h2>
          <p className="text-mex-black/70 leading-relaxed mb-6">
            Any burrito or bowl, chips &amp; salsa, plus a fountain drink —
            the combo that never lets you down.
          </p>
          <a
            href="#order"
            className="self-start bg-mex-red text-mex-cream font-semibold px-7 py-3 rounded-full hover:bg-mex-red-dark transition-colors"
          >
            Order the Bundle
          </a>
        </div>
        <div className="flex items-center justify-center gap-4 text-5xl sm:text-7xl p-6 sm:p-10 bg-mex-gold/30" aria-hidden>
          <span>🌯</span>
          <span className="text-4xl">+</span>
          <span>🌽</span>
          <span className="text-4xl">+</span>
          <span>🥤</span>
        </div>
      </div>
    </section>
  );
}
