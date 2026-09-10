import Link from "next/link";
import { business } from "@/lib/business";
import { Logo } from "./Logo";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { ScrollToTop } from "./ScrollToTop";
import { SocialSidebar } from "./SocialSidebar";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <WhatsAppFloat />
      <ScrollToTop />
      <SocialSidebar />
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Logo size={28} />
          <span>{business.brand}</span>
        </div>

        <p className={styles.legal}>
          {business.legalName} &middot; {business.role} &middot; {business.piva}
          <br />
          {business.opiRegistration}
        </p>

        <nav className={styles.links}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
