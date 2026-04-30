import { copy } from "@/lib/copy";
import { Heart, MessageCircle, Share2, ThumbsUp, Star } from "lucide-react";

const actionIcons = [ThumbsUp, MessageCircle, Share2];

export default function Testimonials() {
  const { testimonials } = copy;

  return (
    <section className="w-full bg-cream text-night py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <span className="inline-block text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-copper bg-copper/10 ring-1 ring-copper/20 rounded-full px-4 py-1.5 mb-6">
            {testimonials.eyebrow}
          </span>
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-night">
            {testimonials.headline}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {testimonials.items.map((t, i) => (
            <article
              key={t.name}
              className={`relative bg-white border border-night/5 rounded-3xl p-6 md:p-7 shadow-[0_20px_50px_-30px_rgba(26,22,19,0.25)] hover:shadow-[0_30px_70px_-30px_rgba(199,122,53,0.35)] transition-all flex flex-col ${
                i === 2 ? "lg:scale-[1.02]" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-copper/30"
                />
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-night text-sm truncate">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted">{t.time}</div>
                </div>
                <div className="flex items-center gap-0.5">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star
                      key={s}
                      className="w-3.5 h-3.5 fill-gold text-gold"
                    />
                  ))}
                </div>
              </div>

              <p className="text-sm md:text-base text-night/85 leading-relaxed mb-5 flex-1">
                {t.content}
              </p>

              <div className="flex justify-between items-center pt-4 border-t border-night/5 text-xs text-muted">
                <span className="inline-flex items-center gap-1.5 text-rust font-bold">
                  <Heart className="w-4 h-4 fill-rust" />
                  {t.likes}
                </span>
                <div className="flex items-center gap-3">
                  {testimonials.actions.map((a, idx) => {
                    const Icon = actionIcons[idx] || ThumbsUp;
                    return (
                      <span
                        key={a}
                        className="inline-flex items-center gap-1.5 text-night/55 cursor-default"
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">{a}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
