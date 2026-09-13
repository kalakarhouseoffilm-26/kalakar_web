'use client'

import { useMarquee } from './useMarquee'
import styles from './Marquee.module.css'
import type { IconComponent } from '@/components/icons'

export type MarqueeItem = {
  label: string
  icon?: IconComponent
}

export type MarqueeProps = {
  items: MarqueeItem[]
}

export function Marquee({ items }: MarqueeProps) {
  const { reduced, renderItems } = useMarquee(items)
  const label = items.map((item) => item.label).join(', ')

  return (
    <div className={styles.root} role="marquee" aria-label={label}>
      <div
        className={`${styles.track} ${reduced ? styles.paused : ''}`}
        aria-hidden="true"
      >
        {renderItems.map(({ label: text, icon: Icon }, index) => (
          <span key={index} className={styles.item}>
            {Icon ? (
              <Icon className={styles.icon} aria-hidden="true" />
            ) : (
              <span className={styles.dot} />
            )}
            {text}
          </span>
        ))}
      </div>
      <div
        className={`${styles.track} ${reduced ? styles.paused : ''}`}
        aria-hidden="true"
      >
        {renderItems.map(({ label: text, icon: Icon }, index) => (
          <span key={index} className={styles.item}>
            {Icon ? (
              <Icon className={styles.icon} aria-hidden="true" />
            ) : (
              <span className={styles.dot} />
            )}
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
