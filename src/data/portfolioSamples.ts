export interface PortfolioSample {
  id: string
  type: 'Konut' | 'Arsa' | 'Ticari'
  district: string
  summary: string
  image: string
}

export const portfolioSamples: PortfolioSample[] = [
  {
    id: 'sample-1',
    type: 'Konut',
    district: 'Yenişehir',
    summary:
      'Merkeze yakın, aile yaşamına uygun bölgede örnek konut tipi için danışmanlık desteği.',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'sample-2',
    type: 'Arsa',
    district: 'Mezitli',
    summary:
      'Gelişim potansiyeli yüksek bölgede yatırım amaçlı arsa seçenekleri için örnek kart.',
    image:
      'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'sample-3',
    type: 'Ticari',
    district: 'Akdeniz',
    summary:
      'Ulaşım avantajı olan lokasyonda ticari kullanım odaklı örnek mülk değerlendirmesi.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
]
