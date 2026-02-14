export interface TrustPoint {
  title: string
  description: string
  icon: 'expertise' | 'pricing' | 'matching' | 'transparency' | 'legal' | 'official'
}

export const trustPoints: TrustPoint[] = [
  {
    title: 'Mersin Regional Expertise',
    description: 'We provide the right guidance by closely following district and neighborhood dynamics.',
    icon: 'expertise',
  },
  {
    title: 'Correct Price Analysis',
    description: 'We accelerate the process by determining a realistic price range with precedent and demand data.',
    icon: 'pricing',
  },
  {
    title: 'Fast Buyer/Tenant Matching',
    description: 'We make efficient matching by quickly reaching the target audience suitable for the property type.',
    icon: 'matching',
  },
  {
    title: 'Transparent Process & Contract Support',
    description: 'We proceed in a documented and controlled manner by sharing every step openly.',
    icon: 'transparency',
  },
  {
    title: 'Title Deed / Official Transaction Guidance',
    description: 'We aim for a safe closing by providing guidance in official processes.',
    icon: 'official',
  },
  {
    title: 'Trust-Oriented Communication',
    description: 'We offer fast, clear, and trackable communication via phone and WhatsApp.',
    icon: 'legal',
  },
]
