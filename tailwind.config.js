/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        brand: {
          50: '#eafffb', 100: '#cefaf3', 200: '#9ff0e6', 300: '#68e3d6', 400: '#36d1c3',
          500: '#13b8aa', 600: '#0a958d', 700: '#0b756f', 800: '#0f5d59', 900: '#114d49'
        }
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 600ms ease-out both'
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(0,0,0,0.4)'
      }
    }
  },
  plugins: []
}