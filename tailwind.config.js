/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        brand: {
          400: '#36d1c3',
          500: '#13b8aa',
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
