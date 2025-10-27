import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Profile from './components/Profile'
import { dictionary } from './i18n'
import { Locale } from './i18n'
import { FiGlobe } from 'react-icons/fi'

function App() {
  const [locale, setLocale] = useState<Locale>('es')

  useEffect(() => {
    // Crear partículas de fondo
    const createParticles = () => {
      const particlesContainer = document.querySelector('.particles')
      if (!particlesContainer) return
      
      const particleCount = 50
      particlesContainer.innerHTML = '' // Limpiar partículas existentes

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        
        particle.style.left = Math.random() * 100 + '%'
        particle.style.top = Math.random() * 100 + '%'
        particle.style.animationDelay = Math.random() * 6 + 's'
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's'
        
        particlesContainer.appendChild(particle)
      }
    }

    createParticles()

    // Smooth scroll para navegación
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.href?.includes('#')) {
        e.preventDefault()
        const id = target.getAttribute('href')?.substring(1)
        const element = document.getElementById(id || '')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  const t = dictionary[locale];
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans">
      {/* Partículas de fondo */}
      <div className="particles fixed top-0 left-0 w-full h-full -z-10"></div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/30 z-50 px-4 md:px-8 py-4">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="text-xl md:text-2xl font-bold text-cyan-400">CV</div>
          <div className="flex items-center gap-4 md:gap-8">
            <ul className="hidden md:flex list-none gap-4 md:gap-8">
              <li><a href="#inicio" className="text-white hover:text-cyan-400 transition-colors text-sm md:text-base">{locale === 'es' ? 'Inicio' : 'Home'}</a></li>
              <li><a href="#proyectos" className="text-white hover:text-cyan-400 transition-colors text-sm md:text-base">{t.projects}</a></li>
              <li><a href="#perfil" className="text-white hover:text-cyan-400 transition-colors text-sm md:text-base">{t.profileSection.title}</a></li>
              <li><a href="#contacto" className="text-white hover:text-cyan-400 transition-colors text-sm md:text-base">{t.contact}</a></li>
            </ul>
            <button
              aria-label="Toggle language"
              onClick={() => setLocale((l) => (l === 'es' ? 'en' : 'es'))}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/10 hover:bg-white/20 transition text-xs md:text-sm"
            >
              <FiGlobe /> {locale.toUpperCase()}
            </button>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto pt-24 px-4 md:px-8 pb-8 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 md:gap-12">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-32 h-fit flex flex-col gap-8">
          <Hero locale={locale} />
          <Technologies locale={locale} />
          <Contact locale={locale} />
          <About locale={locale} />
        </aside>

        {/* Main Content */}
        <main className="animate-fade-in-right">
          {/* Perfil Profesional */}
          <section className="mb-12" id="perfil">
            <Profile locale={locale} />
          </section>

          {/* Proyectos */}
          <section className="mb-12" id="proyectos">
            <Projects locale={locale} />
          </section>

          {/* Experiencia */}
          <section className="mb-12">
            <Experience locale={locale} />
          </section>
        </main>
      </div>
    </div>
  )
}

export default App