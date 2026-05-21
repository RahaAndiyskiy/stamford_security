import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Button2 } from '@/components/ui/Button2'
import { Container } from '@/components/ui/Container'
import ServicesStrip from '@/components/sections/ServicesStrip'

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full overflow-visible lg:overflow-hidden bg-[#E9E8E4] text-[#0E151D] lg:h-screen">
      <Container className="relative z-10 h-auto lg:h-full px-0">
        <div className="lg:hidden relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-visible">
          <div className="h-[55vh] w-full overflow-visible">
            <img
              src="/ABOUTFOTO2.webp"
              alt="About Stamford Security"
              className="h-full w-full object-contain object-center"
            />
          </div>
        </div>

        <div className="grid h-auto w-full gap-14 lg:h-[calc(100vh-160px)] lg:grid-cols-2 lg:items-end">
          <div className="hidden lg:block relative h-full w-full overflow-hidden bg-[#E9E8E4]">
            <Image
              src="/ABOUTFOTO2.webp"
              alt="About Stamford Security"
              fill
              className="object-cover object-right"
              priority
            />
          </div>

          <div className="order-last flex h-full flex-col justify-center gap-5 bg-[#E9E8E4] px-4 pt-10 lg:px-0 lg:order-none">
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
                <span className="text-[11px] uppercase tracking-[0.35em] text-[#0E151D]/80">About us</span>
                <h2 className="max-w-2xl text-4xl font-medium leading-[1.08] text-[#0E151D] sm:text-5xl">
                  Security you can rely on.<br /> People you can <span className="text-[#7F7F7F]">trust.</span>
                </h2>
                <div className="h-0.5 w-20 bg-[#0E151D]/95 mt-4" />
                <div className="space-y-8 mt-8 max-w-lg text-[18px] leading-5 text-[#7F7F7F]">
                  <p>
                    Stamford Security is a trusted provider of professional security solutions for businesses, properties and events across the UK.
                  </p>
                  <p>
                    For over 15 years, we’ve delivered dependable protection through experienced personnel, advanced technology and a commitment to your peace of mind.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-20 flex flex-col items-center gap-4 sm:flex-row sm:items-center">
              <Button href="/about" className="h-[60px] w-full lg:h-[50px] lg:min-w-[200px] lg:w-[250px] text-[16px] lg:text-[12px]">
                LEARN MORE ABOUT US
              </Button>
              <Button2 href="/request" className="h-[60px] w-full lg:h-[50px] lg:min-w-[200px] lg:w-[250px] justify-center text-sm lg:text-[14px] tracking-[0.3em] transition hover:text-[#0E151D]">
                CONSULTATION
              </Button2>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <ServicesStrip />
        </div>
      </Container>
    </section>
  )
}
