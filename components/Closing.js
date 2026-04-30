"use client";

import { copy } from "@/lib/copy";
import { ArrowRight, MessageCircle } from "lucide-react";

// 👇 Reemplaza con el número real de WhatsApp (sin "+", solo dígitos).
const WHATSAPP_URL = "https://wa.me/REEMPLAZAR";

export default function Closing() {
  const { closing } = copy;

  const scrollToCta = () => {
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-night text-cream py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <img
          src="/carousel/slide-1.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/85 via-night/85 to-night" />
      </div>

      <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center">
        <span className="inline-block text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-gold bg-gold/15 ring-1 ring-gold/30 rounded-full px-4 py-1.5 mb-6">
          {closing.eyebrow}
        </span>

        <h2 className="font-serif italic font-black text-4xl md:text-6xl text-gold tracking-tight leading-[1.05] mb-8">
          {closing.headline}
        </h2>

        <p className="text-lg md:text-xl text-cream/85 leading-relaxed mb-10 max-w-2xl mx-auto">
          {closing.paragraph}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={scrollToCta}
            className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-copper to-amber-warm hover:from-rust hover:to-copper text-cream font-black text-base md:text-lg uppercase tracking-[0.18em] py-5 md:py-6 px-8 md:px-12 rounded-2xl shadow-2xl shadow-copper/40 hover:scale-[1.02] transition-all border-b-4 border-rust w-full sm:w-auto"
          >
            {closing.cta}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-cream/[0.06] hover:bg-cream/[0.12] border border-cream/15 text-cream font-bold text-base md:text-lg uppercase tracking-[0.16em] py-5 md:py-6 px-6 md:px-8 rounded-2xl transition-all w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5 text-gold" />
            {closing.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
