export type Service = {
  id: string
  title: string
  headline: string
  description: string
  deliverables: string[]
  tone: 'ember' | 'moss' | 'stone'
}

export const services: Service[] = [
  {
    id: 'branding',
    title: 'Branding',
    headline: 'Build a brand people remember',
    description:
      'We shape identity systems that turn instinct into a visual language. Strategy first, design second, consistency always.',
    deliverables: [
      'Brand strategy',
      'Identity',
      'Logo design',
      'Brand guidelines',
    ],
    tone: 'ember',
  },
  {
    id: 'creative-production',
    title: 'Creative Production',
    headline: 'Capture stories with cinematic craft',
    description:
      'From concept to final cut, we produce moving images that hold attention and deliver emotion.',
    deliverables: [
      'Photography',
      'Videography',
      'Corporate films',
      'Reels',
      'Drone shoots',
    ],
    tone: 'moss',
  },
  {
    id: 'marketing',
    title: 'Marketing',
    headline: 'Turn attention into action',
    description:
      'Platform-native campaigns, community management and influencer strategy that make brands impossible to ignore.',
    deliverables: [
      'Social media management',
      'Digital marketing',
      'Campaigns',
      'Influencer strategy',
    ],
    tone: 'stone',
  },
  {
    id: 'design',
    title: 'Design',
    headline: 'Design that moves at scroll speed',
    description:
      'We craft posters, packaging, motion graphics and collateral that make every touchpoint feel intentional.',
    deliverables: [
      'Social creatives',
      'Posters',
      'Packaging',
      'Motion graphics',
      'Marketing collateral',
    ],
    tone: 'ember',
  },
]
