'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './MobileChildPage.module.css'

interface MobileChildPageProps {
  title: string
  subtitle: React.ReactNode
  bgImage: string
  charImage: string
  children?: React.ReactNode
}

export function MobileChildPage({
  title,
  subtitle,
  bgImage,
  charImage,
  children,
}: MobileChildPageProps) {
  const router = useRouter()

  return (
    <div className={styles.mobileOnly}>
      <main className={styles.filmScreen}>
        {/* Black-to-green base background (responsive fill) */}
        <div className={styles.baseGradient} aria-hidden="true" />

        {/* Cave/environment image */}
        <div className={styles.environmentWrapper} aria-hidden="true">
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 888px"
            className={styles.environment}
          />
        </div>

        {/* Character and stone artwork */}
        <div className={styles.charactersWrapper} aria-hidden="true">
          <Image
            src={charImage}
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 450px"
            className={styles.characters}
          />
        </div>

        {/* Soft black transition below artwork */}
        <div className={styles.blackFade} aria-hidden="true" />

        {/* Subtle green glow at the bottom */}
        <div className={styles.greenGlow} aria-hidden="true" />

        {/* Foreground Content */}
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.subtitle}>{subtitle}</div>
          {children && <div className={styles.body}>{children}</div>}
        </div>
      </main>
    </div>
  )
}
