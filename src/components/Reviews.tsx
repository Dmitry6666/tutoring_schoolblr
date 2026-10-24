import { Quote } from 'lucide-react'
import { reviews } from '../data/reviews'
import { Reveal } from './Reveal'

export function Reviews() {
  const [featured, ...rest] = reviews

  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <div className="reviews__head">
          <Reveal className="reviews__heading">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Отзывы
            </p>
            <h2 className="section-title">
              Когда ребёнок начинает
              <br />
              верить в себя.
            </h2>
          </Reveal>
          <Reveal className="reviews__aside" delay={100}>
            <p>
              Самые важные изменения не всегда видны в дневнике. Иногда они звучат как
              «я сам объясню» или «можно я попробую ещё».
            </p>
          </Reveal>
        </div>

        <div className="reviews__grid">
          <Reveal className="review-featured-wrap">
            <article className="review review--featured">
              <div className="review__top">
                <Quote size={30} strokeWidth={1.4} aria-hidden="true" />
                <span>{featured.subject}</span>
              </div>
              <blockquote>{featured.quote}</blockquote>
              <div className="review__author">
                <span className="review__avatar" aria-hidden="true">
                  {featured.author.charAt(0)}
                </span>
                <div>
                  <strong>{featured.author}</strong>
                  <span>{featured.relation}</span>
                </div>
              </div>
              <span className="review__orbit" aria-hidden="true" />
            </article>
          </Reveal>

          <div className="reviews__side">
            {rest.map((review, index) => (
              <Reveal key={review.id} delay={120 + index * 90}>
                <article className="review review--small">
                  <div className="review__top">
                    <span className="review__quote-mark" aria-hidden="true">
                      “
                    </span>
                    <span>{review.subject}</span>
                  </div>
                  <blockquote>{review.quote}</blockquote>
                  <div className="review__author">
                    <span className="review__avatar" aria-hidden="true">
                      {review.author.charAt(0)}
                    </span>
                    <div>
                      <strong>{review.author}</strong>
                      <span>{review.relation}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="reviews__note" delay={100}>
          <span>✳</span>
          <p>
            Истории учеников и их родителей. Имена детей изменены — потому что уважаем
            личные границы.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
