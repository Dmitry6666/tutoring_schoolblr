import { useState } from 'react'
import type { ProgramCategory } from './data/programs'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { SubjectMarquee } from './components/SubjectMarquee'
import { Audience } from './components/Audience'
import { Programs } from './components/Programs'
import { Approach } from './components/Approach'
import { Teachers } from './components/Teachers'
import { Reviews } from './components/Reviews'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { PrivacyModal } from './components/PrivacyModal'

export default function App() {
  const [programCategory, setProgramCategory] = useState<ProgramCategory>('school')
  const [privacyOpen, setPrivacyOpen] = useState(false)

  const openPrivacy = () => setPrivacyOpen(true)
  const closePrivacy = () => setPrivacyOpen(false)

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Перейти к содержанию
      </a>

      <Header />

      <main id="main">
        <Hero />
        <SubjectMarquee />
        <Audience onSelectCategory={setProgramCategory} />
        <Programs category={programCategory} onCategoryChange={setProgramCategory} />
        <Approach />
        <Teachers />
        <Reviews />
        <Faq />
        <Contact onOpenPrivacy={openPrivacy} />
      </main>

      <Footer onOpenPrivacy={openPrivacy} />
      <PrivacyModal open={privacyOpen} onClose={closePrivacy} />
    </div>
  )
}
