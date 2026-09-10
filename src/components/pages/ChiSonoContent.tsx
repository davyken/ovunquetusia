import { Nav } from "@/components/Nav";
import { About } from "@/components/About";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import type { Locale } from "@/i18n";

export function ChiSonoContent({ locale }: { locale: Locale }) {
  return (
    <>
      <Nav locale={locale} />
      <main>
        <About locale={locale} />
        <FinalCta locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
