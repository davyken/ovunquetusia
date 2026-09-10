import { Nav } from "@/components/Nav";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import type { Locale } from "@/i18n";

export function ContattiContent({ locale }: { locale: Locale }) {
  return (
    <>
      <Nav locale={locale} />
      <main>
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
