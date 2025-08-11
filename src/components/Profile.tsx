import React from 'react'
import { dictionary, Locale } from '../i18n'
import { FiUser, FiHeart, FiTarget } from 'react-icons/fi'

const Profile: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale]
  return (
    <article className="card-bg rounded-xl border p-4 shadow-sm h-full relative overflow-hidden">
      {/* Elemento decorativo */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-500/10 to-transparent rounded-full -translate-y-8 translate-x-8" />
      
      <div className="relative">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 rounded-lg bg-brand-500/20 text-brand-400">
            <FiUser className="w-4 h-4" />
          </div>
          <h2 className="text-[clamp(12px,1.1vw,15px)] font-semibold text-primary">{t.profileSection.title}</h2>
        </div>
        
        <div className="space-y-3">
          <p className="text-[clamp(10px,1vw,13px)] text-secondary leading-relaxed">
            {t.profileSection.content}
          </p>
          
          {/* Características destacadas */}
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center gap-2 text-[clamp(9px,0.9vw,12px)]">
              <FiHeart className="w-3 h-3 text-red-400" />
              <span className="text-muted">
                {locale === 'es' ? 'Enfoque en experiencia del usuario' : 'User experience focused'}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[clamp(9px,0.9vw,12px)]">
              <FiTarget className="w-3 h-3 text-emerald-400" />
              <span className="text-muted">
                {locale === 'es' ? 'Búsqueda de impacto real' : 'Seeking real impact'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Profile
