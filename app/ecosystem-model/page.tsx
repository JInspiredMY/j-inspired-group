import PillarCard from '../../components/PillarCard'
import { PILLARS } from '../../lib/pillars'

export default function EcosystemModelPage() {
  return (
    <div>
      <h1>Ecosystem Model</h1>

      <section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {PILLARS.map((p) => (
            <PillarCard key={p.title} title={p.title} description={p.description} />
          ))}
        </div>
      </section>

      <section style={{ marginTop: 20 }}>
        <h2>Curated Experiences</h2>
        <p>Curated Experiences is a cross-cutting methodology applied across the five pillars above.</p>
      </section>

      <section style={{ marginTop: 20 }}>
        <p>
          For pillar depth, see journeyinspired.travel (external). For related editorial content, see journeycurated.com (external).
        </p>
      </section>
    </div>
  )
}
