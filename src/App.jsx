import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import data from './data.json'

function App() {
  return (
    <div className="app">
      <div className="background-glow"></div>

      {/* Background Glow Effect - Inline for now or moved to CSS */}
      <style>{`
        .background-glow {
          position: fixed;
          top: -20%;
          left: -10%;
          width: 50vw;
          height: 50vh;
          background: radial-gradient(circle, hsla(var(--color-primary), 0.2) 0%, transparent 70%);
          filter: blur(100px);
          z-index: -1;
          pointer-events: none;
        }
        .background-glow:nth-child(2) {
          top: auto;
          bottom: -20%;
          right: -10%;
          left: auto;
          background: radial-gradient(circle, hsla(var(--color-secondary), 0.2) 0%, transparent 70%);
        }
      `}</style>
      <div className="background-glow"></div>

      <main className="container">
        <Header />

        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', color: 'hsl(var(--color-text-muted))', borderTop: '1px solid var(--glass-border)' }}>
        <p>© {new Date().getFullYear()} {data.personal.footerText}</p>
      </footer>
    </div>
  )
}

export default App
