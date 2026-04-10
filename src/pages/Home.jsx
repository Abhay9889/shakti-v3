import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal, Arrow, VIDEOS, MEDIA, AI_IMGS, api } from '../utils.jsx'

function LiveVideo({ src, opacity = 1, overlay }) {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <video autoPlay muted loop playsInline className="media-cover" style={{ opacity }}>
        <source src={src} type="video/mp4" />
      </video>
      {overlay && <div style={{ position: 'absolute', inset: 0, background: overlay }} />}
    </div>
  )
}

function SectionHeading({ eyebrow, title, copy, align = 'left' }) {
  return (
    <div className="reveal" style={{ maxWidth: 760, textAlign: align }}>
      <div className="eyebrow" style={{ marginBottom: 14 }}>{eyebrow}</div>
      <h2 className="title-lg" style={{ marginBottom: 18 }}>{title}</h2>
      {copy && <p className="body-copy">{copy}</p>}
    </div>
  )
}

function FAQList({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="glass-card" style={{ padding: 24 }}>
      {items.map((item, index) => (
        <div key={item.q} style={{ borderBottom: index < items.length - 1 ? '1px solid rgba(255,255,255,.08)' : 'none' }}>
          <button
            onClick={() => setOpen(open === index ? -1 : index)}
            style={{
              width: '100%',
              background: 'none',
              border: 'none',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 18,
              textAlign: 'left',
              padding: '20px 0',
            }}
          >
            <span style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 500, fontSize: 16, lineHeight: 1.45 }}>{item.q}</span>
            <span style={{ width: 30, height: 30, borderRadius: '50%', border: '1px solid rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: open === index ? 'rotate(45deg)' : 'none', transition: 'transform .25s ease' }}>+</span>
          </button>
          <div style={{ maxHeight: open === index ? 260 : 0, overflow: 'hidden', transition: 'max-height .3s ease' }}>
            <p className="body-copy" style={{ paddingBottom: 18 }}>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  useReveal()
  const [heroReady, setHeroReady] = useState(false)
  const [demo, setDemo] = useState({ email: '', loading: false, done: false })

  useEffect(() => {
    const timer = setTimeout(() => setHeroReady(true), 140)
    return () => clearTimeout(timer)
  }, [])

  const handleDemo = async e => {
    e.preventDefault()
    setDemo(s => ({ ...s, loading: true }))
    await api.submitDemo({
      name: 'Homepage lead',
      email: demo.email,
      company: '',
      role: '',
      size: '',
      message: 'Homepage quick demo request',
    })
    setDemo({ email: '', loading: false, done: true })
  }

  const modules = [
    {
      title: 'Neural Control Layer',
      copy: 'AI-powered orchestration for campaigns, operations, and customer actions.',
      media: AI_IMGS.analytics,
      accent: 'var(--accent)',
    },
    {
      title: 'Live Commerce Core',
      copy: 'Real-time payment flows, event handling, and high-volume performance tracking.',
      media: AI_IMGS.server,
      accent: 'var(--accent-3)',
    },
    {
      title: 'Experience Engine',
      copy: 'Content, CRM, and personalization tools designed to move fast across markets.',
      media: AI_IMGS.interface,
      accent: 'var(--accent-2)',
    },
  ]

  const features = [
    {
      title: 'Signal-rich dashboards',
      copy: 'Every metric, trend, and action is surfaced in a cleaner, faster command layer.',
      media: MEDIA.dataTransmission,
      type: 'video',
    },
    {
      title: 'Adaptive launch systems',
      copy: 'Launch architecture shaped for experimentation, scale, and constant iteration.',
      media: MEDIA.solarSystem,
      type: 'video',
    },
    {
      title: 'Visual intelligence',
      copy: 'Modern interfaces with real live imagery, motion, and layered depth throughout.',
      media: MEDIA.cubeImage,
      type: 'image',
    },
    {
      title: 'Operator-grade automation',
      copy: 'Risk, engagement, payments, and customer journeys stay connected as one flow.',
      media: MEDIA.heroFeature,
      type: 'video',
    },
  ]

  const journey = [
    { step: '01', title: 'Design your stack', copy: 'Select modules around your launch goals, customer journeys, and market needs.' },
    { step: '02', title: 'Activate live systems', copy: 'Wire in payments, content, CRM, analytics, and automation through one environment.' },
    { step: '03', title: 'Scale with intelligence', copy: 'Use live insights and automation layers to grow with less friction and better control.' },
  ]

  const faqs = [
    { q: 'What makes this platform different?', a: 'It combines launch systems, live operations, AI tooling, and customer-facing workflows into one visual command layer instead of splitting them across disconnected tools.' },
    { q: 'Can it grow with a larger operation?', a: 'Yes. The product direction and supporting media are positioned around scale, live traffic, and modular rollout so growth does not require a redesign of the operating model.' },
    { q: 'Are the visuals and media live?', a: 'Yes. The homepage now uses live online image and video sources for the core visual experience.' },
    { q: 'Do you support a guided onboarding flow?', a: 'Yes. Teams can start with a focused setup and expand into broader workflows over time with implementation support.' },
  ]

  return (
    <div className="home-main">
      <section className="section-pad" style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <LiveVideo src={VIDEOS.hero} opacity={0.18} overlay="linear-gradient(180deg,rgba(6,11,20,.72) 0%,rgba(6,11,20,.52) 42%,rgba(6,11,20,.92) 100%)" />
        <div className="shell hero-grid" style={{ position: 'relative', zIndex: 2, alignItems: 'center', paddingTop: 70 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 18, opacity: heroReady ? 1 : 0, transition: 'opacity .5s ease' }}>Built from scratch for modern growth</div>
            <h1 className="title-xl" style={{ maxWidth: 720, opacity: heroReady ? 1 : 0, transform: heroReady ? 'none' : 'translateY(22px)', transition: 'all .75s var(--ease)' }}>
              A living
              <br />
              digital system
              <br />
              for teams that
              <br />
              move first.
            </h1>
            <p className="body-copy" style={{ maxWidth: 600, marginTop: 28, fontSize: 1.06 + 'rem', opacity: heroReady ? 1 : 0, transition: 'opacity .7s ease .14s' }}>
              We rebuilt the experience into a sharper product story: live media, layered motion, smoother flow, and a premium command-center aesthetic designed to feel advanced from the first scroll.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 32, opacity: heroReady ? 1 : 0, transition: 'opacity .7s ease .22s' }}>
              <Link to="/demo" className="btn-primary">Request Demo <Arrow size={16} /></Link>
              <Link to="/solutions" className="btn-outline">Explore Systems <Arrow size={16} /></Link>
            </div>

            <div className="stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 14, marginTop: 42 }}>
              {[
                ['Live media', '100% online'],
                ['Smooth motion', 'Layered scroll'],
                ['Advanced shell', 'Rebuilt layout'],
              ].map(([value, label]) => (
                <div key={value} className="glass-card" style={{ padding: 18 }}>
                  <div style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 1.35 + 'rem', fontWeight: 700 }}>{value}</div>
                  <div style={{ color: 'var(--muted)', marginTop: 6, fontSize: 0.92 + 'rem' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-r" style={{ position: 'relative', minHeight: 640 }}>
            <div className="glass-card float-soft" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
              <LiveVideo src={MEDIA.heroFeature} opacity={0.9} overlay="linear-gradient(180deg,rgba(7,17,31,.08) 0%,rgba(7,17,31,.18) 38%,rgba(7,17,31,.92) 100%)" />
              <div style={{ position: 'absolute', top: 22, left: 22, right: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ padding: '8px 12px', border: '1px solid rgba(255,255,255,.22)', background: 'rgba(255,255,255,.18)', fontFamily: 'Space Grotesk,sans-serif', fontSize: 0.74 + 'rem', letterSpacing: 0.12 + 'em', textTransform: 'uppercase' }}>Live visual mesh</div>
                <div style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--accent-2)', boxShadow: '0 0 24px rgba(114,241,184,.75)' }} />
              </div>
              <div style={{ position: 'absolute', left: 22, right: 22, bottom: 22, padding: 18, border: '1px solid rgba(255,255,255,.2)', background: 'rgba(255,255,255,.16)' }}>
                <div className="eyebrow" style={{ color: 'var(--accent-3)', marginBottom: 10 }}>Realtime flow</div>
                <div style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 1.18 + 'rem', fontWeight: 700, lineHeight: 1.3 }}>A more tactile interface with cinematic media, deeper layering, and sharper spacing throughout.</div>
              </div>
            </div>

            <div className="glass-card" style={{ position: 'absolute', right: -18, bottom: 54, width: 220, padding: 18, background: 'rgba(255,255,255,.18)' }}>
              <div className="eyebrow" style={{ marginBottom: 10 }}>Motion score</div>
              <div style={{ height: 8, borderRadius: 999, background: 'rgba(255,255,255,.18)', overflow: 'hidden' }}>
                <div className="pulse-line" style={{ width: '78%', height: '100%', background: 'linear-gradient(90deg,var(--accent),var(--accent-2))' }} />
              </div>
              <div style={{ color: 'var(--muted)', marginTop: 12, fontSize: 0.92 + 'rem', lineHeight: 1.65 }}>Smoothed transitions and layered reveals make the page feel more polished as you move through it.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow="Core architecture"
            title={<>Three live layers that make the experience feel advanced.</>}
            copy="Instead of a generic landing page stack, the homepage now leans into a modern systems aesthetic: rich panels, dynamic media, and stronger visual hierarchy."
          />

          <div className="trio-grid stagger" style={{ marginTop: 34 }}>
            {modules.map(module => (
              <article key={module.title} className="glass-card" style={{ overflow: 'hidden' }}>
                <div style={{ height: 240, position: 'relative' }}>
                  <img src={module.media} alt={module.title} className="media-cover" onError={e => e.target.style.display = 'none'} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(7,17,31,.08) 0%,rgba(7,17,31,.14) 45%,rgba(7,17,31,.88) 100%)' }} />
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ width: 52, height: 3, background: module.accent, marginBottom: 16 }} />
                  <h3 className="title-md" style={{ fontSize: 1.8 + 'rem', marginBottom: 12 }}>{module.title}</h3>
                  <p className="body-copy">{module.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ position: 'relative' }}>
        <div className="shell">
          <SectionHeading
            eyebrow="Immersive showcase"
            title={<>Live imagery and motion tuned for a better flow.</>}
            copy="Each panel uses a working live image or video source so the homepage feels active instead of static."
          />

          <div className="duo-grid" style={{ marginTop: 34, alignItems: 'stretch' }}>
            <div className="reveal-l glass-card" style={{ minHeight: 560, position: 'relative', overflow: 'hidden' }}>
              <LiveVideo src={MEDIA.dataTransmission} opacity={0.88} overlay="linear-gradient(180deg,rgba(7,17,31,.06) 0%,rgba(7,17,31,.14) 38%,rgba(7,17,31,.9) 100%)" />
              <div style={{ position: 'absolute', left: 26, top: 26, right: 26, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="eyebrow">Realtime data movement</div>
                <div style={{ fontFamily: 'Space Grotesk,sans-serif', color: '#fff' }}>01</div>
              </div>
              <div style={{ position: 'absolute', left: 26, right: 26, bottom: 26 }}>
                <h3 className="title-md" style={{ marginBottom: 12 }}>A more cinematic lead visual</h3>
                <p className="body-copy" style={{ maxWidth: 500 }}>This section anchors the page with a high-motion signal layer instead of a generic static hero block.</p>
              </div>
            </div>

            <div className="stagger" style={{ display: 'grid', gap: 24 }}>
              {features.map((feature, index) => (
                <article key={feature.title} className="glass-card" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', minHeight: 200, overflow: 'hidden' }}>
                  <div style={{ position: 'relative', minHeight: 200 }}>
                    {feature.type === 'video' ? (
                      <video autoPlay muted loop playsInline className="media-cover">
                        <source src={feature.media} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={feature.media} alt={feature.title} className="media-cover" onError={e => e.target.style.display = 'none'} />
                    )}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(7,17,31,.06) 0%,rgba(7,17,31,.12) 45%,rgba(7,17,31,.34) 100%)' }} />
                  </div>
                  <div style={{ padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="eyebrow" style={{ color: index % 2 === 0 ? 'var(--accent)' : 'var(--accent-3)', marginBottom: 12 }}>Layer 0{index + 1}</div>
                    <h3 style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 1.4 + 'rem', lineHeight: 1.2, marginBottom: 12 }}>{feature.title}</h3>
                    <p className="body-copy">{feature.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow="Launch path"
            title={<>From base to advanced in three deliberate steps.</>}
            copy="The redesign now tells a progression story instead of just listing tools."
          />

          <div className="trio-grid stagger" style={{ marginTop: 34 }}>
            {journey.map(item => (
              <div key={item.step} className="glass-card" style={{ padding: 28 }}>
                <div style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 1 + 'rem', color: 'var(--accent)', marginBottom: 16 }}>{item.step}</div>
                <h3 style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 1.7 + 'rem', lineHeight: 1.15, marginBottom: 14 }}>{item.title}</h3>
                <p className="body-copy">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ position: 'relative', overflow: 'hidden' }}>
        <LiveVideo src={VIDEOS.earth} opacity={0.16} overlay="linear-gradient(180deg,rgba(5,12,22,.88) 0%,rgba(5,12,22,.54) 48%,rgba(5,12,22,.9) 100%)" />
        <div className="shell duo-grid" style={{ position: 'relative', zIndex: 2, alignItems: 'center' }}>
          <div className="reveal-l">
            <div className="eyebrow" style={{ marginBottom: 16 }}>Why it feels better</div>
            <h2 className="title-lg" style={{ marginBottom: 18 }}>Smoother flow,
              <br />
              stronger rhythm,
              <br />
              better contrast.
            </h2>
            <p className="body-copy" style={{ maxWidth: 560 }}>We shifted the site into a more advanced motion system with calmer scroll pacing, cleaner spacing, and more intentional depth. The result is more immersive without becoming visually noisy.</p>
          </div>

          <div className="reveal-r glass-card" style={{ padding: 28 }}>
            <div style={{ display: 'grid', gap: 18 }}>
              {[
                ['Live images and video', 'Online media replaces placeholder visuals.'],
                ['Stronger visual hierarchy', 'Headings, spacing, and panels now guide the eye clearly.'],
                ['Premium interface shell', 'Navbar, footer, and sections share one cohesive system.'],
              ].map(([title, copy]) => (
                <div key={title} style={{ paddingBottom: 18, borderBottom: '1px solid rgba(255,255,255,.08)' }}>
                  <div style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 700, fontSize: 1.1 + 'rem', marginBottom: 8 }}>{title}</div>
                  <div className="body-copy">{copy}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell duo-grid" style={{ alignItems: 'start' }}>
          <SectionHeading
            eyebrow="Questions"
            title={<>Quick answers for the rebuilt experience.</>}
            copy="A cleaner FAQ block keeps the lower half of the page more useful and less cluttered."
          />
          <div className="reveal-r">
            <FAQList items={faqs} />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell glass-card" style={{ position: 'relative', overflow: 'hidden', padding: 0 }}>
          <div className="duo-grid" style={{ minHeight: 480 }}>
            <div style={{ padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Request a live walkthrough</div>
              <h2 className="title-lg" style={{ marginBottom: 18 }}>Ready to see the new system in motion?</h2>
              <p className="body-copy" style={{ maxWidth: 520, marginBottom: 26 }}>This last section stays practical: one clear CTA, one clean form, and a live supporting video panel that keeps the finish memorable.</p>

              {demo.done ? (
                <div className="glass-card" style={{ padding: 18, maxWidth: 420 }}>
                  <div className="eyebrow" style={{ color: 'var(--accent-2)', marginBottom: 10 }}>Request received</div>
                  <div style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 1.1 + 'rem' }}>We have your email and the demo request is queued.</div>
                </div>
              ) : (
                <form onSubmit={handleDemo} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, maxWidth: 620 }}>
                  <input
                    type="email"
                    value={demo.email}
                    onChange={e => setDemo(s => ({ ...s, email: e.target.value }))}
                    placeholder="Enter work email"
                    required
                    style={{
                      background: 'rgba(255,255,255,.16)',
                      border: '1px solid rgba(255,255,255,.24)',
                      color: '#fff',
                      padding: '16px 18px',
                      fontFamily: 'Manrope,sans-serif',
                      fontSize: 14,
                      outline: 'none',
                    }}
                  />
                  <button type="submit" className="btn-primary" style={{ opacity: demo.loading ? 0.7 : 1 }}>
                    {demo.loading ? 'Sending...' : 'Book Demo'} <Arrow size={16} />
                  </button>
                </form>
              )}
            </div>

            <div style={{ position: 'relative', minHeight: 480 }}>
              <LiveVideo src={MEDIA.heroFeature} opacity={0.92} overlay="linear-gradient(180deg,rgba(7,17,31,.06) 0%,rgba(7,17,31,.12) 36%,rgba(7,17,31,.84) 100%)" />
              <div style={{ position: 'absolute', left: 24, right: 24, bottom: 24, padding: 18, border: '1px solid rgba(255,255,255,.22)', background: 'rgba(255,255,255,.16)' }}>
                <div className="eyebrow" style={{ color: 'var(--accent-3)', marginBottom: 10 }}>Final layer</div>
                <div style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 1.18 + 'rem', lineHeight: 1.3 }}>A clearer finish with stronger storytelling and more premium visual continuity.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
