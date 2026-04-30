// app/page.js
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import CarouselSection from "@/components/CarouselSection";
import Features from "@/components/Features";
import Bonuses from "@/components/Bonuses";
import FinalCta from "@/components/FinalCta";
import Testimonials from "@/components/Testimonials";
import Story from "@/components/Story";
import FAQ from "@/components/FAQ";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen font-sans bg-cream text-night">
      <Hero />
      <Benefits />
      <CarouselSection />
      <Features />
      <Bonuses />
      <FinalCta />
      <Testimonials />
      <Story />
      <FAQ />
      <Closing />
      <Footer />
    </main>
  );
}
