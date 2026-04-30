import { copy } from "@/lib/copy";
import {
  BookOpen,
  Sparkles,
  Zap,
  Users,
  Wind,
  Carrot,
  Printer,
} from "lucide-react";

const iconMap = {
  BookOpen,
  Sparkles,
  Zap,
  Users,
  Wind,
  Carrot,
  Printer,
};

export default function Benefits() {
  const { benefits } = copy;

  return (
    <section className="w-full bg-cream text-night py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <span className="inline-block text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-copper bg-copper/10 ring-1 ring-copper/20 rounded-full px-4 py-1.5 mb-6">
            {benefits.eyebrow}
          </span>
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-night">
            {benefits.headline}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {benefits.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Sparkles;
            const featured = i === 0;
            return (
              <article
                key={item.title}
                className={`group relative rounded-3xl p-7 md:p-8 transition-all border ${
                  featured
                    ? "bg-charcoal text-cream border-charcoal sm:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col justify-end overflow-hidden"
                    : "bg-white border-night/5 hover:border-copper/40 hover:-translate-y-1 shadow-[0_10px_40px_-20px_rgba(26,22,19,0.15)] hover:shadow-[0_20px_60px_-20px_rgba(199,122,53,0.30)]"
                }`}
              >
                {featured && (
                  <div className="pointer-events-none absolute -top-20 -right-16 w-72 h-72 rounded-full bg-copper opacity-25 blur-3xl" />
                )}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${
                    featured
                      ? "bg-gradient-to-br from-copper to-amber-warm shadow-copper/40"
                      : "bg-gradient-to-br from-copper to-amber-warm shadow-copper/30"
                  }`}
                >
                  <Icon className="w-7 h-7 text-cream" strokeWidth={2.2} />
                </div>
                <h3
                  className={`font-black tracking-tight leading-tight ${
                    featured
                      ? "text-2xl md:text-4xl text-cream max-w-md"
                      : "text-lg md:text-xl text-night"
                  }`}
                >
                  {item.title}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
