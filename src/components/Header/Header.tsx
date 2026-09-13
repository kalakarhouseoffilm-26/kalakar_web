'use client'
import { Logo } from '@/components/ui/Logo'
import { site } from '@/data/site'
import { useHeader } from './useHeader'
import styles from './Header.module.css'

export function Header() {
  const { isOpen, isScrolled, activeSection, toggle, close, menuRef, toggleRef } = useHeader()

  function isActive(href: string) {
    const targetId = href.replace(/^#/, '')
    return activeSection === targetId
  }

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : styles.headerTransparent}`}
    >
      <div className={`container ${styles.inner}`}>
        <Logo />
        <div className={styles.mobileRightActions}>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileWhatsappBtn}
            aria-label="Direct WhatsApp message"
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 12 3 C 7.03 3 3 7.03 3 12 C 3 13.68 3.46 15.26 4.28 16.62 L 3.4 20.1 C 3.28 20.55 3.68 20.95 4.13 20.83 L 7.6 19.95 C 8.95 20.62 10.45 21 12 21 C 16.97 21 21 16.97 21 12 C 21 7.03 16.97 3 12 3 Z"
              />
              <path
                fill="currentColor"
                d="M 8.6 7.8 C 8.35 7.8 8.1 7.9 7.9 8.15 C 7.6 8.45 6.9 9.15 6.9 10.4 C 6.9 11.65 7.75 12.8 7.9 13 C 8.05 13.2 9.6 15.65 12 16.7 C 13.9 17.5 14.5 17.35 14.9 17.3 C 15.4 17.25 16.3 16.75 16.5 16.2 C 16.7 15.65 16.7 15.15 16.65 15.05 C 16.6 14.95 16.45 14.9 16.2 14.8 C 15.95 14.7 14.8 14.15 14.6 14.05 C 14.4 13.95 14.25 13.9 14.1 14.15 C 13.95 14.4 13.5 14.95 13.35 15.1 C 13.2 15.25 13.05 15.25 12.8 15.15 C 12.55 15.05 11.8 14.8 10.85 13.95 C 10.15 13.3 9.65 12.55 9.5 12.3 C 9.35 12.05 9.5 11.9 9.6 11.8 C 9.7 11.7 9.85 11.5 10 11.35 C 10.15 11.2 10.2 11.1 10.25 10.95 C 10.3 10.8 10.25 10.65 10.2 10.55 C 10.15 10.45 9.7 9.3 9.5 8.8 C 9.3 8.35 9.1 8.4 8.95 8.4 C 8.85 8.4 8.7 8.3 8.6 7.8 Z"
              />
            </svg>
          </a>
          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            onClick={toggle}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label="Toggle navigation menu"
          >
            <span className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`} aria-hidden="true" />
            <span className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`} aria-hidden="true" />
            <span className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`} aria-hidden="true" />
          </button>
        </div>
        <nav
          id="primary-navigation"
          ref={menuRef}
          className={`${styles.nav} ${isOpen ? styles.open : ''}`}
          aria-hidden={!isOpen}
        >
          <ul className={styles.list}>
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.link}
                  onClick={close}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            onClick={close}
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  )
}
