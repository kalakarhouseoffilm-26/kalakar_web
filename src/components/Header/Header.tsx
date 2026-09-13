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
