'use client'

import { memo } from 'react'
import { dictionary, Locale } from '@/lib/i18n'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'

function Hero({ locale }: { locale: Locale }) {
  const t = dictionary[locale]
  
  return (
    <div 
      className="glass-card profile-border rounded-3xl p-8 text-center animate-fade-in-left" 
      id="inicio"
      role="article"
      aria-labelledby="hero-name"
    >
      <div 
        className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mx-auto mb-6 text-4xl font-bold text-black shadow-xl shadow-cyan-400/30 animate-pulse-glow"
        role="img"
        aria-label={locale === 'es' 
          ? `Foto de avatar de Christopher Valdivia con iniciales EV`
          : `Christopher Valdivia avatar photo with initials EV`
        }
      >
        EV
      </div>

      <h1 
        id="hero-name"
        className="text-xl md:text-3xl font-bold mb-2 section-title text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600"
      >
        CHRISTOPHER EDUARDO VALDIVIA BACA
      </h1>
      <p className="text-base md:text-xl text-gray-300 mb-2" itemProp="jobTitle">{t.role}</p>
      <p className="text-sm md:text-base text-gray-400 mb-6" itemProp="description">{t.education}</p>

      <nav className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6" aria-label={locale === 'es' ? 'Redes sociales' : 'Social networks'}>
        <a
          href="https://github.com/Eduardo1300/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn github flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          aria-label={locale === 'es' 
            ? 'Visitar perfil de GitHub de Christopher Valdivia'
            : 'Visit Christopher Valdivia GitHub profile'
          }
        >
          <FaGithub aria-hidden="true" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/christopher-eduardo-valdivia-baca-899051318/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn linkedin flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          aria-label={locale === 'es' 
            ? 'Visitar perfil de LinkedIn de Christopher Valdivia'
            : 'Visit Christopher Valdivia LinkedIn profile'
          }
        >
          <FaLinkedin aria-hidden="true" />
          LinkedIn
        </a>
      </nav>

      <a
        href="/EduardoValdivia_CV.pdf"
        download="EduardoValdivia_CV.pdf"
        className="social-btn download flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium w-full justify-center text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        aria-label={locale === 'es' 
          ? 'Descargar currículum de Christopher Valdivia en PDF'
          : 'Download Christopher Valdivia resume in PDF'
        }
      >
        <FaDownload aria-hidden="true" />
        {t.downloadCv}
      </a>
    </div>
  )
}

export default memo(Hero)
