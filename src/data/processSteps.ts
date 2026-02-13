export interface ProcessStep {
  id: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    id: 'on-gorusme',
    title: 'Ön Görüşme',
    description:
      'İhtiyaçlarınızı, hedef sürenizi ve beklentilerinizi netleştirerek sürece sağlam başlangıç yapıyoruz.',
  },
  {
    id: 'analiz',
    title: 'Analiz',
    description:
      'Bölgesel emsal, talep dinamikleri ve mülk özelliklerine göre doğru konumlandırma planı oluşturuyoruz.',
  },
  {
    id: 'eslestirme',
    title: 'Pazarlama & Eşleştirme',
    description:
      'Doğru hedef kitleye ulaşarak alıcı veya kiracı ile hızlı ve kontrollü eşleştirme sağlıyoruz.',
  },
  {
    id: 'resmi-islemler',
    title: 'Resmi İşlemler',
    description:
      'Sözleşme, tapu ve gerekli resmi adımlarda rehberlik ederek süreci güvenli şekilde tamamlıyoruz.',
  },
]
