import {
  BarChart3,
  Building2,
  Home,
  KeyRound,
  Map,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '../components/layout/Container'
import { SectionHeader } from '../components/layout/SectionHeader'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { buttonClasses } from '../components/ui/buttonStyles'
import { services, type ServiceItem } from '../data/services'
import { createServiceMessage, createWhatsAppLink } from '../lib/formatters'

const serviceIcons: Record<ServiceItem['icon'], LucideIcon> = {
  home: Home,
  key: KeyRound,
  building: Building2,
  land: Map,
  chart: BarChart3,
}

export default function Services() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeader
          eyebrow="Hizmetlerimiz"
          title="Mersin'de uçtan uca gayrimenkul danışmanlığı"
          description="Satış, kiralama, ticari mülk ve yatırım süreçlerinde güvenli ilerlemek için yanınızdayız."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon]

            return (
              <Card key={service.id} className="h-full p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-2xl bg-brand/10 p-3 text-brand-dark">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <p className="mt-4 text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">Kimler için:</span>{' '}
                  {service.suitableFor}
                </p>
                <div className="mt-4">
                  <Badge variant="info">Detay için iletişime geçin</Badge>
                </div>
                <a
                  href={createWhatsAppLink(createServiceMessage(service.title))}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonClasses({
                    variant: 'whatsapp',
                    size: 'md',
                    className: 'mt-6 w-full justify-center',
                  })}
                  aria-label={`${service.title} için WhatsApp'tan iletişime geç`}
                >
                  WhatsApp'tan Bilgi Al
                </a>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

