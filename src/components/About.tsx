import { business } from "@/lib/business";
import styles from "./About.module.css";

const credentials = [
  { term: "Formazione", value: business.degree },
  { term: "Albo professionale", value: business.opiRegistration },
  { term: "Attività", value: `Libera professionista, ${business.piva}` },
  { term: "Zona operativa", value: business.serviceArea },
];

export function About() {
  return (
    <section id="chi-sono" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.portraitWrap}>
          <div className={styles.portrait} aria-hidden="true">
            <span>Foto professionale</span>
          </div>
        </div>

        <div className={styles.content}>
          <span className="eyebrow">Chi sono</span>
          <h2 className={styles.heading}>
            Ciao, sono <span className="gradientText">{business.displayName}</span>
          </h2>
          <p className={styles.lead}>
            Sono {business.displayName} Kennang Tsague, infermiera laureata
            all&rsquo;Università degli Studi di Roma &ldquo;Tor Vergata&rdquo;.
            Ho scelto l&rsquo;assistenza domiciliare perché credo che le cure
            migliori siano quelle che rispettano i tempi e la casa della
            persona che le riceve — con presenza, ascolto e competenza
            clinica.
          </p>

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
