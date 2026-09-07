'use client'
import { useState } from 'react'

export default function EnquiryForm({ type = 'general' }: { type?: string }) {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const payload: Record<string, string> = {}
    formData.forEach((v, k) => (payload[k] = String(v)))

    try {
      setSending(true)
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Network error')
      setSent(true)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      alert('Sorry — there was a problem sending your enquiry.')
    } finally {
      setSending(false)
    }
  }

  if (sent) return <p>Thanks — your enquiry has been sent.</p>

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" required disabled={sending} />
      <input name="email" placeholder="Email" type="email" required disabled={sending} />
      <textarea name="message" placeholder="Message" disabled={sending} />
      <input type="hidden" name="type" value={type} />
      <button type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send'}</button>
    </form>
  )
}
