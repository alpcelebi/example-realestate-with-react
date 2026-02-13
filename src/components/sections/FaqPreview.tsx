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
          eyebrow="SSS"
          title="Kısa cevaplarla en sık sorulanlar"
          description="Tüm sorularınız için doğrudan telefon veya WhatsApp üzerinden hızlıca destek alabilirsiniz."
        />
        <div className="section-surface mt-10 p-4 sm:p-6">
          <Accordion items={faqItems.slice(0, 4)} defaultOpenIndex={0} />
        </div>
        <div className="mt-8">
          <Link to="/sss" className={buttonClasses()}>
            Tüm SSS'leri Gör
          </Link>
        </div>
      </Container>
    </section>
  )
}

