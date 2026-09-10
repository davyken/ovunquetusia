import type { Dictionary } from "./it";

const dictionary: Dictionary = {
  common: {
    role: "Infirmière libérale",
    opiRegistration: "Inscrite à l'Ordre des Infirmiers de Rome (OPI) — Position n° 48541",
    degree:
      'Diplôme en sciences infirmières — Université de Rome "Tor Vergata" (2021, 100/110)',
    serviceArea: "Rome et sa province",
  },
  nav: {
    links: [
      { href: "/chi-sono", label: "À propos" },
      { href: "/servizi", label: "Services" },
      { href: "/zone", label: "Zones" },
      { href: "/faq", label: "FAQ" },
      { href: "/contatti", label: "Contact" },
    ],
    callNow: "Appeler",
    bookVisit: "Réserver une visite",
    callAria: "Appeler",
    emailAria: "Écrire à",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
  },
  topBar: {
    tagline: "Rome et sa province",
  },
  languageSwitcher: {
    label: "Langue",
  },
  hero: {
    eyebrowOpi: "OPI Rome n° 48541",
    headlinePre: "Les soins infirmiers viennent à vous,",
    headlineHighlight: "où que vous soyez.",
    sub: "Soins infirmiers professionnels à domicile à Rome et dans sa province : pansements, injections, suivi post-opératoire et soutien aux personnes âgées, avec des visites organisées selon vos besoins.",
    ctaBook: "Réserver une visite",
    ctaCall: "Appeler",
    avatarLabels: ["Pansements", "Injections", "Constantes vitales", "Personnes âgées"],
    proofText: "Des soins à domicile qualifiés, avec le cœur",
    scrollAria: "Défiler pour voir les services",
    card: {
      title: "Fiche de visite",
      date: "Aujourd'hui, 15h30",
      rows: [
        { label: "Intervention", value: "Pansement post-opératoire" },
        { label: "Constantes", value: "TA 120/80 · SpO2 98 % · T 36,5°" },
        { label: "Zone", value: "Guidonia Montecelio" },
        { label: "Prochaine visite", value: "Jeudi, 10h00" },
      ],
    },
  },
  servicesSection: {
    eyebrow: "Ce que je peux faire pour vous",
    heading: "Des soins pour chaque besoin",
    sub: "Services infirmiers à domicile à Rome et dans sa province, pensés pour vous et votre famille.",
    more: "En savoir plus →",
  },
  services: [
    {
      slug: "assistenza-infermieristica-domiciliare-roma",
      title: "Soins infirmiers à domicile",
      shortDescription: "Des soins infirmiers complets, chez vous.",
      longDescription:
        "Un parcours de soins infirmiers pensé autour de vos besoins : évaluation initiale, planification des interventions et visites régulières à domicile, à Rome et dans sa province.",
      icon: "plan",
    },
    {
      slug: "medicazioni-a-domicilio-roma",
      title: "Pansements et soins des plaies",
      shortDescription: "Changement et réfection des pansements, soin des plaies.",
      longDescription:
        "Pansements simples et complexes, prise en charge des plaies chirurgicales, escarres et ulcères, avec suivi de la cicatrisation à chaque visite.",
      icon: "bandage",
    },
    {
      slug: "iniezioni-terapia-domicilio-roma",
      title: "Injections et traitement prescrit",
      shortDescription: "Administration de traitements sur prescription médicale.",
      longDescription:
        "Administration d'injections intramusculaires, sous-cutanées et intraveineuses, et gestion du traitement prescrit, dans le respect du plan thérapeutique du patient.",
      icon: "syringe",
    },
    {
      slug: "parametri-vitali-domicilio-roma",
      title: "Prise des constantes vitales",
      shortDescription: "Tension, saturation, glycémie, température.",
      longDescription:
        "Suivi régulier de la tension artérielle, de la saturation, de la glycémie et de la température corporelle, avec signalement rapide de toute valeur anormale.",
      icon: "vitals",
    },
    {
      slug: "gestione-stomie-cateteri-roma",
      title: "Soins des stomies et cathéters",
      shortDescription: "Soin et remplacement des stomies et sondes urinaires.",
      longDescription:
        "Soin, entretien et remplacement des stomies et sondes urinaires, avec accompagnement du patient et de ses proches vers une gestion autonome au quotidien.",
      icon: "catheter",
    },
    {
      slug: "assistenza-post-operatoria-roma",
      title: "Suivi post-opératoire",
      shortDescription: "Accompagnement infirmier après une intervention.",
      longDescription:
        "Accompagnement dans les jours suivant une intervention chirurgicale : surveillance de la plaie, gestion de la douleur signalée, aide à la mobilisation et suivi du rétablissement.",
      icon: "recovery",
    },
    {
      slug: "assistenza-anziani-domicilio-roma",
      title: "Aide aux personnes âgées et dépendantes",
      shortDescription: "Présence quotidienne et aide dans les activités.",
      longDescription:
        "Accompagnement infirmier continu pour personnes âgées ou dépendantes : hygiène, mobilisation, suivi des constantes et présence qualifiée.",
      icon: "elderly",
    },
    {
      slug: "educazione-sanitaria-roma",
      title: "Éducation à la santé et accompagnement",
      shortDescription: "Des explications claires pour patients et familles.",
      longDescription:
        "Explications concrètes sur les traitements, l'alimentation et la gestion de la maladie, pour aider patients et aidants à se sentir plus confiants au quotidien.",
      icon: "education",
    },
  ],
  howItWorks: {
    eyebrow: "Simple et rapide",
    heading: "Comment ça marche",
    sub: "Trois étapes pour organiser votre première visite à domicile.",
    steps: [
      {
        title: "Expliquez-moi votre besoin",
        text: "Appelez-moi ou écrivez-moi sur WhatsApp : expliquez-moi la situation et le type d'aide dont vous avez besoin.",
      },
      {
        title: "Nous fixons la visite",
        text: "Nous trouvons ensemble la date, l'heure et l'adresse qui vous conviennent, à Rome ou dans la province.",
      },
      {
        title: "Vous recevez les soins",
        text: "J'arrive chez vous avec tout le nécessaire et je vous accompagne avec les soins dont vous avez besoin.",
      },
    ],
  },
  about: {
    eyebrow: "À propos",
    headingPre: "Bonjour, je suis",
    lead: 'Je suis Carole Estelle Kennang Tsague, infirmière diplômée de l\'Université de Rome "Tor Vergata". J\'ai choisi les soins à domicile car je crois que les meilleurs soins sont ceux qui respectent le rythme et le foyer de la personne qui les reçoit — avec présence, écoute et compétence clinique.',
    portraitPlaceholder: "Photo professionnelle",
    credentials: {
      formazione: "Formation",
      albo: "Ordre professionnel",
      attivita: "Activité",
      attivitaValuePrefix: "Infirmière libérale",
      zona: "Zone d'intervention",
    },
  },
  testimonialsSection: {
    eyebrow: "Leurs mots",
    heading: "Ce qu'ils disent de moi",
    flag: "Exemples provisoires — à remplacer par de vrais avis de patients",
    prev: "Témoignage précédent",
    next: "Témoignage suivant",
    goTo: "Aller au témoignage",
  },
  testimonials: [
    {
      quote:
        "Disponible, ponctuelle et très professionnelle avec ma mère. Elle nous a tout de suite mis en confiance.",
      author: "Famille, Guidonia Montecelio",
    },
    {
      quote:
        "Des pansements faits avec beaucoup de soin et des explications claires à chaque visite. Je recommande.",
      author: "Patient, Roma Est",
    },
    {
      quote:
        "Elle a suivi la convalescence post-opératoire de mon mari avec constance et attention aux détails.",
      author: "Proche, Tivoli",
    },
  ],
  zonesSection: {
    eyebrow: "Où j'interviens",
    heading: "Zones desservies",
    subPrefix: "Basée à",
    subSuffix: "avec des interventions dans tout",
    baseLabel: "Zone de base",
    fallbackNote: "Interventions sur demande",
    cta: "Vérifier la disponibilité →",
  },
  zones: [
    { name: "Rome", note: "tous les arrondissements" },
    { name: "Guidonia Montecelio", note: "base operativa" },
    { name: "Tivoli", note: "" },
    { name: "Roma Est", note: "" },
    { name: "Fonte Nuova", note: "" },
    { name: "Mentana", note: "" },
  ],
  faqSection: {
    eyebrow: "Des questions ?",
    heading: "Questions fréquentes",
  },
  faq: [
    {
      question: "Faut-il une ordonnance pour les injections ou le traitement ?",
      answer:
        "Oui, l'administration d'un traitement prescrit nécessite l'ordonnance ou le plan thérapeutique du médecin traitant : apportez-le lors de la première visite, ou envoyez-le-moi à l'avance sur WhatsApp.",
    },
    {
      question: "Dans quelles zones de Rome et de sa province intervenez-vous ?",
      answer:
        "J'interviens dans tous les arrondissements de Rome et dans l'est de la province, notamment Guidonia Montecelio, Tivoli, Fonte Nuova et Mentana. Envoyez-moi votre adresse et je vous confirme la disponibilité.",
    },
    {
      question: "Comment réserver une visite à domicile ?",
      answer:
        "Vous pouvez m'appeler ou m'écrire sur WhatsApp au 366 117 4111, ou remplir le formulaire de contact : je vous recontacte pour organiser la date et l'heure de l'intervention.",
    },
    {
      question: "Les visites sont-elles possibles le week-end ?",
      answer:
        "Oui, selon les disponibilités et l'urgence, je peux organiser des visites le week-end : indiquez-le dans votre demande et nous trouverons ensemble le meilleur horaire.",
    },
    {
      question: "Pouvez-vous suivre un proche âgé de façon régulière ?",
      answer:
        "Oui, je peux mettre en place un planning de visites régulières (hebdomadaires ou plus fréquentes) pour le suivi des constantes, la gestion du traitement et le soutien quotidien.",
    },
  ],
  contact: {
    eyebrow: "Parlons-en",
    heading: "Contact",
    labels: {
      telefono: "Téléphone",
      email: "Email",
      indirizzo: "Adresse",
      albo: "Ordre professionnel",
    },
    form: {
      name: "Nom et prénom",
      namePlaceholder: "Votre nom",
      zone: "Zone / quartier",
      zonePlaceholder: "Ex. Guidonia, Roma Est...",
      need: "De quoi avez-vous besoin ?",
      needPlaceholder: "Ex. pansement, aide pour un proche âgé...",
      submit: "Envoyer la demande sur WhatsApp",
    },
    whatsapp: {
      greeting: "Bonjour",
      zonePrefix: "Zone :",
      needPrefix: "J'ai besoin de :",
      needFallback: "Je souhaite des informations sur une visite à domicile.",
    },
  },
  finalCta: {
    eyebrow: "Vos soins commencent ici",
    heading: "Prête à vous aider, où que vous soyez",
    sub: "Écrivez-moi dès aujourd'hui : organisons ensemble votre première visite à domicile à Rome ou dans sa province.",
    cta: "Réserver une visite",
  },
  footer: {
    privacy: "Politique de confidentialité",
    cookie: "Politique de cookies",
  },
  whatsappFloat: {
    label: "Aide rapide",
    prefill: "je souhaite des informations sur une visite à domicile.",
  },
  scrollToTop: {
    aria: "Retour en haut de page",
  },
  socialSidebar: {
    followLabel: "Suivez-moi",
  },
  servicePage: {
    badge: "Service à domicile",
    titleSuffix: "à Rome",
    ctaInfo: "Demander des informations",
    ctaCall: "Appeler",
    howTitle: "Comment ça marche",
    howTextPre:
      "Après une première évaluation téléphonique, nous organisons la visite à domicile dans votre zone, en",
    howTextPost:
      "Chaque intervention est documentée et, si nécessaire, nous planifions ensemble les visites suivantes.",
    whoTitle: "Qui assure le service",
    relatedTitle: "Autres services",
  },
  pages: {
    home: {
      title: "Infirmière à domicile à Rome",
      description:
        "Soins infirmiers à domicile à Rome et dans sa province : pansements, injections, suivi post-opératoire et soutien aux personnes âgées. Infirmière libérale, inscrite à l'OPI de Rome n° 48541.",
    },
    chiSono: {
      title: "À propos",
      description:
        "Carole Estelle Kennang Tsague, infirmière libérale à Rome. Diplôme en sciences infirmières de Tor Vergata, inscrite à l'Ordre des Infirmiers de Rome.",
    },
    servizi: {
      title: "Services",
      description:
        "Soins infirmiers à domicile à Rome : pansements, injections, constantes vitales, suivi post-opératoire, personnes âgées et dépendantes.",
    },
    zone: {
      title: "Zones desservies",
      description:
        "Soins infirmiers à domicile à Rome et dans sa province : Guidonia Montecelio, Tivoli, Roma Est, Fonte Nuova, Mentana.",
    },
    faq: {
      title: "Questions fréquentes",
      description:
        "Les questions les plus fréquentes sur les soins infirmiers à domicile à Rome : ordonnances, zones desservies, réservation, disponibilité.",
    },
    contatti: {
      title: "Contact",
      description:
        "Contactez Carole Estelle Kennang Tsague pour des soins infirmiers à domicile à Rome : téléphone, WhatsApp, email et adresse du cabinet.",
    },
  },
  legal: {
    draftNotePrivacy: "Brouillon — à faire relire par un professionnel avant publication",
    draftNoteCookie:
      "Brouillon — à mettre à jour selon les outils d'analyse/marketing réellement installés",
    privacy: {
      title: "Politique de confidentialité",
      sections: [
        {
          heading: "Responsable du traitement",
          body: "{legalName}, {role}, {piva}, domiciliée à {address}. Contact : {email}.",
        },
        {
          heading: "Données collectées",
          body: "Via le formulaire de contact et les canaux indiqués sur le site (téléphone, email, WhatsApp), des données d'identification (nom, coordonnées) sont recueillies, ainsi que, lors des échanges suivant le premier contact, des données de santé nécessaires à l'organisation de la visite infirmière. Les données de santé constituent une catégorie particulière de données au sens de l'article 9 du Règlement (UE) 2016/679 (RGPD).",
        },
        {
          heading: "Finalités et base juridique",
          body: "Les données sont traitées pour répondre aux demandes d'informations, organiser et fournir les prestations infirmières demandées, et respecter les obligations légales liées à l'activité professionnelle de santé.",
        },
        {
          heading: "Conservation",
          body: "Les données sont conservées le temps nécessaire à la fourniture du service demandé et dans le respect des délais prévus par la réglementation sanitaire et fiscale applicable.",
        },
        {
          heading: "Vos droits",
          body: "Vous pouvez à tout moment demander l'accès, la rectification, la suppression ou la limitation du traitement de vos données, en écrivant à {email} ou {pec}.",
        },
      ],
      notice:
        "Ce texte est un modèle de départ, non un avis juridique. S'agissant de données de santé (catégorie particulière, art. 9 RGPD), faites-le vérifier par un consultant en protection des données avant de publier le site.",
    },
    cookie: {
      title: "Politique de cookies",
      sections: [
        {
          heading: "Que sont les cookies",
          body: "Les cookies sont de petits fichiers texte que les sites visités envoient à l'appareil de l'utilisateur, où ils sont stockés puis renvoyés à ces mêmes sites lors de la visite suivante.",
        },
        {
          heading: "Cookies utilisés sur ce site",
          list: [
            "Cookies techniques, nécessaires au fonctionnement du site.",
            "Éventuels cookies d'analyse statistique (ex. Google Analytics), à activer uniquement avec le consentement de l'utilisateur.",
          ],
        },
        {
          heading: "Gérer les cookies",
          body: "Vous pouvez gérer vos préférences en matière de cookies directement depuis les paramètres de votre navigateur, ou via la bannière de cookies affichée sur le site lors de la première visite.",
        },
        {
          heading: "Contact",
          body: "Pour toute question sur cette politique : {email}.",
        },
      ],
      notice:
        "Ce texte est un modèle de départ. Mettez-le à jour avec la liste réelle des cookies/services tiers installés (ex. Google Analytics, pixels publicitaires) et intégrez une bannière de consentement conforme au RGPD avant de publier le site.",
    },
  },
};

export default dictionary;
