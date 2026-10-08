'use client'

import { useParams } from 'next/navigation'
import { dictionary, Locale } from '@/lib/i18n'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export default function CVPage() {
  const params = useParams()
  const locale: Locale = params.locale === 'en' ? 'en' : 'es'
  const t = dictionary[locale]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans">
      <header className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/30 z-50 px-4 md:px-8 py-4" role="banner">
        <nav className="flex justify-between items-center max-w-6xl mx-auto" aria-label="Navegación principal">
          <Link 
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-xl md:text-2xl font-bold text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg"
            aria-label="Christopher Valdivia - Inicio"
          >
            <FiArrowLeft aria-hidden="true" className="w-5 h-5" />
            <span className="hidden sm:inline">{locale === 'es' ? 'Volver al portafolio' : 'Back to portfolio'}</span>
          </Link>
        </nav>
      </header>

      <main className="pt-24 pb-8 px-4 md:px-8" id="main-content" role="main">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-2xl p-6 md:p-8 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6 text-center">
              {t.downloadCv}
            </h1>
            
            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-900 border border-cyan-400/30">
              <iframe
                src="/EduardoValdivia_CV.pdf"
                title={locale === 'es' ? 'Currículum de Christopher Valdivia' : 'Christopher Valdivia Resume'}
                className="w-full h-full border-0"
                sandbox="allow-same-origin allow-scripts"
              />
            </div>
            
            <p className="text-center text-gray-400 text-sm mt-4">
              {locale === 'es' 
                ? 'Si no se visualiza correctamente, '
                : 'If it doesn\'t display correctly, '
              }
              <a 
                href="/api/download-cv"
                className="text-cyan-400 hover:underline"
                download="EduardoValdivia_CV.pdf"
              >
                {locale === 'es' ? 'descargar el PDF' : 'download the PDF'}
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}