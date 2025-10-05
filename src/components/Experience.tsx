import React from 'react'
import { dictionary, Locale } from '../i18n'
import { FaBriefcase } from 'react-icons/fa'

const Experience: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale]
  return (
    <section className="mb-12">
      <h2 className="section-title flex items-center gap-4 text-4xl font-bold mb-8 after:content-[''] after:flex-1 after:h-0.5">
        <FaBriefcase />
        {t.experiences}
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {t.experienceItems.map((exp, idx) => (
          <div
            key={exp.title}
            className={
              `glass-card rounded-2xl p-6 glass-card-hover${
                idx === t.experienceItems.length - 1 ? ' col-span-2' : ''
              }`
            }
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">{exp.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
            <ul className="space-y-2 text-gray-300">
              {exp.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience