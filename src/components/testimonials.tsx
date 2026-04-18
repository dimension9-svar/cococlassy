export function Testimonials() {
  // Research: video testimonials = 80% conversion lift
  // Phone-quality is fine — over-production reduces authenticity
  // Include name, age, how long they've been a member

  const testimonials = [
    {
      quote: "I've done Barre. I've done CrossFit. I've done the sunrise yoga thing. This is the first place I actually look forward to going. My body has never been this strong and I've never been this calm.",
      name: "Thandi M.",
      detail: "Member for 11 months · Sandton",
      metric: "3x per week",
    },
    {
      quote: "I walked in expecting a cute workout. I walked out barely able to hold my steering wheel. In the best way. The juice after was the smartest thing — I would have driven to McDonald's otherwise.",
      name: "Nicole K.",
      detail: "Member for 5 months · Sea Point",
      metric: "2x per week",
    },
    {
      quote: "My instructor knows my name, knows my dodgy shoulder, and pushes me exactly to the point where I want to quit but don't. That's worth every cent.",
      name: "Ayanda S.",
      detail: "Member for 8 months · Sandton",
      metric: "4x per week",
    },
    {
      quote: "I brought my mother. She's 54. She did The Essentials and cried after because she said it was the first time in years she felt like someone saw her body and didn't judge it. We both signed up.",
      name: "Jade vR.",
      detail: "Member for 3 months · Sea Point",
      metric: "2x per week",
    },
  ];

  return (
    <section className="bg-shell">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-charge-deep mb-4 flex items-center gap-3">
          <span className="w-7 h-px bg-charge-deep" />
          Real Members
        </div>

        <h2 className="font-serif font-medium text-[clamp(30px,5vw,48px)] leading-[1.02] tracking-[-0.035em] mb-6">
          In their <em className="not-italic font-semibold text-charge-deep">words</em>.
        </h2>

        <p className="text-cocoa text-[17px] leading-[1.6] max-w-[520px] mb-14">
          We asked our members one question:
          &ldquo;What has CocoClassy changed for you?&rdquo;
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-cream border border-line rounded-xl p-7 md:p-9 flex flex-col"
            >
              {/* Star rating */}
              <div className="flex gap-1 mb-5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} className="w-4 h-4 text-charge-deep" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[15px] leading-[1.65] text-cocoa flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center justify-between border-t border-line-soft pt-4">
                <div>
                  <div className="font-medium text-[14px] text-espresso">
                    {t.name}
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted">
                    {t.detail}
                  </div>
                </div>
                <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-charge-deep bg-charge/15 px-3 py-1 rounded-full">
                  {t.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
