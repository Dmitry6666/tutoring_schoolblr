import { ArrowUpRight, Monitor, UserRound, Users } from 'lucide-react'
import { Reveal } from './Reveal'

const steps = [
  {
    number: '01',
    title: 'Знакомство',
    text: 'Слушаем, что происходит в школе, и определяем уровень. Без оценочных тестов и неловких разговоров.',
    note: '30–40 минут',
  },
  {
    number: '02',
    title: 'Личный маршрут',
    text: 'Собираем план под конкретную цель: темы, темп, формат занятий и подходящего преподавателя.',
    note: 'после диагностики',
  },
  {
    number: '03',
    title: 'Регулярная практика',
    text: 'На занятиях больше делаем, чем слушаем. После каждого урока — короткая обратная связь ученику и родителю.',
    note: '1–2 раза в неделю',
  },
  {
    number: '04',
    title: 'Проверка прогресса',
    text: 'Раз в месяц сверяемся с целью, показываем динамику и корректируем маршрут, если нужно.',
    note: 'каждые 4 недели',
  },
]

const formats = [
  {
    title: 'Индивидуально',
    description: 'Максимум внимания и гибкий темп под конкретную задачу.',
    icon: UserRound,
  },
  {
    title: 'Мини-группа до 6',
    description: 'Живое обсуждение, поддержка и здоровая динамика.',
    icon: Users,
  },
  {
    title: 'Онлайн',
    description: 'Интерактивная доска и все материалы — из любого города.',
    icon: Monitor,
  },
]

export function Approach() {
  return (
    <section className="section approach" id="approach">
      <div className="approach__glow" aria-hidden="true" />
      <div className="container">
        <div className="approach__top">
          <Reveal className="approach__heading">
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__dot" aria-hidden="true" />
              Как мы учим
            </p>
            <h2 className="section-title section-title--light">
              Не «провести урок».
              <br />
              А довести до результата.
            </h2>
          </Reveal>

          <Reveal className="approach__aside" delay={100}>
            <p>
              У обучения должна быть цель и понятная траектория. Мы не проходим темы
              «для галочки» и не двигаемся дальше, пока не станет действительно понятно.
            </p>
            <a className="text-link text-link--light" href="#contacts">
              Начать с знакомства
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="approach__steps">
          {steps.map((step, index) => (
            <Reveal key={step.number} className="approach-step-wrap" delay={index * 70}>
              <article className="approach-step">
                <div className="approach-step__top">
                  <span className="approach-step__number">{step.number}</span>
                  <span className="approach-step__note">{step.note}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="approach__formats" delay={80}>
          <div className="approach__formats-title">
            <span>Форматы занятий</span>
            <p>Подберём тот, в котором ребёнку будет комфортно и продуктивно.</p>
          </div>
          <div className="format-list">
            {formats.map((format) => {
              const Icon = format.icon
              return (
                <div className="format-card" key={format.title}>
                  <span className="format-card__icon" aria-hidden="true">
                    <Icon size={21} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3>{format.title}</h3>
                    <p>{format.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
