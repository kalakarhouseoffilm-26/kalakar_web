'use client'

import { FormInput } from '@/components/ui/FormInput'
import { FormTextarea } from '@/components/ui/FormTextarea'
import { Button } from '@/components/ui/Button'
import { useContactForm } from './useContactForm'
import styles from './ContactForm.module.css'

const serviceOptions = [
  'Branding',
  'Creative Production',
  'Marketing',
  'Design',
  'Multiple services',
]

export function ContactForm() {
  const { data, errors, submitted, update, submit, mailtoUrl } =
    useContactForm()

  return (
    <section className={`section`}>
      <div className="container">
        <div className={styles.layout}>
          <form className={styles.form} onSubmit={submit} noValidate>
            <h2 className={styles.title}>Get in touch</h2>
            <p className={styles.lead}>
              Share a few details and we will reply within 24 hours.
            </p>
            <div className={styles.row}>
              <FormInput
                id="contact-name"
                label="Name"
                value={data.name}
                onChange={(value) => update('name', value)}
                placeholder="Your name"
                required
                error={errors.name}
              />
              <FormInput
                id="contact-email"
                label="Email"
                type="email"
                value={data.email}
                onChange={(value) => update('email', value)}
                placeholder="you@example.com"
                required
                error={errors.email}
              />
            </div>
            <div className={styles.row}>
              <FormInput
                id="contact-phone"
                label="Phone"
                type="tel"
                value={data.phone}
                onChange={(value) => update('phone', value)}
                placeholder="+91 963328074"
                error={errors.phone}
              />
              <div className={styles.selectGroup}>
                <label htmlFor="contact-service" className={styles.selectLabel}>
                  Service
                </label>
                <select
                  id="contact-service"
                  value={data.service}
                  onChange={(event) => update('service', event.target.value)}
                  className={styles.select}
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <FormTextarea
              id="contact-message"
              label="Project details"
              value={data.message}
              onChange={(value) => update('message', value)}
              placeholder="Tell us about your project, timeline and goals..."
              required
              rows={5}
              error={errors.message}
            />
            <Button
              type="submit"
              variant="primary"
              fullWidth
              className={styles.submit}
            >
              Send message
            </Button>
            {submitted && (
              <p className={styles.success} role="status">
                Message sent. We will reply within 24 hours.{' '}
                <a href={mailtoUrl} className={styles.fallback}>
                  Or email us directly
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
