export type ExperiencePillar = {
  title: string
  description: string
}

export const experiencePillars: ExperiencePillar[] = [
  {
    title: 'CREATIVE-FIRST THINKING',
    description:
      'Every project begins with bold, original ideas — never templates.',
  },
  {
    title: 'CINEMATIC QUALITY',
    description:
      'Premium production standards across photography, video, and design.',
  },
  {
    title: 'END-TO-END EXECUTION',
    description: 'From strategy to delivery, we handle every detail with care.',
  },
  {
    title: 'LONG-TERM PARTNERSHIP',
    description:
      'Reliable communication and ongoing creative support beyond launch.',
  },
]

export function useExperience() {
  return { pillars: experiencePillars }
}
