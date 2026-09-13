'use client'

import React from 'react'
import { Logo } from '@/components/ui/Logo'
import { site } from '@/data/site'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={`container ${styles.inner}`}>
        <Logo />
        <span className={styles.date}>{site.copyright}</span>
      </div>
    </footer>
  )
}
