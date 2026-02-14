import {
  BadgeCheck,
  BarChart3,
  FileCheck2,
  Landmark,
  MapPinned,
  Users2,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeader } from '../layout/SectionHeader'
import { Container } from '../layout/Container'
import { Card } from '../ui/Card'
import { trustPoints, type TrustPoint } from '../../data/trustPoints'

const trustIcons: Record<TrustPoint['icon'], LucideIcon> = {
  expertise: MapPinned,
  pricing: BarChart3,
  matching: Users2,
  transparency: BadgeCheck,
  legal: FileCheck2,
  official: Landmark,
}

export function TrustBadges() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeader
          eyebrow="Trust Elements"
          title="Trust and transparency at every stage"
          description="We not only speed up the process but also make it safe with accurate information and official guidance."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => {
            const Icon = trustIcons[point.icon]
            return (
              <Card key={point.title} className="p-5">
                <div className="mb-4 inline-flex rounded-2xl bg-brand/10 p-3 text-brand-dark">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{point.description}</p>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
