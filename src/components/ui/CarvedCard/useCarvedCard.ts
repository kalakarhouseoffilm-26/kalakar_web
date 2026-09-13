'use client'
import { useReducedMotion } from 'framer-motion'
export function useCarvedCard(index: number) {
  const reduced = useReducedMotion()
  return {
    animation: {
      initial: { opacity: 0, y: reduced ? 0 : 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.25 },
      transition: { delay: reduced ? 0 : index * 0.08, duration: 0.5 },
    },
  }
}
