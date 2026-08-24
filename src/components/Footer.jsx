import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ borderBottom: '1px solid var(--b)', paddingBottom: '3rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', marginBottom: '1rem', textDecoration: 'none' }}>
              <span className="nav-logo-mark" aria-hidden="true" />
              <span style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 700,
                fontSize: '1.25rem',
                letterSpacing: '-.04em',
                color: 'var(--ink)',
              }}>
                Ciyahi
              </span>
            </Link>
            <p style={{ maxWidth: '300px', fontSize: '.875rem', color: 'var(--tm)', lineHeight: 1.7, margin: 0 }}>
              Enterprise AI implementation. We design, build, and ship AI systems. Flagship —{' '}
              <a href="https://www.invoaice.io" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', fontWeight: 500 }}>InvoAIce.io</a>
              {' '}— live in production.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Schedule a Call →
          </Link>
        </div>

        <div className="footer-grid footer-grid-4">
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">AI Implementation & Delivery</Link></li>
              <li><Link to="/services">AI Agent & Harness Development</Link></li>
              <li><Link to="/services">AI Strategy & Advisory</Link></li>
              <li><Link to="/services">Process Automation with LLMs</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li>
                <Link to="/invoaice">
                  InvoAIce story
                </Link>
              </li>
              <li>
                <a href="https://www.invoaice.io" target="_blank" rel="noreferrer">
                  InvoAIce.io
                  <span style={{ display: 'inline-block', marginLeft: '.5rem', fontSize: '.65rem', fontWeight: 700, color: 'var(--live)', letterSpacing: '.05em', textTransform: 'uppercase', verticalAlign: 'middle' }}>Live</span>
                </a>
              </li>
              <li><Link to="/products">Platform roadmap</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/user-stories">User Stories</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul>
              <li><a href="mailto:info@ciyahi.com">info@ciyahi.com</a></li>
              <li><Link to="/contact">Schedule a Call</Link></li>
              <li><Link to="/contact?dp=1">Apply: Design Partner</Link></li>
              <li><a href="https://www.invoaice.io" target="_blank" rel="noreferrer">Visit InvoAIce.io</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ciyahi Limited. Incorporated in Delaware, USA.</p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link to="/privacy" style={{ fontSize: '.8125rem', color: 'var(--tm)', textDecoration: 'none' }}>Privacy</Link>
            <Link to="/terms" style={{ fontSize: '.8125rem', color: 'var(--tm)', textDecoration: 'none' }}>Terms</Link>
            <div className="social-links">
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
