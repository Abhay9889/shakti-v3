import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Arrow } from '../utils.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Solutions', to: '/solutions' },
    { label: 'About', to: '/about' },
    { label: 'Careers', to: '/careers' },
    { label: 'Blog', to: '/blog' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(1240px, calc(100% - 32px))',
        zIndex: 1200,
        border: '1px solid rgba(255,255,255,.18)',
        background: scrolled ? 'rgba(255,255,255,.16)' : 'rgba(255,255,255,.12)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        boxShadow: scrolled ? '0 16px 50px rgba(0,0,0,.18)' : 'none',
        transition: 'all .25s ease',
      }}
    >
      <div style={{ minHeight: 74, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, padding: '0 18px 0 22px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
          <div style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 1.28 + 'rem', fontWeight: 700, letterSpacing: 0.08 + 'em' }}>SHAKTI</div>
          <div style={{ fontSize: 0.66 + 'rem', color: 'var(--muted)', letterSpacing: 0.18 + 'em', textTransform: 'uppercase', marginTop: 2 }}>Live platform system</div>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {links.map(link => (
            <Link
              key={link.label}
              to={link.to}
              className="site-nav-link"
              style={{ color: location.pathname === link.to ? '#fff' : 'rgba(255,255,255,.72)' }}
            >
              {link.label}
            </Link>
          ))}

          <Link to="/demo" className="btn-primary" style={{ padding: '12px 18px' }}>
            Request Demo <Arrow size={14} />
          </Link>
        </div>
      </div>
    </nav>
  )
}
