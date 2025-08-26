import React from 'react'
import { dictionary, Locale } from '../i18n'

const About: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale]
  return (
    <div className="glass-card rounded-2xl p-6 h-full">
      <h2 className="text-xl font-semibold text-cyan-400 mb-4">{t.about}</h2>
      <p className="text-gray-300 leading-relaxed">
        {t.aboutText}
      </p>
    </div>
  )
}

export default About