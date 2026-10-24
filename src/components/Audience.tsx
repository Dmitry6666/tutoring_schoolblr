import { ArrowUpRight, Code2, GraduationCap, Target } from 'lucide-react'
import type { ProgramCategory } from '../data/programs'
import { Reveal } from './Reveal'

interface AudienceProps {
  onSelectCategory: (category: ProgramCategory) => void
}

const paths = [
  {
    id: 'school',
    label: '1–8 класс',
    title: 'Подтянуть школу',
    description:
      'Закрыть пробелы, спокойно делать домашние задания и снова чувствовать себя уверенно на уроках.',
    points: ['Разобраться в темах', 'Помощь с домашкой', 'Уверенность в классе'],
    category: 'school' as ProgramCategory,
    icon: GraduationCap,
    accent: 'lime',
    linkLabel: 'Школьные программы',
  },
  {
    id: 'exams',
    label: '9–11 класс',
    title: 'Подготовиться к экзаменам',
    description:
      'Системная подготовка без хаоса и зубрёжки. С планом, регулярной практикой и понятным прогрессом.',
    points: ['План подготовки', 'Практика формата', 'Разбор ошибок'],
    category: 'school' as ProgramCategory,
    icon: Target,
    accent: 'peach',
    linkLabel: 'Программы подготовки',
  },
  {
    id: 'it',
    label: '7–17 лет',
    title: 'Начать в IT',
    description:
      'От первых игр на Scratch до Python и собственных проектов. С понятной траекторией и без сухой теории.',
    points: ['Scratch и Python', 'Веб и игры', 'Проекты в портфолио'],
    category: 'code' as ProgramCategory,
    icon: Code2,
    accent: 'sky',
    linkLabel: 'IT-направления',
  },
]

export function Audience({ onSelectCategory }: AudienceProps) {
  return (
    <section className="section audience" id="about">
      <div className="container">
        <div className="section-top">
          <Reveal className="section-top__main">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />О школе
            </p>
            <h2 className="section-title">
              Хорошая оценка — следствие.
              <br />
              Цель — понимание.
            </h2>
          </Reveal>

          <Reveal className="section-top__aside" delay={100}>
            <p>
              «Орбита» — небольшой образовательный центр для школьников. Мы верим, что
              ребёнку не нужно выбирать между интересом и результатом: одно вырастает
              из другого.
            </p>
            <p>
              Поэтому начинаем не с тестов и оценок, а с разговора о том, что происходит
              в школе и чего хочется на самом деле.
            </p>
          </Reveal>
        </div>

        <div className="path-grid">
          {paths.map((path, index) => {
            const Icon = path.icon
            return (
              <Reveal key={path.id} className="path-grid__item" delay={index * 90}>
                <article className={`path-card path-card--${path.accent}`}>
                  <div className="path-card__top">
                    <span className="path-card__icon" aria-hidden="true">
                      <Icon size={24} strokeWidth={1.8} />
                    </span>
                    <span className="path-card__label">{path.label}</span>
                    <span className="path-card__number" aria-hidden="true">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="path-card__content">
                    <h3>{path.title}</h3>
                    <p>{path.description}</p>
                    <ul className="path-card__points">
                      {path.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <a
                    className="path-card__link"
                    href="#programs"
                    onClick={() => onSelectCategory(path.category)}
                  >
                    {path.linkLabel}
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
