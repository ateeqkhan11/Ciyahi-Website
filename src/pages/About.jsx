import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const founders = [
  {
    name: 'Iqbal Shaikh',
    tag: 'Director & Co-Founder',
    bio: "Iqbal leads Ciyahi as Director — responsible for the company's commercial strategy, client engagement, and day-to-day operations. He is the principal point of contact for Ciyahi clients across the UK, Europe, and the United States, and signs all commercial agreements on behalf of Ciyahi Limited.",
    initials: 'IS',
    gradient: 'linear-gradient(135deg,#0284c7,#0ea5e9)',
  },
  // TEMPORARILY HIDDEN — uncomment to restore Ateequeullah's founder card
  // {
  //   name: 'Ateequeullah Khan',
  //   tag: 'Non-Executive Director & Co-Founder',
  //   bio: "Ateeq is a non-executive co-founder and the technical conscience behind Ciyahi's product direction. Prior to Ciyahi, he spent 16+ years leading enterprise technology delivery — including 20+ full-cycle AP Automation implementations across 25+ countries and an industry award for Best Designed AP Automation Solution & Implementation. That experience informs the long-term vision behind InvoAIce.io.",
  //   initials: 'AK',
  //   gradient: 'linear-gradient(135deg,#5b21b6,#7c3aed)',
  // },
]

const credentials = [
  { icon: '🌍', stat: '25+', label: 'Countries', desc: 'AP Automation and integration projects delivered across North America, Europe, Middle East & APAC.' },
  { icon: '🏢', stat: '20+', label: 'Enterprises', desc: 'Full-cycle AP Automation implementations delivered for enterprise clients globally.' },
  { icon: '🏆', stat: '#1', label: 'Award', desc: 'Best Designed AP Automation Solution & Implementation — recognised at industry level.' },
  { icon: '📅', stat: '15+', label: 'Years', desc: 'Hands-on enterprise technology leadership across AP automation, integration, and AI.' },
]

const structure = [
  { title: 'Delaware C-Corp', desc: 'US client-friendly, structurally sound, and built for global operations.' },
  { title: 'US & UK Operations', desc: 'Founder presence across both markets enabling transatlantic delivery.' },
  { title: 'UK Subsidiary (Planned)', desc: 'A UK entity planned for EMEA client engagements and local contracting.' },
]

export default function About() {
  useEffect(() => { document.title = 'About — Ciyahi Limited' }, [])

  return (
    <>
      <SEO
        title="About"
        path="/about"
        description="Ciyahi is a Delaware C-Corp founded by enterprise practitioners with 15+ years of AP automation, integration, and AI experience. Founder-led every engagement."
      />
      <section className="page-hero">
        <div className="page-hero-blob blob-hero-1" />
        <div className="page-hero-blob blob-hero-2" />
        <div className="container">
          <div className="page-hero-content">
            <div className="label">Our Story</div>
            <h1>Built by Practitioners,<br />for Practitioners</h1>
            <p style={{ maxWidth: '580px', margin: '0 auto', fontSize: '1.075rem' }}>
              Ciyahi was founded on a simple belief: enterprise technology engagements should be led by the people who built the pitch — not handed off after the contract is signed.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* Credential stats */}
          <div style={{ marginBottom: '5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div className="label" style={{ margin: '0 auto 0.625rem' }}>Founding Team Track Record</div>
              <p style={{ fontSize: '.9375rem', color: 'var(--ts)', maxWidth: '480px', margin: '0 auto' }}>
                Before founding Ciyahi, our team built and delivered enterprise solutions at scale. That experience is what you engage when you work with us.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1.5rem' }}>
              {credentials.map(c => (
                <div key={c.label} className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem', borderTop: '3px solid transparent', borderImage: 'linear-gradient(90deg,#5b21b6,#0284c7) 1' }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: '.375rem' }}>{c.icon}</div>
                  <div style={{ fontSize: '2.25rem', fontWeight: 800, background: 'linear-gradient(135deg,#5b21b6,#0284c7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.1, marginBottom: '.25rem' }}>{c.stat}</div>
                  <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#64748b', marginBottom: '.625rem' }}>{c.label}</div>
                  <p style={{ fontSize: '.8375rem', lineHeight: 1.65 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Award banner */}
          <div style={{ background: 'linear-gradient(135deg,#faf5ff,#f0f9ff)', border: '1px solid rgba(91,33,182,.15)', borderRadius: '16px', padding: '2.5rem 3rem', marginBottom: '5rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '3.5rem', flexShrink: 0 }}>🏆</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#7c3aed', marginBottom: '.5rem' }}>Industry Recognition</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '.5rem' }}>Best Designed AP Automation Solution & Implementation</h3>
              <p style={{ fontSize: '.9375rem', maxWidth: '540px' }}>Our founding team's AP Automation work has been recognised at industry level — reflecting the rigour, depth, and innovation behind every engagement we deliver.</p>
            </div>
          </div>

          {/* Mission */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
            <div>
              <div className="label">Why We Exist</div>
              <h2 style={{ marginBottom: '1.5rem' }}>The Problem With Enterprise Technology Consulting</h2>
              <p style={{ marginBottom: '1rem' }}>Most technology firms sell outcomes and deliver effort. The partner leads the pitch. A junior team delivers the project. The client pays for hours, not results.</p>
              <p style={{ marginBottom: '1rem' }}>We built Ciyahi to change that. Every engagement is founder-led, outcome-scoped, and priced on delivery — not time.</p>
              <p>The name "Ciyahi" means <em>ink</em> — permanent, precise, and transformative. We turn strategy into outcomes that last.</p>
            </div>
            <div className="card" style={{ padding: '2.5rem', background: 'linear-gradient(135deg,#faf5ff,#f0f9ff)', borderColor: 'rgba(91,33,182,.15)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>✒️</div>
              <h3 style={{ marginBottom: '1rem' }}>Ciyahi means Ink</h3>
              <p style={{ marginBottom: '1.25rem' }}>Ink is permanent, precise, and fluid — the medium through which ideas become real. Every contract signed, every system built, every outcome delivered. It starts with ink.</p>
              <div style={{ padding: '1rem 1.25rem', background: 'rgba(91,33,182,.06)', borderLeft: '3px solid #7c3aed', borderRadius: '0 8px 8px 0', fontStyle: 'italic', color: '#475569', fontSize: '.9375rem' }}>
                "We turn strategy into outcomes that last."
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="sec-head text-center" style={{ maxWidth: '480px', margin: '0 auto 3rem' }}>
            <div className="label">Leadership</div>
            <h2>Meet the Founders</h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '800px', margin: '0 auto 5rem' }}>
            {founders.map(f => (
              <div key={f.name} className="card" style={{ padding: '2.5rem 2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.375rem' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: f.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.125rem', fontWeight: 700, color: '#fff', flexShrink: 0, boxShadow: '0 4px 14px rgba(91,33,182,.18)' }}>{f.initials}</div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.0625rem' }}>{f.name}</h3>
                    <span style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', color: '#7c3aed' }}>{f.tag}</span>
                  </div>
                </div>
                <p style={{ fontSize: '.9rem' }}>{f.bio}</p>
              </div>
            ))}
          </div>

          {/* Structure */}
          <div style={{ background: '#f8f8fd', borderRadius: '16px', padding: '3rem', marginBottom: '4rem', border: '1px solid #e2e8f0' }}>
            <div className="sec-head text-center" style={{ maxWidth: '420px', margin: '0 auto 2rem' }}>
              <div className="label">Structure</div>
              <h2 style={{ fontSize: '1.5rem' }}>How We Are Structured</h2>
            </div>
            <div className="grid-3">
              {structure.map(s => (
                <div key={s.title} style={{ textAlign: 'center', padding: '1rem' }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: '.5rem', color: '#5b21b6' }}>{s.title}</h3>
                  <p style={{ fontSize: '.875rem' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-banner">
            <h2>Work With Us</h2>
            <p>We take on a small number of engagements at a time. If your challenge is interesting, we would like to hear about it.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Start a Conversation →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
