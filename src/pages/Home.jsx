import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Inbox, ScanSearch, FileOutput, Layers, GitMerge,
  ShieldAlert, Calculator,
} from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'
import HeroShowcase from '../components/HeroShowcase'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import useScrollReveal from '../hooks/useScrollReveal'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ciyahi Limited',
  alternateName: 'Ciyahi',
  url: 'https://ciyahi.com',
  logo: 'https://ciyahi.com/og-image.png',
  description: 'Ciyahi is an enterprise AI implementation company. We design, build, and ship AI systems across any domain — multi-agent pipelines, workflow automation, and AI-native products.',
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
    'AI Implementation', 'Enterprise AI', 'AI Agent Development',
    'Multi-agent Systems', 'AI Strategy', 'AP Automation',
    'Finance Automation', 'LLM Orchestration', 'AI Harness',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ciyahi',
  url: 'https://ciyahi.com',
  description: 'Enterprise AI implementation — we design, build, and ship AI systems. Our flagship product InvoAIce is live in production today.',
  publisher: { '@type': 'Organization', name: 'Ciyahi Limited' },
}

const services = [
  {
    num: '01',
    title: 'Process Automation with LLMs',
    desc: 'LLM agents that run document-heavy processes end to end — classify, extract, decide, and hand off cleanly.',
    badge: 'Proven · Live',
  },
  {
    num: '02',
    title: 'AI Agent & Harness Development',
    desc: 'We design and implement multi-agent systems that automate complex workflows in your stack.',
    badge: 'Agentic AI',
  },
  {
    num: '03',
    title: 'AI Implementation & Delivery',
    desc: 'From brief to production — integrated into your ERP, CRM, or line-of-business systems.',
    badge: 'Any Domain',
  },
  {
    num: '04',
    title: 'AI Strategy & Advisory',
    desc: 'Readiness assessments and roadmaps for teams who need a partner to sequence it right.',
    badge: 'Advisory',
  },
]

const approach = [
  { num: '01', title: 'Assess', desc: 'Map the real problem and define measurable outcomes before any build begins.' },
  { num: '02', title: 'Design', desc: 'Architect the system with your team — agents, integrations, failure modes.' },
  { num: '03', title: 'Build', desc: 'Founder-led delivery. No handoff to a junior team after the SOW is signed.' },
  { num: '04', title: 'Embed', desc: 'Train your people, document everything, leave a system that runs without us.' },
]

const journey = [
  { num: '01', meta: '~30 min · No commitment', title: 'Discovery', desc: 'A strategy call with a founder. We map the workflow, identify the highest-ROI automation target, and say honestly whether we are the right fit.' },
  { num: '02', meta: 'Scoped pilot · Clear success metrics', title: 'Pilot', desc: 'A bounded build in your environment — real documents, real systems — so you see production value before a long commitment.' },
  { num: '03', meta: 'Weeks, not quarters', title: 'Production', desc: 'The pilot becomes the live system. Documented, trained, and owned by your team — not a slide deck.' },
  { num: '04', meta: 'Ongoing · Built to scale', title: 'Grow', desc: 'Volume, entities, currencies, adjacent workflows. The same connectors and patterns extend as you expand.' },
]

const whys = [
  {
    title: 'We automate processes — then ship them',
    desc: 'LLM agents that classify, extract, decide, and post. Insurance and AP are the proof; the pattern travels.',
  },
  {
    title: 'Roadmap to production — same team',
    desc: 'We don\'t stop at a strategy deck. The people who design the harness are the ones who ship it.',
  },
  {
    title: 'Founder-led every engagement',
    desc: 'The people who understand the problem are the ones who simplify the process — from assess to go-live.',
  },
]

const insurancePipe = [
  { Icon: Inbox, label: 'Intake', sub: 'Any format' },
  { Icon: ScanSearch, label: 'Classify', sub: '65+ types' },
  { Icon: FileOutput, label: 'Extract', sub: 'Policies, SOVs' },
  { Icon: Layers, label: 'Program', sub: 'Grouped' },
  { Icon: GitMerge, label: 'Reconcile', sub: 'Per location' },
  { Icon: ShieldAlert, label: 'Risk Check', sub: 'Terrorism, quake' },
  { Icon: Calculator, label: 'Price', sub: 'Premium / location' },
]

const invoaiceAgents = [
  'DocIntel', 'OCR', 'Fraud', 'Validation', 'Matching', 'Approval', 'ERP', 'Notify',
]

const insuranceStats = [
  { value: '65', suffix: '+', label: 'Document types classified' },
  { value: '7', suffix: '', label: 'Pipeline stages' },
  { value: '2–3', suffix: ' wks', label: 'Manual run → automated' },
]

const invoaiceStats = [
  { value: '90', suffix: '%', label: 'Straight-through processing' },
  { value: '14', suffix: 's', label: 'Avg invoice cycle' },
  { value: '4', suffix: ' wks', label: 'Typical ERP go-live' },
]

const cycleWords = ['enterprise.', 'insurance.', 'finance.', 'any industry.']

export default function Home() {
  const [wordIdx, setWordIdx] = useState(0)

  useScrollReveal('.reveal-block, .svc-tile, .approach-step, .why-item, .journey-step, .proof-card')

  useEffect(() => {
    const id = setInterval(() => setWordIdx(i => (i + 1) % cycleWords.length), 2400)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    document.title = 'Ciyahi — Enterprise AI Implementation'
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const inkMain = document.querySelector('.hero-ink--main')
    const inkWisp = document.querySelector('.hero-ink--wisp')
    if (!inkMain) return undefined
    const onScroll = () => {
      const y = window.scrollY
      inkMain.style.transform = `translateY(${y * 0.1}px)`
      if (inkWisp) inkWisp.style.transform = `translateY(${y * 0.18}px) translateX(${y * -0.04}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <SEO
        path="/"
        description="Ciyahi helps enterprises automate processes with LLMs — design agents, implement agents, and ship to production. Proven in insurance brokerage and AP (InvoAIce)."
        keywords="process automation LLM, AI agents, enterprise AI implementation, multi-agent AI, document automation, AP automation, InvoAIce, insurance document AI"
      />
      <JsonLd schema={organizationSchema} />
      <JsonLd schema={websiteSchema} />

      <section className="hero hero-premium">
        <div className="hero-dots" />
        <div className="hero-ink hero-ink--main" aria-hidden="true" />
        <div className="hero-ink hero-ink--wisp" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-content hero-stagger">
            <div className="hero-brand">
              <span className="hero-brand-mark" aria-hidden="true" />
              Ciyahi
            </div>

            <h1>
              We automate processes{' '}
              <span className="hero-grad hero-cycle">
                <span key={wordIdx} className="hero-cycle-word">for {cycleWords[wordIdx]}</span>
              </span>
            </h1>

            <p className="hero-sub">
              Design agents. Implement agents. Simplify the work — with LLMs in production, not in a pilot.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Schedule a Call <ArrowRight size={16} />
              </Link>
              <Link to="/user-stories" className="btn btn-ghost btn-lg">
                See what we&rsquo;ve shipped
              </Link>
            </div>

            <div className="hero-trust">
              <span><i /> Insurance pipeline delivered</span>
              <span><i /> InvoAIce live in production</span>
            </div>
          </div>

          <HeroShowcase />
        </div>
      </section>

      <section className="section section-shipped reveal-block">
        <div className="container">
          <div className="sec-head reveal-block">
            <div className="label">Shipped work</div>
            <h2>LLM agents running<br /><span className="gradient-text">real processes end to end.</span></h2>
            <p>
              Ciyahi designs and implements agent pipelines that simplify document-heavy work —
              proven in insurance brokerage intake and accounts payable.
            </p>
          </div>

          <div className="proof-pair">
            <article className="proof-card proof-card--insurance glass-card">
              <div className="proof-card-top">
                <span className="proof-card-badge">Delivered · Insurance Brokerage</span>
                <h3>Document Intelligence &amp; Submission-to-Quote</h3>
                <p>
                  LLM agents classify intake against a 65+ type taxonomy, extract what underwriting needs,
                  reconcile per location, and submit for risk checks and pricing — turning a 2–3 week
                  manual run into an automated pipeline.
                </p>
              </div>

              <div className="proof-card-pipe-label">7-stage pipeline</div>
              <div className="pipe pipe-light" aria-label="Insurance document intelligence pipeline">
                <div className="pipe-track" aria-hidden="true" />
                {insurancePipe.map(s => (
                  <div key={s.label} className="pipe-node">
                    <div className="pipe-node-dot">
                      <s.Icon size={16} strokeWidth={1.8} />
                    </div>
                    <div className="pipe-node-label">{s.label}</div>
                    <div className="pipe-node-sub">{s.sub}</div>
                  </div>
                ))}
              </div>

              <div className="proof-card-stats">
                {insuranceStats.map(s => (
                  <div key={s.label}>
                    <div className="proof-stat-val">
                      {s.value.includes('–') ? (
                        <span>{s.value}{s.suffix}</span>
                      ) : (
                        <AnimatedCounter value={s.value} suffix={s.suffix} />
                      )}
                    </div>
                    <div className="proof-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

              <Link to="/document-intelligence" className="btn btn-outline">
                Read the case study <ArrowRight size={15} />
              </Link>
            </article>

            <article className="proof-card proof-card--invoaice glass-card">
              <div className="proof-card-top">
                <span className="proof-card-badge proof-card-badge--live">
                  <span className="pulse" /> Live · Flagship Product
                </span>
                <h3>InvoAIce — AI-native AP Automation</h3>
                <p>
                  Eight specialist LLM agents handle OCR, fraud screening, validation, 3-way match,
                  approvals, and ERP posting — so AP teams stop paying twenty dollars to process a
                  fifty-dollar invoice. Built and operated by Ciyahi, live with real customers.
                </p>
              </div>

              <div className="proof-card-pipe-label">8-agent pipeline</div>
              <div className="agent-pipeline">
                <div className="agent-pipeline-track" aria-hidden="true" />
                {invoaiceAgents.map((a, i) => (
                  <div key={a} className="agent-node" style={{ '--i': i }}>
                    <span className="agent-node-dot" />
                    <span className="agent-node-label">{a}</span>
                  </div>
                ))}
              </div>

              <div className="proof-card-stats">
                {invoaiceStats.map(s => (
                  <div key={s.label}>
                    <div className="proof-stat-val">
                      <AnimatedCounter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="proof-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="proof-card-actions">
                <Link to="/invoaice" className="btn btn-outline">
                  Read the story <ArrowRight size={15} />
                </Link>
                <a href="https://www.invoaice.io" target="_blank" rel="noreferrer" className="btn btn-ghost">
                  Visit InvoAIce.io
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-wash reveal-block">
        <div className="container">
          <div className="sec-head reveal-block">
            <div className="label">What we do</div>
            <h2>Four ways we help teams ship AI.</h2>
          </div>

          <div className="svc-list">
            {services.map(s => (
              <div key={s.title} className="svc-tile">
                <div className="svc-tile-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="svc-tile-badge">{s.badge}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <Link to="/services" className="btn btn-outline">
              All service details <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section reveal-block">
        <div className="container">
          <div className="sec-head reveal-block">
            <div className="label">Customer journey</div>
            <h2>What working with Ciyahi looks like.</h2>
            <p>No 12-month IT project. A clear path from first call to production — and a foundation that grows with you.</p>
          </div>
          <div className="journey-grid">
            {journey.map(j => (
              <div key={j.num} className="journey-step">
                <div className="journey-num">{j.num}</div>
                <div className="journey-meta">{j.meta}</div>
                <h3>{j.title}</h3>
                <p>{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-wash reveal-block">
        <div className="container">
          <div className="sec-head reveal-block">
            <div className="label">How we work</div>
            <h2>Four steps from brief to production.</h2>
          </div>
          <div className="approach-grid">
            {approach.map(a => (
              <div key={a.num} className="approach-step">
                <div className="approach-num">{a.num}</div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal-block">
        <div className="container">
          <div className="sec-head reveal-block">
            <div className="label">Why Ciyahi</div>
            <h2>Three things that set us apart.</h2>
          </div>
          <div className="why-list">
            {whys.map(w => (
              <div key={w.title} className="why-item">
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
          <div className="quote-block reveal-block" style={{ marginTop: '3.5rem', maxWidth: '640px' }}>
            Founder-led from first call to go-live — insurance intake, AP automation, and the workflows in between.
          </div>
        </div>
      </section>

      <section className="section reveal-block" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to simplify a process?</h2>
            <p>
              Tell us what lands in your inbox. We&rsquo;ll say honestly whether LLM agents are the right answer —
              and what it takes to ship them. Or join the InvoAIce Design Partner Program if AP is the priority.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Schedule a Call <ArrowRight size={15} />
              </Link>
              <Link to="/contact?dp=1" className="btn btn-secondary">
                Apply: Design Partner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
