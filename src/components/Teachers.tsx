import { Check } from 'lucide-react'
import { teachers } from '../data/teachers'
import { Reveal } from './Reveal'

const qualityPoints = [
  'Методический отбор преподавателей',
  'Пробное занятие перед стартом',
  'Регулярная обратная связь',
]

export function Teachers() {
  return (
    <section className="section teachers" id="teachers">
      <div className="container">
        <div className="section-top">
          <Reveal className="section-top__main">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Преподаватели
            </p>
            <h2 className="section-title">
              Рядом — человек,
              <br />
              а не «источник знаний».
            </h2>
          </Reveal>

          <Reveal className="section-top__aside" delay={100}>
            <p>
              Наши преподаватели умеют слушать, задавать вопросы и объяснять по-разному.
              Они не стыдят за ошибки и не делают вид, что всё очевидно.
            </p>
            <p>
              Подбираем наставника не только по предмету, но и по характеру, темпу
              и задаче ученика.
            </p>
          </Reveal>
        </div>

        <div className="teacher-grid">
          {teachers.map((teacher, index) => (
            <Reveal key={teacher.id} className="teacher-grid__item" delay={index * 85}>
              <article className={`teacher-card teacher-card--${teacher.accent}`}>
                <div className="teacher-card__photo">
                  <img
                    src={teacher.image}
                    alt={`${teacher.name}, преподаватель ${teacher.subject.toLowerCase()}`}
                    style={{ objectPosition: teacher.imagePosition }}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="teacher-card__subject">{teacher.subject}</span>
                </div>

                <div className="teacher-card__body">
                  <div className="teacher-card__heading">
                    <div>
                      <h3>{teacher.name}</h3>
                      <p>{teacher.experience}</p>
                    </div>
                    <span className="teacher-card__mark" aria-hidden="true">
                      ✳
                    </span>
                  </div>

                  <blockquote>«{teacher.quote}»</blockquote>

                  <ul className="teacher-card__tags" aria-label="Направления преподавателя">
                    {teacher.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="teachers__note" delay={120}>
          <p>Каждого преподавателя мы выбираем не только по знаниям, но и по умению объяснять.</p>
          <ul>
            {qualityPoints.map((point) => (
              <li key={point}>
                <Check size={15} strokeWidth={2.3} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
