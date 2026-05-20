'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'

const articles = [
  {
    id: '1',
    title: 'Как обеспечить безопасность коммерческой недвижимости',
    date: '24 мая 2026',
    excerpt: 'Проверенные решения для охраны офисов, складов и торговых центров.',
    image: '/Industries/Access Control big.webp',
    content: [
      'Коммерческая недвижимость требует системного подхода: физическая охрана, видеонаблюдение, контроль доступа и корпоративная культура безопасности.',
      'Мы рекомендуем начинать с оценки рисков, чтобы определить точки наибольшей уязвимости. Затем строим комплексную защиту с учётом задач бизнеса и особенностей объекта.',
      'Профессиональная охрана и технологические решения работают в связке. Они позволяют снижать риски, улучшать контроль и сохранять спокойствие собственника.',
    ],
  },
  {
    id: '2',
    title: 'В чем особенность круглосуточного патрулирования',
    date: '18 мая 2026',
    excerpt: 'Почему патрульная служба остаётся лучшим выбором для объектов с высокой загруженностью.',
    image: '/Industries/Event big.png',
    content: [
      'Патрульная служба обеспечивает оперативный контроль периметра и быструю реакцию на инциденты. Это особенно важно для объектов с постоянным потоком людей.',
      'Патрульный обход помогает выявлять нарушения на ранних стадиях, предотвращать хулиганство и аварийные ситуации.',
      'Команда обученных сотрудников создаёт дополнительный барьер для тех, кто пытается обойти систему безопасности.',
    ],
  },
  {
    id: '3',
    title: 'Защита мероприятий: от VIP‑зоны до входа',
    date: '10 мая 2026',
    excerpt: 'Организация безопасности для мероприятий любого масштаба и уровня.',
    image: '/Industries/BodyGarding new.webp',
    content: [
      'Мероприятия требуют продуманной концепции безопасности: контроль гостей, зона доступа, проверка багажа и сопровождение важных гостей.',
      'Наши специалисты выстраивают систему так, чтобы гости чувствовали себя защищёнными, а процесс входа оставался быстрым и удобным.',
      'Каждое мероприятие получает индивидуальный план охраны и резервные сценарии на случай непредвиденных ситуаций.',
    ],
  },
  {
    id: '4',
    title: 'Безопасность частного дома: что важно знать',
    date: '2 мая 2026',
    excerpt: 'Как сочетать охрану, видеоконтроль и частную охрану на территории.',
    image: '/Industries/Construction big.webp',
    content: [
      'Частная охрана дома должна быть незаметной, но надёжной. Важно соединить систему камер, датчиков и живой охраны в единую сеть.',
      'Особое внимание уделяется входным зонам, воротам, гаражу и месту стоянки транспорта.',
      'Регулярные обходы и контроль периметра позволяют обнаружить проблему до того, как она перерастёт в угрозу.',
    ],
  },
  {
    id: '5',
    title: 'Индивидуальный охранник для руководителя',
    date: '29 апреля 2026',
    excerpt: 'Когда нужна личная защита, выбор профессионала не терпит компромиссов.',
    image: '/Industries/Retail new.webp',
    content: [
      'Личная охрана — это не только физическая безопасность, но и мобильность, конфиденциальность и прогнозирование рисков.',
      'Мы подбираем охранников с опытом работы в похожих задачах и прокладываем безопасные маршруты перед каждой поездкой.',
      'Защитник должен действовать незаметно, но эффективно, сохраняя рабочий ритм клиента и устраняя угрозы до их возникновения.',
    ],
  },
  {
    id: '6',
    title: 'Консультации по охране и безопасности',
    date: '5 мая 2026',
    excerpt: 'Аудит охранных рисков и индивидуальный план защиты для вашего объекта.',
    image: '/Industries/Consultation.webp',
    content: [
      'Аудит безопасности выявляет слабые места в системе и помогает сформировать рабочий план защиты.',
      'Мы предлагаем решения по камерам, контролю доступа, патрульной службе и личной охране с учётом особенностей объекта.',
      'Консультации дают ясное понимание, какие инвестиции в безопасность принесут максимальный эффект.',
    ],
  },
]

export default function BlogsSection() {
  const [selectedArticle, setSelectedArticle] = useState(articles[0])

  return (
    <section className="flex-1 bg-[#EEEDEB] text-[#0E151D]">
      <Container className="flex min-h-[calc(115vh-70px)] flex-col pt-16 pb-8 lg:pt-20 lg:pb-10">
        <div className="grid flex-1 gap-6 lg:grid-cols-[1.3fr_1.5fr] lg:items-start">
          <article className="self-center animate-none rounded-lg border border-[#0E151D]/10 bg-white/95 p-6 shadow-[0_18px_60px_rgba(14,21,29,0.06)] sm:p-8">
            <div className="mb-6 flex flex-col gap-3">
              <span className="inline-block rounded-full bg-[#0E151D] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#EEEDEB]">
                Статья
              </span>
              <h1 className="text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                {selectedArticle.title}
              </h1>
              <p className="text-sm text-[#515151]">{selectedArticle.date}</p>
            </div>
            <div className="space-y-5 text-base leading-7 text-[#232323] sm:text-lg">
              {selectedArticle.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>

          <aside className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <button
                key={article.id}
                type="button"
                onClick={() => setSelectedArticle(article)}
                className={`group flex h-full flex-col justify-between rounded-t-[36px] rounded-b-[12px] border border-[#0E151D]/10 bg-white/95 p-0 text-left transition duration-300 hover:shadow-[0_12px_30px_rgba(14,21,29,0.08)] ${
                  selectedArticle.id === article.id ? 'border-2 border-[#0E151D] bg-[#F8F5F0] shadow-[0_16px_45px_rgba(14,21,29,0.14)] opacity-100' : 'opacity-50'
                } ${index % 3 === 1 ? 'lg:mt-10' : ''} ${index % 3 === 1 ? 'animate-float-down' : 'animate-float-up'}`}
              >
                <div className="relative h-36 overflow-hidden rounded-t-[36px] bg-cover bg-center" style={{ backgroundImage: `url('${article.image}')` }}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex flex-col justify-end p-2 text-white">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/80">{article.date}</p>
                    <h2 className="mt-1 text-base font-semibold leading-snug">{article.title}</h2>
                  </div>
                </div>
                <div className="px-4 pb-8 pt-0 -mt-1 text-sm leading-5 text-[#4C4C4C]">{article.excerpt}</div>
              </button>
            ))}
          </aside>
        </div>
      </Container>
    </section>
  )
}
