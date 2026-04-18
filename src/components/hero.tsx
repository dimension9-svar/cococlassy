export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center bg-cream overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-28 pb-20 md:pt-36 md:pb-28 w-full">
        {/* Section label */}
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-charge-deep mb-8 flex items-center gap-3">
          <span className="w-7 h-px bg-charge-deep" />
          Women&apos;s Pilates Lab &amp; Juice Bar
        </div>

        {/* Identity-based headline — not benefit-based */}
        <h1 className="font-serif font-medium text-[clamp(40px,8vw,82px)] leading-[0.96] tracking-[-0.04em] max-w-[800px] mb-8">
          Walk in foggy.{" "}
          <br className="hidden md:block" />
          Walk out{" "}
          <em className="not-italic font-semibold text-charge-deep">electric</em>.
        </h1>

        {/* Subtext — specific, not generic */}
        <p className="text-cocoa text-[17px] md:text-[19px] leading-[1.6] max-w-[520px] mb-10">
          Reformer Pilates in classes of twelve. Cold-pressed juice made this morning.
          A studio built for women who take their bodies seriously — and enjoy every minute of it.
        </p>

        {/* Single CTA — 266% improvement over multiple (research) */}
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center gap-3 bg-espresso text-cream font-mono text-[12px] tracking-[0.12em] uppercase px-8 py-4 rounded-full hover:bg-cocoa transition-colors group"
          >
            Claim Your Intro Week
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted mt-2 sm:mt-3">
            R499 &middot; 14 days unlimited &middot; No commitment
          </span>
        </div>

      </div>
    </section>
  );
}
