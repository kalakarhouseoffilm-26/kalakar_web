'use client'

import { motion } from 'framer-motion'
import { useCarvedCard } from './useCarvedCard'
import styles from './CarvedCard.module.css'

export type CarvedCardProps = {
  eyebrow?: string
  title: string
  children: React.ReactNode
  index?: number
}
export function CarvedCard({
  eyebrow,
  title,
  children,
  index = 0,
}: CarvedCardProps) {
  const { animation } = useCarvedCard(index)
  return (
    <motion.article className={styles.card} {...animation}>
      {eyebrow && <span>{eyebrow}</span>}
      <h3>{title}</h3>
      <div>{children}</div>
    </motion.article>
  )
}
