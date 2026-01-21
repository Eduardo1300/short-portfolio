import { useEffect } from 'react'

export const StructuredData = ({ locale }: { locale: 'es' | 'en' }) => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": "https://christopher-valdivia.dev#person",
          "name": "Christopher Eduardo Valdivia Baca",
          "url": "https://christopher-valdivia.dev",
          "sameAs": [
            "https://github.com/Eduardo1300",
            "https://linkedin.com/in/christopher-valdivia"
          ],
          "jobTitle": locale === 'es' ? "Desarrollador Full Stack" : "Full Stack Developer",
          "email": "eduardovaldivia1300@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lima",
            "addressCountry": "PE"
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
          "creator": {
            "@id": "https://christopher-valdivia.dev#person"
          },
          "isPartOf": {
            "@id": "https://christopher-valdivia.dev#website"
          }
        }
      ]
    }

    // Agregar script de datos estructurados al documento
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    script.id = 'structured-data-schema'
    
    // Eliminar script anterior si existe
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

export default StructuredData
