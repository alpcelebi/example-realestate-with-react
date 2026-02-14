import { Menu, MessageCircle, PhoneCall, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS, BUSINESS_NAME, GENERAL_WHATSAPP_MESSAGE, PHONE_LINK } from '../../lib/constants'
import { cn } from '../../lib/cn'
import { createWhatsAppLink } from '../../lib/formatters'
import { buttonClasses } from '../ui/buttonStyles'
import { Container } from './Container'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-[76px] items-center justify-between">
          <Link to="/" className="group flex flex-col" aria-label={`${BUSINESS_NAME} ana sayfa`}>
            <span className="font-serif text-2xl font-semibold text-brand-dark transition-colors group-hover:text-brand">
              {BUSINESS_NAME}
            </span>
            <span className="text-xs font-medium text-slate-500">Mersin Real Estate Consultancy</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main menu">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'rounded-xl px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-brand text-white'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a href={PHONE_LINK} className={buttonClasses({ variant: 'outline', size: 'sm' })}>
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              Call Now
            </a>
            <a
              href={createWhatsAppLink(GENERAL_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className={buttonClasses({ variant: 'whatsapp', size: 'sm' })}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex rounded-xl border border-slate-300 p-2 text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          'overflow-hidden border-t border-slate-200 bg-white transition-[max-height] duration-300 md:hidden',
          mobileOpen ? 'max-h-[420px]' : 'max-h-0',
        )}
      >
        <Container className="space-y-2 py-4">
          <nav className="grid gap-1" aria-label="Mobile menu">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-xl px-4 py-3 text-sm font-medium',
                    isActive ? 'bg-brand text-white' : 'text-slate-700 hover:bg-slate-100',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="grid gap-2 pt-2 sm:grid-cols-2">
            <a
              href={PHONE_LINK}
              className={buttonClasses({ variant: 'outline', fullWidth: true })}
              onClick={() => setMobileOpen(false)}
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              Call Now
            </a>
            <a
              href={createWhatsAppLink(GENERAL_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className={buttonClasses({ variant: 'whatsapp', fullWidth: true })}
              onClick={() => setMobileOpen(false)}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Write on WhatsApp
            </a>
          </div>
        </Container>
      </div>
    </header>
  )
}

