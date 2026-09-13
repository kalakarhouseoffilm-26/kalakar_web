'use client'

import { useReducedMotion } from 'framer-motion'

export function useProcessStep() {
  const reduced = useReducedMotion()
  return { reduced }
}
