import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Industries() {
  useEffect(() => { document.title = 'Industries — Ciyahi Inc.' }, [])
  const industries = [
    { icon: '🏦', title: 'Financial Services & FinTech', desc: 'AP automation, compliance automation, and AI-driven financial operations for banks, insurers, and FinTech platforms.' },
    { icon: '🏥', title: 'Healthcare & Life Sciences', desc: 'Integration modernization, data interoperability, and AI automation for healthcare providers and life sciences organizations.' },
    { icon: '🏭', title: 'Manufacturing & Supply Chain', desc: 'ERP integration, supplier invoice automation, and supply chain visibility platforms for manufacturers.' },
    { icon: '🛒', title: 'Retail & E-Commerce', desc: 'Multi-channel integration, inventory management automation, and AI-driven demand forecasting for retail operations.' },
    { icon: '⚖️', title: 'Professional Services', desc: 'Technology due diligence, practice management automation, and AI strategy for law firms, consultancies, and advisory firms.' },
    { icon: '🏛️', title: 'Public Sector & Non-Profit', desc: 'Digital transformation, grant management automation, and compliance reporting systems for government and NGO organizations.' },
  ]
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-blob blob-hero-1" /><div className="page-hero-blob blob-hero-2" />
        <div className="container">
          <div className="label">Industries We Serve</div>
          <h1>Deep Expertise Across Regulated, Complex Industries</h1>
          <p className="hero-sub" style={{ maxWidth: '560px' }}>We work where technology complexity is highest and the cost of failure is real.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid-3" style={{ marginBottom: '5rem' }}>
            {industries.map(ind => (
              <div key={ind.title} className="card ind-card">
                <div className="card-icon">{ind.icon}</div>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
          <div className="cta-banner">
            <h2>Don&rsquo;t See Your Industry?</h2>
            <p>We work across sectors wherever there&rsquo;s an integration, automation, or AI challenge worth solving. Let&rsquo;s talk.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Schedule a Call &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
