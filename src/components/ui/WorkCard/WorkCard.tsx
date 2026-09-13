'use client'

import { motion } from 'framer-motion'
import { useWorkCard } from './useWorkCard'
import styles from './WorkCard.module.css'
import type { Project } from '@/data/projects'

export type WorkCardProps = {
  project: Project
}

export function WorkCard({ project }: WorkCardProps) {
  const { reduced } = useWorkCard()

  return (
    <motion.article
      className={styles.card}
      whileHover={reduced ? undefined : { y: -6 }}
      transition={{ duration: 0.2 }}
    >
      <div className={styles.header}>
        <span className={styles.categoryDot} aria-hidden="true" />
        <span className={styles.label}>
          {project.client} · {project.year}
        </span>
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.category}>{project.category}</p>
      <p className={styles.description}>{project.tagline}</p>
      <ul
        className={styles.tags}
        aria-label={`Deliverables for ${project.title}`}
      >
        {project.deliverables.slice(0, 3).map((item) => (
          <li key={item} className={styles.tag}>
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}
