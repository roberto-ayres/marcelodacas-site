// app/contato/page.tsx
'use client'

import type React from 'react'
import PageSection from '@/components/PageSection'

export default function ContactPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: (formData.get('name') as string) ?? '',
      email: (formData.get('email') as string) ?? '',
      message: (formData.get('message') as string) ?? '',
    }

    if (!data.name || !data.email || !data.message) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        alert('Mensagem enviada com sucesso!')
        form.reset()
      } else {
        console.error(await res.text())
        alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.')
      }
    } catch (error) {
      console.error(error)
      alert('Ocorreu um erro de conexão. Tente novamente mais tarde.')
    }
  }

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
          <ul className="space-y-1 text-slate-700">
            <li>
              <strong>Telefone:</strong> (51) 99722-1500
            </li>
            <li>
              <strong>E-mail:</strong>{' '}
              <a
                href="mailto:contato@marcelodacas.com.br"
                className="text-blue-600 hover:text-blue-800 underline-offset-2 hover:underline cursor-pointer"
              >
                contato@marcelodacas.com.br
              </a>
            </li>
            <li>
              <strong>WhatsApp: </strong>
              <a
                href="https://wa.me/555197221500"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[15px] font-medium cursor-pointer"
                title="Abrir conversa no WhatsApp"
              >
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-3 w-3 fill-white"
                    aria-hidden="true"
                  >
                    <path d="M20.52 3.48A11.8 11.8 0 0 0 12.01 0C5.73 0 0 5.13 0 11.41c0 2.01.53 3.98 1.55 5.72L0 24l7.09-2.12a11.37 11.37 0 0 0 4.92 1.13h.01c6.28 0 11.41-5.13 11.41-11.41 0-3.05-1.19-5.92-3.41-8.12ZM12 21.2a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-4.21 1.26 1.25-4.1-.22-.34a9.4 9.4 0 0 1-1.45-5.04C2.24 6.34 6.6 1.98 12 1.98c2.48 0 4.81.97 6.56 2.72a9.2 9.2 0 0 1 2.7 6.55c0 5.4-4.36 9.86-9.76 9.86Zm5.32-7.12c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.14-.19.29-.74.93-.91 1.12-.17.19-.34.2-.63.05-.29-.15-1.22-.5-2.33-1.59-.86-.83-1.44-1.86-1.61-2.16-.17-.29-.02-.44.13-.59.14-.14.29-.34.44-.51.15-.17.2-.29.3-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49-.17 0-.36-.01-.55-.01-.19 0-.51.07-.78.36-.26.29-1.02.99-1.02 2.4 0 1.41 1.04 2.77 1.18 2.96.15.19 2.04 3.2 4.96 4.48.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.56-.08 1.7-.7 1.94-1.38.24-.68.24-1.27.17-1.38-.07-.12-.26-.19-.55-.34Z" />
                  </svg>
                </span>
                <span className="text-green-600 hover:text-green-700">
                  (51) 9722-1500
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Formulário de contato */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-700">
                Nome
              </label>
              <input
                type="text"
                name="name"
                required
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
                name="email"
                required
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
              name="message"
              required
              className="min-h-[120px] w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-slate-900/10 focus:ring-2"
              placeholder="Como o escritório pode te ajudar?"
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 active:bg-slate-950"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </PageSection>
  )
}
