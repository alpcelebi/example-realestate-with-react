export interface ProcessStep {
  id: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    id: 'preliminary',
    title: 'Preliminary Meeting',
    description:
      'We make a solid start to the process by clarifying your needs, target time, and expectations.',
  },
  {
    id: 'analysis',
    title: 'Analysis',
    description:
      'We create a correct positioning plan according to regional precedents, demand dynamics, and property characteristics.',
  },
  {
    id: 'matching',
    title: 'Marketing & Matching',
    description:
      'We ensure fast and controlled matching with the buyer or tenant by reaching the right target audience.',
  },
  {
    id: 'official-procedures',
    title: 'Official Procedures',
    description:
      'We complete the process safely by providing guidance on contracts, title deeds, and necessary official steps.',
  },
]
