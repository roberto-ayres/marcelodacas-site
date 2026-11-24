import type { Metadata } from 'next'
import { CtaBand, PageHero, SectionTitle } from '@/components/PageSection'
import Icon from '@/components/Icon'
import { practiceAreas, services } from '@/lib/site'

export const metadata: Metadata = {
  title: 'O que fazemos',
  description:
    'Assessoria jurídica consultiva e contenciosa em Direito Civil, Empresarial, Contratual, Imobiliário, Famílias e Sucessões, Cobranças e Execuções.',
}

const steps = [
  { n: '01', title: 'Escuta', text: 'Entendemos a sua situação e o que é importante para você.' },
  { n: '02', title: 'Análise técnica', text: 'Estudamos o caso e os caminhos possíveis, com riscos e alternativas.' },
  { n: '03', title: 'Estratégia', text: 'Definimos juntos o plano de ação mais adequado.' },
  { n: '04', title: 'Acompanhamento', text: 'Você é informado com clareza durante todas as etapas.' },
]

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="O que fazemos"
        title="Prevenção e resolução de conflitos em diversas áreas do Direito."
        text="Prestamos assessoria jurídica consultiva e contenciosa, atuando na prevenção e resolução de conflitos para pessoas físicas e empresas."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionTitle eyebrow="Áreas de atuação" title="Principais áreas" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map(area => (
              <article
                key={area.title}
                className="group rounded-3xl bg-white p-8 ring-1 ring-mist transition hover:-translate-y-1 hover:ring-brand/40 hover:shadow-[0_30px_50px_-30px_rgba(27,30,35,0.4)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
                  <Icon name={area.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-ink">{area.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-stone">{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-mist bg-white">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionTitle eyebrow="Serviços" title="Também atuamos em" />
            <ul className="mt-10 space-y-4">
              {services.map(s => (
                <li key={s} className="flex items-start gap-4 border-b border-mist pb-4 text-[17px] text-ink/85">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionTitle eyebrow="Nosso método" title="Cada caso é tratado de forma individualizada" />
            <ol className="mt-10 grid gap-4 sm:grid-cols-2">
              {steps.map(step => (
                <li key={step.n} className="rounded-2xl bg-paper p-6 ring-1 ring-mist">
                  <span className="font-serif text-3xl font-semibold text-brand">{step.n}</span>
                  <p className="mt-2 font-semibold text-ink">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-stone">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <div className="pt-20">
        <CtaBand />
      </div>
    </>
  )
}
