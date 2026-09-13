'use client'

import { motion } from 'framer-motion'
import { useFadeIn } from './useFadeIn'
import styles from './FadeIn.module.css'

export type FadeInProps = {
  children: React.ReactNode
  delay?: number
  className?: string
  as?:
    | 'div'
    | 'section'
    | 'article'
    | 'li'
    | 'span'
    | 'footer'
    | 'header'
    | 'main'
    | 'nav'
}

export function FadeIn({
  children,
  delay = 0,
  className = '',
  as = 'div',
}: FadeInProps) {
  const { initial, whileInView, transition } = useFadeIn({ delay })
  const Component = motion[as]

  return (
    <Component
      className={`${styles.root} ${className}`}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: '-80px' }}
      transition={transition}
    >
      {children}
    </Component>
  )
}
