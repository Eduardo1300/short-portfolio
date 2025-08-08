import { useEffect, useMemo, useState } from 'react'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Profile from './components/Profile'
import { Locale } from './i18n'
import { FiMoon, FiSun, FiGlobe } from 'react-icons/fi'

function App() {
  const [locale, setLocale] = useState<Locale>('es')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('dark', 'light')
    root.classList.add(theme)
  }, [theme])

  const bgClass = useMemo(() => (theme === 'dark' ? 'bg-grid-dark' : 'bg-grid-light'), [theme])
  const btnClass = useMemo(
    () =>
      theme === 'dark'
        ? 'text-white border-white/10 bg-white/10 hover:bg-white/20'
        : 'text-slate-900 border-slate-300 bg-white/80 hover:bg-white shadow-sm',
    [theme]
  )
  const cardClass = useMemo(
    () =>
      theme === 'dark'
        ? 'border-white/10 bg-white/5'
        : 'border-slate-200 bg-white/90',
    [theme]
  )

  return (
    <div className={`h-screen w-screen ${bgClass} flex items-center justify-center p-4 sm:p-6`}>
      <div className="absolute top-3 right-3 flex items-center gap-2">
        <button
          aria-label="Toggle language"
          onClick={() => setLocale((l) => (l === 'es' ? 'en' : 'es'))}
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border transition text-sm ${btnClass}`}
        >
          <FiGlobe /> {locale.toUpperCase()}
        </button>
        <button
          aria-label="Toggle theme"
          onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border transition text-sm ${btnClass}`}
        >
          {theme === 'dark' ? <FiSun /> : <FiMoon />} {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>

      <section className={`relative w-[min(1200px,96vw)] aspect-[16/9] max-h-[92vh] rounded-2xl border backdrop-blur-sm shadow-soft overflow-hidden ${cardClass}`}>
        <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-brand-500 via-brand-400 to-brand-700" />
        <div className="absolute inset-0 grid grid-cols-3 gap-5 p-5 sm:gap-6 sm:p-6">
          <div className="col-span-1 flex flex-col gap-4 animate-fadeInUp">
            <Hero locale={locale} />
            <Technologies locale={locale} />
          </div>
          <div className="col-span-2 grid grid-rows-5 gap-4">
            <div className="row-span-2 animate-fadeInUp">
              <Projects locale={locale} />
            </div>
            <div className="row-span-1 animate-fadeInUp">
              <Profile locale={locale} />
            </div>
            <div className="row-span-1 animate-fadeInUp">
              <Experience locale={locale} />
            </div>
            <div className="row-span-1 grid grid-cols-3 gap-4">
              <div className="col-span-2 animate-fadeInUp">
                <About locale={locale} />
              </div>
              <div className="col-span-1 animate-fadeInUp">
                <Contact locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App