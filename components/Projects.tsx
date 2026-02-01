'use client'

import { dictionary, Locale } from '@/lib/i18n'
import { FaLaptopCode, FaGithub, FaExternalLinkAlt, FaShoppingCart, FaUsers, FaCog } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  stack: string
  description: string
  repo: string
  demo: string
  icon: React.ReactNode
  isFeatured?: boolean
  altText?: string
}

function ProjectCard({ title, stack, description, repo, demo, icon, isFeatured = false, altText }: ProjectCardProps) {
  return (
    <article 
      className={`glass-card glass-card-hover rounded-2xl overflow-hidden animate-fade-in-up transition-all ${
        isFeatured ? 'lg:col-span-2 ring-2 ring-cyan-400/50 bg-cyan-400/5' : ''
      }`}
      itemScope 
      itemType="https://schema.org/CreativeWork"
      role="article"
      aria-labelledby={`project-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <div 
        className={`project-image ${isFeatured ? 'h-40 sm:h-56' : 'h-32 sm:h-48'} bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center`} 
        role="img" 
        aria-label={altText || title}
      >
        <div 
          className={`${isFeatured ? 'text-6xl sm:text-8xl' : 'text-4xl sm:text-6xl'} text-cyan-400`}
          aria-hidden="true"
        >
          {icon}
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 
            id={`project-${title.replace(/\s+/g, '-').toLowerCase()}`}
            className={`${isFeatured ? 'text-xl sm:text-3xl' : 'text-lg sm:text-2xl'} font-bold text-cyan-400`} 
            itemProp="headline"
          >
            {title}
          </h3>
          {isFeatured && (
            <span 
              className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 whitespace-nowrap"
              aria-label={isFeatured ? (typeof window !== 'undefined' && window.document.documentElement.lang === 'es' ? 'Proyecto destacado' : 'Featured project') : ''}
            >
              ★ {typeof window !== 'undefined' && window.document.documentElement.lang === 'es' ? 'Destacado' : 'Featured'}
            </span>
          )}
        </div>
        <p className="text-gray-400 text-xs sm:text-sm mb-4">
          <strong aria-hidden="true">Stack:</strong> <span className="sr-only">Tecnologías utilizadas: </span>{stack}
        </p>
        <p 
          className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6" 
          itemProp="description"
        >
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn github flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium transition-all text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label={`${title} - ${typeof window !== 'undefined' && window.document.documentElement.lang === 'es' ? 'Ver código fuente en GitHub' : 'View source code on GitHub'}`}
              itemProp="url"
            >
              <FaGithub aria-hidden="true" />
              GitHub
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn demo flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium transition-all text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label={`${title} - ${typeof window !== 'undefined' && window.document.documentElement.lang === 'es' ? 'Ver demostración en vivo' : 'View live demo'}`}
              itemProp="url"
            >
              <FaExternalLinkAlt aria-hidden="true" />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects({ locale }: { locale: Locale }) {
  const t = dictionary[locale]
  
  const projectIcons = [
    <FaShoppingCart key="shop" aria-hidden="true" />,
    <FaUsers key="empleados" aria-hidden="true" />,
    <FaCog key="gestion" aria-hidden="true" />,
  ]

  const altTexts = [
    locale === 'es' ? 'Tienda online con carrito de compras' : 'Online store with shopping cart',
    locale === 'es' ? 'Sistema de gestión de tareas colaborativo con IA' : 'AI-powered collaborative task management system',
    locale === 'es' ? 'Sistema de gestión empresarial full stack' : 'Full stack enterprise management system',
  ]
  
  return (
    <section className="mb-12" aria-labelledby="projects-heading">
      <h2 
        id="projects-heading"
        className="section-title flex items-center gap-2 sm:gap-4 text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 after:content-[''] after:flex-1 after:h-0.5"
      >
        <FaLaptopCode aria-hidden="true" />
        {t.projects}
      </h2>
      
      <div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8" 
        role="list"
        aria-label={t.projects}
      >
        <div 
          key={t.projectsList[0].title} 
          role="listitem" 
          className="lg:col-span-2"
        >
          <ProjectCard
            title={t.projectsList[0].title}
            stack={t.projectsList[0].stack}
            description={t.projectsList[0].description}
            repo={t.projectsList[0].repo}
            demo={t.projectsList[0].demo}
            icon={projectIcons[0]}
            isFeatured={true}
            altText={altTexts[0]}
          />
        </div>
        
        {t.projectsList.slice(1).map((project, index) => (
          <div key={project.title} role="listitem">
            <ProjectCard
              title={project.title}
              stack={project.stack}
              description={project.description}
              repo={project.repo}
              demo={project.demo}
              icon={projectIcons[index + 1]}
              isFeatured={false}
              altText={altTexts[index + 1]}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
