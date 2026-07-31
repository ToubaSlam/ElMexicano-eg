export default function Story() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1">
        <p className="uppercase tracking-[0.3em] text-sm font-semibold text-mex-red mb-3">
          Our Story
        </p>
        <h2 className="font-display text-4xl font-extrabold mb-5">
          A little bit of Mexico, made for Egypt.
        </h2>
        <p className="text-mex-black/70 leading-relaxed mb-4">
          El Mexicano started with a simple idea: bring the bold, fresh
          flavours of Cali-Mex street food to everyday life in Egypt. No
          shortcuts, no freezers — just hand-rolled burritos, grilled meats
          and salsas made in-house, every single day.
        </p>
        <p className="text-mex-black/70 leading-relaxed">
          Every bowl, taco and quesadilla is built to order, exactly the way
          you want it — because fresh should always be fast.
        </p>
      </div>
      <div className="order-1 lg:order-2">
        <div className="aspect-square rounded-3xl bg-gradient-to-br from-mex-gold via-mex-red to-mex-red-dark flex items-center justify-center text-8xl shadow-xl">
          🌯
        </div>
      </div>
    </section>
  );
}
