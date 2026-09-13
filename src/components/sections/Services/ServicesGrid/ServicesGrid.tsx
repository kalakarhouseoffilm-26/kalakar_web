import Image from 'next/image'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { useServicesGrid } from './useServicesGrid'
import styles from './ServicesGrid.module.css'

export function ServicesGrid() {
  const { services, image } = useServicesGrid()

  return (
    <section className={`section`}>
      <div className="container">
        <SectionHeading
          tag="Capabilities"
          title="What we make"
          subtitle="Four creative disciplines, delivered end-to-end."
        />
        <div className={styles.layout}>
          <div className={styles.grid}>
            {services.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.08}>
                <ServiceCard service={service} variant="featured" />
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.25} className={styles.panel}>
            <div className={styles.frame}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                className={styles.image}
              />
              <span className={styles.overlay} aria-hidden="true" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
