'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { navLinks, site } from '@/lib/site'
import { WhatsAppIcon } from './Icon'

export default function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-30 bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? 'shadow-[0_1px_0_0_var(--color-mist),0_8px_24px_-16px_rgba(0,0,0,0.25)]' : 'shadow-[0_1px_0_0_var(--color-mist)]'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <Image
            src="/logo-dacas.png"
            alt="Da Cas Advocacia"
            width={190}
            height={166}
            priority
            className="h-14 w-auto"
          />
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Principal">
          {navLinks.map(link => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`relative py-2 text-[15px] tracking-wide transition-colors ${
                  active ? 'text-ink' : 'text-stone hover:text-ink'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] bg-brand transition-all duration-300 ${
                    active ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            )
          })}
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Fale conosco
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-mist/60 md:hidden"
          onClick={() => setIsOpen(open => !open)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          <div className="relative h-4 w-5">
            <span className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-all ${isOpen ? 'top-[7px] rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-all ${isOpen ? 'top-[7px] -rotate-45' : 'top-[14px]'}`} />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-mist bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3" aria-label="Principal">
            {navLinks.map(link => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between border-b border-mist/70 py-4 text-base ${
                    active ? 'font-medium text-ink' : 'text-stone'
                  }`}
                >
                  {link.label}
                  {active && <span className="h-1.5 w-1.5 rounded-full bg-brand" />}
                </Link>
              )
            })}
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 mb-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Fale conosco pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
