'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { useMissionVision } from './useMissionVision'
import styles from './MissionVision.module.css'

export function MissionVision() {
  const { cards } = useMissionVision()

  return (
    <section className={`section sectionAlt`}>
      <div className="container">
        <div className={styles.grid}>
          {cards.map((card, index) => (
            <FadeIn
              key={card.label}
              delay={index * 0.1}
              className={styles.card}
            >
              <span className={styles.label}>{card.label}</span>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.description}>{card.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
