import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useValues } from './useValues'
import styles from './Values.module.css'

export function Values() {
  const { values } = useValues()

  return (
    <section className={`section`}>
      <div className="container">
        <SectionHeading
          tag="What we believe"
          title="Values that guide every frame"
          subtitle="The principles that keep our work honest, playful and precise from pitch to publish."
        />
        <div className={styles.grid}>
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={index * 0.08}>
              <article className={styles.card}>
                <span className={styles.number}>0{index + 1}</span>
                <h3 className={styles.title}>{value.title}</h3>
                <p className={styles.description}>{value.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
