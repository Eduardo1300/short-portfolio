import React from 'react'
import { dictionary, Locale } from '../i18n'
import { FaUserTie, FaBullseye, FaSearch } from 'react-icons/fa'

const Profile: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale]
  return (
    <section className="mb-12">
      <h2 className="section-title flex items-center gap-4 text-4xl font-bold mb-8 after:content-[''] after:flex-1 after:h-0.5">
        <FaUserTie />
        {t.profileSection.title}
      </h2>
      
      <div className="glass-card rounded-2xl p-8">
        <p className="text-xl leading-relaxed text-gray-300 mb-8">
          {t.profileSection.content}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-4 bg-cyan-400/10 rounded-xl border-l-4 border-cyan-400">
            <FaBullseye className="text-cyan-400 text-xl" />
            <span className="text-gray-300">
              {locale === 'es' ? 'Enfoque en experiencia del usuario' : 'User experience focused'}
            </span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-cyan-400/10 rounded-xl border-l-4 border-cyan-400">
            <FaSearch className="text-cyan-400 text-xl" />
            <span className="text-gray-300">
              {locale === 'es' ? 'Búsqueda de impacto real' : 'Seeking real impact'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
