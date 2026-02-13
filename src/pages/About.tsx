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
    title: 'Güven',
    description:
      'Her adımı açık biçimde paylaşır, karar süreçlerini veriye dayalı ve anlaşılır ilerletiriz.',
    icon: ShieldCheck,
  },
  {
    title: 'Şeffaflık',
    description:
      'Süreç boyunca belgeler, resmi adımlar ve olası senaryolar hakkında net bilgilendirme yaparız.',
    icon: Speech,
  },
  {
    title: 'Hızlı İletişim',
    description:
      'Telefon ve WhatsApp üzerinden hızlı dönüş sağlarız; süreci bekletmeden yönetiriz.',
    icon: Clock3,
  },
]

export default function About() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeader
          eyebrow="Hakkımızda"
          title={`${CITY_NAME} odağında güvenilir gayrimenkul danışmanlığı`}
          description={`${BUSINESS_NAME}, alım-satım ve kiralama süreçlerinde hızlı iletişim ve şeffaf yönetim anlayışıyla hizmet verir.`}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Card className="p-7">
            <h2 className="text-xl font-semibold text-slate-900">
              {BUSINESS_NAME} nasıl çalışır?
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Mersin piyasasını ilçe ve mahalle bazında izleyerek doğru fiyat analizi yapar,
              alıcı-kiracı eşleştirmesini hedef odaklı yönetiriz. Resmi işlemlerde sözleşme ve
              tapu süreçlerini adım adım takip ederek güvenli kapanış hedefleriz.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Hizmet yaklaşımımızın merkezinde güven, şeffaflık ve sürdürülebilir iletişim yer
              alır. Her müşteri için ihtiyaç odaklı bir planla ilerleriz.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={PHONE_LINK} className={buttonClasses()}>
                Hemen Ara
              </a>
              <a
                href={createWhatsAppLink(GENERAL_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                className={buttonClasses({ variant: 'whatsapp' })}
              >
                WhatsApp'tan Yaz
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

