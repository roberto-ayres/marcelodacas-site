import type { Metadata } from 'next'
import { PageHero } from '@/components/PageSection'
import ContactForm from '@/components/ContactForm'
import Icon, { WhatsAppIcon } from '@/components/Icon'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Fale com a Da Cas Advocacia pelo WhatsApp, telefone, e-mail ou formulário.',
}

export default function ContactPage() {
  const items = [
    { icon: <WhatsAppIcon className="h-5 w-5" />, label: 'WhatsApp', value: site.phoneDisplay, href: site.whatsappHref, external: true },
    { icon: <Icon name="phone" className="h-5 w-5" />, label: 'Telefone', value: site.phoneDisplay, href: site.phoneHref },
    { icon: <Icon name="mail" className="h-5 w-5" />, label: 'E-mail', value: site.email, href: `mailto:${site.email}` },
    ...(site.address ? [{ icon: <Icon name="pin" className="h-5 w-5" />, label: 'Endereço', value: site.address }] : []),
    ...(site.hours ? [{ icon: <Icon name="clock" className="h-5 w-5" />, label: 'Atendimento', value: site.hours }] : []),
  ]

  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu caso."
        text="Escolha o canal de sua preferência. O retorno é feito pessoalmente pelo advogado responsável."
      />

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          <div className="space-y-4">
            {items.map(item => {
              const content = (
                <>
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
                    {item.icon}
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-stone">{item.label}</span>
                    <span className="mt-1 block text-[17px] font-medium text-ink break-all">{item.value}</span>
                  </span>
                </>
              )
              const cls =
                'group flex items-center gap-5 rounded-2xl bg-white p-5 ring-1 ring-mist transition'
              return 'href' in item && item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  {...('external' in item && item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`${cls} hover:ring-brand/40 hover:shadow-[0_20px_40px_-25px_rgba(27,30,35,0.35)]`}
                >
                  {content}
                </a>
              ) : (
                <div key={item.label} className={cls}>
                  {content}
                </div>
              )
            })}

            <p className="px-1 pt-2 text-sm leading-relaxed text-stone">
              {site.lawyer} · {site.oab}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-[0_30px_60px_-35px_rgba(27,30,35,0.35)] ring-1 ring-mist sm:p-10">
            <h2 className="font-serif text-3xl font-semibold text-ink">Envie uma mensagem</h2>
            <p className="mt-2 text-sm text-stone">Responderemos o mais breve possível.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
