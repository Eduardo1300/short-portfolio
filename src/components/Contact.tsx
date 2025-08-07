import React from 'react'
import { dictionary, Locale } from '../i18n'

const Contact: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale]
  return (
    <aside className="rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-sm h-full">
      <h2 className="text-[clamp(12px,1.1vw,15px)] font-semibold text-slate-100">{t.contact}</h2>
      <ul className="mt-2 space-y-1 text-[clamp(10px,1vw,13px)] text-slate-300">
        <li className="flex items-center gap-2"><span className="text-slate-400">{t.contactLabelEmail}</span><a className="hover:text-brand-300" href={`mailto:${t.email}`}>{t.email}</a></li>
        <li className="flex items-center gap-2"><span className="text-slate-400">{t.contactLabelPhone}</span><a className="hover:text-brand-300" href="tel:+51953587619">{t.phone}</a></li>
        <li className="flex items-center gap-2"><span className="text-slate-400">{t.contactLabelLocation}</span>{t.location}</li>
      </ul>
    </aside>
  )
}

export default Contact