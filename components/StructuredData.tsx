'use client'

import { useEffect } from 'react'

export default function StructuredData({ locale }: { locale: 'es' | 'en' }) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": "https://christopher-valdivia.dev#person",
          "name": "Christopher Eduardo Valdivia Baca",
          "givenName": "Christopher",
          "familyName": "Valdivia Baca",
          "url": "https://christopher-valdivia.dev",
          "image": "https://christopher-valdivia.dev/favicon.svg",
          "sameAs": [
            "https://github.com/Eduardo1300",
            "https://linkedin.com/in/christopher-valdivia",
            "https://twitter.com/christopherdev"
          ],
          "jobTitle": locale === 'es' ? "Desarrollador Full Stack" : "Full Stack Developer",
          "description": locale === 'es' 
            ? "Desarrollador Full Stack especializado en React, TypeScript, NestJS y tecnologías modernas."
            : "Full Stack Developer specialized in React, TypeScript, NestJS and modern technologies.",
          "email": "eduardovaldivia1300@gmail.com",
          "telephone": "+51-953-587-619",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lima",
            "addressRegion": "Lima",
            "addressCountry": "PE"
          },
          "knowsAbout": [
            "React",
            "TypeScript",
            "NestJS",
            "JavaScript",
            "Vue.js",
            "PostgreSQL",
            "Full Stack Development",
            "Web Development"
          ],
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Técnico en Computación e Informática"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://christopher-valdivia.dev/#website",
          "url": "https://christopher-valdivia.dev",
          "name": "Christopher Valdivia - Full Stack Developer",
          "description": locale === 'es' 
            ? "Portafolio profesional de desarrollador Full Stack especializado en React, TypeScript y NestJS"
            : "Professional Full Stack Developer portfolio specialized in React, TypeScript and NestJS",
          "inLanguage": locale,
          "creator": {
            "@id": "https://christopher-valdivia.dev#person"
          },
          "isPartOf": {
            "@id": "https://christopher-valdivia.dev#website"
          }
        },
        {
          "@type": "WebPage",
          "@id": "https://christopher-valdivia.dev/#webpage",
          "url": "https://christopher-valdivia.dev",
          "name": "Christopher Valdivia Portfolio",
          "description": "Portafolio profesional con proyectos, experiencia y tecnologías.",
          "inLanguage": locale,
          "isPartOf": {
            "@id": "https://christopher-valdivia.dev/#website"
          }
        },
        {
          "@type": "ProfilePage",
          "url": "https://christopher-valdivia.dev"
        }
      ]
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData, null, 2)
    script.id = 'structured-data-schema'
    script.setAttribute('data-seo', 'true')
    
    const existingScript = document.getElementById('structured-data-schema')
    if (existingScript) {
      existingScript.remove()
    }
    
    document.head.appendChild(script)

    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [locale])

  return null
}
