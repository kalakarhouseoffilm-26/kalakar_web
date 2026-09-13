import Link from 'next/link'
import { FadeIn } from '@/components/ui/FadeIn'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <main className={styles.root}>
      <FadeIn className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>This page does not exist.</p>
        <Link href="/" className={styles.link}>
          Return home
        </Link>
      </FadeIn>
    </main>
  )
}
