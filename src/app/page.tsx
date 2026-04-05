import { HeroSection } from "@/components/sections/hero-section";
import { AfterRequest } from "@/components/sections/after-request";
import { ServiceIncludes } from "@/components/sections/service-includes";
import { FAQ } from "@/components/sections/faq";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Reviews } from "@/components/sections/reviews";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AfterRequest />
      <ServiceIncludes />
      <FAQ />
      <CtaBanner />
      <Reviews />
    </main>
  );
}
