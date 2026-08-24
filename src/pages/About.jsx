import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Globe, Building2, Award, Calendar, Trophy } from 'lucide-react'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import { buildBreadcrumb } from '../seo/schema'

const breadcrumbSchema = buildBreadcrumb([
  { name: 'About', path: '/about' },
])

const founders = [
  {
    name: 'Iqbal Shaikh',
    tag: 'Director & Co-Founder',
    bio: "Iqbal leads Ciyahi as Director — responsible for the company's commercial strategy, client engagement, and day-to-day operations. He is the principal point of contact for Ciyahi clients across the UK, Europe, and the United States, and signs all commercial agreements on behalf of Ciyahi Limited.",
    initials: 'IS',
    gradient: 'linear-gradient(135deg,#1a9a9a,#22b0b0)',
  },
  {
    name: 'Ateequeullah Khan',
    tag: 'Non-Executive Director & Co-Founder',
    bio: "Ateeq is a non-executive co-founder and the technical conscience behind Ciyahi's product direction. Prior to Ciyahi, he spent 18 years leading enterprise technology delivery — including 20+ full-cycle AP Automation implementations across 25+ countries and an industry award for Best Designed AP Automation Solution & Implementation. That experience informs the long-term vision behind InvoAIce.io.",
    initials: 'AK',
    gradient: 'linear-gradient(135deg,#3a424e,#14161c)',
  },
]

const credentials = [
  { Icon: Globe, stat: '25+', label: 'Countries', desc: 'AP Automation and integration projects delivered across North America, Europe, Middle East & APAC.' },
  { Icon: Building2, stat: '20+', label: 'Enterprises', desc: 'Full-cycle AP Automation implementations delivered for enterprise clients globally.' },
  { Icon: Award, stat: '#1', label: 'Award', desc: "Founding team's AP automation work won an industry award for 'Best Designed Solution & Implementation' before Ciyahi was founded." },
  { Icon: Calendar, stat: '18', label: 'Years', desc: 'Hands-on enterprise technology leadership across AP automation, integration, and AI.' },
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
        title="About Ciyahi"
        path="/about"
        description="Ciyahi Limited is a Delaware C-Corporation delivering enterprise AI implementation — founded by practitioners with 18 years of enterprise technology experience across 25+ countries. Dual US / UK presence."
        keywords="Ciyahi, Ciyahi Limited, enterprise AI company, AI implementation founders, Delaware C-Corp AI, InvoAIce founders, Iqbal Shaikh, Ateequeullah Khan"
      />
      <JsonLd schema={breadcrumbSchema} />
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

          <div style={{ marginBottom: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div className="label" style={{ margin: '0 auto 0.625rem' }}>Founding Team Track Record</div>
              <p style={{ fontSize: '.9375rem', color: 'var(--ts)', maxWidth: '480px', margin: '0 auto' }}>
                Before founding Ciyahi, our team built and delivered enterprise solutions at scale. That experience is what you engage when you work with us.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1.5rem' }}>
              {credentials.map(c => (
                <div key={c.label} className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem', borderTop: '3px solid var(--accent)' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '.625rem' }}>
                    <c.Icon size={28} strokeWidth={1.6} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1.1, marginBottom: '.25rem', fontFamily: 'var(--font-display)' }}>{c.stat}</div>
                  <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#64748b', marginBottom: '.625rem' }}>{c.label}</div>
                  <p style={{ fontSize: '.8375rem', lineHeight: 1.65 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Industry recognition — high visibility */}
          <div className="about-award">
            <div className="about-award-icon" aria-hidden="true">
              <Trophy size={32} strokeWidth={1.6} />
            </div>
            <div className="about-award-body">
              <div className="about-award-label">Industry Recognition · Pre-Ciyahi</div>
              <h2 className="about-award-title">
                Recognised for &ldquo;Best Designed AP Automation Solution &amp; Implementation&rdquo;
              </h2>
              <p>
                An industry award presented to our founding team for AP automation work delivered{' '}
                <strong>before Ciyahi was founded</strong>. The same rigour, depth, and delivery instinct
                now shapes every Ciyahi engagement and product — including InvoAIce.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div style={{ maxWidth: '680px', marginBottom: '5rem' }}>
            <div className="label">Why We Exist</div>
            <h2 style={{ marginBottom: '1.5rem' }}>Enterprise AI should ship — not stall in consulting cycles.</h2>
            <p style={{ marginBottom: '1rem' }}>
              Long implementations. Vague outcomes. AI bolted on after the fact. Most enterprise technology
              still gets delivered the old way — a senior partner runs the pitch, a junior team delivers the project,
              and AI shows up as a marketing checkbox.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              We built Ciyahi to change that. Process automation with LLMs. Agents designed and implemented by the
              same founders who scoped the problem. Live in weeks — not a twelve-month IT programme.
            </p>
            <p>
              Insurance brokerage pipelines and InvoAIce in production are the proof. The same pattern applies
              wherever documents and decisions pile up.
            </p>
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
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: f.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.125rem', fontWeight: 700, color: '#fff', flexShrink: 0, boxShadow: '0 4px 14px rgba(13, 117, 117,.18)' }}>{f.initials}</div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.0625rem' }}>{f.name}</h3>
                    <span style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--accent-l)' }}>{f.tag}</span>
                  </div>
                </div>
                <p style={{ fontSize: '.9rem' }}>{f.bio}</p>
              </div>
            ))}
          </div>

          {/* Structure */}
          <div style={{ background: 'var(--paper-2)', borderRadius: '16px', padding: '3rem', marginBottom: '4rem', border: '1px solid #e2e8f0' }}>
            <div className="sec-head text-center" style={{ maxWidth: '420px', margin: '0 auto 2rem' }}>
              <div className="label">Structure</div>
              <h2 style={{ fontSize: '1.5rem' }}>How We Are Structured</h2>
            </div>
            <div className="grid-3">
              {structure.map(s => (
                <div key={s.title} style={{ textAlign: 'center', padding: '1rem' }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: '.5rem', color: 'var(--accent)' }}>{s.title}</h3>
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
