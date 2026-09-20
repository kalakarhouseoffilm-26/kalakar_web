'use client'

import React, { useState, useCallback, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import styles from './MobileExperience.module.css'

interface CarouselCard {
  id: string
  headingFirst: string
  headingSecond: string
  title: string
  description: React.ReactNode
  buttonText: string
  buttonHref: string
  bgImage: string
  charImage: string
}

const CAROUSEL_ITEMS: CarouselCard[] = [
  {
    id: 'films',
    headingFirst: 'OUr',
    headingSecond: 'Films',
    title: 'OUR FILMS',
    description: (
      <>
        <strong>Stories. Visuals. Emotion.</strong>
        <br />
        We turn ideas into cinematic experiences that people remember.
      </>
    ),
    buttonText: 'Watch now',
    buttonHref: '/films',
    bgImage: '/medium_device/cave_art_bg.png',
    charImage: '/medium_device/artist_caveman.png',
  },
  {
    id: 'about',
    headingFirst: 'ABout',
    headingSecond: 'Us',
    title: 'ABOUT US',
    description: (
      <>
        A creative film house driven by <strong>ideas, stories, and visual expression</strong>. We create cinematic films and creative advertisements designed to connect, communicate, and be remembered.
      </>
    ),
    buttonText: 'Learn more',
    buttonHref: '/about',
    bgImage: '/medium_device/canyon_bg.png',
    charImage: '/medium_device/sculptor_caveman.png',
  },
  {
    id: 'contact',
    headingFirst: 'CONtact',
    headingSecond: 'Us',
    title: 'CONTACT US',
    description: (
      <>
        Have a tale to tell or an ambitious production in mind? Dial into the studio — let&apos;s craft something unforgettable together.
      </>
    ),
    buttonText: 'Contact us',
    buttonHref: '/contact',
    bgImage: '/medium_device/mountains_bg.png',
    charImage: '/medium_device/banana_phone_caveman.png',
  },
]

export function MobileExperience() {
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState(0) // Default to 'OUR FILMS'
  const isDraggingRef = useRef(false)

  // Sync activeIndex with URL hash (e.g. #contact or #about) if user lands on or navigates to a hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace(/^#/, '').toLowerCase()
      if (!hash) return

      let targetIndex = -1
      if (hash === 'contact') {
        targetIndex = CAROUSEL_ITEMS.findIndex((item) => item.id === 'contact')
      } else if (hash === 'about') {
        targetIndex = CAROUSEL_ITEMS.findIndex((item) => item.id === 'about')
      } else if (hash === 'films' || hash === 'work') {
        targetIndex = CAROUSEL_ITEMS.findIndex((item) => item.id === 'films')
      }

      if (targetIndex !== -1) {
        setActiveIndex(targetIndex)
        // Scroll carousel into view smoothly
        const el = document.getElementById('mobile-carousel')
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  // Restore state from sessionStorage on mount (for Back button navigation)
  useEffect(() => {
    const savedIndex = sessionStorage.getItem('mobileCarouselIndex')
    if (savedIndex !== null) {
      setActiveIndex(parseInt(savedIndex, 10))
    }

    const returnToCarousel = sessionStorage.getItem('returnToCarousel')
    if (returnToCarousel === 'true') {
      sessionStorage.removeItem('returnToCarousel')
      setTimeout(() => {
        const el = document.getElementById('mobile-carousel')
        if (el) {
          el.scrollIntoView({ behavior: 'instant' })
        }
      }, 50)
    }
  }, [])

  // Persist state to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('mobileCarouselIndex', activeIndex.toString())
  }, [activeIndex])

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length)
  }, [])

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length)
  }, [])

  const handleDragStart = useCallback(() => {
    isDraggingRef.current = true
  }, [])

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const threshold = 35
      if (info.offset.x < -threshold) {
        handleNext()
      } else if (info.offset.x > threshold) {
        handlePrev()
      }
      // Reset drag state after a tick so the click handler can check it
      requestAnimationFrame(() => {
        isDraggingRef.current = false
      })
    },
    [handleNext, handlePrev]
  )

  const handleButtonClick = useCallback(
    (e: React.MouseEvent, href: string) => {
      e.preventDefault()
      e.stopPropagation()
      // Don't navigate if the user just finished dragging
      if (isDraggingRef.current) return
      
      // Set flag so we return to carousel when navigating back
      sessionStorage.setItem('returnToCarousel', 'true')
      router.push(href)
    },
    [router]
  )

  const activeItem = CAROUSEL_ITEMS[activeIndex]

  return (
    <div className={styles.mobileContainer}>
      {/* ===================================================
          SCREEN 1: Mobile Hero / Brand Banner
          =================================================== */}
      <section className={styles.heroSection} id="mobile-hero">
        {/* Ambient background glow & dark overlay */}
        <div className={styles.heroAmbientGlow} aria-hidden="true" />
        <div className={styles.heroVignette} aria-hidden="true" />

        {/* Brand Logo & Tagline */}
        <div className={styles.heroLogoWrapper}>
          <Image
            src="/navbar/Kalakar.png"
            alt="KALAKAR"
            width={337}
            height={111}
            priority
            className={styles.heroLogoImg}
          />
        </div>

        <div className={styles.heroTagline}>HOUse of Films</div>

        {/* Cave man 1: pinned at left: 0, bottom: 0 with initial load zoom-in animation */}
        <motion.div
          className={styles.heroCavemanWrapper}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/medium_device/camera_caveman.png"
            alt="Kalakar Filmmaker"
            width={357}
            height={487}
            priority
            className={styles.heroCavemanImg}
          />
          <div className={styles.cavemanBlendBox} aria-hidden="true" />
        </motion.div>

        {/* Bottom base shadow */}
        <div className={styles.heroBottomShadow} aria-hidden="true" />

        {/* ===================================================
            SEAM FOLIAGE: Positioned at the bottom boundary of
            Section 1 overlapping into Section 2 at top layer z-index: 900
            =================================================== */}
        <div className={styles.seamLeavesContainer} aria-hidden="true">
          {/* Leaf right Side 1.png */}
          <div className={styles.seamLeafRightSide}>
            <Image
              src="/medium_device/Leaf right Side 1.png"
              alt=""
              width={335}
              height={345}
              priority
              className={styles.seamLeafImg}
            />
          </div>

          {/* —Pngtree—free vector big green leaf_9139719 1.png */}
          <div className={styles.seamLeafGreen}>
            <Image
              src="/medium_device/big_leaf_shadow.png"
              alt=""
              width={392}
              height={392}
              priority
              className={styles.seamLeafImg}
            />
          </div>
        </div>
      </section>

      {/* ===================================================
          SCREEN 2: Dynamic 3-Section Peek Carousel
          =================================================== */}
      <section className={styles.carouselSection} id="mobile-carousel">
        <div className={styles.carouselVignette} aria-hidden="true" />

        {/* Dynamic Kinetic Heading matching Pinterest / Figma interaction */}
        <div className={styles.headingContainer}>
          <AnimatePresence mode="wait">
            <motion.h2
              key={activeItem.id}
              initial={{ y: 22, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -22, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className={styles.dynamicHeading}
            >
              {activeItem.headingFirst}
              <br />
              {activeItem.headingSecond}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Interactive Card Track matching Figma layout: gap: 12px, active 303.37px, side 232px */}
        <div className={styles.carouselStage}>
          {CAROUSEL_ITEMS.map((item, index) => {
            let diff = index - activeIndex
            if (diff === 2) diff = -1
            if (diff === -2) diff = 1

            const isActive = diff === 0

            // Exact Figma layout:
            // Active card center at x: 0 (303.37px width)
            // Left card center at x: -( (303.37/2) + 12 + (232/2) ) = -279.7px
            // Right card center at x: +( (303.37/2) + 12 + (232/2) ) = +279.7px
            const xOffset = diff * 280
            const zIndex = isActive ? 10 : 5
            const opacity = isActive ? 1 : 0.65

            return (
              <motion.div
                key={item.id}
                id={`mobile-card-${item.id}`}
                className={`${styles.card} ${isActive ? styles.activeCard : styles.sideCard}`}
                animate={{
                  x: xOffset,
                  opacity: opacity,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 28,
                }}
                style={{
                  zIndex: zIndex,
                  pointerEvents: 'auto',
                }}
                drag={isActive ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onClick={() => {
                  if (!isActive) setActiveIndex(index)
                }}
              >
                {/* Card Illustration Container */}
                <div className={styles.cardImageContainer}>
                  <Image
                    src={item.bgImage}
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 768px) 304px, 320px"
                    className={styles.cardBgImg}
                  />

                  {/* Main PNG layer with zoom-in entrance animation from small to full size */}
                  <motion.div
                    className={styles.cardCharWrapper}
                    animate={
                      isActive
                        ? { scale: [0.35, 1.05, 1.0], opacity: [0, 1, 1] }
                        : { scale: 0.6, opacity: 0.5 }
                    }
                    transition={{
                      duration: 0.65,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Image
                      src={item.charImage}
                      alt={item.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 304px, 320px"
                      className={styles.cardCharImg}
                    />
                  </motion.div>
                </div>

                {/* Card Content & Action */}
                <div className={styles.cardContent}>
                  <p className={styles.cardDescription}>{item.description}</p>

                  <button
                    type="button"
                    className={styles.cardButton}
                    onPointerDownCapture={(e) => e.stopPropagation()}
                    onClick={(e) => handleButtonClick(e, item.buttonHref)}
                  >
                    {item.buttonText}
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
