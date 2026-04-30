import { copy } from "@/lib/copy";
import { Gift } from "lucide-react";

export default function Bonuses() {
  const { bonuses } = copy;

  return (
    <section className="w-full bg-cream-soft text-night py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-copper bg-copper/10 ring-1 ring-copper/20 rounded-full px-4 py-1.5 mb-6">
            <Gift className="w-3.5 h-3.5" />
            {bonuses.eyebrowMain}
          </span>
          <h2 className="font-black text-4xl md:text-6xl tracking-tight leading-[1.05]">
            <span className="block text-night">{bonuses.eyebrowMain}</span>
            <span className="block italic font-serif text-copper mt-2">
              {bonuses.eyebrowSuffix}
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {bonuses.items.map((b) => (
            <article
              key={b.badge}
              className="group relative bg-white border border-night/5 rounded-[32px] overflow-hidden shadow-[0_30px_80px_-40px_rgba(199,122,53,0.35)] hover:-translate-y-1 transition-all flex flex-col"
            >
              {/* Free badge */}
              <div className="absolute top-5 right-5 z-10 bg-charcoal text-gold text-[10px] md:text-xs font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full">
                {bonuses.freeLabel}
              </div>

              <div className="aspect-[4/3] bg-gradient-to-br from-cream-soft to-cream overflow-hidden flex items-center justify-center p-6">
                <img
                  src={b.image}
                  alt={b.imageAlt}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-7 md:p-8 flex flex-col flex-1">
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-copper bg-copper/10 rounded-full px-3 py-1 mb-4 self-start">
                  {b.badge}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-night tracking-tight mb-3 leading-tight">
                  {b.title}
                </h3>
                <p className="text-sm md:text-base text-muted leading-relaxed flex-1 mb-5">
                  {b.subtext}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-night/5">
                  <span className="text-sm text-muted line-through font-semibold">
                    {b.price}
                  </span>
                  <span className="text-sm font-black uppercase tracking-[0.18em] text-copper">
                    {bonuses.freeLabel}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
