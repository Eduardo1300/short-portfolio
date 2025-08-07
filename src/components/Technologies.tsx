import React from 'react'
import { dictionary, Locale } from '../i18n'
import { FiCpu } from 'react-icons/fi'

const Technologies: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale].technologiesGrouped
  return (
    <section className="rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-sm">
      <div className="flex items-center gap-2 text-slate-300">
        <FiCpu className="opacity-80" />
        <h2 className="text-[clamp(11px,1vw,13px)] font-semibold uppercase tracking-wider">{t.title}</h2>
      </div>
      <div className="mt-2 grid grid-cols-1 gap-2">
        <div>
          <h3 className="text-[clamp(10px,0.95vw,12px)] text-slate-400">{t.frontend}</h3>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {t.items.frontend.map((item) => (
              <span key={item} className="px-2 py-1 rounded-md border border-white/10 bg-white/[0.06] text-[clamp(9px,0.95vw,12px)] text-slate-200">{item}</span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-[clamp(10px,0.95vw,12px)] text-slate-400">{t.backend}</h3>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {t.items.backend.map((item) => (
              <span key={item} className="px-2 py-1 rounded-md border border-white/10 bg-white/[0.06] text-[clamp(9px,0.95vw,12px)] text-slate-200">{item}</span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-[clamp(10px,0.95vw,12px)] text-slate-400">{t.devops}</h3>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {t.items.devops.map((item) => (
              <span key={item} className="px-2 py-1 rounded-md border border-white/10 bg-white/[0.06] text-[clamp(9px,0.95vw,12px)] text-slate-200">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies