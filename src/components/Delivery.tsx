import { deliveryPlatforms } from "@/data/menu";

export default function Delivery() {
  return (
    <section id="order" className="bg-mex-green text-mex-cream py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <p className="uppercase tracking-[0.3em] text-sm font-semibold text-mex-gold mb-3">
          Order Online
        </p>
        <h2 className="font-display text-4xl font-extrabold mb-4">
          Get 25% off your first order
        </h2>
        <p className="text-mex-cream/80 max-w-xl mx-auto mb-10">
          Order direct for the best deal, or find us on your favourite
          delivery app.
        </p>

        <a
          href="#"
          className="inline-block bg-mex-gold text-mex-black font-bold px-8 py-3.5 rounded-full hover:brightness-95 transition mb-12"
        >
          Order Direct &amp; Save
        </a>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {deliveryPlatforms.map((platform) => (
            <a
              key={platform}
              href="#"
              className="bg-mex-cream/10 border border-mex-cream/30 rounded-full px-6 py-2.5 font-semibold hover:bg-mex-cream/20 transition-colors"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
