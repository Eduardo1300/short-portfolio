'use client'

import { memo } from 'react'
import { dictionary, Locale } from '@/lib/i18n'
import { FaHeart, FaLightbulb, FaGraduationCap } from 'react-icons/fa'

function About({ locale }: { locale: Locale }) {
  const t = dictionary[locale]
  
  const traits = [
    { icon: FaLightbulb, label: locale === 'es' ? 'Proactivo' : 'Proactive' },
    { icon: FaGraduationCap, label: locale === 'es' ? 'Autodidacta' : 'Self-taught' },
  ]

  return (
    <div 
      className="glass-card rounded-2xl p-4 sm:p-6 h-full"
      role="region"
      aria-labelledby="about-heading"
    >
      <h2 
        id="about-heading"
        className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2"
      >
        <FaHeart className="text-cyan-400" aria-hidden="true" />
        {t.about}
      </h2>
      <p 
        className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4" 
        itemProp="description"
      >
        {t.aboutText}
      </p>
      <ul 
        className="flex flex-wrap gap-2" 
        role="list"
        aria-label={locale === 'es' ? 'Características personales' : 'Personal characteristics'}
      >
        {traits.map((trait, index) => (
          <li key={index} role="listitem">
            <span 
              className="inline-flex items-center gap-1 px-2 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-xs text-cyan-400"
            >
              <trait.icon className="text-[10px]" aria-hidden="true" />
              {trait.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default memo(About)
