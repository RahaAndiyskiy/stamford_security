import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Button2 } from '@/components/ui/Button2'

import Image from 'next/image'

const HERO_ANIMATIONS_ENABLED = true

export default function HeroSection() {
  const heroTextClass = HERO_ANIMATIONS_ENABLED ? 'hero-label-animate' : ''
  const heroHeadingClass = HERO_ANIMATIONS_ENABLED ? 'hero-heading-animate' : ''
  const heroCopyClass = HERO_ANIMATIONS_ENABLED ? 'hero-copy-animate' : ''
  const heroActionsClass = HERO_ANIMATIONS_ENABLED ? 'hero-actions-animate' : ''
  const heroImageClass = HERO_ANIMATIONS_ENABLED ? 'hero-image-animate' : ''

  return (
    <section className="relative flex-1 min-h-0 w-full overflow-hidden bg-[#E9E8E4]">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[65vw]">
        <div className={`relative h-full w-full ${heroImageClass}`}>
          <Image
            src="/HERO3.WEBP"
            alt="Hero background"
            fill
            className="object-cover object-right"
            priority
          />
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[65vw]"
        style={{
          background: 'linear-gradient(90deg, #E9E8E4 0%, rgba(233,232,228,0.95) 15%, rgba(233,232,228,0.3) 25%, rgba(0, 0, 0, 0.4)  85%)',
        }}
      />

      <Container className="relative z-10 flex min-h-full items-stretch">
        <div className="h-full w-full pt-16 pb-24 lg:pt-20 lg:pb-24 lg:w-[35vw] bg-[#E9E8E4]">
          <div className="flex h-full flex-col justify-between gap-6 p-8 lg:p-11">
            <div>
              <span className={`${heroTextClass} text-xs uppercase tracking-[0.25em] text-[#7F7F7F]/80`}>Stamford Security</span>
              <h1 className={`${heroHeadingClass} max-w-2xl text-5xl font-medium leading-[1.05] text-[#0E151D] sm:text-5xl`}>
                Security for
                <br />
                what matters <span className="text-[#7F7F7F]">most.</span>
              </h1>
              <div className={`${heroCopyClass} h-0.5 w-24 bg-[#0E151D]/95 mt-6`} />
              <p className={`${heroCopyClass} max-w-lg text-[28px] leading-9 text-[#7F7F7F] mt-6`}>
                Professional security solutions for businesses and properties.
              </p>
            </div>
            <div className={`flex flex-wrap items-center gap-4 ${heroActionsClass}`}>
              <Button href="#request" className="h-[60px] min-w-[220px] sm:w-[240px] text-[16px]">
                Let&apos;s talk
              </Button>
              <Button2 href="#about" className="text-sm tracking-[0.3em] transition hover:text-[#0E151D]">
                About Us
              </Button2>
            </div>
          </div>
        </div>
      </Container>

      <div className="w-full text-[#0E151D]">
        <Container className="grid h-[160px] items-center px-0">
          <div className="grid h-full w-full grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              {
                value: 20,
                suffix: '+',
                title: 'Years experience',
                description: 'Over two decades of industry knowledge and proven results.',
              },
              {
                value: 30,
                suffix: '+',
                title: 'Long-term clients',
                description: 'Building lasting partnerships with businesses and organisations nationwide.',
              },
              {
                value: 24,
                suffix: '/7',
                title: 'Rapid response',
                description: 'Always available, always ready to respond when it matters most.',
              },
              {
                value: 100,
                suffix: '%',
                title: 'Licensed & insured',
                description: 'Fully licensed, insured and compliant with industry standards.',
              },
            ].map((item, index) => (
              <div key={item.title} className="group flex h-full">
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-b-none bg-[#0E151D]/95 backdrop-blur-sm px-4 text-center [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover: group-hover:-translate-y-1">
                    <div className="absolute inset-0 flex flex-col justify-center gap-2" style={{ backfaceVisibility: 'hidden' }}>
                      <span className="text-2xl font-medium tracking-tight text-[#EEEDEB] sm:text-4xl">
                        <span
                          className="counter inline-block"
                          style={{
                            '--count-target': item.value,
                            '--count-delay': `${index * 0.16}s`,
                          } as any}
                        />
                        <span aria-hidden="true">{item.suffix}</span>
                      </span>
                      <span className="text-[16px] uppercase tracking-[0.35em] text-[#EEEDEB]/90">
                        {item.title}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex h-full flex-col justify-center gap-3 px-4 text-center text-[#EEEDEB]/80 [transform:rotateY(180deg)]" style={{ backfaceVisibility: 'hidden' }}>
                      <p className="mx-auto max-w-[280px] text-[18px] leading-4 text-[#EEEDEB]/80">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}
