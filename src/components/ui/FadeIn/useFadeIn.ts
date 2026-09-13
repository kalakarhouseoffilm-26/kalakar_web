'use client'

import { useReducedMotion } from 'framer-motion'

export type FadeInOptions = {
  delay?: number
}

export function useFadeIn({ delay = 0 }: FadeInOptions = {}) {
  const reduced = useReducedMotion()

  const transition = {
    duration: reduced ? 0 : 0.6,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  }

  return {
    initial: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    whileInView: reduced ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 },
    transition,
  }
}
