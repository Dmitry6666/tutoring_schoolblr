const subjects = [
  'Математика',
  'Русский язык',
  'Английский',
  'Физика',
  'Химия',
  'Python',
  'Scratch',
  'Веб-разработка',
  'Алгоритмы',
]

export function SubjectMarquee() {
  const items = [...subjects, ...subjects]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((subject, index) => (
          <span className="marquee__item" key={`${subject}-${index}`}>
            {subject}
            <span className="marquee__star">✳</span>
          </span>
        ))}
      </div>
    </div>
  )
}
