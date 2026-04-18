export function Pricing() {
  // Research: 3-tier architecture with decoy
  // The 8x tier at R2,200 makes unlimited at R2,800 feel like "only R600 more"
  // Charm pricing on lower tiers, round number on premium
  // "Most Popular" badge on target tier
  // Per-class breakdown reframes the monthly cost

  const plans = [
    {
      name: "The Start",
      frequency: "4 classes / month",
      price: "R1,199",
      perClass: "R300 per class",
      features: [
        "4 reformer classes",
        "Book up to 48h in advance",
        "10% juice bar discount",
        "Swap studios freely",
      ],
      cta: "Choose The Start",
      popular: false,
    },
    {
      name: "The Ritual",
      frequency: "8 classes / month",
      price: "R2,199",
      perClass: "R275 per class",
      features: [
        "8 reformer classes",
        "Book up to 7 days in advance",
        "15% juice bar discount",
        "Swap studios freely",
        "1 guest pass per month",
        "Priority waitlist",
      ],
      cta: "Choose The Ritual",
      popular: true,
    },
    {
      name: "The Obsession",
      frequency: "Unlimited",
      price: "R2,800",
      perClass: "From R93 per class",
      features: [
        "Unlimited reformer classes",
        "Book up to 14 days in advance",
        "20% juice bar discount",
        "Swap studios freely",
        "2 guest passes per month",
        "Priority waitlist",
        "Early access to new formats",
      ],
      cta: "Choose The Obsession",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="bg-cream">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-charge-deep mb-4 flex items-center gap-3">
          <span className="w-7 h-px bg-charge-deep" />
          Pricing
        </div>

        <h2 className="font-serif font-medium text-[clamp(30px,5vw,48px)] leading-[1.02] tracking-[-0.035em] mb-6">
          Your body, <em className="not-italic font-semibold text-charge-deep">your terms</em>.
        </h2>

        <p className="text-cocoa text-[17px] leading-[1.6] max-w-[560px] mb-6">
          No lock-in contracts. No joining fees. Month-to-month, cancel anytime.
          Every plan includes access to all class types across all studios.
        </p>

        {/* Intro offer — paid 14-day trial, research: 30%+ conversion */}
        <div className="bg-espresso text-cream rounded-xl p-6 md:p-8 mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-charge mb-2 block">
              New to CocoClassy?
            </span>
            <h3 className="font-serif font-medium text-[24px] tracking-[-0.025em] leading-[1.15] mb-2">
              14 days unlimited. R499.
            </h3>
            <p className="text-cream/70 text-[14px] leading-[1.5] max-w-[400px]">
              Try every class, meet every instructor, find your ritual.
              Includes a complimentary welcome session and your first juice on us.
            </p>
          </div>
          <a
            href="https://wa.me/27000000000?text=Hi%2C%20I%27d%20like%20to%20claim%20the%20CocoClassy%20intro%20week%20%28R499%29"
            className="shrink-0 bg-charge text-espresso font-mono text-[11px] tracking-[0.12em] uppercase px-7 py-3.5 rounded-full hover:bg-charge-soft transition-colors font-medium"
          >
            Claim Your Intro
          </a>
        </div>

        {/* 3-tier pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-7 md:p-8 flex flex-col relative ${
                plan.popular
                  ? "bg-espresso text-cream border-2 border-charge"
                  : "bg-ivory border border-line"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.15em] uppercase bg-charge text-espresso px-4 py-1 rounded-full font-medium">
                  Most Popular
                </span>
              )}

              <span className={`font-mono text-[9px] tracking-[0.15em] uppercase mb-2 ${
                plan.popular ? "text-charge" : "text-charge-deep"
              }`}>
                {plan.frequency}
              </span>

              <h3 className="font-serif font-medium text-[22px] tracking-[-0.025em] mb-1">
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif font-semibold text-[36px] tracking-[-0.03em] leading-none">
                  {plan.price}
                </span>
                <span className={`font-mono text-[10px] tracking-[0.08em] uppercase ${
                  plan.popular ? "text-cream/60" : "text-muted"
                }`}>
                  / month
                </span>
              </div>

              <span className={`font-mono text-[10px] tracking-[0.08em] uppercase mb-6 ${
                plan.popular ? "text-cream/50" : "text-muted"
              }`}>
                {plan.perClass}
              </span>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px]">
                    <svg className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? "text-charge" : "text-charge-deep"}`} fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8l3.5 3.5L13 5" />
                    </svg>
                    <span className={plan.popular ? "text-cream/85" : "text-cocoa"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/27000000000"
                className={`block text-center font-mono text-[11px] tracking-[0.12em] uppercase px-6 py-3.5 rounded-full transition-colors font-medium ${
                  plan.popular
                    ? "bg-charge text-espresso hover:bg-charge-soft"
                    : "bg-espresso text-cream hover:bg-cocoa"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted mt-8 text-center">
          All prices in ZAR &middot; Month-to-month &middot; Cancel anytime &middot; No joining fee
        </p>
      </div>
    </section>
  );
}
