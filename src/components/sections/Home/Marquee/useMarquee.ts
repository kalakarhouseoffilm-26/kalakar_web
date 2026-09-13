import { pillars } from '@/data/pillars'
import { pillarIcons } from '@/components/icons'
import type { MarqueeItem } from '@/components/ui/Marquee'

export function useMarquee() {
  const items: MarqueeItem[] = pillars.map((pillar) => ({
    label: pillar.label,
    icon: pillarIcons[pillar.id],
  }))
  return { items }
}
