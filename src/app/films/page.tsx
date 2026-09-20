import type { Metadata } from 'next'
import { WorkSamples } from '@/components/sections/Home/WorkSamples'
import { MobileChildPage } from '@/components/MobileChildPage/MobileChildPage'
import styles from './films.module.css'

export const metadata: Metadata = {
  title: 'Our Films — KALAKAR House of Film',
  description:
    'From captivating brand films and ads to evocative visual odysseys, explore our cinematic creations.',
}

export default function FilmsPage() {
  return (
    <>
      {/* Mobile-only view following exact Figma child screen specifications */}
      <MobileChildPage
        title="OUR FILMS"
        subtitle={
          <>
            <strong>Stories. Visuals. Emotion.</strong>
            <br />
            We turn ideas into cinematic experiences that people remember. From captivating brand
            films to evocative visual odysseys, we produce cinema that sparks profound emotion.
          </>
        }
        bgImage="/medium_device/cave_art_bg.png"
        charImage="/medium_device/artist_caveman.png"
      >
        <div className={styles.mobileIframeWrapper}>
          <iframe
            src="https://kalakarhouseoffilm.myportfolio.com/"
            title="KALAKAR Films Portfolio"
            className={styles.mobileIframe}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
        <div className={styles.viewMoreWrap}>
          <a
            href="https://kalakarhouseoffilm.myportfolio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewMoreLink}
          >
            <span>View full portfolio</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </MobileChildPage>

      {/* Desktop view */}
      <main className={`${styles.filmsPage} desktopOnly`}>
        <div className={styles.heroSection}>
          <div className="container">
            <span className={styles.kicker}>Cinematic Productions</span>
            <h1 className={styles.heading}>OUR FILMS</h1>
            <p className={styles.subheading}>
              From captivating brand films and ads to evocative visual odysseys, we direct and
              produce cinema that sparks profound emotion.
            </p>
          </div>
        </div>
        <WorkSamples />
      </main>
    </>
  )
}
