import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Insights() {
  useEffect(() => { document.title = 'Insights — Ciyahi Limited' }, [])
  const posts = [
    { tag: 'AP Automation', icon: '📄', bg: 'linear-gradient(135deg,#eef2ff,#e0e7ff)', title: 'Why AI-Native AP Automation Is the Next Enterprise Frontier', excerpt: 'The real cost of manual invoice processing — and the measurable case for AI-first AP transformation.', date: 'April 2026', read: '6 min read' },
    { tag: 'Integration', icon: '🔗', bg: 'linear-gradient(135deg,#f0fdf4,#ccfbf1)', title: 'Why 70% of Integration Modernization Projects Fail — And How to Fix Them', excerpt: 'Five root causes of failed integration transformations — and the governance model that prevents them.', date: 'April 2026', read: '8 min read' },
    { tag: 'AI Strategy', icon: '🤖', bg: 'linear-gradient(135deg,#f0f9ff,#e0f2fe)', title: 'What AI-Driven Integration Assessment Actually Looks Like in Practice', excerpt: "A practitioner's view of deploying AI agents for enterprise integration analysis — beyond the hype.", date: 'March 2026', read: '5 min read' },
    { tag: 'Technology', icon: '🏗️', bg: 'linear-gradient(135deg,#fdf4ff,#fae8ff)', title: 'The Hidden Cost of Technical Debt in Mid-Market ERP Implementations', excerpt: 'How accumulating technical debt in ERP systems silently erodes operational efficiency over time.', date: 'March 2026', read: '7 min read' },
    { tag: 'AI Strategy', icon: '💡', bg: 'linear-gradient(135deg,#fffbeb,#fef3c7)', title: "Founder's Perspective: Why We're Building an AI-Native AP Platform in 2026", excerpt: 'The market opportunity, the technical approach, and why the timing is right for InvoAIce.io.', date: 'February 2026', read: '4 min read' },
    { tag: 'Integration', icon: '☁️', bg: 'linear-gradient(135deg,#ecfdf5,#d1fae5)', title: 'MuleSoft vs. Azure Integration Services: A Practitioner\'s Comparison', excerpt: 'A non-vendor-sponsored comparison of enterprise integration platforms for 2026.', date: 'February 2026', read: '10 min read' },
  ]
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-blob blob-hero-1" /><div className="page-hero-blob blob-hero-2" />
        <div className="container">
          <div className="label">Insights</div>
          <h1>Perspectives From the Ciyahi Team</h1>
          <p className="hero-sub" style={{ maxWidth: '540px' }}>Practitioner-written insights on AI, integration, and enterprise technology. No vendor sponsorship. No fluff.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {posts.map(p => (
              <div key={p.title} className="insight-card">
                <div className="insight-img" style={{ background: p.bg }}>{p.icon}</div>
                <div className="insight-body">
                  <span className="insight-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p style={{ fontSize: '.9rem' }}>{p.excerpt}</p>
                  <div className="insight-meta">{p.date} &bull; {p.read}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <p style={{ color: 'var(--ts)', marginBottom: '1.5rem' }}>Want these insights in your inbox?</p>
            <Link to="/contact" className="btn btn-outline">Subscribe to Updates &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  )
}

