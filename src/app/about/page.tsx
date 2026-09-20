import type { Metadata } from 'next'
import { AboutHero } from '@/components/sections/About/AboutHero'
import { Story } from '@/components/sections/About/Story'
import { MissionVision } from '@/components/sections/About/MissionVision'
import { Values } from '@/components/sections/About/Values'
import { MobileChildPage } from '@/components/MobileChildPage/MobileChildPage'

export const metadata: Metadata = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <>
      {/* Mobile-only view following exact Figma child screen specifications */}
      <MobileChildPage
        title="ABOUT US"
        subtitle={
          <>
            A creative film house driven by <strong>ideas, stories, and visual expression</strong>.
            We create cinematic films and creative advertisements designed to connect, communicate,
            and be remembered. Rooted in ancient storytelling and molded by cinematic vision,
            Kalakar shapes brand narratives that stand like monuments against time.
          </>
        }
        bgImage="/medium_device/canyon_bg.png"
        charImage="/medium_device/sculptor_caveman.png"
      />

      {/* Desktop view */}
      <main className="desktopOnly">
        <AboutHero />
        <Story />
        <MissionVision />
        <Values />
      </main>
    </>
  )
}
