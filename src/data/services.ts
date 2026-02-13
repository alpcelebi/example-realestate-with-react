export interface ServiceItem {
  id: string
  title: string
  description: string
  suitableFor: string
  icon: 'home' | 'key' | 'building' | 'land' | 'chart'
}

export const services: ServiceItem[] = [
  {
    id: 'konut-satis',
    title: 'Konut Satış',
    description:
      'Doğru fiyatlandırma, hedef kitle analizi ve etkili tanıtımla satış sürecini hızlandırır.',
    suitableFor: 'Mersin’de konutunu doğru stratejiyle satmak isteyen mülk sahipleri',
    icon: 'home',
  },
  {
    id: 'konut-kiralama',
    title: 'Konut Kiralama',
    description:
      'Kiralama sürecinde uygun kiracı eşleştirmesi ve sözleşme adımlarını güvenli şekilde yönetir.',
    suitableFor: 'Mülkünü güvenli kiraya vermek isteyen ev sahipleri',
    icon: 'key',
  },
  {
    id: 'ticari-gayrimenkul',
    title: 'Ticari Gayrimenkul',
    description:
      'Lokasyon, hedef işletme profili ve bölgesel potansiyeli birlikte değerlendirerek yönlendirme yapar.',
    suitableFor: 'Ofis, dükkan veya ticari alan arayan yatırımcı ve işletmeler',
    icon: 'building',
  },
  {
    id: 'arsa-yatirim',
    title: 'Arsa / Yatırım Danışmanlığı',
    description:
      'Bölgesel gelişim ve potansiyel kullanım senaryolarına göre yatırım bakış açısı sunar.',
    suitableFor: 'Uzun vadeli kazanç hedefleyen bireysel ve kurumsal yatırımcılar',
    icon: 'land',
  },
  {
    id: 'degerleme-analiz',
    title: 'Değerleme / Fiyat Analizi',
    description:
      'Mülkünüzü emsal veriler ve piyasa trendleriyle analiz ederek gerçekçi fiyat aralığı oluşturur.',
    suitableFor: 'Satış veya kiralama öncesinde doğru fiyat belirlemek isteyenler',
    icon: 'chart',
  },
]
