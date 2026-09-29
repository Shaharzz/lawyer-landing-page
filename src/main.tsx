import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

type Project = {
  number: string
  title: string
  description: string
  tags: string[]
  className: string
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Ritual',
    description: 'A quiet, considered wellness experience built around daily rituals.',
    tags: ['Product design', 'Development'],
    className: 'project-card--purple',
  },
  {
    number: '02',
    title: 'Northstar',
    description: 'Making complex financial decisions feel clear, human, and actionable.',
    tags: ['Brand identity', 'Web design'],
    className: 'project-card--cream',
  },
  {
    number: '03',
    title: 'Folio OS',
    description: 'A flexible system for independent creators to share their best work.',
    tags: ['Design system', 'Strategy'],
    className: 'project-card--blue',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Home">
          <span className="wordmark-mark" aria-hidden="true">✳</span>
          shahar<span className="wordmark-dot">.</span>
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'main-nav main-nav--open' : 'main-nav'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="header-cta" href="mailto:hello@shahar.design">Let's talk <ArrowUpRight size={15} /></a>
      </header>

      <main id="top">
        <section className="hero section-grid">
          <p className="eyebrow reveal">Independent designer & developer <span className="status-dot" /> Available for select projects</p>
          <div className="hero-copy reveal">
            <h1>Digital experiences<br /><em>with a point of view.</em></h1>
            <p className="hero-intro">I’m Shahar — a multidisciplinary designer and developer helping ambitious people turn good ideas into memorable digital products.</p>
            <a className="text-link" href="#work">Explore selected work <ArrowUpRight size={17} /></a>
          </div>
          <div className="hero-art" aria-label="Abstract decorative graphic">
            <div className="orb orb--one" />
            <div className="orb orb--two" />
            <div className="orb orb--three" />
            <span className="hero-art-label">Scroll to explore<br />↓</span>
          </div>
        </section>

        <div className="ticker" aria-label="Services">
          <div className="ticker-track">Brand strategy <span>✳</span> Digital design <span>✳</span> Creative development <span>✳</span> Brand strategy <span>✳</span> Digital design <span>✳</span> Creative development <span>✳</span></div>
        </div>

        <section className="work-section content-section" id="work">
          <div className="section-heading reveal">
            <p className="eyebrow">Selected work</p>
            <h2>A few things I’ve<br /><em>helped bring to life.</em></h2>
            <p className="section-note">A selection of recent collaborations across brand, product, and the web.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <a className={`project-card ${project.className} reveal`} href="#contact" key={project.number}>
                <div className="project-visual">
                  <span className="project-number">{project.number}</span>
                  <span className="project-arrow"><ArrowUpRight size={21} /></span>
                  <div className="project-shape" aria-hidden="true" />
                </div>
                <div className="project-meta">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="about-section content-section section-grid" id="about">
          <div className="about-statement reveal">
            <p className="eyebrow">A little about me</p>
            <h2>Curious by default,<br /><em>intentional by design.</em></h2>
          </div>
          <div className="about-copy reveal">
            <p>I care about the space where thoughtful design meets useful technology. My practice is equal parts listening, thinking, making, and refining until every detail feels like it belongs.</p>
            <p>When I’m not designing, you’ll find me collecting old magazines, learning a new recipe, or walking without a destination.</p>
            <a className="text-link" href="mailto:hello@shahar.design">More about my approach <ArrowUpRight size={17} /></a>
          </div>
        </section>

        <section className="contact-section content-section" id="contact">
          <div className="contact-card reveal">
            <p className="eyebrow">Have a project in mind?</p>
            <h2>Let’s make something<br /><em>worth remembering.</em></h2>
            <a className="button button--light" href="mailto:hello@shahar.design">Start a conversation <ArrowUpRight size={17} /></a>
            <div className="contact-decoration" aria-hidden="true">✳</div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#top"><span className="wordmark-mark" aria-hidden="true">✳</span> shahar<span className="wordmark-dot">.</span></a>
        <p>© 2025 Shahar. Built with intention.</p>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
          <a href="mailto:hello@shahar.design" aria-label="Email"><ArrowUpRight size={18} /></a>
        </div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('app')!).render(<App />)
