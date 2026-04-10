import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const columns = [
    {
      title: 'Platform',
      links: [
        { label: 'Solutions', to: '/solutions' },
        { label: 'Demo', to: '/demo' },
        { label: 'Contact', to: '/contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', to: '/about' },
        { label: 'Careers', to: '/careers' },
        { label: 'Blog', to: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Privacy', to: '/coming-soon' },
        { label: 'Terms', to: '/coming-soon' },
        { label: 'Updates', to: '/coming-soon' },
      ],
    },
  ]

  return (
    <footer style={{ padding: '0 0 34px' }}>
      <div className="shell glass-card" style={{ padding: '34px 30px 24px' }}>
        <div className="footer-grid" style={{ gap: 28, paddingBottom: 28, borderBottom: '1px solid rgba(255,255,255,.14)' }}>
          <div>
            <div style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 1.8 + 'rem', fontWeight: 700, letterSpacing: 0.08 + 'em', marginBottom: 12 }}>SHAKTI</div>
            <p className="body-copy" style={{ maxWidth: 320 }}>
              A rebuilt live-media landing experience with a cleaner system shell, deeper motion, and a more advanced visual rhythm.
            </p>
          </div>

          {columns.map(column => (
            <div key={column.title}>
              <div className="eyebrow" style={{ marginBottom: 14 }}>{column.title}</div>
              {column.links.map(link => (
                <Link key={link.label} to={link.to} style={{ display: 'block', textDecoration: 'none', color: 'rgba(255,255,255,.84)', marginBottom: 10 }}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', paddingTop: 18 }}>
          <div style={{ color: 'rgba(255,255,255,.42)', fontSize: 0.86 + 'rem' }}>Copyright © 2026 Shakti. Rebuilt experience edition.</div>
          <div style={{ color: 'rgba(255,255,255,.42)', fontSize: 0.86 + 'rem' }}>Live visuals. Smooth flow. Advanced shell.</div>
        </div>
      </div>
    </footer>
  )
}
