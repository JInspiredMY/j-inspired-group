'use client'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/our-story">Our Story</Link></li>
        <li><Link href="/ecosystem-model">Ecosystem Model</Link></li>
        <li><Link href="/partnerships">Partnerships</Link></li>
        <li><Link href="/governance">Governance</Link></li>
        <li><Link href="/press">Press</Link></li>
        <li><Link href="/careers">Careers</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
