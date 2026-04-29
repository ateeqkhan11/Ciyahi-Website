import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const industries = [
  {
    icon: '🏦',
    title: 'Financial Services',
    desc: 'AI-driven AP automation, spend analytics, and integration modernisation for banks, insurers, and financial institutions.',
    tags: ['AP Automation', 'Compliance', 'Integration'],
    color: 'linear-gradient(135deg,#f5f3ff,#ede9fe)',
    border: 'rgba(91,33,182,.12)',
  },
  {
    icon: '🏥',
    title: 'Healthcare',
    desc: 'Streamlined invoice processing, vendor management, and system integration across complex healthcare supply chains.',
    tags: ['Invoice Processing', 'ERP Integration', 'Vendor Management'],
    color: 'linear-gradient(135deg,#f0fdf4,#dcfce7)',
    border: 'rgba(22,163,74,.12)',
  },
  {
    icon: '🏭',
    title: 'Manufacturing',
    desc: 'End-to-end AP automation and procurement analytics for manufacturers managing high-volume, multi-currency payables.',
    tags: ['Procurement', 'AP Automation', 'Analytics'],
    color: 'linear-gradient(135deg,#fff7ed,#fed7aa)',
    border: 'rgba(234,88,12,.12)',
  },
  {
    icon: '🛒',
    title: 'Retail & E-Commerce',
    desc: 'Scalable payables automation and integration that keeps pace with seasonal volumes and omni-channel complexity.',
    tags: ['Automation', 'Scalability', 'Integration'],
    color: 'linear-gradient(135deg,#fdf4ff,#fae8ff)',
    border: 'rgba(168,85,247,.12)',
  },
  {
    icon: '🧑‍💼',
    title: 'Professional Services',
    desc: 'Technology strategy, IT advisory, and AI consulting for legal, accounting, and consulting firms ready to modernise.',
    tags: ['IT Strategy', 'AI Advisory', 'Digital Transformation'],
    color: 'linear-gradient(135deg,#f0f9ff,#e0f2fe)',
    border: 'rgba(2,132,199,.12)',
  },
  {
    icon: '⚙️',
    title: 'Technology & SaaS',
    desc: 'Integration modernisation, AI agent deployment, and cloud infrastructure for technology companies at any growth stage.',
    tags: ['AI Agents', 'Cloud', 'Integration'],
    color: 'linear-gradient(135deg,#f0fdf4,#ccfbf1)',
    border: 'rgba(20,184,166,.12)',
  },
]

const challenges = [
  { icon: '📉', title: 'Manual AP Processes', desc: 'High invoice volumes handled manually — slow, error-prone, and costly to scale.' },
  { icon: '🔀', title: 'Disconnected Systems', desc: 'Point-to-point integrations that break at scale and create operational blind spots.' },
  { icon: '📊', title: 'No Spend Visibility', desc: 'Finance teams unable to see real-time payables, commitments, or cash positions.' },
  { icon: '🧩', title: 'Legacy Architecture', desc: 'Outdated ESB or on-premise middleware that slows down digital transformation.' },
]

export default function Industries() {
  useEffect(() => {
    document.title = 'Industries — Ciyahi Limited'
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
        title="Industries"
        path="/industries"
        description="Deep expertise in financial services, healthcare, manufacturing, retail, professional services, and technology. Sector-aware delivery for mid-market and enterprise."
      />
      <section className="page-hero">
        <div className="page-hero-blob blob-hero-1" /><div className="page-hero-blob blob-hero-2" />
        <div className="container">
          <div className="page-hero-content">
            <div className="label">Industries We Serve</div>
            <h1>Deep Expertise.<br />Sector-Aware Delivery.</h1>
            <p style={{ maxWidth: '580px', margin: '0 auto', fontSize: '1.075rem' }}>
              We bring the same outcome-focused approach to every sector — adapted to the specific operational, regulatory, and technology landscape of your industry.
            </p>
          </div>
        </div>
      </section>

      {/* Industry tiles */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <div className="label">Coverage</div>
            <h2>Which Industries Do We Serve?</h2>
            <p>Our experience spans six major sectors, with particular depth in financial services and manufacturing AP workflows.</p>
          </div>
          <div className="grid-3" style={{ marginBottom: '5rem' }}>
            {industries.map(ind => (
              <div key={ind.title} className="card industry-card" style={{ background: ind.color, borderColor: ind.border }}>
                <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>{ind.icon}</div>
                <h3 style={{ marginBottom: '.625rem' }}>{ind.title}</h3>
                <p style={{ fontSize: '.9rem', marginBottom: '1.25rem' }}>{ind.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
                  {ind.tags.map(t => (
                    <span key={t} style={{ fontSize: '.75rem', fontWeight: 600, padding: '.2rem .625rem', borderRadius: '20px', background: 'rgba(255,255,255,.7)', color: '#374151', border: '1px solid rgba(0,0,0,.07)' }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Common challenges */}
          <div style={{ background: 'var(--bg2)', borderRadius: 'var(--rlg)', padding: '4rem 3rem', border: '1px solid var(--b)', marginBottom: '4rem' }}>
            <div className="sec-head text-center" style={{ maxWidth: '520px', margin: '0 auto 3rem' }}>
              <div className="label">Common Challenges</div>
              <h2 style={{ fontSize: '1.75rem' }}>What Problems Do We Solve Across All Industries?</h2>
            </div>
            <div className="grid-4">
              {challenges.map(c => (
                <div key={c.title} style={{ textAlign: 'center', padding: '.5rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '.875rem' }}>{c.icon}</div>
                  <h3 style={{ fontSize: '1rem', marginBottom: '.5rem' }}>{c.title}</h3>
                  <p style={{ fontSize: '.875rem' }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-banner">
            <h2>Is Your Industry on the List?</h2>
            <p>Even if your sector isn't listed, the problems we solve — manual processes, disconnected systems, no spend visibility — are universal. Let's talk.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Start a Conversation →</Link>
              <Link to="/services" className="btn btn-secondary">View Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
