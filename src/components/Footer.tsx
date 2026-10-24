import { ArrowUpRight, Mail, Phone, Send } from 'lucide-react'
import { navigation, site } from '../data/site'
import { Logo } from './Logo'

interface FooterProps {
  onOpenPrivacy: () => void
}

const directions = ['Математика', 'Русский язык', 'Английский', 'Программирование']

export function Footer({ onOpenPrivacy }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <p>
              Образовательный центр для школьников, которым важно не просто получить
              оценку, а действительно понять.
            </p>
            <a className="footer__mail" href={`mailto:${site.email}`}>
              {site.email}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="footer__nav">
            <div className="footer__column">
              <h3>Школа</h3>
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>

            <div className="footer__column">
              <h3>Направления</h3>
              {directions.map((direction) => (
                <a key={direction} href="#programs">
                  {direction}
                </a>
              ))}
            </div>

            <div className="footer__column footer__column--contacts">
              <h3>Связаться</h3>
              <a href={site.phoneHref}>
                <Phone size={15} aria-hidden="true" />
                {site.phone}
              </a>
              <a href={site.telegram} target="_blank" rel="noreferrer">
                <Send size={15} aria-hidden="true" />
                Telegram
              </a>
              <a href={`mailto:${site.email}`}>
                <Mail size={15} aria-hidden="true" />
                Написать нам
              </a>
              <span className="footer__hours">{site.schedule}</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {site.year} {site.legalName}
          </p>
          <button type="button" onClick={onOpenPrivacy}>
            Политика конфиденциальности
          </button>
          <p className="footer__made">Учимся понимать · 1–11 классы</p>
        </div>
      </div>
    </footer>
  )
}
