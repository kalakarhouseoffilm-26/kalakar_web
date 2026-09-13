'use client'

import { useReducedMotion } from 'framer-motion'

export function useWorkCard() {
  const reduced = useReducedMotion()
  return { reduced }
}
