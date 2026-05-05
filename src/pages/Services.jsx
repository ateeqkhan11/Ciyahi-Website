import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FileText, Bot, Link2, Compass, Globe, Users, Cpu, Award } from 'lucide-react'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import { buildBreadcrumb } from '../seo/schema'

const breadcrumbSchema = buildBreadcrumb([
  { name: 'Services', path: '/services' },
])

const services = [
  {
    Icon: FileText,
    title: 'AP Automation',
    tag: 'Core Expertise',
    tagColor: '#5b21b6',
    tagBg: 'rgba(91,33,182,.08)',
    desc: "Our deepest area of expertise. Before Ciyahi, our founding team delivered 20+ AP automation implementations across 25+ countries and won an industry award for 'Best Designed AP Automation Solution & Implementation.' That same team implemented Basware, Kofax, Oracle WebCenter, Canon, ABBYY, and Document Management systems — and built InvoAIce.io because we knew we could do it better.",
    outcomes: [
      'End-to-end invoice lifecycle automation — ingestion, validation, approval, posting',
      'AI-powered data extraction with 88%+ accuracy across all invoice formats (PDF, XML, image, scan)',
      'Platform-agnostic: Basware, Kofax, Oracle WebCenter, Canon, ABBYY, and InvoAIce.io',
      'ERP integration (Oracle, SAP, NetSuite, QuickBooks, Xero) with automatic GL coding',
      'Three-way PO matching, duplicate detection, and VAT/tax validation built into the core pipeline',
      'CFO-ready reporting: cycle time, aging, approval bottlenecks, cash flow forecasting',
      'Typical go-live in 4–8 weeks. Measurable ROI within 90 days.',
    ],
    kpis: ['80% less processing time', '88%+ extraction accuracy', '4–8 week implementation'],
    emoji: '📄',
  },
  {
    Icon: Bot,
    title: 'AI for Finance Operations',
    tag: 'Adjacent to Product',
    tagColor: '#0284c7',
    tagBg: 'rgba(2,132,199,.08)',
    desc: 'Beyond AP, the CFO\'s office runs on contracts, remittances, expense claims, and procurement docs that all need automation. We build finance-native AI — agents and LLM-backed workflows — for the gaps InvoAIce does not yet cover.',
    outcomes: [
      'AI agent design and deployment for finance, procurement, and AR workflows',
      'LLM integration into existing finance systems and data pipelines',
      'Intelligent document processing beyond invoices: contracts, purchase orders, remittances',
      'Process mining and automation opportunity identification across the finance function',
      'Human-in-the-loop escalation design for high-risk financial decisions',
    ],
    kpis: ['Finance-native', 'Faster than RPA', 'Auditable AI decisions'],
    emoji: '🤖',
  },
  {
    Icon: Link2,
    title: 'Finance ERP Integration',
    tag: 'Enterprise Capability',
    tagColor: '#0284c7',
    tagBg: 'rgba(2,132,199,.08)',
    desc: "InvoAIce posts cleanly into SAP, Oracle, NetSuite, and D365 out of the box. When the rest of your finance stack needs help — legacy ESBs, point-to-point integrations, brittle file-based feeds — we modernise the connectivity layer your finance systems depend on.",
    outcomes: [
      'Finance integration architecture assessment: current state mapping, gap analysis, roadmap',
      'Migration from legacy ESB (IBM, TIBCO, Oracle SOA) to modern middleware',
      'MuleSoft, Boomi, Azure Integration Services, AWS EventBridge implementation for finance flows',
      'API design and governance for AP, AR, GL, and treasury integrations',
      'Real-time event streaming and async messaging for finance operations',
      'Integration monitoring, alerting, and operational runbooks',
    ],
    kpis: ['Reduced integration debt', 'Cloud-native patterns', 'Full operational handover'],
    emoji: '🔗',
  },
  {
    Icon: Compass,
    title: 'Finance AI Strategy & Advisory',
    tag: 'Advisory',
    tagColor: '#5b21b6',
    tagBg: 'rgba(91,33,182,.08)',
    desc: 'Most CFOs know they need AI in their finance function. Few know where to start, what to buy, what to build, and how to sequence it. We help you draw the map — grounded in 15+ years of enterprise finance technology delivery.',
    outcomes: [
      'Current-state finance technology and process assessment',
      'AI-for-finance roadmap with sequenced, outcome-scoped milestones',
      'Build vs. buy analysis across AP, AR, treasury, close, and procurement',
      'CFO and Controller advisory on AI-in-finance decisions and risk',
      'Vendor evaluation: AP automation, AR automation, expense, treasury, close',
      'Board and investor-ready finance technology narrative',
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

// Cloud / integration / AI platforms we work alongside finance products
const techStack = [
  { icon: '☁️', name: 'Microsoft Azure' },
  { icon: '🟠', name: 'AWS' },
  { icon: '🔗', name: 'MuleSoft' },
  { icon: '🔵', name: 'Boomi' },
  { icon: '⚡', name: 'OpenAI' },
  { icon: '🟡', name: 'Oracle' },
  { icon: '🟢', name: 'SAP' },
  { icon: '📊', name: 'NetSuite' },
  { icon: '🔷', name: 'Salesforce' },
  { icon: '🛠️', name: 'ServiceNow' },
  { icon: '🐍', name: 'Python / LangChain' },
]

// AP automation platforms the founding team has implemented in prior engagements
const apStack = [
  { icon: '📄', name: 'Basware' },
  { icon: '🔍', name: 'Kofax' },
  { icon: '🗂️', name: 'Oracle WebCenter' },
  { icon: '🖨️', name: 'Canon' },
  { icon: '🧠', name: 'ABBYY' },
  { icon: '🗄️', name: 'Document Management' },
  { icon: '🚀', name: 'InvoAIce.io' },
]

// Founding team expertise highlights
const expertise = [
  { icon: '📄', text: '15+ Years AP Automation Experience' },
  { icon: '🔗', text: 'Enterprise Integration Specialists' },
  { icon: '🤖', text: 'AI Agent Deployment' },
  { icon: '🌍', text: 'US & UK Market Presence' },
  { icon: '🏗️', text: 'Founder-Led Every Engagement' },
]

export default function Services() {
  useEffect(() => { document.title = 'Services — Ciyahi Limited' }, [])

  return (
    <>
      <SEO
        title="Finance Automation Services"
        path="/services"
        description="Finance automation services from Ciyahi: AP automation implementation, AI for finance operations, finance ERP integration, and finance AI strategy. Founder-led, outcome-priced. Surrounds our InvoAIce.io product."
        keywords="AP automation services, finance ERP integration, AP automation consulting, finance AI consulting, AP implementation services, MuleSoft finance integration, Boomi finance integration, AP automation implementation"
      />
      <JsonLd schema={breadcrumbSchema} />
      <section className="page-hero">
        <div className="page-hero-blob blob-hero-1" />
        <div className="page-hero-blob blob-hero-2" />
        <div className="container">
          <div className="page-hero-content">
            <div className="label">What We Do</div>
            <h1>Services that surround<br /><span className="gradient-text">our products.</span></h1>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.075rem' }}>
              Ciyahi is a finance automation company. Our flagship product, <strong>InvoAIce.io</strong>, is in production today. The services below sit alongside it — implementing AP automation cleanly, integrating finance ERPs, and helping CFOs plan their AI roadmap. Founder-led. Outcome-priced.
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
          {services.map((svc) => (
            <div key={svc.title} style={{ marginBottom: '3rem', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(15,23,42,.06)' }}>
              {/* Header */}
              <div style={{ padding: '2.5rem 2.5rem 2rem', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg,rgba(91,33,182,.1),rgba(2,132,199,.07))', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(91,33,182,.12)' }}>
                  <svc.Icon size={28} strokeWidth={1.6} style={{ color: '#5b21b6' }} />
                </div>
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

          {/* Other technologies we work with */}
          <div className="tech-strip" style={{ marginBottom: '4rem', borderRadius: 'var(--rlg)' }}>
            <div className="container">
              <p className="tech-strip-label">Other Technologies We Work With</p>
              <div className="tech-pills" style={{ marginBottom: '2rem' }}>
                {techStack.map(t => (
                  <span key={t.name} className="tech-pill">
                    <span className="tech-pill-icon">{t.icon}</span>
                    {t.name}
                  </span>
                ))}
              </div>
              <div style={{ height: '1px', background: 'var(--b)', margin: '0 auto 1.75rem', maxWidth: '600px' }} />
              <p className="tech-strip-label">AP Platforms — Founding Team Experience</p>
              <div className="tech-pills">
                {apStack.map(t => (
                  <span
                    key={t.name}
                    className="tech-pill"
                    style={{
                      borderColor: 'rgba(91,33,182,.2)',
                      color: t.name === 'InvoAIce.io' ? 'var(--violet)' : undefined,
                      fontWeight: t.name === 'InvoAIce.io' ? 600 : undefined,
                    }}
                  >
                    <span className="tech-pill-icon">{t.icon}</span>
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Founding team expertise strip */}
          <div className="exp-strip" style={{ marginBottom: '5rem', borderRadius: 'var(--rlg)' }}>
            <div className="container">
              <div className="exp-strip-inner">
                {expertise.map(e => (
                  <div key={e.text} className="exp-item">
                    <span className="exp-item-icon">{e.icon}</span>
                    <span>{e.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Methodology */}
          <div style={{ marginBottom: '5rem' }}>
            <div className="sec-head text-center" style={{ maxWidth: '540px', margin: '0 auto 3rem' }}>
              <div className="label">How We Work</div>
              <h2>Our Service Engagement Methodology</h2>
              <p>The four phases we run across every services engagement — assessment, design, delivery, embed. Adapted to your context, never templated. (For the path to using our products, see the <Link to="/" style={{ color: 'var(--violet)', fontWeight: 600 }}>Customer Journey</Link> on the homepage.)</p>
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
