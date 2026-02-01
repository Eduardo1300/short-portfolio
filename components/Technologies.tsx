'use client'

import { dictionary, Locale } from '@/lib/i18n'
import { FaCode } from 'react-icons/fa'

export default function Technologies({ locale }: { locale: Locale }) {
  const t = dictionary[locale].technologiesGrouped
  
  const techCategories = [
    { key: 'frontend', label: t.frontend },
    { key: 'backend', label: t.backend },
    { key: 'database', label: t.database },
    { key: 'devops', label: t.devops },
  ]

  return (
    <div className="mt-8 space-y-8">
      <div 
        className="glass-card rounded-2xl p-6"
        role="region"
        aria-labelledby="tech-heading"
      >
        <h3 
          id="tech-heading"
          className="flex items-center gap-2 mb-6 text-cyan-400 font-semibold text-lg"
        >
          <FaCode aria-hidden="true" />
          {t.title}
        </h3>
        
        <div 
          className="space-y-6" 
          role="list"
          aria-label={t.title}
        >
          {techCategories.map((category) => (
            <div key={category.key} role="listitem">
              <h4 className="text-gray-400 text-sm mb-3 font-semibold">
                {category.label}
              </h4>
              <ul 
                className="flex flex-wrap gap-2" 
                role="list"
                aria-label={`${category.label} technologies`}
              >
                {t.items[category.key as keyof typeof t.items].map((item: { name: string }) => (
                  <li key={item.name} role="listitem">
                    <span 
                      className="tech-tag text-cyan-400 px-3 py-2 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                      title={`${category.label}: ${item.name}`}
                    >
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
