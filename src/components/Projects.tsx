import React from 'react'
import { dictionary, Locale } from '../i18n'

const ProjectCard: React.FC<{ title: string; stack: string; repo: string; demo: string }> = ({ title, stack, repo, demo }) => (
  <article className="group rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-sm flex flex-col">
    <div>
      <h3 className="text-[clamp(12px,1.1vw,15px)] font-semibold text-slate-100">{title}</h3>
      <p className="text-[clamp(10px,1vw,13px)] text-slate-300">{stack}</p>
    </div>
    <div className="mt-auto flex gap-2 pt-3">
      <a
        href={repo}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 text-white text-[clamp(10px,1vw,13px)] hover:bg-slate-800 transition"
      >
        GitHub
      </a>
      <a
        href={demo}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-brand-500 text-white text-[clamp(10px,1vw,13px)] hover:bg-brand-600 transition"
      >
        Demo
      </a>
    </div>
  </article>
)

const Projects: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale]
  return (
    <section className="rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-sm h-full grid grid-rows-[auto,1fr]">
      <div className="flex items-center justify-between">
        <h2 className="text-[clamp(13px,1.2vw,16px)] font-semibold text-slate-100 tracking-wide">{t.projects}</h2>
        <div className="h-px w-1/2 bg-gradient-to-r from-white/20 to-transparent" />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-4">
        {t.projectsList.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            stack={p.stack}
            repo="https://github.com/"
            demo="https://example.com"
          />
        ))}
      </div>
    </section>
  )
}

export default Projects