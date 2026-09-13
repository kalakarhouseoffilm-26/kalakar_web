import type { Metadata } from 'next'
import { IntroReveal } from '@/components/IntroReveal'
import { Hero } from '@/components/sections/Home/Hero'
import { Pillars } from '@/components/sections/Home/Pillars'
import { OriginStory } from '@/components/sections/Home/OriginStory'
import { Section5 } from '@/components/sections/Home/Section5'
import { ServicesPreview } from '@/components/sections/Home/ServicesPreview'
import { WorkSamples } from '@/components/sections/Home/WorkSamples'
import { CTA } from '@/components/sections/Home/CTA'

export const metadata: Metadata = {
  title: 'KALAKAR — Stories that Build Brands | ഹൗസ് ഓഫ് ഫിലിം',
  description:
    'A full-service creative media agency built on passion, craft, and the belief that every brand has a story worth telling.',
}

export default function HomePage() {
  return (
    <main>
      {/* 1. First 2 sections ~ Home: Animated Intro Reveal & Hero (Caveman Sculptor) */}
      <IntroReveal />
      <Hero />

      {/* 2. Sections 3, 4, 5 ~ About: Pillars (Sandstone Stele), Origin Story (Cave Painter), and Section 5 (കലാകാരൻ വന്നല്ലോ) */}
      <Pillars />
      <OriginStory />
      <Section5 />

      {/* 3. Section 6 ~ Services: What We Do (Rustic Hanging Boards) */}
      <ServicesPreview />

      {/* 4. Our Work ~ Embedded Adobe Portfolio Showcase */}
      <WorkSamples />

      {/* 5. Contact Section ~ Direct WhatsApp & Instagram */}
      <CTA />
    </main>
  )
}
