import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedCounter from '../components/AnimatedCounter'

const services = [
  { icon: '🤖', title: 'AI-Driven Automation', desc: 'Intelligent agents, LLM integrations, and automation frameworks that scale your operations without scaling headcount.' },
  { icon: '📄', title: 'AP Automation', desc: 'End-to-end accounts payable transformation — from invoice ingestion and OCR through workflow automation and ERP integration.' },
  { icon: '🔗', title: 'Integration Modernization', desc: 'Migrate from legacy ESB and point-to-point architectures to modern API-led, event-driven, cloud-native patterns.' },
  { icon: '🧭', title: 'IT Strategy & Advisory', desc: 'Architecture reviews, digital transformation roadmaps, and technology strategy guided by 15+ years of enterprise experience.' },
]

const whys = [
  { icon: '🏗️', title: 'Founder-Led, Every Time', desc: 'Every engagement is personally guided by a founder — not delegated to a junior team after the sales call.' },
  { icon: '📦', title: 'Product-First Thinking', desc: 'We build software products, not just services. Our consulting is shaped by the discipline of shipping real software.' },
  { icon: '🎯', title: 'Priced on Outcomes', desc: "Every SOW defines measurable outcomes before work begins. You know exactly what you're paying for." },
]

const stats = [
  { value: '15', suffix: '+', label: 'Years Enterprise Experience', numeric: true },
  { value: '2', suffix: '', label: 'Global Markets (US & UK)', numeric: true },
  { value: '3', suffix: '', label: 'AI Products in Pipeline', numeric: true },
  { value: '2026', suffix: '', label: 'Delaware C-Corp Founded', numeric: false },
]

const insights = [
  { tag: 'AP Automation', title: 'Why AI-Native AP Automation Is the Next Enterprise Frontier', date: 'April 2026', read: '6 min', bg: 'linear-gradient(135deg,#f5f3ff,#ede9fe)', emoji: '📄' },
  { tag: 'Integration', title: 'Why 70% of Integration Projects Fail — And How to Fix Them', date: 'April 2026', read: '8 min', bg: 'linear-gradient(135deg,#f0fdf4,#d1fae5)', emoji: '🔗' },
  { tag: 'AI Strategy', title: 'What AI-Driven Integration Assessment Actually Looks Like', date: 'March 2026', read: '5 min', bg: 'linear-gradient(135deg,#f0f9ff,#e0f2fe)', emoji: '🤖' },
]

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

const apStack = [
  { icon: '📄', name: 'Basware' },
  { icon: '🔍', name: 'Kofax' },
  { icon: '🗂️', name: 'Oracle WebCenter' },
  { icon: '🖨️', name: 'Canon' },
  { icon: '🧠', name: 'ABBYY' },
  { icon: '🗄️', name: 'Document Management' },
  { icon: '🚀', name: 'InvoAIce.io' },
]

const expertise = [
  { icon: '📄', text: '15+ Years AP Automation Experience' },
  { icon: '🔗', text: 'Enterprise Integration Specialists' },
  { icon: '🤖', text: 'AI Agent Deployment' },
  { icon: '🌍', text: 'US & UK Market Presence' },
  { icon: '🏗️', text: 'Founder-Led Every Engagement' },
]

export default function Home() {
  useEffect(() => {
    document.title = 'Ciyahi Limited — AI Products & Technology Services'
    const els = document.querySelectorAll('.card, .insight-card, .method-step, .prod-feat')
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
    // Give elements a short grace period before hiding them
    // so they don't flash invisible on fast scrollers
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
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-blob blob-1" />
        <div className="hero-blob blob-2" />
        <div className="hero-blob blob-3" />
        <div className="hero-divider" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge"><span className="pulse" />AI-First Technology Company</div>
            <h1>Outcome-Driven AI &amp;<br /><span className="gradient-text">Technology, Built for Enterprises</span></h1>
            <p className="hero-sub">Ciyahi delivers intelligent software products and technology services that move organisations from strategy to production — in weeks, not quarters. Founder-led. Outcome-priced. Built to last.</p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary btn-lg">View Our Products →</Link>
              <Link to="/services" className="btn btn-secondary btn-lg">Explore Services</Link>
            </div>
            <p className="hero-note" style={{ fontSize: '.825rem', color: 'var(--tm)', marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '.375rem' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
              InvoAIce.io — Flagship product now in early access
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
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

      {/* ── TECH STACK STRIP ── */}
      <div className="tech-strip">
        <div className="container">
          <p className="tech-strip-label">Technologies We Work With</p>
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
              <span key={t.name} className="tech-pill" style={{ borderColor: 'rgba(91,33,182,.2)', color: t.name === 'InvoAIce.io' ? 'var(--violet)' : undefined, fontWeight: t.name === 'InvoAIce.io' ? 600 : undefined }}>
                <span className="tech-pill-icon">{t.icon}</span>
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── EXPERTISE STRIP ── */}
      <div className="exp-strip">
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
      {/* ── SERVICES ── */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <div className="label">What We Do</div>
            <h2>How Does Ciyahi Deliver Measurable Outcomes?</h2>
            <p>Every engagement is scoped and governed for results — whether advisory, implementation, or a dedicated resource arrangement. No vague deliverables.</p>
          </div>
          <div className="grid-4">
            {services.map(s => (
              <div key={s.title} className="card">
                <div className="card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.75rem', textAlign: 'center' }}>
            <Link to="/services" className="btn btn-outline">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* ── PRODUCT SPOTLIGHT ── */}
      <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--b)', borderBottom: '1px solid var(--b)' }}>
        <div className="container">
          <div className="product-spot">
            <div className="prod-badge">🚀 Flagship Product — Early Access</div>
            <h2 style={{ marginBottom: '1rem' }}><span className="gradient-text">InvoAIce.io</span></h2>
            <p style={{ maxWidth: '600px', fontSize: '1.0625rem' }}>An AI-native Accounts Payable automation platform that eliminates manual invoice processing — built for SMBs, mid-market, and enterprise finance teams.</p>
            <div className="prod-features">
              {[
                { icon: '⚡', title: 'AI Invoice Processing', desc: 'Extract, validate & route invoices automatically' },
                { icon: '✅', title: 'Smart Approvals', desc: 'Rule-based workflows with exception handling' },
                { icon: '🔌', title: 'ERP Integration', desc: 'Sync with Oracle, SAP, NetSuite & more' },
                { icon: '📊', title: 'Analytics Dashboard', desc: 'Real-time AP spend and cycle time visibility' },
              ].map(f => (
                <div key={f.title} className="prod-feat">
                  <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{f.icon}</span>
                  <div><strong>{f.title}</strong><span>{f.desc}</span></div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/products" className="btn btn-primary">Learn More →</Link>
              <Link to="/contact" className="btn btn-secondary">Join Early Access</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CIYAHI ── */}
      <section className="section">
        <div className="container">
          <div className="sec-head text-center" style={{ maxWidth: '600px', margin: '0 auto 3.75rem' }}>
            <div className="label">Why Ciyahi</div>
            <h2>Why Do Enterprise Teams Choose a Founder-Led Technology Firm?</h2>
          </div>
          <div className="grid-3">
            {whys.map(w => (
              <div key={w.title} className="card">
                <div className="card-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--b)', borderBottom: '1px solid var(--b)' }}>
        <div className="container">
          <div className="sec-head text-center" style={{ maxWidth: '560px', margin: '0 auto 3.75rem' }}>
            <div className="label">Our Methodology</div>
            <h2>What Does a Ciyahi Engagement Look Like?</h2>
            <p>Every engagement follows the same disciplined process — from first conversation to final delivery.</p>
          </div>
          <div className="method-grid">
            {[
              { num: '01', title: 'Assess', desc: 'Deep discovery of your current-state systems, workflows, and technology ecosystem to establish a clear, unbiased baseline.' },
              { num: '02', title: 'Build', desc: 'Architecture design, solution development, and governance framework — built with precision for long-term scalability.' },
              { num: '03', title: 'Automate', desc: 'Deploy AI agents and automation frameworks that deliver measurable operational outcomes and reduce manual overhead.' },
            ].map(m => (
              <div key={m.num} className="method-step">
                <div className="method-num">{m.num}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIGHTS ── */}
      <section className="section">
        <div className="container">
          <div className="sec-head" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div><div className="label">Insights</div><h2>Insights From the Ciyahi Team</h2></div>
          </div>
          <div className="grid-3">
            {insights.map(ins => (
              <div key={ins.title} className="insight-card">
                <div className="insight-img" style={{ background: ins.bg }}>{ins.emoji}</div>
                <div className="insight-body">
                  <span className="insight-tag">{ins.tag}</span>
                  <h3>{ins.title}</h3>
                  <p style={{ fontSize: '.9rem' }}>Practical perspectives on enterprise AI, automation, and technology transformation.</p>
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
            <h2>What Would It Take to Move Your Transformation Forward This Quarter?</h2>
            <p>Schedule a complimentary 30-minute strategy call. We assess your current state and identify your highest-value opportunities — at no cost, no obligation.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Schedule Free Assessment →</Link>
              <Link to="/services" className="btn btn-secondary">View Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
