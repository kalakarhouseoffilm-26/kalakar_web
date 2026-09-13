'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useFoliageFrame } from './useFoliageFrame'
import styles from './FoliageFrame.module.css'
export function FoliageFrame() {
  const { y } = useFoliageFrame()
  return (
    <motion.div className={styles.frame} style={{ y }} aria-hidden="true">
      <Image src="/home_page/section2/third_left_top.png" alt="" fill sizes="100vw" />
    </motion.div>
  )
}
