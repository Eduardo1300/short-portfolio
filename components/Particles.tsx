import { useEffect } from 'react'

interface ParticlesProps {
  isMobile: boolean
}

export default function Particles({ isMobile }: ParticlesProps) {
  useEffect(() => {
    if (isMobile) return
    
    const particlesContainer = document.querySelector('.particles')
    if (!particlesContainer) return
    
    const particleCount = 30
    particlesContainer.innerHTML = ''

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.setAttribute('aria-hidden', 'true')
      
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      particle.style.animationDelay = Math.random() * 6 + 's'
      particle.style.animationDuration = (Math.random() * 3 + 3) + 's'
      
      particlesContainer.appendChild(particle)
    }
  }, [isMobile])

  return <div className="particles fixed top-0 left-0 w-full h-full -z-10" aria-hidden="true" role="presentation" />
}
