'use client'

import { useReducedMotion } from 'framer-motion'

export function useLoader() {
  const reduced = useReducedMotion()
  return { reduced }
}
