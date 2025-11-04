// app/o-que-fazemos/page.tsx
import PageSection from '@/components/PageSection'

export default function WhatWeDoPage() {
  return (
    <PageSection
      title="O que fazemos"
      subtitle="Principais áreas de atuação do escritório."
    >
      <p>
        Aqui vamos listar as áreas de atuação, por exemplo:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Direito civil</li>
        <li>Direito empresarial</li>
        <li>Contratos</li>
        <li>Outras áreas...</li>
      </ul>
      <p>
        Assim que mandar o texto, trocamos por descrições mais completas
        e eventualmente blocos separados por área, se fizer sentido.
      </p>
    </PageSection>
  )
}
