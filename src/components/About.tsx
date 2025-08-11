import React from 'react'
import { dictionary, Locale } from '../i18n'

const About: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale]
  return (
    <article className="card-bg rounded-xl border p-4 shadow-sm h-full">
      <h2 className="text-[clamp(12px,1.1vw,15px)] font-semibold text-primary">{t.about}</h2>
      <p className="mt-1 text-[clamp(10px,1vw,13px)] text-secondary leading-snug">
        {t.aboutText}
      </p>
    </article>
  )
}

export default About