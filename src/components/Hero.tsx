import React from 'react'
import { dictionary, Locale } from '../i18n'

const Hero: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale]
  return (
    <header className="card-bg rounded-xl border p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-brand-500 text-white grid place-content-center shadow-md">
          <span className="text-xl sm:text-2xl font-semibold tracking-wide">CV</span>
        </div>
        <div className="min-w-0">
          <h1 className="font-semibold leading-tight text-accent text-[clamp(16px,2.2vw,28px)]">
            CHRISTOPHER EDUARDO
            <br />
            VALDIVIA BACA
          </h1>
          <p className="mt-1 text-[clamp(11px,1.1vw,14px)] text-secondary">{t.role}</p>
          <p className="text-[clamp(10px,1vw,13px)] text-muted">{t.education}</p>
        </div>
      </div>

      <ul className="mt-3 space-y-1.5 text-[clamp(10px,1vw,13px)] text-secondary">
        <li className="flex items-center gap-2"><span className="inline-block text-muted">{t.contactLabelLocation}</span>{t.location}</li>
        <li className="flex items-center gap-2"><span className="inline-block text-muted">{t.contactLabelPhone}</span><a className="hover:text-brand-300" href="tel:+51953587619">{t.phone}</a></li>
        <li className="flex items-center gap-2"><span className="inline-block text-muted">{t.contactLabelEmail}</span><a className="hover:text-brand-300" href="mailto:eduardovaldivia130@outlook.es">{t.email}</a></li>
      </ul>

      <div className="mt-3 flex flex-wrap items-center gap-2.5">
        <a
          href="https://github.com/Eduardo1300/"
          target="_blank"
          rel="noopener"
          className="btn-secondary px-3 py-1.5 rounded-lg text-[clamp(10px,1vw,13px)] shadow transition"
        >
          {t.github}
        </a>
        <a
          href="https://www.linkedin.com/in/christopher-eduardo-valdivia-baca-899051318//"
          target="_blank"
          rel="noopener"
          className="px-3 py-1.5 rounded-lg bg-[#0a66c2] text-white text-[clamp(10px,1vw,13px)] shadow hover:brightness-110 transition"
        >
          {t.linkedin}
        </a>
        <a
          href="/EduardoValdivia_CV.pdf"
          download="EduardoValdivia_CV.pdf"
          className="px-3 py-1.5 rounded-lg bg-brand-500 text-white text-[clamp(10px,1vw,13px)] shadow hover:bg-brand-600 transition"
        >
          {t.downloadCv}
        </a>
      </div>
    </header>
  )
}

export default Hero