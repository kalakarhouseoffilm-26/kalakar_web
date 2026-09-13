export type Pillar = {
  number: string
  title: string
  description: string
}

export const pillarsData: Pillar[] = [
  {
    number: '1',
    title: 'STRATEGIC',
    description:
      'Every decision is rooted in brand strategy and audience insight.',
  },
  {
    number: '2',
    title: 'CREATIVE',
    description:
      'Original thinking that cuts through the noise and captures attention.',
  },
  {
    number: '3',
    title: 'CINEMATIC',
    description:
      'Visual storytelling crafted with the precision of a film production.',
  },
  {
    number: '4',
    title: 'PARTNERSHIP',
    description: "We're not a vendor — we're your long-term creative partner.",
  },
]

export function usePillars() {
  return { pillars: pillarsData }
}
