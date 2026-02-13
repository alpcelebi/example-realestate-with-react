export interface TestimonialItem {
  name: string
  role: string
  comment: string
}

export const testimonials: TestimonialItem[] = [
  {
    name: 'A. Y.',
    role: 'Satış Danışmanlığı',
    comment:
      'Süreç başından sonuna kadar net bilgilendirildik. Doğru fiyat analizi sayesinde hızlı sonuç aldık.',
  },
  {
    name: 'M. K.',
    role: 'Kiralama Desteği',
    comment:
      'Kiralama sürecinde sözleşme ve aday yönetimi çok düzenliydi. İletişim hızı bizim için çok değerliydi.',
  },
  {
    name: 'S. D.',
    role: 'Yatırım Danışmanlığı',
    comment:
      'Bölge bazlı yaklaşım ve şeffaf anlatım sayesinde yatırım kararımızı çok daha güvenli verdik.',
  },
]
