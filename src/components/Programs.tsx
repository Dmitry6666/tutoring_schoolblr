import { useMemo, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  Blocks,
  BookOpenText,
  Braces,
  Calculator,
  FlaskConical,
  Gamepad2,
  Globe2,
  Languages,
  Shapes,
  Sparkles,
  Terminal,
  Trophy,
} from 'lucide-react'
import { programs, type Program, type ProgramCategory } from '../data/programs'
import { Modal } from './Modal'
import { Reveal } from './Reveal'

const programIcons = {
  calculator: Calculator,
  book: BookOpenText,
  languages: Languages,
  atom: Atom,
  flask: FlaskConical,
  shapes: Shapes,
  blocks: Blocks,
  terminal: Terminal,
  braces: Braces,
  globe: Globe2,
  gamepad: Gamepad2,
  trophy: Trophy,
}

const categories: Array<{ id: ProgramCategory; label: string }> = [
  { id: 'school', label: 'Школьные предметы' },
  { id: 'code', label: 'Программирование' },
]

interface ProgramsProps {
  category: ProgramCategory
  onCategoryChange: (category: ProgramCategory) => void
}

interface ProgramDetailsProps {
  program: Program
  onClose: () => void
}

function ProgramDetails({ program, onClose }: ProgramDetailsProps) {
  const titleId = `program-modal-${program.id}`
  const Icon = programIcons[program.icon]
  const categoryLabel =
    program.category === 'code' ? 'Программирование' : 'Школьный предмет'

  return (
    <Modal open onClose={onClose} labelledBy={titleId} className="program-modal">
      <div className={`program-modal__banner accent-${program.accent}`}>
        <div className="program-modal__banner-top">
          <span className="program-modal__category">{categoryLabel}</span>
          <span className="program-modal__age">{program.ages}</span>
        </div>
        <span className="program-modal__icon" aria-hidden="true">
          <Icon size={30} strokeWidth={1.8} />
        </span>
        <h2 id={titleId}>{program.title}</h2>
        <p>{program.short}</p>
      </div>

      <div className="program-modal__content">
        <div className="program-modal__intro">
          <section>
            <h3>Кому подойдёт</h3>
            <p>{program.fitFor}</p>
          </section>

          <div className="program-modal__meta">
            <div>
              <span>Формат</span>
              <strong>{program.format}</strong>
            </div>
            <div>
              <span>Ритм</span>
              <strong>{program.duration}</strong>
            </div>
          </div>
        </div>

        <section className="program-modal__outcomes">
          <h3>Чему научимся</h3>
          <ul>
            {program.outcomes.map((outcome) => (
              <li key={outcome}>
                <span className="program-modal__check" aria-hidden="true" />
                {outcome}
              </li>
            ))}
          </ul>
        </section>

        <div className="program-modal__footer">
          <div>
            <span>Начнём с бесплатного знакомства</span>
            <p>Определим уровень, обсудим цель и предложим подходящий формат.</p>
          </div>
          <a className="button button--primary" href="#contacts" onClick={onClose}>
            Обсудить программу
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </Modal>
  )
}

export function Programs({ category, onCategoryChange }: ProgramsProps) {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null)

  const filteredPrograms = useMemo(
    () => programs.filter((program) => program.category === category),
    [category],
  )

  return (
    <section className="section programs" id="programs">
      <div className="container">
        <div className="section-top section-top--programs">
          <Reveal className="section-top__main">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Программы
            </p>
            <h2 className="section-title">
              Найдите свой предмет.
              <br />
              Или своё направление в IT.
            </h2>
          </Reveal>
          <Reveal className="section-top__aside" delay={100}>
            <p>
              Двенадцать программ для учеников с разными целями: от первого класса
              до выпускных экзаменов и первых IT-проектов. Формат и темп подстраиваем
              под ребёнка.
            </p>
          </Reveal>
        </div>

        <Reveal className="programs__toolbar">
          <div className="program-switch" role="group" aria-label="Категория программ">
            {categories.map((item) => {
              const count = programs.filter((program) => program.category === item.id).length
              const isActive = category === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`program-switch__button ${isActive ? 'is-active' : ''}`}
                  aria-pressed={isActive}
                  onClick={() => onCategoryChange(item.id)}
                >
                  {item.label}
                  <span>{count}</span>
                </button>
              )
            })}
          </div>
          <span className="programs__hint">Нажмите на карточку, чтобы узнать подробнее</span>
        </Reveal>

        <div className="program-grid" key={category}>
          {filteredPrograms.map((program, index) => {
            const Icon = programIcons[program.icon]
            return (
              <article
                key={program.id}
                className={`program-card accent-${program.accent}`}
                style={{ animationDelay: `${index * 55}ms` }}
              >
                <button
                  type="button"
                  className="program-card__button"
                  onClick={() => setSelectedProgram(program)}
                  aria-label={`Подробнее о программе «${program.title}»`}
                >
                  <span className="program-card__top">
                    <span className="program-card__icon" aria-hidden="true">
                      <Icon size={24} strokeWidth={1.8} />
                    </span>
                    <span className="program-card__age">{program.ages}</span>
                    <span className="program-card__index" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </span>

                  <span className="program-card__body">
                    <span className="program-card__title">{program.title}</span>
                    <span className="program-card__description">{program.short}</span>
                  </span>

                  <span className="program-card__footer">
                    <span className="program-card__tags">
                      {program.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </span>
                    <span className="program-card__arrow" aria-hidden="true">
                      <ArrowUpRight size={18} />
                    </span>
                  </span>
                </button>
              </article>
            )
          })}
        </div>

        <Reveal className="programs__help" delay={80}>
          <div className="programs__help-copy">
            <span className="programs__help-icon" aria-hidden="true">
              <Sparkles size={20} />
            </span>
            <div>
              <strong>Не знаете, что выбрать?</strong>
              <p>Расскажите о задаче — предложим программу и формат без обязательств.</p>
            </div>
          </div>
          <a className="text-link" href="#contacts">
            Получить рекомендацию
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </Reveal>
      </div>

      {selectedProgram && (
        <ProgramDetails
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
        />
      )}
    </section>
  )
}
