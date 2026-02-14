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
          eyebrow="Sample Portfolio"
          title="Portfolio cards for sample purposes only"
          description="Does not contain actual listing details. You can contact us directly for suitable options."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {portfolioSamples.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <img
                src={item.image}
                alt={`${item.district} region ${item.type} sample image`}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
                <Badge>{item.type}</Badge>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.district}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.summary}</p>
                <a
                  href={createWhatsAppLink(
                    `Hello, I would like to get details about ${item.type.toLowerCase()} in ${item.district} region.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonClasses({
                    variant: 'outline',
                    className: 'mt-5 w-full justify-center',
                  })}
                  aria-label={`Contact for ${item.district} sample portfolio`}
                >
                  Contact for details
                </a>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/iletisim" className={buttonClasses({ variant: 'secondary' })}>
            Let's Talk for Suitable Options
          </Link>
        </div>
      </Container>
    </section>
  )
}

