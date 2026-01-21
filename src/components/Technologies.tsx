import React from 'react'
import { dictionary, Locale } from '../i18n'
import { FaCode } from 'react-icons/fa'

const Technologies: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale].technologiesGrouped
  
  return (
    <div className="mt-8 space-y-8">
      <div className="glass-card rounded-2xl p-6">
        <h3 className="flex items-center gap-2 mb-6 text-cyan-400 font-semibold text-lg">
          <FaCode aria-hidden="true" />
          {t.title}
        </h3>
        
        <div className="space-y-6" role="list">
          {/* Frontend */}
          <div role="listitem">
            <h4 className="text-gray-400 text-sm mb-3 font-semibold">{t.frontend}</h4>
            <div className="flex flex-wrap gap-2" role="list">
              {t.items.frontend.map((item) => (
                <span key={item.name} className="tech-tag text-cyan-400 px-3 py-2 rounded-xl text-sm font-medium" role="listitem" title={`${t.frontend}: ${item.name}`}>
                  {item.name}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div role="listitem">
            <h4 className="text-gray-400 text-sm mb-3 font-semibold">{t.backend}</h4>
            <div className="flex flex-wrap gap-2" role="list">
              {t.items.backend.map((item) => (
                <span key={item.name} className="tech-tag text-cyan-400 px-3 py-2 rounded-xl text-sm font-medium" role="listitem" title={`${t.backend}: ${item.name}`}>
                  {item.name}
                </span>
              ))}
            </div>
          </div>  

          {/* Database */}
          <div role="listitem">
            <h4 className="text-gray-400 text-sm mb-3 font-semibold">{t.database}</h4>
            <div className="flex flex-wrap gap-2" role="list">
              {t.items.database && t.items.database.map((item) => (
                <span key={item.name} className="tech-tag text-cyan-400 px-3 py-2 rounded-xl text-sm font-medium" role="listitem" title={`${t.database}: ${item.name}`}>
                  {item.name}
                </span>
              ))}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div role="listitem">
            <h4 className="text-gray-400 text-sm mb-3 font-semibold">{t.devops}</h4>
            <div className="flex flex-wrap gap-2" role="list">
              {t.items.devops.map((item) => (
                <span key={item.name} className="tech-tag text-cyan-400 px-3 py-2 rounded-xl text-sm font-medium" role="listitem" title={`${t.devops}: ${item.name}`}>
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