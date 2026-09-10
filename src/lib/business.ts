// Dati reali dello studio infermieristico — fonte: documenti forniti dalla cliente.
// Non aggiungere qui dati sensibili (codice fiscale, n. tessera sanitaria, ecc.).

export const business = {
  legalName: "Kennang Tsague Carole Estelle",
  displayName: "Carole Estelle",
  brand: "OvunqueTuSia",
  tagline: "L'assistenza infermieristica arriva da te, ovunque tu sia.",
  role: "Infermiera libera professionista",
  phone: "+39 366 117 4111",
  phoneHref: "tel:+393661174111",
  whatsappNumber: "393661174111",
  email: "Carkeng@hotmail.com",
  pec: "Kennangtsague.caroleestelle@pec.opi.roma.it",
  addressLine: "Via Caserta 6, 00012 Guidonia Montecelio (RM)",
  serviceArea: "Roma e provincia",
  opiRegistration: "Iscritta all'Albo OPI di Roma — Posizione n. 48541",
  opiId: "48541",
  degree:
    'Laurea in Infermieristica — Università degli Studi di Roma "Tor Vergata" (2021, 100/110)',
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

export type ServiceItem = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: "bandage" | "syringe" | "vitals" | "recovery" | "elderly" | "education" | "catheter" | "plan";
};

export const services: ServiceItem[] = [
  {
    slug: "assistenza-infermieristica-domiciliare-roma",
    title: "Assistenza infermieristica domiciliare",
    shortDescription: "Cure infermieristiche complete, a casa tua.",
    longDescription:
      "Un percorso di assistenza infermieristica pensato attorno alle tue esigenze: valutazione iniziale, pianificazione degli interventi e visite regolari a domicilio, a Roma e provincia.",
    icon: "plan",
  },
  {
    slug: "medicazioni-a-domicilio-roma",
    title: "Medicazioni e gestione delle ferite",
    shortDescription: "Cambio e sostituzione medicazioni, cura delle ferite.",
    longDescription:
      "Medicazioni semplici e avanzate, gestione di ferite chirurgiche, lesioni da pressione e ulcere, con controllo dell'evoluzione della guarigione a ogni visita.",
    icon: "bandage",
  },
  {
    slug: "iniezioni-terapia-domicilio-roma",
    title: "Iniezioni e terapia prescritta",
    shortDescription: "Somministrazione di terapie su prescrizione medica.",
    longDescription:
      "Somministrazione di iniezioni intramuscolari, sottocutanee ed endovenose e gestione della terapia prescritta, nel rispetto del piano terapeutico del paziente.",
    icon: "syringe",
  },
  {
    slug: "parametri-vitali-domicilio-roma",
    title: "Rilevazione dei parametri vitali",
    shortDescription: "Pressione, saturazione, glicemia, temperatura.",
    longDescription:
      "Monitoraggio regolare di pressione arteriosa, saturazione, glicemia e temperatura corporea, con segnalazione tempestiva di ogni valore fuori norma.",
    icon: "vitals",
  },
  {
    slug: "gestione-stomie-cateteri-roma",
    title: "Gestione stomie e cateteri",
    shortDescription: "Cura e sostituzione di stomie e cateteri vescicali.",
    longDescription:
      "Gestione, cura e sostituzione di stomie e cateteri vescicali, con educazione del paziente e dei familiari alla gestione quotidiana in autonomia.",
    icon: "catheter",
  },
  {
    slug: "assistenza-post-operatoria-roma",
    title: "Assistenza post-operatoria",
    shortDescription: "Supporto infermieristico dopo un intervento.",
    longDescription:
      "Assistenza nei giorni successivi a un intervento chirurgico: controllo della ferita, gestione del dolore riferito, mobilizzazione e supporto al recupero.",
    icon: "recovery",
  },
  {
    slug: "assistenza-anziani-domicilio-roma",
    title: "Assistenza agli anziani e non autosufficienti",
    shortDescription: "Presenza quotidiana e supporto nelle attività.",
    longDescription:
      "Supporto infermieristico continuativo per persone anziane o non autosufficienti: igiene, mobilizzazione, controllo dei parametri e compagnia qualificata.",
    icon: "elderly",
  },
  {
    slug: "educazione-sanitaria-roma",
    title: "Educazione sanitaria e supporto al paziente",
    shortDescription: "Informazioni chiare per pazienti e familiari.",
    longDescription:
      "Spiegazioni pratiche su terapie, alimentazione e gestione della malattia, per rendere paziente e caregiver più sicuri nella gestione quotidiana.",
    icon: "education",
  },
];

export const zones = [
  { name: "Roma", note: "tutti i municipi" },
  { name: "Guidonia Montecelio", note: "base operativa" },
  { name: "Tivoli", note: "" },
  { name: "Roma Est", note: "" },
  { name: "Fonte Nuova", note: "" },
  { name: "Mentana", note: "" },
];

export const faqItems = [
  {
    question: "Serve la prescrizione medica per le iniezioni o la terapia?",
    answer:
      "Sì, per la somministrazione di terapie prescritte è necessaria la prescrizione o il piano terapeutico del medico curante: portalo con te alla prima visita, oppure inviamelo in anticipo su WhatsApp.",
  },
  {
    question: "In quali zone di Roma e provincia operi?",
    answer:
      "Copro Roma città in tutti i municipi e la provincia est, tra cui Guidonia Montecelio, Tivoli, Fonte Nuova e Mentana. Scrivimi il tuo indirizzo e ti confermo la disponibilità.",
  },
  {
    question: "Come prenoto una visita a domicilio?",
    answer:
      "Puoi chiamare o scrivere su WhatsApp al 366 117 4111, oppure compilare il modulo di contatto qui sotto: ti ricontatto per organizzare data e orario dell'intervento.",
  },
  {
    question: "Le visite sono disponibili anche nel weekend?",
    answer:
      "Sì, in base alla disponibilità e all'urgenza posso organizzare visite anche nel weekend: indicalo nella richiesta e troviamo insieme l'orario più adatto.",
  },
  {
    question: "Puoi occuparti di un familiare anziano su base continuativa?",
    answer:
      "Sì, posso costruire un piano di visite regolari (settimanali o più frequenti) per il controllo dei parametri, la gestione della terapia e il supporto quotidiano.",
  },
];

export const testimonials = [
  {
    quote:
      "Disponibile, puntuale e molto professionale con mia madre. Ci ha messo subito a nostro agio.",
    author: "Famiglia, Guidonia Montecelio",
  },
  {
    quote:
      "Medicazioni fatte con grande cura e spiegazioni chiare a ogni visita. Consigliata.",
    author: "Paziente, Roma Est",
  },
  {
    quote:
      "Ha seguito il recupero post-operatorio di mio marito con costanza e attenzione ai dettagli.",
    author: "Familiare, Tivoli",
  },
];
