import React from 'react'
import { dictionary, Locale } from '../i18n'
import { FiPlay, FiGithub, FiExternalLink } from 'react-icons/fi'

const ProjectCard: React.FC<{ 
  title: string; 
  stack: string; 
  description: string;
  image: string;
  repo: string; 
  demo: string;
}> = ({ title, stack, description, image, repo, demo }) => (
  <article className="group card-bg rounded-xl border overflow-hidden shadow-sm flex flex-col hover-border transition-all duration-300">
    {/* Imagen del proyecto */}
    <div className="relative overflow-hidden bg-gradient-to-br from-brand-500/20 to-brand-700/20">
      <img 
        src={image} 
        alt={title}
        className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
    
    {/* Contenido */}
    <div className="p-4 flex flex-col flex-1">
      <div className="flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-[clamp(12px,1.1vw,15px)] font-semibold text-primary leading-tight">{title}</h3>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <a
              href={demo}
              target="_blank"
              rel="noopener"
              className="icon-bg-demo p-1 rounded-md transition"
              title="Ver Demo"
            >
              <FiPlay className="w-3 h-3" />
            </a>
            <a
              href={repo}
              target="_blank"
              rel="noopener"
              className="icon-bg-github p-1 rounded-md transition"
              title="Ver Código"
            >
              <FiGithub className="w-3 h-3" />
            </a>
          </div>
        </div>
        <p className="text-[clamp(9px,0.9vw,12px)] text-muted mb-2">{stack}</p>
        <p className="text-[clamp(9px,0.85vw,11px)] text-secondary leading-relaxed">{description}</p>
      </div>
      
      {/* Enlaces principales */}
      <div className="flex gap-2 pt-3 mt-auto">
        <a
          href={repo}
          target="_blank"
          rel="noopener"
          className="btn-secondary inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[clamp(10px,1vw,13px)] transition group/link"
        >
          <FiGithub className="w-3 h-3 group-hover/link:rotate-12 transition-transform" />
          GitHub
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-brand-500 text-white text-[clamp(10px,1vw,13px)] hover:bg-brand-600 transition group/link"
        >
          <FiPlay className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
          Demo
        </a>
      </div>
    </div>
  </article>
)

const Projects: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale]
  return (
    <section className="card-bg rounded-xl border p-4 shadow-sm h-full grid grid-rows-[auto,1fr]">
      <div className="flex items-center justify-between">
        <h2 className="text-[clamp(13px,1.2vw,16px)] font-semibold text-primary tracking-wide">{t.projects}</h2>
        <div className="divider-gradient h-px w-1/2" />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-4">
        {t.projectsList.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            stack={p.stack}
            description={p.description}
            image={p.image}
            repo={p.github}
            demo={p.demo}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects