import type { Metadata } from 'next'
import { ServicesHero } from '@/components/sections/Services/ServicesHero'
import { ServicesGrid } from '@/components/sections/Services/ServicesGrid'
import { Process } from '@/components/sections/Services/Process'

export const metadata: Metadata = {
  title: 'Services',
}

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <Process />
    </main>
  )
}
