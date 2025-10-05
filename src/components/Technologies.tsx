import React from 'react'
import { dictionary, Locale } from '../i18n'
import { FaCode, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const Technologies: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale].technologiesGrouped
  
  return (
    <div className="mt-8 space-y-8">
      <div className="glass-card rounded-2xl p-6">
        <h3 className="flex items-center gap-2 mb-6 text-cyan-400 font-semibold text-lg">
          <FaCode />
          {t.title}
        </h3>
        
        <div className="space-y-6">
          {/* Frontend */}
          <div>
            <h4 className="text-gray-400 text-sm mb-3">{t.frontend}</h4>
            <div className="flex flex-wrap gap-2">
              {t.items.frontend.map((item) => (
                <span key={item.name} className="tech-tag text-cyan-400 px-3 py-2 rounded-xl text-sm font-medium">
                  {item.name}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h4 className="text-gray-400 text-sm mb-3">{t.backend}</h4>
            <div className="flex flex-wrap gap-2">
              {t.items.backend.map((item) => (
                <span key={item.name} className="tech-tag text-cyan-400 px-3 py-2 rounded-xl text-sm font-medium">
                  {item.name}
                </span>
              ))}
            </div>
          </div>

          {/* Database */}
          <div>
            <h4 className="text-gray-400 text-sm mb-3">{t.database}</h4>
            <div className="flex flex-wrap gap-2">
              {t.items.database && t.items.database.map((item) => (
                <span key={item.name} className="tech-tag text-cyan-400 px-3 py-2 rounded-xl text-sm font-medium">
                  {item.name}
                </span>
              ))}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div>
            <h4 className="text-gray-400 text-sm mb-3">{t.devops}</h4>
            <div className="flex flex-wrap gap-2">
              {t.items.devops.map((item) => (
                <span key={item.name} className="tech-tag text-cyan-400 px-3 py-2 rounded-xl text-sm font-medium">
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Technologies