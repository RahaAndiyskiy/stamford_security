import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Button2 } from '@/components/ui/Button2'

import Image from 'next/image'

const HERO_ANIMATIONS_ENABLED = false

export default function HeroSection() {
  const heroTextClass = HERO_ANIMATIONS_ENABLED ? 'hero-label-animate' : ''
  const heroHeadingClass = HERO_ANIMATIONS_ENABLED ? 'hero-heading-animate' : ''
  const heroCopyClass = HERO_ANIMATIONS_ENABLED ? 'hero-copy-animate' : ''
  const heroActionsClass = HERO_ANIMATIONS_ENABLED ? 'hero-actions-animate' : ''
  const heroImageClass = HERO_ANIMATIONS_ENABLED ? 'hero-image-animate' : ''

  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#E9E8E4] lg:h-screen">
      <div className="pointer-events-none hidden lg:block absolute inset-y-0 right-0 w-full lg:w-[65vw]">
        <div className={`relative h-full w-full ${heroImageClass}`}>
          <Image
            src="/HERO_NEW.webp"
            alt="Hero background"
            fill
            className="object-cover object-right"
            priority
          />
        </div>
      </div>
      <div
        className="pointer-events-none hidden lg:block absolute inset-y-0 right-0 w-full lg:w-[65vw]"
        style={{
          background: 'linear-gradient(90deg, #E9E8E4 0%, rgba(233,232,228,0.95) 15%, rgba(233,232,228,0.3) 25%, rgba(0, 0, 0, 0.4)  85%)',
        }}
      />

      <Container className="relative z-10 h-auto lg:h-[calc(100%-160px)]">
        <div className="hidden lg:block h-full w-full pt-20 pb-20 lg:pt-28 lg:w-[35vw] bg-[#E9E8E4]">
          <div className="flex h-full flex-col justify-between gap-6">
            <div className="max-w-xl lg:max-w-[36rem]">
              <span className={`${heroTextClass} text-xs uppercase tracking-[0.25em] text-[#6B6B6B]/80`}>Stamford Security Limited</span>
              <h1 className={`${heroHeadingClass} max-w-2xl text-5xl font-medium leading-[1.05] text-[#0E151D] sm:text-7xl`}>
                Working for
                <br />
                your <span className="text-[#7F7F7F]">safety.</span>
              </h1>
              <div className={`${heroCopyClass} h-0.5 w-24 bg-[#0E151D]/95 mt-6`} />
              <p className={`${heroCopyClass} max-w-lg text-[28px] leading-9 text-[#7F7F7F] mt-6`}>
                Professional security solutions for businesses and properties.
              </p>
            </div>
            <div className={`flex flex-wrap items-center gap-4 ${heroActionsClass}`}>
              <Button
                href="/request"
                className="h-[60px] w-full sm:w-auto sm:min-w-[220px] sm:w-[240px] text-[16px] lg:h-[60px] lg:min-w-[220px] lg:w-[240px]"
              >
                Let&apos;s talk
              </Button>
              <Button2
                href="#about"
                className="h-[60px] w-full sm:w-auto sm:min-w-[220px] sm:w-[240px] justify-center text-sm tracking-[0.3em] transition hover:text-[#0E151D] lg:h-auto lg:w-auto lg:min-w-0"
              >
                About Us
              </Button2>
            </div>
          </div>
        </div>
      </Container>

      <div className={`lg:hidden relative h-[75vh] w-full overflow-hidden ${heroImageClass}`}>
        <Image
          src="/HERO4mobile.webp"
          alt="Mobile hero background"
          fill
          className="object-cover object-[center_0%] hero-mobile-zoom"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-8">
          <div className={`flex flex-col gap-3 ${heroActionsClass}`}>
            <Button
              href="/request"
              className="h-[56px] w-full text-[16px]"
            >
              Let&apos;s talk
            </Button>
            <Button2
              href="#about"
              className="h-[56px] w-full justify-center text-sm tracking-[0.3em] text-[#EEEDEB] hover:text-[#EEEDEB] about-hero-button"
            >
              About Us
            </Button2>
          </div>
        </div>
      </div>

      <div className="w-full text-[#0E151D]">
        <Container className="grid h-[160px] items-center px-0">
          <div className="grid h-full w-full grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              {
                value: 15,
                suffix: '+',
                title: 'Years experience',
                description: 'Over two decades of industry knowledge and proven results.',
              },
              {
                value: 20,
                suffix: '+',
                title: 'Long-term clients',
                description: 'Building lasting partnerships with businesses and organisations nationwide.',
              },
              {
                value: 100,
                suffix: '+',
                title: 'Security Staff',
                description: 'A trusted team of 100+ security professionals delivering reliable support across every operation.',
              },
              {
                value: 100,
                suffix: '%',
                title: 'Licensed & insured',
                description: 'Fully licensed, insured and compliant with industry standards.',
              },
            ].map((item, index) => (
              <div key={item.title} className="group flex h-full">
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-b-none bg-[#0E151D]/100 backdrop-blur-sm px-3 text-center lg:px-4 [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-500 ease-out lg:[transform-style:preserve-3d] lg:group-hover:[transform:rotateY(180deg)] lg:group-hover:-translate-y-1">
                    <div className="absolute inset-0 flex flex-col justify-center gap-0 lg:gap-3" style={{ backfaceVisibility: 'hidden' }}>
                      <span className="text-xl font-medium tracking-tight text-[#EEEDEB] lg:text-4xl">
                        <span
                          className="counter inline-block"
                          style={{
                            '--count-target': item.value,
                            '--count-delay': `${index * 0.16}s`,
                          } as any}
                        />
                        <span aria-hidden="true">{item.suffix}</span>
                      </span>
                      <span className="text-[12px] uppercase tracking-[0.35em] text-[#EEEDEB]/90 lg:text-[16px]">
                        {item.title}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex h-full flex-col justify-center gap-1 px-2 text-center text-[#EEEDEB]/80 lg:gap-3 lg:px-4 [transform:rotateY(180deg)]" style={{ backfaceVisibility: 'hidden' }}>
                      <p className="mx-auto max-w-full text-xs leading-4 text-[#EEEDEB]/80 lg:max-w-[280px] lg:text-[18px]">
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
