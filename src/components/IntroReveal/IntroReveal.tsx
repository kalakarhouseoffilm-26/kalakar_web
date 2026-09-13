'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useIntroReveal } from './useIntroReveal'
import styles from './IntroReveal.module.css'

const SUBTEXT_PHRASE = 'HOUSE OF FILM'

export function IntroReveal() {
  const {
    containerRef,
    reducedMotion,
    bgScale,
    bgBrightness,
    midScale,
    midY,
    leafLeftX,
    leafLeftScale,
    leafLeftRotate,
    leafLeftOpacity,
    leafRightX,
    leafRightScale,
    leafRightRotate,
    leafRightOpacity,
    scrollCueOpacity,
  } = useIntroReveal()

  if (reducedMotion) {
    return (
      <section className={styles.stickyViewport} aria-label="KALAKAR Hero">
        <div className={styles.bgLayer}>
          <Image
            src="/home_page/section1/layer1.png"
            alt="Cave entrance background"
            fill
            priority
            sizes="100vw"
            className={styles.bgImg}
          />
          <div className={styles.darkOverlay} />
        </div>
        <div className={styles.midLayerStatic}>
          <div className={styles.cavemanWrap}>
            <Image
              src="/home_page/section1/layer2.png"
              alt="Caveman with vintage film camera"
              width={520}
              height={660}
              priority
              className={styles.cavemanImg}
            />
          </div>
          <div className={styles.titleWrap}>
            <Image
              src="/navbar/Kalakar.png"
              alt="KALAKAR"
              width={480}
              height={135}
              priority
              className={styles.titleImg}
            />
            <div className={styles.subtextContainer}>
              <div className={styles.subtextJustified} aria-label={SUBTEXT_PHRASE}>
                {SUBTEXT_PHRASE.split('').map((char, index) => (
                  <span
                    key={index}
                    className={char === ' ' ? styles.subtextSpace : styles.subtextChar}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={containerRef}
      className={styles.track}
      aria-label="KALAKAR — Stories that Build Brands"
    >
      <div className={styles.stickyViewport}>

        {/* ===== LAYER 1: Background (Cave vista) with 57% black overlay ===== */}
        <motion.div
          className={styles.bgLayer}
          style={{
            scale: bgScale,
            filter: `brightness(${bgBrightness})`,
          }}
        >
          <Image
            src="/home_page/section1/layer1.png"
            alt="Cave opening overlooking lush valley and waterfalls"
            fill
            priority
            sizes="100vw"
            className={styles.bgImg}
          />
          {/* Black overlay at 57% opacity per specification */}
          <div className={styles.darkOverlay} />
          {/* Subtle cinematic vignette */}
          <div className={styles.bgVignette} />
        </motion.div>

        {/* ===== LAYER 2: Caveman (Left: 0, animated breathing) + Title with Justified Subtext (Right) ===== */}
        <motion.div
          className={styles.midLayer}
          style={{
            scale: midScale,
            y: midY,
          }}
        >
          {/* Caveman with Camera — aligned to left: 0 with subtle breathing/camera-holding animation */}
          <div className={styles.cavemanWrap}>
            <div className={styles.cavemanMotionWrap}>
              <Image
                src="/home_page/section1/layer2.png"
                alt="Caveman capturing story with vintage film camera"
                width={560}
                height={720}
                priority
                className={styles.cavemanImg}
              />
            </div>
          </div>

          {/* Title & Edge-to-Edge Justified Yellow Subtext — Right side, closer to center */}
          <div className={styles.titleWrap}>
            <div className={styles.titleInner}>
              <Image
                src="/navbar/Kalakar.png"
                alt="KALAKAR"
                width={520}
                height={150}
                priority
                className={styles.titleImg}
              />
              {/* Clean yellow subtext with max-width 50% */}
              <div className={styles.subtextContainer}>
                <p className={styles.subtextTitle}>
                  {SUBTEXT_PHRASE}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== FRONT LAYER: Foreground Leaves with Ambient Sway + Scroll Zoom ===== */}
        {/* Left Leaf (leaf1.png) */}
        <motion.div
          className={`${styles.foregroundLeaf} ${styles.leftForegroundLeaf}`}
          style={{
            x: leafLeftX,
            scale: leafLeftScale,
            rotate: leafLeftRotate,
            opacity: leafLeftOpacity,
          }}
        >
          <div className={styles.leafAmbientWrapLeft}>
            <Image
              src="/home_page/section1/leaf1.png"
              alt=""
              width={500}
              height={580}
              priority
              className={styles.leafImg}
            />
          </div>
        </motion.div>

        {/* Right Leaf (leaft2.png) */}
        <motion.div
          className={`${styles.foregroundLeaf} ${styles.rightForegroundLeaf}`}
          style={{
            x: leafRightX,
            scale: leafRightScale,
            rotate: leafRightRotate,
            opacity: leafRightOpacity,
          }}
        >
          <div className={styles.leafAmbientWrapRight}>
            <Image
              src="/home_page/section1/leaft2.png"
              alt=""
              width={500}
              height={580}
              priority
              className={styles.leafImg}
            />
          </div>
        </motion.div>

        {/* ===== SCROLL CUE ===== */}
        <motion.div
          className={styles.scrollCue}
          style={{ opacity: scrollCueOpacity }}
          aria-hidden="true"
        >
          <span className={styles.scrollCueText}>Scroll to Explore</span>
          <div className={styles.scrollLine} />
        </motion.div>

        {/* Seamless bottom blend gradient into Section 2 */}
        <div className={styles.bottomBlendGradient} aria-hidden="true" />

      </div>
    </section>
  )
}
