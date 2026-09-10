import { Nav } from "@/components/Nav";
import { Zones } from "@/components/Zones";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import type { Locale } from "@/i18n";

export function ZoneContent({ locale }: { locale: Locale }) {
  return (
    <>
      <Nav locale={locale} />
      <main>
        <Zones locale={locale} />
        <FinalCta locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
