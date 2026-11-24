import Link from 'next/link'
import { CtaBand, SectionTitle } from '@/components/PageSection'
import Icon, { WhatsAppIcon } from '@/components/Icon'
import { practiceAreas, site } from '@/lib/site'

const pillars = [
  {
    icon: 'user',
    title: 'Atendimento personalizado',
    text: 'Cada cliente é atendido diretamente pelo advogado responsável, com escuta atenta e linguagem clara.',
  },
  {
    icon: 'target',
    title: 'Estratégia jurídica',
    text: 'Análise técnica e planejamento de cada caso antes de qualquer decisão.',
  },
  {
    icon: 'chat',
    title: 'Acompanhamento próximo',
    text: 'Comunicação constante sobre o andamento do seu caso, em todas as etapas.',
  },
  {
    icon: 'shield',
    title: 'Ética e transparência',
    text: 'Atuação pautada pela ética profissional, pela segurança e pela transparência.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Topo */}
      <section className="hero-texture text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
          <p className="fade-up mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            Advocacia · {site.oab}
          </p>
          <h1 className="fade-up max-w-3xl font-serif text-[2.6rem] font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            Advocacia próxima, técnica e estratégica.
          </h1>
          <p className="fade-up-delay mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Defesa dos interesses de pessoas físicas e empresas, com atendimento personalizado e acompanhamento
            próximo em cada etapa.
          </p>
          <div className="fade-up-delay mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-medium text-white transition hover:bg-brand-dark"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agendar uma conversa
            </a>
            <Link
              href="/o-que-fazemos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-medium text-white transition hover:border-white/60"
            >
              Áreas de atuação
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quem somos */}
      <section id="quem-somos" className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          <div>
            <SectionTitle eyebrow="Quem somos" title="Compromisso com cada cliente, do primeiro contato à solução." />
            <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink/80">
              <p>
                A <strong className="font-semibold text-ink">{site.legalName}</strong> atua com foco na defesa dos
                interesses de pessoas físicas e jurídicas, oferecendo atendimento personalizado, estratégia jurídica e
                acompanhamento próximo de cada cliente.
              </p>
              <p>
                Sob a responsabilidade do advogado <strong className="font-semibold text-ink">{site.lawyer}</strong>,
                inscrito na {site.oab}, o escritório busca soluções técnicas, seguras e eficientes, sempre pautadas
                pela ética, transparência e compromisso com os resultados.
              </p>
              <p>
                Nossa atuação combina experiência prática, atualização constante e dedicação para conduzir cada demanda
                com seriedade, agilidade e responsabilidade.
              </p>
            </div>
          </div>

          {/* Cartão do advogado (trocar o monograma pela foto quando chegar) */}
          <aside className="self-start lg:mt-4">
            <div className="overflow-hidden rounded-3xl bg-white shadow-[0_30px_60px_-30px_rgba(27,30,35,0.35)] ring-1 ring-mist">
              <div className="hero-texture flex aspect-[4/3] items-center justify-center">
                <span className="font-serif text-8xl font-semibold text-white/90">
                  M<span className="text-brand">D</span>
                </span>
              </div>
              <div className="space-y-1 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Advogado responsável</p>
                <p className="font-serif text-2xl font-semibold text-ink">{site.lawyer}</p>
                <p className="text-sm text-stone">{site.oab}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Pilares */}
      <section className="border-y border-mist bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionTitle eyebrow="Como trabalhamos" title="O que você pode esperar" center />
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-mist ring-1 ring-mist sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(p => (
              <div key={p.title} className="bg-white p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-serif text-xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prévia das áreas */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle eyebrow="Áreas de atuação" title="Assessoria consultiva e contenciosa" />
            <Link href="/o-que-fazemos" className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-brand">
              Ver todas as áreas
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map(area => (
              <Link
                key={area.title}
                href="/o-que-fazemos"
                className="group flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-mist transition hover:-translate-y-0.5 hover:ring-brand/40 hover:shadow-[0_20px_40px_-25px_rgba(27,30,35,0.35)]"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper text-ink transition group-hover:bg-brand group-hover:text-white">
                  <Icon name={area.icon} className="h-5 w-5" />
                </span>
                <span className="font-serif text-xl font-semibold text-ink">{area.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
