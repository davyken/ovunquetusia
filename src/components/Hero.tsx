import Link from "next/link";
import { business } from "@/lib/business";
import { getDictionary, localizePath, type Locale } from "@/i18n";
import { RotatingHeadline } from "./RotatingHeadline";
import styles from "./Hero.module.css";

export function Hero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const h = dict.hero;

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
              <path d="M12 2l1.8 5.6L19.4 9l-5.6 1.8L12 16.4l-1.8-5.6L4.6 9l5.6-1.4z" />
            </svg>
            {dict.common.role} &middot; {h.eyebrowOpi}
          </span>

          <RotatingHeadline
            phrases={h.rotatingPhrases}
            className={`${styles.headline} gradientText`}
            cursorClassName={styles.headlineCursor}
          />

          <p className={styles.sub}>{h.sub}</p>

          <div className={styles.ctas}>
            <Link href={localizePath("/contatti", locale)} className="pillPrimary">
              {h.ctaBook}
            </Link>
            <a href={business.phoneHref} className="pillSecondary">
              {h.ctaCall} {business.phone}
            </a>
          </div>

          <div className={styles.proof}>
            <div className={styles.avatars}>
              {h.avatarLabels.map((label) => (
                <span key={label} title={label} className={styles.avatar}>
                  {label.charAt(0).toUpperCase()}
                </span>
              ))}
            </div>
            <span className={styles.proofText}>
              {h.proofText}
              <svg
                viewBox="0 0 24 24"
                width="13"
                height="13"
                fill="var(--honey)"
                aria-hidden="true"
                style={{ display: "inline", marginLeft: 4, verticalAlign: "-1px" }}
              >
                <path d="M12 21s-7-4.4-9.5-8.6C.8 8.7 3 5 6.6 5 9 5 11 7 12 8.6 13 7 15 5 17.4 5 21 5 23.2 8.7 21.5 12.4 19 16.6 12 21 12 21z" />
              </svg>
            </span>
          </div>
        </div>

        <div className={styles.cardWrap}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.card} aria-hidden="true">
            <div className={styles.cardHead}>
              <span>{h.card.title}</span>
              <span className={styles.cardDate}>{h.card.date}</span>
            </div>
            <dl className={styles.cardRows}>
              {h.card.rows.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <a href="#servizi" className={styles.scrollCue} aria-label={h.scrollAria}>
        <span className={styles.scrollDot} />
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
