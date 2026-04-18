"use client";

import { useState, useEffect } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md border-b border-line shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Wordmark */}
        <a href="#" className="font-serif font-bold text-[22px] md:text-[26px] tracking-[-0.025em] leading-none">
          Coco<span className="text-charge-deep">Classy</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#method" className="font-mono text-[10px] tracking-[0.15em] uppercase text-cocoa hover:text-espresso transition-colors">
            Method
          </a>
          <a href="#classes" className="font-mono text-[10px] tracking-[0.15em] uppercase text-cocoa hover:text-espresso transition-colors">
            Classes
          </a>
          <a href="#juice" className="font-mono text-[10px] tracking-[0.15em] uppercase text-cocoa hover:text-espresso transition-colors">
            Juice Bar
          </a>
          <a href="#pricing" className="font-mono text-[10px] tracking-[0.15em] uppercase text-cocoa hover:text-espresso transition-colors">
            Pricing
          </a>
        </div>

        {/* Primary CTA — always visible */}
        <a
          href="#pricing"
          className="hidden md:inline-flex items-center gap-2 bg-espresso text-cream font-mono text-[11px] tracking-[0.12em] uppercase px-6 py-3 rounded-full hover:bg-cocoa transition-colors"
        >
          Claim Your Intro
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menu"
        >
          <span className={`block w-5 h-[1.5px] bg-espresso transition-all ${menuOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-espresso transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-espresso transition-all ${menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-line px-6 pb-6 pt-4 flex flex-col gap-4">
          {["method", "classes", "juice", "pricing"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-[11px] tracking-[0.15em] uppercase text-cocoa py-2 border-b border-line-soft"
            >
              {id === "juice" ? "Juice Bar" : id}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="bg-espresso text-cream font-mono text-[11px] tracking-[0.12em] uppercase px-6 py-3 rounded-full text-center mt-2"
          >
            Claim Your Intro
          </a>
        </div>
      )}
    </nav>
  );
}
