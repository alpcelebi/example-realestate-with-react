import { Link } from 'react-router-dom'
import { Container } from '../layout/Container'
import { SectionHeader } from '../layout/SectionHeader'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { buttonClasses } from '../ui/buttonStyles'
import { portfolioSamples } from '../../data/portfolioSamples'
import { createWhatsAppLink } from '../../lib/formatters'

export function PortfolioPreview() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeader
          eyebrow="Örnek Portföy"
          title="Sadece örnek amaçlı portföy kartları"
          description="Gerçek ilan detayı içermez. Uygun seçenekler için doğrudan iletişime geçebilirsiniz."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {portfolioSamples.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <img
                src={item.image}
                alt={`${item.district} bölgesinde ${item.type} örnek görseli`}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
                <Badge>{item.type}</Badge>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.district}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.summary}</p>
                <a
                  href={createWhatsAppLink(
                    `Merhaba, ${item.district} bölgesinde ${item.type.toLowerCase()} hakkında detay almak istiyorum.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonClasses({
                    variant: 'outline',
                    className: 'mt-5 w-full justify-center',
                  })}
                  aria-label={`${item.district} örnek portföy için iletişim`}
                >
                  Detay için iletişime geçin
                </a>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/iletisim" className={buttonClasses({ variant: 'secondary' })}>
            Uygun Seçenekler İçin Görüşelim
          </Link>
        </div>
      </Container>
    </section>
  )
}

