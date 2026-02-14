import { Link } from 'react-router-dom'
import { Container } from '../layout/Container'
import { SectionHeader } from '../layout/SectionHeader'
import { Accordion } from '../ui/Accordion'
import { buttonClasses } from '../ui/buttonStyles'
import { faqItems } from '../../data/faq'

export function FaqPreview() {
  return (
    <section className="section-space bg-slate-100/80">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked concise answers"
          description="You can get quick support for all your questions directly via phone or WhatsApp."
        />
        <div className="section-surface mt-10 p-4 sm:p-6">
          <Accordion items={faqItems.slice(0, 4)} defaultOpenIndex={0} />
        </div>
        <div className="mt-8">
          <Link to="/sss" className={buttonClasses()}>
            View All FAQs
          </Link>
        </div>
      </Container>
    </section>
  )
}

