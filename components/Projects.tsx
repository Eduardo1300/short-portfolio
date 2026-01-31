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
    <article className={`glass-card glass-card-hover rounded-2xl overflow-hidden animate-fade-in-up transition-all ${
      isFeatured ? 'lg:col-span-2 ring-2 ring-cyan-400/50 bg-cyan-400/5' : ''
    }`} itemScope itemType="https://schema.org/CreativeWork">
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <div className={`project-image ${isFeatured ? 'h-40 sm:h-56' : 'h-32 sm:h-48'} bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center`} role="img" aria-label={altText || title}>
        <div className={`${isFeatured ? 'text-6xl sm:text-8xl' : 'text-4xl sm:text-6xl'} text-cyan-400`}>
          {icon}
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className={`${isFeatured ? 'text-xl sm:text-3xl' : 'text-lg sm:text-2xl'} font-bold text-cyan-400`} itemProp="headline">{title}</h3>
          {isFeatured && (
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 whitespace-nowrap">
              ★ {isFeatured ? 'Featured' : 'Destacado'}
            </span>
          )}
        </div>
        <p className="text-gray-400 text-xs sm:text-sm mb-4"><strong>Stack:</strong> {stack}</p>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6" itemProp="description">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} GitHub repository`}
              className="project-btn github flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium transition-all text-sm sm:text-base"
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
              aria-label={`${title} live demo`}
              className="project-btn demo flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium transition-all text-sm sm:text-base"
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
    <FaShoppingCart key="shop" />,
    <FaUsers key="empleados" />,
    <FaCog key="gestion" />
  ]

  const altTexts = [
    locale === 'es' ? 'Tienda online con carrito de compras' : 'Online store with shopping cart',
    locale === 'es' ? 'Sistema de gestión de tareas colaborativo con IA' : 'AI-powered collaborative task management system',
    locale === 'es' ? 'Sistema de gestión empresarial full stack' : 'Full stack enterprise management system'
  ]
  
  return (
    <section className="mb-12">
      <h2 className="section-title flex items-center gap-2 sm:gap-4 text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 after:content-[''] after:flex-1 after:h-0.5">
        <FaLaptopCode aria-hidden="true" />
        {t.projects}
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8" role="list">
        <div key={t.projectsList[0].title} role="listitem" className="lg:col-span-2">
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
