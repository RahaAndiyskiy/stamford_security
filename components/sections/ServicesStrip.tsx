import { Container } from '@/components/ui/Container'
import { Button2 } from '@/components/ui/Button2'

const services = ['GPS Monitoring', 'Video Monitoring', 'Alarm Systems', 'Event Security']

const serviceIcon = (service: string) => {
  switch (service) {
    case 'GPS Monitoring':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#0E151D]" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'Video Monitoring':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#0E151D]" aria-hidden="true">
          <rect x="3" y="7" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M17 9l5-3v12l-5-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'Alarm Systems':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#0E151D]" aria-hidden="true">
          <path d="M6 12c0-3.3 2.7-6 6-6s6 2.7 6 6v3H6v-3z" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9 13h6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M11 16h2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12 6v-2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'Event Security':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#0E151D]" aria-hidden="true">
          <rect x="4" y="5" width="16" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4 9h16" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 3v4M16 3v4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}

export default function ServicesStrip() {
  return (
    <section id="services" aria-label="Service highlights" className="w-full bg-[#F6F5F3] text-[#0E151D]">
      <Container className="flex h-[160px] items-center justify-between gap-8">
        <ul className="flex flex-1 items-center gap-8 overflow-hidden text-sm uppercase tracking-[0.25em] text-[#0E151D]/80">
          {services.map((service, index) => (
            <li key={service} className="flex items-center gap-3 whitespace-nowrap">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-slate-200 text-[#0E151D]">
                {serviceIcon(service)}
              </span>
              <span>{service}</span>
              {index < services.length - 1 && <span className="h-6 w-px bg-[#0E151D]/20" />}
            </li>
          ))}
        </ul>

        <Button2 href="#services" className="text-sm tracking-[0.35em] transition hover:text-[#0E151D]">
          View all services
        </Button2>
      </Container>
    </section>
  )
}
