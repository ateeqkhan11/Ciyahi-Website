import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedCounter from '../components/AnimatedCounter'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'

// ── Schema.org Organization — for Google Knowledge Graph & rich results ────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ciyahi Limited',
  alternateName: 'Ciyahi',
  url: 'https://ciyahi.com',
  logo: 'https://ciyahi.com/og-image.png',
  description: "Ciyahi is a finance automation company building AI-native products for the CFO's office. Our flagship product, InvoAIce.io, is an AI-native AP automation platform.",
  email: 'info@ciyahi.com',
  foundingDate: '2026',
  founder: [
    { '@type': 'Person', name: 'Iqbal Shaikh' },
    { '@type': 'Person', name: 'Ateequeullah Khan' },
  ],
  address: [
    { '@type': 'PostalAddress', addressCountry: 'US', addressRegion: 'Delaware' },
    { '@type': 'PostalAddress', addressCountry: 'GB' },
  ],
  sameAs: [
    'https://www.invoaice.io',
    'https://www.linkedin.com/company/ciyahi-limited',
  ],
  knowsAbout: [
    'AP Automation',
    'AI Finance Automation',
    'Accounts Payable Automation',
    'Procure-to-Pay',
    'Order-to-Cash',
    'Enterprise ERP Integration',
    'Finance AI Agents',
    'Invoice Automation',
  ],
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'European Union' },
  ],
}

// ── Schema.org WebSite — helps Google understand the site as a whole ──────
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ciyahi',
  url: 'https://ciyahi.com',
  description: "AI Finance Automation — InvoAIce.io is live today. Aspiring to cover the full P2P + O2C cycle.",
  publisher: {
    '@type': 'Organization',
    name: 'Ciyahi Limited',
  },
}

// ── Stats: InvoAIce performance — make the live product feel ready ─────────
const stats = [
  { value: 'Up to 90', suffix: '%', label: 'Straight-through processing', numeric: false },
  { value: '~14', suffix: 's', label: 'Avg invoice processing time', numeric: false },
  { value: '4', suffix: ' wks', label: 'ERP go-live — no IT project', numeric: true },
  { value: 'Up to 43', suffix: '%', label: 'TCO reduction vs legacy AP', numeric: false },
]

// ── The two cycles: educate on P2P and O2C, but only InvoAIce is "Live" ────
const cycles = [
  {
    eyebrow: 'P2P · Procure-to-Pay',
    headline: 'The Spend Side',
    color: '#5b21b6',
    bg: 'rgba(91,33,182,.07)',
    border: 'rgba(91,33,182,.18)',
    pitch: 'From the first purchase requisition to the moment a vendor gets paid. Most of it still runs on email, spreadsheets, and ERP screens — costing roughly $25 per invoice when done manually.',
    stages: [
      { stage: 'Procurement', detail: 'PR · Approval · PO · Goods receipt', product: null },
      { stage: 'Invoice Processing', detail: 'Capture · 3-way match · Approve · Pay', product: { name: 'InvoAIce', status: 'Live now', live: true } },
      { stage: 'Compliance', detail: 'Expense management · VAT / Tax', product: { name: 'On the roadmap', status: '', live: false, faded: true } },
    ],
  },
  {
    eyebrow: 'O2C · Order-to-Cash',
    headline: 'The Revenue Side',
    color: '#1d4ed8',
    bg: 'rgba(37,99,235,.07)',
    border: 'rgba(37,99,235,.18)',
    pitch: "From the first customer order to the moment cash hits the bank. AR teams chase payments manually, DSO creeps to 45+ days, and CFOs can't see real cash until month-end.",
    stages: [
      { stage: 'Revenue Ops', detail: 'Order · Credit · Fulfilment · AR invoice', product: null },
      { stage: 'Collections', detail: 'AR tracking · Cash application · Deductions', product: { name: 'On the roadmap', status: '', live: false, faded: true } },
      { stage: 'Close & Compliance', detail: 'Contracts · Treasury · Reconciliation', product: { name: 'On the roadmap', status: '', live: false, faded: true } },
    ],
  },
]

// ── InvoAIce's 8-agent swarm — concrete proof the product is real ──────────
const agents = [
  { icon: '📄', title: 'DocIntel', desc: 'Captures from email, portals, EDI, and scans.' },
  { icon: '🔬', title: 'OCR', desc: 'Extracts header, line, and tax data with high accuracy.' },
  { icon: '🛡️', title: 'Fraud', desc: '14 fraud signals on every invoice, including BEC.' },
  { icon: '✅', title: 'Validation', desc: '15+ rule-based and ML checks before posting.' },
  { icon: '🔗', title: 'Matching', desc: '3-way PO/GRN match with configurable tolerance.' },
  { icon: '👤', title: 'Approval', desc: 'Auto-routes by amount, role, vendor — with SLA.' },
  { icon: '🔌', title: 'ERP', desc: 'Posts cleanly into SAP, Oracle, NetSuite, D365.' },
  { icon: '🔔', title: 'Notify', desc: 'Email, vendor status, and zero-gap audit trail.' },
]

// ── Customer journey: getting InvoAIce live ────────────────────────────────
const journey = [
  {
    num: '01',
    title: 'Discovery',
    detail: '~30 min · No commitment',
    body: 'A 30-minute strategy call with a founder. We map your AP workflow, identify the highest-ROI process to automate first, and tell you honestly whether InvoAIce is a fit.',
  },
  {
    num: '02',
    title: 'Pilot',
    detail: '60 days · Completely free',
    body: 'Join the InvoAIce Design Partner Program. We connect a sandbox to your real ERP and run real invoices through the eight-agent pipeline. You see live results before you sign anything.',
  },
  {
    num: '03',
    title: 'Production',
    detail: '4 weeks · Live ERP go-live',
    body: 'The pilot becomes production. You sign at locked-in design-partner pricing. In return, we get a logo, a case study, and 2–3 reference calls.',
  },
  {
    num: '04',
    title: 'Grow',
    detail: 'On-going · Built to scale',
    body: 'InvoAIce is built to handle volume — seasonal spikes, multi-entity recharges, multi-currency. As Ciyahi ships more finance products, they extend the same connectors and data model you already deployed.',
  },
]

// ── Why Ciyahi: three pillars, sharpened to avoid "incomplete platform" feel ─
const whys = [
  { icon: '🧠', title: 'Finance-Native AI', desc: 'Purpose-built agents trained on AP, AR, and procurement workflows — not generic LLMs adapted for finance.' },
  { icon: '🏗️', title: 'Built to Compound', desc: 'Shared ERP connectors. Shared data model. Today that powers InvoAIce; tomorrow it lets us add finance capabilities without a second integration project.' },
  { icon: '🔌', title: 'ERP Augmentation', desc: 'Sits alongside SAP, Oracle, NetSuite, and D365 — no rip-and-replace. Your ERP stays. We make it 10× smarter.' },
]

// ── What's Next: roadmap, clearly subordinate to today's product ───────────
const roadmap = [
  { name: 'ReceivAI', desc: 'AR automation', status: 'In active build', color: '#2563eb' },
  { name: 'CovenAI', desc: 'Contract lifecycle', status: 'Designing', color: '#4f46e5' },
  { name: 'ProcurAI', desc: 'Procurement intelligence', status: 'Designing', color: '#7c3aed' },
  { name: 'ExpenseAI · TaxAI · TreasuryAI · ReconcileAI', desc: 'Expense, compliance, treasury, close', status: 'On the roadmap', color: '#0891b2' },
]

const insights = [
  { tag: 'AP Automation', title: 'Why AI-Native AP Automation Is the Next Enterprise Frontier', date: 'April 2026', read: '6 min', bg: 'linear-gradient(135deg,#f5f3ff,#ede9fe)', emoji: '📄' },
  { tag: 'O2C', title: 'Why DSO Creep Is a Symptom — Not the Disease', date: 'April 2026', read: '7 min', bg: 'linear-gradient(135deg,#f0fdf4,#d1fae5)', emoji: '💸' },
  { tag: 'AI Strategy', title: 'Finance-Native AI vs Generic LLMs: Why the Difference Matters', date: 'March 2026', read: '5 min', bg: 'linear-gradient(135deg,#f0f9ff,#e0f2fe)', emoji: '🤖' },
]

export default function Home() {
  useEffect(() => {
    document.title = 'Ciyahi Limited — AI Finance Automation, Starting with InvoAIce'
    const els = document.querySelectorAll('.card, .insight-card, .agent-card, .journey-card, .cycle-card, .why-card, .roadmap-card')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            e.target.style.opacity = '1'
            e.target.style.transform = 'translateY(0)'
          }, Number(e.target.dataset.delay) || 0)
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' })
    requestAnimationFrame(() => {
      els.forEach((el, i) => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(18px)'
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
        path="/"
        description="AI AP automation for SMB, mid-market, and enterprise finance teams. Ciyahi's flagship product InvoAIce.io is in production — integrated with SAP, Oracle, NetSuite, D365, QuickBooks, Xero, and Sage. Up to 90% straight-through processing, 4-week ERP go-live. Aspiring to cover the full P2P + O2C cycle."
        keywords="AI finance automation, AP automation, accounts payable AI, invoice automation, InvoAIce, AI AP platform, P2P automation, SMB AP automation, mid-market AP automation, enterprise AP automation, finance AI agents, SAP AP automation, Oracle AP automation, NetSuite AP automation, QuickBooks AP automation, Xero AP automation, Sage AP automation, AI invoice processing, AP automation software, finance-native AI, CFO AI"
      />
      <JsonLd schema={organizationSchema} />
      <JsonLd schema={websiteSchema} />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-blob blob-1" />
        <div className="hero-blob blob-2" />
        <div className="hero-blob blob-3" />
        <div className="hero-divider" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge"><span className="pulse" />InvoAIce.io · In Production</div>
            <h1>AI for the CFO's office,<br /><span className="gradient-text">starting with AP.</span></h1>
            <p className="hero-sub">Ciyahi builds AI-native finance products for <strong>SMB, mid-market, and enterprise teams</strong>. <strong>Our aspiration is to cover the full Procure-to-Pay and Order-to-Cash cycle</strong> — and we're shipping it one product at a time. <strong>InvoAIce.io</strong>, our AP automation flagship, is live in production today, integrated with SAP, Oracle, NetSuite, D365, QuickBooks, Xero, and Sage. Connect your ERP, configure approvals, go live in 4 weeks.</p>
            <div className="hero-actions">
              <a href="https://www.invoaice.io" target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">Visit InvoAIce.io →</a>
              <Link to="/contact" className="btn btn-secondary btn-lg">Apply for Design Partner Program</Link>
            </div>
            <p className="hero-note" style={{ fontSize: '.825rem', color: 'var(--tm)', marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '.375rem' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
              60 days free · 5 design partner spots · Live in 4 weeks
            </p>
          </div>
        </div>
      </section>

      {/* ── INVOAICE PERFORMANCE STATS ── */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map(s => (
              <div key={s.label}>
                <div className="stat-val">
                  {s.numeric ? <AnimatedCounter value={s.value} suffix={s.suffix} /> : `${s.value}${s.suffix}`}
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHAT IS FINANCE AUTOMATION? ── */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <div className="label">What is Finance Automation?</div>
            <h2>Two cycles run the entire <span className="gradient-text">CFO's office.</span></h2>
            <p>Every dollar a business spends or earns flows through one of two cycles. They're full of repetitive, manual, error-prone work — exactly the kind of work AI is built for. <strong>Our aspiration is to cover both cycles end to end.</strong> Today, <strong>InvoAIce</strong> ships — automating the AP slice in production; the rest is on the roadmap.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '1.5rem' }}>
            {cycles.map(c => (
              <div key={c.eyebrow} className="cycle-card" style={{ background: '#fff', border: `1px solid ${c.border}`, borderRadius: 'var(--rlg)', padding: '2rem 2rem 1.75rem', boxShadow: '0 2px 12px rgba(15,23,42,.04)' }}>
                <div style={{ display: 'inline-block', fontSize: '.7rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: c.color, background: c.bg, padding: '.25rem .75rem', borderRadius: '6px', marginBottom: '.75rem' }}>{c.eyebrow}</div>
                <h3 style={{ fontSize: '1.375rem', marginBottom: '.625rem', color: '#1e2d3d' }}>{c.headline}</h3>
                <p style={{ fontSize: '.9375rem', color: 'var(--ts)', marginBottom: '1.5rem' }}>{c.pitch}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.625rem' }}>
                  {c.stages.map((s, i) => {
                    const isLive = s.product?.live
                    return (
                      <div key={s.stage} style={{ display: 'flex', alignItems: 'flex-start', gap: '.875rem', padding: '.875rem 1rem', background: isLive ? c.bg : '#f8f8fd', borderRadius: '10px', border: `1px solid ${isLive ? c.border : 'var(--b)'}` }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: c.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.7rem', fontWeight: 800, flexShrink: 0, marginTop: '.125rem' }}>{String.fromCharCode(65 + i)}</div>
                        <div style={{ flex: 1 }}>
                          <strong style={{ fontSize: '.9rem', color: '#1e2d3d', display: 'block' }}>{s.stage}</strong>
                          <span style={{ fontSize: '.825rem', color: 'var(--tm)' }}>{s.detail}</span>
                          {s.product && (
                            <div style={{ marginTop: '.5rem', display: 'inline-flex', alignItems: 'center', gap: '.375rem', fontSize: '.75rem', fontWeight: 700, color: isLive ? '#059669' : '#94a3b8', background: isLive ? 'rgba(16,185,129,.1)' : 'transparent', border: `1px solid ${isLive ? 'rgba(16,185,129,.25)' : 'rgba(148,163,184,.3)'}`, padding: '.2rem .625rem', borderRadius: '20px', opacity: s.product.faded ? 0.7 : 1 }}>
                              {isLive ? '✓ ' : ''}{s.product.name}{s.product.status ? ` · ${s.product.status}` : ''}
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link to="/products" className="btn btn-outline">See the full roadmap →</Link>
          </div>
        </div>
      </section>

      {/* ── INVOAICE'S 8-AGENT PIPELINE ── */}
      <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--b)', borderBottom: '1px solid var(--b)' }}>
        <div className="container">
          <div className="sec-head">
            <div className="label">Inside InvoAIce</div>
            <h2><span className="gradient-text">Eight specialist agents.</span> One autonomous AP pipeline.</h2>
            <p>InvoAIce isn't a workflow tool with AI bolted on. Every invoice flows through a coordinated swarm of small, specialist agents — each purpose-built for one task. The result: up to 90% touchless processing on day one, with full audit trail.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {agents.map(a => (
              <div key={a.title} className="card agent-card" style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>{a.icon}</div>
                <strong style={{ display: 'block', color: '#5b21b6', marginBottom: '.375rem', fontSize: '.95rem' }}>{a.title}</strong>
                <span style={{ fontSize: '.825rem', color: 'var(--ts)', lineHeight: 1.55, display: 'block' }}>{a.desc}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <a href="https://www.invoaice.io" target="_blank" rel="noreferrer" className="btn btn-outline">See InvoAIce in detail →</a>
          </div>
        </div>
      </section>

      {/* ── CUSTOMER JOURNEY ── */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <div className="label">Customer Journey</div>
            <h2>What working with Ciyahi <span className="gradient-text">actually looks like.</span></h2>
            <p>No 12-month IT projects. No vague consulting deliverables. A clear four-step path from first call to running InvoAIce in production — and a foundation that grows with you.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {journey.map(j => (
              <div key={j.num} className="journey-card card" style={{ padding: '1.75rem 1.5rem', position: 'relative' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, background: 'linear-gradient(135deg,#5b21b6,#0284c7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '.5rem' }}>{j.num}</div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '.25rem' }}>{j.title}</h3>
                <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#7c3aed', marginBottom: '.75rem' }}>{j.detail}</div>
                <p style={{ fontSize: '.875rem', lineHeight: 1.6, color: 'var(--ts)', margin: 0 }}>{j.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CIYAHI ── */}
      <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--b)', borderBottom: '1px solid var(--b)' }}>
        <div className="container">
          <div className="sec-head text-center" style={{ maxWidth: '600px', margin: '0 auto 3.75rem' }}>
            <div className="label">Why Ciyahi</div>
            <h2>Three things make InvoAIce different.</h2>
          </div>
          <div className="grid-3">
            {whys.map(w => (
              <div key={w.title} className="card why-card">
                <div className="card-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem', padding: '1.25rem 1.75rem', background: 'rgba(91,33,182,.04)', borderLeft: '3px solid #7c3aed', borderRadius: '0 8px 8px 0', maxWidth: '720px', margin: '2.5rem auto 0' }}>
            <p style={{ fontSize: '.9375rem', fontStyle: 'italic', color: '#475569', margin: 0 }}>
              "The CFO's office is the last enterprise function to be transformed by AI. We're here to change that — one shipped product at a time."
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT'S NEXT — subordinate to today's product ── */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <div className="label">Our Aspiration</div>
            <h2>The full finance cycle — <span className="gradient-text">shipped one product at a time.</span></h2>
            <p>InvoAIce is the flagship today, in production with real customers. The rest of our roadmap covers the rest of the P2P and O2C cycle — each new product extending the same ERP connectors and data model InvoAIce already deploys. None of it is required to get value from InvoAIce; it's future expansion when you want it.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {roadmap.map(r => (
              <div key={r.name} className="roadmap-card" style={{ position: 'relative', background: '#fff', border: '1px solid var(--b)', borderRadius: 'var(--rmd)', padding: '1.25rem 1.25rem', overflow: 'hidden', opacity: 0.95 }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: r.color, opacity: 0.5 }} />
                <strong style={{ display: 'block', fontSize: '.95rem', color: '#1e2d3d', marginBottom: '.25rem' }}>{r.name}</strong>
                <span style={{ fontSize: '.8125rem', color: 'var(--ts)', display: 'block', marginBottom: '.625rem' }}>{r.desc}</span>
                <span style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#94a3b8' }}>{r.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIGHTS ── */}
      <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--b)', borderBottom: '1px solid var(--b)' }}>
        <div className="container">
          <div className="sec-head" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div><div className="label">Insights</div><h2>From the Ciyahi team.</h2></div>
          </div>
          <div className="grid-3">
            {insights.map(ins => (
              <div key={ins.title} className="insight-card">
                <div className="insight-img" style={{ background: ins.bg }}>{ins.emoji}</div>
                <div className="insight-body">
                  <span className="insight-tag">{ins.tag}</span>
                  <h3>{ins.title}</h3>
                  <p style={{ fontSize: '.9rem' }}>Practical perspectives on enterprise AI, finance automation, and how to actually ship it.</p>
                  <div className="insight-meta">{ins.date} &bull; {ins.read} read</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="cta-banner">
            <h2>Stop paying $25 to process a $50 invoice.</h2>
            <p>Join the InvoAIce Design Partner Program. 60 days completely free. Five spots only. Founder-led pilot, locked-in pricing, and a working AP automation system in 4 weeks. We get a logo, a case study, and reference calls.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Apply for Design Partner Program →</Link>
              <a href="https://www.invoaice.io" target="_blank" rel="noreferrer" className="btn btn-secondary">Visit InvoAIce.io</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
