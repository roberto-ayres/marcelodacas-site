import Link from 'next/link'
import { site } from '@/lib/site'
import Icon, { WhatsAppIcon } from './Icon'

// Topo escuro das páginas internas
export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="hero-texture text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="fade-up mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-brand">{eyebrow}</p>
        <h1 className="fade-up max-w-3xl font-serif text-4xl font-semibold leading-[1.1] sm:text-6xl">{title}</h1>
        {text && <p className="fade-up-delay mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{text}</p>}
      </div>
    </section>
  )
}

// Título de seção com a linha laranja
export function SectionTitle({ eyebrow, title, center = false }: { eyebrow: string; title: string; center?: boolean }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand">{eyebrow}</p>
      <h2 className="font-serif text-3xl font-semibold leading-tight text-ink sm:text-[2.6rem]">{title}</h2>
      <span className={`rule mt-5 ${center ? 'mx-auto' : ''}`} />
    </div>
  )
}

// Faixa final chamando para contato
export function CtaBand() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-7 py-12 text-white sm:px-14 sm:py-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">Precisa de orientação jurídica?</h2>
              <p className="mt-3 text-white/70">
                Conte brevemente a sua situação. O retorno é feito pessoalmente pelo advogado responsável.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition hover:bg-brand-dark"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Conversar no WhatsApp
              </a>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/60"
              >
                Outros contatos
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
