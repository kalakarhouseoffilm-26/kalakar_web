'use client'

import Image from 'next/image'
import { FadeIn } from '@/components/ui/FadeIn'
import { useManifesto } from './useManifesto'
import styles from './Manifesto.module.css'

export function Manifesto() {
  const { paragraphs, artPanel } = useManifesto()

  return (
    <section className={styles.root}>
      <div className={styles.backdrop} aria-hidden="true">
        <span className={styles.outlineWord}>Instinct</span>
      </div>
      <div className={`container ${styles.inner}`}>
        <FadeIn className={styles.text}>
          <span className={styles.kicker}>The meaning</span>
          <h2 className={styles.title}>Kalakar means artist.</h2>
          <p className={styles.lead}>
            It is the word we build around: designing, filming, editing and
            bringing ideas to life.
          </p>
        </FadeIn>
        <div className={styles.columns}>
          {paragraphs.map((paragraph, index) => (
            <FadeIn key={index} delay={index * 0.08} className={styles.column}>
              <p className={styles.paragraph}>{paragraph}</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2} className={styles.media}>
          <div className={styles.frame}>
            <Image
              src={artPanel.src}
              alt={artPanel.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
            />
            <span className={styles.overlay} aria-hidden="true" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
