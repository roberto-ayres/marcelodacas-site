import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // ⚠️ por enquanto, usa um transport fictício (modo de teste)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'contato@marcelodacas.com.br',
        pass: process.env.SMTP_PASS || 'SENHA_AQUI',
      },
    })

    await transporter.sendMail({
      from: `"Site Marcelo da Cas" <${process.env.SMTP_USER}>`,
      to: 'contato@marcelodacas.com.br',
      subject: `Nova mensagem de ${name}`,
      text: `
Nome: ${name}
E-mail: ${email}

Mensagem:
${message}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Erro ao enviar e-mail' }, { status: 500 })
  }
}
