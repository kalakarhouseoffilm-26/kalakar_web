import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProcessStepCard } from '@/components/ui/ProcessStep'
import { Button } from '@/components/ui/Button'
import { useProcess } from './useProcess'
import styles from './Process.module.css'

export function Process() {
  const { steps } = useProcess()

  return (
    <section className={`section sectionWarm`}>
      <div className="container">
        <div className={styles.header}>
          <SectionHeading
            tag="Approach"
            title="How we work"
            subtitle="A clear process keeps bold work on time, on message and impossible to ignore."
          />
        </div>
        <ol className={styles.list}>
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.08}>
              <ProcessStepCard step={step} />
            </FadeIn>
          ))}
        </ol>
        <FadeIn className={styles.actions}>
          <Button href="/contact" variant="primary">
            Start a project
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
