export type Locale = 'es' | 'en'

export const dictionary = {
  es: {
    technologies: 'Tecnologías',
    projects: 'Proyectos',
    about: 'Sobre mí',
    contact: 'Contacto',
    role: 'Desarrollador Full Stack',
    education: 'Técnico en Computación e Informática',
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
          description: 'Sistema completo de tienda. Incluye autenticación segura con JWT, gestión de productos, carrito de compras persistente y control de órdenes, todo construido con arquitectura moderna y diseño responsive usando TailwindCSS.',
        image: '/images/tienda.png',
    repo: 'https://github.com/Eduardo1300/proyecto-tienda-ropa',
        demo: 'https://tienda.christophervaldivia.me/'
      },
      { 
        title: 'TaskFlow – Gestor de Tareas Colaborativo con IA', 
        stack: 'React + TypeScript + Supabase + Tailwind CSS',
        description: 'Sistema de gestión de tareas colaborativo en tiempo real con inteligencia artificial. Autenticación segura, colaboración en vivo, múltiples vistas (Dashboard, Kanban, Calendario, Analytics). IA para recomendaciones y análisis de productividad. Sincronización offline con PWA. Análisis detallado con gráficos e insights personalizados. Interfaz responsive con modo oscuro incluido.',
        image: '/images/taskflow.png',
    repo: 'https://github.com/Eduardo1300/taskflow-app',
    demo: 'https://taskflow.christophervaldivia.me/'
    },
      {
        title: 'Sistema de Gestión Empresarial – Aplicación Full Stack',
        stack: 'React + TypeScript + NestJS + PostgreSQL + Docker',
        description: 'Plataforma administrativa para la gestión de usuarios, roles, áreas y operaciones internas. Autenticación JWT con control de acceso basado en roles, API REST modular desarrollada con NestJS, frontend SPA con React y manejo de estado global. Dashboard administrativo con métricas dinámicas, persistencia con PostgreSQL y despliegue en cloud con Docker.',
        image: '/images/sistema-gestion.png',
        repo: 'https://github.com/Eduardo1300/Aplicacion-de-Registros-de-Empleados',
        demo: 'https://gestion.christophervaldivia.me/'
      }
    ],
    aboutText:
      'Apasionado por el desarrollo web moderno y la creación de soluciones digitales innovadoras. Me motiva resolver problemas complejos con código limpio y arquitecturas escalables. Busco oportunidades para crecer en equipos dinámicos trabajando en proyectos que generen impacto real en los usuarios.',
    profileSection: {
      title: 'Perfil Profesional',
      content: 'Desarrollador Full Stack con sólida base en tecnologías modernas. Combino creatividad técnica con enfoque en la experiencia del usuario. Siempre dispuesto a aprender nuevas tecnologías y metodologías para crear soluciones web robustas y escalables.'
      },
      contactLabelEmail: '📧',
    contactLabelPhone: '📞',
    contactLabelLocation: '📍',
    experiences: 'Experiencia',
    experienceItems: [
      {
        title: 'Desarrollador Full Stack Node.js – Aynitech',
        period: 'Dic 2025 – Actualidad',
        isCurrent: true,
        bullets: [
          'Desarrollo de aplicaciones Full Stack con Node.js, NestJS, TypeScript y Vue.js en entornos productivos.',
          'Diseño e implementación de APIs REST escalables con autenticación JWT y validaciones.',
          'Gestión de bases de datos PostgreSQL y MongoDB con optimizaciones de rendimiento.',
          'Despliegue y mantenimiento de aplicaciones en AWS.'
        ]
      },
      {
        title: 'Líder del área de Desarrollo Web – NHL Decoracion Comercial',
          period: 'Sept. 2025 – Diciembre 2025',
        bullets: [
          'Lideré la implementación de interfaces web con React, Tailwind CSS, Laravel (Blade) y Next.js (TypeScript/JSX).',
          'Diseños responsivos y animaciones con CSS, Tailwind y Framer Motion, mejorando UX.',
          'Optimización de rendimiento y SEO, asegurando entregas alineadas con identidad visual corporativa.'
        ]
      },
      {
          title: 'Colíder del área de Desarrollo Rápido de Aplicaciones – DevDatep Consulting',
          period: 'Junio 2025 – Noviembre 2025',
        bullets: [
          'Coordiné proyectos ágiles (Scrum), liderando equipos y asegurando entregas eficientes.',
          'Desarrollé aplicaciones empresariales con Jmix, Spring Boot, Vaadin, JavaScript y PHP.',
          'Administré bases de datos MySQL, asegurando integridad y escalabilidad.'
        ]
      },
      {
        title: 'Diseñador Web – LicitApp',
        period: 'Junio 2025 – Septiembre 2025',
        bullets: [
         'Desarrollo web en WordPress, HTML, CSS y JavaScript con funcionalidades personalizadas.',
         'Diseño responsivo y optimización de interfaces visuales para navegación fluida.',
         'Gestión de plugins y temas personalizados según requerimientos del cliente.'
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
          { name: 'Vue.js 💚', level: 'Intermedio' },
          { name: 'Angular 🅰️', level: 'Básico' },
          { name: 'Next.js 🟠', level: 'Básico' },
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
          { name: 'MongoDB 🍃', level: 'Básico' },
          { name: 'SQL Server 🟥', level: 'Básico' },
          { name: 'MariaDB 🟨', level: 'Básico' }
        ],
        devops: [
          { name: 'Docker 🐳', level: 'Básico' },
          { name: 'Vercel 🔷', level: 'Intermedio' },
          { name: 'Render 🟦', level: 'Intermedio' },
          { name: 'AWS ☁️', level: 'Básico' },
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
    role: 'Full Stack Developer',
    education: 'Computer Science and Information Technology Technician',
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
    repo: 'https://github.com/Eduardo1300/proyecto-tienda-ropa',
        demo: 'https://tienda.christophervaldivia.me/'
      },
      { 
        title: 'TaskFlow – AI-Powered Collaborative Task Manager', 
        stack: 'React + TypeScript + Supabase + Tailwind CSS',
        description: 'Collaborative real-time task management system with artificial intelligence. Secure authentication, live collaboration, multiple views (Dashboard, Kanban, Calendar, Analytics). AI-powered recommendations and productivity analysis. Offline sync with PWA technology. Detailed analytics with charts and personalized insights. Responsive interface with dark mode support.',
        image: '/images/taskflow.png',
    repo: 'https://github.com/Eduardo1300/taskflow-app',
    demo: 'https://taskflow.christophervaldivia.me/'
      },
      {
        title: 'Enterprise Management System – Full Stack Application',
        stack: 'React + TypeScript + NestJS + PostgreSQL + Docker',
        description: 'Administrative platform for managing users, roles, departments, and internal operations. Features JWT authentication with role-based access control (ADMIN/USER), modular REST API built with NestJS, SPA frontend with React and global state management. Includes administrative dashboard with dynamic metrics, data persistence with PostgreSQL and ORM, and cloud deployment using Docker.',
        image: '/images/sistema-gestion.png',
        repo: 'https://github.com/Eduardo1300/Aplicacion-de-Registros-de-Empleados',
        demo: 'https://gestion.christophervaldivia.me/'
      }
    ],
    aboutText:
      'Passionate about modern web development and creating innovative digital solutions. I\'m motivated by solving complex problems with clean code and scalable architectures. I seek opportunities to grow in dynamic teams working on projects that generate real impact for users.',
    profileSection: {
      title: 'Professional Profile',
      content: 'Full Stack Developer with solid foundation in modern technologies. I combine technical creativity with user experience focus. Always willing to learn new technologies and methodologies to create robust and scalable web solutions.'
    },
    contactLabelEmail: '📧',
    contactLabelPhone: '📞',
    contactLabelLocation: '📍',
    experiences: 'Experience',
    experienceItems: [
      {
        title: 'Full Stack Node.js Developer – Aynitech',
        period: 'Dec 2025 – Present',
        bullets: [
          'Development of Full Stack applications with Node.js, NestJS, TypeScript, and Vue.js in production environments.',
          'Design and implementation of scalable REST APIs with JWT authentication and validations.',
          'Management of PostgreSQL and MongoDB databases with performance optimizations.',
          'Deployment and maintenance of applications on AWS.'
        ]
      },
      {
        title: 'Web Development Area Leader – NHL Decoracion Comercial',
          period: 'Sept. 2025 – December 2025',
        bullets: [
          'Led the implementation of web interfaces with React, Tailwind CSS, Laravel (Blade), and Next.js (TypeScript/JSX).',
          'Responsive designs and animations with CSS, Tailwind, and Framer Motion, enhancing UX.',
          'Performance and SEO optimization, ensuring deliverables aligned with corporate visual identity.'
        ]
      },
      {
          title: 'Co-Leader of Rapid Application Development Area – DevDatep Consulting',
          period: 'June 2025 – November 2025',
        bullets: [
          'Coordinated agile projects (Scrum), leading teams and ensuring efficient deliveries.',
          'Developed enterprise applications with Jmix, Spring Boot, Vaadin, JavaScript, and PHP.',
          'Administered MySQL databases, ensuring integrity and scalability.'
        ]
      },
      {
        title: 'Web Designer – LicitApp',
        period: 'June 2025 – September 2025',
        bullets: [
         'Web development in WordPress, HTML, CSS, and JavaScript with custom functionalities.',
         'Responsive design and optimization of visual interfaces for smooth navigation.',
         'Management of custom plugins and themes according to client requirements.'
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
          { name: 'Vue.js 💚', level: 'Intermediate' },
          { name: 'Angular 🅰️', level: 'Basic' },
          { name: 'Next.js 🟠', level: 'Basic' },
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
                  { name: 'MongoDB 🍃', level: 'Basic' },
                  { name: 'SQL Server 🟥', level: 'Basic' },
                  { name: 'MariaDB 🟨', level: 'Basic' }
        ],
        devops: [
          { name: 'Docker 🐳', level: 'Basic' },
          { name: 'Vercel 🔷', level: 'Intermediate' },
          { name: 'Render 🟦', level: 'Intermediate' },
          { name: 'AWS ☁️', level: 'Basic' },
          { name: 'Git/GitHub 🔁', level: 'Advanced' },
          { name: 'CI/CD (GitHub Actions) 🚀', level: 'Basic' }
        ]
      }
    },
    toggleTheme: 'Theme',
    toggleLang: 'EN'
  }
} as const