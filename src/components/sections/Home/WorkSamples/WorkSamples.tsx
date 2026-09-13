'use client'

import React from 'react'
import { FadeIn } from '@/components/ui/FadeIn'
import { site } from '@/data/site'
import styles from './WorkSamples.module.css'

export function WorkSamples() {
  return (
    <section className={styles.root} id="work" aria-label="Our Work — Adobe Portfolio Showcase">
      <div className="container">
        <div className={styles.header}>
          <FadeIn delay={0}>
            <span className={styles.badge}>Portfolio & Showcase</span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className={styles.title}>
              Our <span className={styles.titleEmber}>Work</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className={styles.subtitle}>
              Explore our curated campaigns, visual identities, and cinematic brand stories live from our portfolio.
            </p>
          </FadeIn>
          <FadeIn delay={0.24}>
            <div className={styles.actionWrap}>
              <a
                href={site.adobePortfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.externalLinkBtn}
              >
                Explore our portfolio
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Photorealistic Browser Frame around Adobe Portfolio Live Iframe */}
        <FadeIn delay={0.3} className={styles.browserFrameWrap} data-lenis-prevent>
          <div className={styles.browserChrome}>
            <div className={styles.windowControls} aria-hidden="true">
              <span className={`${styles.controlDot} ${styles.dotRed}`} />
              <span className={`${styles.controlDot} ${styles.dotYellow}`} />
              <span className={`${styles.controlDot} ${styles.dotGreen}`} />
            </div>

            <div className={styles.addressBar}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.lockIcon}
                aria-hidden="true"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className={styles.addressText}>kalakarhouseoffilm.myportfolio.com</span>
            </div>

            <a
              href={site.adobePortfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.openDirectBtn}
              aria-label="Open portfolio in full window"
            >
              Full Screen ↗
            </a>
          </div>

          <div className={styles.iframeContainer} data-lenis-prevent>
            <iframe
              src={site.adobePortfolioUrl}
              title="KALAKAR House of Film Portfolio Showcase"
              className={styles.portfolioIframe}
              scrolling="yes"
              data-lenis-prevent
              loading="eager"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
