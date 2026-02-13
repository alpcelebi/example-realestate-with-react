export interface TrustPoint {
  title: string
  description: string
  icon: 'expertise' | 'pricing' | 'matching' | 'transparency' | 'legal' | 'official'
}

export const trustPoints: TrustPoint[] = [
  {
    title: 'Mersin Bölge Uzmanlığı',
    description: 'İlçe ve mahalle dinamiklerini yakından takip ederek doğru yönlendirme sağlıyoruz.',
    icon: 'expertise',
  },
  {
    title: 'Doğru Fiyat Analizi',
    description: 'Emsal ve talep verileriyle gerçekçi fiyat aralığı belirleyerek süreci hızlandırıyoruz.',
    icon: 'pricing',
  },
  {
    title: 'Hızlı Alıcı/Kiracı Eşleştirme',
    description: 'Mülk tipine uygun hedef kitleye hızlıca ulaşarak verimli eşleştirme yapıyoruz.',
    icon: 'matching',
  },
  {
    title: 'Şeffaf Süreç & Sözleşme Desteği',
    description: 'Her adımı açıkça paylaşarak belgeli ve kontrollü ilerliyoruz.',
    icon: 'transparency',
  },
  {
    title: 'Tapu / Resmi İşlem Rehberliği',
    description: 'Resmi süreçlerde yönlendirme sağlayarak güvenli kapanış hedefliyoruz.',
    icon: 'official',
  },
  {
    title: 'Güven Odaklı İletişim',
    description: 'Telefon ve WhatsApp üzerinden hızlı, net ve takip edilebilir iletişim sunuyoruz.',
    icon: 'legal',
  },
]
