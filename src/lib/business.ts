// Dati reali dello studio infermieristico — fonte: documenti forniti dalla cliente.
// Non aggiungere qui dati sensibili (codice fiscale, n. tessera sanitaria, ecc.).
// Solo fatti invarianti per lingua: le stringhe tradotte vivono in src/i18n/dictionaries.

export const business = {
  legalName: "Kennang Tsague Carole Estelle",
  displayName: "Carole Estelle",
  brand: "OvunqueTuSia",
  phone: "+39 366 117 4111",
  phoneHref: "tel:+393661174111",
  whatsappNumber: "393661174111",
  email: "Carkeng@hotmail.com",
  pec: "Kennangtsague.caroleestelle@pec.opi.roma.it",
  addressLine: "Via Caserta 6, 00012 Guidonia Montecelio (RM)",
  opiId: "48541",
  piva: "P.IVA 15268591003",
  domain: "ovunquetusia.com",
  siteUrl: "https://ovunquetusia.com",
} as const;

// TODO: sostituire con i profili reali di Carole prima della pubblicazione.
export const socials = [
  { name: "Instagram", href: "#", icon: "instagram" },
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "Twitter", href: "#", icon: "twitter" },
] as const;
