import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { business } from "@/lib/business";
import { getDictionary, type Locale } from "@/i18n";
import styles from "./Legal.module.css";

function fillTemplate(text: string, locale: Locale) {
  const dict = getDictionary(locale);
  return text
    .replaceAll("{legalName}", business.legalName)
    .replaceAll("{role}", dict.common.role)
    .replaceAll("{piva}", business.piva)
    .replaceAll("{address}", business.addressLine)
    .replaceAll("{email}", business.email)
    .replaceAll("{pec}", business.pec);
}

export function LegalContent({
  locale,
  kind,
}: {
  locale: Locale;
  kind: "privacy" | "cookie";
}) {
  const dict = getDictionary(locale);
  const doc = dict.legal[kind];
  const draftNote = kind === "privacy" ? dict.legal.draftNotePrivacy : dict.legal.draftNoteCookie;

  return (
    <>
      <Nav locale={locale} />
      <main className={`container ${styles.section}`}>
        <h1 className={styles.title}>{doc.title}</h1>
        <span className={styles.updated}>{draftNote}</span>

        <div className={styles.body}>
          {doc.sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              {"body" in section && section.body && <p>{fillTemplate(section.body, locale)}</p>}
              {"list" in section && section.list && (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <p className={styles.notice}>{doc.notice}</p>
      </main>
      <Footer locale={locale} />
    </>
  );
}
