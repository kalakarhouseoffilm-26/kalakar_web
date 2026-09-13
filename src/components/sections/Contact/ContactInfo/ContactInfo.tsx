'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { ContactCard } from '@/components/ui/ContactCard'
import { useContactInfo } from './useContactInfo'
import styles from './ContactInfo.module.css'

export function ContactInfo() {
  const { contactActions } = useContactInfo()

  return (
    <section className={`section sectionAlt`}>
      <div className="container">
        <div className={styles.intro}>
          <h2 className={styles.title}>Talk to us directly</h2>
          <p className={styles.subtitle}>
            Pick the channel that works best. We are one message away from your
            next project.
          </p>
        </div>
        <div className={styles.grid}>
          {contactActions.map((action, index) => (
            <FadeIn key={action.href} delay={index * 0.1}>
              <ContactCard
                label={action.label}
                value={action.value}
                href={action.href}
                action={action.action}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
