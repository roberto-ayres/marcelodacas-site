// components/SiteHeader.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Quem somos' },
  { href: '/o-que-fazemos', label: 'O que fazemos' },
  { href: '/contato', label: 'Contato' },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:h-20 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative h-14 w-14 sm:h-16 sm:w-16 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-slate-200">
            <Image
              src="/logo-dacas.png"
              alt="Logo Da Cas Advocacia"
              fill
              sizes="72px"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden items-end gap-10 text-sm sm:flex">
          {navLinks.map(link => {
            const active = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 pb-1 text-[17px] font-medium transition-colors ${
                  active
                    ? 'border-orange-400 text-slate-900'
                    : 'border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Botão hamburguer (somente mobile) */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 sm:hidden"
          onClick={() => setIsOpen(open => !open)}
          aria-label="Abrir menu de navegação"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Abrir menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded bg-slate-800" />
            <span className="block h-0.5 w-5 rounded bg-slate-800" />
            <span className="block h-0.5 w-5 rounded bg-slate-800" />
          </div>
        </button>
      </div>

      {/* Menu mobile dropdown (sobreposto, vindo da direita) */}
      {isOpen && (
        <div className="absolute right-0 top-full z-20 w-full border-t border-slate-200 bg-white/98 shadow-md sm:hidden">
          <nav className="mx-auto flex max-w-5xl flex-col items-end px-4 py-2">
            {navLinks.map(link => {
              const active = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center py-2 text-[15px] font-medium transition-colors ${
                    active
                      ? 'text-slate-900'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span
                    className={`mr-2 h-1.5 w-1.5 rounded-full ${
                      active ? 'bg-orange-400' : 'bg-transparent'
                    }`}
                  />
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
