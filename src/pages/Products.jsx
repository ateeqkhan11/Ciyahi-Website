import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FileText, ScanLine, Shield, CheckCircle2, GitMerge, UserCheck, Plug, Bell } from 'lucide-react'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import { buildBreadcrumb } from '../seo/schema'

// ── Schema.org SoftwareApplication — InvoAIce as a discoverable product ───
const invoaiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'InvoAIce.io',
  alternateName: 'InvoAIce',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Accounts Payable Automation',
  operatingSystem: 'Web-based / Cloud',
  url: 'https://www.invoaice.io',
  description: 'AI-native Accounts Payable automation platform built around an 8-agent swarm pipeline. Integrates with SAP, Oracle, NetSuite, MS Dynamics, QuickBooks, Xero, and Sage. Up to 90% straight-through processing, ~14s avg processing time, 4-week ERP go-live.',
  publisher: {
    '@type': 'Organization',
    name: 'Ciyahi Limited',
    url: 'https://ciyahi.com',
  },
  featureList: [
    'AI invoice ingestion from email, EDI, vendor portal, scan',
    'Up to 99.2% field-level extraction accuracy across PDF, XML, image formats',
    'Three-way PO/GRN matching with configurable tolerance',
    '14 fraud signals on every invoice including BEC pattern detection',
    'ERP integration: SAP, Oracle Fusion, JD Edwards, NetSuite, MS Dynamics, QuickBooks, Xero, Sage',
    'Multi-currency, multi-entity AP operations',
    'SOX-ready zero-gap audit trail',
    'Multi-tenant SaaS, single-tenant cloud, BYOC, and air-gapped on-prem deployment',
    '4-week typical ERP go-live',
  ],
}

const breadcrumbSchema = buildBreadcrumb([
  { name: 'Products', path: '/products' },
])

// ── InvoAIce flagship metrics — qualified for public marketing use ─────────
const invoaiceStats = [
  { value: 'Up to 90%', label: 'Straight-through processing' },
  { value: '~14s', label: 'Avg processing time' },
  { value: '4 wks', label: 'ERP go-live' },
  { value: 'Up to 99.2%', label: 'Field-level accuracy' },
]

// ── Inside InvoAIce: the 8-agent swarm — Ciyahi's signature architecture ───
const agents = [
  { Icon: FileText, title: 'DocIntel', desc: 'Captures invoices from email, vendor portals, EDI feeds, and scanned files. Routes them into the pipeline within seconds of arrival.' },
  { Icon: ScanLine, title: 'OCR Agent', desc: 'Extracts header, line, and tax data with up to 99.2% field accuracy across PDFs, XML, images, and scanned formats.' },
  { Icon: Shield, title: 'Fraud Agent', desc: '14 fraud signals on every invoice — including BEC pattern detection, vendor anomalies, and duplicate inspection.' },
  { Icon: CheckCircle2, title: 'Validation Agent', desc: '15+ rule-based and ML validation checks. PO presence, tax integrity, vendor master alignment, currency consistency.' },
  { Icon: GitMerge, title: 'Matching Agent', desc: 'Three-way PO/GRN match with configurable tolerances (default 5%). Exceptions auto-routed to the right resolver.' },
  { Icon: UserCheck, title: 'Approval Agent', desc: 'Routes by amount, role, vendor, GL code. SLA tracking and escalation built in. Approves on mobile or email.' },
  { Icon: Plug, title: 'ERP Agent', desc: 'Posts cleanly into your ERP with correct GL coding. SAP, Oracle, NetSuite, MS Dynamics, QuickBooks, Xero, Sage.' },
  { Icon: Bell, title: 'Notify Agent', desc: 'Email confirmations, vendor status, audit trail. Every step logged. Zero-gap audit on every invoice processed.' },
]

const erpEnterprise = ['SAP', 'Oracle Fusion', 'JD Edwards', 'Oracle EBS', 'NetSuite', 'MS Dynamics']
const erpSMB = ['QuickBooks', 'Xero', 'Sage', 'FreshBooks']

// ── Aspiration: the platform we're building toward — InvoAIce anchored, rest clearly future ─
const platformP2P = [
  { name: 'ProcurAI', desc: 'Procurement intelligence', status: 'Designing', live: false },
  { name: 'InvoAIce', desc: 'AP automation', status: 'Live in production', live: true },
  { name: 'ExpenseAI', desc: 'Expense management', status: 'On the roadmap', live: false },
  { name: 'TaxAI', desc: 'VAT & tax compliance', status: 'On the roadmap', live: false },
]

const platformO2C = [
  { name: 'ReceivAI', desc: 'AR automation', status: 'In active build', live: false },
  { name: 'CovenAI', desc: 'Contract lifecycle', status: 'Designing', live: false },
  { name: 'TreasuryAI', desc: 'Cash & treasury', status: 'On the roadmap', live: false },
  { name: 'ReconcileAI', desc: 'Close & reconciliation', status: 'On the roadmap', live: false },
]

export default function Products() {
  useEffect(() => {
    const els = document.querySelectorAll('.card, .agent-card, .platform-card, .insight-card, .roadmap-card')
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
        title="InvoAIce.io — AI-Native AP Automation Platform"
        path="/products"
        description="InvoAIce.io is an AI-native AP automation platform built around an 8-agent swarm pipeline. Integrates with SAP, Oracle Fusion, JD Edwards, NetSuite, D365, QuickBooks, Xero. Up to 90% STP, 4-week go-live. Our aspiration is the full P2P + O2C cycle."
        keywords="InvoAIce, AI AP automation, AI accounts payable software, AP automation platform, AP automation SAP, AP automation Oracle Fusion, AP automation JD Edwards, AP automation NetSuite, AP automation D365, AP automation QuickBooks, 8-agent AP pipeline, three-way match AI, invoice OCR AI"
      />
      <JsonLd schema={invoaiceSchema} />
      <JsonLd schema={breadcrumbSchema} />

      {/* HERO — InvoAIce-led, aspiration framing */}
      <section className="page-hero">
        <div className="page-hero-blob blob-hero-1" />
        <div className="page-hero-blob blob-hero-2" />
        <div className="container">
          <div className="page-hero-content">
            <div className="label">Our Products</div>
            <h1>Our flagship — <span className="gradient-text">InvoAIce.io</span> —<br />is in production.</h1>
            <p style={{ maxWidth: '660px', margin: '0 auto', fontSize: '1.075rem' }}>
              Ciyahi's aspiration is to cover the full Procure-to-Pay and Order-to-Cash cycle with finance-native AI agents. <strong>Today, InvoAIce ships</strong> — an AI-native AP automation platform integrated with SAP, Oracle, NetSuite, D365, and QuickBooks. The rest of our portfolio is sequenced on the roadmap.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* INVOAICE SPOTLIGHT — centerpiece, immediately after hero */}
          <div className="product-spot" style={{ marginBottom: '5rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ flex: 1, minWidth: '280px' }}>
                <div className="prod-badge">🚀 In Production · Live Now</div>
                <h2 style={{ marginTop: '.75rem', marginBottom: '.625rem' }}><span className="gradient-text">InvoAIce.io</span></h2>
                <p style={{ maxWidth: '600px', fontSize: '1.0625rem', marginBottom: 0 }}>
                  An AI-native Accounts Payable platform that turns invoice chaos into clean ERP posts. Eight specialist agents working as one autonomous pipeline. Sits alongside your ERP — no rip-and-replace, no 12-month IT project.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '.875rem', flexShrink: 0, alignSelf: 'flex-end', flexWrap: 'wrap' }}>
                <a href="https://www.invoaice.io" target="_blank" rel="noreferrer" className="btn btn-primary">Visit InvoAIce.io →</a>
                <Link to="/contact?dp=1" className="btn btn-secondary">Apply for Design Partner Program</Link>
              </div>
            </div>

            {/* Hero stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', margin: '1.5rem 0', padding: '1.5rem', background: 'rgba(255,255,255,.7)', borderRadius: '12px', border: '1px solid rgba(91,33,182,.1)' }}>
              {invoaiceStats.map(s => (
                <div key={s.label} style={{ textAlign: 'center', padding: '.5rem' }}>
                  <div style={{ fontSize: '1.625rem', fontWeight: 800, background: 'linear-gradient(135deg,#5b21b6,#0284c7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.1, marginBottom: '.3rem' }}>{s.value}</div>
                  <div style={{ fontSize: '.8rem', color: '#64748b', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* ERP integrations — proof of readiness */}
            <div style={{ padding: '1.25rem 1.5rem', background: 'rgba(91,33,182,.04)', borderRadius: '10px', border: '1px solid rgba(91,33,182,.12)', marginBottom: '1rem' }}>
              <div style={{ fontSize: '.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: '#5b21b6', marginBottom: '.625rem' }}>Posts cleanly into</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
                <span style={{ fontSize: '.7rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginRight: '.25rem', alignSelf: 'center' }}>Enterprise:</span>
                {erpEnterprise.map(e => (
                  <span key={e} className="tech-pill" style={{ fontSize: '.8125rem' }}>{e}</span>
                ))}
                <span style={{ fontSize: '.7rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', margin: '0 .25rem', alignSelf: 'center' }}>· SMB:</span>
                {erpSMB.map(e => (
                  <span key={e} className="tech-pill" style={{ fontSize: '.8125rem' }}>{e}</span>
                ))}
              </div>
            </div>

            {/* ROI teaser — link to calculator on invoaice.io */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', padding: '1rem 1.5rem', background: 'rgba(91,33,182,.04)', borderRadius: '10px', border: '1px solid rgba(91,33,182,.12)' }}>
              <div style={{ fontSize: '.9375rem', color: 'var(--ts)' }}>
                At 2,000 invoices/month, modeled annual saving is <strong style={{ color: '#5b21b6' }}>~$109K</strong> versus a legacy AP stack.
              </div>
              <a href="https://www.invoaice.io/#calculator" target="_blank" rel="noreferrer" style={{ fontSize: '.875rem', fontWeight: 600, color: 'var(--violet)', textDecoration: 'none' }}>
                Run your own numbers →
              </a>
            </div>
          </div>

          {/* INSIDE INVOAICE — 8-agent swarm */}
          <div style={{ marginBottom: '5rem' }}>
            <div className="sec-head">
              <div className="label">Inside InvoAIce</div>
              <h2><span className="gradient-text">Eight specialist agents.</span> One autonomous AP pipeline.</h2>
              <p>InvoAIce isn't a workflow tool with AI bolted on. Every invoice flows through a coordinated swarm of small, specialist agents — each purpose-built for one task in the AP cycle. The result: up to 90% touchless processing on day one, with full audit trail.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {agents.map(a => (
                <div key={a.title} className="card agent-card" style={{ padding: '1.25rem 1.25rem 1.375rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg,rgba(91,33,182,.08),rgba(124,58,237,.12))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '.75rem' }}>
                    <a.Icon size={22} strokeWidth={1.7} style={{ color: '#5b21b6' }} />
                  </div>
                  <strong style={{ display: 'block', color: '#5b21b6', marginBottom: '.375rem', fontSize: '.95rem' }}>{a.title}</strong>
                  <span style={{ fontSize: '.825rem', color: 'var(--ts)', lineHeight: 1.55, display: 'block' }}>{a.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* OUR ASPIRATION — full P2P + O2C cycle, InvoAIce anchored, rest clearly future */}
          <div style={{ marginBottom: '5rem' }}>
            <div className="sec-head">
              <div className="label">Our Aspiration</div>
              <h2>The full finance cycle — <span className="gradient-text">shipped one product at a time.</span></h2>
              <p>One data model, one set of ERP connectors, eight purpose-built finance products. <strong>InvoAIce is what ships today, in production.</strong> The rest is our roadmap — explicit about where we are now, honest about where we're headed.</p>
            </div>

            {/* P2P track */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#5b21b6', background: 'rgba(91,33,182,.07)', padding: '.25rem .75rem', borderRadius: '6px' }}>P2P · Procure-to-Pay</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(91,33,182,.15)' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '.75rem' }}>
                {platformP2P.map(p => (
                  <div key={p.name} className="platform-card" style={{ position: 'relative', background: '#fff', border: p.live ? '1px solid rgba(16,185,129,.4)' : '1px solid var(--b)', borderRadius: 'var(--rmd)', padding: '1rem 1.125rem', overflow: 'hidden', boxShadow: p.live ? '0 4px 16px rgba(16,185,129,.15)' : 'none', opacity: p.live ? 1 : 0.85 }}>
                    {p.live && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#10b981' }} />}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '.5rem' }}>
                      <strong style={{ fontSize: '.95rem', color: p.live ? '#059669' : '#1e2d3d' }}>{p.name}</strong>
                      <span style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: p.live ? '#059669' : '#94a3b8', background: p.live ? 'rgba(16,185,129,.1)' : 'rgba(148,163,184,.1)', padding: '.15rem .5rem', borderRadius: '4px', whiteSpace: 'nowrap' }}>{p.live ? '✓ ' : ''}{p.status}</span>
                    </div>
                    <span style={{ fontSize: '.8125rem', color: 'var(--ts)', marginTop: '.25rem', display: 'block' }}>{p.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* O2C track */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#1d4ed8', background: 'rgba(37,99,235,.07)', padding: '.25rem .75rem', borderRadius: '6px' }}>O2C · Order-to-Cash</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(37,99,235,.15)' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '.75rem' }}>
                {platformO2C.map(p => (
                  <div key={p.name} className="platform-card" style={{ position: 'relative', background: '#fff', border: '1px solid var(--b)', borderRadius: 'var(--rmd)', padding: '1rem 1.125rem', overflow: 'hidden', opacity: 0.85 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '.5rem' }}>
                      <strong style={{ fontSize: '.95rem', color: '#1e2d3d' }}>{p.name}</strong>
                      <span style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#94a3b8', background: 'rgba(148,163,184,.1)', padding: '.15rem .5rem', borderRadius: '4px', whiteSpace: 'nowrap' }}>{p.status}</span>
                    </div>
                    <span style={{ fontSize: '.8125rem', color: 'var(--ts)', marginTop: '.25rem', display: 'block' }}>{p.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '2rem', padding: '1rem 1.5rem', background: 'rgba(91,33,182,.04)', borderLeft: '3px solid #7c3aed', borderRadius: '0 8px 8px 0', maxWidth: '720px', margin: '2rem auto 0' }}>
              <p style={{ fontSize: '.875rem', color: '#475569', margin: 0, lineHeight: 1.6 }}>
                <strong>None of these are required to get value from InvoAIce.</strong> They're future expansion when you want it — and each one extends the same ERP connectors and data model InvoAIce already deploys.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-banner">
            <h2>Stop paying $25 to process a $50 invoice.</h2>
            <p>Join the InvoAIce Design Partner Program. 60 days completely free. Five spots only. Founder-led pilot, locked-in pricing, and a working AP automation system in 4 weeks. We get a logo, a case study, and reference calls.</p>
            <div className="cta-actions">
              <Link to="/contact?dp=1" className="btn btn-primary">Apply for Design Partner Program →</Link>
              <a href="https://www.invoaice.io" target="_blank" rel="noreferrer" className="btn btn-secondary">Visit InvoAIce.io</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
