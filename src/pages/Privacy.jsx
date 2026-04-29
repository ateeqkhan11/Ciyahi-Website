import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const LAST_UPDATED = 'April 29, 2026'

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="How Ciyahi Limited collects, uses, and protects your personal information."
        path="/privacy"
      />

      <section className="page-hero">
        <div className="page-hero-blob blob-hero-1" />
        <div className="page-hero-blob blob-hero-2" />
        <div className="container">
          <div className="page-hero-content">
            <div className="label">Legal</div>
            <h1>Privacy Policy</h1>
            <p style={{ maxWidth: '560px', margin: '0 auto', fontSize: '1.0625rem' }}>
              How we handle the information you share with us — written in plain English.
            </p>
            <p style={{ marginTop: '1rem', fontSize: '.85rem', color: 'var(--tm)' }}>
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '780px' }}>
          <article style={{ fontSize: '1rem', lineHeight: 1.75, color: '#374151' }}>
            <p>
              This Privacy Policy explains how Ciyahi Limited (&quot;<strong>Ciyahi</strong>,&quot; &quot;<strong>we</strong>,&quot;
              &quot;<strong>us</strong>,&quot; or &quot;<strong>our</strong>&quot;) collects, uses, and shares personal
              information when you visit <a href="https://ciyahi.com">ciyahi.com</a> (the &quot;Site&quot;) or contact
              us through the Site. It applies to this marketing website only. Our products — including <a
                href="https://www.invoaice.io" target="_blank" rel="noreferrer">InvoAIce.io</a> — operate under
              their own product privacy notices and data processing terms.
            </p>

            <h2 style={h2Style}>Who We Are</h2>
            <p>
              Ciyahi Limited is a Delaware C-Corporation with founders in the United States and the United
              Kingdom. A UK operating subsidiary is planned. For the purposes of UK / EU GDPR, the data
              controller for information collected through this Site is Ciyahi Limited.
            </p>

            <h2 style={h2Style}>What We Collect</h2>
            <p>We only collect information that you choose to give us. Specifically:</p>
            <ul style={ulStyle}>
              <li>
                <strong>Contact form submissions:</strong> first name, last name, work email, company name
                (optional), the service area you selected, and the message you write to us.
              </li>
              <li>
                <strong>Email correspondence:</strong> if you email us at info@ciyahi.com or careers@ciyahi.com,
                we receive your email address and the contents of your message.
              </li>
              <li>
                <strong>Basic technical information:</strong> our hosting provider (AWS) automatically receives
                IP addresses and standard request logs for security and performance purposes. We do not run
                marketing analytics or advertising trackers on this Site.
              </li>
            </ul>
            <p>
              We do not knowingly collect information from children under 16. If you believe a child has
              submitted information, please contact us and we will delete it.
            </p>

            <h2 style={h2Style}>Why We Use It</h2>
            <ul style={ulStyle}>
              <li>To respond to your enquiry and schedule conversations you have requested.</li>
              <li>To evaluate fit for design-partner programs, pilots, or commercial engagements.</li>
              <li>To process job applications you send to careers@ciyahi.com.</li>
              <li>To keep the Site secure, available, and free from abuse.</li>
              <li>To comply with our legal obligations.</li>
            </ul>
            <p>
              The legal bases we rely on are your consent (when you submit a form), our legitimate interest in
              running and improving our business, and where applicable, the steps necessary to enter into a
              contract with you.
            </p>

            <h2 style={h2Style}>Service Providers</h2>
            <p>
              We use a small number of trusted service providers who process information on our behalf:
            </p>
            <ul style={ulStyle}>
              <li>
                <strong>Web3Forms</strong> — delivers our contact form submissions to our inbox. Submissions
                are transmitted to their infrastructure when you click &quot;Send.&quot;
              </li>
              <li>
                <strong>Amazon Web Services (Amplify Hosting)</strong> — hosts the Site and handles standard
                request logging.
              </li>
              <li>
                <strong>Email infrastructure</strong> — used to send and receive correspondence with you.
              </li>
            </ul>
            <p>
              We do not sell your personal information. We do not share it with advertisers. We do not use
              cross-site tracking.
            </p>

            <h2 style={h2Style}>International Transfers</h2>
            <p>
              Because we operate across the United States and the United Kingdom, your information may be
              transferred to, stored in, or processed in either jurisdiction. Where personal information is
              transferred from the UK or EEA to the United States, we rely on appropriate safeguards such as
              Standard Contractual Clauses and the UK Addendum.
            </p>

            <h2 style={h2Style}>How Long We Keep It</h2>
            <p>
              We keep enquiry information for as long as is reasonably needed to follow up with you, plus a
              limited record-keeping period afterwards (typically up to 24 months). You can ask us to delete
              your information sooner — see &quot;Your Rights&quot; below.
            </p>

            <h2 style={h2Style}>Your Rights</h2>
            <p>
              Depending on where you live, you may have the right to access, correct, delete, port, or
              restrict our use of your personal information, and to object to certain types of processing. If
              you are in California, you may have additional rights under the CCPA / CPRA, including the right
              to know what we have collected and to opt out of any &quot;sale&quot; or &quot;sharing&quot; (we do
              neither). If you are in the UK or EEA, you may have additional rights under UK GDPR / EU GDPR.
            </p>
            <p>
              To exercise any of these rights, email{' '}
              <a href="mailto:info@ciyahi.com">info@ciyahi.com</a> with the subject line &quot;Privacy
              Request.&quot; We will respond within the timeframes required by applicable law (typically 30
              days).
            </p>

            <h2 style={h2Style}>Cookies</h2>
            <p>
              This Site does not currently set marketing or analytics cookies. Your browser may store a small
              amount of state for technical reasons (for example, the page route you are on). If we add
              optional analytics or marketing cookies in the future, we will request your consent first where
              required by law.
            </p>

            <h2 style={h2Style}>Security</h2>
            <p>
              We use HTTPS, modern browser security headers, and reasonable technical and organisational
              measures to protect personal information. No system is perfectly secure; if you have a concern,
              please contact us promptly.
            </p>

            <h2 style={h2Style}>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top
              indicates when it was last revised. Material changes will be highlighted on the Site.
            </p>

            <h2 style={h2Style}>Contact</h2>
            <p>
              Questions about this Policy or your personal information? Reach us at{' '}
              <a href="mailto:info@ciyahi.com">info@ciyahi.com</a>.
            </p>

            <p style={{ marginTop: '2.5rem', padding: '1rem 1.25rem', background: '#f8f8fd', borderLeft: '3px solid #7c3aed', borderRadius: '0 8px 8px 0', fontSize: '.875rem', color: '#475569', fontStyle: 'italic' }}>
              This Policy applies to the Ciyahi marketing website only. Use of our products is governed by
              separate product agreements.
            </p>

            <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/terms" className="btn btn-outline">View Terms of Use →</Link>
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

const h2Style = {
  fontSize: '1.25rem',
  marginTop: '2.5rem',
  marginBottom: '.75rem',
  color: '#1e2d3d',
}

const ulStyle = {
  paddingLeft: '1.25rem',
  marginBottom: '1rem',
}
