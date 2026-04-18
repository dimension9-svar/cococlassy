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
      className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center bg-cream/75 backdrop-blur-[12px] border-b border-line-soft transition-all duration-300"
      style={{ padding: compact ? "14px 40px" : "20px 40px" }}
    >
      {/* Brand lockup */}
      <a href="#" className="inline-flex items-center gap-2.5 no-underline text-inherit">
        <div className="w-[30px] h-[30px] rounded-full border-[1.5px] border-current flex items-center justify-center shrink-0">
          <span className="w-2 h-2 rounded-full bg-charge-deep shadow-[0_0_10px_var(--charge)]" />
        </div>
        <span className="font-serif font-bold text-[24px] tracking-[-0.025em] leading-none">
          Coco<span className="text-charge-deep">Classy</span>
        </span>
      </a>

      {/* Desktop links */}
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
              className="text-espresso no-underline relative pb-[3px] transition-colors hover:text-charge-deep group"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-charge-deep transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#cta"
        className="hidden md:inline-flex bg-espresso text-cream px-[22px] py-[11px] rounded-full text-[13px] font-medium tracking-[0.02em] no-underline border-[1.5px] border-espresso transition-all duration-250 hover:bg-charge hover:text-espresso hover:border-charge hover:shadow-[0_0_20px_var(--charge)]"
      >
        Book a class &rarr;
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cream border-t border-line px-6 pb-6 pt-4 flex flex-col gap-4">
          {["method", "juice", "classes", "locations"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-[11px] tracking-[0.15em] uppercase text-cocoa py-2 border-b border-line-soft no-underline"
            >
              {id === "juice" ? "Juice Bar" : id === "method" ? "The Method" : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMenuOpen(false)}
            className="bg-espresso text-cream font-mono text-[11px] tracking-[0.12em] uppercase px-6 py-3 rounded-full text-center mt-2 no-underline"
          >
            Book a class
          </a>
        </div>
      )}
    </nav>
  );
}
