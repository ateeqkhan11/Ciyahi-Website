import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  useEffect(() => {
    document.title = 'Ciyahi Limited — Outcome-Driven AI and Technology Services'
    // Scroll reveal
    const els = document.querySelectorAll('.card, .insight-card, .method-step, .prod-feat')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            e.target.style.opacity = '1'
            e.target.style.transform = 'translateY(0)'
          }, (e.target.dataset.delay || 0))
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.08 })
    els.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(18px)'
      el.style.transition = 'opacity .5s ease, transform .5s ease'
      el.dataset.delay = (i % 4) * 80
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-blob blob-1" />
        <div className="hero-blob blob-2" />
        <div className="hero-blob blob-3" />
        <div className="hero-divider" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge"><span className="pulse" />AI-First Technology Company</div>
            <h1>Outcome-Driven AI and Technology &mdash;<br /><span className="gradient-text">Built for Enterprises That Can&rsquo;t Afford to Wait</span></h1>
            <p className="hero-sub">Ciyahi delivers intelligent software products and technology services that move organizations from strategy to production &mdash; in weeks, not quarters. Founder-led. Outcome-priced. Built to last.</p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary">Explore Services &rarr;</Link>
              <Link to="/products" className="btn btn-secondary">View Our Products</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div><div className="stat-val">AI-First</div><div className="stat-label">Product Philosophy</div></div>
            <div><div className="stat-val">US &amp; UK</div><div className="stat-label">Global Operations</div></div>
            <div><div className="stat-val">Delaware</div><div className="stat-label">C-Corp Incorporated</div></div>
            <div><div className="stat-val">2026</div><div className="stat-label">Founded</div></div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <div className="label">What We Do</div>
            <h2>How Does Ciyahi Deliver Measurable Outcomes?</h2>
            <p>Every engagement is scoped and governed for results &mdash; whether advisory, implementation, or a dedicated resource arrangement. No vague deliverables. No surprise scope changes.</p>
          </div>
          <div className="grid-4">
            <div className="card"><div className="card-icon">🤖</div><h3>AI-Driven Automation</h3><p>Intelligent agents, LLM integrations, and automation frameworks that scale your operations without scaling your headcount.</p></div>
            <div className="card"><div className="card-icon">📄</div><h3>AP Automation</h3><p>End-to-end accounts payable transformation &mdash; from invoice ingestion and OCR through workflow automation and ERP integration.</p></div>
            <div className="card"><div className="card-icon">🔗</div><h3>Integration Modernization</h3><p>Migrate from legacy ESB and point-to-point architectures to modern API-led, event-driven, cloud-native patterns.</p></div>
            <div className="card"><div className="card-icon">🧭</div><h3>IT Strategy &amp; Advisory</h3><p>Architecture reviews, digital transformation roadmaps, and technology strategy guided by 15+ years of enterprise experience.</p></div>
          </div>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link to="/services" className="btn btn-outline">View All Services &rarr;</Link>
          </div>
        </div>
      </section>

      {/* PRODUCT SPOTLIGHT */}
      <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--b)', borderBottom: '1px solid var(--b)' }}>
        <div className="container">
          <div className="product-spot">
            <div className="prod-badge">🚀 Flagship Product</div>
            <h2 style={{ marginBottom: '1rem' }}><span className="gradient-text">InvoAIce.io</span></h2>
            <p style={{ maxWidth: '600px', fontSize: '1.0625rem' }}>An AI-native Accounts Payable automation platform that eliminates manual invoice processing &mdash; built for SMBs and mid-market finance teams.</p>
            <div className="prod-features">
              <div className="prod-feat"><span style={{ fontSize: '1.25rem', flexShrink: 0, marginTop: '.1rem' }}>⚡</span><div><strong>AI Invoice Processing</strong><span>Extract, validate &amp; route invoices automatically</span></div></div>
              <div className="prod-feat"><span style={{ fontSize: '1.25rem', flexShrink: 0, marginTop: '.1rem' }}>✅</span><div><strong>Smart Approvals</strong><span>Rule-based workflows with exception handling</span></div></div>
              <div className="prod-feat"><span style={{ fontSize: '1.25rem', flexShrink: 0, marginTop: '.1rem' }}>🔌</span><div><strong>ERP Integration</strong><span>Sync with Oracle, SAP, NetSuite &amp; more</span></div></div>
              <div className="prod-feat"><span style={{ fontSize: '1.25rem', flexShrink: 0, marginTop: '.1rem' }}>📊</span><div><strong>Analytics Dashboard</strong><span>Real-time AP spend and cycle time visibility</span></div></div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/products" className="btn btn-primary">Learn More &rarr;</Link>
              <Link to="/contact" className="btn btn-secondary">Join Early Access</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CIYAHI */}
      <section className="section">
        <div className="container">
          <div className="sec-head text-center" style={{ maxWidth: '620px', margin: '0 auto 3.5rem' }}>
            <div className="label">Why Ciyahi</div>
            <h2>Why Do Enterprise Teams Choose a Founder-Led Technology Firm?</h2>
          </div>
          <div className="grid-3">
            <div className="card"><div className="card-icon">🏗️</div><h3>Founder-Led, Every Time</h3><p>Every engagement is personally guided by a founder with deep enterprise experience &mdash; not delegated to a junior team after the sales call.</p></div>
            <div className="card"><div className="card-icon">📦</div><h3>Product-First Thinking</h3><p>We build software products, not just services. Our consulting is shaped by the discipline of shipping real software at production scale.</p></div>
            <div className="card"><div className="card-icon">🎯</div><h3>Priced on Outcomes, Not Hours</h3><p>Every SOW defines measurable outcomes before work begins. You know exactly what you&rsquo;re paying for &mdash; and exactly what you&rsquo;ll receive.</p></div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--b)', borderBottom: '1px solid var(--b)' }}>
        <div className="container">
          <div className="sec-head text-center" style={{ maxWidth: '580px', margin: '0 auto 3.5rem' }}>
            <div className="label">Our Methodology</div>
            <h2>What Does a Ciyahi Engagement Look Like, Step by Step?</h2>
            <p>Every Ciyahi engagement follows the same disciplined process &mdash; from the first conversation to final delivery.</p>
          </div>
          <div className="method-grid">
            <div className="method-step"><div className="method-num">01</div><h3>Assess</h3><p>Deep discovery of your current-state systems, workflows, and technology ecosystem to establish a clear, unbiased baseline.</p></div>
            <div className="method-step"><div className="method-num">02</div><h3>Build</h3><p>Architecture design, solution development, and governance framework &mdash; built with precision for long-term scalability.</p></div>
            <div className="method-step"><div className="method-num">03</div><h3>Automate</h3><p>Deploy AI agents and automation frameworks that deliver measurable operational outcomes and reduce manual overhead.</p></div>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="section">
        <div className="container">
          <div className="sec-head" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div><div className="label">Insights</div><h2>Insights From the Ciyahi Team</h2></div>
            <Link to="/insights" className="btn btn-outline btn-sm">View All &rarr;</Link>
          </div>
          <div className="grid-3">
            <div className="insight-card">
              <div className="insight-img" style={{ background: 'linear-gradient(135deg,#eef2ff,#e0e7ff)' }}>📄</div>
              <div className="insight-body"><span className="insight-tag">AP Automation</span><h3>Why AI-Native AP Automation Is the Next Enterprise Frontier</h3><p style={{ fontSize: '.9rem' }}>The real cost of manual invoice processing &mdash; and the measurable case for AI-first AP transformation.</p><div className="insight-meta">April 2026 &bull; 6 min read</div></div>
            </div>
            <div className="insight-card">
              <div className="insight-img" style={{ background: 'linear-gradient(135deg,#f0fdf4,#ccfbf1)' }}>🔗</div>
              <div className="insight-body"><span className="insight-tag">Integration</span><h3>Why 70% of Integration Modernization Projects Fail &mdash; And How to Fix Them</h3><p style={{ fontSize: '.9rem' }}>Five root causes of failed integration transformations &mdash; and the governance model that prevents them.</p><div className="insight-meta">April 2026 &bull; 8 min read</div></div>
            </div>
            <div className="insight-card">
              <div className="insight-img" style={{ background: 'linear-gradient(135deg,#f0f9ff,#e0f2fe)' }}>🤖</div>
              <div className="insight-body"><span className="insight-tag">AI Strategy</span><h3>What AI-Driven Integration Assessment Actually Looks Like in Practice</h3><p style={{ fontSize: '.9rem' }}>A practitioner&rsquo;s view of deploying AI agents for enterprise integration analysis.</p><div className="insight-meta">March 2026 &bull; 5 min read</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="cta-banner">
            <h2>What Would It Take to Move Your Transformation Forward This Quarter?</h2>
            <p>Schedule a complimentary 30-minute strategy call. We assess your current state and identify your highest-value opportunities &mdash; at no cost, no obligation.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Schedule Free Assessment &rarr;</Link>
              <Link to="/services" className="btn btn-secondary">View Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

