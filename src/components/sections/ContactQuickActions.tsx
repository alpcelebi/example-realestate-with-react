import { MessageCircle, Navigation, PhoneCall } from 'lucide-react'
import { Container } from '../layout/Container'
import { buttonClasses } from '../ui/buttonStyles'
import {
  GENERAL_WHATSAPP_MESSAGE,
  MAPS_DIRECTIONS_LINK,
  PHONE_LINK,
} from '../../lib/constants'
import { createWhatsAppLink } from '../../lib/formatters'

export function ContactQuickActions() {
  return (
    <section className="section-space">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-brand-dark p-6 text-white shadow-soft sm:p-8 lg:p-10">
          <div className="grid items-center gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Quick Contact
              </p>
              <h2 className="mt-2 font-serif text-3xl leading-tight sm:text-4xl">
                One step is enough to start the process
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
                Contact us immediately via phone, WhatsApp, or directions. Let's create a clear roadmap according to your needs.
              </p>
            </div>
            <div className="grid gap-3">
              <a
                href={PHONE_LINK}
                className={buttonClasses({
                  variant: 'secondary',
                  className: 'justify-center bg-white text-brand-dark hover:bg-slate-100',
                })}
              >
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                Call
              </a>
              <a
                href={createWhatsAppLink(GENERAL_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                className={buttonClasses({ variant: 'whatsapp', className: 'justify-center' })}
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={MAPS_DIRECTIONS_LINK}
                target="_blank"
                rel="noreferrer"
                className={buttonClasses({
                  variant: 'outline',
                  className: 'justify-center border-white/40 bg-white/10 text-white hover:bg-white/20',
                })}
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Directions
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

