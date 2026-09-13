'use client'

import React from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import styles from './ServicesPreview.module.css'

interface ServiceItem {
  id: string
  title: React.ReactNode
  description: string
  className: string
}

const serviceItems: ServiceItem[] = [
  {
    id: 'branding',
    title: 'BRANDING',
    description: 'Brand strategy, identity, logo design, and guidelines that define who you are.',
    className: styles.boxTopLeft,
  },
  {
    id: 'creative-production',
    title: (
      <>
        CREATIVE
        <br />
        PRODUCTION
      </>
    ),
    description: 'Photography, videography, corporate films, reels, and drone shoots.',
    className: styles.boxTopRight,
  },
  {
    id: 'marketing',
    title: 'MARKETING',
    description: 'Social media management, digital marketing, campaigns and influencer strategy.',
    className: styles.boxBottomLeft,
  },
  {
    id: 'design',
    title: 'DESIGN',
    description: 'Social creatives, posters, packaging, motion graphics, and marketing collateral.',
    className: styles.boxBottomRight,
  },
]

export function ServicesPreview() {
  const reducedMotion = useReducedMotion()

  return (
    <section className={styles.root} id="services" aria-label="What We Do — Our Services">
      {/* ===== LAYER 1: Deep Dark Forest Green (#071d07) + Subtle Radial Vignette ===== */}
      <div className={styles.bgVignette} aria-hidden="true" />
      <div className={styles.topBlendGradient} aria-hidden="true" />

      {/* ===== LAYER 2: BACKGROUND 1.png — Middle ground rocky mound landscape ===== */}
      <div className={styles.bgTerrainLayer} aria-hidden="true">
        <Image
          src="/home_page/section6/BACKGROUND 1.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgTerrainImg}
        />
      </div>

      {/* ===== LAYER 3: Main Stage (Left: WHAT WE DO. / Our Services | Right: 3.png 4 Hanging Frames) ===== */}
      <div className={styles.stageContainer}>
        <div className={styles.contentRow}>

          {/* LEFT COLUMN: Exactly 3 lines: WHAT / WE DO. / Our Services */}
          <div className={styles.leftColumn}>
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={styles.leftContent}
            >
              <h2 className={styles.mainTitle}>
                <span className={styles.whatGreen}>WHAT</span>
                <span className={styles.weDoLine}>
                  <span className={styles.weGreen}>WE </span>
                  <span className={styles.doRed}>DO.</span>
                </span>
              </h2>
              <span className={styles.subtitleScript}>Our Services</span>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: 3.png hanging frames anchored to the top + 4 parchment content boxes */}
          <div className={styles.rightColumn}>
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              className={styles.boardsWrapper}
            >
              {/* Wooden hanging frames graphic */}
              <Image
                src="/home_page/section6/3.png"
                alt="Services: Branding, Creative Production, Marketing, and Design"
                width={1155}
                height={812}
                priority
                sizes="(max-width: 1024px) 96vw, 60vw"
                className={styles.boardsImg}
              />

              {/* 4 Overlaid Service Content Boxes positioned inside the parchment canvas */}
              <div className={styles.boxesOverlay} aria-label="Service disciplines">
                {serviceItems.map((item) => (
                  <div
                    key={item.id}
                    className={`${styles.parchmentBox} ${item.className}`}
                  >
                    <div className={styles.boxContent}>
                      <h3 className={styles.boxTitle}>{item.title}</h3>
                      <p className={styles.boxDesc}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ===== LAYER 4 (FOREGROUND): BACKGROUND 2.png — Caveman & Bushes overlapping Marketing board ===== */}
      <div className={styles.foregroundLayer} aria-hidden="true">
        <Image
          src="/home_page/section6/BACKGROUND 2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.foregroundImg}
        />
      </div>
    </section>
  )
}

