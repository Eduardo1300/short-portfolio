import React from 'react'
import { dictionary, Locale } from '../i18n'
import { FaLaptopCode, FaGithub, FaExternalLinkAlt, FaShoppingCart, FaUsers, FaCog } from 'react-icons/fa'

const ProjectCard: React.FC<{ 
  title: string; 
  stack: string; 
  description: string;
  repo: string; 
  demo: string;
  icon: React.ReactNode;
  isFeatured?: boolean;
}> = ({ title, stack, description, repo, demo, icon, isFeatured = false }) => (
  <div className={`glass-card glass-card-hover rounded-2xl overflow-hidden animate-fade-in-up transition-all ${
    isFeatured ? 'lg:col-span-2 ring-2 ring-cyan-400/50 bg-cyan-400/5' : ''
  }`}>
    <div className={`project-image ${isFeatured ? 'h-40 sm:h-56' : 'h-32 sm:h-48'} bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center`}>
      <div className={`${isFeatured ? 'text-6xl sm:text-8xl' : 'text-4xl sm:text-6xl'} text-cyan-400`}>
        {icon}
      </div>
    </div>
    <div className="p-4 sm:p-6">
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className={`${isFeatured ? 'text-xl sm:text-3xl' : 'text-lg sm:text-2xl'} font-bold text-cyan-400`}>{title}</h3>
        {isFeatured && (
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 whitespace-nowrap">
            ★ Destacado
          </span>
        )}
      </div>
      <p className="text-gray-400 text-xs sm:text-sm mb-4">{stack}</p>
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noopener"
            className="project-btn github flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium transition-all text-sm sm:text-base"
          >
            <FaGithub />
            GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener"
            className="project-btn demo flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium transition-all text-sm sm:text-base"
          >
            <FaExternalLinkAlt />
            Demo
          </a>
        )}
      </div>
    </div>
  </div>
)

const Projects: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale]
  
  // Icons for projects
  const projectIcons = [
    <FaCog key="gestion" />,
    <FaUsers key="empleados" />,
    <FaShoppingCart key="shop" />
  ]
  
  return (
    <section className="mb-12">
      <h2 className="section-title flex items-center gap-2 sm:gap-4 text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 after:content-[''] after:flex-1 after:h-0.5">
        <FaLaptopCode />
        {t.projects}
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {t.projectsList.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            stack={project.stack}
            description={project.description}
            repo={project.repo}
            demo={project.demo}
            icon={projectIcons[index] || <FaLaptopCode />}
            isFeatured={index === 0}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects