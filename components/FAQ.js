"use client";

import { useState } from "react";
import { copy } from "@/lib/copy";
import { HelpCircle, Plus } from "lucide-react";

export default function FAQ() {
  const { faq } = copy;
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((curr) => (curr === i ? null : i));

  return (
    <section className="w-full bg-cream-soft text-night py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-14">
          <span className="inline-flex items-center gap-2 text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-copper bg-copper/10 ring-1 ring-copper/20 rounded-full px-4 py-1.5 mb-6">
            <HelpCircle className="w-3.5 h-3.5" />
            {faq.eyebrow}
          </span>
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-night">
            {faq.headline}
          </h2>
        </div>

        <div className="space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? "border-copper/40 shadow-[0_20px_50px_-30px_rgba(199,122,53,0.4)]"
                    : "border-night/5 hover:border-copper/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-7 py-5 md:py-6"
                >
                  <span className="font-bold text-base md:text-lg text-night leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      isOpen
                        ? "bg-copper text-cream rotate-45"
                        : "bg-copper/10 text-copper"
                    }`}
                  >
                    <Plus className="w-4 h-4" strokeWidth={2.5} />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-7 pb-6 text-sm md:text-base text-muted leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
