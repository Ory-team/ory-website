export interface OryApp {
  slug: string;
  name: string;
  tagline: { en: string; fr: string };
  features: { en: string[]; fr: string[] };
  gradient: string;
  color: string;
  logo: string;
  githubOwner: string;
  githubRepo: string;
  /** Real in-app screenshots, exactly 3. Falls back to a wireframe mockup when absent. */
  screenshots?: string[];
}

export const apps: OryApp[] = [
  {
    slug: 'gameory',
    name: 'Gameory',
    tagline: {
      en: 'Nothing to sign up for. Just your backlog, your sessions, and how much time you’re actually spending.',
      fr: 'Rien à créer. Juste ton backlog, tes sessions, et le temps que tu y passes vraiment.',
    },
    features: {
      en: [
        'Can’t decide what to play? Answer a few questions and it picks three games from your own backlog.',
        'Play sessions with a stopwatch, a streak, and a level',
        'Compare your library with a friend by scanning a QR code',
        'Trophies, stats, and a HowLongToBeat estimate on every game',
      ],
      fr: [
        'Pas d’idée de quoi jouer ? Réponds à quelques questions, l’appli propose trois jeux de ton backlog.',
        'Sessions de jeu avec chronomètre, streak et niveau',
        'Compare ta bibliothèque avec un ami en scannant un QR code',
        'Trophées, statistiques, et une estimation HowLongToBeat',
      ],
    },
    gradient: 'linear-gradient(135deg, #7B2FE0 0%, #2F6FEF 100%)',
    color: '#8B4FEB',
    logo: '/logos/gameory.png',
    githubOwner: 'Ory-team',
    githubRepo: 'Gameory-releases',
    screenshots: ['/screenshots/gameory-1.jpg', '/screenshots/gameory-2.jpg', '/screenshots/gameory-3.jpg'],
  },
  {
    slug: 'ludory',
    name: 'Ludory',
    tagline: {
      en: 'Board games, Magic, Pokémon, Lorcana, Yu-Gi-Oh: one shelf for all of it.',
      fr: 'Jeux de société, Magic, Pokémon, Lorcana, Yu-Gi-Oh : tout au même endroit.',
    },
    features: {
      en: [
        'Scan a card with your camera and it’s added to the deck. Works for all four games.',
        'Deck legality checker flags banned cards early',
        'Life counter and commander damage tracker, built in',
        'Board games too: shelf, wishlist, and play sessions',
      ],
      fr: [
        'Scanne une carte avec ton appareil photo, elle rejoint le deck. Marche pour les 4 jeux.',
        'Vérifie la légalité du deck avant la partie',
        'Compteur de vie et suivi des dégâts commander',
        'Les jeux de société aussi : étagère et suivi des parties',
      ],
    },
    gradient: 'linear-gradient(135deg, #6FE6B8 0%, #0B2A6B 100%)',
    color: '#3FCDA6',
    logo: '/logos/ludory.png',
    githubOwner: 'Ory-team',
    githubRepo: 'Ludory-releases',
  },
  {
    slug: 'showry',
    name: 'Showry',
    tagline: {
      en: 'Never forget where you left off. Movies and series, episode by episode.',
      fr: 'Plus jamais perdu dans une série. Films et séries, épisode par épisode.',
    },
    features: {
      en: [
        'A yearly recap, Wrapped-style: top actors, genres, your most-watched year, on autoplay.',
        'Rewatched something? It gets its own history',
        'Release alerts: episodes, theaters, streaming, DVD',
        'Turn a review into a shareable card for Instagram or TikTok',
      ],
      fr: [
        'Un récap annuel façon Wrapped : acteurs, genres, ton année la plus regardée, en diaporama.',
        'Un revisionnage a son propre historique, à part',
        'Alertes sorties : épisode, cinéma, streaming, DVD',
        'Transforme un avis en carte partageable pour Instagram ou TikTok',
      ],
    },
    gradient: 'linear-gradient(135deg, #4A7FE8 0%, #9B5DE0 55%, #F2934A 100%)',
    color: '#9B5DE0',
    logo: '/logos/showry.png',
    githubOwner: 'Ory-team',
    githubRepo: 'Showry-releases',
  },
  {
    slug: 'libory',
    name: 'Libory',
    tagline: {
      en: 'Manga, comics, novels: scan the barcode and it’s in your library.',
      fr: 'Manga, BD, romans : scanne le code-barres, c’est dans ta bibliothèque.',
    },
    features: {
      en: [
        'Lent someone a volume? Ory remembers who, so you don’t have to.',
        'A reading streak that counts how many days you’ve kept it up',
        'Release calendar for every series you follow, updated on its own',
        'Collection value, tallied automatically as you add books',
      ],
      fr: [
        'Prêté un tome à quelqu’un ? Ory s’en souvient à ta place.',
        'Un streak de lecture qui compte les jours d’affilée',
        'Calendrier des sorties pour chaque série suivie',
        'Valeur de la collection, calculée automatiquement au fil des ajouts',
      ],
    },
    gradient: 'linear-gradient(135deg, #FF8A00 0%, #FF3FB0 100%)',
    color: '#FF3FB0',
    logo: '/logos/libory.png',
    githubOwner: 'Ory-team',
    githubRepo: 'Libory-releases',
  },
];
