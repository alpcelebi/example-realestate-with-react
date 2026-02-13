import { MapPin } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { SectionHeader } from '../components/layout/SectionHeader'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { buttonClasses } from '../components/ui/buttonStyles'
import { regions } from '../data/regions'
import { createRegionMessage, createWhatsAppLink } from '../lib/formatters'

export default function Regions() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeader
          eyebrow="Mersin Bölgeleri"
          title="Yerel piyasa bilgisi ile doğru bölge stratejisi"
          description="İlçe ve mahalle dinamiklerini analiz ederek alım-satım ve kiralama kararlarınızı netleştiriyoruz."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region) => (
            <Card key={region.name} className="h-full p-6">
              <div className="mb-3 flex items-center gap-2 text-brand-dark">
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-slate-900">{region.name}</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">{region.summary}</p>
              <div className="mt-4">
                <Badge variant="neutral">Piyasa bilgisi + satış/kiralama desteği</Badge>
              </div>
              <a
                href={createWhatsAppLink(createRegionMessage(region.name))}
                target="_blank"
                rel="noreferrer"
                className={buttonClasses({
                  variant: 'secondary',
                  className: 'mt-6 w-full justify-center',
                })}
                aria-label={`${region.name} için danışmanlık başlat`}
              >
                Bölgenizde Danışalım
              </a>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

