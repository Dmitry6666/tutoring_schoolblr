import { useEffect, useState } from 'react'
import { ArrowUpRight, Mail, Menu, Phone, X } from 'lucide-react'
import { navigation, site } from '../data/site'
import { Logo } from './Logo'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    const handleResize = () => {
      if (window.innerWidth > 960) setMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-menu-open' : ''}`}
      >
        <div className="container header__inner">
          <Logo onClick={closeMenu} />

          <nav className="header__nav" aria-label="Основная навигация">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="header__nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <a className="header__phone" href={site.phoneHref}>
              {site.phone}
            </a>
            <a className="button button--small header__cta" href="#contacts">
              Записаться
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <button
              className="burger"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu__inner">
          <nav className="mobile-menu__nav" aria-label="Мобильная навигация">
            {navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-menu__link"
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                <span className="mobile-menu__index">0{index + 1}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mobile-menu__footer">
            <a
              href={site.phoneHref}
              className="mobile-menu__contact"
              tabIndex={menuOpen ? 0 : -1}
            >
              <Phone size={18} aria-hidden="true" />
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="mobile-menu__contact"
              tabIndex={menuOpen ? 0 : -1}
            >
              <Mail size={18} aria-hidden="true" />
              {site.email}
            </a>
            <a
              href="#contacts"
              className="button button--accent mobile-menu__cta"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              Записаться на знакомство
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
