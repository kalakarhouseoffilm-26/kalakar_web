'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './CursorTracker.module.css'

export function CursorTracker() {
  const dotRef = useRef<HTMLDivElement>(null)
  const haloRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const posRef = useRef({ x: -200, y: -200 })
  const haloPos = useRef({ x: -200, y: -200 })
  const rafRef = useRef<number>(0)
  const isHoveringRef = useRef(false)

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse/trackpad)
    const mq = window.matchMedia('(pointer: fine)')
    if (!mq.matches) return

    function onMove(e: MouseEvent) {
      posRef.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)
    }

    function onEnterInteractive() {
      isHoveringRef.current = true
      haloRef.current?.classList.add(styles.haloHover)
    }
    function onLeaveInteractive() {
      isHoveringRef.current = false
      haloRef.current?.classList.remove(styles.haloHover)
    }

    // Lerp halo position in rAF loop
    function animate() {
      const lerpFactor = 0.1
      haloPos.current.x += (posRef.current.x - haloPos.current.x) * lerpFactor
      haloPos.current.y += (posRef.current.y - haloPos.current.y) * lerpFactor

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`
      }
      if (haloRef.current) {
        haloRef.current.style.transform = `translate(${haloPos.current.x}px, ${haloPos.current.y}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    // Apply hover effect to interactive elements
    const interactiveSelectors = 'a, button, [role="button"], input, textarea, select, label'
    const interactives = document.querySelectorAll<HTMLElement>(interactiveSelectors)
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnterInteractive)
      el.addEventListener('mouseleave', onLeaveInteractive)
    })

    window.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnterInteractive)
        el.removeEventListener('mouseleave', onLeaveInteractive)
      })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* Main dot — precise cursor position */}
      <div
        ref={dotRef}
        className={`${styles.dot} ${visible ? styles.visible : ''}`}
        aria-hidden="true"
      />
      {/* Halo — lagging torch glow ring */}
      <div
        ref={haloRef}
        className={`${styles.halo} ${visible ? styles.visible : ''}`}
        aria-hidden="true"
      />
    </>
  )
}
