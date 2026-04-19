export function Locations() {
  const studios = [
    { city: "Sandton", num: "01" },
    { city: "Rosebank", num: "02" },
    { city: "Umhlanga", num: "03" },
    { city: "Sea Point", num: "04" },
    { city: "Stellenbosch", num: "05" },
    { city: "Menlyn", num: "06" },
  ];

  return (
    <section id="locations" className="bg-surface border-t border-b border-line py-[70px] md:py-[100px] px-5 md:px-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-[60px] items-center">
        <div>
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-cream-faint flex items-center gap-3 mb-6">
            <span className="w-7 h-px bg-cream-faint" />
            04 &middot; Find Your Studio
          </div>

          <h2 className="font-serif font-medium text-[clamp(40px,5.3vw,64px)] leading-[1.02] tracking-[-0.035em] text-cream">
            Coming soon to a city{" "}
            <span className="text-charge font-semibold">near you</span>.
          </h2>

          <p className="text-cream-muted text-[16px] leading-[1.6] mt-[22px] max-w-[460px]">
            We&apos;re building CocoClassy studios across South Africa. Franchise enquiries welcome.
          </p>

          <a
            href="#cta"
            className="mt-7 inline-flex items-center gap-2.5 bg-charge text-espresso px-[30px] py-4 rounded-full text-[14px] font-medium tracking-[0.02em] no-underline border-[1.5px] border-charge transition-all duration-250 hover:shadow-[0_0_24px_var(--charge)] hover:-translate-y-0.5 group"
          >
            Enquire about franchising
            <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
          {studios.map((s) => (
            <div
              key={s.num}
              className="bg-surface-raised border border-line rounded-xl px-5 py-[22px] transition-all duration-250 hover:border-charge/40 hover:-translate-y-[3px] cursor-pointer"
            >
              <div className="font-serif text-[22px] font-medium tracking-[-0.03em] flex justify-between items-baseline text-cream">
                {s.city}
                <span className="font-mono text-[11px] text-cream-faint font-normal tracking-[0.1em]">{s.num}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
