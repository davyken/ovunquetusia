const dictionary = {
  common: {
    role: "Infermiera libera professionista",
    opiRegistration: "Iscritta all'Albo OPI di Roma — Posizione n. 48541",
    degree:
      'Laurea in Infermieristica — Università degli Studi di Roma "Tor Vergata" (2021, 100/110)',
    serviceArea: "Roma e provincia",
  },
  nav: {
    links: [
      { href: "/chi-sono", label: "Chi Sono" },
      { href: "/servizi", label: "Servizi" },
      { href: "/zone", label: "Zone" },
      { href: "/faq", label: "FAQ" },
      { href: "/contatti", label: "Contatti" },
    ],
    callNow: "Chiama ora",
    bookVisit: "Prenota una visita",
    callAria: "Chiama",
    emailAria: "Scrivi a",
    menuOpen: "Apri il menu",
    menuClose: "Chiudi il menu",
  },
  topBar: {
    tagline: "Roma e provincia",
  },
  languageSwitcher: {
    label: "Lingua",
  },
  hero: {
    eyebrowOpi: "OPI Roma n. 48541",
    headlinePre: "L'assistenza infermieristica arriva da te,",
    headlineHighlight: "ovunque tu sia.",
    rotatingPhrases: [
      "L'assistenza infermieristica arriva da te, ovunque tu sia.",
      "Medicazioni, iniezioni e cura, direttamente a casa tua.",
      "Un'infermiera di fiducia, ovunque tu sia a Roma.",
    ],
    sub: "Cure infermieristiche professionali a domicilio a Roma e provincia: medicazioni, iniezioni, assistenza post-operatoria e supporto agli anziani, con visite pianificate attorno alle tue esigenze.",
    ctaBook: "Prenota una visita",
    ctaCall: "Chiama",
    avatarLabels: ["Medicazioni", "Iniezioni", "Parametri vitali", "Anziani"],
    proofText: "Assistenza qualificata a domicilio, con cura",
    scrollAria: "Scorri per vedere i servizi",
    card: {
      title: "Scheda di visita",
      date: "Oggi, ore 15:30",
      rows: [
        { label: "Intervento", value: "Medicazione post-operatoria" },
        { label: "Parametri", value: "PA 120/80 · SpO2 98% · T 36,5°" },
        { label: "Zona", value: "Guidonia Montecelio" },
        { label: "Prossima visita", value: "Giovedì, ore 10:00" },
      ],
    },
  },
  servicesSection: {
    eyebrow: "Cosa posso fare per te",
    heading: "Assistenza per ogni esigenza",
    sub: "Servizi infermieristici a domicilio a Roma e provincia, pensati attorno a te e alla tua famiglia.",
    more: "Scopri di più →",
  },
  services: [
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
  ],
  howItWorks: {
    eyebrow: "Semplice e rapido",
    heading: "Come funziona",
    sub: "Tre passaggi per organizzare la tua prima visita a domicilio.",
    steps: [
      {
        title: "Racconta il tuo bisogno",
        text: "Chiamami o scrivimi su WhatsApp: mi spieghi la situazione e di che assistenza hai bisogno.",
      },
      {
        title: "Fissiamo la visita",
        text: "Troviamo insieme data, orario e indirizzo più comodi per te, a Roma o in provincia.",
      },
      {
        title: "Ricevi l'assistenza",
        text: "Arrivo a casa tua con tutto il necessario e ti seguo con la cura di cui hai bisogno.",
      },
    ],
  },
  about: {
    eyebrow: "Chi sono",
    headingPre: "Ciao, sono",
    lead: 'Sono Carole Estelle Kennang Tsague, infermiera laureata all\'Università degli Studi di Roma "Tor Vergata". Ho scelto l\'assistenza domiciliare perché credo che le cure migliori siano quelle che rispettano i tempi e la casa della persona che le riceve — con presenza, ascolto e competenza clinica.',
    portraitPlaceholder: "Foto professionale",
    credentials: {
      formazione: "Formazione",
      albo: "Albo professionale",
      attivita: "Attività",
      attivitaValuePrefix: "Libera professionista",
      zona: "Zona operativa",
    },
  },
  testimonialsSection: {
    eyebrow: "Le loro parole",
    heading: "Cosa dicono di me",
    flag: "Esempi segnaposto — da sostituire con recensioni reali dei pazienti",
    prev: "Testimonianza precedente",
    next: "Testimonianza successiva",
    goTo: "Vai alla testimonianza",
  },
  testimonials: [
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
  ],
  zonesSection: {
    eyebrow: "Dove opero",
    heading: "Zone servite",
    subPrefix: "Base operativa a",
    subSuffix: "con interventi in tutta",
    baseLabel: "Base operativa",
    fallbackNote: "Interventi su richiesta",
    cta: "Richiedi disponibilità →",
  },
  zones: [
    { name: "Roma", note: "tutti i municipi" },
    { name: "Guidonia Montecelio", note: "base operativa" },
    { name: "Tivoli", note: "" },
    { name: "Roma Est", note: "" },
    { name: "Fonte Nuova", note: "" },
    { name: "Mentana", note: "" },
  ],
  faqSection: {
    eyebrow: "Hai dubbi?",
    heading: "Domande frequenti",
  },
  faq: [
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
        "Puoi chiamare o scrivere su WhatsApp al 366 117 4111, oppure compilare il modulo di contatto: ti ricontatto per organizzare data e orario dell'intervento.",
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
  ],
  contact: {
    eyebrow: "Parliamone",
    heading: "Contatti",
    labels: {
      telefono: "Telefono",
      email: "Email",
      indirizzo: "Indirizzo",
      albo: "Albo professionale",
    },
    form: {
      name: "Nome e cognome",
      namePlaceholder: "Il tuo nome",
      zone: "Zona / quartiere",
      zonePlaceholder: "Es. Guidonia, Roma Est...",
      need: "Di cosa hai bisogno?",
      needPlaceholder: "Es. medicazione, assistenza a un familiare anziano...",
      submit: "Invia richiesta su WhatsApp",
    },
    whatsapp: {
      greeting: "Ciao",
      zonePrefix: "Zona:",
      needPrefix: "Ho bisogno di:",
      needFallback: "Vorrei informazioni su una visita a domicilio.",
    },
  },
  finalCta: {
    eyebrow: "La tua assistenza inizia qui",
    heading: "Pronta ad aiutarti, ovunque tu sia",
    sub: "Scrivimi oggi stesso: organizziamo insieme la prima visita a domicilio a Roma o in provincia.",
    cta: "Prenota una visita",
  },
  footer: {
    privacy: "Privacy Policy",
    cookie: "Cookie Policy",
  },
  whatsappFloat: {
    label: "Aiuto rapido",
    prefill: "vorrei informazioni su una visita a domicilio.",
  },
  scrollToTop: {
    aria: "Torna all'inizio della pagina",
  },
  socialSidebar: {
    followLabel: "Seguimi",
  },
  servicePage: {
    badge: "Servizio a domicilio",
    titleSuffix: "a Roma",
    ctaInfo: "Richiedi informazioni",
    ctaCall: "Chiama",
    howTitle: "Come funziona",
    howTextPre:
      "Dopo una prima valutazione telefonica organizziamo la visita a domicilio nella tua zona, in area",
    howTextPost:
      "Ogni intervento viene documentato e, se necessario, pianifichiamo insieme le visite successive.",
    whoTitle: "Chi eroga il servizio",
    relatedTitle: "Altri servizi",
  },
  pages: {
    home: {
      title: "Infermiera a domicilio a Roma",
      description:
        "Assistenza infermieristica a domicilio a Roma e provincia: medicazioni, iniezioni, assistenza post-operatoria e supporto agli anziani. Infermiera libera professionista, iscritta OPI Roma n. 48541.",
    },
    chiSono: {
      title: "Chi Sono",
      description:
        "Carole Estelle Kennang Tsague, infermiera libera professionista a Roma. Laurea in Infermieristica Tor Vergata, iscritta all'Albo OPI di Roma.",
    },
    servizi: {
      title: "Servizi",
      description:
        "Assistenza infermieristica a domicilio a Roma: medicazioni, iniezioni, parametri vitali, assistenza post-operatoria, anziani e non autosufficienti.",
    },
    zone: {
      title: "Zone Servite",
      description:
        "Assistenza infermieristica a domicilio a Roma e provincia: Guidonia Montecelio, Tivoli, Roma Est, Fonte Nuova, Mentana.",
    },
    faq: {
      title: "Domande Frequenti",
      description:
        "Le domande più frequenti sull'assistenza infermieristica a domicilio a Roma: prescrizioni, zone servite, prenotazione, disponibilità.",
    },
    contatti: {
      title: "Contatti",
      description:
        "Contatta Carole Estelle Kennang Tsague per un'assistenza infermieristica a domicilio a Roma: telefono, WhatsApp, email e indirizzo dello studio.",
    },
  },
  legal: {
    draftNotePrivacy:
      "Bozza — da far revisionare da un professionista prima della pubblicazione",
    draftNoteCookie:
      "Bozza — da aggiornare in base agli strumenti di analisi/marketing effettivamente installati",
    privacy: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "Titolare del trattamento",
          body: "{legalName}, {role}, {piva}, con sede in {address}. Contatto: {email}.",
        },
        {
          heading: "Dati raccolti",
          body: "Attraverso il modulo di contatto e i canali indicati sul sito (telefono, email, WhatsApp) vengono raccolti dati identificativi (nome, recapiti) e, nella comunicazione successiva al primo contatto, dati relativi allo stato di salute necessari a organizzare la visita infermieristica. I dati relativi alla salute sono categorie particolari di dati ai sensi dell'art. 9 del Regolamento (UE) 2016/679 (GDPR).",
        },
        {
          heading: "Finalità e base giuridica",
          body: "I dati sono trattati per rispondere alle richieste di informazioni, organizzare ed erogare le prestazioni infermieristiche richieste ed adempiere agli obblighi di legge connessi all'attività professionale sanitaria.",
        },
        {
          heading: "Conservazione",
          body: "I dati sono conservati per il tempo necessario a erogare il servizio richiesto e nel rispetto dei termini previsti dalla normativa sanitaria e fiscale applicabile.",
        },
        {
          heading: "Diritti dell'interessato",
          body: "È possibile in ogni momento richiedere accesso, rettifica, cancellazione o limitazione del trattamento dei propri dati, scrivendo a {email} o {pec}.",
        },
      ],
      notice:
        "Questo testo è un modello di partenza, non una consulenza legale. Trattandosi di dati sanitari (categoria particolare, art. 9 GDPR), fallo verificare da un consulente privacy prima di pubblicare il sito.",
    },
    cookie: {
      title: "Cookie Policy",
      sections: [
        {
          heading: "Cosa sono i cookie",
          body: "I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell'utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.",
        },
        {
          heading: "Cookie utilizzati su questo sito",
          list: [
            "Cookie tecnici, necessari al funzionamento del sito.",
            "Eventuali cookie di analisi statistica (es. Google Analytics), da attivare solo previo consenso dell'utente.",
          ],
        },
        {
          heading: "Come gestire i cookie",
          body: "È possibile gestire le preferenze sui cookie direttamente dalle impostazioni del proprio browser, oppure tramite il banner dei cookie presente sul sito al primo accesso.",
        },
        {
          heading: "Contatti",
          body: "Per domande su questa policy: {email}.",
        },
      ],
      notice:
        "Questo testo è un modello di partenza. Aggiornalo con l'elenco reale dei cookie/servizi terzi installati (es. Google Analytics, pixel pubblicitari) e collega un banner di consenso conforme al GDPR prima di pubblicare il sito.",
    },
  },
};

export default dictionary;
export type Dictionary = typeof dictionary;
