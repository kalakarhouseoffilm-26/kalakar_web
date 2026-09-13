'use client'

import Image from 'next/image'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useStory } from './useStory'
import styles from './Story.module.css'

export function Story() {
  const { image, paragraphs } = useStory()

  return (
    <section className={`section`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <SectionHeading
            tag="Our story"
            title="Every great brand starts with a story"
            subtitle="Before feeds and films, people painted meaning on cave walls. We carry that first creative instinct into every modern brand."
          />
          <FadeIn>
            <div>
              <p lang="ml" className="sectionTitle">
                കലാകാരൻ വന്നല്ലോ
              </p>
              <p className="sectionSubtitle">The Artist is Here</p>
            </div>
          </FadeIn>
          <div className={styles.body}>
            {paragraphs.map((paragraph, index) => (
              <FadeIn key={index} delay={index * 0.08}>
                <p className={styles.paragraph}>{paragraph}</p>
              </FadeIn>
            ))}
          </div>
        </div>
        <FadeIn className={styles.media}>
          <div className={styles.frame}>
            <Image
              src={image.src}
              alt={image.alt}
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
