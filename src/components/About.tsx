import { business } from "@/lib/business";
import { getDictionary, type Locale } from "@/i18n";
import styles from "./About.module.css";

export function About({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const c = dict.about.credentials;

  const credentials = [
    { term: c.formazione, value: dict.common.degree },
    { term: c.albo, value: dict.common.opiRegistration },
    { term: c.attivita, value: `${c.attivitaValuePrefix}, ${business.piva}` },
    { term: c.zona, value: dict.common.serviceArea },
  ];

  return (
    <section id="chi-sono" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.portraitWrap}>
          <div className={styles.portrait} aria-hidden="true">
            <span>{dict.about.portraitPlaceholder}</span>
          </div>
        </div>

        <div className={styles.content}>
          <span className="eyebrow">{dict.about.eyebrow}</span>
          <h2 className={styles.heading}>
            {dict.about.headingPre} <span className="gradientText">{business.displayName}</span>
          </h2>
          <p className={styles.lead}>{dict.about.lead}</p>

          <ul className={styles.badges}>
            {credentials.map((item) => (
              <li key={item.term} className={styles.badge}>
                <span className={styles.badgeTerm}>{item.term}</span>
                <span className={styles.badgeValue}>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
