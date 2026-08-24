import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ScanSearch, ArrowRight, Bot, FileText } from 'lucide-react'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import { buildBreadcrumb } from '../seo/schema'
import useScrollReveal from '../hooks/useScrollReveal'

const breadcrumbSchema = buildBreadcrumb([{ name: 'User Stories', path: '/user-stories' }])

const cases = [
  {
    to: '/document-intelligence',
    external: false,
    Icon: ScanSearch,
    status: 'Delivered',
    sector: 'Insurance Brokerage · Real Estate Consortiums',
    title: 'Document Intelligence & Submission-to-Quote',
    desc: 'Thousands of intake documents classified against a 65+ type taxonomy, reconciled per location, and auto-submitted for risk checks and pricing.',
    stats: ['65+ doc types', '7-stage pipeline', '2–3 wks → automated'],
    cta: 'Read the case study',
  },
  {
    to: '/contact',
    external: false,
    Icon: Bot,
    status: 'Delivered',
    sector: 'Insurance · Claims & Policy Servicing',
    title: 'Claims & Policy-Servicing Agents',
    desc: 'LLM agents for claims document processing, submission intake, and policy servicing — the same intake → extract → decide pattern, wired into insurance workflows.',
    stats: ['Claims intake', 'Policy servicing', 'LLM agents'],
    cta: 'Talk about a similar build',
  },
  {
    to: '/invoaice',
    external: false,
    Icon: FileText,
    status: 'Live in production',
    sector: 'Finance · Accounts Payable',
    title: 'InvoAIce — AP Automation',
    desc: 'An 8-agent pipeline that turns invoice chaos into clean ERP posts. Built, owned, and operated by Ciyahi — live with real customers today.',
    stats: ['Up to 90% STP', '~14s avg', '4-wk ERP go-live'],
    cta: 'Read the story',
  },
]

// Temporary draft quotes — swap with real customer wording when ready. No client names.
const testimonials = [
  {
    quote:
      'What used to take our underwriters two to three weeks now clears in a fraction of that time. The system classifies the mess that lands in intake and feeds our existing risk and pricing tools — we did not have to rip anything out.',
    name: 'Director of Underwriting Operations',
    role: 'Insurance brokerage · Real-estate consortium programs',
  },
  {
    quote:
      'We were drowning in invoice exceptions. InvoAIce went live against our ERP in weeks, not months, and the straight-through rate made the business case obvious in the first month.',
    name: 'Head of Accounts Payable',
    role: 'Mid-market manufacturer · Multi-entity AP',
  },
  {
    quote:
      'Ciyahi did not hand us a slide deck and disappear. The same people who scoped the problem built the agents and sat with our claims team until the workflow actually ran.',
    name: 'VP, Claims Operations',
    role: 'Specialty insurance · Claims & policy servicing',
  },
]

export default function UseCases() {
  useScrollReveal('.usecase-card, .testimonial-card, .reveal-block')
  useEffect(() => { document.title = 'User Stories — Ciyahi Limited' }, [])

  return (
    <>
      <SEO
        title="User Stories — Delivered AI Automation"
        path="/user-stories"
        description="Real Ciyahi engagements and customer voices: document intelligence for insurance brokerages, claims and policy-servicing agents, and InvoAIce AP automation live in production."
        keywords="AI user stories, customer testimonials, insurance brokerage automation, document intelligence case study, claims AI, AP automation, InvoAIce"
      />
      <JsonLd schema={breadcrumbSchema} />

      <section className="page-hero">
        <div className="page-hero-dots" />
        <div className="container">
          <div className="page-hero-content">
            <div className="label">User Stories</div>
            <h1>What we&rsquo;ve actually<br /><span className="gradient-text">shipped.</span></h1>
            <p style={{ maxWidth: '540px' }}>
              Pipelines running in production — and the people who run them.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="usecase-grid">
            {cases.map(c => {
              const inner = (
                <>
                  <div className="usecase-card-top">
                    <div className="usecase-card-ico">
                      <c.Icon size={20} strokeWidth={1.7} />
                    </div>
                    <span className="usecase-card-status">{c.status}</span>
                  </div>
                  <div className="usecase-card-sector">{c.sector}</div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <div className="usecase-stat-row">
                    {c.stats.map(s => (
                      <span key={s} className="usecase-stat">{s}</span>
                    ))}
                  </div>
                  <span className="usecase-card-cta">
                    {c.cta} <ArrowRight size={15} />
                  </span>
                </>
              )

              if (c.external) {
                return (
                  <a
                    key={c.title}
                    href={c.to}
                    target="_blank"
                    rel="noreferrer"
                    className="usecase-card"
                  >
                    {inner}
                  </a>
                )
              }

              return (
                <Link key={c.title} to={c.to} className="usecase-card">
                  {inner}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--b)' }}>
        <div className="container">
          <div className="sec-head reveal-block">
            <div className="label">From the people who use it</div>
            <h2>What customers say.</h2>
            <p>Direct voices from engagements we&rsquo;ve delivered. Names of firms stay off the record.</p>
          </div>

          <div className="testimonial-grid">
            {testimonials.map(t => (
              <blockquote key={t.name} className="testimonial-card">
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <footer className="testimonial-attr">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '4rem' }}>
        <div className="container">
          <div className="cta-banner">
            <h2>Have a process like this?</h2>
            <p>
              Tell us what lands in your inbox. We&rsquo;ll say honestly whether the same pattern applies — and what it takes to ship it.
            </p>
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
