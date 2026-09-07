import './globals.css'
import type { ReactNode } from 'react'
import Analytics from '../components/Analytics'
import CookieConsent from '../components/CookieConsent'

export const metadata = {
  title: 'Journey Inspired Group',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <header>
          <nav>
            <a href="/">Home</a> | <a href="/our-story">Our Story</a> | <a href="/ecosystem-model">Ecosystem Model</a> | <a href="/partnerships">Partnerships</a> | <a href="/governance">Governance</a> | <a href="/press">Press</a> | <a href="/careers">Careers</a> | <a href="/contact">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© Journey Inspired Group</p>
        </footer>
        <CookieConsent />
      </body>
    </html>
  )
}
