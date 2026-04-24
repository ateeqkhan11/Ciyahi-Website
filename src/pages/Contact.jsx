import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [step, setStep] = useState(0)
  const [service, setService] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  useEffect(() => { document.title = 'Contact — Ciyahi Inc.' }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)
    try {
      const res = await fetch('https://formspree.io/f/xwkgpbqz', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      })
      if (res.ok) { setStatus('sent'); e.target.reset() }
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
                      <input type="hidden" name="service" value={service} />
                      <div>
                        <h3 style={{ marginBottom: '.25rem' }}>Tell us about your situation</h3>
                        <p style={{ color: 'var(--ts)', fontSize: '.9rem', marginBottom: '1.25rem' }}>Enquiring about: <strong>{service}</strong> &nbsp;<button type="button" onClick={() => setStep(0)} style={{ background: 'none', border: 'none', color: 'var(--indigo)', cursor: 'pointer', fontSize: '.85rem' }}>Change</button></p>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="form-group">
                          <label className="form-label">First Name *</label>
                          <input className="form-input" name="firstName" required placeholder="Ateeq" />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Last Name *</label>
                          <input className="form-input" name="lastName" required placeholder="Khan" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Work Email *</label>
                        <input className="form-input" name="email" type="email" required placeholder="you@company.com" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Company</label>
                        <input className="form-input" name="company" placeholder="Your company name" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Tell us about your challenge *</label>
                        <textarea className="form-input" name="message" required rows={4} placeholder="Briefly describe what you're trying to solve..." style={{ resize: 'vertical' }} />
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
