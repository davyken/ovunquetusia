import { getDictionary, type Locale } from "@/i18n";
import styles from "./FAQ.module.css";

export function FAQ({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className={`${styles.section} container`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.head}>
        <span className="eyebrow">{dict.faqSection.eyebrow}</span>
        <h2 className={styles.heading}>{dict.faqSection.heading}</h2>
      </div>
      <div className={styles.list}>
        {dict.faq.map((item) => (
          <details key={item.question} className={styles.item}>
            <summary className={styles.question}>{item.question}</summary>
            <p className={styles.answer}>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
