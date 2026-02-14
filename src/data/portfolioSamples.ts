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
    district: 'Yenisehir',
    summary:
      'Consultancy support for sample housing type in a family-friendly area close to the center.',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'sample-2',
    type: 'Arsa',
    district: 'Mezitli',
    summary:
      'Sample card for land options for investment purposes in a region with high development potential.',
    image:
      'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'sample-3',
    type: 'Ticari',
    district: 'Akdeniz',
    summary:
      'Sample property evaluation focused on commercial use in a location with transportation advantages.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
]
