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
            <p style={{ maxWidth: '280px', fontSize: '.875rem', color: 'rgba(255,255,255,.4)', lineHeight: 1.7, margin: 0 }}>
              Outcome-driven AI products &amp; technology services. Founder-led. Built to last.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary" style={{ background: 'var(--gp)', boxShadow: 'var(--shadow-violet-sm)' }}>
            Schedule a Free Call →
          </Link>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">AI-Driven Automation</Link></li>
              <li><Link to="/services">AP Automation</Link></li>
              <li><Link to="/services">Integration Modernization</Link></li>
              <li><Link to="/services">IT Strategy &amp; Advisory</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><a href="https://www.invoaice.io" target="_blank" rel="noreferrer">InvoAIce.io</a></li>
              <li><Link to="/products">ContractAI</Link></li>
              <li><Link to="/products">SpendIQ</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/insights">Insights</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:info@ciyahi.com">info@ciyahi.com</a></li>
              <li><Link to="/contact">Schedule a Call</Link></li>
              <li><a href="https://www.invoaice.io" target="_blank" rel="noreferrer">InvoAIce.io</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Careers</h4>
            <ul>
              <li><Link to="/contact">We're Hiring</Link></li>
              <li><a href="mailto:careers@ciyahi.com">careers@ciyahi.com</a></li>
              <li><Link to="/about">Our Culture</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ciyahi Limited. Incorporated in Delaware, USA.</p>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">in</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
