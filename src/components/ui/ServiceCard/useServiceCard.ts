'use client'

import { useReducedMotion } from 'framer-motion'
import { serviceIcons, type ServiceIconId } from '@/components/icons'

export function useServiceCard(id: string) {
  const reduced = useReducedMotion()
  const Icon = serviceIcons[id as ServiceIconId]
  return {
    reduced,
    Icon,
  }
}
