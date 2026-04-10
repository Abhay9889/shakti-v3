import React, { useEffect, useState } from 'react'

export default function IntroScreen({ onDone }) {
  const [phase, setPhase] = useState('in')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('particles'), 1400)
    const t2 = setTimeout(() => setPhase('out'), 2500)
    const t3 = setTimeout(onDone, 3300)
    return () => [t1,t2,t3].forEach(clearTimeout)
  }, [onDone])

  const particles = Array.from({length:40}, (_,i) => ({
    id:i, dx:`${(Math.random()-.5)*300}px`, dy:`${-(60+Math.random()*250)}px`,
    x:40+Math.random()*20, y:44+Math.random()*12, size:2+Math.random()*4,
    delay:Math.random()*.7, dur:.7+Math.random()*.8,
    color:['#c41e3a','#7b2ff7','#c9922a','#0ea5a0','#fff'][i%5]
  }))

  return (
    <div style={{ position:'fixed', inset:0, zIndex:10000, overflow:'hidden', pointerEvents:phase==='out'?'none':'all' }}>
      {/* Curtains */}
      <div style={{ position:'absolute', inset:'0 50% 0 0', background:'linear-gradient(135deg,#080808,#0f0810)', animation:phase==='out'?'curtainL .9s cubic-bezier(0.16,1,0.3,1) forwards':'none' }}/>
      <div style={{ position:'absolute', inset:'0 0 0 50%', background:'linear-gradient(135deg,#0f0810,#080808)', animation:phase==='out'?'curtainR .9s cubic-bezier(0.16,1,0.3,1) forwards':'none' }}/>

      {/* Content */}
      <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', opacity:phase==='out'?0:1, transition:'opacity .4s' }}>
        {/* Scan */}
        <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:'linear-gradient(90deg,transparent,var(--purple),var(--red),transparent)', animation:'scan 1.4s ease-in forwards', pointerEvents:'none' }}/>

        {/* Hex logo */}
        <svg width="90" height="90" viewBox="0 0 90 90" style={{ marginBottom:28, animation:'fadeUp .6s ease forwards' }}>
          <defs>
            <linearGradient id="iG" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c41e3a"/><stop offset="50%" stopColor="#7b2ff7"/><stop offset="100%" stopColor="#c9922a"/>
            </linearGradient>
            <filter id="glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>
          <polygon points="45,5 79,24 79,62 45,81 11,62 11,24" fill="none" stroke="url(#iG)" strokeWidth="2" filter="url(#glow)"/>
          <polygon points="45,15 69,28 69,57 45,70 21,57 21,28" fill="rgba(123,47,247,.15)" stroke="url(#iG)" strokeWidth="1" opacity=".5"/>
          <text x="45" y="52" textAnchor="middle" fill="url(#iG)" fontSize="22" fontFamily="Bebas Neue,cursive" letterSpacing="2" filter="url(#glow)">S</text>
        </svg>

        {/* Title */}
        <div style={{ fontFamily:'Bebas Neue,cursive', fontSize:'clamp(52px,8vw,88px)', letterSpacing:10, color:'#fff', animation:'introLogo 1.2s cubic-bezier(0.16,1,0.3,1) forwards', textAlign:'center' }}>
          SHAKTI
        </div>

        {/* Sub-line */}
        <div style={{ display:'flex', alignItems:'center', gap:14, marginTop:16, opacity:phase!=='in'?1:0, transition:'opacity .6s .3s' }}>
          <div style={{ height:1, width:80, background:'linear-gradient(90deg,transparent,var(--red))' }}/>
          <span style={{ fontFamily:'Syne,sans-serif', fontWeight:600, fontSize:11, letterSpacing:6, color:'rgba(255,255,255,.45)', textTransform:'uppercase' }}>AI PLATFORM</span>
          <div style={{ height:1, width:80, background:'linear-gradient(90deg,var(--purple),transparent)' }}/>
        </div>

        {/* Progress bar */}
        <div style={{ position:'absolute', bottom:60, left:'50%', transform:'translateX(-50%)', width:200 }}>
          <div style={{ height:1, background:'rgba(255,255,255,.1)', position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg,var(--red),var(--purple),var(--gold))', animation:'shimmer 1.5s linear', backgroundSize:'200% auto' }}/>
          </div>
        </div>

        {/* Particles */}
        {phase==='particles' && particles.map(p => (
          <div key={p.id} style={{ position:'absolute', left:`${p.x}%`, top:`${p.y}%`, width:p.size, height:p.size, borderRadius:'50%', background:p.color, '--dx':p.dx, '--dy':p.dy, animation:`particleDrift ${p.dur}s ease-out ${p.delay}s forwards`, pointerEvents:'none' }}/>
        ))}
      </div>
    </div>
  )
}
