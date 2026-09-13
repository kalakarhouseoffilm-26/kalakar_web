'use client'

import { useRef } from 'react'
import {
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion'

export function useIntroReveal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Smooth spring physics for fluid cinematic zoom
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  })

  // Layer 1 (Background): Zoom in
  const bgScale = useTransform(smoothProgress, [0, 1], [1.0, 1.18])
  const bgBrightness = useTransform(smoothProgress, [0, 1], [1.0, 0.85])

  // Layer 2 (Caveman & Title): Subtle parallax zoom & gentle upward motion
  const midScale = useTransform(smoothProgress, [0, 1], [1.0, 1.07])
  const midY = useTransform(smoothProgress, [0, 1], ['0%', '-4%'])

  // Foreground leaves: Zoom and part gently, staying visible throughout without disappearing
  const leafLeftX = useTransform(smoothProgress, [0, 0.85], ['0%', '-22%'])
  const leafLeftScale = useTransform(smoothProgress, [0, 0.85], [1.0, 1.15])
  const leafLeftRotate = useTransform(smoothProgress, [0, 0.85], [0, -6])
  const leafLeftOpacity = useTransform(smoothProgress, [0, 1], [1.0, 1.0])

  const leafRightX = useTransform(smoothProgress, [0, 0.85], ['0%', '22%'])
  const leafRightScale = useTransform(smoothProgress, [0, 0.85], [1.0, 1.15])
  const leafRightRotate = useTransform(smoothProgress, [0, 0.85], [0, 6])
  const leafRightOpacity = useTransform(smoothProgress, [0, 1], [1.0, 1.0])

  // Scroll cue: fades out early
  const scrollCueOpacity = useTransform(smoothProgress, [0, 0.2], [1.0, 0])

  return {
    containerRef,
    reducedMotion,
    bgScale,
    bgBrightness,
    midScale,
    midY,
    leafLeftX,
    leafLeftScale,
    leafLeftRotate,
    leafLeftOpacity,
    leafRightX,
    leafRightScale,
    leafRightRotate,
    leafRightOpacity,
    scrollCueOpacity,
  }
}
