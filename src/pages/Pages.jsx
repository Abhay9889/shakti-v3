import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal, Arrow, VIDEOS, AI_IMGS, PEACOCK, api } from '../utils.jsx'

// ─── Helper ────────────────────────────────────────────────────────────────
function VideoBg({ src, opacity=.3, overlay }) {
  return (
    <div style={{ position:'absolute', inset:0, overflow:'hidden', zIndex:0 }}>
      <video autoPlay muted loop playsInline style={{ width:'100%', height:'100%', objectFit:'cover', opacity }}>
        <source src={src} type="video/mp4"/>
      </video>
      <div style={{ position:'absolute', inset:0, background:overlay||'rgba(8,8,8,.65)' }}/>
    </div>
  )
}
function PageHero({ eyebrow, title, sub, video, img }) {
  return (
    <section style={{ minHeight:'55vh', position:'relative', display:'flex', alignItems:'center', padding:'130px 48px 80px', overflow:'hidden', background:'var(--black)' }}>
      {video && <VideoBg src={video} opacity={.3} overlay="linear-gradient(135deg,rgba(8,8,8,.85),rgba(20,8,40,.65))"/>}
      {img   && <div style={{ position:'absolute', inset:0, overflow:'hidden', zIndex:0 }}><img src={img} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', opacity:.2 }} onError={e=>e.target.style.display='none'}/><div style={{ position:'absolute', inset:0, background:'rgba(8,8,8,.7)' }}/></div>}
      <div style={{ position:'relative', zIndex:2, maxWidth:800 }}>
        <p style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:11, letterSpacing:5, color:'var(--purple2)', textTransform:'uppercase', marginBottom:20 }}>{eyebrow}</p>
        <h1 style={{ fontFamily:'Bebas Neue,cursive', fontSize:'clamp(56px,8vw,100px)', letterSpacing:3, textTransform:'uppercase', lineHeight:.95, marginBottom:24 }}
          dangerouslySetInnerHTML={{ __html: title }}/>
        {sub && <p style={{ fontFamily:'Inter,sans-serif', fontSize:16, color:'rgba(255,255,255,.5)', lineHeight:1.8, maxWidth:540 }}>{sub}</p>}
      </div>
    </section>
  )
}

// ─── SOLUTIONS PAGE ────────────────────────────────────────────────────────
export function SolutionsPage() {
  useReveal()
  const modules = [
    { icon:'🤖', name:'AI Analytics Engine', color:'#7b2ff7', desc:'Real-time predictive dashboards. ML models trained on your data. Insight before action.', features:['Custom ML model deployment','Real-time event streaming','Predictive churn scoring','Automated reporting'], img:AI_IMGS.analytics },
    { icon:'👥', name:'CRM Suite',            color:'#c41e3a', desc:'360° customer intelligence, lifecycle automation, and revenue-driving playbooks.', features:['Unified customer profiles','AI-suggested actions','Campaign automation','Revenue attribution'], img:AI_IMGS.dashboard },
    { icon:'📝', name:'CMS Engine',           color:'#c9922a', desc:'Multi-language AI-assisted content platform. Manage thousands of pages effortlessly.', features:['AI content generation','Multi-language support','SEO optimization','Version control'], img:AI_IMGS.interface },
    { icon:'💳', name:'Payments Suite',       color:'#0ea5a0', desc:'100+ payment gateways. Multi-currency. Instant settlement. PCI-DSS compliant.', features:['150+ currencies','Fraud detection','Instant settlement','Subscription billing'], img:AI_IMGS.server },
    { icon:'🛡️', name:'Risk & Compliance AI', color:'#ff2d55', desc:'Sub-50ms ML fraud detection. Real-time compliance scoring across all markets.', features:['Real-time risk scoring','KYC/AML automation','Compliance reporting','Rule-based overrides'], img:AI_IMGS.neural },
    { icon:'⚡', name:'Automation Hub',       color:'#a855f7', desc:'Visual workflow builder. No-code trigger logic. Automate anything.', features:['Drag-drop builder','1000+ integrations','Event-based triggers','Custom webhooks'], img:AI_IMGS.robot },
  ]

  return (
    <div>
      <PageHero eyebrow="Platform Modules" title="EVERY TOOL<br/><span style='color:var(--purple2)'>YOU NEED.</span>" sub="One platform. Every module you need to build, grow, and scale your digital business — powered by AI." video={VIDEOS.waves}/>

      {/* How it works */}
      <section style={{ background:'var(--dark2)', padding:'80px 48px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <h2 className="reveal" style={{ fontFamily:'Bebas Neue,cursive', fontSize:'clamp(36px,5vw,60px)', letterSpacing:3, textAlign:'center', marginBottom:56, textTransform:'uppercase' }}>HOW IT <span style={{ color:'var(--purple2)' }}>WORKS</span></h2>
          <div className="stagger" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:2 }}>
            {['Connect Your Stack','Configure Modules','Go Live in Days','Scale Infinitely'].map((s,i)=>(
              <div key={i} style={{ padding:'32px 24px', background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.07)', textAlign:'center' }}>
                <div style={{ fontFamily:'Bebas Neue,cursive', fontSize:48, color:'var(--purple2)', opacity:.3, lineHeight:1, marginBottom:12 }}>{`0${i+1}`}</div>
                <div style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:14, color:'#fff', letterSpacing:1 }}>{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules grid */}
      <section style={{ background:'var(--black)', padding:'80px 48px' }}>
        <div style={{ maxWidth:1240, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2 }}>
          {modules.map((m,i) => (
            <div key={i} className="reveal" style={{ background:'rgba(255,255,255,.025)', border:'1px solid rgba(255,255,255,.07)', overflow:'hidden', transitionDelay:`${i*.08}s`, transition:'all .4s cubic-bezier(0.16,1,0.3,1)' }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=m.color+'66';e.currentTarget.style.background=m.color+'0d'}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,.07)';e.currentTarget.style.background='rgba(255,255,255,.025)'}}
            >
              <div style={{ height:160, overflow:'hidden', position:'relative' }}>
                <img src={m.img} alt={m.name} style={{ width:'100%', height:'100%', objectFit:'cover', opacity:.6 }} onError={e=>e.target.style.display='none'}/>
                <div style={{ position:'absolute', inset:0, background:`linear-gradient(to bottom,transparent,var(--black))` }}/>
                <span style={{ position:'absolute', top:14, left:14, fontSize:28 }}>{m.icon}</span>
              </div>
              <div style={{ padding:'20px 24px 28px' }}>
                <div style={{ height:2, width:32, background:m.color, marginBottom:16 }}/>
                <h3 style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:18, color:'#fff', marginBottom:10 }}>{m.name}</h3>
                <p style={{ fontFamily:'Inter,sans-serif', fontSize:13, color:'rgba(255,255,255,.45)', lineHeight:1.7, marginBottom:18 }}>{m.desc}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                  {m.features.map((f,j)=>(
                    <span key={j} style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:9, letterSpacing:1.5, color:m.color, background:m.color+'18', padding:'4px 10px', borderRadius:100, textTransform:'uppercase' }}>{f}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration logos */}
      <section style={{ background:'var(--dark)', padding:'80px 48px', textAlign:'center' }}>
        <h3 className="reveal" style={{ fontFamily:'Bebas Neue,cursive', fontSize:'clamp(28px,4vw,48px)', letterSpacing:3, marginBottom:40, textTransform:'uppercase', color:'rgba(255,255,255,.6)' }}>INTEGRATES WITH EVERYTHING</h3>
        <div className="stagger" style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center', maxWidth:900, margin:'0 auto' }}>
          {['Salesforce','HubSpot','Stripe','Twilio','AWS','Shopify','Zapier','Slack','PostgreSQL','MongoDB','Redis','Kafka','Datadog','Mixpanel','Amplitude'].map((s,i)=>(
            <span key={i} style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:11, letterSpacing:2, color:'rgba(255,255,255,.4)', border:'1px solid rgba(255,255,255,.1)', padding:'8px 16px', textTransform:'uppercase', transition:'all .25s' }}
              onMouseEnter={e=>{e.currentTarget.style.color='#fff';e.currentTarget.style.borderColor='var(--purple)'}}
              onMouseLeave={e=>{e.currentTarget.style.color='rgba(255,255,255,.4)';e.currentTarget.style.borderColor='rgba(255,255,255,.1)'}}
            >{s}</span>
          ))}
        </div>
        <div style={{ marginTop:48 }}>
          <Link to="/demo" className="btn-primary">REQUEST A DEMO <Arrow size={16}/></Link>
        </div>
      </section>
    </div>
  )
}

// ─── ABOUT PAGE ────────────────────────────────────────────────────────────
export function AboutPage() {
  useReveal()
  return (
    <div>
      <PageHero eyebrow="Our Story" title="BUILT FOR<br/><span style='color:var(--gold)'>BUILDERS.</span>" sub="Shakti was born from a simple belief: every ambitious business deserves enterprise-grade AI tools — without the enterprise complexity." img={AI_IMGS.team}/>

      {/* Mission */}
      <section style={{ background:'var(--dark2)', padding:'100px 48px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
          <div className="reveal-l">
            <p style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:11, letterSpacing:5, color:'var(--purple2)', textTransform:'uppercase', marginBottom:18 }}>Mission</p>
            <h2 style={{ fontFamily:'Bebas Neue,cursive', fontSize:'clamp(38px,5vw,66px)', textTransform:'uppercase', lineHeight:1, marginBottom:24 }}>MAKING AI<br/><span style={{ color:'var(--gold)' }}>ACCESSIBLE.</span></h2>
            <p style={{ fontFamily:'Inter,sans-serif', fontSize:15, color:'rgba(255,255,255,.55)', lineHeight:1.9 }}>We believe every business — regardless of size — should have access to the AI and automation tools that used to require entire engineering departments. Shakti makes it happen in days, not years.</p>
          </div>
          <div className="reveal-r" style={{ position:'relative', height:340 }}>
            <div style={{ position:'absolute', inset:0 }}>
              <video autoPlay muted loop playsInline style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:4, opacity:.7 }}>
                <source src={VIDEOS.ai} type="video/mp4"/>
              </video>
              <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse,rgba(123,47,247,.3) 0%,transparent 70%)', borderRadius:4 }}/>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background:'var(--black)', padding:'100px 48px' }}>
        <h2 className="reveal" style={{ fontFamily:'Bebas Neue,cursive', fontSize:'clamp(38px,5vw,64px)', letterSpacing:3, textAlign:'center', marginBottom:56, textTransform:'uppercase' }}>OUR <span style={{ color:'var(--purple2)' }}>VALUES</span></h2>
        <div className="stagger" style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2 }}>
          {[
            { icon:'🧠', title:'AI-First', desc:'Every feature is designed with artificial intelligence at its core — not as a feature, but as a foundation.' },
            { icon:'⚡', title:'Speed', desc:'Time-to-market is everything. We obsess over reducing friction in every step of your journey.' },
            { icon:'🌍', title:'Global', desc:'Built for every market, every timezone, every currency. Truly borderless infrastructure.' },
            { icon:'🔐', title:'Trust', desc:'Security and compliance aren\'t afterthoughts — they\'re baked into every layer of our architecture.' },
            { icon:'🤝', title:'Partnership', desc:'We grow when you grow. Every client relationship is treated as a long-term partnership.' },
            { icon:'♾️', title:'Scalability', desc:'Start small, dream big. Shakti\'s infrastructure handles any load — from launch day to IPO.' },
          ].map((v,i)=>(
            <div key={i} style={{ padding:'36px 28px', background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.07)' }}>
              <div style={{ fontSize:36, marginBottom:16 }}>{v.icon}</div>
              <h3 style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:18, color:'#fff', marginBottom:10, letterSpacing:1 }}>{v.title}</h3>
              <p style={{ fontFamily:'Inter,sans-serif', fontSize:14, color:'rgba(255,255,255,.45)', lineHeight:1.75 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background:'var(--dark)', padding:'100px 48px' }}>
        <h2 className="reveal" style={{ fontFamily:'Bebas Neue,cursive', fontSize:'clamp(38px,5vw,64px)', letterSpacing:3, textAlign:'center', marginBottom:64, textTransform:'uppercase' }}>OUR <span style={{ color:'var(--gold)' }}>JOURNEY</span></h2>
        <div style={{ maxWidth:800, margin:'0 auto', position:'relative' }}>
          <div style={{ position:'absolute', left:'50%', top:0, bottom:0, width:1, background:'rgba(123,47,247,.3)', transform:'translateX(-50%)' }}/>
          {[
            { year:'2020', title:'Founded', desc:'Shakti was founded with a mission to make AI accessible to every business.' },
            { year:'2021', title:'Series A — $12M', desc:'Raised seed funding and launched our first AI analytics module.' },
            { year:'2022', title:'100 Clients', desc:'Reached 100 enterprise clients across 30 countries. Launched Payments Suite.' },
            { year:'2023', title:'Series B — $45M', desc:'Global expansion. Opened offices in London, Singapore, and Dubai.' },
            { year:'2024', title:'10M Users Reached', desc:'Platform powers over 10 million end-users globally. Launched Risk AI.' },
            { year:'2026', title:'The Future', desc:'Building the most complete AI business platform ever created.' },
          ].map((m,i)=>(
            <div key={i} className="reveal" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32, alignItems:'center', marginBottom:40, transitionDelay:`${i*.1}s` }}>
              {i%2===0 ? <>
                <div style={{ textAlign:'right', paddingRight:32 }}>
                  <div style={{ fontFamily:'Bebas Neue,cursive', fontSize:28, letterSpacing:2, color:'var(--purple2)' }}>{m.year}</div>
                  <div style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:16, color:'#fff', marginBottom:6 }}>{m.title}</div>
                  <p style={{ fontFamily:'Inter,sans-serif', fontSize:13, color:'rgba(255,255,255,.45)', lineHeight:1.7 }}>{m.desc}</p>
                </div>
                <div style={{ paddingLeft:32 }}>
                  <div style={{ width:12, height:12, borderRadius:'50%', background:'var(--purple)', border:'3px solid var(--black)', marginLeft:-6, position:'relative', zIndex:2 }}/>
                </div>
              </> : <>
                <div style={{ textAlign:'right', paddingRight:32 }}>
                  <div style={{ width:12, height:12, borderRadius:'50%', background:'var(--red)', border:'3px solid var(--black)', marginLeft:'auto', marginRight:-6, position:'relative', zIndex:2 }}/>
                </div>
                <div style={{ paddingLeft:32 }}>
                  <div style={{ fontFamily:'Bebas Neue,cursive', fontSize:28, letterSpacing:2, color:'var(--red)' }}>{m.year}</div>
                  <div style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:16, color:'#fff', marginBottom:6 }}>{m.title}</div>
                  <p style={{ fontFamily:'Inter,sans-serif', fontSize:13, color:'rgba(255,255,255,.45)', lineHeight:1.7 }}>{m.desc}</p>
                </div>
              </>}
            </div>
          ))}
        </div>
      </section>
      <CtaStrip />
    </div>
  )
}

// ─── CAREERS PAGE ─────────────────────────────────────────────────────────
export function CareersPage() {
  useReveal()
  const roles = [
    { dept:'Engineering', title:'Senior AI/ML Engineer', loc:'Remote / London', type:'Full-time' },
    { dept:'Engineering', title:'Full Stack Engineer (React + Spring Boot)', loc:'Remote', type:'Full-time' },
    { dept:'Product', title:'Senior Product Manager', loc:'Remote / Dubai', type:'Full-time' },
    { dept:'Design', title:'UI/UX Designer', loc:'Remote', type:'Full-time' },
    { dept:'Sales', title:'Enterprise Account Executive', loc:'Remote / New York', type:'Full-time' },
    { dept:'Marketing', title:'Growth Marketing Manager', loc:'Remote', type:'Full-time' },
  ]
  const deptColors = { Engineering:'#7b2ff7', Product:'#c41e3a', Design:'#c9922a', Sales:'#0ea5a0', Marketing:'#a855f7' }

  return (
    <div>
      <PageHero eyebrow="Join The Team" title="BUILD THE<br/><span style='color:var(--purple2)'>FUTURE.</span>" sub="We're a remote-first team building the world's most powerful AI business platform. Come build something extraordinary." video={VIDEOS.city}/>

      {/* Culture */}
      <section style={{ background:'var(--dark2)', padding:'80px 48px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <h2 className="reveal" style={{ fontFamily:'Bebas Neue,cursive', fontSize:'clamp(36px,5vw,60px)', letterSpacing:3, marginBottom:48, textTransform:'uppercase' }}>WHY <span style={{ color:'var(--gold)' }}>SHAKTI?</span></h2>
          <div className="stagger" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2 }}>
            {[
              { icon:'🌍', title:'Remote First', desc:'Work from anywhere. We have teammates in 25+ countries.' },
              { icon:'📈', title:'Equity', desc:'Every employee has a stake in our growth — generous option packages for all.' },
              { icon:'🏥', title:'Full Benefits', desc:'Health, dental, vision, mental health support. We take care of our people.' },
              { icon:'📚', title:'Learning Budget', desc:'$2,000/year for courses, conferences, and anything that helps you grow.' },
              { icon:'⚡', title:'Real Impact', desc:'Ship features that reach millions. No bureaucracy — ideas become products.' },
              { icon:'🎯', title:'Async Culture', desc:'We respect deep work. Meetings are rare, documentation is king.' },
            ].map((b,i)=>(
              <div key={i} style={{ padding:'32px 24px', background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.07)' }}>
                <div style={{ fontSize:32, marginBottom:14 }}>{b.icon}</div>
                <h3 style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:16, color:'#fff', marginBottom:8 }}>{b.title}</h3>
                <p style={{ fontFamily:'Inter,sans-serif', fontSize:13, color:'rgba(255,255,255,.45)', lineHeight:1.7 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section style={{ background:'var(--black)', padding:'80px 48px' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>
          <h2 className="reveal" style={{ fontFamily:'Bebas Neue,cursive', fontSize:'clamp(36px,5vw,60px)', letterSpacing:3, marginBottom:48, textTransform:'uppercase' }}>OPEN <span style={{ color:'var(--purple2)' }}>ROLES</span></h2>
          <div style={{ display:'flex', flexDirection:'column', gap:2 }}>
            {roles.map((r,i)=>(
              <div key={i} className="reveal" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:20, padding:'24px 28px', background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.07)', transition:'all .3s', transitionDelay:`${i*.06}s` }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--purple)';e.currentTarget.style.background='rgba(123,47,247,.07)'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,.07)';e.currentTarget.style.background='rgba(255,255,255,.03)'}}
              >
                <div style={{ display:'flex', alignItems:'center', gap:16 }}>
                  <span style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:9, letterSpacing:2, color:'#fff', background:deptColors[r.dept]||'#7b2ff7', padding:'4px 10px', textTransform:'uppercase', borderRadius:2 }}>{r.dept}</span>
                  <span style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:15, color:'#fff' }}>{r.title}</span>
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:20 }}>
                  <span style={{ fontFamily:'Inter,sans-serif', fontSize:12, color:'rgba(255,255,255,.4)' }}>{r.loc}</span>
                  <Link to="/coming-soon" className="btn-outline" style={{ padding:'8px 18px', fontSize:10, borderRadius:2 }}>APPLY →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaStrip/>
    </div>
  )
}

// ─── DEMO PAGE ─────────────────────────────────────────────────────────────
export function DemoPage() {
  useReveal()
  const [form, setForm] = useState({ name:'', email:'', company:'', role:'', size:'', message:'' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async e => {
    e.preventDefault(); setStatus('loading')
    await api.submitDemo(form)
    setStatus('success')
  }

  const f = (key, label, type='text', ph='') => (
    <div>
      <label style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:10, letterSpacing:3, color:'var(--gray)', textTransform:'uppercase', display:'block', marginBottom:8 }}>{label}</label>
      <input type={type} value={form[key]} placeholder={ph} onChange={e=>setForm({...form,[key]:e.target.value})} required
        style={{ width:'100%', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.1)', padding:'14px 16px', color:'#fff', fontFamily:'Inter,sans-serif', fontSize:14, outline:'none', transition:'border-color .2s' }}
        onFocus={e=>e.target.style.borderColor='var(--purple)'}
        onBlur={e=>e.target.style.borderColor='rgba(255,255,255,.1)'}/>
    </div>
  )

  return (
    <div>
      <PageHero eyebrow="Get Started" title="REQUEST<br/><span style='color:var(--purple2)'>A DEMO.</span>" sub="See Shakti in action. A product specialist will walk you through the platform and tailor it to your needs." video={VIDEOS.ai}/>
      <section style={{ background:'var(--dark)', padding:'80px 48px' }}>
        <div style={{ maxWidth:960, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:80, alignItems:'start' }}>
          <div className="reveal-l">
            <h3 style={{ fontFamily:'Bebas Neue,cursive', fontSize:32, letterSpacing:2, marginBottom:28, textTransform:'uppercase', color:'#fff' }}>WHAT TO EXPECT</h3>
            {['30-minute personalised walkthrough','See your specific use case in action','Get a custom pricing proposal','No commitment required'].map((it,i)=>(
              <div key={i} style={{ display:'flex', gap:14, alignItems:'flex-start', marginBottom:20 }}>
                <span style={{ color:'var(--purple2)', fontSize:18, marginTop:1 }}>✓</span>
                <p style={{ fontFamily:'Inter,sans-serif', fontSize:14, color:'rgba(255,255,255,.6)', lineHeight:1.6 }}>{it}</p>
              </div>
            ))}
            <div style={{ marginTop:40, padding:'24px', background:'rgba(123,47,247,.08)', border:'1px solid rgba(123,47,247,.2)' }}>
              <p style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:12, color:'var(--purple2)', letterSpacing:2, marginBottom:8 }}>RESPONSE TIME</p>
              <p style={{ fontFamily:'Inter,sans-serif', fontSize:14, color:'rgba(255,255,255,.55)' }}>Typically within 2 business hours</p>
            </div>
          </div>
          <div className="reveal-r">
            {status==='success' ? (
              <div style={{ textAlign:'center', padding:'60px 0' }}>
                <div style={{ width:72, height:72, borderRadius:'50%', border:'2px solid var(--purple)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 24px', fontSize:28, color:'var(--purple2)' }}>✓</div>
                <h3 style={{ fontFamily:'Bebas Neue,cursive', fontSize:36, letterSpacing:3, color:'#fff', marginBottom:12 }}>DEMO REQUESTED!</h3>
                <p style={{ fontFamily:'Inter,sans-serif', fontSize:14, color:'var(--gray)' }}>We'll be in touch within 2 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
                <div>{f('name','Full Name','text','Jane Doe')}</div>
                <div>{f('email','Work Email','email','jane@company.com')}</div>
                <div>{f('company','Company','text','Acme Corp')}</div>
                <div>{f('role','Your Role','text','CTO / CEO')}</div>
                <div style={{ gridColumn:'1/-1' }}>
                  <label style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:10, letterSpacing:3, color:'var(--gray)', textTransform:'uppercase', display:'block', marginBottom:8 }}>What would you like to explore?</label>
                  <textarea value={form.message} rows={4} onChange={e=>setForm({...form,message:e.target.value})}
                    style={{ width:'100%', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.1)', padding:'14px 16px', color:'#fff', fontFamily:'Inter,sans-serif', fontSize:14, outline:'none', resize:'vertical', transition:'border-color .2s' }}
                    onFocus={e=>e.target.style.borderColor='var(--purple)'}
                    onBlur={e=>e.target.style.borderColor='rgba(255,255,255,.1)'}
                    placeholder="Tell us about your use case..."/>
                </div>
                <div style={{ gridColumn:'1/-1' }}>
                  <button type="submit" disabled={status==='loading'} className="btn-primary" style={{ width:'100%', justifyContent:'center', opacity:status==='loading'?.6:1 }}>
                    {status==='loading'?'SENDING…':'BOOK MY DEMO'} <Arrow size={16}/>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── BLOG PAGE — redirects to Coming Soon ─────────────────────────────────
export function BlogPage() {
  React.useEffect(() => {
    window.location.href = 'https://blog.shaktiplatform.com' // temp URL
  }, [])
  return <ComingSoonPage />
}

// ─── COMING SOON PAGE ─────────────────────────────────────────────────────
export function ComingSoonPage() {
  useReveal()
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'120px 48px', position:'relative', overflow:'hidden', background:'var(--black)' }}>
      <div style={{ position:'absolute', inset:0, zIndex:0 }}>
        <video autoPlay muted loop playsInline style={{ width:'100%', height:'100%', objectFit:'cover', opacity:.2 }}>
          <source src={VIDEOS.particles} type="video/mp4"/>
        </video>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at center,rgba(123,47,247,.15) 0%,rgba(8,8,8,.9) 70%)' }}/>
      </div>

      {/* Peacock eye */}
      <div style={{ position:'absolute', right:'-5%', top:'-5%', width:'35%', opacity:.25, pointerEvents:'none', animation:'featherFloat 9s ease-in-out infinite' }}>
        <img src={PEACOCK.hero} alt="" style={{ width:'100%', mixBlendMode:'screen', filter:'saturate(1.5)' }} onError={e=>e.target.style.display='none'}/>
      </div>

      <div style={{ position:'relative', zIndex:2, maxWidth:600 }}>
        <svg width="60" height="60" viewBox="0 0 40 40" style={{ marginBottom:32 }}>
          <defs><linearGradient id="csG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#c41e3a"/><stop offset="50%" stopColor="#7b2ff7"/><stop offset="100%" stopColor="#c9922a"/></linearGradient></defs>
          <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" fill="none" stroke="url(#csG)" strokeWidth="2"/>
          <text x="20" y="26" textAnchor="middle" fill="url(#csG)" fontSize="14" fontFamily="Bebas Neue,cursive">S</text>
        </svg>

        <h1 style={{ fontFamily:'Bebas Neue,cursive', fontSize:'clamp(52px,8vw,88px)', letterSpacing:4, textTransform:'uppercase', lineHeight:.95, marginBottom:20 }}>
          COMING<br/><span style={{ color:'var(--purple2)' }}>SOON.</span>
        </h1>
        <p style={{ fontFamily:'Inter,sans-serif', fontSize:16, color:'rgba(255,255,255,.5)', lineHeight:1.8, marginBottom:40 }}>
          We're crafting something extraordinary here. Be the first to know when it launches.
        </p>

        {done ? (
          <p style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:14, color:'var(--purple2)', letterSpacing:2 }}>✓ You're on the list!</p>
        ) : (
          <form onSubmit={async e=>{e.preventDefault(); await api.subscribeNewsletter(email); setDone(true)}} style={{ display:'flex', gap:0, maxWidth:420, margin:'0 auto' }}>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="your@email.com"
              style={{ flex:1, background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.15)', borderRight:'none', padding:'15px 18px', color:'#fff', fontFamily:'Inter,sans-serif', fontSize:14, outline:'none' }}/>
            <button type="submit" className="btn-primary" style={{ padding:'15px 24px', fontSize:12, whiteSpace:'nowrap' }}>NOTIFY ME</button>
          </form>
        )}

        <div style={{ marginTop:40 }}>
          <Link to="/" className="btn-ghost" style={{ fontSize:12 }}>← BACK TO HOME</Link>
        </div>
      </div>
    </div>
  )
}

// ─── Shared CTA strip ─────────────────────────────────────────────────────
function CtaStrip() {
  return (
    <section style={{ background:'linear-gradient(135deg,var(--black),rgba(20,8,40,1),var(--black))', padding:'80px 48px', textAlign:'center', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse,rgba(123,47,247,.1) 0%,transparent 70%)', pointerEvents:'none' }}/>
      <h2 className="reveal" style={{ fontFamily:'Bebas Neue,cursive', fontSize:'clamp(36px,5vw,60px)', letterSpacing:3, textTransform:'uppercase', marginBottom:24 }}>
        READY TO <span style={{ color:'var(--purple2)' }}>GET STARTED?</span>
      </h2>
      <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
        <Link to="/demo" className="btn-primary">REQUEST DEMO <Arrow size={16}/></Link>
        <Link to="/solutions" className="btn-outline">EXPLORE PLATFORM <Arrow size={16}/></Link>
      </div>
    </section>
  )
}
