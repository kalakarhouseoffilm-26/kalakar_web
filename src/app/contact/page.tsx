import type { Metadata } from 'next'
import { ContactHero } from '@/components/sections/Contact/ContactHero'
import { ContactInfo } from '@/components/sections/Contact/ContactInfo'
import { ContactForm } from '@/components/sections/Contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
}

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </main>
  )
}
