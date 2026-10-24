import { useState } from 'react'
import { ArrowUpRight, Plus } from 'lucide-react'
import { faqItems } from '../data/faq'
import { Reveal } from './Reveal'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="section faq" id="faq">
      <div className="container faq__layout">
        <Reveal className="faq__intro">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Вопросы
          </p>
          <h2 className="section-title">
            Спрашивайте.
            <br />
            Это нормально.
          </h2>
          <p className="faq__lead">
            Собрали то, что чаще всего волнует родителей. Если вашего вопроса здесь нет,
            просто напишите — ответим без формальностей.
          </p>
          <a className="faq__contact" href="#contacts">
            <span>
              <strong>Задать свой вопрос</strong>
              <small>Ответим в течение рабочего дня</small>
            </span>
            <span className="faq__contact-icon" aria-hidden="true">
              <ArrowUpRight size={20} />
            </span>
          </a>
        </Reveal>

        <Reveal className="faq__list" delay={100}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            const buttonId = `faq-button-${index}`
            const panelId = `faq-panel-${index}`

            return (
              <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="faq-item__button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(index)}
                  >
                    <span className="faq-item__question">{item.question}</span>
                    <span className="faq-item__icon" aria-hidden="true">
                      <Plus size={20} />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  className="faq-item__panel"
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                >
                  <div className="faq-item__answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
