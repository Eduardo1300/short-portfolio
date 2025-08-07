import React from 'react'

const Hero: React.FC = () => {
  return (
    <header className="rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-brand-500 text-white grid place-content-center shadow-md">
          <span className="text-xl sm:text-2xl font-semibold tracking-wide">CV</span>
        </div>
        <div className="min-w-0">
          <h1 className="font-semibold leading-tight text-slate-50 text-[clamp(16px,2.2vw,28px)]">
            CHRISTOPHER EDUARDO
            <br />
            VALDIVIA BACA
          </h1>
          <p className="mt-1 text-[clamp(11px,1.1vw,14px)] text-slate-300">Desarrollador Full Stack Junior</p>
          <p className="text-[clamp(10px,1vw,13px)] text-slate-400">Estudiante de Computación e Informática (5to ciclo)</p>
        </div>
      </div>

      <ul className="mt-3 space-y-1.5 text-[clamp(10px,1vw,13px)] text-slate-300">
        <li className="flex items-center gap-2"><span className="inline-block text-slate-400">📍</span>Lima, Perú</li>
        <li className="flex items-center gap-2"><span className="inline-block text-slate-400">📞</span><a className="hover:text-brand-300" href="tel:+51953587619">+51 953 587 619</a></li>
        <li className="flex items-center gap-2"><span className="inline-block text-slate-400">📧</span><a className="hover:text-brand-300" href="mailto:eduardovaldivia130@outlook.es">eduardovaldivia130@outlook.es</a></li>
      </ul>

      <div className="mt-3 flex flex-wrap items-center gap-2.5">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener"
          className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-[clamp(10px,1vw,13px)] shadow hover:bg-slate-800 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener"
          className="px-3 py-1.5 rounded-lg bg-[#0a66c2] text-white text-[clamp(10px,1vw,13px)] shadow hover:brightness-110 transition"
        >
          LinkedIn
        </a>
        <a
          href="/cv-christopher-valdivia.pdf"
          target="_blank"
          rel="noopener"
          className="px-3 py-1.5 rounded-lg bg-brand-500 text-white text-[clamp(10px,1vw,13px)] shadow hover:bg-brand-600 transition"
        >
          Descargar CV
        </a>
      </div>
    </header>
  )
}

export default Hero