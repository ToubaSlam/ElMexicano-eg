"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Order Online", href: "#order" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden sm:flex items-center justify-between bg-mex-black text-mex-cream text-sm px-6 lg:px-12 py-2">
        <div className="flex items-center gap-4">
          <span>📍 Cairo · Giza · New Cairo</span>
          <span className="opacity-40">|</span>
          <a href="tel:16000" className="hover:text-mex-gold transition-colors">
            ☎ 16000
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="hover:text-mex-gold transition-colors">Instagram</a>
          <a href="#" aria-label="Facebook" className="hover:text-mex-gold transition-colors">Facebook</a>
          <a href="#" aria-label="TikTok" className="hover:text-mex-gold transition-colors">TikTok</a>
        </div>
      </div>

      <div className="bg-mex-cream/95 backdrop-blur border-b border-mex-black/10 px-6 lg:px-12">
        <div className="flex items-center justify-between py-4">
          <Link href="#home" className="font-display text-2xl font-extrabold tracking-tight text-mex-red">
            El Mexicano
          </Link>

          <nav className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-mex-red transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#order"
              className="hidden sm:inline-block bg-mex-red hover:bg-mex-red-dark text-mex-cream font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              Order Now
            </a>
            <button
              className="md:hidden p-2 text-mex-black"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav className="md:hidden flex flex-col gap-1 pb-4 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 border-b border-mex-black/5 hover:text-mex-red transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#order"
              onClick={() => setOpen(false)}
              className="mt-3 text-center bg-mex-red text-mex-cream font-semibold px-5 py-2.5 rounded-full"
            >
              Order Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
