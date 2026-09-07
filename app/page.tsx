import Link from 'next/link'
import PillarCard from '../components/PillarCard'
import { PILLARS } from '../lib/pillars'

export default function Home() {
  return (
    <div>
      <h1>Curating Transformational Travel Experiences</h1>
      <p>Welcome — institutional corporate site for partnership and governance enquiries.</p>

      <section>
        <h2>The Five Pillars</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {PILLARS.map((p) => (
            <PillarCard key={p.title} title={p.title} />
          ))}
        </div>
        <p style={{ marginTop: 12 }}>Curated Experiences: applied across all five pillars as a delivery methodology.</p>
      </section>

      <p style={{ marginTop: 20 }}>
        <Link href="/partnerships">Primary: Partnership Opportunities</Link> | <Link href="/contact">Secondary: Contact</Link>
      </p>
    </div>
  )
}
