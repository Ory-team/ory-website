export type Locale = 'en' | 'fr';

const EMAIL = 'arthur.decaen33@gmail.com';

export const strings = {
  en: {
    kicker: 'For people who track their hobbies a little too closely',
    navFaq: 'FAQ',
    downloadLatest: 'Download latest',
    downloadPrefix: 'Download v',
    starIt: 'Star it',
    mockup: 'MOCKUP',
    prevApp: 'Previous app',
    nextApp: 'Next app',
    showApp: 'Show',
    enlargeScreenshot: 'Enlarge screenshot',
    faqEyebrow: 'Frequently asked questions',
    faqTitle: 'What people ask before installing',
    faqClose: 'Close',
    faq: [
      {
        q: 'Is my data private?',
        a: 'No account and no cloud storage: all data remains on the device, for all four apps.',
      },
      {
        q: 'Is the project open source?',
        a: 'Not yet. Part of the current codebase was written with AI assistance and is not yet of a quality suitable for publication. The priority is to deliver fully functional applications first, followed by a manual review of the code before open-sourcing is reconsidered.',
      },
      {
        q: 'Is it available on the App Store or Google Play?',
        a: 'Not yet, for legal and budget reasons. Some of the APIs in use restrict automated data collection, which could become an issue once an app is officially listed. Store publishing also carries a cost that is not justified for a project intended to remain entirely free and ad-free.',
      },
      {
        q: "What if a hobby isn't covered?",
        a: "The Ory suite originated from turning personal hobbies into statistics. Naturally, the hobbies covered remain limited — if yours isn't included yet, please get in touch so a dedicated app can be considered.",
        cta: 'Suggest a hobby →',
        href: `mailto:${EMAIL}`,
      },
      {
        q: 'Have feedback or found a bug?',
        a: `All feedback is welcome. Reach out at ${EMAIL}, or open an issue on the relevant app's GitHub page — both channels are monitored closely.`,
        cta: 'Send an email →',
        href: `mailto:${EMAIL}`,
      },
    ],
  },
  fr: {
    kicker: 'Pour ceux qui suivent leurs loisirs d’un peu trop près',
    navFaq: 'FAQ',
    downloadLatest: 'Télécharger',
    downloadPrefix: 'Télécharger v',
    starIt: 'Étoile',
    mockup: 'MAQUETTE',
    prevApp: 'Application précédente',
    nextApp: 'Application suivante',
    showApp: 'Afficher',
    enlargeScreenshot: 'Agrandir la capture',
    faqEyebrow: 'Questions fréquentes',
    faqTitle: "Ce qu'on demande avant d'installer",
    faqClose: 'Fermer',
    faq: [
      {
        q: 'Mes données sont-elles privées ?',
        a: 'Aucun compte, aucun cloud. Toutes les données restent sur l’appareil, pour les quatre applications.',
      },
      {
        q: 'Le projet est-il open source ?',
        a: "Pas encore. Une partie du code actuel a été produite avec l'aide de l'intelligence artificielle et n'est pas encore d'une qualité suffisante pour être publiée. La priorité est de disposer d'applications pleinement fonctionnelles, avant d'envisager une reprise manuelle du code puis, le cas échéant, l'ouverture du code source.",
      },
      {
        q: "Est-elle disponible sur l'App Store ou Google Play ?",
        a: "Pas encore, pour des raisons juridiques et budgétaires. Certaines API utilisées imposent des restrictions sur la collecte automatisée de données, ce qui pourrait poser problème une fois une application officiellement publiée sur les stores. Par ailleurs, la publication sur les stores a un coût qui n'est pas justifié pour un projet destiné à rester entièrement gratuit et sans publicité.",
      },
      {
        q: "Et si un loisir n'est pas couvert ?",
        a: "La gamme Ory est née de la volonté de transformer des loisirs personnels en statistiques. Les loisirs couverts restent naturellement limités : si le vôtre n'y figure pas encore, n'hésitez pas à le faire savoir afin d'envisager la création d'une application dédiée.",
        cta: 'Proposer un loisir →',
        href: `mailto:${EMAIL}`,
      },
      {
        q: 'Une remarque ou un bug à signaler ?',
        a: `Toute remarque est la bienvenue. Vous pouvez écrire à ${EMAIL}, ou ouvrir une issue sur la page GitHub de l'application concernée — les deux canaux sont suivis avec attention.`,
        cta: 'Envoyer un email →',
        href: `mailto:${EMAIL}`,
      },
    ],
  },
} as const satisfies Record<Locale, unknown>;
