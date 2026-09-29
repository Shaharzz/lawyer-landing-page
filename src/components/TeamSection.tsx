import ProfileCard from './ProfileCard'

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

export default function TeamSection() {
  return (
    <section className="team-section" id="team" dir="rtl">
      <div className="container">
        <div className="team-section-heading">
          <span className="overline">03 / הצוות שלנו</span>
          <h2>צוות המשרד</h2>
          <p>ניסיון משפטי עשיר, ליווי אישי וייצוג חסר פשרות בעסקאות ובבתי המשפט.</p>
        </div>
        <div className="team-profile-grid">
          <ProfileCard
            name="עו״ד יונתן אדר"
            title="שותף מייסד | מיזוגים, רכישות וקניין רוחני"
            handle="yonatan_adar"
            status="זמין לפגישות"
            contactText="תיאום פגישה"
            avatarUrl="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800"
            behindGlowColor="rgba(37, 99, 235, 0.35)"
            innerGradient="linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)"
            onContactClick={scrollToContact}
          />
          <ProfileCard
            name="עו״ד מיכל הראל"
            title="שותפה | ליטיגציה מסחרית ודיני תאגידים"
            handle="michal_harel"
            status="זמינה לפגישות"
            contactText="תיאום פגישה"
            avatarUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
            behindGlowColor="rgba(37, 99, 235, 0.35)"
            innerGradient="linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)"
            onContactClick={scrollToContact}
          />
          <ProfileCard
            name="עו״ד רועי בן־דוד"
            title="שותף | נדל״ן מסחרי ועסקאות בינלאומיות"
            handle="roi_bendavid"
            status="זמין לפגישות"
            contactText="תיאום פגישה"
            avatarUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
            behindGlowColor="rgba(37, 99, 235, 0.35)"
            innerGradient="linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)"
            onContactClick={scrollToContact}
          />
          <ProfileCard
            name="עו״ד נועה שפירא"
            title="שותפה | טכנולוגיה, השקעות וסטארטאפים"
            handle="noa_shapira"
            status="זמינה לפגישות"
            contactText="תיאום פגישה"
            avatarUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
            behindGlowColor="rgba(37, 99, 235, 0.35)"
            innerGradient="linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)"
            onContactClick={scrollToContact}
          />
        </div>
      </div>
    </section>
  )
}
