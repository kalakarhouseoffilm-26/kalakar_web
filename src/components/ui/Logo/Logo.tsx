import Image from 'next/image'
import Link from 'next/link'
import { useLogo } from './useLogo'
import styles from './Logo.module.css'

export type LogoProps = { className?: string }

export function Logo({ className = '' }: LogoProps) {
  const { name, href } = useLogo()

  return (
    <Link
      href={href}
      className={`${styles.logo} ${className}`}
      aria-label={`${name} home`}
    >
      <Image
        src="/navbar/Logo.png"
        alt={`${name} emblem`}
        width={44}
        height={44}
        priority
        className={styles.markImg}
      />
    </Link>
  )
}
