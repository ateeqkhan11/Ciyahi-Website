import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo" style={{ display: 'inline-flex' }}>
              <img src="/assets/images/logo.png" alt="Ciyahi" className="nav-logo-img nav-logo-img--dark" />
            </Link>
            <p>Outcome-driven AI and technology services. Founder-led. Built to last.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">AI Automation</Link></li>
              <li><Link to="/services">AP Automation</Link></li>
              <li><Link to="/services">Integration</Link></li>
              <li><Link to="/services">IT Advisory</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/insights">Insights</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><Link to="/contact">Schedule a Call</Link></li>
              <li><a href="mailto:info@ciyahi.com">info@ciyahi.com</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ciyahi Limited All rights reserved. Incorporated in Delaware, USA.</p>
          <div className="social-links"><a href="#" className="social-link">in</a></div>
        </div>
      </div>
    </footer>
  )
}

