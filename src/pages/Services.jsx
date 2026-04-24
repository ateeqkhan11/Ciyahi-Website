import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  useEffect(() => { document.title = 'Services — Ciyahi Inc.' }, [])
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-blob blob-hero-1" /><div className="page-hero-blob blob-hero-2" />
        <div className="container">
          <div className="label">What We Deliver</div>
          <h1>Outcome-Driven Technology Services</h1>
          <p className="hero-sub" style={{ maxWidth: '560px' }}>Every engagement is scoped, governed, and delivered with full accountability &mdash; from advisory engagements to dedicated resource arrangements.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head"><div className="label">Core Services</div><h2>What Problems Does Ciyahi Solve?</h2></div>
          <div className="grid-3" style={{ marginBottom: '5rem' }}>
            {[
              { icon: '🤖', title: 'AI-Driven Automation', desc: 'Intelligent agents, LLM integrations, and automation frameworks. We scope, build, and deploy AI solutions that deliver measurable operational outcomes.', items: ['AI Agent Design & Deployment', 'LLM Integration & Fine-tuning', 'Workflow Automation', 'Intelligent Document Processing'] },
              { icon: '📄', title: 'AP Automation', desc: 'End-to-end accounts payable transformation — from invoice ingestion through ERP integration. Delivered as a fixed-scope engagement with defined outcomes.', items: ['Invoice OCR & Extraction', 'Approval Workflow Automation', 'ERP Integration (SAP, Oracle, NetSuite)', 'Spend Analytics & Reporting'] },
              { icon: '🔗', title: 'Integration Modernization', desc: 'Migrate from legacy point-to-point and ESB architectures to modern API-led, event-driven, cloud-native patterns.', items: ['Integration Architecture Review', 'API-Led Connectivity Design', 'MuleSoft / Boomi / Azure Implementation', 'Legacy System Migration'] },
              { icon: '🧭', title: 'IT Strategy & Advisory', desc: 'Architecture reviews, technology roadmaps, and digital transformation strategy. Delivered by founders with 15+ years of enterprise experience.', items: ['Technology Landscape Assessment', 'Digital Transformation Roadmap', 'Architecture Review & Governance', 'Vendor Selection & Due Diligence'] },
              { icon: '☁️', title: 'Cloud & Infrastructure', desc: 'Cloud migration strategy, infrastructure modernization, and DevOps implementation for enterprise-grade reliability and scalability.', items: ['Cloud Migration Planning', 'AWS / Azure / GCP Architecture', 'DevOps & CI/CD Implementation', 'Infrastructure Cost Optimization'] },
              { icon: '🛡️', title: 'Technology Due Diligence', desc: 'Impartial technology assessments for M&A, vendor evaluation, or board-level reporting. Delivered as a fixed-scope report.', items: ['Technical Debt Assessment', 'Security & Compliance Review', 'Architecture Scalability Analysis', 'M&A Technology Risk Report'] },
            ].map(s => (
              <div key={s.title} className="card">
                <div className="card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.25rem', color: 'var(--ts)', fontSize: '.9rem' }}>
                  {s.items.map(i => <li key={i} style={{ marginBottom: '.3rem' }}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* WHAT YOU GET */}
          <div className="sec-head text-center" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
            <div className="label">Deliverables</div>
            <h2>What Do You Actually Receive?</h2>
            <p>Every Ciyahi engagement produces tangible, documented deliverables &mdash; not just hours logged.</p>
          </div>
          <div className="grid-3" style={{ marginBottom: '5rem' }}>
            {[
              { icon: '📋', title: 'Integration Architecture Blueprint', svc: 'Integration Modernization', items: ['Current-state system map', 'Target architecture diagram', 'API inventory & gap analysis', 'Migration sequencing plan'] },
              { icon: '🗺️', title: 'Modernization Roadmap', svc: 'IT Strategy & Advisory', items: ['Executive summary (board-ready)', 'Prioritized initiative list', 'Effort & cost estimates', 'Risk & dependency matrix'] },
              { icon: '🤖', title: 'AI Agent Design Spec', svc: 'AI-Driven Automation', items: ['Agent capability definition', 'Data flow & integration map', 'Deployment runbook', 'KPI & measurement framework'] },
            ].map(d => (
              <div key={d.title} className="card" style={{ borderTop: '3px solid', borderImage: 'linear-gradient(90deg,#4f46e5,#0d9488) 1' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{d.icon}</div>
                <div className="insight-tag" style={{ marginBottom: '.75rem' }}>{d.svc}</div>
                <h3 style={{ marginBottom: '1rem' }}>{d.title}</h3>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--ts)', fontSize: '.9rem' }}>
                  {d.items.map(i => <li key={i} style={{ marginBottom: '.4rem' }}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="cta-banner">
            <h2>Ready to Scope Your Engagement?</h2>
            <p>Every project starts with a complimentary 30-minute strategy call. No commitment required.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Schedule a Call &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
