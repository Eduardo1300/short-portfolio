import React from 'react'

const About: React.FC = () => {
  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-sm h-full">
      <h2 className="text-[clamp(12px,1.1vw,15px)] font-semibold text-slate-100">Sobre mí</h2>
      <p className="mt-1 text-[clamp(10px,1vw,13px)] text-slate-300 leading-snug">
        Apasionado por el desarrollo web moderno, escribo código limpio y funcional. Me enfoco en crear
        soluciones útiles con buen diseño y estructura escalable.
      </p>
    </article>
  )
}

export default About