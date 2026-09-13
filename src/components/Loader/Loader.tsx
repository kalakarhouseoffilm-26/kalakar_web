'use client'

import { motion } from 'framer-motion'
import { useLoader } from './useLoader'
import styles from './Loader.module.css'

export function Loader() {
  const { reduced } = useLoader()

  return (
    <div
      className={styles.root}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className={styles.stage}>
        <motion.span
          className={`${styles.shape} ${styles.orange}`}
          animate={reduced ? {} : { y: [0, -24, 0] }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            delay: 0,
            ease: 'easeInOut',
          }}
        />
        <motion.span
          className={`${styles.shape} ${styles.green}`}
          animate={reduced ? {} : { y: [0, -24, 0] }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            delay: 0.15,
            ease: 'easeInOut',
          }}
        />
        <motion.span
          className={`${styles.shape} ${styles.yellow}`}
          animate={reduced ? {} : { y: [0, -24, 0] }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            delay: 0.3,
            ease: 'easeInOut',
          }}
        />
      </div>
      <span className={styles.text}>Loading KALAKAR</span>
    </div>
  )
}
