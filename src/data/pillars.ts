import type { PillarIconId } from '@/components/icons'

export type Pillar = {
  id: PillarIconId
  label: string
}

export const pillars: Pillar[] = [
  { id: 'strategic', label: 'Strategic' },
  { id: 'creative', label: 'Creative' },
  { id: 'cinematic', label: 'Cinematic' },
  { id: 'partnership', label: 'Partnership' },
]
