const locations = [
  { name: "New Cairo", address: "90th Street, New Cairo" },
  { name: "Zamalek", address: "26th of July St, Zamalek" },
  { name: "6th of October", address: "Hyper One Mall, 6th of October" },
];

export default function Locations() {
  return (
    <section id="locations" className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
      <div className="text-center mb-12">
        <p className="uppercase tracking-[0.3em] text-sm font-semibold text-mex-red mb-3">
          Find Us
        </p>
        <h2 className="font-display text-4xl font-extrabold">
          Restaurants near you
        </h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {locations.map((loc) => (
          <div
            key={loc.name}
            className="rounded-2xl bg-mex-cream border border-mex-black/10 p-6 flex items-start gap-4"
          >
            <span className="text-2xl" aria-hidden>📍</span>
            <div>
              <h3 className="font-display font-bold mb-1">{loc.name}</h3>
              <p className="text-sm text-mex-black/70">{loc.address}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
