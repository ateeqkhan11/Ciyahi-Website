const RING_A = ['Intake', 'Classify', 'Extract', 'Price']
const RING_B = ['OCR', 'Match', 'ERP', 'Notify']

const STATS = [
  { value: '65+', label: 'Document types', cls: '' },
  { value: '90%', label: 'Straight-through', cls: 'hero-showcase-stat--live' },
  { value: '4 wks', label: 'Typical go-live', cls: '' },
]

export default function HeroShowcase() {
  return (
    <div className="hero-showcase" aria-hidden="true">
      <div className="hero-showcase-glow" />
      <div className="hero-float-chip hero-float-chip--1">Insurance pipeline live</div>
      <div className="hero-float-chip hero-float-chip--2">InvoAIce in production</div>

      <div className="hero-showcase-card">
        <div className="hero-showcase-shine" />
        <div className="hero-showcase-header">
          <span className="hero-showcase-pulse" />
          <span>Agent systems · running now</span>
        </div>

        <div className="hero-orbit">
          <div className="hero-orbit-ring hero-orbit-ring--a" />
          <div className="hero-orbit-ring hero-orbit-ring--b" />
          <div className="hero-orbit-core">
            <span className="hero-orbit-core-mark" />
          </div>
          {RING_A.map((label, i) => (
            <span
              key={label}
              className="hero-orbit-node hero-orbit-node--outer"
              style={{ '--i': i, '--n': RING_A.length }}
            >
              {label}
            </span>
          ))}
          {RING_B.map((label, i) => (
            <span
              key={label}
              className="hero-orbit-node hero-orbit-node--inner"
              style={{ '--i': i, '--n': RING_B.length }}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="hero-showcase-stats">
          {STATS.map(s => (
            <div key={s.label} className={`hero-showcase-stat ${s.cls}`}>
              <div className="hero-showcase-stat-val">{s.value}</div>
              <div className="hero-showcase-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
