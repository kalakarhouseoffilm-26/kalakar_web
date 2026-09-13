import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProcessStepCard } from '@/components/ui/ProcessStep'
import { useProcess } from './useProcess'
import styles from './Process.module.css'

export function Process() {
  const { steps } = useProcess()

  return (
    <section className={`section sectionAlt`}>
      <div className="container">
        <SectionHeading
          tag="Approach"
          title="How we work"
          subtitle="A clear process keeps bold work on time, on budget and on message."
        />
        <ol className={styles.list}>
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.08}>
              <ProcessStepCard step={step} />
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  )
}
