import { Mail, MapPinned, MessageCircle, PhoneCall } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { SectionHeader } from '../components/layout/SectionHeader'
import { Card } from '../components/ui/Card'
import { buttonClasses } from '../components/ui/buttonStyles'
import {
  ADDRESS_TEXT,
  EMAIL_ADDRESS,
  GENERAL_WHATSAPP_MESSAGE,
  MAPS_DIRECTIONS_LINK,
  MAPS_EMBED_LINK,
  PHONE_DISPLAY,
  PHONE_LINK,
  WORKING_HOURS,
} from '../lib/constants'
import { createWhatsAppLink } from '../lib/formatters'

export default function Contact() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeader
          eyebrow="İletişim"
          title="Mersin'deki gayrimenkul süreciniz için bize ulaşın"
          description="Form kullanmadan doğrudan telefon, WhatsApp veya yol tarifi ile hızlıca iletişime geçebilirsiniz."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Card className="p-6 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              <a href={PHONE_LINK} className={buttonClasses({ className: 'justify-center' })}>
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                Hemen Ara
              </a>
              <a
                href={createWhatsAppLink(GENERAL_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                className={buttonClasses({
                  variant: 'whatsapp',
                  className: 'justify-center',
                })}
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp'tan Yaz
              </a>
              <a
                href={MAPS_DIRECTIONS_LINK}
                target="_blank"
                rel="noreferrer"
                className={buttonClasses({
                  variant: 'secondary',
                  className: 'justify-center',
                })}
              >
                <MapPinned className="h-4 w-4" aria-hidden="true" />
                Yol Tarifi Al
              </a>
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className={buttonClasses({ variant: 'outline', className: 'justify-center' })}
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                E-posta Gönder
              </a>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Adres
                </h3>
                <p className="mt-2 text-sm text-slate-700">{ADDRESS_TEXT}</p>
                <p className="mt-2 text-sm text-slate-700">{PHONE_DISPLAY}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Çalışma Saatleri
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  {WORKING_HOURS.map((item) => (
                    <li key={item.day} className="flex justify-between gap-2">
                      <span>{item.day}</span>
                      <span>{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
          <Card className="overflow-hidden p-2">
            <iframe
              title="Şahin Emlak konum haritası"
              src={MAPS_EMBED_LINK}
              loading="lazy"
              className="h-[360px] w-full rounded-2xl border-0 md:h-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Card>
        </div>
      </Container>
    </section>
  )
}

