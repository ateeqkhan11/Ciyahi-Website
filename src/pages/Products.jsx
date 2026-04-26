import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
  useEffect(() => { document.title = 'Products — Ciyahi Limited' }, [])
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-blob blob-hero-1" /><div className="page-hero-blob blob-hero-2" />
        <div className="container">
          <div className="label">Our Products</div>
          <h1>Intelligent Software, Built for Real Operations</h1>
          <p className="hero-sub" style={{ maxWidth: '560px' }}>Ciyahi builds AI-native software products that solve real operational problems &mdash; starting with AP automation.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="product-spot">
            <div className="prod-badge">🚀 Flagship Product — Now in Early Access</div>
            <h2><span className="gradient-text">InvoAIce.io</span></h2>
            <p style={{ maxWidth: '640px', fontSize: '1.0625rem', marginBottom: '2rem' }}>An AI-native Accounts Payable automation platform that eliminates manual invoice processing for SMBs and mid-market finance teams. From email ingestion to ERP posting &mdash; fully automated.</p>
            <div className="prod-features">
              {[
                { icon: '⚡', title: 'AI Invoice Processing', desc: 'Extract, validate & route invoices automatically from any format' },
                { icon: '✅', title: 'Smart Approval Workflows', desc: 'Rule-based routing with exception handling and audit trail' },
                { icon: '🔌', title: 'ERP Integration', desc: 'Native sync with Oracle, SAP, NetSuite, QuickBooks & more' },
                { icon: '📊', title: 'Real-Time Analytics', desc: 'AP spend visibility, cycle time tracking, and cash flow forecasting' },
                { icon: '🔒', title: 'Compliance & Audit Ready', desc: 'Full audit trail, GDPR compliant, SOC 2 roadmap in progress' },
                { icon: '🌐', title: 'Multi-Currency & Multi-Entity', desc: 'Built for international operations from day one' },
              ].map(f => (
                <div key={f.title} className="prod-feat">
                  <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{f.icon}</span>
                  <div><strong>{f.title}</strong><span>{f.desc}</span></div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              <a href="https://www.invoaice.io" target="_blank" rel="noreferrer" className="btn btn-primary">Visit InvoAIce.io &rarr;</a>
              <Link to="/contact" className="btn btn-secondary">Join Early Access</Link>
            </div>
          </div>

          <div style={{ marginTop: '5rem' }}>
            <div className="sec-head text-center" style={{ maxWidth: '580px', margin: '0 auto 3rem' }}>
              <div className="label">Pipeline</div>
              <h2>What&rsquo;s Coming Next?</h2>
            </div>
            <div className="grid-3">
              {[
                { icon: '📑', title: 'ContractAI', status: 'Planned 2026', desc: 'AI-powered contract analysis and obligation tracking for legal and procurement teams.' },
                { icon: '📈', title: 'SpendIQ', status: 'Planned 2027', desc: 'Intelligent spend analytics and procurement optimization platform for mid-market CFOs.' },
                { icon: '🔧', title: 'IntegrateAI', status: 'Concept Phase', desc: 'Self-healing integration middleware powered by AI — monitors, diagnoses, and auto-repairs integration failures.' },
              ].map(p => (
                <div key={p.title} className="card" style={{ opacity: .85 }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{p.icon}</div>
                  <span className="insight-tag" style={{ marginBottom: '.75rem' }}>{p.status}</span>
                  <h3>{p.title}</h3>
                  <p style={{ fontSize: '.9rem' }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

