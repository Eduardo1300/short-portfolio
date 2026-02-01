'use client'

import { memo } from 'react'
import { dictionary, Locale } from '@/lib/i18n'
import { FaBriefcase } from 'react-icons/fa'

function Experience({ locale }: { locale: Locale }) {
  const t = dictionary[locale]
  const experienceItems = t.experienceItems
  
  return (
    <section className="mb-12" aria-labelledby="experience-heading">
      <h2 
        id="experience-heading"
        className="section-title flex items-center gap-2 sm:gap-4 text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 after:content-[''] after:flex-1 after:h-0.5"
      >
        <FaBriefcase aria-hidden="true" />
        {t.experiences}
      </h2>
      
      <div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6" 
        role="list"
        aria-label={locale === 'es' ? 'Experiencia laboral' : 'Work experience'}
      >
        {experienceItems.map((exp: { title: string; period: string; bullets: readonly string[] }, idx: number) => {
          const isCurrent = exp.period.includes('Actualidad') || exp.period.includes('Present');
          const isNHL = exp.title.includes('NHL');
          
          return (
            <article
              key={exp.title}
              role="listitem"
              className={`glass-card rounded-2xl p-4 sm:p-6 glass-card-hover transition-all ${
                isCurrent ? 'md:col-span-2 ring-2 ring-cyan-400/50 bg-cyan-400/5' : ''
              } ${
                isNHL ? 'md:col-span-2' : ''
              }`}
              itemScope
              itemType="https://schema.org/EmployeeRole"
              aria-labelledby={`exp-title-${idx}`}
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 
                  id={`exp-title-${idx}`}
                  className="text-lg sm:text-xl font-semibold text-cyan-400" 
                  itemProp="roleName"
                >
                  {exp.title}
                </h3>
                {isCurrent && (
                  <span 
                    className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 whitespace-nowrap"
                    title={locale === 'es' ? 'Posición actual' : 'Current position'}
                    aria-label={locale === 'es' ? 'Posición actual' : 'Current position'}
                  >
                    ★ {locale === 'es' ? 'Actual' : 'Current'}
                  </span>
                )}
              </div>
              <p 
                className="text-gray-400 text-xs sm:text-sm mb-4" 
                itemProp="description"
              >
                {exp.period}
              </p>
              <ul 
                className="space-y-2 text-gray-300 text-sm" 
                role="list"
                aria-label={locale === 'es' ? 'Funciones y responsabilidades' : 'Functions and responsibilities'}
              >
                {exp.bullets.map((bullet: string, index: number) => (
                  <li key={index} className="flex items-start gap-2" role="listitem">
                    <span className="text-cyan-400 mt-1 flex-shrink-0" aria-hidden="true">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default memo(Experience)
