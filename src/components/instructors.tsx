export function Instructors() {
  // Research: 88% of studio operators say instructors are "absolutely critical"
  // Lead with personality, not credentials — bio page best practices
  const team = [
    {
      name: "Lerato Moloi",
      role: "Head Instructor",
      studio: "Sandton",
      philosophy: "Your body remembers everything you teach it. I make sure we only teach it good things.",
      speciality: "The Classy Reformer · The Deep Burn",
      years: "8 years",
    },
    {
      name: "Megan van der Berg",
      role: "Lead Instructor",
      studio: "Sea Point",
      philosophy: "Precision is kindness. Every correction I give is because I see what your body can become.",
      speciality: "The Essentials · The Unwind",
      years: "6 years",
    },
    {
      name: "Naledi Khumalo",
      role: "Instructor",
      studio: "Sandton",
      philosophy: "I don't count reps. I count the moment you realise you're stronger than you thought.",
      speciality: "The Deep Burn · The Classy Reformer",
      years: "4 years",
    },
    {
      name: "Sarah Botha",
      role: "Instructor & Juice Lab",
      studio: "Sea Point",
      philosophy: "The forty minutes after class matters as much as the class itself. That's why we press.",
      speciality: "The Essentials · Cold-Press Programme",
      years: "5 years",
    },
  ];

  return (
    <section id="instructors" className="bg-cream">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-charge-deep mb-4 flex items-center gap-3">
          <span className="w-7 h-px bg-charge-deep" />
          The Team
        </div>

        <h2 className="font-serif font-medium text-[clamp(30px,5vw,48px)] leading-[1.02] tracking-[-0.035em] mb-6">
          They know your <em className="not-italic font-semibold text-charge-deep">name</em>.
        </h2>

        <p className="text-cocoa text-[17px] leading-[1.6] max-w-[520px] mb-14">
          By your third class, your instructor knows your name, your weak left hip, and exactly
          how far you can be pushed today. That&apos;s the difference between a class and a studio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {team.map((t) => (
            <div
              key={t.name}
              className="bg-ivory border border-line rounded-xl p-7 md:p-9 hover:border-charge-deep/30 transition-colors"
            >
              {/* Avatar placeholder */}
              <div className="w-14 h-14 rounded-full bg-toffee flex items-center justify-center mb-5">
                <span className="font-serif font-semibold text-[18px] text-espresso">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-serif font-medium text-[20px] tracking-[-0.02em]">
                  {t.name}
                </h3>
              </div>

              <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-muted mb-4 flex items-center gap-2">
                <span>{t.role}</span>
                <span>&middot;</span>
                <span>{t.studio}</span>
                <span>&middot;</span>
                <span>{t.years}</span>
              </div>

              {/* Philosophy — in their own words */}
              <blockquote className="font-serif text-[16px] italic text-cocoa leading-[1.55] mb-4 pl-4 border-l-2 border-charge">
                &ldquo;{t.philosophy}&rdquo;
              </blockquote>

              <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-charge-deep">
                {t.speciality}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
