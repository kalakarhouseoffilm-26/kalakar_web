'use client'

import React from 'react'
import Image from 'next/image'
import { FadeIn } from '@/components/ui/FadeIn'
import styles from './OriginStory.module.css'

export function OriginStory() {
  return (
    <section className={styles.root} id="story" aria-label="Origin and Mission">
      {/* Row 1: Cinematic Layered Stage — Full Width "Every Great Brand Starts With a STORY." */}
      <div className={styles.stage}>
          {/* Layer 1: Background Canvas with Cave Painter */}
          <div className={styles.stageBase}>
            <Image
              src="/home_page/section4/layer1.png"
              alt="Caveman artist painting ancient rock art on sunlit cave wall"
              fill
              priority
              sizes="100vw"
              className={styles.stageBaseImg}
            />
          </div>

          {/* Layer 3: Atmospheric Gradient Darkening Right Side for Typography */}
          <div className={styles.stageGradientRight} aria-hidden="true">
            <Image
              src="/home_page/section4/layer 3 Gradient right side.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className={styles.stageGradientImg}
            />
          </div>

          {/* Layer 2: Top Blurred Leaf Canopy */}
          <div className={styles.stageTopFoliage} aria-hidden="true">
            <Image
              src="/home_page/section4/layer 2 TOP.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className={styles.stageTopFoliageImg}
            />
          </div>

          {/* Layer 2: Bottom Left Foreground Leaf */}
          <div className={styles.stageBottomLeftLeaf} aria-hidden="true">
            <Image
              src="/home_page/section4/layer2 Bottom Left.png"
              alt=""
              width={292}
              height={227}
              className={styles.cornerLeafImg}
            />
          </div>

          {/* Layer 2: Bottom Right Foreground Monstera Leaf */}
          <div className={styles.stageBottomRightLeaf} aria-hidden="true">
            <Image
              src="/home_page/section4/layer2 Bottom right.png"
              alt=""
              width={523}
              height={286}
              className={styles.cornerLeafImg}
            />
          </div>

          {/* Content Column: Placed on right side, left-aligned typography */}
          <div className={styles.stageContentWrap}>
            <div className={styles.stageContent}>
              <FadeIn delay={0}>
                <span className={styles.eyebrow}>Every Great Brand</span>
                <h2 className={styles.storyTitle}>
                  STARTS WITH <br />
                  A <span className={styles.greenStory}>STORY<span className={styles.blinkingDot}>.</span></span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className={styles.storyBody}>
                  KALAKAR wasn&apos;t built overnight. It was born from passion,
                  creativity, and the belief that every brand deserves an artist.
                  We combine branding, strategy, design, photography, videography,
                  and digital marketing to create experiences that help businesses
                  stand out.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p className={styles.missionText}>
                  <strong className={styles.missionLabel}>Our mission:</strong> To transform ideas into brands that
                  inspire, connect, and leave a lasting impact. This is more than our
                  story — it&apos;s the beginning of yours.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    )
  }
