'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'
import Link from 'next/link'
import { useButton } from './useButton'
import styles from './Button.module.css'

export type ButtonProps = Omit<HTMLMotionProps<'button'>, 'children'> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outlineOrange'
  href?: string
  children?: React.ReactNode
  fullWidth?: boolean
}

export function Button({
  children,
  variant = 'primary',
  href,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const { reduced } = useButton()
  const variantClass = {
    primary: styles.primary,
    secondary: styles.secondary,
    ghost: styles.ghost,
    outlineOrange: styles.outlineOrange,
  }[variant]
  const classes =
    `${styles.button} ${variantClass} ${fullWidth ? styles.fullWidth : ''} ${className}`.trim()

  if (href) {
    return (
      <motion.span
        whileHover={reduced ? undefined : { scale: 1.03 }}
        whileTap={reduced ? undefined : { scale: 0.98 }}
        className={styles.motionWrap}
      >
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.span>
    )
  }

  return (
    <motion.button
      type={props.type || 'button'}
      {...props}
      className={classes}
      whileHover={reduced ? undefined : { scale: 1.03 }}
      whileTap={reduced ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}
