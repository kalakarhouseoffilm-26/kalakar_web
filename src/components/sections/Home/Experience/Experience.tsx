'use client'

import React from 'react'
import { FadeIn } from '@/components/ui/FadeIn'
import { useExperience } from './useExperience'
import styles from './Experience.module.css'

export function Experience() {
  const { pillars } = useExperience()

  return (
    <section className={styles.root} aria-label="Why KALAKAR">
      <div className="container">
        <div className={styles.header}>
          <FadeIn delay={0}>
            <span className={styles.badge}>Why KALAKAR?</span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className={styles.leadPrompt}>
              We Don&apos;t Just Create Content.
            </p>
            <h2 className={styles.title}>
              WE CREATE <span className={styles.titleAccent}>EXPERIENCES.</span>
            </h2>
          </FadeIn>
        </div>

        <div className={styles.grid}>
          {pillars.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 0.08}>
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.dot} />
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                </div>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
