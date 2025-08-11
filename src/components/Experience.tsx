import React from 'react'
import { dictionary, Locale } from '../i18n'

const Experience: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale]
  return (
    <section className="card-bg rounded-xl border p-4 shadow-sm h-full grid grid-rows-[auto,1fr]">
      <div className="flex items-center justify-between">
        <h2 className="text-[clamp(13px,1.2vw,16px)] font-semibold text-primary tracking-wide">{t.experiences}</h2>
        <div className="divider-gradient h-px w-1/2" />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-4">
        {t.experienceItems.map((exp) => (
          <article key={exp.title} className="card-bg rounded-lg border p-3">
            <h3 className="text-[clamp(12px,1.1vw,15px)] font-semibold text-primary">{exp.title}</h3>
            <p className="text-[clamp(10px,1vw,12px)] text-secondary">{exp.period}</p>
            <ul className="mt-2 space-y-1 text-[clamp(10px,1vw,12px)] text-secondary list-disc list-inside">
              {exp.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience