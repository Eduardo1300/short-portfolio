import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="h-screen w-screen bg-grid flex items-center justify-center p-4 sm:p-6">
      <section className="relative w-[min(1200px,96vw)] aspect-[16/9] max-h-[92vh] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-soft overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-brand-500 via-brand-400 to-brand-700" />
        <div className="absolute inset-0 grid grid-cols-3 gap-5 p-5 sm:gap-6 sm:p-6">
          <div className="col-span-1 flex flex-col gap-4 animate-fadeInUp">
            <Hero />
            <Technologies />
          </div>
          <div className="col-span-2 grid grid-rows-3 gap-4">
            <div className="row-span-2 animate-fadeInUp">
              <Projects />
            </div>
            <div className="row-span-1 grid grid-cols-3 gap-4">
              <div className="col-span-2 animate-fadeInUp">
                <About />
              </div>
              <div className="col-span-1 animate-fadeInUp">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App