import React from 'react'
import { dictionary, Locale } from '../i18n'
import { FaHeart, FaLightbulb, FaGraduationCap } from 'react-icons/fa'

const About: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale]
  return (
    <div className="glass-card rounded-2xl p-4 sm:p-6 h-full">
      <h2 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
        <FaHeart className="text-cyan-400" />
        {t.about}
      </h2>
      <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
        {t.aboutText}
      </p>
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1 px-2 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-xs text-cyan-400">
          <FaLightbulb className="text-[10px]" />
          {locale === 'es' ? 'Proactivo' : 'Proactive'}
        </span>
        <span className="inline-flex items-center gap-1 px-2 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-xs text-cyan-400">
          <FaGraduationCap className="text-[10px]" />
          {locale === 'es' ? 'Autodidacta' : 'Self-taught'}
        </span>
      </div>
    </div>
  )
}

export default About