"use client";

import { useEffect, useState } from "react";
import { copy } from "@/lib/copy";
import { Flame, ArrowRight } from "lucide-react";

function todayDDMMYYYY() {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

export default function Hero() {
  const { hero, promoBar } = copy;
  const [isMounted, setIsMounted] = useState(false);
  const [today, setToday] = useState("");

  useEffect(() => {
    setIsMounted(true);
    setToday(todayDDMMYYYY());
  }, []);

  const scrollToCta = () => {
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden bg-night text-cream">
      {/* Sticky promo bar */}
      <div className="sticky top-0 z-50 bg-charcoal text-cream border-b border-copper/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-2.5 flex items-center justify-center gap-2 text-[11px] md:text-sm font-semibold tracking-[0.18em] uppercase">
          <Flame className="w-4 h-4 text-copper" strokeWidth={2.4} />
          <span className="text-cream/90">{promoBar.text}</span>
          <span className="text-gold font-bold tabular-nums">
            {isMounted ? today : "—"}
          </span>
        </div>
      </div>

      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-copper opacity-[0.18] blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-40 w-[420px] h-[420px] rounded-full bg-amber-warm opacity-[0.14] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(199,122,53,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-12 md:pt-20 pb-16 md:pb-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT: Copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-copper bg-copper/10 ring-1 ring-copper/30 rounded-full px-4 py-1.5 mb-6">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-copper" />
            {hero.eyebrow}
          </span>

          <h1 className="font-black tracking-tight text-cream text-5xl md:text-6xl lg:text-7xl leading-[1.02] mb-4">
            <span className="block">
              <span className="mr-2">{hero.titleEmoji}</span>
              {hero.headline}
            </span>
            <span className="block italic font-serif text-gold mt-3 text-[0.7em] md:text-[0.65em]">
              {hero.subheadline}
            </span>
          </h1>

          <p className="text-base md:text-lg text-cream/75 leading-relaxed mb-8 max-w-xl">
            {hero.paragraphPrefix}{" "}
            <span className="text-copper font-semibold">
              {hero.paragraphHighlight}
            </span>
          </p>

          <div className="flex flex-wrap items-end gap-x-5 gap-y-2 mb-8">
            <span className="text-cream/50 text-sm md:text-base font-medium">
              {hero.regularPriceLabel}{" "}
              <span className="line-through font-semibold">
                {hero.regularPrice}
              </span>
            </span>
            <span className="text-cream/50 text-sm md:text-base font-medium">
              {hero.offerPrefix}
            </span>
            <span className="text-5xl md:text-7xl font-black text-copper tracking-tighter leading-none drop-shadow-[0_8px_24px_rgba(199,122,53,0.35)]">
              {hero.offerPrice}
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToCta}
            className="group inline-flex items-center gap-3 bg-copper hover:bg-amber-warm text-cream font-black text-sm md:text-base uppercase tracking-[0.18em] py-5 px-8 rounded-full transition-all shadow-2xl shadow-copper/30 hover:scale-[1.02] border-b-4 border-rust animate-pulse-soft"
          >
            {hero.cta}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8 max-w-lg border-t border-cream/10 pt-8">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-black text-gold tracking-tight leading-none">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-cream/60 mt-2 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Mockup */}
        <div className="relative animate-fade-up">
          <div className="absolute inset-0 bg-gradient-to-br from-copper/30 via-amber-warm/15 to-transparent rounded-[40px] blur-2xl" />
          <div className="relative">
            <div className="absolute -top-4 -right-2 md:-top-6 md:-right-4 z-10 bg-charcoal text-gold text-xs md:text-sm font-bold uppercase tracking-[0.22em] px-5 py-2.5 rounded-full shadow-lg ring-1 ring-gold/40 rotate-[6deg]">
              {hero.badge}
            </div>
            <img
              src="/hero-mockup.webp"
              alt={hero.imageAlt}
              className="relative w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(199,122,53,0.45)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
