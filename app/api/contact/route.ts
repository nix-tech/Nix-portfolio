import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, message } = await req.json()

    if (!name || !message) {
      return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio NixDev" <${process.env.GMAIL_USER}>`,
      to: 'nixnithersaintval@gmail.com',
      subject: `💬 Nouveau message de ${name} — Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 520px; margin: auto; background: #0b0e1f; color: #fff; border-radius: 12px; overflow: hidden; border: 1px solid rgba(124,77,255,0.3);">
          <div style="background: linear-gradient(135deg, #7c4dff, #c026d3); padding: 24px 28px;">
            <h2 style="margin: 0; font-size: 20px;">💬 Nouveau commentaire</h2>
            <p style="margin: 6px 0 0; opacity: 0.85; font-size: 14px;">Via votre portfolio NixDev</p>
          </div>
          <div style="padding: 24px 28px;">
            <p style="margin: 0 0 6px; font-size: 13px; color: #a78bfa; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">De</p>
            <p style="margin: 0 0 20px; font-size: 16px; font-weight: 700;">${name}</p>
            <p style="margin: 0 0 6px; font-size: 13px; color: #a78bfa; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Message</p>
            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>
          <div style="padding: 14px 28px; border-top: 1px solid rgba(255,255,255,0.06); font-size: 12px; color: rgba(255,255,255,0.4);">
            Envoyé depuis votre portfolio · nixdev.vercel.app
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error: 'Erreur lors de l\'envoi' }, { status: 500 })
  }
}
