'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { usePillars } from './usePillars'
import styles from './Pillars.module.css'

export function Pillars() {
  const { pillars } = usePillars()

  return (
    <section className={styles.section} id="about" aria-label="Who We Are">
      {/* Ambient Vignette for cinematic depth */}
      <div className={styles.bgVignette} aria-hidden="true" />

      {/* Seamless top blend gradient from Section 2 (#10300b) */}
      <div className={styles.topBlendGradient} aria-hidden="true" />

      {/* ===== DESKTOP VIEWPORT (>= 1024px): 3D Photorealistic Carved Sandstone Plate ===== */}
      <div className={styles.desktopPlateWrapper}>
        <div className={styles.desktopPlateContainer}>
          <Image
            src="/home_page/section3/Layer 9.png"
            alt="KALAKAR — Who We Are: A Creative Media Agency Built For Impact. 1. Strategic, 2. Creative, 3. Cinematic, 4. Partnership"
            width={1920}
            height={1080}
            priority
            sizes="(min-width: 1920px) 1920px, 100vw"
            className={styles.desktopPlateImg}
          />

          {/* Interactive accessible hotspot targets over the 4 pillars */}
          <div className={styles.hotspotsGrid} aria-label="Four Pillars of KALAKAR">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className={styles.hotspotItem}
                tabIndex={0}
                role="article"
                aria-label={`Pillar ${pillar.number}: ${pillar.title}. ${pillar.description}`}
              >
                <div className={styles.hotspotGlow} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== MOBILE VIEWPORT (< 1024px): Ancient Sunlit Stone Stele Experience ===== */}
      <div className={styles.mobileResponsiveWrapper}>
        {/* Real photographic stone texture overlay matching references */}
        <div className={styles.mobileStoneTexture} aria-hidden="true" />
        <div className={`container ${styles.mobileInner}`}>
          {/* Header */}
          <div className={styles.mobileHeader}>
            <motion.div
              className={styles.carvedBadgeWrap}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.carvedBadge}>Who We Are</span>
            </motion.div>
            <motion.h2
              className={styles.carvedTitle}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              A Creative Media Agency Built For Impact
            </motion.h2>
            <motion.p
              className={styles.carvedLead}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            >
              KALAKAR helps businesses build memorable brands through strategic
              thinking and powerful visual storytelling. We believe creativity
              should do more than look good — it should create connections,
              build trust, and drive growth.
            </motion.p>
          </div>

          {/* Ancient Sunlit Stone Stele Cards with Carved Groove Conduit */}
          <div className={styles.timeline}>
            <motion.div
              className={styles.timelineGroove}
              initial={{ opacity: 0, scaleY: 0, y: 24 }}
              whileInView={{ opacity: 1, scaleY: 1, y: 0 }}
              viewport={{ once: true, margin: '-6%' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'top center' }}
              aria-hidden="true"
            />
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.number}
                className={styles.pillarCard}
                initial={{ opacity: 0, y: 36, x: -14 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: '-6%' }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.16,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className={styles.pillarNumeral}>
                  <span className={styles.numeralText}>{pillar.number}</span>
                </div>
                <div className={styles.pillarTextContent}>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarDesc}>{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
