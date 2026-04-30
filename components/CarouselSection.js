"use client";

import { useState, useEffect, useCallback } from "react";
import { copy } from "@/lib/copy";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Clock,
  BookOpen,
} from "lucide-react";

const iconMap = { CheckCircle2, Clock, BookOpen };

export default function CarouselSection() {
  const { carouselSection } = copy;
  const slides = carouselSection.images;
  const [index, setIndex] = useState(0);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % slides.length),
    [slides.length]
  );
  const prev = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [next]);

  const scrollToCta = () => {
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-night text-cream py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-0 w-[500px] h-[500px] rounded-full bg-copper opacity-[0.18] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 w-[500px] h-[500px] rounded-full bg-amber-warm opacity-[0.14] blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-gold bg-gold/15 ring-1 ring-gold/30 rounded-full px-4 py-1.5 mb-6">
            {carouselSection.eyebrow}
          </span>
          <h2 className="font-serif italic font-black text-3xl md:text-5xl text-gold tracking-tight leading-[1.1] mb-6">
            {carouselSection.headline}
          </h2>
          <p className="text-base md:text-lg text-cream/75 leading-relaxed mb-3">
            {carouselSection.paragraph1}
          </p>
          <p className="text-base md:text-lg text-cream/85 leading-relaxed">
            {carouselSection.paragraph2}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] md:aspect-[16/8] rounded-[32px] overflow-hidden border border-cream/10 bg-cream/[0.04] shadow-2xl">
            {slides.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent" />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              aria-label={carouselSection.a11y.prev}
              className="w-12 h-12 rounded-full border border-cream/20 hover:bg-cream hover:text-night text-cream flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`${carouselSection.a11y.goToSlide} ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-copper"
                      : "w-1.5 bg-cream/30 hover:bg-cream/60"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label={carouselSection.a11y.next}
              className="w-12 h-12 rounded-full border border-cream/20 hover:bg-cream hover:text-night text-cream flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Closing emphasis */}
        <div className="text-center max-w-3xl mx-auto mt-14 mb-10">
          <p className="text-lg md:text-2xl font-bold text-cream leading-snug">
            {carouselSection.closingLines[0]}
          </p>
          <p className="text-lg md:text-2xl font-light italic text-gold mt-1 leading-snug">
            {carouselSection.closingLines[1]}
          </p>
        </div>

        {/* Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          {carouselSection.chips.map((chip) => {
            const Icon = iconMap[chip.icon] || CheckCircle2;
            return (
              <div
                key={chip.label}
                className="flex items-center gap-3 bg-cream/[0.04] border border-cream/10 rounded-2xl px-5 py-4"
              >
                <div className="w-9 h-9 rounded-full bg-copper/15 flex items-center justify-center shrink-0">
                  <Icon className="w-4.5 h-4.5 text-copper" strokeWidth={2.4} />
                </div>
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.12em] text-cream/85">
                  {chip.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            type="button"
            onClick={scrollToCta}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-copper to-amber-warm hover:from-rust hover:to-copper text-cream font-black text-sm md:text-base uppercase tracking-[0.18em] py-5 px-8 rounded-full transition-all shadow-2xl shadow-copper/30 hover:scale-[1.02] border-b-4 border-rust"
          >
            {carouselSection.cta}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
