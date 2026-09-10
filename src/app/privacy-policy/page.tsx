import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { business } from "@/lib/business";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main className={`container ${styles.section}`}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <span className={styles.updated}>Bozza — da far revisionare da un professionista prima della pubblicazione</span>

        <div className={styles.body}>
          <h2>Titolare del trattamento</h2>
          <p>
            {business.legalName}, {business.role}, {business.piva}, con sede
            in {business.addressLine}. Contatto: {business.email}.
          </p>

          <h2>Dati raccolti</h2>
          <p>
            Attraverso il modulo di contatto e i canali indicati sul sito
            (telefono, email, WhatsApp) vengono raccolti dati identificativi
            (nome, recapiti) e, nella comunicazione successiva al primo
            contatto, dati relativi allo stato di salute necessari a
            organizzare la visita infermieristica. I dati relativi alla
            salute sono categorie particolari di dati ai sensi dell&rsquo;art.
            9 del Regolamento (UE) 2016/679 (GDPR).
          </p>

          <h2>Finalità e base giuridica</h2>
          <p>
            I dati sono trattati per rispondere alle richieste di
            informazioni, organizzare ed erogare le prestazioni
            infermieristiche richieste ed adempiere agli obblighi di legge
            connessi all&rsquo;attività professionale sanitaria.
          </p>

          <h2>Conservazione</h2>
          <p>
            I dati sono conservati per il tempo necessario a erogare il
            servizio richiesto e nel rispetto dei termini previsti dalla
            normativa sanitaria e fiscale applicabile.
          </p>

          <h2>Diritti dell&rsquo;interessato</h2>
          <p>
            È possibile in ogni momento richiedere accesso, rettifica,
            cancellazione o limitazione del trattamento dei propri dati,
            scrivendo a {business.email} o {business.pec}.
          </p>
        </div>

        <p className={styles.notice}>
          Questo testo è un modello di partenza, non una consulenza legale.
          Trattandosi di dati sanitari (categoria particolare, art. 9 GDPR),
          fallo verificare da un consulente privacy prima di pubblicare il
          sito.
        </p>
      </main>
      <Footer />
    </>
  );
}
