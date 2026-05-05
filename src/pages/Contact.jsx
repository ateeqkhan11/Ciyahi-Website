import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Handshake, FileText, Bot, Link2, Compass, Rocket, MessageCircle } from 'lucide-react'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import { buildBreadcrumb } from '../seo/schema'

const breadcrumbSchema = buildBreadcrumb([
  { name: 'Contact', path: '/contact' },
])

// Service options shown in the step-0 picker. The first option (Design
// Partner Program) is also auto-selected when ?dp=1 is in the URL.
const services = [
  { id: 'designpartner', Icon: Handshake, label: 'Design Partner Program' },
  { id: 'ap', Icon: FileText, label: 'AP Automation' },
  { id: 'ai', Icon: Bot, label: 'AI for Finance Operations' },
  { id: 'integration', Icon: Link2, label: 'Finance ERP Integration' },
  { id: 'advisory', Icon: Compass, label: 'Finance AI Strategy & Advisory' },
  { id: 'product', Icon: Rocket, label: 'InvoAIce.io / Products' },
  { id: 'other', Icon: MessageCircle, label: 'Something Else' },
]

const DP_LABEL = 'Design Partner Program'

// Build the email subject Web3Forms will use, based on what the person enquired about.
function buildSubject(service) {
  if (service === DP_LABEL) return 'Interested in Design Partner Program — Ciyahi Website'
  if (service) return `Enquiry: ${service} — Ciyahi Website`
  return 'New Enquiry — Ciyahi Website'
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const isDP = searchParams.get('dp') === '1'

  const [step, setStep] = useState(isDP ? 1 : 0)
  const [service, setService] = useState(isDP ? DP_LABEL : '')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  useEffect(() => { document.title = 'Contact — Ciyahi Limited' }, [])

  // If the user lands here with ?dp=1, jump straight to the form pre-set for DP.
  useEffect(() => {
    if (isDP) {
      setStep(1)
      setService(DP_LABEL)
    }
  }, [isDP])

  const isDPFlow = service === DP_LABEL
  const subject = buildSubject(service)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      const json = await res.json()
      if (json.success) { setStatus('sent'); e.target.reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

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
          <h1>{isDPFlow ? 'Apply for the Design Partner Program' : 'Schedule a Strategy Call'}</h1>
          <p className="hero-sub" style={{ maxWidth: '560px' }}>
            {isDPFlow
              ? 'Tell us about your AP workflow. We come back within one business day with next steps.'
              : 'Tell us about your challenge. We’ll come prepared with insights — not a sales pitch.'}
          </p>
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
                  <h3>{isDPFlow ? 'Application received!' : 'Message received!'}</h3>
                  <p>
                    {isDPFlow
                      ? 'We have your interest in the Design Partner Program. A founder will reach out within one business day.'
                      : 'We’ll be in touch within one business day.'}
                  </p>
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
                        {services.map(s => {
                          const isSelected = service === s.label
                          const isDPOption = s.id === 'designpartner'
                          return (
                            <button
                              key={s.id}
                              onClick={() => { setService(s.label); setStep(1) }}
                              style={{
                                padding: '1rem',
                                border: `2px solid ${isSelected ? 'var(--indigo)' : (isDPOption ? 'rgba(91,33,182,.4)' : 'var(--b)')}`,
                                borderRadius: 'var(--rmd)',
                                background: isSelected ? '#eef2ff' : (isDPOption ? 'linear-gradient(135deg,rgba(91,33,182,.06),rgba(124,58,237,.08))' : '#fff'),
                                cursor: 'pointer',
                                textAlign: 'left',
                                transition: 'all .2s',
                                fontSize: '.9rem',
                                fontWeight: isDPOption ? 600 : 500,
                                color: isDPOption ? '#5b21b6' : 'inherit',
                              }}
                            >
                              <s.Icon size={28} strokeWidth={1.6} style={{ display: 'block', marginBottom: '.625rem', color: isDPOption ? '#5b21b6' : '#475569' }} />
                              {s.label}
                              {isDPOption && (
                                <span style={{ display: 'block', fontSize: '.7rem', fontWeight: 600, color: '#7c3aed', marginTop: '.25rem' }}>
                                  60 days free · 5 spots · Live in 4 weeks
                                </span>
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <input type="hidden" name="access_key" value="143923a8-f358-4d5b-ae15-c45394139f47" />
                      <input type="hidden" name="subject" value={subject} />
                      <input type="hidden" name="from_name" value="Ciyahi Website" />
                      <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                      <input type="hidden" name="service" value={service} />
                      <input type="hidden" name="enquiry_type" value={isDPFlow ? 'Design Partner Application' : 'General Enquiry'} />

                      {isDPFlow ? (
                        <div style={{ background: 'linear-gradient(135deg,rgba(91,33,182,.07),rgba(124,58,237,.08))', border: '1px solid rgba(91,33,182,.22)', borderRadius: '12px', padding: '1.125rem 1.25rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '.625rem', marginBottom: '.375rem' }}>
                            <Handshake size={22} strokeWidth={1.7} style={{ color: '#5b21b6', flexShrink: 0 }} />
                            <strong style={{ color: '#5b21b6', fontSize: '1rem' }}>Interested in Design Partner Program</strong>
                          </div>
                          <p style={{ fontSize: '.85rem', color: 'var(--ts)', margin: 0, lineHeight: 1.55 }}>
                            60 days completely free · 5 spots only · Live in 4 weeks. Tell us a bit about your AP workflow and a founder will reach out within one business day.
                          </p>
                          <div style={{ marginTop: '.625rem' }}>
                            <button type="button" onClick={() => setStep(0)} style={{ background: 'none', border: 'none', color: 'var(--indigo)', cursor: 'pointer', fontSize: '.8rem', padding: 0, textDecoration: 'underline' }}>
                              Change topic
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <h3 style={{ marginBottom: '.25rem' }}>Tell us about your situation</h3>
                          <p style={{ color: 'var(--ts)', fontSize: '.9rem', marginBottom: '0' }}>
                            Enquiring about: <strong>{service}</strong>
                            &nbsp;
                            <button type="button" onClick={() => setStep(0)} style={{ background: 'none', border: 'none', color: 'var(--indigo)', cursor: 'pointer', fontSize: '.85rem' }}>Change</button>
                          </p>
                        </div>
                      )}

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
                        <label className="form-label" htmlFor="contact-message">
                          {isDPFlow ? 'Tell us about your AP workflow *' : 'Tell us about your challenge *'}
                        </label>
                        <textarea
                          id="contact-message"
                          className="form-input"
                          name="message"
                          required
                          aria-required="true"
                          rows={4}
                          placeholder={isDPFlow
                            ? 'Roughly how many invoices a month, what ERP you run, and where the biggest pain is...'
                            : "Briefly describe what you're trying to solve..."}
                          style={{ resize: 'vertical' }}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ marginTop: '.5rem' }}>
                        {status === 'sending'
                          ? 'Sending...'
                          : (isDPFlow ? 'Submit Application →' : 'Send Message →')}
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
