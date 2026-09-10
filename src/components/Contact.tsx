"use client";

import { useState } from "react";
import { business } from "@/lib/business";
import { MapEmbed } from "./MapEmbed";
import { getDictionary, type Locale } from "@/i18n";
import styles from "./Contact.module.css";

export function Contact({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const c = dict.contact;
  const [name, setName] = useState("");
  const [zone, setZone] = useState("");
  const [need, setNeed] = useState("");

  const message = [
    `${c.whatsapp.greeting} ${business.displayName}, ${name || "___"}.`,
    zone ? `${c.whatsapp.zonePrefix} ${zone}.` : "",
    need ? `${c.whatsapp.needPrefix} ${need}.` : c.whatsapp.needFallback,
  ]
    .filter(Boolean)
    .join(" ");

  const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section id="contatti" className={`${styles.section} container`}>
      <div className={styles.head}>
        <span className="eyebrow">{c.eyebrow}</span>
        <h2 className={styles.heading}>{c.heading}</h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.left}>
          <dl className={styles.info}>
            <div>
              <dt>{c.labels.telefono}</dt>
              <dd>
                <a href={business.phoneHref}>{business.phone}</a>
              </dd>
            </div>
            <div>
              <dt>{c.labels.email}</dt>
              <dd>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </dd>
            </div>
            <div>
              <dt>{c.labels.indirizzo}</dt>
              <dd>{business.addressLine}</dd>
            </div>
            <div>
              <dt>{c.labels.albo}</dt>
              <dd>{dict.common.opiRegistration}</dd>
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
          <label htmlFor="contact-name">{c.form.name}</label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={c.form.namePlaceholder}
            required
          />

          <label htmlFor="contact-zone">{c.form.zone}</label>
          <input
            id="contact-zone"
            type="text"
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            placeholder={c.form.zonePlaceholder}
          />

          <label htmlFor="contact-need">{c.form.need}</label>
          <textarea
            id="contact-need"
            rows={3}
            value={need}
            onChange={(e) => setNeed(e.target.value)}
            placeholder={c.form.needPlaceholder}
          />

          <button type="submit" className={`pillPrimary ${styles.submit}`}>
            {c.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
