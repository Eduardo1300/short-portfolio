import React from 'react'
import { dictionary, Locale } from '../i18n'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaDownload, FaCheckCircle } from 'react-icons/fa'

const Hero: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale]
  return (
    <div className="glass-card profile-border rounded-3xl p-8 text-center animate-fade-in-left" id="inicio">
      {/* Avatar */}
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mx-auto mb-6 text-4xl font-bold text-black shadow-xl shadow-cyan-400/30 animate-pulse-glow" role="img" aria-label="Christopher Valdivia avatar with initials EV">
        EV
      </div>

      {/* Name and Title */}
      <h1 className="text-xl md:text-3xl font-bold mb-2 section-title text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
        CHRISTOPHER EDUARDO VALDIVIA BACA
      </h1>
      <p className="text-base md:text-xl text-gray-300 mb-2" itemProp="jobTitle">{t.role}</p>
      <p className="text-sm md:text-base text-gray-400 mb-6" itemProp="description">{t.education}</p>

      {/* Social Links */}
      <nav className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6" aria-label="Social media links">
        <a
          href="https://github.com/Eduardo1300/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Christopher's GitHub profile"
          className="social-btn github flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base"
          title="GitHub Profile - Eduardo1300"
        >
          <FaGithub aria-hidden="true" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/christopher-eduardo-valdivia-baca-899051318/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Christopher's LinkedIn profile"
          className="social-btn linkedin flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-white text-sm sm:text-base"
          title="LinkedIn Profile - Christopher Valdivia"
        >
          <FaLinkedin aria-hidden="true" />
          LinkedIn
        </a>
      </nav>

      {/* Download CV */}
      <a
        href="/EduardoValdivia_CV.pdf"
        download="EduardoValdivia_CV.pdf"
        className="social-btn download flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium w-full justify-center text-sm sm:text-base"
        aria-label="Download Christopher's resume in PDF"
        title="Download Resume/CV"
      >
        <FaDownload aria-hidden="true" />
        {t.downloadCv}
      </a>
    </div>
  )
}

export default Hero