import type { Metadata, Viewport } from 'next'
import './globals.css'
import './fonts.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://christopher-valdivia.dev'),
  title: {
    default: 'Christopher Valdivia | Desarrollador Full Stack React + TypeScript + NestJS',
    template: '%s | Christopher Valdivia',
  },
  description: 'Portafolio profesional de Christopher Valdivia, desarrollador Full Stack especializado en React, TypeScript, NestJS. Proyectos de calidad empresarial con arquitectura escalable.',
  keywords: [
    'desarrollador web',
    'full stack developer',
    'React',
    'TypeScript',
    'NestJS',
    'JavaScript',
    'frontend',
    'backend',
    'Lima',
    'Perú',
    'portafolio desarrollador',
    'web developer',
    'software engineer',
    'programador',
    'Vue.js',
    'PostgreSQL',
    'Full Stack',
    'Frontend Developer',
    'Backend Developer',
  ],
  authors: [{ name: 'Christopher Eduardo Valdivia Baca', url: 'https://christopher-valdivia.dev' }],
  creator: 'Christopher Eduardo Valdivia Baca',
  publisher: 'Christopher Valdivia',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://christopher-valdivia.dev',
    siteName: 'Christopher Valdivia',
    title: 'Christopher Valdivia | Desarrollador Full Stack React + TypeScript + NestJS',
    description: 'Portafolio profesional - Especialista en React, TypeScript, NestJS. Proyectos innovadores con arquitectura escalable.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Christopher Valdivia - Full Stack Developer',
      },
      {
        url: '/favicon.svg',
        width: 512,
        height: 512,
        alt: 'Christopher Valdivia Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@christopherdev',
    creator: '@christopherdev',
    title: 'Christopher Valdivia | Desarrollador Full Stack',
    description: 'Portafolio profesional de desarrollador Full Stack - Proyectos con React, TypeScript, NestJS y más.',
    images: ['/og-image.jpg'],
  },
  facebook: {
    appId: '123456789',
  },
  alternates: {
    canonical: 'https://christopher-valdivia.dev',
    languages: {
      es: 'https://christopher-valdivia.dev',
      en: 'https://christopher-valdivia.dev/en',
    },
  },
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: '#1e293b',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="color-scheme" content="dark" />
        <meta name="google-site-verification" content="lmuR7mnac3tpVlEe6gCHPzgcdEsVNO1S8nGQQ-gq4Ow" />
        
        {/* Preload fuentes críticas para LCP */}
        <link rel="preload" href="/fonts/PlusJakartaSans-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PlusJakartaSans-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* CSS asíncrono no bloqueante */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = '/_next/static/css/app/layout.css';
              document.head.appendChild(link);
            })();
          `
        }} />
      </head>
      <body className="overflow-auto">{children}</body>
    </html>
  )
}
