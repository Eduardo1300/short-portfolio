export type Locale = 'es' | 'en'

export const dictionary = {
  es: {
    technologies: 'Tecnologías',
    projects: 'Proyectos',
    about: 'Sobre mí',
    contact: 'Contacto',
    role: 'Desarrollador Full Stack Junior',
    education: 'Estudiante de Computación e Informática (5to ciclo)',
    location: 'Lima, Perú',
    phone: '+51 953 587 619',
    email: 'eduardovaldivia130@outlook.es',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    downloadCv: 'Descargar CV',
    availability: 'Disponibilidad para prácticas y proyectos freelance',
    projectsList: [
      { title: 'Tienda Online Full Stack', stack: 'React + NestJS + Stripe' },
      { title: 'Buscador de Criaturas RPG', stack: 'React + API REST' }
    ],
    aboutText:
      'Apasionado por el desarrollo web moderno, escribo código limpio y funcional. Me enfoco en crear soluciones útiles con buen diseño y estructura escalable.',
    contactLabelEmail: '📧',
    contactLabelPhone: '📞',
    contactLabelLocation: '📍',
    experiences: 'Experiencia',
    experienceItems: [
      {
        title: 'Web Developer Intern – DevDatep Consulting',
        period: 'Junio 2025 – Actualidad',
        bullets: [
          'Automatización de procesos low-code (Scriptcase)',
          'Diseño de interfaces y conexión con bases de datos',
          'Trabajo bajo metodología Scrum'
        ]
      },
      {
        title: 'Web Design Intern – LicitApp',
        period: 'Junio 2025 – Actualidad',
        bullets: [
          'Personalización de sitios WordPress con HTML/CSS',
          'Mejoras UX/UI y diseño responsivo'
        ]
      }
    ],
    technologiesGrouped: {
      title: 'Tecnologías',
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'DevOps & Tools',
      items: {
        frontend: ['React ⚛️', 'TypeScript 🟦', 'Tailwind CSS 🎨'],
        backend: ['Node.js 🌐', 'NestJS 🛠️', 'PostgreSQL 🐘'],
        devops: ['Docker 🐳', 'Git/GitHub 🔁', 'CI/CD (GitHub Actions) 🚀']
      }
    },
    toggleTheme: 'Modo',
    toggleLang: 'ES'
  },
  en: {
    technologies: 'Technologies',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    role: 'Full Stack Junior Developer',
    education: 'Computer Science and Information Technology Student (5th cycle)',
    location: 'Lima, Peru',
    phone: '+51 953 587 619',
    email: 'eduardovaldivia130@outlook.es',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    downloadCv: 'Download CV',
    availability: 'Available for internships and freelance projects',
    projectsList: [
      { title: 'Full Stack Online Store', stack: 'React + NestJS + Stripe' },
      { title: 'RPG Creatures Finder', stack: 'React + REST API' }
    ],
    aboutText:
      'Passionate about modern web development, I write clean and functional code. I focus on building useful solutions with good design and scalable structure.',
    contactLabelEmail: '📧',
    contactLabelPhone: '📞',
    contactLabelLocation: '📍',
    experiences: 'Experience',
    experienceItems: [
      {
        title: 'Web Developer Intern – DevDatep Consulting',
        period: 'June 2025 – Present',
        bullets: [
          'Low-code process automation (Scriptcase)',
          'Interface design and database connections',
          'Scrum methodology'
        ]
      },
      {
        title: 'Web Design Intern – LicitApp',
        period: 'June 2025 – Present',
        bullets: [
          'WordPress customization with HTML/CSS',
          'UX/UI improvements and responsive design'
        ]
      }
    ],
    technologiesGrouped: {
      title: 'Technologies',
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'DevOps & Tools',
      items: {
        frontend: ['React ⚛️', 'TypeScript 🟦', 'Tailwind CSS 🎨'],
        backend: ['Node.js 🌐', 'NestJS 🛠️', 'PostgreSQL 🐘'],
        devops: ['Docker 🐳', 'Git/GitHub 🔁', 'CI/CD (GitHub Actions) 🚀']
      }
    },
    toggleTheme: 'Theme',
    toggleLang: 'EN'
  }
} as const