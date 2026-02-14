import { Link } from 'react-router-dom'
import { Container } from '../layout/Container'
import { SectionHeader } from '../layout/SectionHeader'
import { Card } from '../ui/Card'
import { buttonClasses } from '../ui/buttonStyles'
import { regions } from '../../data/regions'

export function RegionsPreview() {
  return (
    <section className="section-space bg-slate-100/80">
      <Container>
        <SectionHeader
          eyebrow="Mersin Regions"
          title="Take a closer look at the regions we work in"
          description="We plan market knowledge, demand analysis, and sales-rental support on a regional basis."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {regions.slice(0, 8).map((region) => (
            <Card key={region.name} className="p-5">
              <h3 className="text-base font-semibold text-slate-900">{region.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{region.summary}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/bolgeler" className={buttonClasses()}>
            View All Regions
          </Link>
          <Link to="/iletisim" className={buttonClasses({ variant: 'secondary' })}>
            Consult on Your Region
          </Link>
        </div>
      </Container>
    </section>
  )
}

