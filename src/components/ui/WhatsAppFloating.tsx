import { MessageCircle } from 'lucide-react'
import { GENERAL_WHATSAPP_MESSAGE } from '../../lib/constants'
import { createWhatsAppLink } from '../../lib/formatters'

export function WhatsAppFloating() {
  return (
    <a
      href={createWhatsAppLink(GENERAL_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-soft transition hover:scale-105 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  )
}
