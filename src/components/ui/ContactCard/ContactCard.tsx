'use client'

import { motion } from 'framer-motion'
import { useContactCard } from './useContactCard'
import styles from './ContactCard.module.css'

export type ContactCardProps = {
  label: string
  value: string
  href: string
  action: string
}

export function ContactCard({ label, value, href, action }: ContactCardProps) {
  const { reduced } = useContactCard()

  return (
    <motion.a
      href={href}
      className={styles.card}
      whileHover={reduced ? undefined : { scale: 1.02 }}
      whileTap={reduced ? undefined : { scale: 0.98 }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
      <span className={styles.action}>{action}</span>
    </motion.a>
  )
}
