'use client'

import { motion } from 'framer-motion'
import { useServiceCard } from './useServiceCard'
import styles from './ServiceCard.module.css'
import type { Service } from '@/data/services'

export type ServiceCardProps = {
  service: Service
  variant?: 'default' | 'featured'
}

export function ServiceCard({
  service,
  variant = 'default',
}: ServiceCardProps) {
  const { reduced, Icon } = useServiceCard(service.id)
  const isFeatured = variant === 'featured'

  return (
    <motion.article
      className={`${styles.card} ${isFeatured ? styles.featured : ''} ${styles[service.tone]}`}
      whileHover={reduced ? undefined : { y: -6 }}
      transition={{ duration: 0.2 }}
    >
      {Icon && (
        <span className={styles.icon}>
          <Icon aria-hidden="true" />
        </span>
      )}
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.headline}>{service.headline}</p>
      <p className={styles.description}>{service.description}</p>
      {isFeatured && (
        <ul className={styles.deliverables}>
          {service.deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </motion.article>
  )
}
