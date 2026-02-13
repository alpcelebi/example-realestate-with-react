import { ContactQuickActions } from '../components/sections/ContactQuickActions'
import { FaqPreview } from '../components/sections/FaqPreview'
import { Hero } from '../components/sections/Hero'
import { PortfolioPreview } from '../components/sections/PortfolioPreview'
import { ProcessSteps } from '../components/sections/ProcessSteps'
import { RegionsPreview } from '../components/sections/RegionsPreview'
import { ServicesPreview } from '../components/sections/ServicesPreview'
import { Testimonials } from '../components/sections/Testimonials'
import { TrustBadges } from '../components/sections/TrustBadges'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <ServicesPreview />
      <ProcessSteps />
      <RegionsPreview />
      <PortfolioPreview />
      <Testimonials />
      <FaqPreview />
      <ContactQuickActions />
    </>
  )
}
