import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  useEffect(() => { document.title = 'About — Ciyahi Limited' }, [])
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-blob blob-hero-1" /><div className="page-hero-blob blob-hero-2" />
        <div className="container">
          <div className="label">Our Story</div>
          <h1>Built by Practitioners,<br />for Practitioners</h1>
          <p className="hero-sub" style={{ maxWidth: '560px' }}>Ciyahi was founded on a simple belief: enterprise technology engagements should be led by the people who built the pitch &mdash; not handed off after the contract is signed.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '5rem' }}>
            <div>
              <div className="label">Why We Exist</div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>The Problem with the Enterprise Technology Market</h2>
              <p style={{ color: 'var(--ts)', marginBottom: '1rem' }}>Most technology consulting firms sell outcomes and deliver effort. The partner leads the pitch. A junior team delivers the project. The client pays for hours, not results.</p>
              <p style={{ color: 'var(--ts)', marginBottom: '1rem' }}>We built Ciyahi to change that. Every engagement at Ciyahi is founder-led, outcome-scoped, and priced on delivery &mdash; not time. We&rsquo;re small by design, and we intend to stay that way.</p>
              <p style={{ color: 'var(--ts)' }}>The name &ldquo;Ciyahi&rdquo; means <em>ink</em> in Urdu &mdash; the medium through which ideas become permanent. That&rsquo;s what we do: we turn strategy into outcomes that last.</p>
            </div>
            <div className="card" style={{ padding: '2.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✒️</div>
              <h3 style={{ marginBottom: '1rem' }}>Ciyahi means Ink</h3>
              <p style={{ color: 'var(--ts)' }}>In Urdu, &ldquo;Ciyahi&rdquo; (سیاہی) means ink &mdash; permanent, precise, fluid, and transformative. Every contract signed, every system built, every outcome delivered. It starts with ink.</p>
            </div>
          </div>

          <div className="sec-head text-center" style={{ maxWidth: '560px', margin: '0 auto 3rem' }}>
            <div className="label">Leadership</div>
            <h2>Meet the Founders</h2>
          </div>
          <div className="grid-3" style={{ maxWidth: '800px', margin: '0 auto 5rem' }}>
            {[
              { name: 'Ateequeullah Khan', role: 'Non-Executive Director', bio: '15+ years of enterprise technology leadership across integration, AI, and digital transformation. Advisor to C-suite and technology leadership teams across the US and UK.', icon: '👤' },
              { name: 'Iqbal Shaikh', role: 'Director', bio: 'Operational leader with deep expertise in technology delivery and business development across the UK market. Responsible for day-to-day operations and client engagement.', icon: '👤' },
            ].map(f => (
              <div key={f.name} className="card" style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg,#eef2ff,#e0e7ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 1.25rem' }}>{f.icon}</div>
                <h3 style={{ marginBottom: '.25rem' }}>{f.name}</h3>
                <div className="insight-tag" style={{ marginBottom: '1rem' }}>{f.role}</div>
                <p style={{ fontSize: '.9rem', color: 'var(--ts)' }}>{f.bio}</p>
                <a href="mailto:info@ciyahi.com" style={{ color: 'var(--indigo)', fontSize: '.875rem', marginTop: '.75rem', display: 'inline-block' }}>info@ciyahi.com</a>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--bg2)', borderRadius: 'var(--rlg)', padding: '3rem', marginBottom: '3rem', border: '1px solid var(--b)' }}>
            <div className="sec-head text-center" style={{ maxWidth: '480px', margin: '0 auto 2rem' }}>
              <div className="label">Structure</div>
              <h2 style={{ fontSize: '1.5rem' }}>How We&rsquo;re Structured</h2>
            </div>
            <div className="grid-3">
              {[
                { title: 'Delaware C-Corp', desc: 'Ciyahi Limited is a Delaware C-Corp — US client-friendly, structurally sound, and built for global operations from day one.' },
                { title: 'US & UK Operations', desc: 'Founder presence across the United States and United Kingdom, enabling delivery across both markets.' },
                { title: 'UK Subsidiary (Planned)', desc: 'A UK operating entity is planned to support EMEA client engagements and formal UK contracting.' },
              ].map(s => (
                <div key={s.title} style={{ textAlign: 'center', padding: '1rem' }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: '.5rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '.875rem', color: 'var(--ts)' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-banner">
            <h2>Work With Us</h2>
            <p>We take on a small number of engagements at a time. If your challenge is interesting, we&rsquo;d like to hear about it.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Start a Conversation &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

