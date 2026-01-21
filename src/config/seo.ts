// SEO Configuration for Portfolio
export const seoConfig = {
  site: {
    name: 'Christopher Valdivia',
    description: 'Full Stack Developer Portfolio - React, TypeScript, NestJS',
    url: 'https://christopher-valdivia.dev',
    image: 'https://christopher-valdivia.dev/og-image.jpg',
    author: 'Christopher Eduardo Valdivia Baca',
    locale: 'es_ES',
  },
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'TypeScript',
    'NestJS',
    'Web Development',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript',
    'PostgreSQL',
    'Web Designer',
    'Lima Peru Developer',
    'Freelance Developer',
    'Junior Developer',
    'Software Developer',
  ],
  socialMedia: {
    github: 'https://github.com/Eduardo1300',
    linkedin: 'https://www.linkedin.com/in/christopher-eduardo-valdivia-baca-899051318/',
    email: 'eduardovaldivia1300@gmail.com',
    phone: '+51 953 587 619',
  },
  contact: {
    location: 'Lima, Perú',
    timezone: 'PET (UTC-5)',
  },
  technologies: {
    frontend: ['React', 'TypeScript', 'JavaScript', 'Vue.js', 'Tailwind CSS', 'CSS3', 'HTML5'],
    backend: ['NestJS', 'Node.js', 'Express', 'Python', 'SQL'],
    database: ['PostgreSQL', 'Supabase', 'MySQL'],
    devops: ['Docker', 'AWS', 'Git', 'GitHub', 'Vercel', 'Render'],
  },
  projects: [
    {
      id: 'tienda-online',
      name: 'Tienda Online Full Stack',
      description: 'E-commerce platform with secure authentication, shopping cart, and order management',
      technologies: ['React', 'NestJS', 'PostgreSQL', 'TailwindCSS'],
      url: 'https://tienda-frontend-6mrw.onrender.com/',
      repository: 'https://github.com/Eduardo1300/proyecto-tienda-ropa',
      featured: true,
    },
    {
      id: 'taskflow',
      name: 'TaskFlow – AI-Powered Collaborative Task Manager',
      description: 'Real-time task management system with AI recommendations and advanced analytics',
      technologies: ['React', 'TypeScript', 'Supabase', 'TailwindCSS', 'AI'],
      url: 'https://taskflow-app-prod.vercel.app/',
      repository: 'https://github.com/Eduardo1300/taskflow-app',
      featured: true,
    },
  ],
}

export default seoConfig
