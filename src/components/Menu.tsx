import { menuItems } from "@/data/menu";

export default function Menu() {
  return (
    <section id="menu" className="bg-mex-black text-mex-cream py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-sm font-semibold text-mex-gold mb-3">
            The Menu
          </p>
          <h2 className="font-display text-4xl font-extrabold">
            Build it your way
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="bg-mex-cream/5 border border-mex-cream/10 rounded-2xl p-6 hover:bg-mex-cream/10 transition-colors"
            >
              <div className="text-4xl mb-4" aria-hidden>
                {item.emoji}
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-sm text-mex-cream/70 mb-4 leading-relaxed">
                {item.description}
              </p>
              <span className="text-mex-gold font-semibold text-sm">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
