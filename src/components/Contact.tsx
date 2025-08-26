import React from 'react'
import { dictionary, Locale } from '../i18n'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale]
  return (
    <div className="glass-card rounded-2xl p-6 h-full">
      <h2 className="text-xl font-semibold text-cyan-400 mb-4">{t.contact}</h2>
      <div className="space-y-4">
        <div className="contact-item flex items-center gap-3 p-2 rounded-lg">
          <FaEnvelope className="text-cyan-400 w-4" />
          <a 
            href={`mailto:${t.email}`} 
            className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
          >
            {t.email}
          </a>
        </div>
        <div className="contact-item flex items-center gap-3 p-2 rounded-lg">
          <FaPhone className="text-cyan-400 w-4" />
          <a 
            href="tel:+51953687619" 
            className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
          >
            {t.phone}
          </a>
        </div>
        <div className="contact-item flex items-center gap-3 p-2 rounded-lg">
          <FaMapMarkerAlt className="text-cyan-400 w-4" />
          <span className="text-gray-300 text-sm">{t.location}</span>
        </div>
      </div>
    </div>
  )
}

export default Contact