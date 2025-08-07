import React from 'react'

const Contact: React.FC = () => {
  return (
    <aside className="rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-sm h-full">
      <h2 className="text-[clamp(12px,1.1vw,15px)] font-semibold text-slate-100">Contacto</h2>
      <ul className="mt-2 space-y-1 text-[clamp(10px,1vw,13px)] text-slate-300">
        <li className="flex items-center gap-2"><span className="text-slate-400">📧</span><a className="hover:text-brand-300" href="mailto:eduardovaldivia130@outlook.es">eduardovaldivia130@outlook.es</a></li>
        <li className="flex items-center gap-2"><span className="text-slate-400">📞</span><a className="hover:text-brand-300" href="tel:+51953587619">+51 953 587 619</a></li>
        <li className="flex items-center gap-2"><span className="text-slate-400">📍</span>Lima, Perú</li>
      </ul>
    </aside>
  )
}

export default Contact