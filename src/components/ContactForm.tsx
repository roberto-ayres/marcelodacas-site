'use client'

import { useState } from 'react'
import { site } from '@/lib/site'
import { WhatsAppIcon } from './Icon'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const inputCls =
  'w-full rounded-xl border border-mist bg-paper/60 px-4 py-3 text-[15px] text-ink outline-none transition placeholder:text-stone/60 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const data = {
      name: String(fd.get('name') ?? '').trim(),
      email: String(fd.get('email') ?? '').trim(),
      phone: String(fd.get('phone') ?? '').trim(),
      message: String(fd.get('message') ?? '').trim(),
      website: String(fd.get('website') ?? ''), // campo-isca contra spam
    }

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(await res.text())
      setStatus('sent')
      form.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="mt-8 rounded-2xl bg-brand-soft p-6 text-ink">
        <p className="font-serif text-2xl font-semibold">Mensagem enviada.</p>
        <p className="mt-1 text-sm text-ink/70">Obrigado pelo contato. Retornaremos em breve.</p>
      </div>
    )
  }

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-sm font-medium text-ink">Nome</span>
          <input name="name" required autoComplete="name" className={inputCls} placeholder="Seu nome" />
        </label>
        <label className="block space-y-2">
          <span className="text-sm font-medium text-ink">Telefone <span className="font-normal text-stone">(opcional)</span></span>
          <input name="phone" type="tel" autoComplete="tel" className={inputCls} placeholder="(51) 90000-0000" />
        </label>
      </div>
      <label className="block space-y-2">
        <span className="text-sm font-medium text-ink">E-mail</span>
        <input name="email" type="email" required autoComplete="email" className={inputCls} placeholder="seuemail@exemplo.com" />
      </label>
      <label className="block space-y-2">
        <span className="text-sm font-medium text-ink">Mensagem</span>
        <textarea name="message" required rows={5} className={`${inputCls} resize-y`} placeholder="Conte brevemente como podemos ajudar." />
      </label>

      {/* Campo invisível: robôs preenchem, pessoas não */}
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {status === 'error' && (
        <p className="rounded-xl bg-red-50 p-4 text-sm text-red-800">
          Não foi possível enviar agora. Por favor, fale conosco pelo{' '}
          <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
            WhatsApp
          </a>
          .
        </p>
      )}

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-white transition hover:bg-brand disabled:opacity-60"
        >
          {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
        </button>
        <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-stone hover:text-ink">
          <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
          Prefere o WhatsApp?
        </a>
      </div>
    </form>
  )
}
