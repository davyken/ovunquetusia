import { RevealLi } from "./RevealLi";
import { getDictionary, type Locale } from "@/i18n";
import styles from "./HowItWorks.module.css";

const stepIcons = [
  <path key="1" d="M4 4h16v12H8l-4 4z" />,
  <g key="2">
    <rect x="4" y="5" width="16" height="15" rx="2" />
    <path d="M4 10h16M8 3v4M16 3v4" />
  </g>,
  <path
    key="3"
    d="M12 21s-7-4.4-9.5-8.6C.8 8.7 3 5 6.6 5 9 5 11 7 12 8.6 13 7 15 5 17.4 5 21 5 23.2 8.7 21.5 12.4 19 16.6 12 21 12 21z"
  />,
];

export function HowItWorks({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <span className="eyebrow">{dict.howItWorks.eyebrow}</span>
          <h2 className={styles.heading}>{dict.howItWorks.heading}</h2>
          <p className={styles.sub}>{dict.howItWorks.sub}</p>
        </div>

        <ol className={styles.steps}>
          {dict.howItWorks.steps.map((step, i) => (
            <RevealLi key={step.title} index={i} className={styles.step}>
              <span className={styles.iconWrap}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  {stepIcons[i]}
                </svg>
                <span className={styles.number}>{i + 1}</span>
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </RevealLi>
          ))}
        </ol>
      </div>
    </section>
  );
}
