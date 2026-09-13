'use client'

import { useReducedMotion } from 'framer-motion'
import type { MarqueeItem } from './Marquee'

export function useMarquee(items: MarqueeItem[]) {
  const reduced = useReducedMotion()
  const renderItems = [...items, ...items]
  return { reduced, renderItems }
}
