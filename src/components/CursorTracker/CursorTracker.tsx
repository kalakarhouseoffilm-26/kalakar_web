'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './CursorTracker.module.css'

export function CursorTracker() {
  const dotRef = useRef<HTMLDivElement>(null)
  const haloRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const visibleRef = useRef(false)
  const posRef = useRef({ x: -200, y: -200 })
  const haloPos = useRef({ x: -200, y: -200 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    if (!mq.matches) return

    function onMove(e: MouseEvent) {
      posRef.current = { x: e.clientX, y: e.clientY }
      if (!visibleRef.current) {
        visibleRef.current = true
        setVisible(true)
      }
    }

    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement | null
      if (!target) return
      const interactive = target.closest('a, button, [role="button"], input, textarea, select, label')
      if (interactive) {
        haloRef.current?.classList.add(styles.haloHover)
      } else {
        haloRef.current?.classList.remove(styles.haloHover)
      }
    }

    function onLeave() {
      visibleRef.current = false
      setVisible(false)
    }

    function animate() {
      const lerpFactor = 0.15
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

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className={`${styles.dot} ${visible ? styles.visible : ''}`}
        aria-hidden="true"
      />
      <div
        ref={haloRef}
        className={`${styles.halo} ${visible ? styles.visible : ''}`}
        aria-hidden="true"
      />
    </>
  )
}
