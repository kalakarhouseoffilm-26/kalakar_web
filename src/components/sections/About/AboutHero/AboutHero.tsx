'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import { useAboutHero } from './useAboutHero'
import styles from './AboutHero.module.css'

export function AboutHero() {
  const { title, subtitle } = useAboutHero()

  return (
    <section className={styles.root}>
      <div className={`container ${styles.inner}`}>
        <FadeIn className={styles.content}>
          <span className={styles.kicker}>About us</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.actions}>
            <Button href="/services" variant="primary">
              Our services
            </Button>
            <Button href="/contact" variant="ghost">
              Get in touch
            </Button>
          </div>
        </FadeIn>
      </div>
      <span className={styles.backdrop} aria-hidden="true">
        Kalakar
      </span>
    </section>
  )
}
