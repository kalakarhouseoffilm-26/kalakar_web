'use client'

import React from 'react'
import { FadeIn } from '@/components/ui/FadeIn'
import { site } from '@/data/site'
import styles from './CTA.module.css'

export function CTA() {
  return (
    <section className={styles.root} id="contact" aria-label="Contact KALAKAR">
      <div className={`container ${styles.inner}`}>
        <FadeIn className={styles.content}>
          <p
            lang="ml"
            style={{
              fontFamily: 'var(--font-malayalam)',
              color: 'var(--color-ember)',
              fontSize: 'clamp(1.22rem, 2.7vw, 1.65rem)',
              fontWeight: 600,
            }}
          >
            ഒരുമിച്ച് തുടങ്ങാം
          </p>
          <h2 className={styles.title}>
            Ready to Build Your <span className={styles.titleAccent}>Brand&apos;s Story?</span>
          </h2>
          <p className={styles.subtitle}>
            Reach out directly to start a conversation with our creative team. No forms, no wait — just reach us on WhatsApp or Instagram.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className={styles.actions}>
          {/* WhatsApp Direct */}
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.53 1.77.78 2.796.78 3.182 0 5.768-2.586 5.769-5.766.001-3.182-2.585-5.766-5.769-5.766zm3.376 8.21c-.14.394-.814.729-1.127.777-.314.048-.71.077-2.045-.445-1.708-.667-2.812-2.399-2.898-2.513-.085-.114-.694-.925-.694-1.764 0-.839.439-1.253.595-1.424.156-.171.341-.214.455-.214.114 0 .228.001.328.006.105.006.246-.04.385.293.14.333.484 1.18.527 1.266.043.085.071.185.014.3-.057.114-.085.185-.171.285-.085.1-.179.223-.256.3-.085.085-.174.178-.075.348.099.171.442.729.948 1.18.651.58 1.199.76 1.37.845.171.086.271.071.371-.043.1-.114.428-.499.542-.67.114-.171.228-.143.385-.086.157.057.998.47 1.169.556.171.085.285.128.328.2.043.071.043.413-.097.807zM12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.66 1.438 5.168L2 22l4.981-1.306A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
            </svg>
            Message on WhatsApp ↗
          </a>

          {/* Instagram Direct */}
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramBtn}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow on Instagram ↗
          </a>
        </FadeIn>
      </div>
      <span className={styles.glow} aria-hidden="true" />
    </section>
  )
}
