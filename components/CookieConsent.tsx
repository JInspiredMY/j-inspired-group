'use client'
import { useEffect, useState } from 'react'

export default function CookieConsent() {
    const [consent, setConsent] = useState<string | null>(null)

    useEffect(() => {
        const v = localStorage.getItem('analytics_consent')
        setConsent(v)
    }, [])

    function accept() {
        localStorage.setItem('analytics_consent', 'true')
        setConsent('true')
        window.dispatchEvent(new Event('analytics-consent'))
    }

    function reject() {
        localStorage.setItem('analytics_consent', 'false')
        setConsent('false')
    }

    if (consent !== null) return null

    return (
        <div style={{ position: 'fixed', bottom: 16, left: 16, right: 16, background: '#fff', padding: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <strong>Analytics</strong>
                    <div style={{ fontSize: 13 }}>We use GA4 and PostHog for site analytics. Accept to enable.</div>
                </div>
                <div>
                    <button onClick={reject} style={{ marginRight: 8 }}>Reject</button>
                    <button onClick={accept}>Accept</button>
                </div>
            </div>
        </div>
    )
}
