import React, { useState, useRef, useEffect } from 'react'

export default function CurvedCarousel({ items }) {
  const [active, setActive] = useState(2)
  const containerRef = useRef(null)

  const total = items.length
  const radius = 360
  const fov = 62

  const handleWheel = e => {
    e.preventDefault()
    if (e.deltaY > 0 || e.deltaX > 0) setActive(i => Math.min(i + 1, total - 1))
    else setActive(i => Math.max(i - 1, 0))
  }

  useEffect(() => {
    const el = containerRef.current
    if (el) el.addEventListener('wheel', handleWheel, { passive: false })
    return () => el && el.removeEventListener('wheel', handleWheel)
  }, [total])

  const getCardStyle = i => {
    const diff = i - active
    const angle = diff * (fov / 3)
    const rad = angle * Math.PI / 180
    const x = Math.sin(rad) * radius
    const z = Math.cos(rad) * radius - radius
    const scale = 0.58 + 0.42 * Math.max(0, 1 - Math.abs(diff) * 0.35)
    const opacity = Math.max(0.18, 1 - Math.abs(diff) * 0.28)
    const blur = Math.abs(diff) * 1.8
    const isActive = i === active

    return {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: `translate3d(calc(-50% + ${x}px), -50%, ${z}px) scale(${scale})`,
      zIndex: 100 - Math.abs(diff) * 10,
      opacity,
      filter: blur > 0 ? `blur(${blur}px)` : 'none',
      transition: 'all .55s cubic-bezier(0.16,1,0.3,1)',
      pointerEvents: isActive ? 'auto' : 'none',
      cursor: 'pointer',
    }
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: 640,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: 1800,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 200,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse 90% 70% at 50% 50%, transparent 48%, rgba(8,8,8,.9) 100%)',
        }}
      />
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 140, background: 'linear-gradient(90deg,var(--black),transparent)', zIndex: 200, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 140, background: 'linear-gradient(270deg,var(--black),transparent)', zIndex: 200, pointerEvents: 'none' }} />

      {items.map((item, i) => (
        <div key={i} style={getCardStyle(i)} onClick={() => setActive(i)}>
          <div
            style={{
              width: 540,
              background: i === active
                ? 'linear-gradient(135deg,rgba(123,47,247,.18),rgba(196,30,58,.12))'
                : 'rgba(255,255,255,.03)',
              border: `1px solid ${i === active ? 'rgba(123,47,247,.5)' : 'rgba(255,255,255,.08)'}`,
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow: i === active ? '0 0 60px rgba(123,47,247,.25), 0 30px 80px rgba(0,0,0,.6)' : '0 10px 40px rgba(0,0,0,.4)',
            }}
          >
            <div style={{ height: 220, position: 'relative', overflow: 'hidden' }}>
              <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .5s', transform: i === active ? 'scale(1.05)' : 'scale(1)' }} onError={e => e.target.style.display = 'none'} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,transparent 40%,rgba(8,8,8,.9) 100%)' }} />
              <span style={{ position: 'absolute', top: 16, left: 16, fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 10, letterSpacing: 3, color: '#fff', background: item.color || 'var(--purple)', padding: '5px 12px', borderRadius: 2, textTransform: 'uppercase' }}>{item.tag}</span>
            </div>
            <div style={{ padding: '24px 28px 28px' }}>
              <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 20, color: '#fff', marginBottom: 10, lineHeight: 1.3 }}>{item.title}</h3>
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: 'rgba(255,255,255,.5)', lineHeight: 1.7 }}>{item.desc}</p>
              {i === active && item.href && (
                <a
                  href={item.href}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 16, fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: 3, color: 'var(--purple2)', textDecoration: 'none', textTransform: 'uppercase', transition: 'gap .2s' }}
                  onMouseEnter={e => e.currentTarget.style.gap = '14px'}
                  onMouseLeave={e => e.currentTarget.style.gap = '8px'}
                >
                  EXPLORE →
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      <div style={{ position: 'absolute', left: '50%', bottom: 22, transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 210 }}>
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: i === active ? 28 : 8,
              height: 8,
              borderRadius: 999,
              border: 'none',
              background: i === active ? 'var(--purple2)' : 'rgba(255,255,255,.2)',
              transition: 'all .35s cubic-bezier(0.16,1,0.3,1)',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  )
}
