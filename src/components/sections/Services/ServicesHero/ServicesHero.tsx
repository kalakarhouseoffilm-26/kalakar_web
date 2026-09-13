'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import { useServicesHero } from './useServicesHero'
import styles from './ServicesHero.module.css'

export function ServicesHero() {
  const { title, subtitle } = useServicesHero()

  return (
    <section className={styles.root}>
      <div className={`container ${styles.inner}`}>
        <FadeIn className={styles.content}>
          <span className={styles.kicker}>Services</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.actions}>
            <Button href="/contact" variant="primary">
              Start a project
            </Button>
          </div>
        </FadeIn>
      </div>
      <span className={styles.backdrop} aria-hidden="true">
        Services
      </span>
    </section>
  )
}
