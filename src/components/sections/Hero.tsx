import { Link } from 'react-router-dom'
import { Container } from '../layout/Container'
import { buttonClasses } from '../ui/buttonStyles'
import {
  GENERAL_WHATSAPP_MESSAGE,
  PHONE_LINK,
  BUSINESS_NAME,
} from '../../lib/constants'
import { createWhatsAppLink } from '../../lib/formatters'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pb-16 pt-20 text-white md:pb-24 md:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.18),_transparent_45%)]" />
      <Container className="relative">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100">
            {BUSINESS_NAME} | Mersin
          </p>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Secure Buying-Selling & Rental in Mersin
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            We manage your sales, rental, and investment processes safely with regional expertise, correct price analysis, and quick response approach.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={PHONE_LINK} className={buttonClasses({ variant: 'secondary', size: 'lg' })}>
              Call Now
            </a>
            <a
              href={createWhatsAppLink(GENERAL_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className={buttonClasses({ variant: 'whatsapp', size: 'lg' })}
            >
              Write on WhatsApp
            </a>
            <Link to="/hizmetler" className={buttonClasses({ variant: 'outline', size: 'lg' })}>
              Services
            </Link>
          </div>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
            <p className="text-sm font-semibold text-white">Mersin Regional Expertise</p>
            <p className="mt-1 text-xs text-slate-200">Up-to-date market monitoring on district and neighborhood basis</p>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
            <p className="text-sm font-semibold text-white">Correct Price Analysis</p>
            <p className="mt-1 text-xs text-slate-200">Effective marketing strategy with realistic positioning</p>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
            <p className="text-sm font-semibold text-white">Quick Response</p>
            <p className="mt-1 text-xs text-slate-200">Fast communication via phone and WhatsApp</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

