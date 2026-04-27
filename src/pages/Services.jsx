import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: '📄',
    title: 'AP Automation',
    tag: 'Core Expertise',
    tagColor: '#5b21b6',
    tagBg: 'rgba(91,33,182,.08)',
    desc: "Our deepest area of expertise — backed by 20+ enterprise implementations across 25+ countries and an industry award for Best Designed AP Automation Solution. We don't just configure tools. We design end-to-end AP processes that scale.",
    outcomes: [
      'End-to-end invoice lifecycle automation — ingestion, validation, approval, posting',
      'AI-powered data extraction with 88%+ accuracy across all invoice formats',
      'ERP integration (Oracle, SAP, NetSuite, QuickBooks, Xero) with automatic GL coding',
      'Three-way PO matching, duplicate detection, and VAT/tax validation',
      'CFO-ready reporting: cycle time, aging, approval bottlenecks, cash flow',
      'Typical go-live in 4–8 weeks. Measurable ROI within 90 days.',
    ],
    kpis: ['80% less processing time', '88%+ extraction accuracy', '4–8 week implementation'],
    emoji: '📄',
  },
  {
    icon: '🤖',
    title: 'AI-Driven Automation',
    tag: 'New Capability',
    tagColor: '#0284c7',
    tagBg: 'rgba(2,132,199,.08)',
    desc: 'We build intelligent automation frameworks using LLMs, AI agents, and orchestration layers — replacing brittle RPA and manual workflows with systems that reason, adapt, and scale.',
    outcomes: [
      'AI agent design and deployment for finance, procurement, and operational workflows',
      'LLM integration into existing enterprise systems and data pipelines',
      'Intelligent document processing beyond invoices: contracts, purchase orders, remittances',
      'Process mining and automation opportunity identification',
      'Human-in-the-loop escalation design for high-risk decisions',
    ],
    kpis: ['Outcome-scoped delivery', 'Faster than RPA', 'Auditable AI decisions'],
    emoji: '🤖',
  },
  {
    icon: '🔗',
    title: 'Integration Modernisation',
    tag: 'Enterprise Capability',
    tagColor: '#0284c7',
    tagBg: 'rgba(2,132,199,.08)',
    desc: "Legacy ESBs and point-to-point integrations don't scale. We architect and deliver modern integration patterns — API-led, event-driven, and cloud-native — using platforms your team already operates.",
    outcomes: [
      'Integration architecture assessment: current state mapping, gap analysis, roadmap',
      'Migration from legacy ESB (IBM, TIBCO, Oracle SOA) to modern middleware',
      'MuleSoft, Boomi, Azure Integration Services, AWS EventBridge implementation',
      'API design, governance, and lifecycle management',
      'Real-time event streaming and async messaging architecture',
      'Integration monitoring, alerting, and operational runbooks',
    ],
    kpis: ['Reduced integration debt', 'Cloud-native patterns', 'Full operational handover'],
    emoji: '🔗',
  },
  {
    icon: '🧭',
    title: 'IT Strategy & Advisory',
    tag: 'Advisory',
    tagColor: '#5b21b6',
    tagBg: 'rgba(91,33,182,.08)',
    desc: 'Technology strategy without implementation context is a guess. We bring 15+ years of enterprise delivery experience to your architecture reviews, digital transformation planning, and technology investment decisions.',
    outcomes: [
      'Current-state technology and integration assessment',
      'Digital transformation roadmap with sequenced, deliverable milestones',
      'Build vs. buy analysis for AI, automation, and integration tooling',
      'CTO/CISO advisory on architecture decisions and technology risk',
      'Vendor evaluation and selection support',
      'Board and investor-ready technology narrative development',
    ],
    kpis: ['Outcome-scoped', 'Founder-led', 'No junior handoff'],
    emoji: '🧭',
  },
]

const methodology = [
  { num: '01', title: 'Assess', desc: 'We map your current state, identify the real problem (not just the stated one), and define measurable outcomes before any work begins.' },
  { num: '02', title: 'Design', desc: 'We architect the solution — process design, technical architecture, integration patterns — with your team, not at them.' },
  { num: '03', title: 'Deliver', desc: 'We build and implement. Founder-led throughout. No handoffs to junior teams after the SOW is signed.' },
  { num: '04', title: 'Embed', desc: 'We train your people, document everything, and ensure the solution runs without us. Outcomes, not dependency.' },
]

export default function Services() {
  useEffect(() => { document.title = 'Services — Ciyahi Limited' }, [])

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-blob blob-hero-1" />
        <div className="page-hero-blob blob-hero-2" />
        <div className="container">
          <div className="page-hero-content">
            <div className="label">What We Do</div>
            <h1>Founder-Led Services.<br />Outcome-Priced Delivery.</h1>
            <p style={{ maxWidth: '580px', margin: '0 auto', fontSize: '1.075rem' }}>
              Every engagement is led by a founder from first call to final handover. We scope on outcomes, not time — so you always know exactly what you are paying for.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* Credibility bar */}
          <div style={{ marginBottom: '5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div className="label" style={{ margin: '0 auto .625rem' }}>Founding Team Track Record</div>
              <p style={{ fontSize: '.9rem', color: 'var(--ts)', maxWidth: '440px', margin: '0 auto' }}>The experience behind every Ciyahi engagement — built before we built Ciyahi.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', padding: '1.75rem', background: 'linear-gradient(135deg,rgba(91,33,182,.05),rgba(2,132,199,.04))', borderRadius: '16px', border: '1px solid rgba(91,33,182,.1)' }}>
              {[
                { icon: '🌍', text: '20+ Enterprise Implementations' },
                { icon: '🗺️', text: '25+ Countries Delivered In' },
                { icon: '🏆', text: 'Award-Winning AP Automation' },
                { icon: '📅', text: '15+ Years of Enterprise Experience' },
                { icon: '🏗️', text: 'Founder-Led Every Engagement' },
              ].map(c => (
                <div key={c.text} style={{ display: 'flex', alignItems: 'center', gap: '.625rem', fontSize: '.9rem', fontWeight: 500, color: '#374151', padding: '.5rem 1rem', background: '#fff', borderRadius: '100px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(15,23,42,.04)' }}>
                  <span style={{ fontSize: '1.125rem' }}>{c.icon}</span>
                  {c.text}
                </div>
              ))}
            </div>
          </div>

          {/* Service blocks */}
          {services.map((svc, i) => (
            <div key={svc.title} style={{ marginBottom: '3rem', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(15,23,42,.06)' }}>
              {/* Header */}
              <div style={{ padding: '2.5rem 2.5rem 2rem', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg,rgba(91,33,182,.1),rgba(2,132,199,.07))', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.625rem', flexShrink: 0, border: '1px solid rgba(91,33,182,.12)' }}>{svc.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '.5rem', flexWrap: 'wrap' }}>
                    <h2 style={{ fontSize: '1.375rem', margin: 0 }}>{svc.title}</h2>
                    <span style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: svc.tagColor, background: svc.tagBg, padding: '.2rem .75rem', borderRadius: '100px', border: `1px solid ${svc.tagColor}22` }}>{svc.tag}</span>
                  </div>
                  <p style={{ fontSize: '1rem', marginBottom: '1rem', maxWidth: '680px' }}>{svc.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
                    {svc.kpis.map(k => (
                      <span key={k} style={{ fontSize: '.775rem', fontWeight: 600, color: '#5b21b6', background: 'rgba(91,33,182,.06)', padding: '.25rem .75rem', borderRadius: '100px', border: '1px solid rgba(91,33,182,.15)' }}>{k}</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Outcomes */}
              <div style={{ padding: '2rem 2.5rem' }}>
                <p style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '1rem' }}>What You Get</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '.75rem' }}>
                  {svc.outcomes.map(o => (
                    <div key={o} style={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem', padding: '.875rem 1rem', background: '#f8f8fd', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                      <span style={{ color: '#5b21b6', fontSize: '1rem', flexShrink: 0, marginTop: '.05rem' }}>✓</span>
                      <span style={{ fontSize: '.9rem', color: '#374151', lineHeight: 1.55 }}>{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Methodology */}
          <div style={{ marginBottom: '5rem' }}>
            <div className="sec-head text-center" style={{ maxWidth: '480px', margin: '0 auto 3rem' }}>
              <div className="label">How We Work</div>
              <h2>Our Delivery Methodology</h2>
              <p>The same four-phase approach across every engagement — adapted to your context, never templated.</p>
            </div>
            <div className="method-grid">
              {methodology.map(m => (
                <div key={m.num} className="method-step">
                  <div className="method-num">{m.num}</div>
                  <h3>{m.title}</h3>
                  <p style={{ fontSize: '.9375rem' }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-banner">
            <h2>Ready to Talk Outcomes?</h2>
            <p>Tell us what you are trying to achieve. We will tell you honestly whether we can help — and what it would cost.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Schedule a Free Call →</Link>
              <Link to="/products" className="btn btn-secondary">View Our Products</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
