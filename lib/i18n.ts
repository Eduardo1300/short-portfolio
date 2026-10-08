export type Locale = 'es' | 'en'

export const defaultLocale: Locale = 'es'
export const locales: Locale[] = ['es', 'en']

export const dictionary = {
  es: {
    technologies: 'Tecnologías',
    projects: 'Proyectos',
    about: 'Sobre mí',
    contact: 'Contacto',
    role: 'Backend Developer | NestJS · TypeScript · PostgreSQL · Docker · AWS',
    education: 'Computación e Informática (Egresado) - Cibertec',
    location: 'Lima, Perú',
    phone: '+51 953 587 619',
    email: 'eduardovaldivia1300@gmail.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    downloadCv: 'Ver CV',
    availability: 'Disponibilidad para proyectos freelance y tiempo completo',
    projectsList: [
      { 
        title: 'E-commerce Clothing Store – Microservicio de Comercio Electrónico', 
        stack: 'NestJS · TypeScript · PostgreSQL · Docker · TypeORM · Tailwind CSS',
          description: 'Arquitectura backend para catálogo de productos, gestión de órdenes de compra y control de inventario con manejo de estados. Implementación de filtros globales de excepción, pipes de validación y control de autorización multi-rol (Admin / User). Entorno contenerizado con Docker listo para producción y persistencia relacional optimizada.',
        image: '/images/tienda.png',
    repo: 'https://github.com/Eduardo1300/proyecto-tienda-ropa',
        demo: 'https://tienda.christophervaldivia.me/'
      },
      { 
        title: 'TaskFlow – Plataforma de Gestión de Tareas', 
        stack: 'NestJS · TypeScript · PostgreSQL · Docker · JWT · TypeORM',
        description: 'API REST desacoplada con arquitectura modular, control de acceso basado en roles (RBAC) y autenticación segura con JWT. Modelado relacional en PostgreSQL con transacciones ACID para la persistencia consistente de flujos concurrentes (tareas, tableros y estados). Contenerización completa con Docker Compose (API + PostgreSQL), testing automatizado y despliegue en producción con documentación interactiva en Swagger.',
        image: '/images/taskflow.png',
    repo: 'https://github.com/Eduardo1300/taskflow-app',
        demo: 'https://taskflow.christophervaldivia.me/'
      }
    ],
    aboutText:
      'Desarrollador Backend especializado en Node.js, NestJS y TypeScript con experiencia en entornos de producción. Especializado en el diseño e implementación de APIs modulares (REST y GraphQL), modelado relacional y optimización de consultas en PostgreSQL, y despliegue de microservicios con Docker sobre infraestructura AWS (EC2, RDS). Con sólidos fundamentos en arquitectura limpia, testing automatizado y comprensión integral del consumo de datos en interfaces frontend (Vue.js, React).',
    profileSection: {
      title: 'Perfil Profesional',
      content: 'Desarrollador Backend especializado en Node.js, NestJS y TypeScript con experiencia en entornos de producción. Especializado en el diseño e implementación de APIs modulares (REST y GraphQL), modelado relacional y optimización de consultas en PostgreSQL, y despliegue de microservicios con Docker sobre infraestructura AWS (EC2, RDS). Con sólidos fundamentos en arquitectura limpia, testing automatizado y comprensión integral del consumo de datos en interfaces frontend (Vue.js, React).'
      },
      contactLabelEmail: '📧',
    contactLabelPhone: '📞',
    contactLabelLocation: '📍',
    experiences: 'Experiencia',
    experienceItems: [
      {
        title: 'Desarrollador Backend / Software Engineer – Aynitech',
        period: 'Dic 2025 – Actualidad',
        isCurrent: true,
        bullets: [
          'APIs modulares y microservicios con NestJS/TypeScript (Clean Architecture, DTOs).',
          'Modelado y optimización SQL en PostgreSQL para alta concurrencia.',
          'Contratos REST/GraphQL e integración con frontend Vue.js.',
          'Despliegues Docker en AWS (EC2, RDS) y CI/CD con GitHub Actions.'
        ]
      },
      {
        title: 'Desarrollador Web / Integrador de APIs – NHL Decoración Comercial',
          period: 'Sep 2025 – Dic 2025',
        bullets: [
          'Integración y consumo de APIs REST con manejo de estados y errores HTTP.',
          'Interfaces React/Next.js/TypeScript: componentes modulares y accesibles.',
          'Optimización de rendimiento web (Core Web Vitals, carga, bundle).'
        ]
      },
      {
          title: 'Desarrollador Backend Java – DevDatep Consulting',
          period: 'Jun 2025 – Nov 2025',
        bullets: [
          'Servicios backend con Spring Boot y MySQL (alta transaccionalidad).',
          'Diseño/normalización de esquemas relacionales y optimización de queries.',
          'Refactorización legacy con patrones de diseño (mantenibilidad/rendimiento).',
          'Metodología Scrum: Git flow, code review, testing.'
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
          { name: 'Vue.js 💚', level: 'Avanzado' },
          { name: 'React ⚛️', level: 'Avanzado' },
          { name: 'Next.js ▲', level: 'Avanzado' },
          { name: 'TypeScript 🟦', level: 'Avanzado' },
          { name: 'Tailwind CSS 🎨', level: 'Avanzado' }
        ],
        backend: [
          { name: 'NestJS 🛠️', level: 'Avanzado' },
          { name: 'Node.js 🌐', level: 'Avanzado' },
          { name: 'TypeScript 🟦', level: 'Avanzado' },
          { name: 'Java (Spring Boot) ☕', level: 'Intermedio' },
          { name: 'PHP (Laravel) 🔴', level: 'Intermedio' },
          { name: 'Express 🚀', level: 'Intermedio' }
        ],
        database: [
          { name: 'PostgreSQL 🐘', level: 'Avanzado' },
          { name: 'MySQL 🟦', level: 'Avanzado' },
          { name: 'TypeORM 📦', level: 'Avanzado' },
          { name: 'Prisma 🔷', level: 'Intermedio' }
        ],
        devops: [
          { name: 'Docker 🐳', level: 'Avanzado' },
          { name: 'Docker Compose 🐳', level: 'Avanzado' },
          { name: 'AWS (EC2, RDS) ☁️', level: 'Intermedio' },
          { name: 'Git / GitHub 🔁', level: 'Avanzado' },
          { name: 'GitHub Actions (CI/CD) 🚀', level: 'Intermedio' },
          { name: 'Jest 🧪', level: 'Intermedio' },
          { name: 'Swagger (OpenAPI) 📋', level: 'Intermedio' }
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
    role: 'Backend Developer | NestJS · TypeScript · PostgreSQL · Docker · AWS',
    education: 'Computer Science and Information Technology (Graduate) - Cibertec',
    location: 'Lima, Peru',
    phone: '+51 953 587 619',
    email: 'eduardovaldivia1300@gmail.com',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    downloadCv: 'View CV',
    availability: 'Available for freelance and full-time projects',
    projectsList: [
      {
        title: 'E-commerce Clothing Store – E-commerce Microservice', 
        stack: 'NestJS · TypeScript · PostgreSQL · Docker · TypeORM · Tailwind CSS',
        description: 'Backend architecture for product catalog, purchase order management, and inventory control with state handling. Implementation of global exception filters, validation pipes, and multi-role authorization control (Admin / User). Containerized environment with Docker ready for production and optimized relational persistence.',
        image: '/images/tienda.png',
    repo: 'https://github.com/Eduardo1300/proyecto-tienda-ropa',
        demo: 'https://tienda.christophervaldivia.me/'
      },
      { 
        title: 'TaskFlow – Task Management Platform', 
        stack: 'NestJS · TypeScript · PostgreSQL · Docker · JWT · TypeORM',
        description: 'Decoupled REST API with modular architecture, role-based access control (RBAC), and secure JWT authentication. Relational modeling in PostgreSQL with ACID transactions for consistent persistence of concurrent flows (tasks, boards, and states). Full containerization with Docker Compose (API + PostgreSQL), automated testing, and production deployment with interactive Swagger documentation.',
        image: '/images/taskflow.png',
    repo: 'https://github.com/Eduardo1300/taskflow-app',
        demo: 'https://taskflow.christophervaldivia.me/'
      }
    ],
    aboutText:
      'Backend Developer specialized in Node.js, NestJS, and TypeScript with experience in production environments. Expert in designing and implementing modular APIs (REST and GraphQL), relational modeling and query optimization in PostgreSQL, and deploying microservices with Docker on AWS infrastructure (EC2, RDS). Strong foundations in clean architecture, automated testing, and comprehensive understanding of data consumption in frontend interfaces (Vue.js, React).',
    profileSection: {
      title: 'Professional Profile',
      content: 'Backend Developer specialized in Node.js, NestJS, and TypeScript with experience in production environments. Expert in designing and implementing modular APIs (REST and GraphQL), relational modeling and query optimization in PostgreSQL, and deploying microservices with Docker on AWS infrastructure (EC2, RDS). Strong foundations in clean architecture, automated testing, and comprehensive understanding of data consumption in frontend interfaces (Vue.js, React).'
    },
    contactLabelEmail: '📧',
    contactLabelPhone: '📞',
    contactLabelLocation: '📍',
    experiences: 'Experience',
    experienceItems: [
      {
        title: 'Backend Developer / Software Engineer – Aynitech',
        period: 'Dec 2025 – Present',
        isCurrent: true,
        bullets: [
          'Modular APIs and microservices with NestJS/TypeScript (Clean Architecture, DTOs).',
          'Relational modeling & SQL optimization in PostgreSQL for high concurrency.',
          'REST/GraphQL contracts & seamless Vue.js frontend integration.',
          'Docker deployments on AWS (EC2, RDS) & CI/CD with GitHub Actions.'
        ]
      },
      {
        title: 'Web Developer / API Integrator – NHL Decoración Comercial',
          period: 'Sep 2025 – Dec 2025',
        bullets: [
          'REST API integration/consumption with consistent state & error handling.',
          'React/Next.js/TypeScript: modular components & accessibility.',
          'Web performance optimization (Core Web Vitals, load times, bundle).'
        ]
      },
      {
          title: 'Backend Java Developer – DevDatep Consulting',
          period: 'Jun 2025 – Nov 2025',
        bullets: [
          'Spring Boot/MySQL backend services for high-transaction systems.',
          'Relational schema design/normalization & query optimization.',
          'Legacy refactoring with design patterns (maintainability/performance).',
          'Scrum: Git flow, code review, testing.'
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
          { name: 'Vue.js 💚', level: 'Advanced' },
          { name: 'React ⚛️', level: 'Advanced' },
          { name: 'Next.js ▲', level: 'Advanced' },
          { name: 'TypeScript 🟦', level: 'Advanced' },
          { name: 'Tailwind CSS 🎨', level: 'Advanced' }
        ],
        backend: [
          { name: 'NestJS 🛠️', level: 'Advanced' },
          { name: 'Node.js 🌐', level: 'Advanced' },
          { name: 'TypeScript 🟦', level: 'Advanced' },
          { name: 'Java (Spring Boot) ☕', level: 'Intermediate' },
          { name: 'PHP (Laravel) 🔴', level: 'Intermediate' },
          { name: 'Express 🚀', level: 'Intermediate' }
        ],
        database: [
          { name: 'PostgreSQL 🐘', level: 'Advanced' },
          { name: 'MySQL 🟦', level: 'Advanced' },
          { name: 'TypeORM 📦', level: 'Advanced' },
          { name: 'Prisma 🔷', level: 'Intermediate' }
        ],
        devops: [
          { name: 'Docker 🐳', level: 'Advanced' },
          { name: 'Docker Compose 🐳', level: 'Advanced' },
          { name: 'AWS (EC2, RDS) ☁️', level: 'Intermediate' },
          { name: 'Git / GitHub 🔁', level: 'Advanced' },
          { name: 'GitHub Actions (CI/CD) 🚀', level: 'Intermediate' },
          { name: 'Jest 🧪', level: 'Intermediate' },
          { name: 'Swagger (OpenAPI) 📋', level: 'Intermediate' }
        ]
      }
    },
    toggleTheme: 'Theme',
    toggleLang: 'EN'
  }
} as const