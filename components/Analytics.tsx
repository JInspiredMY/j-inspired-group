'use client'
import { useEffect } from 'react'

function injectScript(src: string, attrs: Record<string, string> = {}) {
    if (document.querySelector(`script[src="${src}"]`)) return
    const s = document.createElement('script')
    s.src = src
    s.async = true
    Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v))
    document.head.appendChild(s)
}

function initGtag(id: string) {
    if (!id) return
    if ((window as any).gtagInitialized) return
    const dataLayer = (window as any).dataLayer = (window as any).dataLayer || []
    function gtag(...args: any[]) { dataLayer.push(args) }
    ; (window as any).gtag = gtag
    gtag('js', new Date())
    gtag('config', id)
    injectScript(`https://www.googletagmanager.com/gtag/js?id=${id}`)
        ; (window as any).gtagInitialized = true
}

function initPostHog(id: string) {
    if (!id) return
    if ((window as any).posthog) return
        ; (window as any).posthog = (window as any).posthog || {}
    injectScript('https://cdn.jsdelivr.net/npm/posthog-js/dist/posthog.min.js')
    const check = setInterval(() => {
        if ((window as any).posthog && (window as any).posthog.init) {
            clearInterval(check)
                ; (window as any).posthog.init(id, { api_host: 'https://app.posthog.com' })
        }
    }, 200)
}

export default function Analytics() {
    useEffect(() => {
        function handle() {
            const consent = localStorage.getItem('analytics_consent')
            if (consent === 'true') {
                const ga = process.env.NEXT_PUBLIC_GA_ID
                const ph = process.env.NEXT_PUBLIC_POSTHOG_ID
                if (ga) initGtag(ga)
                if (ph) initPostHog(ph)
            }
        }

        handle()
        window.addEventListener('analytics-consent', handle)
        return () => window.removeEventListener('analytics-consent', handle)
    }, [])

    return null
}
