import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, FileText, ShieldAlert, GitMerge, CheckCircle2,
  Database, Bell, ScanSearch, Timer, Layers,
} from 'lucide-react'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import InvoAIcePreview from '../components/InvoAIcePreview'
import AnimatedCounter from '../components/AnimatedCounter'
import { buildBreadcrumb } from '../seo/schema'
import useScrollReveal from '../hooks/useScrollReveal'

const breadcrumbSchema = buildBreadcrumb([
  { name: 'User Stories', path: '/user-stories' },
  { name: 'InvoAIce AP Automation', path: '/invoaice' },
])

const problems = [
  {
    title: 'Legacy AP stacks that never learned',
    desc: 'Rules, templates, and bolted-on ML. Every new vendor layout means another exception queue.',
  },
  {
    title: '$20–$30 to process a single invoice',
    desc: 'Touch labor, exception chasing, and ERP rework eat the savings automation was supposed to deliver.',
  },
  {
    title: 'Months to go live, months to prove ROI',
    desc: 'Enterprise AP projects stall in IT queues while finance keeps paying the old cost structure.',
  },
]

const agents = [
  { Icon: ScanSearch, title: 'DocIntel', desc: 'Classifies the document and routes it into the AP pipeline.' },
  { Icon: FileText, title: 'OCR', desc: 'Vendor-adaptive extraction — no templates to maintain.' },
  { Icon: ShieldAlert, title: 'Fraud', desc: 'Multi-layer screening: duplicates, BEC patterns, new payees.' },
  { Icon: CheckCircle2, title: 'Validation', desc: 'Completeness, tax, and policy checks before matching.' },
  { Icon: GitMerge, title: 'Matching', desc: 'PO + GRN 3-way match with configurable tolerances.' },
  { Icon: Layers, title: 'Approval', desc: 'Authority matrix, dual-sign for high amounts, SLA escalation.' },
  { Icon: Database, title: 'ERP', desc: 'Posts approved invoices into your ERP — no CSV exports.' },
  { Icon: Bell, title: 'Notify', desc: 'Exceptions and status to the right people, with a full audit trail.' },
]

const outcomes = [
  { value: '90', suffix: '%', label: 'Straight-through processing' },
  { value: '14', suffix: 's', label: 'Avg invoice processing time' },
  { value: '4', suffix: ' wks', label: 'Typical ERP go-live' },
  { value: '43', suffix: '%', label: 'TCO reduction vs legacy AP' },
]

const erpSystems = [
  'Oracle Fusion',
  'SAP S/4HANA',
  'JD Edwards',
  'NetSuite',
  'Dynamics 365',
]

const journey = [
  { num: '01', meta: '~30 min', title: 'Discovery', desc: 'Map your AP volume, ERP, and exception hotspots. Honest fit check before any build.' },
  { num: '02', meta: '60 days free', title: 'Design Partner Pilot', desc: 'Sandbox on your ERP. Real invoices through the eight-agent pipeline before you commit.' },
  { num: '03', meta: '~4 weeks', title: 'Production', desc: 'Pilot becomes production. Locked-in design-partner pricing. Working AP in your environment.' },
]

export default function InvoAIce() {
  useScrollReveal('.reveal-block, .approach-step, .journey-step')
  useEffect(() => { document.title = 'InvoAIce — AP Automation Case Study — Ciyahi' }, [])

  return (
    <>
      <SEO
        title="InvoAIce — AI-Native AP Automation"
        path="/invoaice"
        description="Ciyahi built InvoAIce — an 8-agent AI AP platform live in production. Up to 90% straight-through processing, ~14s average cycle, native ERP connectors. Read the story."
        keywords="InvoAIce, AP automation, accounts payable AI, ERP invoice posting, 3-way match, SAP S/4HANA, Oracle Fusion, NetSuite, Dynamics 365, Ciyahi"
      />
      <JsonLd schema={breadcrumbSchema} />

      <section className="page-hero">
        <div className="page-hero-dots" />
        <div className="container">
          <div className="page-hero-content">
            <Link
              to="/user-stories"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '.375rem',
                fontSize: '.875rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '1.25rem',
              }}
            >
              ← All User Stories
            </Link>
            <div className="label">Product · Finance · Accounts Payable</div>
            <h1>
              InvoAIce.<br />
              <span className="gradient-text">We built the proof.</span>
            </h1>
            <p style={{ maxWidth: '620px', fontSize: '1.075rem' }}>
              An AI-native AP product — designed, built, and operated by Ciyahi. Live with real customers.
              Eight specialist agents turn invoice chaos into clean ERP posts — without ripping out your ERP.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.85rem', marginTop: '1.75rem' }}>
              <Link to="/contact?dp=1" className="btn btn-primary">
                Apply: Design Partner <ArrowRight size={15} />
              </Link>
              <a href="https://www.invoaice.io" target="_blank" rel="noreferrer" className="btn btn-ghost">
                Visit InvoAIce.io
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal-block" style={{ background: 'var(--paper-2)', borderBottom: '1px solid var(--b)' }}>
        <div className="container">
          <div className="sec-head reveal-block">
            <div className="label">The Problem</div>
            <h2>AP automation that still feels<br /><span className="gradient-text">like the 2010s.</span></h2>
          </div>
          <div className="approach-grid">
            {problems.map((p, i) => (
              <div key={p.title} className="approach-step" style={{ gridColumn: i === 2 ? 'span 1' : undefined }}>
                <div className="approach-num">0{i + 1}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal-block">
        <div className="container">
          <div className="sec-head reveal-block">
            <div className="label">What We Built</div>
            <h2>Eight agents. One pipeline.<br /><span className="gradient-text">Owned by Ciyahi.</span></h2>
            <p>
              InvoAIce is not a consulting slide deck. It is a product we run in production —
              the same founder-led delivery model we use for custom enterprise AI engagements.
            </p>
          </div>
          <div className="grid-4" style={{ marginBottom: '2.5rem' }}>
            {agents.map(a => (
              <div key={a.title} className="card reveal-block">
                <div className="card-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <a.Icon size={22} strokeWidth={1.7} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 style={{ fontSize: '1rem' }}>{a.title}</h3>
                <p style={{ fontSize: '.875rem' }}>{a.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal-block" style={{
            display: 'flex', alignItems: 'center', gap: '.875rem',
            padding: '1rem 1.25rem', background: 'var(--live-soft)',
            border: '1px solid rgba(13, 122, 79, .25)', borderRadius: '12px', maxWidth: '720px',
          }}>
            <Timer size={22} strokeWidth={1.8} style={{ color: 'var(--live)', flexShrink: 0 }} />
            <span style={{ fontSize: '.9375rem', color: 'var(--ts)', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--live)' }}>Up to 90% touchless from day one.</strong>{' '}
              Average cycle ~14 seconds. Typical ERP go-live in about four weeks — not a 12-month IT programme.
            </span>
          </div>
        </div>
      </section>

      <section className="section reveal-block" style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--b)' }}>
        <div className="container">
          <div className="sec-head reveal-block">
            <div className="label">Inside the Product</div>
            <h2>The AP command center.<br /><span className="gradient-text">Live processing, end to end.</span></h2>
            <p>
              Real-time visibility from intake to ERP post — the same dashboard teams use in production.
              Toggle between the pipeline view and the invoice queue.
            </p>
          </div>
          <div className="inv-case-preview reveal-block">
            <InvoAIcePreview />
          </div>
        </div>
      </section>

      <section className="section reveal-block">
        <div className="container">
          <div className="sec-head reveal-block">
            <div className="label">Integrations</div>
            <h2>Native ERP connectors.<br /><span className="gradient-text">No middleware.</span></h2>
            <p>
              Approved invoices post directly — Oracle Fusion, SAP S/4HANA, JD Edwards, NetSuite, and Dynamics 365.
              No CSV exports. No bolt-on integration project.
            </p>
          </div>
          <div className="erp-strip reveal-block" style={{ borderTop: 'none', marginTop: 0, paddingTop: 0 }}>
            {erpSystems.map(e => <span key={e}>{e}</span>)}
          </div>
        </div>
      </section>

      <section className="section reveal-block" style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--b)' }}>
        <div className="container">
          <div className="sec-head reveal-block">
            <div className="label">Outcomes</div>
            <h2>Numbers that hold up<br /><span className="gradient-text">in a live AP environment.</span></h2>
          </div>
          <div className="proof-stats reveal-block">
            {outcomes.map(s => (
              <div key={s.label}>
                <div className="proof-stat-val">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="proof-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal-block">
        <div className="container">
          <div className="sec-head reveal-block">
            <div className="label">How to Get Started</div>
            <h2>From first call to<br /><span className="gradient-text">production AP.</span></h2>
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

      <section className="section reveal-block" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="cta-banner">
            <h2>Stop paying $25 to process a $50 invoice.</h2>
            <p>
              Join the Design Partner Program — 60 days free, five spots, founder-led pilot.
              Or schedule a call about a custom AI build in any domain.
            </p>
            <div className="cta-actions">
              <Link to="/contact?dp=1" className="btn btn-primary">
                Apply: Design Partner <ArrowRight size={15} />
              </Link>
              <a href="https://www.invoaice.io" target="_blank" rel="noreferrer" className="btn btn-secondary">
                Visit InvoAIce.io
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
