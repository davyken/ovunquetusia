import Link from "next/link";
import { business } from "@/lib/business";
import { Logo } from "./Logo";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { ScrollToTop } from "./ScrollToTop";
import { SocialSidebar } from "./SocialSidebar";
import { getDictionary, localizePath, type Locale } from "@/i18n";
import styles from "./Footer.module.css";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <footer className={styles.footer}>
      <WhatsAppFloat locale={locale} />
      <ScrollToTop locale={locale} />
      <SocialSidebar locale={locale} />
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Logo size={28} />
          <span>{business.brand}</span>
        </div>

        <p className={styles.legal}>
          {business.legalName} &middot; {dict.common.role} &middot; {business.piva}
          <br />
          {dict.common.opiRegistration}
        </p>

        <nav className={styles.links}>
          <Link href={localizePath("/privacy-policy", locale)}>{dict.footer.privacy}</Link>
          <Link href={localizePath("/cookie-policy", locale)}>{dict.footer.cookie}</Link>
        </nav>
      </div>
    </footer>
  );
}
