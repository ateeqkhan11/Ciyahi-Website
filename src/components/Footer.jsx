import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Brand strip */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,.07)', paddingBottom: '3.5rem', marginBottom: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '1rem', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 800, fontSize: '1.375rem', letterSpacing: '-.04em', background: 'linear-gradient(135deg,#a78bfa,#38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                CIYAHI
              </span>
            </Link>
            <p style={{ maxWidth: '320px', fontSize: '.875rem', color: 'rgba(255,255,255,.4)', lineHeight: 1.7, margin: 0 }}>
              AI-native finance automation. Our flagship — <a href="https://www.invoaice.io" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,.7)', textDecoration: 'none', fontWeight: 500 }}>InvoAIce.io</a> — is in production today. Aspiring to cover the full P2P + O2C cycle.
            </p>
          </div>
          <Link to="/contact?dp=1" className="btn btn-primary" style={{ background: 'var(--gp)', boxShadow: 'var(--shadow-violet-sm)' }}>
            Apply for Design Partner Program →
          </Link>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">AP Automation</Link></li>
              <li><Link to="/services">AI for Finance Operations</Link></li>
              <li><Link to="/services">Finance ERP Integration</Link></li>
              <li><Link to="/services">Finance AI Strategy &amp; Advisory</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li>
                <a href="https://www.invoaice.io" target="_blank" rel="noreferrer">
                  InvoAIce.io
                  <span style={{ display: 'inline-block', marginLeft: '.5rem', fontSize: '.65rem', fontWeight: 700, color: '#4ade80', background: 'rgba(74,222,128,.12)', border: '1px solid rgba(74,222,128,.25)', padding: '.1rem .45rem', borderRadius: '4px', letterSpacing: '.05em', textTransform: 'uppercase', verticalAlign: 'middle' }}>Live</span>
                </a>
              </li>
              <li><Link to="/products">View Full Roadmap</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul>
              <li><a href="mailto:info@ciyahi.com">info@ciyahi.com</a></li>
              <li><Link to="/contact?dp=1">Apply: Design Partner</Link></li>
              <li><a href="https://www.invoaice.io" target="_blank" rel="noreferrer">Visit InvoAIce.io</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Careers</h4>
            <ul>
              <li><Link to="/contact">We&rsquo;re Hiring</Link></li>
              <li>
                {/* No dedicated careers inbox yet — route to info@ with a clear subject */}
                <a href="mailto:info@ciyahi.com?subject=Career%20Enquiry%20%E2%80%94%20Ciyahi%20Website">Career enquiries</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ciyahi Limited. Incorporated in Delaware, USA.</p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/privacy"
              style={{ fontSize: '.8125rem', color: 'rgba(255,255,255,.55)', textDecoration: 'none' }}
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              style={{ fontSize: '.8125rem', color: 'rgba(255,255,255,.55)', textDecoration: 'none' }}
            >
              Terms
            </Link>
            <div className="social-links">
              {/* TODO: replace with the real Ciyahi LinkedIn company URL once the page is live */}
              <a
                href="https://www.linkedin.com/company/ciyahi-limited"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="Ciyahi on LinkedIn"
              >
                in
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
