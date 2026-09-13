'use client'

import { useReducedMotion } from 'framer-motion'

export function useContactCard() {
  const reduced = useReducedMotion()
  return { reduced }
}
