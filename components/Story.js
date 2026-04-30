"use client";

import { copy } from "@/lib/copy";
import { ArrowRight } from "lucide-react";

export default function Story() {
  const { story } = copy;

  const scrollToCta = () => {
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const renderParagraph = (p, i) => {
    if (p.style === "bold") {
      return (
        <p key={i} className="text-cream font-black text-xl md:text-2xl leading-snug">
          {p.text}
        </p>
      );
    }
    if (p.style === "highlight") {
      return (
        <p
          key={i}
          className="bg-copper/15 border-l-4 border-copper text-cream rounded-r-xl p-5 leading-relaxed text-base md:text-lg font-medium"
        >
          {p.text}
        </p>
      );
    }
    if (p.style === "bold-accent") {
      return (
        <p
          key={i}
          className="font-black text-copper text-xl md:text-2xl uppercase tracking-tight"
        >
          {p.text}
        </p>
      );
    }
    return (
      <p key={i} className="text-cream/80 text-base md:text-lg leading-relaxed">
        {p.text}
      </p>
    );
  };

  return (
    <section className="relative w-full bg-night text-cream py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-copper opacity-[0.10] blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* IMAGE */}
        <div className="relative order-1 md:order-1">
          <div className="absolute top-4 -left-4 w-full h-full border-2 border-copper rounded-3xl z-0 hidden md:block" />
          <img
            src={story.image}
            alt={story.imageAlt}
            className="relative z-10 w-full h-auto object-cover rounded-3xl shadow-2xl"
          />
        </div>

        {/* COPY */}
        <div className="order-2 md:order-2">
          <span className="inline-block text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-muted-light bg-cream/[0.06] ring-1 ring-cream/10 rounded-full px-4 py-1.5 mb-5">
            {story.eyebrow}
          </span>
          <h2 className="font-serif italic font-black text-4xl md:text-5xl lg:text-6xl text-gold tracking-tight leading-[1.05] mb-8">
            {story.headline}
          </h2>

          <div className="space-y-5">
            {story.paragraphs.map((p, i) => renderParagraph(p, i))}
          </div>

          <button
            type="button"
            onClick={scrollToCta}
            className="group mt-10 inline-flex items-center gap-3 bg-copper hover:bg-amber-warm text-cream font-black text-sm md:text-base uppercase tracking-[0.18em] py-5 px-8 rounded-full transition-all shadow-2xl shadow-copper/30 hover:scale-[1.02] border-b-4 border-rust"
          >
            {story.cta}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
