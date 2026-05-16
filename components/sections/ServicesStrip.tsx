import { Container } from '@/components/ui/Container'
import { Button2 } from '@/components/ui/Button2'

const services = ['GPS Monitoring', 'Video Monitoring', 'Alarm Systems', 'Event Security']

const serviceIcon = (service: string) => {
  const iconMap: Record<string, { src: string; alt: string }> = {
    'GPS Monitoring': {
      src: '/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/arcticons--gpscockpit.svg',
      alt: 'GPS Monitoring',
    },
    'Video Monitoring': {
      src: '/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/game-icons--cctv-camera.svg',
      alt: 'Video Monitoring',
    },
    'Alarm Systems': {
      src: '/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/mdi--alarm-light-outline.svg',
      alt: 'Alarm Systems',
    },
    'Event Security': {
      src: '/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/bi--calendar3-event.svg',
      alt: 'Event Security',
    },
  }

  const icon = iconMap[service]
  return icon ? (
    <img
      src={icon.src}
      alt={icon.alt}
      width={54}
      height={54}
      className="h-12 w-12"
      decoding="async"
    />
  ) : null
}

export default function ServicesStrip() {
  return (
    <section id="services" aria-label="Service highlights" className="w-full bg-[#F6F5F3] text-[#0E151D]">
      <Container className="flex h-[160px] items-center justify-between gap-8">
        <ul className="flex flex-1 items-center gap-20 overflow-hidden text-sm uppercase tracking-[0.25em] text-[#0E151D]/80 pl-8 lg:pl-11">
          {services.map((service, index) => {
            const [first, second] = service.split(' ')
            return (
              <li key={service} className="flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center text-[#0E151D]">
                  {serviceIcon(service)}
                </span>
                <span className="text-left leading-tight">
                  {first}
                  <br />
                  {second}
                </span>
                {index < services.length - 1 && <span className="h-14 w-px bg-[#0E151D]/20" />}
              </li>
            )
          })}
        </ul>

        <Button2 href="#services" className="text-sm tracking-[0.35em] transition hover:text-[#0E151D]">
          View all services
        </Button2>
      </Container>
    </section>
  )
}
