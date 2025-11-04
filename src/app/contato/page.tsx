// app/contato/page.tsx
import PageSection from '@/components/PageSection'

export default function ContactPage() {
  return (
    <PageSection
      title="Contato"
      subtitle="Informações para que os clientes possam entrar em contato com o escritório."
    >
      <div className="grid gap-8 md:grid-cols-[2fr,3fr]">
        {/* Bloco de informações fixas */}
        <div className="space-y-3 text-sm">
          <h2 className="text-base font-semibold text-slate-900">
            Informações de contato
          </h2>
          <p className="text-slate-700">
            Aqui vamos colocar:
          </p>
          <ul className="space-y-1 text-slate-700">
            <li><strong>Endereço:</strong> (endereço do escritório)</li>
            <li><strong>Telefone:</strong> (telefone fixo/celular)</li>
            <li><strong>E-mail:</strong> contato@marcelodacas.com.br</li>
            <li><strong>WhatsApp:</strong></li>
          </ul>
        </div>

        {/* Formulário de contato (ainda sem backend) */}
        <form className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-700">
                Nome
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-slate-900/10 focus:ring-2"
                placeholder="Seu nome"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-700">
                E-mail
              </label>
              <input
                type="email"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-slate-900/10 focus:ring-2"
                placeholder="seuemail@exemplo.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-700">
              Mensagem
            </label>
            <textarea
              className="min-h-[120px] w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-slate-900/10 focus:ring-2"
              placeholder="Como o escritório pode te ajudar?"
            />
          </div>

          <button
            type="button"
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 active:bg-slate-950"
          >
            Enviar mensagem
          </button>

          <p className="text-[11px] text-slate-500">
            Depois, quando estiver tudo ok, eu conecto este formulário
            para enviar direto para teu endereço de email.
          </p>
        </form>
      </div>
    </PageSection>
  )
}
