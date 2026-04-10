import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import IntroScreen from './components/IntroScreen.jsx'
import Home from './pages/Home.jsx'
import { SolutionsPage, AboutPage, CareersPage, DemoPage, BlogPage, ComingSoonPage } from './pages/Pages.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <BrowserRouter>
      <ScrollToTop />
      {showIntro && <IntroScreen onDone={() => setShowIntro(false)} />}
      <div style={{ opacity: showIntro ? 0 : 1, transition: 'opacity .7s ease .2s' }}>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/solutions" element={<Layout><SolutionsPage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/careers" element={<Layout><CareersPage /></Layout>} />
          <Route path="/demo" element={<Layout><DemoPage /></Layout>} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/coming-soon" element={<Layout><ComingSoonPage /></Layout>} />
          <Route path="/contact" element={<Layout><DemoPage /></Layout>} />
          <Route path="*" element={<Layout><ComingSoonPage /></Layout>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
