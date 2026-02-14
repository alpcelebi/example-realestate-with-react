export interface ServiceItem {
  id: string
  title: string
  description: string
  suitableFor: string
  icon: 'home' | 'key' | 'building' | 'land' | 'chart'
}

export const services: ServiceItem[] = [
  {
    id: 'residential-sales',
    title: 'Residential Sales',
    description:
      'Accelerates the sales process with correct pricing, target audience analysis, and effective promotion.',
    suitableFor: 'Property owners in Mersin who want to sell their property with the right strategy',
    icon: 'home',
  },
  {
    id: 'residential-rental',
    title: 'Residential Rental',
    description:
      'Manages suitable tenant matching and contract steps securely during the rental process.',
    suitableFor: 'Landlords who want to rent out their property safely',
    icon: 'key',
  },
  {
    id: 'commercial-real-estate',
    title: 'Commercial Real Estate',
    description:
      'Provides guidance by evaluating location, target business profile, and regional potential together.',
    suitableFor: 'Investors and businesses looking for offices, shops, or commercial spaces',
    icon: 'building',
  },
  {
    id: 'land-investment',
    title: 'Land / Investment Consultancy',
    description:
      'Offers an investment perspective based on regional development and potential usage scenarios.',
    suitableFor: 'Individual and corporate investors targeting long-term gains',
    icon: 'land',
  },
  {
    id: 'valuation-analysis',
    title: 'Valuation / Price Analysis',
    description:
      'Creates a realistic price range by analyzing your property with precedent data and market trends.',
    suitableFor: 'Those who want to determine the right price before selling or renting',
    icon: 'chart',
  },
]
