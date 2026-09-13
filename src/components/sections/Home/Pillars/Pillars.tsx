'use client'

import React from 'react'
import Image from 'next/image'
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
            <div className={styles.carvedBadgeWrap}>
              <span className={styles.carvedBadge}>Who We Are</span>
            </div>
            <h2 className={styles.carvedTitle}>
              A Creative Media Agency Built For Impact
            </h2>
            <p className={styles.carvedLead}>
              KALAKAR helps businesses build memorable brands through strategic
              thinking and powerful visual storytelling. We believe creativity
              should do more than look good — it should create connections,
              build trust, and drive growth.
            </p>
          </div>

          {/* Ancient Sunlit Stone Stele Cards with Carved Groove Conduit */}
          <div className={styles.timeline}>
            <div className={styles.timelineGroove} aria-hidden="true" />
            {pillars.map((pillar) => (
              <div key={pillar.number} className={styles.pillarCard}>
                <div className={styles.pillarNumeral}>
                  <span className={styles.numeralText}>{pillar.number}</span>
                </div>
                <div className={styles.pillarTextContent}>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarDesc}>{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
