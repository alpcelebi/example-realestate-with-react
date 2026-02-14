import { Clock3, ShieldCheck, Speech } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { SectionHeader } from '../components/layout/SectionHeader'
import { Card } from '../components/ui/Card'
import { buttonClasses } from '../components/ui/buttonStyles'
import {
  BUSINESS_NAME,
  CITY_NAME,
  GENERAL_WHATSAPP_MESSAGE,
  PHONE_LINK,
} from '../lib/constants'
import { createWhatsAppLink } from '../lib/formatters'

const values = [
  {
    title: 'Trust',
    description:
      'We share every step openly and proceed with data-driven and understandable decision processes.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparency',
    description:
      'We provide clear information about documents, official steps, and possible scenarios throughout the process.',
    icon: Speech,
  },
  {
    title: 'Fast Communication',
    description:
      'We provide quick responses via phone and WhatsApp; we manage the process without waiting.',
    icon: Clock3,
  },
]

export default function About() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeader
          eyebrow="About Us"
          title={`Reliable real estate consultancy in ${CITY_NAME}`}
          description={`${BUSINESS_NAME} provides services with a fast communication and transparent management approach in buying, selling, and rental processes.`}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Card className="p-7">
            <h2 className="text-xl font-semibold text-slate-900">
              How does {BUSINESS_NAME} work?
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              We analyze the market in Mersin on a district and neighborhood basis to perform correct price analysis and manage buyer-tenant matching in a goal-oriented manner. We follow contract and title deed processes step by step in official transactions, aiming for a safe closing.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Trust, transparency, and sustainable communication are at the center of our service approach. We proceed with a needs-oriented plan for every customer.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={PHONE_LINK} className={buttonClasses()}>
                Call Now
              </a>
              <a
                href={createWhatsAppLink(GENERAL_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                className={buttonClasses({ variant: 'whatsapp' })}
              >
                Write on WhatsApp
              </a>
            </div>
          </Card>
          <div className="grid gap-5">
            {values.map((value) => (
              <Card key={value.title} className="p-6">
                <div className="mb-3 inline-flex rounded-2xl bg-brand/10 p-3 text-brand-dark">
                  <value.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

