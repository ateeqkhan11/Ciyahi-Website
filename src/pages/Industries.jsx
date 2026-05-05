import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import { buildBreadcrumb } from '../seo/schema'

const breadcrumbSchema = buildBreadcrumb([
  { name: 'Industries', path: '/industries' },
])

// ── Universal pain: every CFO's office runs into these, regardless of vertical ─
const universalPain = [
  { icon: '📬', title: 'Manual invoice processing', desc: 'Most AP teams still rekey invoices into ERP. Industry-average all-in cost: ~$25 per invoice.' },
  { icon: '⏱️', title: 'Approval bottlenecks', desc: 'Invoices sit in inboxes for days. No SLA tracking, no escalation, no visibility for the AP team.' },
  { icon: '🔍', title: 'No real-time cash visibility', desc: 'Close takes 5–10 days. DSO creeps. Forecasts run on spreadsheets, not live data.' },
  { icon: '🛡️', title: 'Compliance & audit risk', desc: 'Duplicate payments, missed PO matches, broken audit trails. Different consequences in every industry — same root cause.' },
]

// ── Industry cards: each one reframed around finance automation specifics ───
const industries = [
  {
    icon: '🏦',
    title: 'Financial Services',
    desc: 'Banks, insurers, and asset managers process tens of thousands of vendor invoices a month — under heavy regulatory scrutiny. AI-powered AP automation cuts cycle time without compromising audit trail or SOX compliance.',
    pain: 'High volume · Heavy regulation · Multi-entity recharges',
    products: { name: 'InvoAIce', status: 'Live now', live: true },
    tags: ['AP Automation', 'SOX-ready', 'Multi-entity'],
    color: 'linear-gradient(135deg,#f5f3ff,#ede9fe)',
    border: 'rgba(91,33,182,.15)',
  },
  {
    icon: '🏥',
    title: 'Healthcare',
    desc: 'Hospitals, payers, and MedTech companies manage huge vendor bases with complex GL coding and procurement rules. Finance automation cuts manual coding work and accelerates supplier payments.',
    pain: 'Complex GL coding · Vendor sprawl · Procurement rules',
    products: { name: 'InvoAIce', status: 'Live now', live: true },
    tags: ['AP Automation', 'GL automation', 'Vendor management'],
    color: 'linear-gradient(135deg,#f0fdf4,#dcfce7)',
    border: 'rgba(22,163,74,.15)',
  },
  {
    icon: '🏭',
    title: 'Manufacturing',
    desc: 'Manufacturers run high-volume, multi-currency payables across global supplier bases. 3-way matching at scale, intercompany recharges, and ERP-native posting are non-negotiable.',
    pain: 'Multi-currency · 3-way match volume · Intercompany',
    products: { name: 'InvoAIce', status: 'Live now', live: true },
    tags: ['3-way Match', 'Multi-currency', 'SAP / Oracle'],
    color: 'linear-gradient(135deg,#fff7ed,#fed7aa)',
    border: 'rgba(234,88,12,.15)',
  },
  {
    icon: '🛒',
    title: 'Retail & E-Commerce',
    desc: 'Retailers manage thousands of vendors, dropship partners, and marketplace settlements. Seasonal volume spikes break manual AP workflows. AI processes invoices at any scale, with no headcount surge.',
    pain: 'Seasonal spikes · Marketplace complexity · Vendor sprawl',
    products: { name: 'InvoAIce', status: 'Live now', live: true },
    tags: ['High-volume AP', 'Marketplace', 'Scalability'],
    color: 'linear-gradient(135deg,#fdf4ff,#fae8ff)',
    border: 'rgba(168,85,247,.15)',
  },
  {
    icon: '🧑‍💼',
    title: 'Professional Services',
    desc: 'Legal, accounting, and consulting firms invoice clients project-by-project — and then chase receivables for months. AR-heavy operations need intelligent collections and contract lifecycle automation.',
    pain: 'Project billing · Slow collections · Contract sprawl',
    products: { name: 'ReceivAI · CovenAI', status: 'On the way', live: false, accent: '#2563eb' },
    tags: ['AR Automation', 'Contract Lifecycle', 'O2C'],
    color: 'linear-gradient(135deg,#f0f9ff,#e0f2fe)',
    border: 'rgba(2,132,199,.15)',
  },
  {
    icon: '⚙️',
    title: 'Technology & SaaS',
    desc: 'Subscription businesses struggle with cash application across thousands of small payments, complex revenue recognition, and global expansion. The full O2C cycle is the real automation prize.',
    pain: 'Cash application · Revenue recognition · Global O2C',
    products: { name: 'ReceivAI · TreasuryAI', status: 'On the way', live: false, accent: '#0891b2' },
    tags: ['Cash Application', 'O2C Automation', 'Revenue Ops'],
    color: 'linear-gradient(135deg,#f0fdf4,#ccfbf1)',
    border: 'rgba(20,184,166,.15)',
  },
]

// ── How Ciyahi adapts to each vertical ──────────────────────────────────────
const adaptations = [
  { icon: '🧩', title: 'Configurable approval logic', desc: 'Routing rules per entity, GL code, vendor, amount. Match your existing finance governance — no process redesign required.' },
  { icon: '🌍', title: 'Multi-currency & multi-entity', desc: 'Built for organisations operating across borders, with localised tax rules and intercompany recharges from day one.' },
  { icon: '🔌', title: 'Native ERP posting', desc: 'Posts cleanly into SAP, Oracle Fusion, JD Edwards, NetSuite, MS Dynamics, QuickBooks, Xero, and Sage. Your ERP stays where it is.' },
  { icon: '🛡️', title: 'Compliance & audit ready', desc: 'Zero-gap audit trail on every invoice. SOX-ready evidence pack. Configurable retention and data residency.' },
]

export default function Industries() {
  useEffect(() => {
    const els = document.querySelectorAll('.card, .industry-card, .pain-card, .adapt-card')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' }, Number(e.target.dataset.delay) || 0)
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' })
    requestAnimationFrame(() => {
      els.forEach((el, i) => {
        el.style.opacity = '0'; el.style.transform = 'translateY(18px)'
        el.style.transition = 'opacity .5s ease, transform .5s ease'
        el.dataset.delay = (i % 4) * 80
        obs.observe(el)
      })
    })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <SEO
        title="Finance Automation by Industry"
        path="/industries"
        description="How Ciyahi adapts AI finance automation to your vertical: Financial Services, Healthcare, Manufacturing, Retail, Professional Services, Tech & SaaS. InvoAIce ships today; the rest of the platform is on the roadmap."
        keywords="AP automation financial services, AP automation healthcare, AP automation manufacturing, AP automation retail, AP automation SaaS, finance automation by industry, AR automation legal, AR automation professional services"
      />
      <JsonLd schema={breadcrumbSchema} />

      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-blob blob-hero-1" /><div className="page-hero-blob blob-hero-2" />
        <div className="container">
          <div className="page-hero-content">
            <div className="label">Industries We Serve</div>
            <h1>Different Industries.<br /><span className="gradient-text">Same Finance Cycle.</span></h1>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.075rem' }}>
              Every business pays vendors and collects from customers. Ciyahi makes both flows work better — adapted to your industry's compliance load, transaction volume, GL complexity, and multi-entity reality.
            </p>
          </div>
        </div>
      </section>

      {/* UNIVERSAL FINANCE PAIN */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <div className="label">Some Problems Are Universal</div>
            <h2>Every CFO's office runs into <span style={{ color: '#ef4444' }}>the same four problems.</span></h2>
            <p>Regardless of vertical — manufacturing, healthcare, financial services, professional services — the AP and AR workflow looks remarkably similar under the hood. So do the failures.</p>
          </div>
          <div className="grid-4">
            {universalPain.map(p => (
              <div key={p.title} className="card pain-card" style={{ padding: '1.5rem 1.375rem', borderTop: '3px solid #ef4444' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '.625rem' }}>{p.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '.5rem' }}>{p.title}</h3>
                <p style={{ fontSize: '.875rem', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--b)', borderBottom: '1px solid var(--b)' }}>
        <div className="container">
          <div className="sec-head">
            <div className="label">By Industry</div>
            <h2>How Ciyahi Adapts to <span className="gradient-text">Your Vertical</span></h2>
            <p><strong>InvoAIce ships today.</strong> The rest of our roadmap is sequenced. Below are the verticals where the founding team's prior AP automation experience runs deepest, and where InvoAIce — and the products on our roadmap — land most cleanly.</p>
          </div>
          <div className="grid-3">
            {industries.map(ind => (
              <div key={ind.title} className="card industry-card" style={{ background: ind.color, borderColor: ind.border, padding: '1.75rem 1.5rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '.75rem', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '2.25rem' }}>{ind.icon}</div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.375rem', fontSize: '.7rem', fontWeight: 700, color: ind.products.live ? '#059669' : (ind.products.accent || '#5b21b6'), background: ind.products.live ? 'rgba(16,185,129,.12)' : 'rgba(255,255,255,.7)', border: `1px solid ${ind.products.live ? 'rgba(16,185,129,.25)' : 'rgba(0,0,0,.07)'}`, padding: '.2rem .625rem', borderRadius: '20px', whiteSpace: 'nowrap' }}>
                    {ind.products.live ? '✓ ' : ''}{ind.products.name}
                  </div>
                </div>
                <h3 style={{ marginBottom: '.5rem', fontSize: '1.125rem' }}>{ind.title}</h3>
                <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#64748b', marginBottom: '.875rem' }}>{ind.pain}</div>
                <p style={{ fontSize: '.875rem', marginBottom: '1.125rem', lineHeight: 1.6 }}>{ind.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
                  {ind.tags.map(t => (
                    <span key={t} style={{ fontSize: '.7rem', fontWeight: 600, padding: '.2rem .625rem', borderRadius: '20px', background: 'rgba(255,255,255,.7)', color: '#374151', border: '1px solid rgba(0,0,0,.07)' }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW CIYAHI ADAPTS */}
      <section className="section">
        <div className="container">
          <div className="sec-head text-center" style={{ maxWidth: '600px', margin: '0 auto 3.75rem' }}>
            <div className="label">Why InvoAIce Works Across Verticals</div>
            <h2>Built for the messy reality of <span className="gradient-text">finance — at any size.</span></h2>
            <p>InvoAIce is configurable, not hard-coded — four capabilities that let it land cleanly into any finance environment, from a 50-person SMB on QuickBooks to a multi-entity enterprise on SAP.</p>
          </div>
          <div className="grid-4">
            {adaptations.map(a => (
              <div key={a.title} className="card adapt-card">
                <div className="card-icon">{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="cta-banner">
            <h2>Don't see your vertical?</h2>
            <p>Even if your industry isn't on this list, the underlying problems — manual AP processing, slow collections, no real-time cash visibility — are universal. InvoAIce is configurable enough to land in most finance environments. Let's talk about your specific finance cycle.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Apply for Design Partner Program →</Link>
              <Link to="/products" className="btn btn-secondary">View Our Products</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
