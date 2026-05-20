'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'

const articles = [
  {
    id: '1',
    title: 'How to Secure Commercial Real Estate',
    date: '24 May 2022',
    excerpt: 'Practical security upgrades that keep offices, warehouses and retail properties protected.',
    image: '/Industries/Access Control big.webp',
    content: [
      'Commercial property security is strongest when access control, surveillance and trained personnel work together.',
      'A professional risk assessment reveals weak points in the building and helps create a tailored protection strategy.',
      'Effective security makes staff, visitors and tenants feel safer, while reducing theft and operational disruption.',
    ],
  },
  {
    id: '2',
    title: 'Why 24/7 Patrols Protect Busy Sites',
    date: '18 May 2021',
    excerpt: 'Continuous patrols help fast-paced venues detect threats early and keep people safe.',
    image: '/Industries/Event big.png',
    content: [
      'Around-the-clock patrols add a strong physical layer to any security plan, especially in busy public spaces.',
      'Regular patrols spot unusual behaviour sooner, which reduces risk and improves response time.',
      'A visible security presence reassures staff and visitors that the site is professionally managed.',
    ],
  },
  {
    id: '3',
    title: 'The Top Advantages of Security Systems in Schools',
    date: '10 May 2020',
    excerpt: 'Discover key school security advantages that protect students, staff and campus facilities.',
    image: '/Industries/BodyGarding new.webp',
    content: [
      '“Education is the most powerful weapon which you can use to change the world.” – Nelson Mandela.',
      'Schools should be safe spaces where students learn and teachers focus on teaching, not security concerns.',
      'Modern school security systems reduce risk by managing access, monitoring movement and supporting emergency response.',
      'Access control prevents unauthorised entry, keeping classrooms and campus buildings reserved for approved visitors only.',
      'Integrated emergency systems link alarms, cameras and security staff so incidents are handled quickly and clearly.',
      'Monitoring off-limit areas stops students and intruders from entering sensitive zones where they do not belong.',
      'Keeping teachers and administrators informed strengthens the school’s safety culture and improves response times.',
      'Contact Stamford Security for trusted education security solutions across the UK.',
    ],
  },
  {
    id: '4',
    title: 'Home Security Essentials for Families',
    date: '2 May 2019',
    excerpt: 'Practical home security tips to protect families, vehicles and property.',
    image: '/Industries/Construction big.webp',
    content: [
      'Home security is more than alarms: it is a system of cameras, sensors, access control and professional monitoring.',
      'Secure doors, gates, driveways and parking areas first, because these are the most common entry points.',
      'Remote alerts and monitoring give homeowners instant awareness of unusual activity.',
      'Regular security reviews ensure the system remains effective as the property and family needs change.',
      'Reliable support from a security provider gives families confidence and peace of mind.',
    ],
  },
  {
    id: '5',
    title: 'Executive Protection for High-Profile Clients',
    date: '29 April 2018',
    excerpt: 'VIP protection services for executives, celebrities and high-profile individuals.',
    image: '/Industries/Retail new.webp',
    content: [
      'Executive protection blends risk assessment, secure movement and discreet close protection.',
      'Our protective officers are selected for experience, discretion and tactical awareness.',
      'Advance route planning and secure transport reduce exposure to potential threats.',
      'The right protection keeps clients confident while preserving their privacy and schedule.',
      'This service is ideal for executives, speakers and public figures who need trusted security.',
    ],
  },
  {
    id: '6',
    title: 'Security Consultations That Improve Your Plan',
    date: '5 May 2017',
    excerpt: 'Professional security reviews and clear recommendations to strengthen your site.',
    image: '/Industries/Consultation.webp',
    content: [
      'A professional consultation identifies gaps in CCTV, access control, patrols and emergency plans.',
      'We recommend solutions that fit your property, operations and budget, from alarms to guarding teams.',
      'Expert guidance helps you improve security quickly and avoid costly mistakes.',
      'A better security plan is easier to manage and more effective in the long term.',
      'A trusted security partner gives your business confidence and stronger protection.',
    ],
  },
]

export default function BlogsSection() {
  const [selectedArticleId, setSelectedArticleId] = useState(articles[0].id)
  const [showShareActions, setShowShareActions] = useState(false)

  const selectedArticle = articles.find((article) => article.id === selectedArticleId) ?? articles[0]

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
    } finally {
      setShowShareActions(false)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: selectedArticle.title,
          url: window.location.href,
        })
      } catch {
        // user cancelled or unsupported
      }
    } else {
      await handleCopyLink()
    }
    setShowShareActions(false)
  }

  return (
    <section className="flex-1 bg-[#EEEDEB] text-[#0E151D]">
      <Container className="flex min-h-[calc(115vh-70px)] flex-col pt-16 pb-8 lg:pt-20 lg:pb-10">
        <div className="grid flex-1 gap-6 lg:grid-cols-[1.3fr_1.5fr] lg:items-start">
          <article className="self-center rounded-md border border-[#0E151D]/15 bg-[#F6F5F3] p-7 shadow-sm shadow-black/5">
            <div className="space-y-6 text-[#0E151D]">
              <div className="flex flex-col gap-3">
                <span className="inline-block rounded-sm bg-[#0E151D] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#EEEDEB]">
                  Article
                </span>
                <div className="relative flex flex-col gap-4 border-b border-[#0E151D]/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                      {selectedArticle.title}
                    </h1>
                    <p className="mt-2 text-sm text-[#515151]">{selectedArticle.date}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setShowShareActions((prev) => !prev)}
                      className="inline-flex items-center gap-2 rounded-md border border-[#0E151D]/15 bg-white px-4 py-2 text-sm font-semibold text-[#0E151D] transition hover:bg-[#F0F0F7]"
                    >
                      <span className="text-lg">⇪</span>
                      <span>Share</span>
                    </button>
                    {showShareActions && (
                      <div className="absolute right-0 top-full z-10 mt-3 w-[220px] rounded-xl border border-[#0E151D]/10 bg-white p-3 shadow-[0_20px_60px_rgba(14,21,29,0.12)]">
                        <button
                          type="button"
                          onClick={handleCopyLink}
                          className="w-full rounded-xl px-4 py-3 text-left text-sm text-[#0E151D] transition hover:bg-[#F5F5FF]"
                        >
                          Copy link
                        </button>
                        <button
                          type="button"
                          onClick={handleShare}
                          className="mt-2 w-full rounded-xl bg-[#0E151D] px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-[#0C121A]"
                        >
                          Share to app
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-5 text-base leading-7 text-[#232323] sm:text-lg">
                {selectedArticle.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>

          <aside className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <article
                key={article.id}
                role="button"
                onClick={() => setSelectedArticleId(article.id)}
                className={`group cursor-pointer flex h-full flex-col justify-between rounded-md border border-[#0E151D]/10 bg-[#F7F7FF] p-0 text-left transition duration-300 hover:shadow-[0_12px_30px_rgba(14,21,29,0.08)] ${
                  selectedArticle.id === article.id ? 'border-[#0E151D] shadow-[0_16px_45px_rgba(14,21,29,0.14)] opacity-100' : 'opacity-50'
                } ${index % 3 === 1 ? 'lg:mt-10' : ''} ${index % 3 === 1 ? 'lg:animate-float-down' : 'lg:animate-float-up'}`}
              >
                <div className="relative h-36 overflow-hidden rounded-t-md bg-cover bg-center" style={{ backgroundImage: `url('${article.image}')` }}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex flex-col justify-end p-2 text-[#F7F7FF]">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/80">{article.date}</p>
                    <h2 className="mt-1 text-base font-semibold leading-snug">{article.title}</h2>
                  </div>
                </div>
                <div className="px-4 pb-2 pt-0 -mt-1 text-sm leading-5 text-[#4C4C4C]">{article.excerpt}</div>
              </article>
            ))}
          </aside>
        </div>
      </Container>
    </section>
  )
}
