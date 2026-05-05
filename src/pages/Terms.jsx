import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const LAST_UPDATED = 'May 4, 2026'

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Use"
        description="The terms that govern your use of the Ciyahi Limited website."
        path="/terms"
      />

      <section className="page-hero">
        <div className="page-hero-blob blob-hero-1" />
        <div className="page-hero-blob blob-hero-2" />
        <div className="container">
          <div className="page-hero-content">
            <div className="label">Legal</div>
            <h1>Terms of Use</h1>
            <p style={{ maxWidth: '560px', margin: '0 auto', fontSize: '1.0625rem' }}>
              The rules for using this website. Our products operate under separate agreements.
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
              These Terms of Use (&quot;<strong>Terms</strong>&quot;) govern your access to and use of <a
                href="https://ciyahi.com">ciyahi.com</a> (the &quot;<strong>Site</strong>&quot;), operated by
              Ciyahi Limited (&quot;<strong>Ciyahi</strong>,&quot; &quot;<strong>we</strong>,&quot;
              &quot;<strong>us</strong>&quot;). By accessing the Site, you agree to these Terms. If you do not
              agree, please do not use the Site.
            </p>
            <p>
              These Terms apply to this marketing website only. Use of any Ciyahi product — including
              InvoAIce.io — is governed by a separate product agreement, order form, or master services
              agreement entered into directly with us.
            </p>

            <h2 style={h2Style}>About This Site</h2>
            <p>
              The Site is provided for general informational purposes. It describes Ciyahi, our services, and
              our products. Nothing on the Site constitutes a binding offer to provide services, a guarantee
              of results, or financial, legal, tax, or regulatory advice.
            </p>

            <h2 style={h2Style}>Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul style={ulStyle}>
              <li>Use the Site in any way that violates applicable law.</li>
              <li>
                Attempt to interfere with the Site&rsquo;s operation, probe for vulnerabilities, or bypass
                security controls. Responsible vulnerability disclosure is welcome — email{' '}
                <a href="mailto:info@ciyahi.com">info@ciyahi.com</a>.
              </li>
              <li>
                Submit false or misleading information through any contact form, or impersonate another
                person.
              </li>
              <li>
                Scrape, bulk-download, or use automated means to harvest content, except for legitimate
                indexing by general-purpose search engines respecting our robots.txt.
              </li>
              <li>
                Use the Site or its content to train commercial machine learning models without our prior
                written permission.
              </li>
            </ul>

            <h2 style={h2Style}>Intellectual Property</h2>
            <p>
              The Site, including its design, text, logos, graphics, and code, is owned by Ciyahi or its
              licensors and is protected by intellectual property laws. &quot;Ciyahi,&quot; the Ciyahi logo,
              &quot;InvoAIce,&quot; &quot;CovenAI,&quot; &quot;ReceivAI,&quot; and &quot;ProcurAI&quot; are
              trademarks of Ciyahi Limited. Other names mentioned on the Site (Oracle, SAP, NetSuite,
              MuleSoft, Boomi, Microsoft, AWS, etc.) are trademarks of their respective owners and are used
              for identification purposes only; no affiliation or endorsement is implied.
            </p>
            <p>
              You may view, share, and print pages from the Site for personal or internal business reference,
              but you may not republish, modify, or commercially exploit any content without our prior written
              permission.
            </p>

            <h2 style={h2Style}>Forward-Looking Statements</h2>
            <p>
              The Site may include forward-looking statements about our products, roadmap, performance
              targets, or business plans (for example, planned launches, expected implementation timelines, or
              performance metrics). These statements are based on current expectations and assumptions and are
              subject to change. We make no guarantee that any planned product, feature, milestone, or outcome
              will be achieved as described.
            </p>

            <h2 style={h2Style}>Third-Party Links and Services</h2>
            <p>
              The Site may contain links to third-party websites or services (including invoaice.io and
              partner platforms). We are not responsible for the content, accuracy, or practices of those
              third parties. Following a link from this Site is at your own risk.
            </p>

            <h2 style={h2Style}>No Warranty</h2>
            <p>
              The Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis without
              warranties of any kind, whether express, implied, statutory, or otherwise, to the maximum extent
              permitted by law. We do not warrant that the Site will be uninterrupted, error-free, or free of
              harmful components, or that any information on it is current, accurate, or complete.
            </p>

            <h2 style={h2Style}>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Ciyahi will not be liable for any indirect,
              incidental, special, consequential, exemplary, or punitive damages arising out of or related to
              your use of the Site, including loss of profits, revenue, data, or goodwill, even if we have
              been advised of the possibility of such damages. Our total cumulative liability arising from
              your use of the Site is limited to one hundred US dollars (US$100).
            </p>
            <p>
              Nothing in these Terms limits liability that cannot be limited under applicable law (for
              example, liability for fraud or for death or personal injury caused by negligence).
            </p>

            <h2 style={h2Style}>Indemnification</h2>
            <p>
              You agree to indemnify and hold Ciyahi and its officers, directors, employees, and agents
              harmless from any claim, demand, or damages, including reasonable attorneys&rsquo; fees,
              arising out of your breach of these Terms or your misuse of the Site.
            </p>

            <h2 style={h2Style}>Privacy</h2>
            <p>
              Your use of the Site is also subject to our <Link to="/privacy">Privacy Policy</Link>, which is
              incorporated into these Terms by reference.
            </p>

            <h2 style={h2Style}>Changes</h2>
            <p>
              We may update these Terms from time to time. The &quot;Last updated&quot; date indicates when
              they were last revised. Continued use of the Site after changes are posted means you accept the
              updated Terms.
            </p>

            <h2 style={h2Style}>Governing Law and Disputes</h2>
            <p>
              These Terms are governed by the laws of the State of Delaware, USA, without regard to its
              conflict of laws principles. Any dispute arising out of or relating to the Site or these Terms
              shall be brought exclusively in the state or federal courts located in Delaware, and you consent
              to the personal jurisdiction of those courts. If you are a consumer in the UK or EU, this
              choice of law and forum does not deprive you of mandatory protections under your local law.
            </p>

            <h2 style={h2Style}>Contact</h2>
            <p>
              Questions about these Terms? Email <a href="mailto:info@ciyahi.com">info@ciyahi.com</a>.
            </p>

            <p style={{ marginTop: '2.5rem', padding: '1rem 1.25rem', background: '#f8f8fd', borderLeft: '3px solid #7c3aed', borderRadius: '0 8px 8px 0', fontSize: '.875rem', color: '#475569', fontStyle: 'italic' }}>
              These Terms apply to the Ciyahi marketing website only. Use of any Ciyahi product is governed by
              a separate written agreement.
            </p>

            <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/privacy" className="btn btn-outline">View Privacy Policy →</Link>
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
