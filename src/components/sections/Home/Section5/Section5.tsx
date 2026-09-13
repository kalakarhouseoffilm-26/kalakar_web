'use client'

import React from 'react'
import Image from 'next/image'
import { FadeIn } from '@/components/ui/FadeIn'
import styles from './Section5.module.css'

export function Section5() {
  return (
    <section className={styles.root} id="artist" aria-label="Kalaakaran Vannallo - The Artist is Here">
      <div className={styles.stage}>
        {/* Layer 1: Background Cave Canvas */}
        <div className={styles.bgLayer}>
          <Image
            src="/home_page/section5/BACKROUND.png"
            alt="Ancient cave background with sunlit wall"
            fill
            priority
            sizes="100vw"
            className={styles.bgImg}
          />
        </div>

        {/* Layer 2: Gradient on Right Side for Story Content Contrast */}
        <div className={styles.gradientRight} aria-hidden="true">
          <Image
            src="/home_page/section5/Gradient RIGHT SIDE.png"
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
            className={styles.gradientImg}
          />
        </div>

        {/* Layer 3: Top Leaves with Natural Breeze Movement */}
        {/* Top Left Leaf */}
        <div className={styles.topLeftLeaf} aria-hidden="true">
          <Image
            src="/home_page/section5/TOP LEFT.png"
            alt=""
            width={294}
            height={347}
            className={styles.leafImg}
          />
        </div>

        {/* Top Right Leaf */}
        <div className={styles.topRightLeaf} aria-hidden="true">
          <Image
            src="/home_page/section5/TOP RIGHT.png"
            alt=""
            width={553}
            height={251}
            className={styles.leafImg}
          />
        </div>

        {/* Layer 4: Upper Banner Typography — "കലാകാരൻ വന്നല്ലോ" & "-THE ARTIST IS HERE" */}
        <div className={styles.titleHeader}>
          <div className={styles.titleInner}>
            <div className={styles.titleMalayalamWrap}>
              <h2 lang="ml" className={styles.malayalamTitle}>
                കലാകാരൻ വന്നല്ലോ
              </h2>
            </div>
            <div className={styles.subtitleWrap}>
              <p className={styles.artistEnglishTag}>
                -&quot;THE ARTIST IS HERE&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Layer 5 (Left Foreground): FINAL LAYER — Caveman Artist with Paintbrush */}
        {/* Positioned on the left, overlapping the bottom of "കലാകാരൻ" */}
        <div className={styles.artistLayer}>
          <Image
            src="/home_page/section5/FINAL LAYER.png"
            alt="Smiling caveman artist holding paintbrush"
            width={1148}
            height={888}
            priority
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 55vw, 48vw"
            className={styles.artistImg}
          />
        </div>

        {/* Layer 6 (Right Foreground): Story Content */}
        <div className={styles.contentWrap}>
          <FadeIn delay={0.15}>
            <div className={styles.contentCard}>
              <p className={styles.storyParagraph}>
                From our first day of college, creativity became our identity. We were always designing, filming, editing, and bringing ideas to life.
              </p>
              <p className={styles.storyParagraph}>
                Before long, teachers and friends stopped calling us by our names — they&apos;d smile and say: &quot;കലാകാരൻ വന്നല്ലോ!&quot;
              </p>
              <p className={styles.storyParagraph}>
                That nickname became our identity. When we built our agency, we didn&apos;t search for a trendy name. We chose the one that had already become part of our journey.
              </p>
              <p className={styles.storyParagraph}>
                KALAKAR. Being a Kalakar isn&apos;t just about beautiful visuals — it&apos;s about solving problems with creativity and building brands people remember.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
