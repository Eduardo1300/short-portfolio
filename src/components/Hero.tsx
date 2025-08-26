import React from 'react'
import { dictionary, Locale } from '../i18n'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'

const Hero: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale]
  return (
    <div className="glass-card profile-border rounded-3xl p-8 text-center animate-fade-in-left" id="inicio">
      {/* Avatar */}
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mx-auto mb-6 text-4xl font-bold text-black shadow-xl shadow-cyan-400/30 animate-pulse-glow">
        CV
      </div>

      {/* Name and Title */}
      <h1 className="text-3xl font-bold mb-2 section-title text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
        CHRISTOPHER EDUARDO VALDIVIA BACA
      </h1>
      <p className="text-xl text-gray-300 mb-2">{t.role}</p>
      <p className="text-base text-gray-400 mb-6">{t.education}</p>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mb-6">
        <a
          href="https://github.com/Eduardo1300/"
          target="_blank"
          rel="noopener"
          className="social-btn github flex items-center gap-2 px-6 py-3 rounded-full font-medium"
        >
          <FaGithub />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/christopher-eduardo-valdivia-baca-899051318/"
          target="_blank"
          rel="noopener"
          className="social-btn linkedin flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white"
        >
          <FaLinkedin />
          LinkedIn
        </a>
      </div>

      {/* Download CV */}
      <a
        href="/EduardoValdivia_CV.pdf"
        download="EduardoValdivia_CV.pdf"
        className="social-btn download flex items-center gap-2 px-6 py-3 rounded-full font-medium w-full justify-center mb-6"
      >
        <FaDownload />
        {t.downloadCv}
      </a>
    </div>
  )
}

export default Hero