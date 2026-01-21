import React from 'react'
import { dictionary, Locale } from '../i18n'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact: React.FC<{ locale: Locale }> = ({ locale }) => {
  const t = dictionary[locale]
  return (
    <div className="glass-card rounded-2xl p-4 sm:p-6 h-full">
      <h2 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4">{t.contact}</h2>
      <address className="space-y-3 sm:space-y-4 not-italic">
        <div className="contact-item flex items-center gap-3 p-2 rounded-lg">
          <FaEnvelope className="text-cyan-400 w-4 flex-shrink-0" aria-hidden="true" />
          <a 
            href={`mailto:${t.email}`}
            className="text-gray-300 hover:text-cyan-400 transition-colors text-xs sm:text-sm break-all"
            title={`Email: ${t.email}`}
          >
            {t.email}
          </a>
        </div>
        <div className="contact-item flex items-center gap-3 p-2 rounded-lg">
          <FaPhone className="text-cyan-400 w-4 flex-shrink-0" aria-hidden="true" />
          <a 
            href="tel:+51953587619" 
            className="text-gray-300 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
            title={`Phone: ${t.phone}`}
          >
            {t.phone}
          </a>
        </div>
        <div className="contact-item flex items-center gap-3 p-2 rounded-lg">
          <FaMapMarkerAlt className="text-cyan-400 w-4 flex-shrink-0" aria-hidden="true" />
          <span className="text-gray-300 text-xs sm:text-sm" itemProp="areaServed">{t.location}</span>
        </div>
      </address>
    </div>
  )
}

export default Contact