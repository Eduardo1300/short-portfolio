import React from 'react'
import { dictionary, Locale } from '../i18n'
import { FiCpu } from 'react-icons/fi'

const SkillBadge: React.FC<{ name: string; level: string }> = ({ name, level }) => {
  const levelColors = {
    'Avanzado': 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    'Advanced': 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    'Intermedio': 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    'Intermediate': 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    'Básico': 'border-blue-500/30 bg-blue-500/10 text-blue-300',
    'Basic': 'border-blue-500/30 bg-blue-500/10 text-blue-300'
  }

  const levelColorsLight = {
    'Avanzado': 'border-emerald-500/50 bg-emerald-50 text-emerald-700',
    'Advanced': 'border-emerald-500/50 bg-emerald-50 text-emerald-700',
    'Intermedio': 'border-amber-500/50 bg-amber-50 text-amber-700',
    'Intermediate': 'border-amber-500/50 bg-amber-50 text-amber-700',
    'Básico': 'border-blue-500/50 bg-blue-50 text-blue-700',
    'Basic': 'border-blue-500/50 bg-blue-50 text-blue-700'
  }

  const darkColorClass = levelColors[level as keyof typeof levelColors] || levelColors['Básico']
  const lightColorClass = levelColorsLight[level as keyof typeof levelColorsLight] || levelColorsLight['Básico']

  return (
    <div className="group relative">
      <span className={`px-2 py-1 rounded-md border text-[clamp(9px,0.95vw,12px)] hover:scale-105 transition-all duration-200 cursor-default
        dark:${darkColorClass} dark:bg-white/[0.06] dark:text-slate-200
        light:${lightColorClass}`}>
        {name}
      </span>
      {/* Tooltip con nivel */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
        {level}
      </div>
    </div>
  )
}

const Technologies: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale].technologiesGrouped
  return (
    <section className="card-bg rounded-xl border p-4 shadow-sm">
      <div className="flex items-center gap-2 text-secondary">
        <FiCpu className="opacity-80" />
        <h2 className="text-[clamp(11px,1vw,13px)] font-semibold uppercase tracking-wider">{t.title}</h2>
      </div>
      <div className="mt-2 grid grid-cols-1 gap-2">
        <div>
          <h3 className="text-[clamp(10px,0.95vw,12px)] text-muted">{t.frontend}</h3>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {t.items.frontend.map((item) => (
              <SkillBadge key={item.name} name={item.name} level={item.level} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-[clamp(10px,0.95vw,12px)] text-muted">{t.backend}</h3>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {t.items.backend.map((item) => (
              <SkillBadge key={item.name} name={item.name} level={item.level} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-[clamp(10px,0.95vw,12px)] text-muted">{t.devops}</h3>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {t.items.devops.map((item) => (
              <SkillBadge key={item.name} name={item.name} level={item.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies