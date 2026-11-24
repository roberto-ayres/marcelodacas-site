import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import { site } from '@/lib/site'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Da Cas Advocacia | Marcelo Esmerio Da Cas, OAB/RS 54.005',
    template: '%s | Da Cas Advocacia',
  },
  description:
    'Advocacia consultiva e contenciosa para pessoas físicas e empresas: Direito Civil, Empresarial, Contratual, Imobiliário, Famílias e Sucessões, Cobranças e Execuções.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: site.name,
    images: ['/logo-dacas.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  email: site.email,
  telephone: '+55-51-99722-1500',
  image: `${site.url}/logo-dacas.png`,
  founder: { '@type': 'Person', name: site.lawyer, jobTitle: 'Advogado' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
