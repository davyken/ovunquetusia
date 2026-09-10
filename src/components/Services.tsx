import Link from "next/link";
import { services } from "@/lib/business";
import { ServiceIcon } from "./ServiceIcon";
import { RevealLi } from "./RevealLi";
import styles from "./Services.module.css";

const tints = ["tintTeal", "tintHoney", "tintBlue"] as const;

export function Services() {
  return (
    <section id="servizi" className={`${styles.section} container`}>
      <div className={styles.head}>
        <span className="eyebrow">Cosa posso fare per te</span>
        <h2 className={styles.heading}>Assistenza per ogni esigenza</h2>
        <p className={styles.sub}>
          Servizi infermieristici a domicilio a Roma e provincia, pensati
          attorno a te e alla tua famiglia.
        </p>
      </div>

      <ul className={styles.grid}>
        {services.map((service, i) => (
          <RevealLi key={service.slug} index={i} className={styles.card}>
            <Link href={`/${service.slug}`} className={styles.cardLink}>
              <span className={`${styles.icon} ${styles[tints[i % tints.length]]}`}>
                <ServiceIcon name={service.icon} />
              </span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.shortDescription}</p>
              <span className={styles.cardMore}>Scopri di più &rarr;</span>
            </Link>
          </RevealLi>
        ))}
      </ul>
    </section>
  );
}
