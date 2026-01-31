'use client'

import { dictionary, Locale } from '@/lib/i18n'
import { FaUserTie, FaBullseye, FaRocket, FaCode, FaUsers } from 'react-icons/fa'

export default function Profile({ locale }: { locale: Locale }) {
  const t = dictionary[locale]
  return (
    <section className="mb-12">
      <h2 className="section-title flex items-center gap-2 sm:gap-4 text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 after:content-[''] after:flex-1 after:h-0.5">
        <FaUserTie aria-hidden="true" />
        {t.profileSection.title}
      </h2>
      
      <div className="glass-card rounded-2xl p-6 sm:p-8" itemScope itemType="https://schema.org/Person">
        <p className="text-base sm:text-xl leading-relaxed text-gray-300 mb-6 sm:mb-8" itemProp="description">
          {t.profileSection.content}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4" role="list">
          <div className="flex items-center gap-3 p-3 sm:p-4 bg-cyan-400/10 rounded-xl border-l-4 border-cyan-400" role="listitem">
            <FaBullseye className="text-cyan-400 text-lg sm:text-xl flex-shrink-0" aria-hidden="true" />
            <span className="text-gray-300 text-xs sm:text-sm">
              {locale === 'es' ? 'Enfoque en UX' : 'UX Focused'}
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 sm:p-4 bg-cyan-400/10 rounded-xl border-l-4 border-cyan-400" role="listitem">
            <FaCode className="text-cyan-400 text-lg sm:text-xl flex-shrink-0" aria-hidden="true" />
            <span className="text-gray-300 text-xs sm:text-sm">
              {locale === 'es' ? 'Código limpio' : 'Clean Code'}
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 sm:p-4 bg-cyan-400/10 rounded-xl border-l-4 border-cyan-400" role="listitem">
            <FaRocket className="text-cyan-400 text-lg sm:text-xl flex-shrink-0" aria-hidden="true" />
            <span className="text-gray-300 text-xs sm:text-sm">
              {locale === 'es' ? 'Aprendizaje continuo' : 'Continuous Learning'}
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 sm:p-4 bg-cyan-400/10 rounded-xl border-l-4 border-cyan-400" role="listitem">
            <FaUsers className="text-cyan-400 text-lg sm:text-xl flex-shrink-0" aria-hidden="true" />
            <span className="text-gray-300 text-xs sm:text-sm">
              {locale === 'es' ? 'Trabajo en equipo' : 'Team Player'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
