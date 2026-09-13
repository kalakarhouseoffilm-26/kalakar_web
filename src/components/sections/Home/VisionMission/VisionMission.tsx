'use client'

import React from 'react'
import { FadeIn } from '@/components/ui/FadeIn'
import styles from './VisionMission.module.css'

export function VisionMission() {
  return (
    <section className={styles.root} aria-label="Our Purpose — Vision &amp; Mission">
      {/* Dynamic layered CSS gradient background with ambient motion */}
      <div className={styles.bgFrame} aria-hidden="true">
        <div className={styles.ambientGlow1} />
        <div className={styles.ambientGlow2} />
        <div className={styles.ambientGrid} />
      </div>

      <div className="container">
        {/* Section header */}
        <FadeIn delay={0} className={styles.header}>
          <span className={styles.badge}>Our Purpose</span>
          <h2 className={styles.sectionTitle}>
            VISION &amp; <span className={styles.titleAccent}>MISSION</span>
          </h2>
          <p lang="ml" className={styles.malayalamLine}>
            നമ്മുടെ ലക്ഷ്യം
          </p>
        </FadeIn>

        {/* Two elevated cards */}
        <div className={styles.cardsGrid}>

          {/* VISION Card */}
          <FadeIn delay={0.08}>
            <div className={styles.card} data-accent="ember">
              <div className={styles.cardTop}>
                <div className={styles.cardIcon} aria-hidden="true">
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                    <path d="M2 16C2 16 7 6 16 6C25 6 30 16 30 16C30 16 25 26 16 26C7 26 2 16 2 16Z"
                      stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2" />
                    <circle cx="16" cy="16" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>VISION</h3>
              </div>
              <p className={styles.cardStatement}>
                To become one of India&apos;s most trusted creative agencies —
                helping businesses transform into unforgettable brands through
                creativity, innovation, and strategic storytelling that stands
                the test of time.
              </p>
              <div className={styles.cardRule} />
              <p className={styles.cardCoda}>Carved in stone. Built for impact.</p>
            </div>
          </FadeIn>

          {/* MISSION Card */}
          <FadeIn delay={0.16}>
            <div className={styles.card} data-accent="moss">
              <div className={styles.cardTop}>
                <div className={styles.cardIcon} aria-hidden="true">
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
                    <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2" />
                    <line x1="16" y1="4" x2="16" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="16" y1="24" x2="16" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="4" y1="16" x2="8" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="24" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="20" y1="16" x2="24" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>MISSION</h3>
              </div>
              <p className={styles.cardStatement}>
                To empower businesses with impactful branding, cinematic content,
                and innovative marketing that builds meaningful relationships
                between brands and people. We measure success not just in
                deliverables, but in the lasting impact we create for every brand
                we partner with.
              </p>
              <div className={styles.cardRule} />
              <p className={styles.cardCoda}>Stories that build brands.</p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
