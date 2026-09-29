import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowLeft, Building2, CheckCircle2, ChevronDown, ExternalLink, FileText,
  Mail, MapPin, Menu, Phone, Scale, ShieldCheck, X,
} from 'lucide-react'
import Aurora from './components/Aurora'
import TeamSection from './components/TeamSection'
import './style.css'

const services = [
  { icon: Scale, title: 'מיזוגים ורכישות (M&A)', text: 'ליווי מלא בעסקאות מורכבות, הסכמי השקעה ושותפויות אסטרטגיות.' },
  { icon: ShieldCheck, title: 'קניין רוחני וטכנולוגיה', text: 'הגנה על הנכסים החשובים ביותר שלכם, מפטנטים ועד הסכמי SaaS.' },
  { icon: FileText, title: 'נדל״ן מסחרי', text: 'ניהול עסקאות נדל״ן מסחריות ומורכבות בביטחון ובדיוק.' },
  { icon: Building2, title: 'ליטיגציה מסחרית', text: 'ייצוג חד ונחוש ויישוב סכסוכים ששומר על האינטרסים העסקיים שלכם.' },
]

const faqs = [
  ['תוך כמה זמן תחזרו אליי?', 'אנו מתחייבים למענה ראשוני בתוך 24 שעות עסקים. במקרים דחופים ניתן ליצור איתנו קשר טלפוני ישיר.'],
  ['האם פגישת הייעוץ הראשונה כרוכה בתשלום?', 'השיחה הראשונית שלנו היא ללא התחייבות. בפגישה נבין את הצרכים שלכם ונציג את הדרך הנכונה להתקדם.'],
  ['האם ניתן לעבוד בריטיינר או לפי תיק?', 'בהחלט. אנו מציעים מודל גמיש המותאם לאופי הפעילות, להיקף העבודה ולצרכים המשתנים של כל לקוח.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="app-shell">
      <Aurora colorStops={['#0f172a', '#1e3a8a', '#334155']} blend={0.5} amplitude={1} speed={0.6} />
      <div className="page-content">
        <header className="navbar">
          <a className="logo" href="#top" onClick={closeMenu}><span className="logo-icon"><Scale size={20} /></span><span><strong>אדר ושות׳</strong><small>משרד עורכי דין</small></span></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="תפריט">{menuOpen ? <X /> : <Menu />}</button>
          <nav className={menuOpen ? 'nav-links nav-links--open' : 'nav-links'}>
            <a href="#about" onClick={closeMenu}>על המשרד</a><a href="#services" onClick={closeMenu}>תחומי עיסוק</a><a href="#team" onClick={closeMenu}>צוות</a><a href="#faq" onClick={closeMenu}>שאלות נפוצות</a><a href="#contact" onClick={closeMenu}>צור קשר</a>
          </nav>
          <a className="nav-cta" href="#contact">תיאום פגישה <ArrowLeft size={16} /></a>
        </header>

        <main id="top">
          <section className="hero container">
            <div className="hero-copy">
              <div className="trust-badge"><CheckCircle2 size={15} /> ליווי משפטי מקיף לעסקים וחברות הייטק</div>
              <h1>הגנה משפטית מדויקת<br /><em>בעסקאות המורכבות ביותר</em></h1>
              <p>ייצוג אסטרטגי, ניהול סיכונים וליווי עסקאות בינלאומיות עבור חברות, יזמים וקרנות הון סיכון. דיסקרטיות מוחלטת ומענה תוך 24 שעות.</p>
              <div className="hero-actions"><a className="button button-primary" href="#contact">תיאום שיחת ייעוץ <ArrowLeft size={17} /></a><a className="button button-ghost" href="#services">לתחומי העיסוק <ArrowLeft size={17} /></a></div>
            </div>
            <div className="hero-visual"><div className="visual-grid" /><div className="visual-ring visual-ring--one" /><div className="visual-ring visual-ring--two" /><Scale className="visual-scale" size={170} strokeWidth={.65} /><span className="visual-label">EST. 2009 <i /> TEL AVIV</span></div>
          </section>

          <section className="stats container"><div><strong>₪2.5B+</strong><span>עסקאות שלוו</span></div><div><strong>15+</strong><span>שנות ותק וניסיון</span></div><div><strong>98%</strong><span>הצלחה בהליכי גישור וליטיגציה</span></div><div><strong>24/7</strong><span>זמינות במקרי חירום</span></div></section>

          <section className="section container" id="services"><div className="section-heading"><span className="overline">01 / תחומי עיסוק</span><h2>השותף המשפטי<br /><em>לצמיחה שלכם</em></h2><p>מהעסקה הראשונה ועד לאתגרים המורכבים ביותר — אנחנו כאן כדי להפוך ודאות ליתרון.</p></div><div className="services-grid">{services.map(({ icon: Icon, title, text }) => <a className="service-card" href="#contact" key={title}><Icon size={28} strokeWidth={1.3} /><h3>{title}</h3><p>{text}</p><span>לפרטים נוספים <ArrowLeft size={15} /></span></a>)}</div></section>

          <section className="about-section" id="about"><div className="container about-grid"><div className="about-heading"><span className="overline">02 / על המשרד</span><h2>היתרון של משרד בוטיק.<br /><em>הכוח של שותף אמיתי.</em></h2></div><div className="about-copy"><p>בעולם שבו החלטות עסקיות מתקבלות במהירות, אתם צריכים ייעוץ משפטי שמדביק את הקצב. באדר ושות׳, השותפים המייסדים מעורבים אישית בכל תיק — מהשיחה הראשונה ועד לחתימה.</p><div className="about-points"><div><CheckCircle2 /><span><b>מהירות ותגובה</b> — מענה ברור בזמן שאתם צריכים אותו.</span></div><div><CheckCircle2 /><span><b>אסטרטגיה מותאמת</b> — פתרון שנבנה סביב היעדים שלכם.</span></div><div><CheckCircle2 /><span><b>דיסקרטיות מלאה</b> — שקט נפשי לאורך כל הדרך.</span></div></div></div></div></section>

          <TeamSection />

          <section className="faq-section" id="faq"><div className="section container faq-grid"><div><span className="overline">04 / שאלות נפוצות</span><h2>יש לכם שאלה?<br /><em>אנחנו כאן.</em></h2><p>לא מצאתם תשובה? דברו איתנו ישירות ונשמח לעזור.</p><a className="text-link" href="#contact">צרו קשר <ArrowLeft size={15} /></a></div><div className="accordion">{faqs.map(([question, answer], index) => <div className={openFaq === index ? 'faq-item faq-item--open' : 'faq-item'} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={19} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>

          <section className="contact-section container" id="contact"><div className="contact-intro"><span className="overline">05 / צור קשר</span><h2>בואו נדבר<br /><em>על הצעד הבא.</em></h2><p>השאירו פרטים ונציג מטעמנו יחזור אליכם בהקדם. כל פנייה מטופלת בדיסקרטיות מלאה.</p><div className="contact-details"><a href="tel:+97235555555"><Phone size={17} />03-5555555</a><a href="mailto:office@adar-law.co.il"><Mail size={17} />office@adar-law.co.il</a><span><MapPin size={17} />מגדלי עזריאלי, תל אביב</span></div></div><form className="contact-form" onSubmit={(event) => event.preventDefault()}><label>שם מלא<input required placeholder="איך קוראים לך?" /></label><label>אימייל<input required type="email" placeholder="you@example.com" /></label><label>טלפון<input required type="tel" placeholder="050-0000000" /></label><label>תחום עיסוק<select defaultValue=""><option value="" disabled>בחירת תחום</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select></label><label>בכמה מילים, איך נוכל לעזור? <textarea rows={3} placeholder="ספרו לנו בקצרה על הצורך שלכם" /></label><button className="button button-primary" type="submit">שליחת פנייה <ArrowLeft size={17} /></button><small><ShieldCheck size={14} /> דיסקרטיות מובטחת בהתאם לכללי האתיקה</small></form></section>
        </main>

        <footer className="footer container"><a className="logo" href="#top"><span className="logo-icon"><Scale size={19} /></span><span><strong>אדר ושות׳</strong><small>משרד עורכי דין</small></span></a><p>© 2025 אדר ושות׳. כל הזכויות שמורות. אין באמור באתר זה כדי להוות ייעוץ משפטי.</p><div><a href="#about">על המשרד</a><a href="#services">תחומי עיסוק</a><a href="#contact">צור קשר</a><a href="#contact">מדיניות פרטיות <ExternalLink size={13} /></a></div></footer>
      </div>
    </div>
  )
}

createRoot(document.getElementById('app')!).render(<App />)
