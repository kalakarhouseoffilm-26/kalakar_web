import type { Metadata } from 'next'
import { AboutHero } from '@/components/sections/About/AboutHero'
import { Story } from '@/components/sections/About/Story'
import { MissionVision } from '@/components/sections/About/MissionVision'
import { Values } from '@/components/sections/About/Values'

export const metadata: Metadata = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Story />
      <MissionVision />
      <Values />
    </main>
  )
}
