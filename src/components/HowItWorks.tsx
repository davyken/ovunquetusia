import { RevealLi } from "./RevealLi";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    title: "Racconta il tuo bisogno",
    text: "Chiamami o scrivimi su WhatsApp: mi spieghi la situazione e di che assistenza hai bisogno.",
    icon: (
      <path d="M4 4h16v12H8l-4 4z" />
    ),
  },
  {
    title: "Fissiamo la visita",
    text: "Troviamo insieme data, orario e indirizzo più comodi per te, a Roma o in provincia.",
    icon: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M4 10h16M8 3v4M16 3v4" />
      </>
    ),
  },
  {
    title: "Ricevi l'assistenza",
    text: "Arrivo a casa tua con tutto il necessario e ti seguo con la cura di cui hai bisogno.",
    icon: (
      <path d="M12 21s-7-4.4-9.5-8.6C.8 8.7 3 5 6.6 5 9 5 11 7 12 8.6 13 7 15 5 17.4 5 21 5 23.2 8.7 21.5 12.4 19 16.6 12 21 12 21z" />
    ),
  },
];

export function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <span className="eyebrow">Semplice e rapido</span>
          <h2 className={styles.heading}>Come funziona</h2>
          <p className={styles.sub}>
            Tre passaggi per organizzare la tua prima visita a domicilio.
          </p>
        </div>

        <ol className={styles.steps}>
          {steps.map((step, i) => (
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
                  {step.icon}
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
