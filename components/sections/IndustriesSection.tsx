"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Button2 } from '@/components/ui/Button2'
import { Container } from '@/components/ui/Container'

const industryImages = [
  { src: '/Industries/Access Control.webp', label: 'Access Control System' },
  { src: '/Industries/BodyGarding.webp', label: 'Body Guarding' },
  { src: '/Industries/Construction.webp', label: 'Construction Security' },
  { src: '/Industries/Retail.webp', label: 'Retail Security' },
]

export default function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="industries" className="h-screen w-full overflow-hidden bg-[#EEEDEB] text-[#0E151D]">
      <Container className="grid h-full gap-10 pt-24 lg:grid-cols-[minmax(30rem,1fr)_minmax(32rem,1fr)] lg:pt-28">
        <div className="w-full max-w-xl lg:max-w-[36rem]">
          <div className="relative overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0 z-0 opacity-5"
              style={{
                backgroundImage: "url('/Stamford Security logos-24.svg')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center 50%',
                backgroundSize: '120%',
              }}
            />
            <div className="relative z-10">
              <span className="text-[11px] uppercase tracking-[0.35em] text-[#0E151D]/80">
                INDUSTRIES WE SERVE
              </span>
              <h2 className="mt-4 text-4xl font-medium leading-[1.08] text-[#0E151D] sm:text-5xl max-w-[33rem]">
                Security solutions built for your <span className="text-[#7F7F7F]">industry.</span>
              </h2>
              <ul className="mt-8 max-w-md space-y-3 text-[18px] leading-6 text-[#7F7F7F]">
                {industryImages.map((item, index) => (
                  <li
                    key={item.src}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={`block w-max cursor-pointer transition-all duration-300 ${
                      activeIndex === index ? 'text-[22px] font-semibold text-[#0E151D]' : ''
                    }`}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
              <div className="h-0.5 w-20 bg-[#0E151D]/95 mt-6" />
              <p className="mt-8 max-w-lg text-[18px] leading-5 text-[#7F7F7F]">
                We deliver tailored security solutions designed to protect people, assets and operations across corporate, construction, executive and high-risk environments.
              </p>
              <div className="mt-20 flex flex-wrap items-center gap-4">
                <Button href="/request" className="h-[50px] min-w-[200px] sm:w-[250px] text-[12px]">
                  MORE SERVICES
                </Button>
                <Button2 href="/request" className="h-[50px] min-w-[200px] sm:w-[250px] text-[14px]">
                  CONSULTATION
                </Button2>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative max-h-[34rem] overflow-visible self-center -mt-16 industries-gallery"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {industryImages.map((item, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={item.src}
              src={item.src}
              alt={item.label}
              loading="lazy"
              decoding="async"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`industries-gallery-img ${activeIndex === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
