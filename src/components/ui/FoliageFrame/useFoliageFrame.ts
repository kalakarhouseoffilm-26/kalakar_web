'use client'
import { useScroll, useTransform, useReducedMotion } from 'framer-motion'
export function useFoliageFrame() {
  const { scrollYProgress } = useScroll()
  const reduced = useReducedMotion()
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 70])
  return { y }
}
