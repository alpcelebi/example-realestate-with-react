import { Container } from '../layout/Container'
import { SectionHeader } from '../layout/SectionHeader'
import { Card } from '../ui/Card'
import { processSteps } from '../../data/processSteps'

export function ProcessSteps() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeader
          eyebrow="Working Process"
          title="We proceed with planned and transparent steps"
          description="We manage every step from preliminary meeting to official transactions with a clear flow."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Card key={step.id} className="relative p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
