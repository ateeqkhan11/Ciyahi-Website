import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Inbox, RefreshCw, FileWarning, ShieldCheck,
  ScanSearch, FileOutput, CheckCircle2, Archive,
  Route, Repeat, Shield, FileText,
  Scale, Truck, Building2, HeartPulse, ArrowRight,
  Layers, GitMerge, ShieldAlert, Calculator, Timer,
} from 'lucide-react'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import { buildBreadcrumb } from '../seo/schema'

const breadcrumbSchema = buildBreadcrumb([
  { name: 'User Stories', path: '/user-stories' },
  { name: 'Document Intelligence', path: '/document-intelligence' },
])

// The intake reality — every brokerage workflow starts as an unsorted pile
const startingPoints = [
  { Icon: Inbox, title: 'New Business Submission', desc: 'ACORD apps, loss runs, and SOVs arrive together — unlabeled, in one email thread.' },
  { Icon: RefreshCw, title: 'Renewal Prep', desc: 'Prior policy, updated schedules, and correspondence mixed across formats.' },
  { Icon: FileWarning, title: 'Claims Intake', desc: 'FNOLs, adjuster notes, and reserve worksheets across PDFs, scans, and fax.' },
  { Icon: ShieldCheck, title: 'Audit & Compliance', desc: 'W-9s, COIs, and filings that must be located on demand, years later.' },
]

// The four-stage framework — the reusable pattern
const framework = [
  { Icon: ScanSearch, num: '01', title: 'Classify', desc: 'An LLM / vision agent assigns each document to a controlled taxonomy — not just "ACORD form," but "ACORD 125, Commercial Application."' },
  { Icon: FileOutput, num: '02', title: 'Extract', desc: 'Type-aware sub-agents pull structured fields — named insured, limits, premium, loss history — into a common schema.' },
  { Icon: CheckCircle2, num: '03', title: 'Validate', desc: 'Cross-checks completeness against a submission checklist and flags discrepancies for human review.' },
  { Icon: Archive, num: '04', title: 'Catalog', desc: 'Tags with client, policy, LOB, and confidence score; files to the system of record and feeds the audit trail.' },
]

// The 65+ type taxonomy delivered for the brokerage build
const taxonomy = [
  { count: 10, title: 'Applications & Submissions', examples: 'ACORD 125 / 126 / 130 / 140, SOV, BOR letter' },
  { count: 7, title: 'Loss & Claims History', examples: 'Loss runs, FNOL, claims summary, subrogation' },
  { count: 9, title: 'Policy Documents', examples: 'Dec page, endorsements, COI, binder, renewal quote' },
  { count: 10, title: 'Underwriting Support', examples: 'MVR, EMR worksheet, loss control survey, OSHA 300' },
  { count: 7, title: 'Compliance & Regulatory', examples: 'W-9, surplus lines filing, KYC, carrier authority' },
  { count: 6, title: 'Financial & Billing', examples: 'Invoices, premium finance agreement, audit statement' },
  { count: 5, title: 'Proposal & Renewal', examples: 'Quote comparison, renewal questionnaire, gap analysis' },
  { count: 6, title: 'Correspondence & Ancillary', examples: 'Intake questionnaires, appointment letters, AI requests' },
]

// The delivered pipeline — submission-to-quote for real-estate consortium programs
const pipeStages = [
  { Icon: Inbox, label: 'Intake', sub: 'Thousands of docs, any format' },
  { Icon: ScanSearch, label: 'Classify', sub: '65+ types, 8 categories' },
  { Icon: FileOutput, label: 'Extract', sub: 'Policies, SOVs, loss runs' },
  { Icon: Layers, label: 'Program', sub: 'Grouped into programs' },
  { Icon: GitMerge, label: 'Reconcile', sub: 'Losses vs policies, per location' },
  { Icon: ShieldAlert, label: 'Risk Check', sub: 'Terrorism, quake, windstorm', ext: true },
  { Icon: Calculator, label: 'Price', sub: 'Premium per location', ext: true },
]

// What the taxonomy powers downstream
const automations = [
  { Icon: Route, num: '01', title: 'Underwriting Triage', desc: 'Auto-route complete submissions; flag missing subjectivities before they reach an underwriter.' },
  { Icon: Repeat, num: '02', title: 'Renewal Preparation', desc: "Diff this year's SOV and loss run against last year's — automatically." },
  { Icon: Shield, num: '03', title: 'Compliance & Audit', desc: 'An immutable trail of every document, its type, and who touched it.' },
  { Icon: FileText, num: '04', title: 'Proposal Generation', desc: 'Pull validated data straight into client-ready proposal output.' },
]

// Same pattern, any industry
const verticals = [
  { Icon: ShieldCheck, title: 'Insurance Brokerage', desc: 'Submissions, loss runs, claims files, policies — a 65+ type taxonomy powering automated intake and downstream workflows.', status: 'Delivered', live: true },
  { Icon: FileText, title: 'Finance & AP', desc: 'Invoices, POs, GRNs, statements — classified, extracted, matched, and posted to the ERP by InvoAIce.', status: 'Live in production', live: true, to: '/invoaice' },
  { Icon: HeartPulse, title: 'Hospitals & Healthcare', desc: 'Clinical documents, prior authorisations, referrals, payer correspondence — the same classify → extract → validate spine.', status: 'Same pattern', live: false },
  { Icon: Scale, title: 'Legal & Professional', desc: 'Contracts, engagement letters, discovery files, compliance packs — typed, extracted, and routed.', status: 'Same pattern', live: false },
  { Icon: Truck, title: 'Logistics & Supply Chain', desc: 'Bills of lading, customs declarations, delivery notes, freight invoices — governed intake at scale.', status: 'Same pattern', live: false },
  { Icon: Building2, title: 'Lending & Real Estate', desc: 'Loan files, appraisals, title documents, closing packs — completeness-checked before anyone opens the file.', status: 'Same pattern', live: false },
]

// Classification queue mockup rows
const queueRows = [
  { file: 'ACORD-125_Hartline.pdf', type: 'Commercial Application', conf: '0.99', status: 'Classified · Extracted', cls: 'st-posted' },
  { file: 'LossRun_2021-2024.pdf', type: 'Loss & Claims History', conf: '0.98', status: 'Extracted · Validated', cls: 'st-posted' },
  { file: 'SOV_Locations_FY25.xlsx', type: 'Statement of Values', conf: '0.97', status: 'Cross-checked vs 125', cls: 'st-posted' },
  { file: 'COI_Vendor_Mills.pdf', type: 'Certificate of Insurance', conf: '0.96', status: 'Cataloged', cls: 'st-posted' },
  { file: 'Email_Thread_Renewal.eml', type: 'Correspondence', conf: '0.91', status: 'Routed for review', cls: 'st-review' },
  { file: 'Scan_20260812_0004.tiff', type: 'Detecting…', conf: '· · ·', status: 'Classifying…', cls: 'st-processing' },
]

export default function DocumentIntelligence() {
  useEffect(() => { document.title = 'Document Intelligence — Ciyahi Limited' }, [])

  return (
    <>
      <SEO
        title="Document Intelligence — Classify Once, Automate Everywhere"
        path="/document-intelligence"
        description="Ciyahi's document intelligence framework turns unstructured document intake into governed, automated workflows: classify, extract, validate, catalog. Delivered for insurance brokerage with a 65+ document-type taxonomy. The same pattern works in any industry."
        keywords="document intelligence, insurance document AI, ACORD classification, insurance brokerage automation, document classification LLM, intelligent document processing, document taxonomy, claims document AI, submission intake automation"
      />
      <JsonLd schema={breadcrumbSchema} />

      <section className="page-hero">
        <div className="page-hero-dots" />
        <div className="page-hero-blob blob-hero-1" />
        <div className="page-hero-blob blob-hero-2" />
        <div className="container">
          <div className="page-hero-content">
            <Link to="/user-stories" style={{ display: 'inline-flex', alignItems: 'center', gap: '.375rem', fontSize: '.875rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '1.25rem' }}>
              ← All User Stories
            </Link>
            <div className="label">Use Case · Insurance Brokerage</div>
            <h1>Document Intelligence.<br /><span className="gradient-text">Classify once. Automate everywhere.</span></h1>
            <p style={{ maxWidth: '660px', margin: '0 auto', fontSize: '1.075rem' }}>
              Every automation starts with a document. Before AI can quote, triage, or check compliance, it has to answer one
              question first: <em>what document is this, and what does it mean?</em> We built the answer for an insurance
              brokerage — and the same pattern works in any document-heavy industry.
            </p>
          </div>
        </div>
      </section>

      {/* THE STARTING POINT */}
      <section className="section" style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--b)' }}>
        <div className="container">
          <div className="sec-head">
            <div className="label">The Starting Point</div>
            <h2>Every workflow begins as <span className="gradient-text">an unsorted pile.</span></h2>
            <p>
              In a brokerage — as in most enterprises — documents arrive in any format: PDF, scanned image, email attachment,
              even fax. Nothing downstream can run until each one is identified, understood, and filed.
            </p>
          </div>
          <div className="grid-4">
            {startingPoints.map(s => (
              <div key={s.title} className="card">
                <div className="card-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <s.Icon size={26} strokeWidth={1.6} style={{ color: 'var(--accent)' }} />
                </div>
                <h3>{s.title}</h3>
                <p style={{ fontSize: '.875rem' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE FRAMEWORK */}
      <section className="section">
        <div className="container">
          <div className="sec-head text-center" style={{ maxWidth: '620px', margin: '0 auto 3rem' }}>
            <div className="label">The Framework</div>
            <h2>Four stages turn unstructured intake<br /><span className="gradient-text">into governed data.</span></h2>
          </div>
          <div className="method-grid">
            {framework.map(f => (
              <div key={f.num} className="method-step">
                <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '.75rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--gp-soft)', border: '1px solid var(--ba)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <f.Icon size={20} strokeWidth={1.7} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div className="method-num" style={{ marginBottom: 0 }}>{f.num}</div>
                </div>
                <h3>{f.title}</h3>
                <p style={{ fontSize: '.9375rem' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERED: INSURANCE BROKERAGE */}
      <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--b)', borderBottom: '1px solid var(--b)' }}>
        <div className="container">
          <div className="sec-head">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: 'rgba(5,150,105,.1)', border: '1px solid rgba(5,150,105,.25)', borderRadius: '100px', padding: '.35rem .875rem', fontSize: '.75rem', fontWeight: 700, color: '#059669', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              <span className="pulse" />
              Delivered · Insurance Brokerage
            </div>
            <h2>A 65+ document-type taxonomy,<br /><span className="gradient-text">built and running.</span></h2>
            <p>
              For an insurance brokerage, we mapped the full universe of intake documents into eight recognizable categories —
              then wired an LLM classification and extraction pipeline on top. Cataloging was only step one:
              <strong> complete automated workflows now run on this data layer.</strong>
            </p>
          </div>

          {/* Classification queue mockup */}
          <div className="app-window" style={{ marginBottom: '3rem' }}>
            <div className="app-window-bar">
              <span className="app-window-dot" style={{ background: '#f87171' }} />
              <span className="app-window-dot" style={{ background: '#fbbf24' }} />
              <span className="app-window-dot" style={{ background: '#34d399' }} />
              <span className="app-window-title">Client Doc Intake — Classification Queue</span>
              <span className="app-window-badge">
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                LIVE
              </span>
            </div>
            {queueRows.map(r => (
              <div key={r.file} className="app-row">
                <span className="app-row-file">
                  <FileText size={15} strokeWidth={1.8} style={{ color: 'var(--accent-l)', flexShrink: 0 }} />
                  {r.file}
                </span>
                <span className="app-row-vendor">{r.type}</span>
                <span className="conf-pill">{r.conf}</span>
                <span className={`status-chip ${r.cls}`}>{r.status}</span>
              </div>
            ))}
          </div>

          {/* Taxonomy grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {taxonomy.map(t => (
              <div key={t.title} className="card" style={{ padding: '1.375rem 1.375rem 1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '.5rem', marginBottom: '.5rem' }}>
                  <span style={{ fontSize: '1.75rem', fontWeight: 800, background: 'var(--gt)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>{t.count}</span>
                  <span style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--tm)' }}>types</span>
                </div>
                <h3 style={{ fontSize: '.9875rem', marginBottom: '.375rem' }}>{t.title}</h3>
                <p style={{ fontSize: '.8125rem', lineHeight: 1.6, color: 'var(--ts)' }}>{t.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE DELIVERED PIPELINE */}
      <section className="section" style={{ paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="featured-svc">
            <div className="featured-badge">
              <span className="pulse" />
              The Delivered Pipeline · Real Estate Consortiums
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem,2.6vw,2.125rem)', marginBottom: '.875rem' }}>From thousands of documents to a priced premium.</h2>
            <p className="featured-desc" style={{ maxWidth: '800px', fontSize: '1.0125rem', lineHeight: 1.75, marginBottom: 0 }}>
              Cataloging was step one. On top of the structured data layer, we automated the full
              <strong style={{ color: '#fff' }}> submission-to-quote cycle</strong> for real-estate consortium programs:
              policies and loss runs grouped into programs — with consolidated and per-location views — reconciled location
              by location, then auto-submitted to the firm's <strong style={{ color: '#fff' }}>risk modeling and pricing
              systems</strong> for an <strong style={{ color: '#fff' }}>indicative premium on every location.</strong>
            </p>
            <div className="pipe">
              <div className="pipe-track" />
              {pipeStages.map((s, i) => (
                <div key={s.label} className="pipe-node">
                  <div className="pipe-node-dot" style={{ '--i': i }}>
                    <s.Icon size={20} strokeWidth={1.7} />
                  </div>
                  <div className="pipe-node-label">{s.label}</div>
                  <div className="pipe-node-sub">{s.sub}</div>
                  {s.ext && <div className="pipe-node-ext">3rd-party</div>}
                </div>
              ))}
            </div>
            <p style={{ fontSize: '.75rem', color: 'rgba(148,163,184,.65)', marginTop: '-1.75rem', marginBottom: '1.75rem' }}>
              Risk and pricing engines are the firm's existing third-party systems — Ciyahi built the automation that feeds them.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '.75rem', marginBottom: '1.5rem' }}>
              <div className="featured-chip" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '.375rem' }}>
                <strong style={{ color: '#fff', fontSize: '.9rem' }}>Workflow 1 — New business run</strong>
                <span>A prospective client's entire portfolio goes from raw documents to submitted, priced premiums — every check, every location.</span>
              </div>
              <div className="featured-chip" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '.375rem' }}>
                <strong style={{ color: '#fff', fontSize: '.9rem' }}>Workflow 2 — Mid-term addition</strong>
                <span>A client buys a new property mid-year? It runs the same pipeline automatically — premium shared back in one pass.</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '.875rem', padding: '1rem 1.25rem', background: 'rgba(52,211,153,.08)', border: '1px solid rgba(52,211,153,.25)', borderRadius: '12px' }}>
              <Timer size={22} strokeWidth={1.8} style={{ color: '#34d399', flexShrink: 0 }} />
              <span style={{ fontSize: '.9375rem', color: '#e2e8f0', lineHeight: 1.6 }}>
                <strong style={{ color: '#34d399' }}>2–3 weeks → automated.</strong> One full run — intake, risk modeling, pricing —
                used to take an underwriter two to three weeks. It now runs end to end.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FROM TAXONOMY TO AUTOMATION */}
      <section className="section">
        <div className="container">
          <div className="sec-head text-center" style={{ maxWidth: '640px', margin: '0 auto 3rem' }}>
            <div className="label">From Taxonomy to Automation</div>
            <h2>The taxonomy is the foundation<br /><span className="gradient-text">every downstream agent builds on.</span></h2>
            <p>Once every document is typed, extracted, and validated, the structured data layer powers the workflows that actually save time:</p>
          </div>
          <div className="grid-4">
            {automations.map(a => (
              <div key={a.num} className="card">
                <div className="card-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <a.Icon size={26} strokeWidth={1.6} style={{ color: 'var(--accent)' }} />
                </div>
                <h3>{a.title}</h3>
                <p style={{ fontSize: '.875rem' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANY INDUSTRY */}
      <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--b)' }}>
        <div className="container">
          <div className="sec-head">
            <div className="label">Beyond Insurance</div>
            <h2>If your industry runs on documents,<br /><span className="gradient-text">this pattern applies.</span></h2>
            <p>
              The framework is industry-agnostic by design: swap the taxonomy, keep the pipeline. We've already proven it
              in insurance brokerage and in finance — the same spine drives InvoAIce, our AP automation product, live in production.
            </p>
          </div>
          <div className="grid-3">
            {verticals.map(v => {
              const body = (
                <>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '.75rem', marginBottom: '1rem' }}>
                    <div className="card-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 0 }}>
                      <v.Icon size={26} strokeWidth={1.6} style={{ color: 'var(--accent)' }} />
                    </div>
                    <span style={{ fontSize: '.7rem', fontWeight: 700, color: v.live ? '#059669' : 'var(--accent)', background: v.live ? 'rgba(16,185,129,.12)' : 'rgba(13, 117, 117,.07)', border: `1px solid ${v.live ? 'rgba(16,185,129,.25)' : 'rgba(13, 117, 117,.15)'}`, padding: '.2rem .625rem', borderRadius: '20px', whiteSpace: 'nowrap' }}>
                      {v.live ? '✓ ' : ''}{v.status}
                    </span>
                  </div>
                  <h3 style={{ marginBottom: '.5rem' }}>{v.title}</h3>
                  <p style={{ fontSize: '.875rem' }}>{v.desc}</p>
                  {v.to && (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '.35rem', marginTop: '.75rem', fontSize: '.85rem', fontWeight: 600, color: 'var(--accent)' }}>
                      Read the story <ArrowRight size={14} />
                    </span>
                  )}
                </>
              )
              return v.to ? (
                <Link key={v.title} to={v.to} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                  {body}
                </Link>
              ) : (
                <div key={v.title} className="card">{body}</div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: '5rem' }}>
        <div className="container">
          <div className="cta-banner">
            <h2>Classify once. Automate everywhere.</h2>
            <p>
              The document taxonomy isn't a side task — it's the interface layer every intake, underwriting, and compliance
              agent depends on. Tell us what lands in your inbox, and we'll show you what it can power.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Schedule a Call <ArrowRight size={16} /></Link>
              <Link to="/services" className="btn btn-secondary">See Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
