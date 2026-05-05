import { useEffect, useState } from 'react'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import { buildBreadcrumb } from '../seo/schema'

const breadcrumbSchema = buildBreadcrumb([
  { name: 'Contact', path: '/contact' },
])

export default function Contact() {
  const [step, setStep] = useState(0)
  const [service, setService] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  useEffect(() => { document.title = 'Contact — Ciyahi Limited' }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      })
      const json = await res.json()
      if (json.success) { setStatus('sent'); e.target.reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const services = [
    { id: 'ap', icon: '📄', label: 'AP Automation' },
    { id: 'ai', icon: '🤖', label: 'AI Automation' },
    { id: 'integration', icon: '🔗', label: 'Integration Modernization' },
    { id: 'advisory', icon: '🧭', label: 'IT Strategy & Advisory' },
    { id: 'product', icon: '🚀', label: 'InvoAIce.io / Products' },
    { id: 'other', icon: '💬', label: 'Something Else' },
  ]

  return (
    <>
      <SEO
        title="Contact Ciyahi · Apply for Design Partner Program"
        path="/contact"
        description="Apply for the InvoAIce Design Partner Program. 60 days completely free, 5 spots only, live in 4 weeks. Or schedule a strategy call with the founders."
        keywords="InvoAIce design partner, AP automation pilot, free AP automation trial, finance automation strategy call, Ciyahi contact"
      />
      <JsonLd schema={breadcrumbSchema} />
      <section className="page-hero">
        <div className="page-hero-blob blob-hero-1" />
        <div className="page-hero-blob blob-hero-2" />
        <div className="container">
          <div className="label">Get in Touch</div>
          <h1>Schedule a Strategy Call</h1>
          <p className="hero-sub" style={{ maxWidth: '540px' }}>Tell us about your challenge. We&rsquo;ll come prepared with insights &mdash; not a sales pitch.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }}>

            {/* LEFT — Contact Info */}
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Talk directly to the founders</h2>
              <p style={{ color: 'var(--ts)', marginBottom: '2rem' }}>Every conversation starts with a founder &mdash; not an account manager. We&rsquo;ll understand your situation before we recommend anything.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="card" style={{ padding: '1.25rem' }}>
                  <strong>Email</strong><br />
                  <a href="mailto:info@ciyahi.com" style={{ color: 'var(--indigo)' }}>info@ciyahi.com</a>
                </div>
                <div className="card" style={{ padding: '1.25rem' }}>
                  <strong>Response Time</strong><br />
                  <span style={{ color: 'var(--ts)' }}>Within 1 business day</span>
                </div>
                <div className="card" style={{ padding: '1.25rem' }}>
                  <strong>Offices</strong><br />
                  <span style={{ color: 'var(--ts)' }}>Delaware, USA &bull; United Kingdom</span>
                </div>
              </div>
            </div>

            {/* RIGHT — 2-Step Form */}
            <div>
              {status === 'sent' ? (
                <div className="cta-banner" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3>Message received!</h3>
                  <p>We&rsquo;ll be in touch within one business day.</p>
                  <button className="btn btn-primary" onClick={() => setStatus('idle')} style={{ marginTop: '1rem' }}>Send Another</button>
                </div>
              ) : (
                <div id="contactWizard">
                  {/* Progress */}
                  <div style={{ display: 'flex', gap: '.5rem', marginBottom: '2rem', alignItems: 'center' }}>
                    <div style={{ height: '4px', flex: 1, borderRadius: '4px', background: 'var(--gp)' }} />
                    <div style={{ height: '4px', flex: 1, borderRadius: '4px', background: step >= 1 ? 'var(--gp)' : 'var(--b)', transition: 'background .3s' }} />
                    <span style={{ fontSize: '.8rem', color: 'var(--ts)', whiteSpace: 'nowrap' }}>Step {step + 1} of 2</span>
                  </div>

                  {step === 0 && (
                    <div>
                      <h3 style={{ marginBottom: '.5rem' }}>What are you looking for?</h3>
                      <p style={{ color: 'var(--ts)', marginBottom: '1.5rem', fontSize: '.9rem' }}>Select the area that best fits your need</p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {services.map(s => (
                          <button
                            key={s.id}
                            onClick={() => { setService(s.label); setStep(1) }}
                            style={{
                              padding: '1rem',
                              border: `2px solid ${service === s.label ? 'var(--indigo)' : 'var(--b)'}`,
                              borderRadius: 'var(--rmd)',
                              background: service === s.label ? '#eef2ff' : '#fff',
                              cursor: 'pointer',
                              textAlign: 'left',
                              transition: 'all .2s',
                              fontSize: '.9rem',
                              fontWeight: 500,
                            }}
                          >
                            <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '.5rem' }}>{s.icon}</span>
                            {s.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <input type="hidden" name="access_key" value="143923a8-f358-4d5b-ae15-c45394139f47" />
                      <input type="hidden" name="subject" value="New Enquiry — Ciyahi Website" />
                      <input type="hidden" name="from_name" value="Ciyahi Website" />
                      <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                      <input type="hidden" name="service" value={service} />
                      <div>
                        <h3 style={{ marginBottom: '.25rem' }}>Tell us about your situation</h3>
                        <p style={{ color: 'var(--ts)', fontSize: '.9rem', marginBottom: '1.25rem' }}>Enquiring about: <strong>{service}</strong> &nbsp;<button type="button" onClick={() => setStep(0)} style={{ background: 'none', border: 'none', color: 'var(--indigo)', cursor: 'pointer', fontSize: '.85rem' }}>Change</button></p>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="form-group">
                          <label className="form-label" htmlFor="contact-firstName">First Name *</label>
                          <input
                            id="contact-firstName"
                            className="form-input"
                            name="firstName"
                            type="text"
                            autoComplete="given-name"
                            required
                            aria-required="true"
                            placeholder="Jane"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="contact-lastName">Last Name *</label>
                          <input
                            id="contact-lastName"
                            className="form-input"
                            name="lastName"
                            type="text"
                            autoComplete="family-name"
                            required
                            aria-required="true"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-email">Work Email *</label>
                        <input
                          id="contact-email"
                          className="form-input"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          aria-required="true"
                          placeholder="you@company.com"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-company">Company</label>
                        <input
                          id="contact-company"
                          className="form-input"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          placeholder="Your company name"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-message">Tell us about your challenge *</label>
                        <textarea
                          id="contact-message"
                          className="form-input"
                          name="message"
                          required
                          aria-required="true"
                          rows={4}
                          placeholder="Briefly describe what you're trying to solve..."
                          style={{ resize: 'vertical' }}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ marginTop: '.5rem' }}>
                        {status === 'sending' ? 'Sending...' : 'Send Message \u2192'}
                      </button>
                      {status === 'error' && <p style={{ color: '#ef4444', fontSize: '.875rem' }}>Something went wrong. Please email info@ciyahi.com directly.</p>}
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

