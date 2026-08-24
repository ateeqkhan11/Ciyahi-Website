import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMobileOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="nav-wrap">
          <Link to="/" className="nav-logo" onClick={close} style={{ textDecoration: 'none' }}>
            <span className="nav-logo-mark" aria-hidden="true" />
            Ciyahi
          </Link>
          <ul className="nav-links">
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/user-stories">User Stories</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
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
        <NavLink to="/services" onClick={close}>Services</NavLink>
        <NavLink to="/products" onClick={close}>Products</NavLink>
        <NavLink to="/user-stories" onClick={close}>User Stories</NavLink>
        <NavLink to="/about" onClick={close}>About</NavLink>
        <NavLink
          to="/contact"
          onClick={close}
          className="nav-cta"
          style={{ marginTop: '.5rem', textAlign: 'center', display: 'block' }}
        >
          Schedule a Call
        </NavLink>
      </div>
    </>
  )
}
