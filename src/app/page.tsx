// app/page.tsx
import PageSection from '@/components/PageSection'

export default function HomePage() {
  return (
    <PageSection
      title="Quem somos"
      subtitle="Breve apresentação do escritório e da tua atuação."
    >
      {/* Texto provisório – depois substituímos pelas infos que ele mandar */}
      <p>
        Este espaço será usado para contar a história do escritório,
        a tua trajetória e os valores que orientam o trabalho
        (seriedade, transparência, foco no cliente, etc.).
      </p>
      <p>
        Quando enviar o texto, substituio esse conteúdo por algo
        mais personalizado, incluindo eventualmente uma foto tua
        ao lado ou em destaque.
      </p>
    </PageSection>
  )
}
