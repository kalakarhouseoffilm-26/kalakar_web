'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { useContactHero } from './useContactHero'
import styles from './ContactHero.module.css'

export function ContactHero() {
  const { title, subtitle } = useContactHero()

  return (
    <section className={styles.root}>
      <div className={`container ${styles.inner}`}>
        <FadeIn className={styles.content}>
          <span className={styles.kicker}>Contact</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </FadeIn>
      </div>
      <span className={styles.backdrop} aria-hidden="true">
        Contact
      </span>
    </section>
  )
}
