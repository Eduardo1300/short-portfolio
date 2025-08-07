import React from 'react'

const technologies = [
  'React', 'TypeScript', 'Tailwind CSS', 'NestJS', 'Node.js', 'PostgreSQL', 'Docker', 'Git', 'CI/CD (GitHub Actions)'
]

const Technologies: React.FC = () => {
  return (
    <section className="rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-sm">
      <h2 className="text-[clamp(11px,1vw,13px)] font-semibold uppercase tracking-wider text-slate-300">Tecnologías</h2>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 rounded-md border border-white/10 bg-white/[0.06] text-[clamp(9px,0.95vw,12px)] text-slate-200 hover:bg-white/[0.1] transition"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Technologies