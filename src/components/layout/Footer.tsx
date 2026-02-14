import { Link } from 'react-router-dom'
import { Container } from './Container'
import {
  ADDRESS_TEXT,
  BUSINESS_NAME,
  GENERAL_WHATSAPP_MESSAGE,
  MAPS_DIRECTIONS_LINK,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_LINK,
  SOCIAL_LINKS,
  WORKING_HOURS,
} from '../../lib/constants'
import { createWhatsAppLink } from '../../lib/formatters'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-2xl text-white">{BUSINESS_NAME}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Real estate consultancy focused on sales, rental, and investment in Mersin.
            </p>
            <p className="mt-4 text-sm text-slate-300">{ADDRESS_TEXT}</p>
            <a href={PHONE_LINK} className="mt-3 inline-block text-sm font-semibold text-white">
              {PHONE_DISPLAY}
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Quick Menu
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Working Hours
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {WORKING_HOURS.map((item) => (
                <li key={item.day} className="flex justify-between gap-3">
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Contact
            </h4>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a
                href={createWhatsAppLink(GENERAL_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 transition-colors hover:text-white"
              >
                Write on WhatsApp
              </a>
              <a
                href={MAPS_DIRECTIONS_LINK}
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 transition-colors hover:text-white"
              >
                Get Directions
              </a>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
