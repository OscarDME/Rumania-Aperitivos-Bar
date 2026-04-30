import { copy } from "@/lib/copy";
import { Utensils } from "lucide-react";

export default function Footer() {
  const { footer } = copy;
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-charcoal text-cream/60 border-t border-copper/15 py-10 md:py-12">
      <div className="max-w-5xl mx-auto px-5 md:px-8 text-center space-y-5">
        <div className="flex items-center justify-center gap-2 text-copper">
          <Utensils className="w-6 h-6" />
          <span className="font-black italic font-serif text-xl md:text-2xl text-cream tracking-tight">
            {footer.brand}
          </span>
        </div>

        <p className="text-sm text-cream/55">{footer.tagline}</p>

        <p className="text-xs text-cream/40 tracking-wide">
          {footer.rightsPrefix} {year}
        </p>

        <p className="text-[10px] md:text-[11px] text-cream/35 leading-relaxed max-w-3xl mx-auto pt-2 border-t border-cream/5">
          {footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}
