import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { business } from "@/lib/business";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Cookie Policy",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <>
      <Nav />
      <main className={`container ${styles.section}`}>
        <h1 className={styles.title}>Cookie Policy</h1>
        <span className={styles.updated}>Bozza — da aggiornare in base agli strumenti di analisi/marketing effettivamente installati</span>

        <div className={styles.body}>
          <h2>Cosa sono i cookie</h2>
          <p>
            I cookie sono piccoli file di testo che i siti visitati inviano
            al dispositivo dell&rsquo;utente, dove vengono memorizzati per
            essere poi ritrasmessi agli stessi siti alla visita successiva.
          </p>

          <h2>Cookie utilizzati su questo sito</h2>
          <ul>
            <li>Cookie tecnici, necessari al funzionamento del sito.</li>
            <li>
              Eventuali cookie di analisi statistica (es. Google Analytics),
              da attivare solo previo consenso dell&rsquo;utente.
            </li>
          </ul>

          <h2>Come gestire i cookie</h2>
          <p>
            È possibile gestire le preferenze sui cookie direttamente dalle
            impostazioni del proprio browser, oppure tramite il banner dei
            cookie presente sul sito al primo accesso.
          </p>

          <h2>Contatti</h2>
          <p>
            Per domande su questa policy: {business.email}.
          </p>
        </div>

        <p className={styles.notice}>
          Questo testo è un modello di partenza. Aggiornalo con l&rsquo;elenco
          reale dei cookie/servizi terzi installati (es. Google Analytics,
          pixel pubblicitari) e collega un banner di consenso conforme al
          GDPR prima di pubblicare il sito.
        </p>
      </main>
      <Footer />
    </>
  );
}
