"use client";

import { useState } from "react";

const faqs = [
  {
    q: "I've never done Pilates. Will I be lost?",
    a: "No. The Essentials class is designed for first-timers. Your instructor will walk you through every spring, every strap, and every position before you start. By class three, you'll feel like you've been doing this for months.",
  },
  {
    q: "What does the intro offer include?",
    a: "14 days of unlimited classes across all formats and all studios. A complimentary welcome session with an instructor. And your first cold-pressed juice on us. R499, no commitment after.",
  },
  {
    q: "Why women-only?",
    a: "Because the energy in the room changes when the space is entirely yours. No performing. No adjusting. Just you and the work. Every member we've spoken to says this is the thing they noticed first.",
  },
  {
    q: "Can I freeze or cancel my membership?",
    a: "Yes. All memberships are month-to-month with no lock-in. Freeze for up to 30 days per quarter. Cancel anytime with 7 days notice — no fees, no questions.",
  },
  {
    q: "What should I wear?",
    a: "Fitted activewear. Socks with grip (we sell them at reception if you forget). Leave your shoes at the door. Hair tied back. That's it.",
  },
  {
    q: "Is the juice bar included in my membership?",
    a: "Membership gives you a discount (10-20% depending on your plan), but juices are purchased separately. They're cold-pressed in-house every morning. Most members grab one after every class.",
  },
  {
    q: "How do I book a class?",
    a: "WhatsApp us or book through our app. Booking windows depend on your membership tier — Unlimited members can book 14 days out, which means they get first pick of the popular morning slots.",
  },
  {
    q: "What if a class is full?",
    a: "Join the waitlist. Spots open regularly as members swap schedules. Ritual and Obsession members get priority waitlist positioning.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-cream">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-charge-deep mb-4 flex items-center gap-3">
          <span className="w-7 h-px bg-charge-deep" />
          FAQ
        </div>

        <h2 className="font-serif font-medium text-[clamp(30px,5vw,48px)] leading-[1.02] tracking-[-0.035em] mb-14">
          Before you <em className="not-italic font-semibold text-charge-deep">ask</em>.
        </h2>

        <div className="max-w-[720px]">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-line">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4 group"
              >
                <span className="font-serif font-medium text-[17px] md:text-[19px] tracking-[-0.02em] leading-[1.3] group-hover:text-charge-deep transition-colors">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 shrink-0 text-muted transition-transform ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M10 4v12M4 10h12" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-[300px] pb-5" : "max-h-0"
                }`}
              >
                <p className="text-cocoa text-[15px] leading-[1.65] max-w-[600px]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
