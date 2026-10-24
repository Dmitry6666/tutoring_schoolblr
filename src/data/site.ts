export const site = {
  name: 'Орбита',
  legalName: 'Образовательный центр «Орбита»',
  description:
    'Репетиторский центр для учеников 1–11 классов: школьные предметы, подготовка к экзаменам и программирование.',
  phone: '+7 (999) 123-45-67',
  phoneHref: 'tel:+79991234567',
  email: 'hello@orbita-school.ru',
  telegram: 'https://t.me/orbita_school',
  telegramLabel: '@orbita_school',
  schedule: 'Пн–Сб, 09:00–20:00',
  year: new Date().getFullYear(),
} as const

export const navigation = [
  { label: 'О школе', href: '#about' },
  { label: 'Программы', href: '#programs' },
  { label: 'Как мы учим', href: '#approach' },
  { label: 'Преподаватели', href: '#teachers' },
  { label: 'Вопросы', href: '#faq' },
] as const
