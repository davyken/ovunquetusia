import Link from "next/link";
import { ServiceIcon } from "./ServiceIcon";
import { RevealLi } from "./RevealLi";
import { getDictionary, localizePath, type Locale } from "@/i18n";
import styles from "./Services.module.css";

const tints = ["tintTeal", "tintHoney", "tintBlue"] as const;

export function Services({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section id="servizi" className={`${styles.section} container`}>
      <div className={styles.head}>
        <span className="eyebrow">{dict.servicesSection.eyebrow}</span>
        <h2 className={styles.heading}>{dict.servicesSection.heading}</h2>
        <p className={styles.sub}>{dict.servicesSection.sub}</p>
      </div>

      <ul className={styles.grid}>
        {dict.services.map((service, i) => (
          <RevealLi key={service.slug} index={i} className={styles.card}>
            <Link href={localizePath(`/${service.slug}`, locale)} className={styles.cardLink}>
              <span className={`${styles.icon} ${styles[tints[i % tints.length]]}`}>
                <ServiceIcon name={service.icon} />
              </span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.shortDescription}</p>
              <span className={styles.cardMore}>{dict.servicesSection.more}</span>
            </Link>
          </RevealLi>
        ))}
      </ul>
    </section>
  );
}
