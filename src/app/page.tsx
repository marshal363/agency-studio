import { Hero } from "@/components/landing-page/hero";
import { Services } from "@/components/landing-page/services";
import { Process } from "@/components/landing-page/process";
import { Pricing } from "@/components/landing-page/pricing";
import { Testimonials } from "@/components/landing-page/testimonials";
import { FAQ } from "@/components/landing-page/faq";
import { CTASection } from "@/components/landing-page/cta-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Services />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTASection />
    </main>
  );
}
