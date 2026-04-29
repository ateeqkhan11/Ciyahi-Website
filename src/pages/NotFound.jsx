import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  useEffect(() => { document.title = 'Page Not Found — Ciyahi Limited' }, [])
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '6rem 2rem 4rem' }}>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." noindex />
      <div>
        <div style={{ fontSize: '6rem', fontWeight: 800, background: 'linear-gradient(135deg,#4f46e5,#0d9488)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1, marginBottom: '1.5rem' }}>404</div>
        <h1 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#1e2d3d' }}>This page doesn&rsquo;t exist</h1>
        <p style={{ maxWidth: '420px', margin: '0 auto 2.5rem', color: '#5a6a7e' }}>The page you&rsquo;re looking for may have moved or never existed.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">Go to Homepage &rarr;</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}

