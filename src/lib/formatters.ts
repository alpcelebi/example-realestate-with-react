import { WHATSAPP_BASE_LINK } from './constants'

export function createWhatsAppLink(message: string) {
  return `${WHATSAPP_BASE_LINK}?text=${encodeURIComponent(message.trim())}`
}

export function createServiceMessage(serviceTitle: string) {
  return `Merhaba, ${serviceTitle} için destek almak istiyorum. Bölge: ... Detay paylaşabilir misiniz?`
}

export function createRegionMessage(region: string) {
  return `Merhaba, ${region} bölgesinde alım-satım/kiralama hakkında danışmak istiyorum.`
}
