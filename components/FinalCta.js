"use client";

import { useState, useEffect } from "react";
import { copy } from "@/lib/copy";
import {
  Check,
  Lock,
  ShieldCheck,
  ArrowRight,
  Star,
  Crown,
} from "lucide-react";

const CHECKOUT_URL = "https://www.oriopay.app/p/500-de-gustari-de-bar";

function buildUrlWithParams(base) {
  try {
    if (typeof window === "undefined") return base;
    const params = new URLSearchParams(window.location.search);
    let src = params.get("src");
    let fbclid = params.get("fbclid");

    if (!src) src = localStorage.getItem("hotmart_src");
    if (!fbclid) fbclid = localStorage.getItem("hotmart_fbclid");

    if (!src && !fbclid) return base;

    const urlObj = new URL(base);
    if (src) urlObj.searchParams.set("src", src);
    if (fbclid) urlObj.searchParams.set("fbclid", fbclid);
    return urlObj.toString();
  } catch (e) {
    console.error("Error construyendo URL:", e);
    return base;
  }
}

export default function FinalCta() {
  const { finalCta } = copy;
  const [checkoutUrl, setCheckoutUrl] = useState(CHECKOUT_URL);

  useEffect(() => {
    setCheckoutUrl(buildUrlWithParams(CHECKOUT_URL));
  }, []);

  const handleBeginCheckout = (plan) => {
    try {
      let priceNum = 0;
      if (typeof plan.priceValue === "number" && Number.isFinite(plan.priceValue)) {
        priceNum = plan.priceValue;
      } else if (plan.offerPrice) {
        const cleaned = String(plan.offerPrice)
          .replace(/[^\d.,]/g, "")
          .replace(",", ".");
        const parsed = parseFloat(cleaned);
        if (Number.isFinite(parsed)) priceNum = parsed;
      }

      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "begin_checkout",
          value: priceNum,
          currency: "USD",
          items: [
            {
              item_id: plan.analyticsId,
              item_name: plan.analyticsName,
              price: priceNum,
            },
          ],
        });

        if (window.fbq) {
          window.fbq("track", "InitiateCheckout", {
            value: priceNum,
            currency: "USD",
            content_name: plan.analyticsName,
            content_category: "Digital Product",
          });
        }
      }
      console.log("[FinalCTA] begin_checkout disparado ✅", plan.analyticsName);
    } catch (err) {
      console.error("[FinalCTA] Error en analytics:", err);
    }
  };

  const renderPlan = (plan) => {
    const isSuper = plan.kind === "super";
    const url = checkoutUrl;

    return (
      <div
        key={plan.kind}
        className={`relative rounded-[32px] p-7 md:p-9 flex flex-col w-full max-w-md transition-all ${
          isSuper
            ? "bg-charcoal text-cream border-2 border-copper md:scale-[1.04] z-10 shadow-[0_30px_80px_-30px_rgba(199,122,53,0.55)]"
            : "bg-white text-night border border-night/8 shadow-[0_20px_60px_-30px_rgba(26,22,19,0.25)]"
        }`}
      >
        {/* Popular ribbon */}
        {isSuper && plan.popularLabel && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-copper text-cream text-xs font-black uppercase tracking-[0.22em] py-1.5 px-5 rounded-full shadow-md ring-2 ring-cream">
            {plan.popularLabel}
          </div>
        )}

        {/* Ribbon kind */}
        <div className="flex items-center justify-center mb-5">
          <span
            className={`inline-flex items-center gap-2 text-[11px] md:text-xs font-bold uppercase tracking-[0.22em] py-1.5 px-4 rounded-full ${
              isSuper
                ? "bg-copper/20 text-gold ring-1 ring-gold/40"
                : "bg-night/5 text-night/70 ring-1 ring-night/10"
            }`}
          >
            {isSuper ? (
              <Crown className="w-3.5 h-3.5" />
            ) : (
              <Star className="w-3.5 h-3.5" />
            )}
            {plan.ribbon}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`text-center text-xl md:text-2xl font-black tracking-tight leading-tight mb-6 ${
            isSuper ? "text-cream" : "text-night"
          }`}
        >
          {plan.title}
        </h3>

        {/* Bullets */}
        <ul className="space-y-3 mb-5 flex-grow">
          {plan.bullets.map((b) => (
            <li
              key={b}
              className={`flex items-start gap-3 text-sm md:text-base ${
                isSuper ? "text-cream/85" : "text-night/80"
              }`}
            >
              <span
                className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                  isSuper ? "bg-copper" : "bg-copper/15"
                }`}
              >
                <Check
                  className={`w-3 h-3 ${
                    isSuper ? "text-cream" : "text-copper"
                  }`}
                  strokeWidth={3.4}
                />
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Bonus bullets (only if any) */}
        {plan.bonusBullets && plan.bonusBullets.length > 0 && (
          <ul
            className={`space-y-3 mb-6 pt-4 border-t ${
              isSuper ? "border-cream/10" : "border-night/10"
            }`}
          >
            {plan.bonusBullets.map((b) => (
              <li
                key={b}
                className={`flex items-start gap-3 text-sm md:text-base font-bold ${
                  isSuper ? "text-gold" : "text-copper"
                }`}
              >
                <span className="shrink-0 w-5 h-5 rounded-full bg-copper text-cream flex items-center justify-center mt-0.5">
                  <Star className="w-3 h-3" strokeWidth={2.5} />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Price block */}
        <div className="text-center mb-6">
          <div
            className={`flex items-center justify-center gap-2 text-sm font-bold ${
              isSuper ? "text-cream/60" : "text-night/50"
            }`}
          >
            <span className="line-through">{plan.regularPrice}</span>
            <span className="bg-rust/20 text-rust px-2 py-0.5 rounded font-black">
              {plan.discountTag}
            </span>
          </div>
          <div
            className={`font-black text-5xl md:text-6xl mt-2 tracking-tighter leading-none ${
              isSuper ? "text-copper" : "text-copper"
            }`}
          >
            {plan.offerPrice}
          </div>
          <div
            className={`text-xs mt-2 font-medium ${
              isSuper ? "text-cream/60" : "text-night/50"
            }`}
          >
            {plan.priceFootnote}
          </div>
        </div>

        {/* CTA */}
        <a
          href={url}
          onClick={() => handleBeginCheckout(plan)}
          className={`group inline-flex items-center justify-center gap-2 font-black text-sm md:text-base uppercase tracking-[0.18em] py-5 px-6 rounded-2xl transition-all border-b-4 ${
            isSuper
              ? "bg-gradient-to-r from-copper to-amber-warm hover:from-rust hover:to-copper text-cream border-rust shadow-2xl shadow-copper/40"
              : "bg-charcoal hover:bg-night text-cream border-night/40 shadow-xl"
          }`}
        >
          {plan.cta}
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>

        {/* Trust */}
        <div
          className={`flex justify-center items-center gap-4 text-[10px] md:text-xs font-medium mt-4 ${
            isSuper ? "text-cream/60" : "text-night/50"
          }`}
        >
          <span className="inline-flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5" />
            {finalCta.trust.secure}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            {finalCta.trust.guarantee}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section
      id="final-cta-section"
      className="relative w-full bg-gradient-to-b from-cream via-cream-soft to-cream text-night py-20 md:py-28 overflow-hidden"
    >
      <div className="pointer-events-none absolute top-20 -right-40 w-[520px] h-[520px] rounded-full bg-copper opacity-[0.14] blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 -left-40 w-[520px] h-[520px] rounded-full bg-amber-warm opacity-[0.16] blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14 md:mb-16">
          <span className="inline-block text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-copper bg-copper/10 ring-1 ring-copper/20 rounded-full px-4 py-1.5 mb-6">
            {finalCta.eyebrow}
          </span>
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-night max-w-3xl mx-auto mb-5">
            {finalCta.headline}
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            {finalCta.subheadline}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 md:gap-10">
          {finalCta.plans.map(renderPlan)}
        </div>
      </div>
    </section>
  );
}
