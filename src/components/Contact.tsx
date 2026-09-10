"use client";

import { useState } from "react";
import { business } from "@/lib/business";
import { MapEmbed } from "./MapEmbed";
import styles from "./Contact.module.css";

export function Contact() {
  const [name, setName] = useState("");
  const [zone, setZone] = useState("");
  const [need, setNeed] = useState("");

  const message = [
    `Ciao ${business.displayName}, sono ${name || "___"}.`,
    zone ? `Zona: ${zone}.` : "",
    need ? `Ho bisogno di: ${need}.` : "Vorrei informazioni su una visita a domicilio.",
  ]
    .filter(Boolean)
    .join(" ");

  const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section id="contatti" className={`${styles.section} container`}>
      <div className={styles.head}>
        <span className="eyebrow">Parliamone</span>
        <h2 className={styles.heading}>Contatti</h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.left}>
          <dl className={styles.info}>
            <div>
              <dt>Telefono</dt>
              <dd>
                <a href={business.phoneHref}>{business.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </dd>
            </div>
            <div>
              <dt>Indirizzo</dt>
              <dd>{business.addressLine}</dd>
            </div>
            <div>
              <dt>Albo professionale</dt>
              <dd>{business.opiRegistration}</dd>
            </div>
          </dl>

          <MapEmbed />
        </div>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            window.open(whatsappHref, "_blank", "noopener,noreferrer");
          }}
        >
          <label htmlFor="contact-name">Nome e cognome</label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Il tuo nome"
            required
          />

          <label htmlFor="contact-zone">Zona / quartiere</label>
          <input
            id="contact-zone"
            type="text"
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            placeholder="Es. Guidonia, Roma Est..."
          />

          <label htmlFor="contact-need">Di cosa hai bisogno?</label>
          <textarea
            id="contact-need"
            rows={3}
            value={need}
            onChange={(e) => setNeed(e.target.value)}
            placeholder="Es. medicazione, assistenza a un familiare anziano..."
          />

          <button type="submit" className={`pillPrimary ${styles.submit}`}>
            Invia richiesta su WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
