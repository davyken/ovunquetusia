import Link from "next/link";
import { getDictionary, localizePath, type Locale } from "@/i18n";
import styles from "./FinalCta.module.css";

export function FinalCta({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className={`container ${styles.wrap}`}>
      <div className={styles.card}>
        <div className={styles.glowA} aria-hidden="true" />
        <div className={styles.glowB} aria-hidden="true" />
        <div className={styles.content}>
          <span className={styles.eyebrow}>{dict.finalCta.eyebrow}</span>
          <h2 className={styles.heading}>{dict.finalCta.heading}</h2>
          <p className={styles.sub}>{dict.finalCta.sub}</p>
          <Link href={localizePath("/contatti", locale)} className={`pillPrimary ${styles.cta}`}>
            {dict.finalCta.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
