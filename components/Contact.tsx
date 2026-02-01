'use client'

import { memo } from 'react'
import { dictionary, Locale } from '@/lib/i18n'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

function Contact({ locale }: { locale: Locale }) {
  const t = dictionary[locale]
  
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: t.email,
      href: `mailto:${t.email}`,
      ariaLabel: `${locale === 'es' ? 'Enviar email a' : 'Send email to'} ${t.email}`
    },
    {
      icon: FaPhone,
      label: locale === 'es' ? 'Teléfono' : 'Phone',
      value: t.phone,
      href: 'tel:+51953587619',
      ariaLabel: `${locale === 'es' ? 'Llamar a' : 'Call to'} ${t.phone}`
    },
    {
      icon: FaMapMarkerAlt,
      label: locale === 'es' ? 'Ubicación' : 'Location',
      value: t.location,
      href: null,
      ariaLabel: null
    },
  ]

  return (
    <div 
      className="glass-card rounded-2xl p-4 sm:p-6 h-full"
      role="region"
      aria-labelledby="contact-heading"
    >
      <h2 
        id="contact-heading"
        className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4"
      >
        {t.contact}
      </h2>
      <address className="space-y-3 sm:space-y-4 not-italic">
        {contactInfo.map((item, index) => (
          <div 
            key={index} 
            className="contact-item flex items-center gap-3 p-2 rounded-lg"
          >
            <item.icon 
              className="text-cyan-400 w-4 flex-shrink-0" 
              aria-hidden="true" 
            />
            {item.href ? (
              <a 
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-xs sm:text-sm break-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-1"
                title={item.ariaLabel || item.label}
                aria-label={item.ariaLabel || item.label}
              >
                {item.value}
              </a>
            ) : (
              <span 
                className="text-gray-300 text-xs sm:text-sm"
                itemProp="areaServed"
                aria-label={item.ariaLabel || item.label}
              >
                {item.value}
              </span>
            )}
          </div>
        ))}
      </address>
    </div>
  )
}

export default memo(Contact)
