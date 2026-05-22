"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Button2 } from '@/components/ui/Button2'
import { Container } from '@/components/ui/Container'

const industryImages = [
  { src: '/Industries/Access Control.webp', label: 'Access Control System', anchor: 'access-control-system' },
  { src: '/Industries/BodyGarding new.webp', label: 'Close Protection', anchor: 'close-protection' },
  { src: '/Industries/Residental.webp', label: 'Residential security', anchor: 'residential-security' },
  { src: '/Industries/Retail.webp', label: 'Retail Security', anchor: 'retail-security' },
]

export default function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="industries" className="relative scroll-mt-24 w-full overflow-hidden bg-[#EEEDEB] text-[#0E151D] lg:h-screen lg:pb-0 pb-24">
      <span id="services" className="absolute inset-x-0 top-0 h-0" />
      <Container className="grid h-full gap-10 pt-24 lg:grid-cols-[minmax(30rem,1fr)_minmax(32rem,1fr)] lg:pt-28 !px-5">
        <div className="w-full max-w-xl lg:max-w-[36rem] mx-auto px-0 lg:mx-0 lg:px-0">
          <div className="relative overflow-hidden">
            <div className="relative overflow-hidden max-w-xl mx-auto lg:mx-0">
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
                    <li key={item.src} className="transition-all duration-300">
                      <a
                        href={`/services#${item.anchor}`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                        className={`block overflow-visible text-[18px] leading-6 transition-colors duration-200 ease-out hover:text-[#0E151D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E151D] ${
                          activeIndex === index ? 'text-[#0E151D]' : 'text-[#7F7F7F]'
                        }`}
                      >
                        <span
                          className={`inline-flex transform-gpu origin-left transition-transform duration-200 ease-out ${
                            activeIndex === index ? 'scale-105 font-semibold' : 'scale-100'
                          } hover:scale-105 hover:font-semibold`}
                        >
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="h-0.5 w-20 bg-[#0E151D]/95 mt-6" />
                <p className="mt-8 max-w-lg text-[18px] leading-5 text-[#7F7F7F]">
                  We deliver tailored security solutions designed to protect people, assets and operations across corporate, construction, executive and high-risk environments.
                </p>
                <div className="mt-20 flex flex-col items-center gap-4 sm:flex-row sm:items-center">
                  <Button
                    href="/services"
                    className="h-[60px] w-full sm:w-auto sm:min-w-[220px] sm:w-[240px] text-[16px] lg:h-[50px] lg:min-w-[200px] lg:w-[250px] lg:text-[12px]"
                  >
                    MORE SERVICES
                  </Button>
                  <Button2
                    href="/request"
                    className="h-[60px] w-full sm:w-auto sm:min-w-[220px] sm:w-[240px] justify-center text-sm tracking-[0.3em] transition hover:text-[#0E151D] lg:h-[50px] lg:min-w-[200px] lg:w-[250px] lg:text-[14px]"
                  >
                    CONSULTATION
                  </Button2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden grid w-full max-w-[24rem] mx-auto grid-cols-2 gap-4 mt-10">
          {industryImages.map((item, index) => (
            <a
              key={item.src}
              href={`/services#${item.anchor}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              aria-label={`Go to ${item.label}`}
              className="block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                decoding="async"
                className={`h-[240px] w-full rounded-xl object-cover transition-transform duration-300 ease-out hover:scale-105 ${
                  activeIndex === index ? 'scale-105 shadow-2xl shadow-black/10' : 'scale-100'
                }`}
              />
            </a>
          ))}
        </div>

        <div className="hidden lg:grid relative max-h-[34rem] grid-cols-2 gap-4 self-center -mt-16">
          {industryImages.map((item, index) => (
            <a
              key={item.src}
              href={`/services#${item.anchor}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              aria-label={`Go to ${item.label}`}
              className="block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                decoding="async"
                className={`h-[17rem] w-full rounded-xl object-cover transition-transform duration-300 ease-out hover:scale-105 ${
                  activeIndex === index ? 'scale-105 shadow-2xl shadow-black/10' : 'scale-100'
                }`}
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
