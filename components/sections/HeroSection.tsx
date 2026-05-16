import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Button2 } from '@/components/ui/Button2'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#E9E8E4]">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[65vw]">
        <div className="relative h-full w-full">
          <Image
            src="/HERO 3.WEBP"
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

      <Container className="relative z-10 grid min-h-[700px] items-center">
        <div className="w-full py-14 lg:py-0 lg:w-[35vw] bg-[#E9E8E4]">
          <div className="flex flex-col justify-center gap-6 p-8 lg:p-11">
            <span className="text-xs uppercase tracking-[0.35em] text-[#0E151D]/80">Stamford Security</span>
            <h1 className="max-w-2xl text-5xl font-medium leading-[1.02] text-[#0E151D] sm:text-5xl">
              Security for
              <br />
              what matters <span className="text-[#7F7F7F]">most.</span>
            </h1>
            <div className="h-px w-20 bg-[#0E151D]/20" />
            <p className="max-w-lg text-[28px] leading-8 text-[#7F7F7F]">
              Professional security solutions for businesses and properties.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-10">
              <Button href="#request" className="h-[60px] w-[240px] text-[16px]">
                Lets talk
              </Button>
              <Button2 href="#about" className="text-sm tracking-[0.3em] transition hover:text-[#0E151D]">
                About Us
              </Button2>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
