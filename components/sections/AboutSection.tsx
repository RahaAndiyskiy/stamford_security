import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Button2 } from '@/components/ui/Button2'
import { Container } from '@/components/ui/Container'

export default function AboutSection() {
  return (
    <section id="about" className="sticky top-0 z-10 h-screen w-full overflow-hidden bg-[#E9E8E4] text-[#0E151D]">
      <Container className="relative z-10 grid h-full px-0">
        <div className="grid h-[calc(100vh-160px)] w-full gap-14 lg:grid-cols-2 lg:items-end">
          <div className="relative h-full w-full overflow-hidden bg-[#E9E8E4]">
            <Image
              src="/ABOUT_FOTO_2.WEBP"
              alt="About Stamford Security"
              fill
              className="object-cover"
              style={{ objectPosition: 'center 55%' }}
              priority
            />
          </div>

          <div className="flex h-full flex-col justify-center gap-5 bg-[#E9E8E4] p-0 pt-10">
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
                <Image
                  src="/Stamford Security logos-21.svg"
                  alt="Stamford Security logo background"
                  fill
                  className="object-contain"
                  style={{ objectPosition: 'center center', transform: 'scale(1.4)' }}
                />
              </div>
              <div className="relative">
                <span className="text-[11px] uppercase tracking-[0.35em] text-[#0E151D]/80">About us</span>
                <h2 className="max-w-2xl text-4xl font-medium leading-[1.08] text-[#0E151D] sm:text-3xl">
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
            <div className="mt-20">
              <Button href="#request" className="h-[40px] min-w-[200px] sm:w-[250px] text-[12px]">
                LERN MORE ABOUT US
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#0E151D] text-white">
          <Container className="grid h-[160px] items-center px-0">
            <ul className="grid h-full w-full grid-cols-2 lg:grid-cols-4 text-center text-sm uppercase tracking-[0.25em] text-white/80">
              {['GPS Monitoring', 'Video Monitoring', 'Alarm Systems', 'Event Security'].map((item, index) => (
                <li key={item} className="flex h-full items-center justify-center border-l border-white/20 first:border-l-0 px-4">
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </Container>
    </section>
  )
}
