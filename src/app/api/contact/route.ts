import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configuração via variáveis de ambiente na Vercel (nunca no código):
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS  -> servidor de envio (ex.: Resend: smtp.resend.com / 465 / resend / API key)
//   MAIL_FROM   -> remetente, ex.: "Site Da Cas <site@marcelodacas.com.br>"
//   CONTACT_TO  -> quem recebe, ex.: marcelodacas@gmail.com

const escape = (s: string) => s.replace(/[<>&"]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' })[c]!)

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'JSON inválido' }, { status: 400 })
  }

  const name = String(body.name ?? '').trim().slice(0, 120)
  const email = String(body.email ?? '').trim().slice(0, 200)
  const phone = String(body.phone ?? '').trim().slice(0, 40)
  const message = String(body.message ?? '').trim().slice(0, 5000)

  // Robô preencheu o campo-isca: finge sucesso e ignora
  if (body.website) return NextResponse.json({ success: true })

  if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: 'Campos obrigatórios ausentes' }, { status: 400 })
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, CONTACT_TO } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    console.error('Envio de e-mail não configurado (variáveis SMTP_* / CONTACT_TO ausentes).')
    return NextResponse.json({ error: 'Envio indisponível' }, { status: 503 })
  }

  const port = Number(SMTP_PORT) || 465
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  try {
    await transporter.sendMail({
      from: MAIL_FROM || SMTP_USER,
      to: CONTACT_TO,
      replyTo: `"${name.replace(/"/g, '')}" <${email}>`,
      subject: `Novo contato pelo site: ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone || '-'}\n\nMensagem:\n${message}`,
      html: `<p><b>Nome:</b> ${escape(name)}<br><b>E-mail:</b> ${escape(email)}<br><b>Telefone:</b> ${escape(phone || '-')}</p><p>${escape(message).replace(/\n/g, '<br>')}</p>`,
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Erro ao enviar e-mail' }, { status: 500 })
  }
}
