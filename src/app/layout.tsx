// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Da Cas Advocacia',
  description: 'Escritório de advocacia Marcelo da Cas',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-slate-200 text-slate-800 text-[15px]">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
              {children}
            </div>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
