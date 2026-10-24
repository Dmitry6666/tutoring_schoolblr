import { useState, type ChangeEvent, type FormEvent } from 'react'
import {
  ArrowUpRight,
  Check,
  CircleAlert,
  Clock,
  LoaderCircle,
  Mail,
  Phone,
  Send,
} from 'lucide-react'
import { site } from '../data/site'
import { Reveal } from './Reveal'

interface ContactProps {
  onOpenPrivacy: () => void
}

interface FormValues {
  name: string
  phone: string
  grade: string
  direction: string
  consent: boolean
}

type FormErrors = Partial<Record<keyof FormValues, string>>
type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const initialValues: FormValues = {
  name: '',
  phone: '',
  grade: '',
  direction: '',
  consent: false,
}

const grades = ['1–4 класс', '5–8 класс', '9 класс', '10–11 класс', 'Пока не знаю']
const directions = ['Школьные предметы', 'Программирование', 'Нужна помощь с выбором']

function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  const digits = values.phone.replace(/\D/g, '')

  if (values.name.trim().length < 2) {
    errors.name = 'Напишите, как к вам обращаться'
  }

  if (digits.length < 10) {
    errors.phone = 'Укажите номер телефона полностью'
  }

  if (!values.grade) {
    errors.grade = 'Выберите класс ученика'
  }

  if (!values.direction) {
    errors.direction = 'Выберите направление'
  }

  if (!values.consent) {
    errors.consent = 'Нужно согласие на обработку данных'
  }

  return errors
}

export function Contact({ onOpenPrivacy }: ContactProps) {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [submittedName, setSubmittedName] = useState('')

  const updateValue = (field: keyof FormValues, value: string | boolean) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    if (status === 'error') setStatus('idle')
  }

  const handleTextChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    updateValue(event.target.name as keyof FormValues, event.target.value)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validateForm(values)
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setStatus('loading')

    try {
      const endpoint = import.meta.env.VITE_FORM_ENDPOINT?.trim()

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: values.name.trim(),
            phone: values.phone.trim(),
            grade: values.grade,
            direction: values.direction,
            consent: values.consent,
            source: 'orbita-website',
          }),
        })

        if (!response.ok) throw new Error('Form submission failed')
      }
      // Without VITE_FORM_ENDPOINT the form stays in demo mode.
      // Connect a CRM, Formspree or your own API before launch.

      setSubmittedName(values.name.trim())
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
    setStatus('idle')
    setSubmittedName('')
  }

  return (
    <section className="section contact-section" id="contacts">
      <div className="container">
        <Reveal>
          <div className="contact">
            <div className="contact__glow" aria-hidden="true" />
            <div className="contact__content">
              <p className="eyebrow eyebrow--light">
                <span className="eyebrow__dot" aria-hidden="true" />
                Первый шаг
              </p>
              <h2 className="contact__title">
                Начнём
                <br />
                <span className="contact__title-accent">с разговора.</span>
              </h2>
              <p className="contact__text">
                Расскажите, с чем нужна помощь. Методист уточнит детали, подскажет
                подходящий формат и предложит удобное время для знакомства.
              </p>

              <div className="contact__details">
                <a href={site.phoneHref} className="contact-link">
                  <span className="contact-link__icon" aria-hidden="true">
                    <Phone size={19} />
                  </span>
                  <span>
                    <small>Позвонить</small>
                    <strong>{site.phone}</strong>
                  </span>
                </a>
                <a href={`mailto:${site.email}`} className="contact-link">
                  <span className="contact-link__icon" aria-hidden="true">
                    <Mail size={19} />
                  </span>
                  <span>
                    <small>Написать</small>
                    <strong>{site.email}</strong>
                  </span>
                </a>
                <a
                  href={site.telegram}
                  className="contact-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-link__icon" aria-hidden="true">
                    <Send size={19} />
                  </span>
                  <span>
                    <small>Telegram</small>
                    <strong>{site.telegramLabel}</strong>
                  </span>
                </a>
              </div>

              <div className="contact__schedule">
                <Clock size={17} aria-hidden="true" />
                <span>{site.schedule}</span>
                <span className="contact__schedule-divider" aria-hidden="true" />
                <span>Онлайн и офлайн</span>
              </div>
            </div>

            <div className="lead-form-wrap">
              {status === 'success' ? (
                <div className="form-success" role="status" aria-live="polite">
                  <span className="form-success__icon" aria-hidden="true">
                    <Check size={28} strokeWidth={2.2} />
                  </span>
                  <p className="form-success__eyebrow">Заявка принята</p>
                  <h3>Спасибо{submittedName ? `, ${submittedName}` : ''}!</h3>
                  <p>
                    Свяжемся с вами в течение рабочего дня, чтобы обсудить задачу
                    и подобрать удобное время.
                  </p>
                  <button className="text-link" type="button" onClick={resetForm}>
                    Отправить ещё одну заявку
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </button>
                </div>
              ) : (
                <form className="lead-form" onSubmit={handleSubmit} noValidate>
                  <div className="lead-form__head">
                    <h3>Оставьте заявку</h3>
                    <p>Займёт меньше минуты</p>
                  </div>

                  <div className="lead-form__fields">
                    <div className={`field ${errors.name ? 'has-error' : ''}`}>
                      <label htmlFor="lead-name">Как вас зовут</label>
                      <input
                        id="lead-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Например, Анна"
                        value={values.name}
                        onChange={handleTextChange}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'lead-name-error' : undefined}
                        disabled={status === 'loading'}
                      />
                      {errors.name && (
                        <span className="field__error" id="lead-name-error">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div className={`field ${errors.phone ? 'has-error' : ''}`}>
                      <label htmlFor="lead-phone">Телефон</label>
                      <input
                        id="lead-phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={values.phone}
                        onChange={handleTextChange}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'lead-phone-error' : undefined}
                        disabled={status === 'loading'}
                      />
                      {errors.phone && (
                        <span className="field__error" id="lead-phone-error">
                          {errors.phone}
                        </span>
                      )}
                    </div>

                    <div className={`field ${errors.grade ? 'has-error' : ''}`}>
                      <label htmlFor="lead-grade">Класс ученика</label>
                      <select
                        id="lead-grade"
                        name="grade"
                        value={values.grade}
                        onChange={handleTextChange}
                        aria-invalid={Boolean(errors.grade)}
                        aria-describedby={errors.grade ? 'lead-grade-error' : undefined}
                        disabled={status === 'loading'}
                      >
                        <option value="" disabled>
                          Выберите класс
                        </option>
                        {grades.map((grade) => (
                          <option value={grade} key={grade}>
                            {grade}
                          </option>
                        ))}
                      </select>
                      {errors.grade && (
                        <span className="field__error" id="lead-grade-error">
                          {errors.grade}
                        </span>
                      )}
                    </div>

                    <div className={`field ${errors.direction ? 'has-error' : ''}`}>
                      <label htmlFor="lead-direction">Что интересует</label>
                      <select
                        id="lead-direction"
                        name="direction"
                        value={values.direction}
                        onChange={handleTextChange}
                        aria-invalid={Boolean(errors.direction)}
                        aria-describedby={
                          errors.direction ? 'lead-direction-error' : undefined
                        }
                        disabled={status === 'loading'}
                      >
                        <option value="" disabled>
                          Выберите направление
                        </option>
                        {directions.map((direction) => (
                          <option value={direction} key={direction}>
                            {direction}
                          </option>
                        ))}
                      </select>
                      {errors.direction && (
                        <span className="field__error" id="lead-direction-error">
                          {errors.direction}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={`consent ${errors.consent ? 'has-error' : ''}`}>
                    <input
                      id="lead-consent"
                      name="consent"
                      type="checkbox"
                      checked={values.consent}
                      onChange={(event) => updateValue('consent', event.target.checked)}
                      aria-invalid={Boolean(errors.consent)}
                      aria-describedby={
                        errors.consent ? 'lead-consent-error' : undefined
                      }
                      disabled={status === 'loading'}
                    />
                    <label htmlFor="lead-consent">
                      Согласен на обработку персональных данных
                    </label>
                    <button type="button" className="link-button" onClick={onOpenPrivacy}>
                      Политика
                    </button>
                  </div>
                  {errors.consent && (
                    <span className="consent__error" id="lead-consent-error">
                      {errors.consent}
                    </span>
                  )}

                  <button
                    className="button button--primary lead-form__submit"
                    type="submit"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        Отправляем
                        <LoaderCircle
                          size={19}
                          className="spin"
                          aria-hidden="true"
                        />
                      </>
                    ) : (
                      <>
                        Записаться на знакомство
                        <span className="button__icon" aria-hidden="true">
                          <ArrowUpRight size={18} />
                        </span>
                      </>
                    )}
                  </button>

                  <div className="lead-form__note" aria-live="polite">
                    {status === 'error' ? (
                      <p className="lead-form__error">
                        <CircleAlert size={16} aria-hidden="true" />
                        Не получилось отправить заявку. Попробуйте ещё раз или позвоните нам.
                      </p>
                    ) : (
                      <p>Без спама и навязчивых звонков. Только по делу.</p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
