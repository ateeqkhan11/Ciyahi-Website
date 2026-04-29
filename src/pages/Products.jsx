import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const invoaiceFeatures = [
  {
    icon: '📥',
    title: 'Intelligent Invoice Ingestion',
    desc: 'Capture invoices from any channel — email, portal, EDI, or scan. AI extracts header, line, and tax data with 88%+ accuracy across all formats (PDF, XML, image).',
    kpi: '88%+ extraction accuracy',
  },
  {
    icon: '✅',
    title: 'Smart Approval Workflows',
    desc: 'Configurable, rule-based routing with AI-assisted exception handling. Invoices reach the right approver first time — with full audit trail and escalation logic built in.',
    kpi: 'Up to 80% reduction in approval cycle time',
  },
  {
    icon: '🔌',
    title: 'ERP & System Integration',
    desc: 'Native connectors for Oracle, SAP, NetSuite, QuickBooks, and Xero. Invoices post automatically with correct GL coding — no manual re-keying, no reconciliation headaches.',
    kpi: 'Elimination of manual ERP data entry',
  },
  {
    icon: '📊',
    title: 'Real-Time AP Analytics',
    desc: 'Live dashboard for invoice cycle time, approval bottlenecks, supplier aging, and cash flow forecasting. CFO-ready reporting out of the box.',
    kpi: 'Full AP visibility in real time',
  },
  {
    icon: '🛡️',
    title: 'Compliance & Audit Ready',
    desc: 'Every action logged and timestamped. Duplicate detection, three-way PO matching, and VAT/tax validation built into the core processing pipeline.',
    kpi: 'Zero-gap audit trail on every invoice',
  },
  {
    icon: '🌐',
    title: 'Multi-Currency & Multi-Entity',
    desc: 'Designed for organisations operating across borders. Handles multi-currency invoices, cross-entity recharges, and localised tax rules from day one.',
    kpi: 'Built for global AP operations',
  },
]

const pipeline = [
  {
    icon: '📜',
    title: 'CovenAI',
    subtitle: 'AI-Native Contract Lifecycle Management',
    status: 'Planned — 2026',
    desc: 'End-to-end contract lifecycle management powered by AI. Extract key terms, track obligations, flag risks, and surface renewal dates automatically — across every contract in your business.',
    color: 'linear-gradient(135deg,#faf5ff,#ede9fe)',
    border: 'rgba(91,33,182,.15)',
  },
  {
    icon: '💸',
    title: 'ReceivAI',
    subtitle: 'AI-Native Accounts Receivable',
    status: 'Planned — 2026',
    desc: 'Intelligent AR automation that accelerates cash collection, reduces DSO, and eliminates manual follow-up. AI-driven dunning, dispute management, and real-time receivables visibility.',
    color: 'linear-gradient(135deg,#f0fdf4,#dcfce7)',
    border: 'rgba(22,163,74,.15)',
  },
  {
    icon: '📊',
    title: 'ProcurAI',
    subtitle: 'AI-Native Procurement Intelligence',
    status: 'Planned — 2027',
    desc: 'Spend analytics and procurement optimisation for mid-market and enterprise CFOs. Category-level visibility, supplier consolidation recommendations, and AI-identified savings opportunities.',
    color: 'linear-gradient(135deg,#f0f9ff,#e0f2fe)',
    border: 'rgba(2,132,199,.15)',
  },
]

const whyInvoaice = [
  { icon: '⚡', title: 'Weeks, Not Months', desc: 'Faster to value than any legacy AP platform. Typical implementation in 4–8 weeks.' },
  { icon: '🏆', title: 'Award-Winning Design', desc: 'Built by a team recognised for Best Designed AP Automation Solution & Implementation.' },
  { icon: '🤖', title: 'AI at the Core', desc: 'Not a workflow tool with AI bolted on. AI-native architecture from the ground up.' },
  { icon: '🔒', title: 'Enterprise-Grade Security', desc: 'SOC 2 roadmap in progress. GDPR compliant. Full audit trail and role-based access control.' },
]

export default function Products() {
  useEffect(() => { document.title = 'Products — Ciyahi Limited' }, [])

  return (
    <>
      <SEO
        title="Products"
        path="/products"
        description="InvoAIce.io is an AI-native AP automation platform that integrates with Oracle Fusion, JD Edwards, SAP, and QuickBooks — without replacing your ERP. Live in 2 weeks."
      />
      <section className="page-hero">
        <div className="page-hero-blob blob-hero-1" />
        <div className="page-hero-blob blob-hero-2" />
        <div className="container">
          <div className="page-hero-content">
            <div className="label">Our Products</div>
            <h1>Intelligent Software,<br />Built for Real Operations</h1>
            <p style={{ maxWidth: '560px', margin: '0 auto', fontSize: '1.075rem' }}>
              Ciyahi builds AI-native software products that solve real operational finance and procurement problems — starting with the AP automation platform that enterprises actually need.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* InvoAIce spotlight */}
          <div className="product-spot" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div>
                <div className="prod-badge">🚀 Flagship Product — Now in Early Access</div>
                <h2 style={{ marginTop: '.75rem', marginBottom: '.625rem' }}><span className="gradient-text">InvoAIce.io</span></h2>
                <p style={{ maxWidth: '600px', fontSize: '1.0625rem', marginBottom: 0 }}>
                  An AI-native Accounts Payable automation platform that eliminates manual invoice processing for SMBs, mid-market, and enterprise finance teams — from email ingestion to ERP posting, fully automated.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '.875rem', flexShrink: 0, alignSelf: 'flex-end', flexWrap: 'wrap' }}>
                <a href="https://www.invoaice.io" target="_blank" rel="noreferrer" className="btn btn-primary">Visit InvoAIce.io →</a>
                <Link to="/contact" className="btn btn-secondary">Join Early Access</Link>
              </div>
            </div>

            {/* Outcome strip */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1rem', margin: '2rem 0', padding: '1.5rem', background: 'rgba(255,255,255,.7)', borderRadius: '12px', border: '1px solid rgba(91,33,182,.1)' }}>
              {[
                { metric: '80%', label: 'Reduction in AP processing time' },
                { metric: '88%+', label: 'Invoice data extraction accuracy' },
                { metric: '4–8 wks', label: 'Typical implementation timeline' },
                { metric: '0', label: 'Manual ERP re-keying required' },
              ].map(m => (
                <div key={m.label} style={{ textAlign: 'center', padding: '.5rem' }}>
                  <div style={{ fontSize: '1.625rem', fontWeight: 800, background: 'linear-gradient(135deg,#5b21b6,#0284c7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.1, marginBottom: '.3rem' }}>{m.metric}</div>
                  <div style={{ fontSize: '.8rem', color: '#64748b', fontWeight: 500 }}>{m.label}</div>
                </div>
              ))}
            </div>

            {/* Feature grid */}
            <div className="prod-features">
              {invoaiceFeatures.map(f => (
                <div key={f.title} className="prod-feat">
                  <span style={{ fontSize: '1.5rem', flexShrink: 0, marginTop: '.1rem' }}>{f.icon}</span>
                  <div>
                    <strong>{f.title}</strong>
                    <span style={{ display: 'block', marginBottom: '.5rem' }}>{f.desc}</span>
                    <span style={{ display: 'inline-block', fontSize: '.75rem', fontWeight: 700, color: '#5b21b6', background: 'rgba(91,33,182,.07)', padding: '.15rem .625rem', borderRadius: '100px', border: '1px solid rgba(91,33,182,.15)' }}>{f.kpi}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why InvoAIce */}
          <div style={{ background: '#f8f8fd', borderRadius: '16px', padding: '3rem', marginBottom: '5rem', border: '1px solid #e2e8f0' }}>
            <div className="sec-head text-center" style={{ maxWidth: '500px', margin: '0 auto 2.5rem' }}>
              <div className="label">Why InvoAIce</div>
              <h2 style={{ fontSize: '1.625rem' }}>What Makes InvoAIce Different?</h2>
            </div>
            <div className="grid-4">
              {whyInvoaice.map(w => (
                <div key={w.title} style={{ textAlign: 'center', padding: '1.25rem 1rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '.875rem' }}>{w.icon}</div>
                  <h3 style={{ fontSize: '1rem', marginBottom: '.5rem' }}>{w.title}</h3>
                  <p style={{ fontSize: '.875rem' }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pipeline */}
          <div className="sec-head text-center" style={{ maxWidth: '560px', margin: '0 auto 3rem' }}>
            <div className="label">Product Pipeline</div>
            <h2>What Is Coming Next?</h2>
            <p>We are building a focused portfolio of AI-native products across finance, legal, and procurement operations.</p>
          </div>
          <div className="grid-3" style={{ margin: '0 auto 5rem' }}>
            {pipeline.map(p => (
              <div key={p.title} className="card" style={{ background: p.color, borderColor: p.border }}>
                <div style={{ fontSize: '2rem', marginBottom: '.875rem' }}>{p.icon}</div>
                <h3 style={{ marginBottom: '.25rem' }}>{p.title}</h3>
                <div style={{ fontSize: '.75rem', fontWeight: 600, color: '#64748b', marginBottom: '.75rem', fontStyle: 'italic' }}>{p.subtitle}</div>
                <span style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', color: '#7c3aed', background: 'rgba(91,33,182,.08)', padding: '.15rem .625rem', borderRadius: '100px', border: '1px solid rgba(91,33,182,.15)', display: 'inline-block', marginBottom: '1rem' }}>{p.status}</span>
                <p style={{ fontSize: '.9rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="cta-banner">
            <h2>Interested in Early Access?</h2>
            <p>Join our early access programme and be among the first organisations to run InvoAIce.io in production.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Request Early Access →</Link>
              <Link to="/about" className="btn btn-secondary">Meet the Team</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
