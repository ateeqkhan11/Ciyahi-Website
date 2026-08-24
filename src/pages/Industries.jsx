import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Landmark, HeartPulse, Factory, ShoppingCart, Briefcase, Cog,
  Puzzle, Globe, Plug, Shield, Zap, Database, ShieldCheck,
} from 'lucide-react'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import { buildBreadcrumb } from '../seo/schema'

const breadcrumbSchema = buildBreadcrumb([{ name: 'Industries', path: '/industries' }])

const industries = [
  {
    Icon: Landmark,
    title: 'Financial Services',
    desc: 'Banks, insurers, and asset managers process high volumes of documents under heavy regulatory scrutiny. AI automation cuts processing time and cost while maintaining full audit trail and SOX compliance. InvoAIce ships today for AP; broader finance AI on the roadmap.',
    aiUse: 'AP automation · Document intelligence · Fraud detection · Regulatory reporting AI',
    tags: ['AP Automation', 'SOX-ready', 'Multi-entity', 'Fraud Detection'],
    color: 'linear-gradient(135deg,#f5f3ff,#ede9fe)',
    border: 'rgba(13, 117, 117,.15)',
    status: 'InvoAIce live',
    live: true,
  },
  {
    Icon: ShieldCheck,
    title: 'Insurance',
    desc: "Carriers, brokers, and MGAs run on documents — submissions, loss runs, claims files, policies. Ciyahi has hands-on delivery experience here: we've built LLM agents for insurance workflows including claims document processing, submission intake, and policy servicing. Plus AP automation for the back office.",
    aiUse: 'Claims document AI · Submission intake · Policy servicing agents · AP automation',
    tags: ['Claims AI', 'Submission Intake', 'Policy Servicing', 'Document Extraction'],
    color: 'linear-gradient(135deg,#eff6ff,#dbeafe)',
    border: 'rgba(37,99,235,.15)',
    status: 'Agents delivered',
    live: true,
    link: { to: '/document-intelligence', label: 'See the use case →' },
  },
  {
    Icon: HeartPulse,
    title: 'Healthcare',
    desc: 'Hospitals, payers, and MedTech companies deal with complex document workflows, prior authorisations, clinical data extraction, and procurement. AI unlocks speed and accuracy across the entire document lifecycle.',
    aiUse: 'AP automation · Clinical document extraction · Prior auth AI · Procurement intelligence',
    tags: ['AP Automation', 'Document AI', 'Clinical NLP', 'Compliance'],
    color: 'linear-gradient(135deg,#f0fdf4,#dcfce7)',
    border: 'rgba(22,163,74,.15)',
    status: 'InvoAIce live',
    live: true,
  },
  {
    Icon: Factory,
    title: 'Manufacturing & Supply Chain',
    desc: 'Manufacturers run high-volume, multi-currency payables across global supplier bases. AI agents handle 3-way matching at scale, demand forecasting, quality inspection, and predictive maintenance — integrated into SAP and Oracle.',
    aiUse: 'AP automation · Demand forecasting · Quality inspection AI · Predictive maintenance',
    tags: ['3-way Match', 'Multi-currency', 'SAP/Oracle', 'Predictive ML'],
    color: 'linear-gradient(135deg,#fff7ed,#fed7aa)',
    border: 'rgba(234,88,12,.15)',
    status: 'InvoAIce live',
    live: true,
  },
  {
    Icon: ShoppingCart,
    title: 'Retail & E-Commerce',
    desc: 'Retailers manage thousands of vendors, marketplace settlements, and seasonal volume spikes. AI handles invoice processing at any scale, customer sentiment analysis, inventory demand signals, and personalisation engines.',
    aiUse: 'AP automation · Demand sensing · Sentiment analysis · Personalisation AI',
    tags: ['High-volume AP', 'Demand AI', 'Marketplace', 'Scalability'],
    color: 'linear-gradient(135deg,#fdf4ff,#fae8ff)',
    border: 'rgba(168,85,247,.15)',
    status: 'InvoAIce live',
    live: true,
  },
  {
    Icon: Briefcase,
    title: 'Professional Services',
    desc: 'Legal, accounting, and consulting firms deal with contract-heavy operations, project billing, and document-intensive workflows. AI agents automate contract analysis, time and billing extraction, and client document processing.',
    aiUse: 'Contract AI · Document extraction · AR automation · Knowledge management AI',
    tags: ['Contract AI', 'AR Automation', 'Document Intelligence', 'O2C'],
    color: 'linear-gradient(135deg,var(--paper-2),#e0f2fe)',
    border: 'rgba(2,132,199,.15)',
    status: 'Custom AI',
    live: false,
  },
  {
    Icon: Cog,
    title: 'Technology & SaaS',
    desc: 'Tech companies need AI to run their own operations and often want help building AI into their products. We help with both — internal AI automation (finance, ops, support) and building AI features or agent harnesses into SaaS products.',
    aiUse: 'Internal AI ops · AI product features · Agent harness development · RAG pipelines',
    tags: ['AI Product Build', 'Agent Harness', 'RAG', 'LLM Integration'],
    color: 'linear-gradient(135deg,#f0fdf4,#ccfbf1)',
    border: 'rgba(20,184,166,.15)',
    status: 'Custom AI',
    live: false,
  },
]

const capabilities = [
  { Icon: Puzzle, title: 'Configurable by design', desc: 'Every AI system we build is configurable to your domain — approval logic, data schemas, integration patterns, business rules. No generic templates.' },
  { Icon: Globe, title: 'Multi-currency & multi-entity', desc: 'Built for organisations operating across borders, with localised rules, multi-currency processing, and intercompany workflows from day one.' },
  { Icon: Plug, title: 'Integrates with your existing stack', desc: 'We connect to your ERP, CRM, data warehouse, and cloud platform. We augment your systems — no rip-and-replace, no parallel infrastructure.' },
  { Icon: Shield, title: 'Enterprise security & compliance', desc: 'Zero-gap audit trails, SOX-ready evidence packs, configurable data retention and residency. Security is designed in, not bolted on.' },
]

export default function Industries() {
  useEffect(() => {
    const els = document.querySelectorAll('.card, .industry-card')
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
        title="Industries We Serve"
        path="/industries"
        description="Ciyahi delivers enterprise AI across Financial Services, Insurance, Healthcare, Manufacturing, Retail, Professional Services, and Technology. AI implementation adapted to your industry's specific workflows, compliance load, and data environment."
        keywords="enterprise AI financial services, insurance claims AI, AI insurance agents, AI healthcare, AI manufacturing, AI retail, AI professional services, AI SaaS, industry AI implementation"
      />
      <JsonLd schema={breadcrumbSchema} />

      <section className="page-hero">
        <div className="page-hero-dots" />
        <div className="page-hero-blob blob-hero-1" />
        <div className="page-hero-blob blob-hero-2" />
        <div className="container">
          <div className="page-hero-content">
            <div className="label">Industries We Serve</div>
            <h1>AI Implementation<br /><span className="gradient-text">Across Any Vertical.</span></h1>
            <p style={{ maxWidth: '620px', margin: '0 auto', fontSize: '1.075rem' }}>
              The problems AI solves look different in manufacturing than in healthcare or financial services — different documents,
              different workflows, different compliance requirements. We adapt the AI to your industry, not the other way around.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--b)' }}>
        <div className="container">
          <div className="sec-head">
            <div className="label">By Industry</div>
            <h2>How Ciyahi adapts AI to <span className="gradient-text">your vertical.</span></h2>
            <p>
              Each industry below shows the AI use cases where Ciyahi has the deepest delivery experience.
              InvoAIce ships today for AP automation across all verticals. Custom AI implementations are available for any domain.
            </p>
          </div>
          <div className="grid-3">
            {industries.map(ind => (
              <div key={ind.title} className="card industry-card" style={{ background: ind.color, borderColor: ind.border, padding: '1.875rem 1.625rem 1.625rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '.75rem', marginBottom: '1.125rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,.75)', border: '1px solid rgba(0,0,0,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <ind.Icon size={26} strokeWidth={1.6} style={{ color: 'var(--accent)' }} />
                  </div>
                  <span style={{ fontSize: '.7rem', fontWeight: 700, color: ind.live ? '#059669' : 'var(--accent)', background: ind.live ? 'rgba(16,185,129,.12)' : 'rgba(255,255,255,.7)', border: `1px solid ${ind.live ? 'rgba(16,185,129,.25)' : 'rgba(0,0,0,.07)'}`, padding: '.2rem .625rem', borderRadius: '20px', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: '.3rem' }}>
                    {ind.live ? '✓ ' : ''}{ind.status}
                  </span>
                </div>
                <h3 style={{ marginBottom: '.5rem', fontSize: '1.125rem' }}>{ind.title}</h3>
                <div style={{ fontSize: '.75rem', fontWeight: 600, letterSpacing: '.05em', color: '#64748b', marginBottom: '.875rem', lineHeight: 1.5 }}>{ind.aiUse}</div>
                <p style={{ fontSize: '.875rem', marginBottom: '1.125rem', lineHeight: 1.65 }}>{ind.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
                  {ind.tags.map(t => (
                    <span key={t} style={{ fontSize: '.7rem', fontWeight: 600, padding: '.2rem .625rem', borderRadius: '20px', background: 'rgba(255,255,255,.75)', color: '#374151', border: '1px solid rgba(0,0,0,.07)' }}>{t}</span>
                  ))}
                </div>
                {ind.link && (
                  <Link to={ind.link.to} style={{ display: 'inline-block', marginTop: '1rem', fontSize: '.8375rem', fontWeight: 600, color: 'var(--accent)' }}>
                    {ind.link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head text-center" style={{ maxWidth: '600px', margin: '0 auto 4rem' }}>
            <div className="label">Why It Works Across Verticals</div>
            <h2>Four capabilities that make AI<br /><span className="gradient-text">land in any environment.</span></h2>
          </div>
          <div className="grid-4">
            {capabilities.map(a => (
              <div key={a.title} className="card">
                <div className="card-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <a.Icon size={28} strokeWidth={1.6} style={{ color: 'var(--accent)' }} />
                </div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: '7rem' }}>
        <div className="container">
          <div className="cta-banner">
            <h2>Don't see your industry?</h2>
            <p>AI's core value — automating repetitive, document-heavy, decision-heavy work — is universal. Tell us your situation and we'll tell you honestly whether we can help.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Schedule a Call →</Link>
              <Link to="/services" className="btn btn-secondary">See Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
