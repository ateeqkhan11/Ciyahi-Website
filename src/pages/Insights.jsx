import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const categories = ['All', 'AP Automation', 'AI Strategy', 'Integration', 'Cloud', 'IT Advisory']

const articles = [
  {
    id: 1,
    tag: 'AP Automation',
    title: 'Why AI-Native AP Automation Is the Next Enterprise Frontier',
    excerpt: 'Accounts payable has long been treated as a back-office function — necessary, but not strategic. That is changing. Here\'s why AI-native AP automation is becoming a board-level priority.',
    date: 'April 2026',
    read: '6 min',
    featured: true,
    bg: 'linear-gradient(135deg,#ede9fe,#ddd6fe)',
    emoji: '📄',
  },
  {
    id: 2,
    tag: 'Integration',
    title: 'Why 70% of Integration Projects Fail — And How to Fix Them',
    excerpt: 'Integration projects are consistently under-planned and over-promised. We\'ve seen what causes failure and what consistently drives success.',
    date: 'April 2026',
    read: '8 min',
    featured: false,
    bg: 'linear-gradient(135deg,#d1fae5,#a7f3d0)',
    emoji: '🔗',
  },
  {
    id: 3,
    tag: 'AI Strategy',
    title: 'What AI-Driven Integration Assessment Actually Looks Like',
    excerpt: 'An AI integration assessment isn\'t a PowerPoint. It\'s a structured, evidence-based review of your current-state systems, integration patterns, and automation opportunities.',
    date: 'March 2026',
    read: '5 min',
    featured: false,
    bg: 'linear-gradient(135deg,#e0f2fe,#bae6fd)',
    emoji: '🤖',
  },
  {
    id: 4,
    tag: 'AP Automation',
    title: 'The True Cost of Manual Invoice Processing in 2026',
    excerpt: 'Most finance leaders know manual AP is inefficient. Few have actually calculated the full cost — not just labour, but error rates, late payment penalties, and audit risk.',
    date: 'March 2026',
    read: '7 min',
    featured: false,
    bg: 'linear-gradient(135deg,#fef3c7,#fde68a)',
    emoji: '💰',
  },
  {
    id: 5,
    tag: 'IT Advisory',
    title: 'How to Run a Technology Assessment That Actually Drives Decisions',
    excerpt: 'A good technology assessment surfaces the right information at the right time to enable confident investment decisions. Here is the framework we use.',
    date: 'February 2026',
    read: '9 min',
    featured: false,
    bg: 'linear-gradient(135deg,#fae8ff,#f5d0fe)',
    emoji: '🧭',
  },
  {
    id: 6,
    tag: 'Cloud',
    title: 'Cloud Migration Isn\'t a Technology Problem — It\'s a Sequencing Problem',
    excerpt: 'Most failed cloud migrations weren\'t technically wrong. They were sequenced incorrectly. Here\'s how to think about migration order to minimise risk and maximise early wins.',
    date: 'January 2026',
    read: '6 min',
    featured: false,
    bg: 'linear-gradient(135deg,#ccfbf1,#99f6e4)',
    emoji: '☁️',
  },
]

export default function Insights() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? articles : articles.filter(a => a.tag === filter)
  const featured = articles.find(a => a.featured)
  const rest = filtered.filter(a => !a.featured)

  useEffect(() => { document.title = 'Insights — Ciyahi Limited' }, [])

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-blob blob-hero-1" /><div className="page-hero-blob blob-hero-2" />
        <div className="container">
          <div className="page-hero-content">
            <div className="label">Thought Leadership</div>
            <h1>Insights From<br />the Ciyahi Team</h1>
            <p style={{ maxWidth: '520px', margin: '0 auto', fontSize: '1.075rem' }}>Practical perspectives on enterprise AI, AP automation, integration modernisation, and technology strategy — written by practitioners, for practitioners.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Featured */}
          {filter === 'All' && featured && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '4rem', background: featured.bg, borderRadius: 'var(--rlg)', padding: '3rem', border: '1px solid rgba(0,0,0,.06)' }}>
              <div style={{ fontSize: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,.5)', borderRadius: 'var(--rlg)', aspectRatio: '4/3' }}>
                {featured.emoji}
              </div>
              <div>
                <span className="insight-tag" style={{ marginBottom: '1rem' }}>{featured.tag} · Featured</span>
                <h2 style={{ fontSize: '1.5rem', margin: '1rem 0 1rem', lineHeight: 1.35 }}>{featured.title}</h2>
                <p style={{ fontSize: '.9625rem', marginBottom: '1.5rem', color: 'var(--ts)' }}>{featured.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <span style={{ fontSize: '.825rem', color: 'var(--tm)' }}>{featured.date} · {featured.read} read</span>
                  <Link to="/insights" className="btn btn-outline btn-sm">Read Article →</Link>
                </div>
              </div>
            </div>
          )}

          {/* Filter pills */}
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                style={{
                  padding: '.375rem 1rem', borderRadius: '20px', border: '1px solid',
                  borderColor: filter === c ? 'var(--violet)' : 'var(--b)',
                  background: filter === c ? 'var(--violet-soft)' : 'transparent',
                  color: filter === c ? 'var(--violet)' : 'var(--ts)',
                  fontWeight: filter === c ? 600 : 400,
                  fontSize: '.875rem', cursor: 'pointer', transition: 'all .2s'
                }}
              >{c}</button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid-3">
            {rest.map(a => (
              <div key={a.id} className="insight-card">
                <div className="insight-img" style={{ background: a.bg }}>{a.emoji}</div>
                <div className="insight-body">
                  <span className="insight-tag">{a.tag}</span>
                  <h3>{a.title}</h3>
                  <p style={{ fontSize: '.9rem' }}>{a.excerpt}</p>
                  <div className="insight-meta">{a.date} · {a.read} read</div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div style={{ marginTop: '5rem', textAlign: 'center', background: 'var(--bg2)', borderRadius: 'var(--rlg)', padding: '3.5rem 2rem', border: '1px solid var(--b)' }}>
            <div className="label" style={{ margin: '0 auto 1rem' }}>Stay Current</div>
            <h2 style={{ fontSize: '1.625rem', marginBottom: '.75rem' }}>Get Practitioner Insights in Your Inbox</h2>
            <p style={{ maxWidth: '460px', margin: '0 auto 2rem', fontSize: '.9625rem' }}>No fluff. Practical perspectives on AI, automation, and enterprise technology — once or twice a month.</p>
            <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <input type="email" placeholder="your@email.com" style={{ padding: '.75rem 1.25rem', borderRadius: 'var(--rmd)', border: '1px solid var(--b)', background: '#fff', fontSize: '.9375rem', minWidth: '260px', outline: 'none' }} />
              <Link to="/contact" className="btn btn-primary">Subscribe →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
