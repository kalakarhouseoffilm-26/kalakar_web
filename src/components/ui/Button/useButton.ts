'use client'

import { useReducedMotion } from 'framer-motion'

export function useButton() {
  const reduced = useReducedMotion()
  return { reduced }
}
