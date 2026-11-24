import Link from 'next/link'
import Image from 'next/image'
import { navLinks, site } from '@/lib/site'
import Icon, { WhatsAppIcon } from './Icon'

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Image src="/logo-dacas-light.png" alt="Da Cas Advocacia" width={640} height={509} className="h-24 w-auto" />
          <p className="max-w-sm text-sm leading-relaxed">
            {site.legalName}
            <br />
            Advogado responsável: {site.lawyer}, {site.oab}.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">Navegação</p>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">Contato</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 transition hover:text-brand">
                <WhatsAppIcon className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 transition hover:text-brand">
                <Icon name="mail" className="h-4 w-4" />
                {site.email}
              </a>
            </li>
            {site.address && (
              <li className="inline-flex items-start gap-2.5">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0" />
                {site.address}
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© {new Date().getFullYear()} {site.legalName}. Todos os direitos reservados.</span>
          <span>{site.oab}</span>
        </div>
      </div>
    </footer>
  )
}
