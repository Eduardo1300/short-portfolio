export type Locale = 'es' | 'en'

export const dictionary = {
  es: {
    technologies: 'Tecnologías',
    projects: 'Proyectos',
    about: 'Sobre mí',
    contact: 'Contacto',
    role: 'Desarrollador Full Stack Junior',
    education: 'Estudiante de Computación e Informática (6to ciclo)',
    location: 'Lima, Perú',
    phone: '+51 953 587 619',
    email: 'eduardovaldivia1300@gmail.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    downloadCv: 'Descargar CV',
    availability: 'Disponibilidad para prácticas y proyectos freelance',
    projectsList: [
      { 
        title: 'Tienda Online Full Stack', 
        stack: 'React + NestJS + PostgreSQL',
        description: 'Sistema completo de tienda. Incluye autenticación segura con JWT, gestión de productos, carrito de compras persistente y control de órdenes, todo construido con arquitectura moderna y diseño responsive usando TailwindCSS. PROYECTO EN DESARROLLO.',
        image: '/images/tienda.png',
        github: 'https://github.com/Eduardo1300/proyecto-tienda-ropa',
        demo: 'https://proyecto-tienda-ropa.vercel.app/'
      },
      { 
        title: 'TaskFlow', 
        stack: 'React + TypeScript + Supabase',
        description: 'Aplicación empresarial de gestión de tareas con IA integrada, colaboración en tiempo real y múltiples integraciones. Ofrece funcionalidades avanzadas como sugerencias inteligentes, sincronización offline, control granular de permisos, API REST completa y análisis detallados para maximizar la productividad.',
        image: '/images/taskflow1.png',
        github: 'https://github.com/Eduardo1300/taskflow-app',
        demo: 'https://taskflow-app-xi.vercel.app/'
      }
    ],
    aboutText:
      'Apasionado por el desarrollo web moderno y la creación de soluciones digitales innovadoras. Me motiva resolver problemas complejos con código limpio y arquitecturas escalables. Busco oportunidades para crecer en equipos dinámicos trabajando en proyectos que generen impacto real en los usuarios.',
    profileSection: {
      title: 'Perfil Profesional',
      content: 'Desarrollador Full Stack Junior con sólida base en tecnologías modernas. Combino creatividad técnica con enfoque en la experiencia del usuario. Siempre dispuesto a aprender nuevas tecnologías y metodologías para crear soluciones web robustas y escalables.'
    },
    contactLabelEmail: '📧',
    contactLabelPhone: '📞',
    contactLabelLocation: '📍',
    experiences: 'Experiencia',
    experienceItems: [
      {
        title: 'Practicante de Desarrollo Web – DevDatep Consulting',
        period: 'Junio 2025 – Actualidad',
        bullets: [
          'Contribuí al desarrollo de apps internas con MySQL.',
          'Apoyé en el diseño de interfaces y automatización de procesos.',
          'Mejoré módulos y reportes para mayor eficiencia.',
          'Participé en equipos ágiles aplicando Scrum.'
        ]
      },
      {
        title: 'Practicante de Diseño Web – LicitApp',
        period: 'Junio 2025 – Actualidad',
        bullets: [
         'Personalicé sitios WordPress con HTML, CSS y JS.',
         'Optimicé el rendimiento visual y diseño responsivo.',
         'Mejoré la experiencia de usuario y propuestas de UI.',
         'Colaboré con el equipo de diseño y desarrollo.'
        ]
      },
      {
  title: 'Practicante de Desarrollo Web jr – NHL Decoracion Comercial',
        period: 'Sept. 2025 – Actualidad',
        bullets: [
          'Mejoré apps web con React.js, Tailwind CSS y Laravel.',
          'Optimicé código y funcionalidad en plataformas web.',
          'Implementé nuevas funciones y mejoras UX.',
          'Creé APIs RESTful e integré bases MySQL.',
          'Usé Git y GitHub para control de versiones.'
        ]
      }
    ],
    technologiesGrouped: {
  title: 'Tecnologías',
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Base de datos',
  devops: 'DevOps & Tools',
  items: {
        frontend: [
          { name: 'React ⚛️', level: 'Avanzado' },
          { name: 'Angular 🅰️', level: 'Básico' },
          { name: 'Next.js ⏭️', level: 'Básico' },
          { name: 'TypeScript 🟦', level: 'Intermedio' },
          { name: 'Tailwind CSS 🎨', level: 'Avanzado' }
        ],
        backend: [
          { name: 'Node.js 🌐', level: 'Intermedio' },
          { name: 'NestJS 🛠️', level: 'Intermedio' },
          { name: 'Laravel 🔴', level: 'Intermedio' },
          { name: 'Java ☕', level: 'Básico' },
          { name: 'PHP 🐘', level: 'Básico' }
        ],
        database: [
          { name: 'MySQL 🟦', level: 'Básico' },
          { name: 'PostgreSQL 🐘', level: 'Básico' },
          { name: 'SQL Server 🟥', level: 'Básico' },
          { name: 'MariaDB 🟨', level: 'Básico' }
        ],
        devops: [
          { name: 'Docker 🐳', level: 'Básico' },
          { name: 'Git/GitHub 🔁', level: 'Avanzado' },
          { name: 'CI/CD (GitHub Actions) 🚀', level: 'Básico' }
        ]
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
    education: 'Computer Science and Information Technology Student (6th cycle)',
    location: 'Lima, Peru',
    phone: '+51 953 587 619',
    email: 'eduardovaldivia1300@gmail.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    downloadCv: 'Download CV',
    availability: 'Available for internships and freelance projects',
    projectsList: [
      { 
        title: 'Full Stack Online Store', 
        stack: 'React + NestJS + PostgreSQL',
        description: 'Complete store system. Includes secure JWT authentication, product management, persistent shopping cart, and order control—all built with a modern architecture and responsive design using TailwindCSS.',
        image: '/images/tienda.png',
        github: 'https://github.com/Eduardo1300/proyecto-tienda-ropa',
        demo: ''
      },
      { 
        title: 'TaskFlow', 
        stack: 'React + TypeScript + Supabase',
        description: 'Enterprise-grade task management application with integrated AI, real-time collaboration, and multiple integrations. It offers advanced features such as smart suggestions, offline sync, granular permission control, a full REST API, and detailed analytics to maximize productivity.',
        image: '/images/taskflow1.png',
        github: 'https://github.com/Eduardo1300/taskflow-app',
        demo: 'https://taskflow-app-xi.vercel.app/'
      }
    ],
    aboutText:
      'Passionate about modern web development and creating innovative digital solutions. I\'m motivated by solving complex problems with clean code and scalable architectures. I seek opportunities to grow in dynamic teams working on projects that generate real impact for users.',
    profileSection: {
      title: 'Professional Profile',
      content: 'Full Stack Junior Developer with solid foundation in modern technologies. I combine technical creativity with user experience focus. Always willing to learn new technologies and methodologies to create robust and scalable web solutions.'
    },
    contactLabelEmail: '📧',
    contactLabelPhone: '📞',
    contactLabelLocation: '📍',
    experiences: 'Experience',
    experienceItems: [
      {
        title: 'Web Development Intern – DevDatep Consulting',
        period: 'June 2025 – Present',
        bullets: [
          'Contributed to internal app development with MySQL.',
          'Supported UI design and process automation.',
          'Improved modules and reports for efficiency.',
          'Worked in agile teams applying Scrum.'
        ]
      },
      {
        title: 'Web Design Intern – LicitApp',
        period: 'June 2025 – Present',
        bullets: [
         'Customized WordPress sites with HTML, CSS, and JS.',
         'Optimized visual performance and responsive design.',
         'Improved user experience and UI proposals.',
         'Collaborated with the design and development team.'
        ]
      },
      {
  title: 'Web Development Intern – NHL Decoracion Comercial',
        period: 'Sept. 2025 – Present',
        bullets: [
          'Improved web apps with React.js, Tailwind CSS, and Laravel.',
          'Optimized code and functionality in web platforms.',
          'Implemented new features and UX improvements.',
          'Created RESTful APIs and integrated MySQL databases.',
          'Used Git and GitHub for version control.'
        ]
      }
    ],
    technologiesGrouped: {
  title: 'Technologies',
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  devops: 'DevOps & Tools',
  items: {
        frontend: [
          { name: 'React ⚛️', level: 'Advanced' },
            { name: 'Angular 🅰️', level: 'Basic' },
            { name: 'Next.js ⏭️', level: 'Basic' },
            { name: 'TypeScript 🟦', level: 'Intermediate' },
            { name: 'Tailwind CSS 🎨', level: 'Advanced' }
        ],
        backend: [
          { name: 'Node.js 🌐', level: 'Intermediate' },
          { name: 'NestJS 🛠️', level: 'Intermediate' },
          { name: 'Laravel 🔴', level: 'Intermediate' },
          { name: 'Java ☕', level: 'Basic' },
          { name: 'PHP 🐘', level: 'Basic' }
        ],
        database: [
                  { name: 'MySQL 🟦', level: 'Basic' },
                  { name: 'PostgreSQL 🐘', level: 'Basic' },
                  { name: 'SQL Server 🟥', level: 'Basic' },
                  { name: 'MariaDB 🟨', level: 'Basic' }
        ],
        devops: [
          { name: 'Docker 🐳', level: 'Basic' },
          { name: 'Git/GitHub 🔁', level: 'Advanced' },
          { name: 'CI/CD (GitHub Actions) 🚀', level: 'Basic' }
        ]
      }
    },
    toggleTheme: 'Theme',
    toggleLang: 'EN'
  }
} as const