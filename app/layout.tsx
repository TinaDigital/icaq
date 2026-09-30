import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-display',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})


const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://icaq.com.ar'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'ICAQ | Cursos y Carreras de Mecánica, Motos y Oficios en Quilmes',
    template: '%s | ICAQ Quilmes',
  },
  description: 'Instituto de formación técnica presencial en Quilmes Centro. Cursos prácticos y carreras con aval oficial: Mecánica Automotriz, Motos, Inyección Electrónica, Electricidad, Aire Acondicionado y Oficios con rápida salida laboral.',
  keywords: [
    'cursos de mecanica en quilmes',
    'mecanica automotriz quilmes',
    'cursos de mecanica de motos quilmes',
    'inyeccion electronica automotriz',
    'electricidad del automotor',
    'curso de aire acondicionado quilmes',
    'carrera mecanica automotriz',
    'oficios con salida laboral quilmes',
    'cursos presenciales quilmes centro',
    'instituto de capacitacion y aprendizaje quilmes',
    'icaq quilmes',
    'diagnostico camiones can bus',
    'energia solar fotovoltaica quilmes',
    'curso plomeria quilmes',
    'electricidad domiciliaria quilmes',
    'cursos tecnicos zona sur',
  ],
  authors: [{ name: 'ICAQ - Instituto de Capacitación y Aprendizaje Quilmes', url: baseUrl }],
  creator: 'ICAQ Quilmes',
  publisher: 'ICAQ - Instituto de Capacitación y Aprendizaje Quilmes',
  applicationName: 'ICAQ',
  category: 'Educación y Formación Técnica',
  classification: 'Centro de Capacitación Técnica y Formación Profesional',
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: '/',
    siteName: 'ICAQ - Instituto de Capacitación y Aprendizaje Quilmes',
    title: 'ICAQ Quilmes | Cursos y Carreras de Mecánica, Motos y Oficios',
    description: 'Capacitate con herramientas reales y práctica desde el primer día en Quilmes Centro. Cursos de Mecánica, Inyección, Electricidad, Motos y Carreras Oficiales.',
    images: [
      {
        url: '/local.jpeg',
        width: 1200,
        height: 630,
        alt: 'Sede y talleres del Instituto de Capacitación y Aprendizaje Quilmes (ICAQ)',
      },
      {
        url: '/logo.png',
        width: 800,
        height: 400,
        alt: 'Logo ICAQ Quilmes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICAQ Quilmes | Cursos y Carreras de Mecánica y Oficios',
    description: 'Formación técnica presencial en Quilmes Centro. Mecánica automotriz, motos, inyección electrónica y oficios con rápida salida laboral.',
    images: ['/local.jpeg'],
  },
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
  other: {
    'geo.region': 'AR-B',
    'geo.placename': 'Quilmes, Buenos Aires',
    'geo.position': '-34.7242;-58.2575',
    'ICBM': '-34.7242, -58.2575',
  },
  icons: {
    icon: [
      { url: '/favicon.png' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#761523', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`bg-background ${barlowCondensed.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
