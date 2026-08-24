import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import {
  Layers, Bot, Target, Workflow,
  Globe, Users, Award, Calendar,
  CheckCircle2, Cpu, Network, Lightbulb,
  ScanSearch, ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import { buildBreadcrumb } from '../seo/schema'

const breadcrumbSchema = buildBreadcrumb([{ name: 'Services', path: '/services' }])

const services = [
  {
    Icon: Layers,
    num: '01',
    title: 'AI Implementation & Delivery',
    tag: 'Any Domain',
    tagColor: 'var(--accent)',
    tagBg: 'rgba(26, 154, 154,.1)',
    desc: "End-to-end design, build, and deployment of AI systems for the enterprise — across any domain or function. We take a business problem, select the right AI approach, architect the system, integrate it with your existing infrastructure, and deploy it to production. Not a proof-of-concept. Not a pilot that dies in the lab. A system that runs.",
    outcomes: [
      'AI system architecture and design — model selection, data pipeline, integration pattern',
      'Document intelligence and intelligent document processing (IDP) for any document type',
      'NLP pipelines: classification, extraction, summarisation, generation',
      'Computer vision systems: object detection, visual inspection, image classification',
      'Predictive analytics and ML models: demand forecasting, anomaly detection, risk scoring',
      'Retrieval-augmented generation (RAG) pipelines over enterprise knowledge bases',
      'Integration into existing ERP, CRM, data warehouse, and cloud platforms',
      'Production deployment, monitoring, and operational handover',
    ],
    kpis: ['Any domain', 'Production deployment', 'Integrated into your stack'],
    pills: ['Document Intelligence', 'NLP', 'Computer Vision', 'Predictive ML', 'RAG', 'Model Fine-tuning', 'Cloud Deployment'],
  },
  {
    Icon: Bot,
    num: '02',
    title: 'AI Agent & Harness Development',
    tag: 'Agentic AI',
    tagColor: 'var(--accent)',
    tagBg: 'rgba(26, 154, 154,.1)',
    desc: "We design and build multi-agent orchestration systems — AI harnesses — that automate complex, multi-step enterprise workflows. Where a single LLM call isn't enough, we build coordinated agent pipelines: specialist agents for each task, orchestration logic to route between them, tool-use to interact with external systems, and human-in-the-loop gates for decisions that need a person. InvoAIce's 8-agent pipeline is our own flagship example.",
    outcomes: [
      'Multi-agent architecture design: agent topology, orchestration pattern, failure handling',
      'LLM orchestration using LangGraph, CrewAI, AutoGen, or custom Python frameworks',
      'Tool-use design: web search, database queries, API calls, document reads, code execution',
      'Human-in-the-loop gates for high-stakes decisions requiring human approval',
      'Agent memory: short-term context, long-term knowledge stores, retrieval patterns',
      'Integration with enterprise systems — ERP, CRM, data platform, communication tools',
      'Monitoring, observability, and tracing for production agent systems',
      'Agent evaluation frameworks to measure accuracy, latency, and cost in production',
    ],
    kpis: ['Multi-agent systems', 'Production-grade', 'LLM orchestration'],
    pills: ['LangGraph', 'CrewAI', 'AutoGen', 'Tool Use', 'RAG', 'Memory', 'Human-in-the-Loop', 'Observability'],
  },
  {
    Icon: Target,
    num: '03',
    title: 'AI Strategy & Advisory',
    tag: 'Advisory',
    tagColor: 'var(--accent)',
    tagBg: 'rgba(26, 154, 154,.1)',
    desc: "Most enterprises know they need AI. Few know where it actually creates value versus where it's a distraction. We help leadership teams — CTO, CDO, CIO, CFO — cut through the noise: identify the highest-ROI AI use cases for their specific business, build the internal business case, evaluate vendors and models, and create a sequenced implementation roadmap grounded in delivery reality.",
    outcomes: [
      'AI readiness assessment: data, infrastructure, talent, governance gaps',
      'Use-case identification and prioritisation: where AI actually creates value in your business',
      'Business case development with ROI modelling for board and investor audiences',
      'Build vs. buy analysis: when to implement a vendor product vs. build custom AI',
      'Model and vendor evaluation: LLM selection, AI platform assessment, cost-performance trade-offs',
      'AI governance framework: data privacy, model risk, explainability, bias controls',
      'AI implementation roadmap with sequenced milestones and realistic timelines',
      'Board and investor-ready AI strategy narrative and technical due diligence preparation',
    ],
    kpis: ['Founder-led', 'No junior handoff', 'Outcome-scoped'],
    pills: ['Readiness Assessment', 'Use-case Prioritisation', 'Build vs Buy', 'ROI Modelling', 'Governance', 'Roadmap'],
  },
  {
    Icon: Workflow,
    num: '04',
    title: 'Process Automation with LLMs',
    tag: 'Proven in Finance & Insurance',
    tagColor: 'var(--live)',
    tagBg: 'rgba(13, 122, 79,.1)',
    desc: "Repetitive, document-heavy business processes are where LLM agents pay for themselves fastest — in any function. We've proven it twice: in finance, with InvoAIce, our AP automation product live in production; and in insurance, where we've built LLM agents for claims and policy workflows. The playbook transfers to any process that follows intake → extract → validate → decide → post.",
    outcomes: [
      'End-to-end process automation with LLM agents: intake, extraction, validation, decision, posting',
      'Finance automation: AP via InvoAIce.io — live ERP go-live in 4 weeks, 60-day free pilot',
      'Insurance workflows: claims document processing, submission intake, policy servicing agents',
      'ERP and core-system integration: SAP, Oracle Fusion, NetSuite, D365, QuickBooks, Xero, Sage',
      'Back-office automation: purchase requisitions, expense management, close processes',
      'Document-heavy workflows: contracts, compliance packs, onboarding files, audit evidence',
      'Legacy system replacement: Basware, Kofax, Oracle WebCenter, ABBYY to AI-native pipelines',
      'Process roadmap grounded in numbers: volumes, exception rates, and ROI before you build',
    ],
    kpis: ['InvoAIce live in production', 'Insurance agents delivered', 'Any workflow'],
    pills: ['InvoAIce.io', 'AP Automation', 'Insurance Claims AI', 'Document Workflows', 'ERP Integration', 'Human-in-the-Loop'],
  },
]

const methodology = [
  { num: '01', title: 'Assess', desc: 'We map your current state, identify the real problem (not just the stated one), and define measurable outcomes before any work begins.' },
  { num: '02', title: 'Design', desc: 'We architect the solution — AI system design, agent topology, integration patterns — with your team, not at them.' },
  { num: '03', title: 'Build', desc: 'We implement and deploy. Founder-led throughout. No handoffs to junior teams after the SOW is signed.' },
  { num: '04', title: 'Embed', desc: 'We train your people, document everything, and ensure the system runs without us. Outcomes, not dependency.' },
]

const techStack = [
  'OpenAI / GPT-4o', 'Anthropic Claude', 'Hugging Face', 'LangChain / LangGraph',
  'CrewAI / AutoGen', 'Python', 'Microsoft Azure', 'AWS', 'Google Cloud',
  'MuleSoft', 'Boomi', 'Azure Integration Services', 'SAP', 'Oracle', 'NetSuite', 'MS Dynamics 365',
]

const expertise = [
  { Icon: Users, text: '20+ Enterprise AI Implementations' },
  { Icon: Globe, text: '25+ Countries Delivered In' },
  { Icon: Award, text: 'Award-Winning AI Delivery' },
  { Icon: Calendar, text: '15+ Years Enterprise Tech Leadership' },
  { Icon: Target, text: 'Founder-Led Every Engagement' },
]

export default function Services() {
  useScrollReveal('.svc-block, .featured-svc, .method-step, .reveal-block')
  useEffect(() => { document.title = 'Services — Ciyahi Limited' }, [])

  return (
    <>
      <SEO
        title="Enterprise AI Services"
        path="/services"
        description="Ciyahi delivers four AI service lines for enterprise: AI implementation & delivery, AI agent & harness development, AI strategy & advisory, and LLM process automation. Founder-led. No junior handoff. See delivered work in our user stories."
        keywords="enterprise AI implementation, AI agent development, multi-agent AI, AI strategy advisory, LLM process automation, insurance claims AI, AI harness, LLM orchestration, AP automation consulting"
      />
      <JsonLd schema={breadcrumbSchema} />

      <section className="page-hero">
        <div className="page-hero-dots" />
        <div className="page-hero-blob blob-hero-1" />
        <div className="page-hero-blob blob-hero-2" />
        <div className="container">
          <div className="page-hero-content">
            <div className="label">What We Do</div>
            <h1>Four AI service lines.<br /><span className="gradient-text">One team that ships.</span></h1>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.075rem' }}>
              From identifying where AI creates value to running it in production. Founder-led. No junior handoff.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* Credibility bar */}
          <div style={{ marginBottom: '5rem', padding: '1.75rem 2rem', background: 'linear-gradient(135deg,rgba(13, 117, 117,.05),rgba(2,132,199,.04))', borderRadius: '16px', border: '1px solid rgba(13, 117, 117,.1)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              {expertise.map(c => (
                <div key={c.text} style={{ display: 'flex', alignItems: 'center', gap: '.625rem', fontSize: '.9rem', fontWeight: 500, color: '#374151', padding: '.5rem 1rem', background: '#fff', borderRadius: '100px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(15,23,42,.04)' }}>
                  <c.Icon size={16} strokeWidth={1.8} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  {c.text}
                </div>
              ))}
            </div>
          </div>

          {/* Promo — links out to the full delivered case study */}
          <Link to="/document-intelligence" className="promo-banner" style={{ textDecoration: 'none' }}>
            <div className="promo-banner-icon">
              <ScanSearch size={22} strokeWidth={1.8} />
            </div>
            <div className="promo-banner-body">
              <span className="promo-banner-badge">✓ Delivered · Insurance Brokerage</span>
              <div className="promo-banner-title">Document Intelligence &amp; Submission-to-Quote Automation</div>
              <div className="promo-banner-desc">Thousands of documents in, priced premiums out — a 2–3 week underwriter run, automated.</div>
            </div>
            <span className="promo-banner-cta">Read the case study <ArrowRight size={16} /></span>
          </Link>

          {/* Service blocks */}
          {services.map((svc) => (
            <div key={svc.title} className="svc-block" style={{ marginBottom: '2.5rem', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
              {/* Header */}
              <div style={{ padding: '2.5rem 2.5rem 2rem', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '10px', background: 'var(--gp-soft)', border: '1px solid var(--ba)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svc.Icon size={24} strokeWidth={1.65} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1, background: 'var(--gt)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', opacity: .2 }}>{svc.num}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '.625rem', flexWrap: 'wrap' }}>
                    <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{svc.title}</h2>
                    <span style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: svc.tagColor, background: svc.tagBg, padding: '.2rem .75rem', borderRadius: '100px', border: `1px solid ${svc.tagColor}22`, whiteSpace: 'nowrap' }}>{svc.tag}</span>
                  </div>
                  <p style={{ fontSize: '1rem', marginBottom: '1rem', maxWidth: '720px', lineHeight: 1.75 }}>{svc.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
                    {svc.pills.map(k => (
                      <span key={k} style={{ fontSize: '.775rem', fontWeight: 500, color: 'var(--ts)', background: 'var(--bg2)', padding: '.25rem .75rem', borderRadius: '100px', border: '1px solid var(--b)' }}>{k}</span>
                    ))}
                  </div>
                  {svc.link && (
                    <Link to={svc.link.to} style={{ display: 'inline-block', marginTop: '1rem', fontSize: '.875rem', fontWeight: 600, color: 'var(--violet)' }}>
                      {svc.link.label}
                    </Link>
                  )}
                </div>
              </div>
              {/* Outcomes */}
              <div style={{ padding: '2rem 2.5rem' }}>
                <p style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '1rem' }}>What you get</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '.625rem' }}>
                  {svc.outcomes.map(o => (
                    <div key={o} style={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem', padding: '.875rem 1rem', background: 'var(--paper-2)', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                      <CheckCircle2 size={15} strokeWidth={2} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '.15rem' }} />
                      <span style={{ fontSize: '.9rem', color: '#374151', lineHeight: 1.55 }}>{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Technology stack */}
          <div className="tech-strip" style={{ marginBottom: '4rem', borderRadius: 'var(--rlg)' }}>
            <div className="container">
              <p className="tech-strip-label">Technologies & Platforms We Work With</p>
              <div className="tech-pills">
                {techStack.map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Methodology */}
          <div style={{ marginBottom: '5rem' }}>
            <div className="sec-head text-center" style={{ maxWidth: '560px', margin: '0 auto 3rem' }}>
              <div className="label">How We Work</div>
              <h2>Our Engagement Methodology</h2>
              <p>The four phases we run across every engagement — adapted to your context, never templated.</p>
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
            <h2>Tell us what you're trying to build.</h2>
            <p>We'll come back with honest advice on whether AI is the right answer — and if it is, what it would take to ship it.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Schedule a Free Call →</Link>
              <Link to="/products" className="btn btn-secondary">See Our Products</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
