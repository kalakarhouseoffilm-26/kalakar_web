'use client'

import { Marquee as MarqueeBand } from '@/components/ui/Marquee'
import { useMarquee } from './useMarquee'

export function Marquee() {
  const { items } = useMarquee()

  return <MarqueeBand items={items} />
}
