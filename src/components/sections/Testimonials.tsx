import { Quote } from 'lucide-react'
import { Container } from '../layout/Container'
import { SectionHeader } from '../layout/SectionHeader'
import { Card } from '../ui/Card'
import { testimonials } from '../../data/testimonials'

export function Testimonials() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeader
          eyebrow="Yorumlar"
          title="Müşteri deneyimlerinden kısa notlar"
          description="Danışmanlık süreçlerimizde öne çıkan geri bildirimler."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="h-full p-6">
              <Quote className="h-5 w-5 text-brand" aria-hidden="true" />
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.comment}</p>
              <p className="mt-6 text-sm font-semibold text-slate-900">{item.name}</p>
              <p className="text-xs text-slate-500">{item.role}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
