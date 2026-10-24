import { useId } from 'react'
import { ArrowDownRight, ArrowUpRight, Check } from 'lucide-react'

const heroFacts = ['1–11 классы', 'Онлайн и офлайн', 'Группы до 6 человек']

export function Hero() {
  const badgePathId = useId().replaceAll(':', '')

  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Образовательный центр для школьников
          </p>

          <h1 className="hero__title">
            Не «выучить».
            <br />
            А <span className="hero__title-mark">понять.</span>
          </h1>

          <p className="hero__text">
            Помогаем ученикам 1–11 классов разобраться в школьных предметах, спокойно
            подготовиться к экзаменам и освоить программирование. Без давления, зубрёжки
            и обещаний «быстрого результата».
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#programs">
              Подобрать программу
              <span className="button__icon" aria-hidden="true">
                <ArrowUpRight size={18} />
              </span>
            </a>
            <a className="button button--ghost" href="#approach">
              Как мы учим
              <ArrowDownRight size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="hero__facts" aria-label="Ключевые факты">
            {heroFacts.map((fact) => (
              <span className="hero__fact" key={fact}>
                <Check size={14} strokeWidth={2.4} aria-hidden="true" />
                {fact}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Занятия в школе «Орбита»">
          <div className="hero-visual__orbit" aria-hidden="true">
            <svg viewBox="0 0 560 560" fill="none">
              <circle cx="280" cy="280" r="254" stroke="currentColor" strokeDasharray="2 10" />
              <circle cx="280" cy="26" r="7" fill="var(--lime)" />
              <circle cx="531" cy="380" r="5" fill="currentColor" />
            </svg>
          </div>

          <div className="hero-visual__shape" aria-hidden="true" />

          <div className="hero-visual__frame">
            <img
              src="/images/hero-learning.jpg"
              alt="Ученица занимается за ноутбуком с цветными карандашами"
              fetchPriority="high"
              decoding="async"
            />
            <span className="hero-visual__image-label">учимся понимать</span>
          </div>

          <div className="hero-progress">
            <div className="hero-progress__top">
              <span>Сейчас разбираем</span>
              <span className="hero-progress__status">
                <span aria-hidden="true" />
                идёт занятие
              </span>
            </div>
            <strong>Проценты и дроби</strong>
            <div className="hero-progress__bar" aria-hidden="true">
              <span />
            </div>
            <div className="hero-progress__bottom">
              <span>Уже понятно 72%</span>
              <span>
                следующий шаг <ArrowUpRight size={13} aria-hidden="true" />
              </span>
            </div>
          </div>

          <div className="hero-stamp" aria-hidden="true">
            <svg className="hero-stamp__rotor" viewBox="0 0 168 168">
              <defs>
                <path
                  id={badgePathId}
                  d="M 84,84 m -61,0 a 61,61 0 1,1 122,0 a 61,61 0 1,1 -122,0"
                />
              </defs>
              <text>
                <textPath href={`#${badgePathId}`} startOffset="0%">
                  ПОНИМАТЬ, А НЕ ЗАПОМИНАТЬ · ПОНИМАТЬ, А НЕ ЗАПОМИНАТЬ ·
                </textPath>
              </text>
            </svg>
            <span className="hero-stamp__center">
              <svg viewBox="0 0 42 42" fill="none">
                <ellipse
                  cx="21"
                  cy="21"
                  rx="15"
                  ry="7.5"
                  transform="rotate(-30 21 21)"
                  stroke="var(--ink)"
                  strokeWidth="1.6"
                />
                <circle cx="21" cy="21" r="5" fill="var(--ink)" />
                <circle cx="33" cy="12" r="2.7" fill="var(--ink)" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="hero__footnote">
          <span>Не обещаем «полюбить учиться» за неделю.</span>
          <span>Помогаем понять — и тогда интерес появляется сам.</span>
        </div>
      </div>
    </section>
  )
}
