"use client";

import { copy } from "@/lib/copy";
import { Utensils, Clock, ArrowRight } from "lucide-react";

export default function Features() {
  const { features } = copy;

  const scrollToCta = () => {
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-gradient-to-b from-cream to-cream-soft text-night py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-copper bg-copper/10 ring-1 ring-copper/20 rounded-full px-4 py-1.5 mb-6">
            {features.eyebrow}
          </span>
          <h2 className="font-black text-4xl md:text-5xl tracking-tight leading-[1.1] mb-6 text-night">
            {features.headline}
          </h2>
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-charcoal bg-gold/30 ring-1 ring-gold/50 rounded-full px-5 py-2 shadow-sm">
            {features.badge}
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.items.map((r) => (
            <article
              key={r.title}
              className="group relative bg-white border border-night/5 rounded-3xl overflow-hidden shadow-[0_20px_60px_-30px_rgba(26,22,19,0.25)] hover:shadow-[0_30px_70px_-20px_rgba(199,122,53,0.35)] hover:-translate-y-1 transition-all flex flex-col md:flex-row"
            >
              <div className="md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden bg-cream-soft">
                <img
                  src={r.image}
                  alt={r.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-7 flex flex-col">
                <h3 className="text-xl md:text-2xl font-black text-copper tracking-tight leading-tight mb-2">
                  {r.title}
                </h3>
                <p className="text-sm md:text-base text-muted leading-relaxed flex-1">
                  {r.description}
                </p>
                <div className="flex items-center gap-4 mt-5 pt-4 border-t border-night/5 text-xs font-bold uppercase tracking-[0.12em] text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Utensils className="w-4 h-4 text-copper" strokeWidth={2.2} />
                    {r.ingredients} {features.ingredientsLabel}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-copper" strokeWidth={2.2} />
                    {features.timeLabel} {r.time}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Y MUCHO MÁS */}
        <div className="max-w-3xl mx-auto mt-14 bg-charcoal text-cream rounded-[32px] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -right-16 w-72 h-72 rounded-full bg-copper opacity-30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-amber-warm opacity-20 blur-3xl" />
          <div className="relative">
            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-cream">
              {features.moreBlock.title}
            </h3>
            <p className="text-base md:text-lg text-cream/75 leading-relaxed mb-8 max-w-2xl mx-auto">
              {features.moreBlock.text}
            </p>
            <button
              type="button"
              onClick={scrollToCta}
              className="group inline-flex items-center gap-3 bg-copper hover:bg-amber-warm text-cream font-black text-sm md:text-base uppercase tracking-[0.18em] py-5 px-8 rounded-full transition-all shadow-2xl shadow-copper/40 hover:scale-[1.02] border-b-4 border-rust"
            >
              {features.cta}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
