import { Nav } from "@/components/Nav";
import { Services } from "@/components/Services";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import type { Locale } from "@/i18n";

export function ServiziContent({ locale }: { locale: Locale }) {
  return (
    <>
      <Nav locale={locale} />
      <main>
        <Services locale={locale} />
        <FinalCta locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
