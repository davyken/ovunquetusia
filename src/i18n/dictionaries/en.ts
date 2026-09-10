import type { Dictionary } from "./it";

const dictionary: Dictionary = {
  common: {
    role: "Independent Registered Nurse",
    opiRegistration: "Registered with the Rome Nursing Board (OPI) — Position no. 48541",
    degree:
      'Nursing Degree — University of Rome "Tor Vergata" (2021, 100/110)',
    serviceArea: "Rome and surrounding area",
  },
  nav: {
    links: [
      { href: "/chi-sono", label: "About" },
      { href: "/servizi", label: "Services" },
      { href: "/zone", label: "Areas" },
      { href: "/faq", label: "FAQ" },
      { href: "/contatti", label: "Contact" },
    ],
    callNow: "Call now",
    bookVisit: "Book a visit",
    callAria: "Call",
    emailAria: "Email",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  topBar: {
    tagline: "Rome and surrounding area",
  },
  languageSwitcher: {
    label: "Language",
  },
  hero: {
    eyebrowOpi: "OPI Rome no. 48541",
    headlinePre: "Nursing care comes to you,",
    headlineHighlight: "wherever you are.",
    rotatingPhrases: [
      "Nursing care comes to you, wherever you are.",
      "Dressings, injections and care, right at your door.",
      "A nurse you can trust, wherever you are in Rome.",
    ],
    sub: "Professional at-home nursing care in Rome and the surrounding area: wound dressings, injections, post-surgical care and support for the elderly, with visits planned around your needs.",
    ctaBook: "Book a visit",
    ctaCall: "Call",
    avatarLabels: ["Dressings", "Injections", "Vital signs", "Elderly care"],
    proofText: "Qualified home care, with heart",
    scrollAria: "Scroll to see the services",
    card: {
      title: "Visit summary",
      date: "Today, 3:30 PM",
      rows: [
        { label: "Visit type", value: "Post-surgical dressing" },
        { label: "Vitals", value: "BP 120/80 · SpO2 98% · Temp 36.5°" },
        { label: "Area", value: "Guidonia Montecelio" },
        { label: "Next visit", value: "Thursday, 10:00 AM" },
      ],
    },
  },
  servicesSection: {
    eyebrow: "What I can do for you",
    heading: "Care for every need",
    sub: "At-home nursing services in Rome and the surrounding area, built around you and your family.",
    more: "Learn more →",
  },
  services: [
    {
      slug: "assistenza-infermieristica-domiciliare-roma",
      title: "At-Home Nursing Care",
      shortDescription: "Complete nursing care, in your own home.",
      longDescription:
        "A nursing care plan built around your needs: initial assessment, care planning and regular home visits, in Rome and the surrounding area.",
      icon: "plan",
    },
    {
      slug: "medicazioni-a-domicilio-roma",
      title: "Wound Care & Dressings",
      shortDescription: "Dressing changes and wound care.",
      longDescription:
        "Simple and advanced wound dressings, management of surgical wounds, pressure sores and ulcers, with healing progress checked at every visit.",
      icon: "bandage",
    },
    {
      slug: "iniezioni-terapia-domicilio-roma",
      title: "Injections & Prescribed Therapy",
      shortDescription: "Administration of medically prescribed therapy.",
      longDescription:
        "Administration of intramuscular, subcutaneous and intravenous injections, and management of prescribed therapy according to the patient's care plan.",
      icon: "syringe",
    },
    {
      slug: "parametri-vitali-domicilio-roma",
      title: "Vital Signs Monitoring",
      shortDescription: "Blood pressure, oxygen, blood sugar, temperature.",
      longDescription:
        "Regular monitoring of blood pressure, oxygen saturation, blood sugar and body temperature, with prompt reporting of any abnormal reading.",
      icon: "vitals",
    },
    {
      slug: "gestione-stomie-cateteri-roma",
      title: "Ostomy & Catheter Care",
      shortDescription: "Care and replacement of stomas and urinary catheters.",
      longDescription:
        "Care and replacement of stomas and urinary catheters, with education for patients and family members on day-to-day independent management.",
      icon: "catheter",
    },
    {
      slug: "assistenza-post-operatoria-roma",
      title: "Post-Surgical Care",
      shortDescription: "Nursing support after a surgical procedure.",
      longDescription:
        "Care in the days following surgery: wound checks, management of reported pain, mobilisation support and recovery follow-up.",
      icon: "recovery",
    },
    {
      slug: "assistenza-anziani-domicilio-roma",
      title: "Elderly & Dependent Care",
      shortDescription: "Daily presence and support with everyday activities.",
      longDescription:
        "Ongoing nursing support for elderly or dependent people: hygiene, mobilisation, vitals monitoring and qualified companionship.",
      icon: "elderly",
    },
    {
      slug: "educazione-sanitaria-roma",
      title: "Health Education & Support",
      shortDescription: "Clear guidance for patients and families.",
      longDescription:
        "Practical guidance on therapy, diet and disease management, to help patients and caregivers feel more confident in day-to-day care.",
      icon: "education",
    },
  ],
  howItWorks: {
    eyebrow: "Simple and fast",
    heading: "How it works",
    sub: "Three steps to organise your first home visit.",
    steps: [
      {
        title: "Tell me what you need",
        text: "Call or message me on WhatsApp: tell me about the situation and the kind of care you need.",
      },
      {
        title: "We schedule the visit",
        text: "We find the date, time and address that work best for you, in Rome or the surrounding area.",
      },
      {
        title: "You receive care",
        text: "I come to your home with everything needed and follow up with the care you require.",
      },
    ],
  },
  about: {
    eyebrow: "About me",
    headingPre: "Hi, I'm",
    lead: 'I\'m Carole Estelle Kennang Tsague, a registered nurse who graduated from the University of Rome "Tor Vergata". I chose home care because I believe the best care is care that respects the time and the home of the person receiving it — with presence, listening and clinical skill.',
    portraitPlaceholder: "Professional photo",
    credentials: {
      formazione: "Education",
      albo: "Professional register",
      attivita: "Practice",
      attivitaValuePrefix: "Independent nurse",
      zona: "Service area",
    },
  },
  testimonialsSection: {
    eyebrow: "In their words",
    heading: "What people say about me",
    flag: "Placeholder examples — to be replaced with real patient reviews",
    prev: "Previous testimonial",
    next: "Next testimonial",
    goTo: "Go to testimonial",
  },
  testimonials: [
    {
      quote:
        "Available, punctual and very professional with my mother. She made us feel at ease right away.",
      author: "Family, Guidonia Montecelio",
    },
    {
      quote:
        "Dressings done with great care and clear explanations at every visit. Highly recommended.",
      author: "Patient, Roma Est",
    },
    {
      quote:
        "She followed my husband's post-surgical recovery with consistency and real attention to detail.",
      author: "Family member, Tivoli",
    },
  ],
  zonesSection: {
    eyebrow: "Where I work",
    heading: "Areas served",
    subPrefix: "Based in",
    subSuffix: "with visits across",
    baseLabel: "Home base",
    fallbackNote: "Visits on request",
    cta: "Check availability →",
  },
  zones: [
    { name: "Rome", note: "all districts" },
    { name: "Guidonia Montecelio", note: "base operativa" },
    { name: "Tivoli", note: "" },
    { name: "Roma Est", note: "" },
    { name: "Fonte Nuova", note: "" },
    { name: "Mentana", note: "" },
  ],
  faqSection: {
    eyebrow: "Have questions?",
    heading: "Frequently asked questions",
  },
  faq: [
    {
      question: "Do I need a prescription for injections or therapy?",
      answer:
        "Yes, administering prescribed therapy requires a prescription or care plan from the treating doctor: bring it to the first visit, or send it to me beforehand on WhatsApp.",
    },
    {
      question: "Which areas of Rome and the surrounding area do you cover?",
      answer:
        "I cover all districts of Rome and the eastern province, including Guidonia Montecelio, Tivoli, Fonte Nuova and Mentana. Send me your address and I'll confirm availability.",
    },
    {
      question: "How do I book a home visit?",
      answer:
        "You can call or message me on WhatsApp at 366 117 4111, or fill in the contact form: I'll get back to you to arrange the date and time.",
    },
    {
      question: "Are visits available on weekends?",
      answer:
        "Yes, depending on availability and urgency I can arrange weekend visits: mention it in your request and we'll find the best time together.",
    },
    {
      question: "Can you provide ongoing care for an elderly family member?",
      answer:
        "Yes, I can set up a plan of regular visits (weekly or more frequent) for vitals monitoring, therapy management and day-to-day support.",
    },
  ],
  contact: {
    eyebrow: "Let's talk",
    heading: "Contact",
    labels: {
      telefono: "Phone",
      email: "Email",
      indirizzo: "Address",
      albo: "Professional register",
    },
    form: {
      name: "Full name",
      namePlaceholder: "Your name",
      zone: "Area / neighbourhood",
      zonePlaceholder: "E.g. Guidonia, Roma Est...",
      need: "What do you need?",
      needPlaceholder: "E.g. wound dressing, care for an elderly relative...",
      submit: "Send request via WhatsApp",
    },
    whatsapp: {
      greeting: "Hi",
      zonePrefix: "Area:",
      needPrefix: "I need:",
      needFallback: "I'd like information about a home visit.",
    },
  },
  finalCta: {
    eyebrow: "Your care starts here",
    heading: "Ready to help you, wherever you are",
    sub: "Write to me today: let's organise your first home visit in Rome or the surrounding area.",
    cta: "Book a visit",
  },
  footer: {
    privacy: "Privacy Policy",
    cookie: "Cookie Policy",
  },
  whatsappFloat: {
    label: "Quick help",
    prefill: "I'd like information about a home visit.",
  },
  scrollToTop: {
    aria: "Back to top",
  },
  socialSidebar: {
    followLabel: "Follow me",
  },
  servicePage: {
    badge: "Home service",
    titleSuffix: "in Rome",
    ctaInfo: "Request information",
    ctaCall: "Call",
    howTitle: "How it works",
    howTextPre:
      "After an initial phone assessment, we organise the home visit in your area, covering",
    howTextPost:
      "Every visit is documented and, if needed, we plan the following visits together.",
    whoTitle: "Who provides the service",
    relatedTitle: "Other services",
  },
  pages: {
    home: {
      title: "Home Nursing Care in Rome",
      description:
        "At-home nursing care in Rome and the surrounding area: wound dressings, injections, post-surgical care and support for the elderly. Independent registered nurse, OPI Rome no. 48541.",
    },
    chiSono: {
      title: "About",
      description:
        "Carole Estelle Kennang Tsague, independent registered nurse in Rome. Nursing degree from Tor Vergata, registered with the OPI Nursing Board of Rome.",
    },
    servizi: {
      title: "Services",
      description:
        "At-home nursing care in Rome: wound dressings, injections, vital signs, post-surgical care, elderly and dependent care.",
    },
    zone: {
      title: "Areas Served",
      description:
        "At-home nursing care in Rome and the surrounding area: Guidonia Montecelio, Tivoli, Roma Est, Fonte Nuova, Mentana.",
    },
    faq: {
      title: "Frequently Asked Questions",
      description:
        "Frequently asked questions about at-home nursing care in Rome: prescriptions, areas served, booking, availability.",
    },
    contatti: {
      title: "Contact",
      description:
        "Contact Carole Estelle Kennang Tsague for at-home nursing care in Rome: phone, WhatsApp, email and studio address.",
    },
  },
  legal: {
    draftNotePrivacy: "Draft — to be reviewed by a professional before publishing",
    draftNoteCookie:
      "Draft — update according to the analytics/marketing tools actually installed",
    privacy: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "Data controller",
          body: "{legalName}, {role}, {piva}, based at {address}. Contact: {email}.",
        },
        {
          heading: "Data collected",
          body: "Through the contact form and the channels listed on the site (phone, email, WhatsApp), identifying data (name, contact details) is collected, and, in communication following the first contact, health-related data necessary to organise the nursing visit. Health data is a special category of data under Article 9 of Regulation (EU) 2016/679 (GDPR).",
        },
        {
          heading: "Purpose and legal basis",
          body: "Data is processed to respond to information requests, organise and provide the requested nursing services, and comply with legal obligations related to the healthcare profession.",
        },
        {
          heading: "Retention",
          body: "Data is retained for as long as necessary to provide the requested service and in compliance with applicable healthcare and tax regulations.",
        },
        {
          heading: "Your rights",
          body: "You may at any time request access, correction, deletion or restriction of processing of your data, by writing to {email} or {pec}.",
        },
      ],
      notice:
        "This text is a starting template, not legal advice. Since it involves health data (special category, GDPR Art. 9), have it reviewed by a privacy consultant before publishing the site.",
    },
    cookie: {
      title: "Cookie Policy",
      sections: [
        {
          heading: "What cookies are",
          body: "Cookies are small text files that visited sites send to the user's device, where they are stored to be sent back to those same sites on the next visit.",
        },
        {
          heading: "Cookies used on this site",
          list: [
            "Technical cookies, necessary for the site to function.",
            "Any statistical analytics cookies (e.g. Google Analytics), to be activated only with user consent.",
          ],
        },
        {
          heading: "Managing cookies",
          body: "You can manage your cookie preferences directly from your browser settings, or via the cookie banner shown on the site on first visit.",
        },
        {
          heading: "Contact",
          body: "For questions about this policy: {email}.",
        },
      ],
      notice:
        "This text is a starting template. Update it with the actual list of third-party cookies/services installed (e.g. Google Analytics, ad pixels) and connect a GDPR-compliant consent banner before publishing the site.",
    },
  },
};

export default dictionary;
