import { offers } from "@/data/menu";

export default function Offers() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
      <div className="text-center mb-12">
        <p className="uppercase tracking-[0.3em] text-sm font-semibold text-mex-red mb-3">
          What&apos;s On
        </p>
        <h2 className="font-display text-4xl font-extrabold">
          Limited time only
        </h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.title}
            className="rounded-2xl border border-mex-black/10 p-6 text-center hover:shadow-lg transition-shadow"
          >
            <div className="text-5xl mb-4" aria-hidden>
              {offer.emoji}
            </div>
            <h3 className="font-display text-lg font-bold mb-2">{offer.title}</h3>
            <p className="text-sm text-mex-black/70 leading-relaxed">
              {offer.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
