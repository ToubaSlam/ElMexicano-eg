export default function Footer() {
  return (
    <footer id="contact" className="bg-mex-black text-mex-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-display text-2xl font-extrabold text-mex-gold mb-3">
            El Mexicano
          </div>
          <p className="text-sm text-mex-cream/70 leading-relaxed">
            Fresh Cali-Mex flavour, handcrafted daily. Born in Mexico City spirit,
            made fresh in Egypt.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-mex-gold">Opening Hours</h4>
          <ul className="text-sm text-mex-cream/70 space-y-1">
            <li>Sat – Wed: 11:00 – 23:00</li>
            <li>Thu – Fri: 11:00 – 01:00</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-mex-gold">Contact</h4>
          <ul className="text-sm text-mex-cream/70 space-y-1">
            <li>Hotline: 16000</li>
            <li>Email: info@elmexicano.eg</li>
            <li>90th Street, New Cairo, Egypt</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-mex-gold">Quick Links</h4>
          <ul className="text-sm text-mex-cream/70 space-y-1">
            <li><a href="#menu" className="hover:text-mex-gold transition-colors">Menu</a></li>
            <li><a href="#order" className="hover:text-mex-gold transition-colors">Order Online</a></li>
            <li><a href="#" className="hover:text-mex-gold transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-mex-gold transition-colors">FAQ</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-mex-cream/10 py-5 text-center text-xs text-mex-cream/50">
        © {new Date().getFullYear()} El Mexicano. All rights reserved.
      </div>
    </footer>
  );
}
