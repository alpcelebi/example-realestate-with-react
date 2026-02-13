import { Link } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { SectionHeader } from '../components/layout/SectionHeader'
import { Accordion } from '../components/ui/Accordion'
import { buttonClasses } from '../components/ui/buttonStyles'
import { faqItems } from '../data/faq'

export default function FAQ() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeader
          eyebrow="Sık Sorulan Sorular"
          title="Süreçle ilgili en çok merak edilenler"
          description="Alım-satım ve kiralama süreçlerinde sık gelen soruları kısa ve net şekilde yanıtladık."
        />
        <div className="section-surface mt-10 p-4 sm:p-6 lg:p-8">
          <Accordion items={faqItems} defaultOpenIndex={0} />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/iletisim" className={buttonClasses()}>
            İletişime Geç
          </Link>
          <Link to="/hizmetler" className={buttonClasses({ variant: 'outline' })}>
            Hizmetleri İncele
          </Link>
        </div>
      </Container>
    </section>
  )
}

