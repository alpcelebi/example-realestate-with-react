import {
  BarChart3,
  Building2,
  Home,
  KeyRound,
  Map,
  type LucideIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../layout/Container'
import { SectionHeader } from '../layout/SectionHeader'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { buttonClasses } from '../ui/buttonStyles'
import { services, type ServiceItem } from '../../data/services'
import { createServiceMessage, createWhatsAppLink } from '../../lib/formatters'

const serviceIcons: Record<ServiceItem['icon'], LucideIcon> = {
  home: Home,
  key: KeyRound,
  building: Building2,
  land: Map,
  chart: BarChart3,
}

export function ServicesPreview() {
  return (
    <section className="section-space bg-slate-100/80">
      <Container>
        <SectionHeader
          eyebrow="Services Preview"
          title="Consultancy solutions shaped by needs"
          description="We offer process-oriented service from sales to rental, commercial real estate to investment consultancy."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon]
            return (
              <Card key={service.id} className="flex h-full flex-col p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-2xl bg-brand/10 p-3 text-brand-dark">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
                <div className="mt-4">
                  <Badge variant="info">Contact for details</Badge>
                </div>
                <a
                  href={createWhatsAppLink(createServiceMessage(service.title))}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonClasses({ variant: 'whatsapp', className: 'mt-5 w-full justify-center' })}
                  aria-label={`Get info about ${service.title} on WhatsApp`}
                >
                  Get Info on WhatsApp
                </a>
              </Card>
            )
          })}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/hizmetler" className={buttonClasses()}>
            View All Services
          </Link>
          <Link to="/iletisim" className={buttonClasses({ variant: 'outline' })}>
            Contact Us
          </Link>
        </div>
      </Container>
    </section>
  )
}

