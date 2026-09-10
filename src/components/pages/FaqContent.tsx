import { Nav } from "@/components/Nav";
import { FAQ } from "@/components/FAQ";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import type { Locale } from "@/i18n";

export function FaqContent({ locale }: { locale: Locale }) {
  return (
    <>
      <Nav locale={locale} />
      <main>
        <FAQ locale={locale} />
        <FinalCta locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
