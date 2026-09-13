import { FadeIn } from '@/components/ui/FadeIn'
import { useSectionHeading } from './useSectionHeading'
import styles from './SectionHeading.module.css'

export type SectionHeadingProps = {
  title: string
  subtitle?: string
  tag?: string
  align?: 'left' | 'center' | 'right'
}

export function SectionHeading({
  title,
  subtitle,
  tag,
  align = 'left',
}: SectionHeadingProps) {
  const { id, subtitleId } = useSectionHeading(title, subtitle)

  return (
    <FadeIn className={`${styles.root} ${styles[align]}`}>
      {tag && <p className={styles.tag}>{tag}</p>}
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {subtitle && (
        <p id={subtitleId} className={styles.subtitle}>
          {subtitle}
        </p>
      )}
    </FadeIn>
  )
}
