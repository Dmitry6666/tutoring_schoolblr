export interface Teacher {
  id: string
  name: string
  subject: string
  experience: string
  image: string
  imagePosition?: string
  quote: string
  tags: string[]
  accent: 'lime' | 'sky' | 'peach'
}

export const teachers: Teacher[] = [
  {
    id: 'anna',
    name: 'Анна Верещагина',
    subject: 'Математика',
    experience: '12 лет преподавания',
    image: '/images/teacher-anna.jpg',
    imagePosition: 'center 32%',
    quote: 'Люблю момент, когда «не понимаю» становится «а, вот так!».',
    tags: ['Алгебра', 'Геометрия', 'Экзамены'],
    accent: 'lime',
  },
  {
    id: 'maxim',
    name: 'Максим Лаврентьев',
    subject: 'Программирование',
    experience: '9 лет в разработке',
    image: '/images/teacher-maxim.jpg',
    imagePosition: 'center 25%',
    quote: 'Сначала учимся формулировать задачу. Код — уже инструмент.',
    tags: ['Python', 'Web', 'Алгоритмы'],
    accent: 'sky',
  },
  {
    id: 'irina',
    name: 'Ирина Соколова',
    subject: 'Английский язык',
    experience: '10 лет преподавания',
    image: '/images/teacher-irina.jpg',
    imagePosition: '78% 24%',
    quote: 'Ошибки — не повод замолчать. Это часть живого разговора.',
    tags: ['Speaking', 'Grammar', 'Экзамены'],
    accent: 'peach',
  },
]
