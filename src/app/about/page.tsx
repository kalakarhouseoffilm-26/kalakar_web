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
            <p>
              A creative film house driven by <strong>ideas, stories, and visual expression</strong>.
              We create cinematic films and creative advertisements designed to connect, communicate,
              and be remembered. Rooted in ancient storytelling and molded by cinematic vision,
              Kalakar shapes brand narratives that stand like monuments against time.
            </p>
            <p style={{ marginTop: '16px' }}>
              KALAKAR means artist. It is the word we build around every day — designing, filming, editing and bringing ideas to life.
              Our story starts with the same spark every creative remembers: the first day of college, when possibility felt bigger than skill and every project was a chance to prove what instinct could become.
            </p>
            <p style={{ marginTop: '16px' }}>
              That feeling shaped who we are. Today, we are a collective of filmmakers, designers, strategists and editors who solve problems creatively and help brands become memorable.
              From identity systems to campaign films, our work is guided by contrast: warm cream on deep jungle green, raw geometry with cinematic rhythm, primitive instinct sharpened by modern craft.
            </p>
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
