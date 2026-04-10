import React, { useEffect } from 'react'
import heroGalaxyGif from './assets/hero-galaxy.gif'
import heroNetworkVideo from './assets/videos/hero-network.mp4'
import aiNetworkVideo from './assets/videos/ai-network.mp4'
import circuitBoardsVideo from './assets/videos/circuit-boards.mp4'
import blueShapesVideo from './assets/videos/blue-shapes.mp4'
import earthSpaceVideo from './assets/videos/earth-space.mp4'
import cityNightVideo from './assets/videos/city-night.mp4'
import purpleParticlesVideo from './assets/videos/purple-particles.mp4'
import heroFeatureVideo from './assets/videos/hero-feature.mp4'
import solarSystemVideo from './assets/videos/solar-system.mp4'
import dataTransmissionVideo from './assets/videos/data-transmission.mp4'

export const VIDEOS = {
  hero: heroNetworkVideo,
  ai: aiNetworkVideo,
  data: circuitBoardsVideo,
  particles: blueShapesVideo,
  earth: earthSpaceVideo,
  city: cityNightVideo,
  waves: purpleParticlesVideo,
}

export const MEDIA = {
  heroFeature: heroFeatureVideo,
  solarSystem: solarSystemVideo,
  dataTransmission: dataTransmissionVideo,
  cubeImage: 'https://images.unsplash.com/photo-1741447680230-eac02a38b766?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=80&w=1600&fit=max',
}

export const PEACOCK = {
  hero: heroGalaxyGif,
  feather1: 'https://images.unsplash.com/photo-1575469297634-0f0be3a1f9bc?w=700&q=85&auto=format&fit=crop',
  feather2: 'https://images.unsplash.com/photo-1567233573270-2d4eb45e5f6c?w=600&q=85&auto=format&fit=crop',
  spread: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&q=85&auto=format&fit=crop',
  eye: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=700&q=85&auto=format&fit=crop',
  tail: 'https://images.unsplash.com/photo-1631208900887-e6e4f57a97b4?w=700&q=85&auto=format&fit=crop',
}

export const AI_IMGS = {
  dashboard: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85&auto=format&fit=crop',
  analytics: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=85&auto=format&fit=crop',
  robot: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=85&auto=format&fit=crop',
  neural: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=700&q=85&auto=format&fit=crop',
  interface: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=700&q=85&auto=format&fit=crop',
  server: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=85&auto=format&fit=crop',
  team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=85&auto=format&fit=crop',
}

export function Arrow({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 24 14" fill="none">
      <path d="M0 7H20M14 1l7 6-7 6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function useReveal() {
  useEffect(() => {
    const run = () => {
      document
        .querySelectorAll('.reveal,.reveal-l,.reveal-r,.stagger')
        .forEach(el => {
          if (el.getBoundingClientRect().top < window.innerHeight * 0.88) el.classList.add('in')
        })
    }
    run()
    window.addEventListener('scroll', run, { passive: true })
    return () => window.removeEventListener('scroll', run)
  })
}

const BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080/api'
export const api = {
  submitContact: d => fetch(`${BASE}/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) }).then(r => r.json()).catch(() => ({ ok: true })),
  submitDemo: d => fetch(`${BASE}/demo`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) }).then(r => r.json()).catch(() => ({ ok: true })),
  subscribeNewsletter: e => fetch(`${BASE}/newsletter`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: e }) }).then(r => r.json()).catch(() => ({ ok: true })),
}
