import React from 'react'
import { dictionary, Locale } from '../i18n'
import { FaLaptopCode, FaGithub, FaExternalLinkAlt, FaShoppingCart, FaTasks } from 'react-icons/fa'

const ProjectCard: React.FC<{ 
  title: string; 
  stack: string; 
  description: string;
  repo: string; 
  demo: string;
  icon: React.ReactNode;
}> = ({ title, stack, description, repo, demo, icon }) => (
  <div className="glass-card glass-card-hover rounded-2xl overflow-hidden animate-fade-in-up">
    <div className="project-image h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
      <div className="text-6xl text-cyan-400">
        {icon}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-cyan-400 mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{stack}</p>
      <p className="text-gray-300 text-base leading-relaxed mb-6">
        {description}
      </p>
      <div className="flex gap-4">
        <a
          href={repo}
          target="_blank"
          rel="noopener"
          className="project-btn github flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all"
        >
          <FaGithub />
          GitHub
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener"
          className="project-btn demo flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all"
        >
          <FaExternalLinkAlt />
          Demo
        </a>
      </div>
    </div>
  </div>
)

const Projects: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale]
  
  // Icons for projects
  const projectIcons = [
    <FaShoppingCart key="shop" />,
    <FaTasks key="tasks" />
  ]
  
  return (
    <section className="mb-12">
      <h2 className="section-title flex items-center gap-4 text-4xl font-bold mb-8 after:content-[''] after:flex-1 after:h-0.5">
        <FaLaptopCode />
        {t.projects}
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {t.projectsList.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            stack={project.stack}
            description={project.description}
            repo={project.repo}
            demo={project.demo}
            icon={projectIcons[index] || <FaLaptopCode />}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects