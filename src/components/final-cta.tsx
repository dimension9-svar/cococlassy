export function FinalCTA() {
  return (
    <section id="cta" className="py-[90px] md:py-[140px] px-5 md:px-10 text-center relative overflow-hidden">
      {/* Green glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.3] blur-[80px] pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, var(--charge) 0%, transparent 60%)" }}
      />

      <div className="relative z-[2] max-w-[900px] mx-auto">
        <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-cocoa mb-6 inline-flex items-center gap-3">
          <span className="w-[30px] h-px bg-cocoa" />
          You Deserve This
          <span className="w-[30px] h-px bg-cocoa" />
        </div>

        <h2 className="font-serif font-medium text-[clamp(56px,8.5vw,130px)] leading-[0.95] tracking-[-0.04em]">
          Your first class is{" "}
          <span className="font-semibold relative inline-block">
            on us
            <span className="absolute bottom-[0.08em] -left-[0.03em] -right-[0.03em] h-[0.28em] bg-charge -z-[1] -skew-x-[4deg]" />
          </span>
          .
        </h2>

        <p className="text-[17px] text-cocoa max-w-[500px] mx-auto mt-[30px] leading-[1.6]">
          New to CocoClassy? Your first reformer session and a cold-pressed juice, on the house. No catch. No commitment. Just come.
        </p>

        <a
          href="https://wa.me/27000000000?text=Hi%2C%20I%27d%20like%20to%20claim%20my%20free%20first%20class%20at%20CocoClassy"
          className="mt-10 inline-flex items-center gap-2.5 bg-espresso text-cream px-9 py-[18px] rounded-full text-[15px] font-medium tracking-[0.02em] no-underline border-[1.5px] border-espresso transition-all duration-250 hover:bg-charge hover:text-espresso hover:border-charge hover:shadow-[0_0_24px_var(--charge)] hover:-translate-y-0.5 group"
        >
          Claim your free class
          <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
        </a>
      </div>
    </section>
  );
}
