'use client'

import { motion } from 'framer-motion'
import { useProcessStep } from './useProcessStep'
import styles from './ProcessStep.module.css'
import type { ProcessStep } from '@/data/process'

export type ProcessStepProps = {
  step: ProcessStep
}

export function ProcessStepCard({ step }: ProcessStepProps) {
  const { reduced } = useProcessStep()

  return (
    <motion.li
      className={styles.item}
      whileHover={reduced ? undefined : { y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <span className={styles.number} aria-hidden="true">
        {step.number}
      </span>
      <div className={styles.body}>
        <h3 className={styles.title}>{step.title}</h3>
        <p className={styles.description}>{step.description}</p>
      </div>
    </motion.li>
  )
}
