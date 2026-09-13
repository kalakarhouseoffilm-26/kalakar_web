'use client'

import React from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import styles from './Hero.module.css'

export function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      className={styles.section}
      id="home"
      aria-label="Stories that Build Brands"
    >
      {/* Ambient atmospheric vignette for depth */}
      <div className={styles.bgVignette} aria-hidden="true" />

      {/* Seamless blended black gradient from top to bottom blending with Section 1 */}
      <div className={styles.topBlendGradient} aria-hidden="true" />

      {/* Seamless bottom blend gradient into Section 3 (#b07d4c) */}
      <div className={styles.bottomBlendGradient} aria-hidden="true" />

      {/* Layer 2: Caveman Sculptor carving stone totem (Increased size, anchored bottom right) */}
      <div className={styles.sculptorWrap}>
        <div className={styles.sculptorInner}>
          <Image
            src="/home_page/section2/second__layer.png"
            alt="Caveman sculptor carving stone totem"
            width={1200}
            height={720}
            priority
            sizes="(max-width: 900px) 95vw, 68vw"
            className={styles.sculptorImg}
          />
        </div>
      </div>

      {/* Layer 3: Top Left Tropical Leaf with breeze sway motion */}
      <div className={`${styles.leafThird} ${styles.leafThirdLeft}`}>
        <div className={styles.leafSwayLeft}>
          <Image
            src="/home_page/section2/third_left_top.png"
            alt=""
            width={340}
            height={400}
            priority
            sizes="(max-width: 768px) 35vw, 20vw"
            className={styles.leafImg}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Layer 3: Top Right Palm Frond with breeze sway motion */}
      <div className={`${styles.leafThird} ${styles.leafThirdRight}`}>
        <div className={styles.leafSwayRight}>
          <Image
            src="/home_page/section2/third_right_top.png"
            alt=""
            width={340}
            height={340}
            priority
            sizes="(max-width: 768px) 35vw, 20vw"
            className={styles.leafImg}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Layer 4: Bottom Left Foreground Monstera Leaf */}
      <div className={styles.fourthLayerBottomLeft}>
        <div className={styles.leafSwayBottom}>
          <Image
            src="/home_page/section2/fourth_layer_bottom_left.png"
            alt=""
            width={420}
            height={420}
            priority
            sizes="(max-width: 768px) 40vw, 24vw"
            className={styles.leafImg}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Content Column: Stories that BUILD BRANDS — TOP LAYER with generous left-to-right padding */}
      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.content}
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.eyebrowScript}>Stories that</span>
          <h2 className={styles.title}>
            <span className={styles.titleHighlight}>BUILD</span>
            <span className={styles.titleWhite}>BRANDS</span>
          </h2>

          <p className={styles.lead}>
            A full-service creative media agency built on passion, craft, and
            the belief that every brand has a story worth telling.
          </p>

          <div className={styles.actions}>
            <Button href="#services" variant="primary" className={styles.primaryBtn}>
              Explore Our Services
            </Button>
            <Button href="#work" variant="ghost" className={styles.ghostBtn}>
              View Showcase
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
