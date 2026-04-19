"use client";

import { useState, useEffect } from "react";

export function Nav() {
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center bg-bg/80 backdrop-blur-[12px] border-b border-line transition-all duration-300"
      style={{ padding: compact ? "14px 40px" : "20px 40px" }}
    >
      <a href="#" className="no-underline text-cream">
        <span className="font-serif font-bold text-[24px] tracking-[-0.025em] leading-none">
          Coco<span className="text-charge">Classy</span>
        </span>
      </a>

      <ul className="hidden md:flex gap-[34px] list-none text-[13px] font-medium tracking-[0.02em]">
        {[
          { href: "#method", label: "The Method" },
          { href: "#juice", label: "Juice Bar" },
          { href: "#classes", label: "Classes" },
          { href: "#locations", label: "Locations" },
        ].map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-cream-muted no-underline relative pb-[3px] transition-colors hover:text-cream group"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-charge transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#cta"
        className="hidden md:inline-flex bg-charge text-espresso px-[22px] py-[11px] rounded-full text-[13px] font-medium tracking-[0.02em] no-underline border-[1.5px] border-charge transition-all duration-250 hover:shadow-[0_0_24px_var(--charge)] hover:-translate-y-0.5"
      >
        Book a class &rarr;
      </a>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        aria-label="Menu"
      >
        <span className={`block w-5 h-[1.5px] bg-cream transition-all ${menuOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
        <span className={`block w-5 h-[1.5px] bg-cream transition-all ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-[1.5px] bg-cream transition-all ${menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
      </button>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-t border-line px-6 pb-6 pt-4 flex flex-col gap-4">
          {["method", "juice", "classes", "locations"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-[11px] tracking-[0.15em] uppercase text-cream-muted py-2 border-b border-line no-underline"
            >
              {id === "juice" ? "Juice Bar" : id === "method" ? "The Method" : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMenuOpen(false)}
            className="bg-charge text-espresso font-mono text-[11px] tracking-[0.12em] uppercase px-6 py-3 rounded-full text-center mt-2 no-underline"
          >
            Book a class
          </a>
        </div>
      )}
    </nav>
  );
}
