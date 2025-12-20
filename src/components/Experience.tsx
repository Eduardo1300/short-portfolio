import React from 'react'
import { dictionary, Locale } from '../i18n'
import { FaBriefcase } from 'react-icons/fa'

const Experience: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale]
  return (
    <section className="mb-12">
      <h2 className="section-title flex items-center gap-2 sm:gap-4 text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 after:content-[''] after:flex-1 after:h-0.5">
        <FaBriefcase />
        {t.experiences}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {t.experienceItems.map((exp, idx) => {
          const isCurrent = exp.period.includes('Actualidad') || exp.period.includes('Present');
          const isNHL = exp.title.includes('NHL');
          return (
            <div
              key={exp.title}
              className={`glass-card rounded-2xl p-4 sm:p-6 glass-card-hover transition-all ${
                isCurrent ? 'md:col-span-2 ring-2 ring-cyan-400/50 bg-cyan-400/5' : ''
              } ${
                isNHL ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-400">{exp.title}</h3>
                {isCurrent && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 whitespace-nowrap">
                    {locale === 'es' ? '★ Actual' : '★ Current'}
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-xs sm:text-sm mb-4">{exp.period}</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                {exp.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Experience