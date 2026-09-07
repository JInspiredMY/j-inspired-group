import { NextResponse } from 'next/server'

function escapeHtml(str: string) {
    return str
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;')
}

export async function POST(req: Request) {
    try {
        const { name, email, message, type } = await req.json()

        if (!name || !email) {
            return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
        }

        const RESEND_API_KEY = process.env.RESEND_API_KEY
        const RESEND_TO_EMAIL = process.env.RESEND_TO_EMAIL

        if (!RESEND_API_KEY || !RESEND_TO_EMAIL) {
            return NextResponse.json({ error: 'Email not configured' }, { status: 500 })
        }

        const subject = `New enquiry — ${type ?? 'general'}`
        const html = `
      <p><strong>Name:</strong> ${escapeHtml(String(name))}</p>
      <p><strong>Email:</strong> ${escapeHtml(String(email))}</p>
      <p><strong>Type:</strong> ${escapeHtml(String(type ?? 'general'))}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(String(message ?? ''))}</p>
    `
        const text = `Name: ${name}\nEmail: ${email}\nType: ${type}\n\n${message ?? ''}`

        const r = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: `no-reply@${process.env.NEXT_PUBLIC_SITE_DOMAIN ?? 'example.com'}`,
                to: RESEND_TO_EMAIL,
                subject,
                html,
                text,
            }),
        })

        if (!r.ok) {
            const body = await r.text().catch(() => '')
            return NextResponse.json({ error: 'Resend error', details: body }, { status: 502 })
        }

        return NextResponse.json({ ok: true })
    } catch (err) {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }
}
