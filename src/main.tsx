import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Gavel,
  Menu,
  Scale,
  ShieldCheck,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const practiceAreas = [
  {
    icon: ShieldCheck,
    number: '01',
    title: 'Personal injury',
    description: 'Serious advocacy for the moments that change everything. We pursue the recovery you deserve.',
  },
  {
    icon: Gavel,
    number: '02',
    title: 'Business & disputes',
    description: 'Practical counsel and decisive representation when your company needs a steady hand.',
  },
  {
    icon: Scale,
    number: '03',
    title: 'Family law',
    description: 'Clear guidance through difficult transitions, with your future and your family at the center.',
  },
]

const steps = [
  ['01', 'Tell us what happened', 'Start with a confidential conversation. No jargon, no pressure, no obligation.'],
  ['02', 'Get a clear strategy', 'We explain your options in plain English and recommend the strongest path forward.'],
  ['03', 'Move forward with confidence', 'Our team handles the details and stays close from first call to final resolution.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark"><Scale size={19} strokeWidth={1.6} /></span>
          <span><strong>HARTWELL</strong><small>ATTORNEYS AT LAW</small></span>
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'main-nav main-nav--open' : 'main-nav'} aria-label="Main navigation">
          <a href="#practice" onClick={closeMenu}>Practice areas</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#about" onClick={closeMenu}>About us</a>
        </nav>
        <a className="header-cta" href="#contact">Schedule a consultation <ArrowRight size={16} /></a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow"><span className="eyebrow-line" /> Trusted counsel. Proven results.</p>
            <h1>When it matters, <em>we stand with you.</em></h1>
            <p className="hero-intro">HARTWELL is a modern law firm for people and businesses facing consequential moments. We bring clarity to complexity and resolve to every case.</p>
            <div className="hero-actions">
              <a className="button button--gold" href="#contact">Book a confidential call <ArrowRight size={16} /></a>
              <a className="subtle-link" href="#practice">Explore our practice <ChevronDown size={15} /></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract scales of justice illustration">
            <div className="art-circle art-circle--outer" />
            <div className="art-circle art-circle--inner" />
            <div className="scale-art">
              <div className="scale-pillar" />
              <div className="scale-beam" />
              <div className="scale-pan scale-pan--left"><span /></div>
              <div className="scale-pan scale-pan--right"><span /></div>
            </div>
            <p className="art-caption">Est. 1998 <span /> New York · London</p>
          </div>
          <div className="hero-footer">
            <span>Scroll to explore</span><span className="hero-scroll-line" />
          </div>
        </section>

        <section className="trust-bar" aria-label="Firm highlights">
          <div><strong>25+</strong><span>Years of practice</span></div>
          <div><strong>98%</strong><span>Cases resolved favorably</span></div>
          <div><strong>4.9/5</strong><span>Client satisfaction</span></div>
          <p>Recognized by <b>Best Lawyers</b> · Super Lawyers · Chambers</p>
        </section>

        <section className="section practice-section" id="practice">
          <div className="section-intro">
            <p className="eyebrow"><span className="eyebrow-line" /> What we do</p>
            <h2>Focused expertise.<br /><em>Personal attention.</em></h2>
            <p>Big-firm experience without the big-firm distance. We focus on the areas where we can make the greatest difference for our clients.</p>
          </div>
          <div className="practice-grid">
            {practiceAreas.map(({ icon: Icon, number, title, description }) => (
              <a className="practice-card" href="#contact" key={number}>
                <div className="card-top"><span>{number}</span><Icon size={28} strokeWidth={1.4} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="card-link">Learn more <ArrowRight size={15} /></span>
              </a>
            ))}
          </div>
        </section>

        <section className="approach-section" id="approach">
          <div className="section approach-content">
            <div className="approach-heading">
              <p className="eyebrow"><span className="eyebrow-line" /> The Hartwell way</p>
              <h2>Law is complex.<br /><em>Our advice isn't.</em></h2>
            </div>
            <div className="steps">
              {steps.map(([number, title, description]) => (
                <div className="step" key={number}>
                  <span className="step-number">{number}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="quote-section section" id="about">
          <p className="quote-mark">“</p>
          <blockquote>They gave us more than legal advice. They gave us a way forward when we couldn't see one.</blockquote>
          <p className="quote-source">— Sarah M. <span>·</span> Hartwell client</p>
        </section>

        <section className="contact-section section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Start with a conversation</p>
            <h2>Let's find<br /><em>your way forward.</em></h2>
            <p>Tell us a little about your situation. Everything you share is confidential, and your first conversation is always on us.</p>
          </div>
          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <label>Name<input type="text" placeholder="Your full name" required /></label>
            <label>Email<input type="email" placeholder="you@example.com" required /></label>
            <label>How can we help?<textarea placeholder="A brief overview of your situation" rows={3} required /></label>
            <button className="button button--gold" type="submit">Request a consultation <ArrowRight size={16} /></button>
            <p className="form-note"><Clock3 size={14} /> We typically respond within one business day.</p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#top"><span className="brand-mark"><Scale size={19} strokeWidth={1.6} /></span><span><strong>HARTWELL</strong><small>ATTORNEYS AT LAW</small></span></a>
        <p>© 2025 Hartwell Law. All rights reserved.</p>
        <div><a href="#contact">Privacy</a><a href="#contact">Terms</a><a href="#contact">Contact</a></div>
      </footer>
      <div className="mobile-safe" aria-hidden="true"><Check size={13} /> Confidential consultations available</div>
    </div>
  )
}

createRoot(document.getElementById('app')!).render(<App />)
