import { getDictionary } from "@/dictionaries";
import type { Lang } from "@/dictionaries";
import { HeroSection } from "@/components/sections/hero-section";
import { AfterRequest } from "@/components/sections/after-request";
import { ServiceIncludes } from "@/components/sections/service-includes";
import { FAQ } from "@/components/sections/faq";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Reviews } from "@/components/sections/reviews";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Lang);
  return (
    <main>
      <HeroSection dict={dict.hero} />
      <AfterRequest dict={dict.afterRequest} />
      <ServiceIncludes dict={dict.serviceIncludes} />
      <FAQ dict={dict.faq} />
      <CtaBanner dict={dict.cta} />
      <Reviews dict={dict.reviews} />
    </main>
  );
}
