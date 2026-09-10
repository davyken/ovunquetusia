import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import type { Locale } from "@/i18n";

export function HomeContent({ locale }: { locale: Locale }) {
  return (
    <>
      <JsonLd locale={locale} />
      <Nav locale={locale} />
      <main>
        <Hero locale={locale} />
        <Services locale={locale} />
        <HowItWorks locale={locale} />
        <Testimonials locale={locale} />
        <FinalCta locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
