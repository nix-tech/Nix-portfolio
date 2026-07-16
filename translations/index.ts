export type Lang = 'en' | 'fr'

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact',
      hireMe: 'Hire Me',
    },
    hero: {
      badge: "I'M A WEB DEVELOPER",
      greeting: "Hi, I'm",
      subtitle:
        'I build modern web experiences. Passionate Full Stack Web Developer specializing in modern technologies and scalable web applications.',
      viewWork: 'View My Work',
      downloadCV: 'Download CV',
    },
    about: {
      title: 'About Me',
      description:
        'Ing Nix Saint-val is a passionate Full Stack Web Developer and Computer Science student at',
      descriptionSuffix:
        '. With hands-on expertise in web technologies and strong foundations in systems programming (C, C++, Python, Java), Ing focuses on scalable architecture and delightful user experiences.',
      learnMore: 'Learn More',
      stats: {
        experience: 'Years Experience',
        projects: 'Projects',
        clients: 'Happy Clients',
        satisfaction: 'Client Satisfaction',
      },
      modal: {
        education: 'Education',
        degree: "Bachelor's in Computer Science · In progress",
        location: 'Haiti · Port-au-Prince',
        skills: 'Programming Languages & Frameworks',
        projects: 'Featured Projects',
        levelExpert: 'Expert',
        levelAdvanced: 'Advanced',
      },
    },
    contact: {
      title: 'Have a project in mind?',
      description:
        "I'm always open to discussing new projects and opportunities. Let's create something amazing together!",
      getInTouch: 'Get In Touch',
    },
    footer: {
      rights: '© 2026 Ing Nix. All Rights Reserved.',
      madeWith: 'Made with passion by',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      blog: 'Blog',
      contact: 'Contact',
      hireMe: 'M\'engager',
    },
    hero: {
      badge: 'DÉVELOPPEUR WEB',
      greeting: 'Bonjour, je suis',
      subtitle:
        'Je crée des expériences web modernes. Développeur Full Stack passionné, spécialisé dans les technologies modernes et les applications web évolutives.',
      viewWork: 'Voir mes travaux',
      downloadCV: 'Télécharger le CV',
    },
    about: {
      title: 'À propos de moi',
      description:
        'Ing Nix Saint-val est un développeur Full Stack passionné et étudiant en informatique à l\'',
      descriptionSuffix:
        '. Fort d\'une expertise pratique en technologies web et de solides bases en programmation système (C, C++, Python, Java), Ing se concentre sur l\'architecture évolutive et les expériences utilisateur remarquables.',
      learnMore: 'En savoir plus',
      stats: {
        experience: 'Ans d\'expérience',
        projects: 'Projets',
        clients: 'Clients satisfaits',
        satisfaction: 'Satisfaction client',
      },
      modal: {
        education: 'Formation',
        degree: 'Licence en Informatique · En cours',
        location: 'Haïti · Port-au-Prince',
        skills: 'Langages & Frameworks',
        projects: 'Projets phares',
        levelExpert: 'Expert',
        levelAdvanced: 'Avancé',
      },
    },
    contact: {
      title: 'Vous avez un projet en tête ?',
      description:
        'Je suis toujours disponible pour discuter de nouveaux projets et opportunités. Créons quelque chose d\'incroyable ensemble !',
      getInTouch: 'Me contacter',
    },
    footer: {
      rights: '© 2026 Ing Nix. Tous droits réservés.',
      madeWith: 'Fait avec passion par',
    },
  },
} as const

export type Translations = typeof translations['en']
export default translations
