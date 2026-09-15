import './globals.css'
import type { ReactNode } from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import Analytics from '../components/Analytics'
import CookieConsent from '../components/CookieConsent'
import { Analytics as VercelAnalytics } from '@vercel/analytics/next'

export const metadata = {
  title: 'Journey Inspired Group',
}

// ClerkProvider wraps the whole app because middleware.ts needs it globally,
// but it renders nothing on the public institutional pages — auth only
// gates /admin (R1, see design brief v1.4 Appendix A). No sign-in UI is
// added here for the public site.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Analytics />
          <VercelAnalytics />
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
    </ClerkProvider>
  )
}
