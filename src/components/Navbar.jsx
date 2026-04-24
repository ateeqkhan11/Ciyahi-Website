import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMobileOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="nav-wrap">
          <Link to="/" className="nav-logo" onClick={close}>
            <img src="/assets/images/logo.png" alt="Ciyahi" className="nav-logo-img" />
          </Link>
          <ul className="nav-links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/industries">Industries</NavLink></li>
            <li><NavLink to="/insights">Insights</NavLink></li>
            <li><NavLink to="/contact" className="nav-cta">Schedule a Call</NavLink></li>
          </ul>
          <button
            className="nav-toggle"
            id="navToggle"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px,5px)' : '' }} />
            <span style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px,-5px)' : '' }} />
          </button>
        </div>
      </nav>
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`} id="mobileNav">
        <NavLink to="/" end onClick={close}>Home</NavLink>
        <NavLink to="/services" onClick={close}>Services</NavLink>
        <NavLink to="/products" onClick={close}>Products</NavLink>
        <NavLink to="/about" onClick={close}>About</NavLink>
        <NavLink to="/industries" onClick={close}>Industries</NavLink>
        <NavLink to="/insights" onClick={close}>Insights</NavLink>
        <NavLink to="/contact" onClick={close}>Schedule a Call</NavLink>
      </div>
    </>
  )
}
