export function Hero() {
  return (
    <section className="min-h-screen px-5 md:px-10 pt-[110px] md:pt-[140px] pb-[60px] md:pb-[80px] relative grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-[60px] items-center overflow-hidden max-w-[1400px] mx-auto">
      {/* Green glow */}
      <div
        className="absolute top-[30%] -right-[10%] w-[550px] h-[550px] opacity-[0.35] blur-[60px] z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--charge) 0%, transparent 65%)",
          animation: "pulse 8s ease-in-out infinite",
        }}
      />

      {/* Copy */}
      <div className="relative z-[2]">
        {/* Eyebrow */}
        <div className="reveal inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-cocoa px-[14px] py-[7px] border border-line rounded-full bg-ivory mb-7">
          <span className="w-[7px] h-[7px] rounded-full bg-charge-deep shadow-[0_0_8px_var(--charge-deep)]" style={{ animation: "blink 2s infinite" }} />
          Women&apos;s Pilates Lab &amp; Juice Bar
        </div>

        <h1 className="reveal font-serif font-medium text-[clamp(54px,7.6vw,110px)] leading-[0.98] tracking-[-0.035em] text-espresso">
          Pilates with a<br />
          <span className="font-semibold relative inline-block">
            pulse.
            <span className="absolute bottom-[0.1em] -left-[0.02em] -right-[0.02em] h-[0.28em] bg-charge -z-[1] -skew-x-[4deg]" />
          </span>{" "}
          Juice<br />
          with a{" "}
          <span className="font-semibold relative inline-block">
            purpose.
            <span className="absolute bottom-[0.1em] -left-[0.02em] -right-[0.02em] h-[0.28em] bg-charge -z-[1] -skew-x-[4deg]" />
          </span>
        </h1>

        <p className="reveal text-[17px] leading-[1.55] text-cocoa max-w-[440px] mt-7">
          CocoClassy is a women&apos;s Pilates lab and cold-pressed juice bar &mdash; engineered for the woman who wants her workout softer on the joints and sharper on results. Walk in foggy. Walk out electric.
        </p>

        <div className="reveal mt-[38px] flex gap-[14px] items-center flex-wrap">
          <a
            href="#cta"
            className="bg-espresso text-cream px-[30px] py-4 rounded-full text-[14px] font-medium tracking-[0.02em] no-underline inline-flex items-center gap-2.5 border-[1.5px] border-espresso transition-all duration-250 hover:bg-charge hover:text-espresso hover:border-charge hover:shadow-[0_0_24px_var(--charge)] hover:-translate-y-0.5 group"
          >
            Claim your first class
            <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </a>
          <a href="#method" className="text-espresso text-[14px] font-medium no-underline border-b-[1.5px] border-espresso pb-0.5 transition-colors hover:text-charge-deep hover:border-charge-deep">
            See the method
          </a>
        </div>
      </div>

      {/* Visual cards */}
      <div className="relative z-[2] h-[440px] md:h-[620px] hidden md:block">
        {/* Card 1 - large */}
        <div className="absolute w-[62%] h-[72%] top-0 right-0 rounded-2xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(26,15,8,0.25)] transition-transform duration-500 hover:-translate-y-1.5 hover:scale-[1.015]"
          style={{ background: "linear-gradient(135deg, rgba(26,15,8,0.1), rgba(26,15,8,0.35)), url('https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800') center/cover" }}
        >
          <span className="absolute top-[14px] left-[14px] bg-ivory px-[11px] py-[6px] rounded-full font-mono text-[10px] tracking-[0.1em] uppercase text-espresso font-medium">
            The Lab
          </span>
        </div>

        {/* Card 3 - green accent */}
        <div className="absolute w-[32%] h-[32%] top-[38%] left-[48%] rounded-2xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(26,15,8,0.25)] bg-charge border border-charge-deep flex items-center justify-center p-[18px] text-center transition-transform duration-500 hover:-translate-y-1.5 hover:scale-[1.015]">
          <div>
            <div className="font-serif text-[20px] font-medium leading-[1.1] tracking-[-0.015em] text-espresso">Today&apos;s press</div>
            <div className="font-serif text-[28px] font-semibold leading-none tracking-[-0.03em] text-espresso my-1.5">Green Glow</div>
            <div className="font-mono text-[10px] tracking-[0.1em] text-espresso">KALE &middot; CUCUMBER &middot; LIME &middot; MINT</div>
          </div>
        </div>

        {/* Card 2 - bottom */}
        <div className="absolute w-[54%] h-[58%] bottom-0 left-0 rounded-2xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(26,15,8,0.25)] transition-transform duration-500 hover:-translate-y-1.5 hover:scale-[1.015]"
          style={{ background: "linear-gradient(180deg, transparent 40%, rgba(26,15,8,0.4)), url('https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=700') center/cover" }}
        >
          <span className="absolute top-[14px] left-[14px] bg-ivory px-[11px] py-[6px] rounded-full font-mono text-[10px] tracking-[0.1em] uppercase text-espresso font-medium">
            Cold-pressed &middot; Daily
          </span>
        </div>
      </div>
    </section>
  );
}
