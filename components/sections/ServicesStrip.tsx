import { Container } from '@/components/ui/Container'
import { Button2 } from '@/components/ui/Button2'

const services = ['ACCESS CONTROL', 'Video Monitoring', 'Close Protection', 'Residential security']

const GPSIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className="h-12 w-12 scale-[1.15] gps-icon"
    aria-hidden="true"
  >
    <path
      className="gps-ring"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M37.689 6.593A21.16 21.16 0 0 1 46.207 24a21.5 21.5 0 0 1-1.129 6.893m-1.301 3.125A20.97 20.97 0 0 1 24.707 45.5a21.4 21.4 0 0 1-8.668-1.819m-2.882-1.067A22.42 22.42 0 0 1 3.135 24.791m.329-3.514C4.574 10.446 13.582 2.5 24.707 2.5a21.4 21.4 0 0 1 9.978 2.45"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.409 9.08a13.6 13.6 0 0 1 5.756-.814a15.58 15.58 0 0 1 15.582 15.581a15.14 15.14 0 0 1-12.332 15.256m-3.25.326a15.26 15.26 0 0 1-11.594-5.108m-1.806-2.516a15.5 15.5 0 0 1-2.182-7.958a15.26 15.26 0 0 1 6.875-13.16"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M30.09 15.71a9.03 9.03 0 0 1 4.496 8.188a9.574 9.574 0 1 1-7.54-9.357"
    />
    <circle className="gps-dot" cx="17.792" cy="9.966" r="1.456" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <circle className="gps-dot" cx="3.249" cy="23.085" r="1.456" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="14.436" cy="43.017" r="1.456" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <circle className="gps-dot" cx="44.538" cy="32.542" r="1.456" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="36.3" cy="5.898" r="1.456" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <circle className="gps-dot" cx="12.707" cy="33.051" r="1.456" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <circle className="gps-dot" cx="28.47" cy="14.949" r="1.456" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="26.742" cy="39.091" r="1.456" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const AlarmIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-12 w-12 scale-[1.15] alarm-icon"
    aria-hidden="true"
  >
    <path
      className="alarm-path"
      fill="currentColor"
      d="M6 6.9L3.87 4.78l1.41-1.41L7.4 5.5zM13 1v3h-2V1zm7.13 3.78L18 6.9l-1.4-1.4l2.12-2.13zM4.5 10.5v2h-3v-2zm15 0h3v2h-3zM6 20h12a2 2 0 0 1 2 2H4a2 2 0 0 1 2-2m6-15a6 6 0 0 1 6 6v8H6v-8a6 6 0 0 1 6-6m0 2a4 4 0 0 0-4 4v6h8v-6a4 4 0 0 0-4-4"
    />
  </svg>
)

const BodyGuardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-12 w-12 scale-[1.15] bodyguard-icon"
    aria-hidden="true"
  >
    <g className="bodyguard-shield">
      <path
        d="M3 10.4167C3 7.21907 3 5.62028 3.37752 5.08241C3.75503 4.54454 5.25832 4.02996 8.26491 3.00079L8.83772 2.80472C10.405 2.26824 11.1886 2 12 2C12.8114 2 13.595 2.26824 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C21 5.62028 21 7.21907 21 10.4167C21 10.8996 21 11.4234 21 11.9914C21 17.6294 16.761 20.3655 14.1014 21.5273C13.38 21.8424 13.0193 22 12 22C10.9807 22 10.62 21.8424 9.89856 21.5273C7.23896 20.3655 3 17.6294 3 11.9914C3 11.4234 3 10.8996 3 10.4167Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </g>
    <g className="bodyguard-person">
      <circle cx="12" cy="9" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 15C16 16.1046 16 17 12 17C8 17 8 16.1046 8 15C8 13.8954 9.79086 13 12 13C14.2091 13 16 13.8954 16 15Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </g>
  </svg>
)

const EventIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 16"
    className="h-12 w-12 scale-[1.15] event-icon"
    aria-hidden="true"
  >
    <g fill="currentColor">
      <path d="M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM1 3.857C1 3.384 1.448 3 2 3h20c.552 0 1 .384 1 .857v8.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
      <circle className="event-dot event-dot--static" cx="6" cy="8" r="1" fill="currentColor" />
      <circle className="event-dot event-dot--one" cx="10" cy="8" r="1" fill="currentColor" />
      <circle className="event-dot event-dot--two" cx="14" cy="8" r="1" fill="currentColor" />
      <circle className="event-dot event-dot--three" cx="18" cy="8" r="1" fill="currentColor" />
    </g>
  </svg>
)

const VideoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="h-12 w-12 scale-[1.15] video-icon"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M109.285 30.402c-14.82-.007-30.414 2.144-46.822 6.932l-.145.05a10 10 0 0 0-.496.173a10 10 0 0 0-.39.152a10 10 0 0 0-.47.218a10 10 0 0 0-.384.193a10 10 0 0 0-.463.273a10 10 0 0 0-.342.22a10 10 0 0 0-.435.32a10 10 0 0 0-.324.256a10 10 0 0 0-.397.357a10 10 0 0 0-.297.29a10 10 0 0 0-.37.405a10 10 0 0 0-.247.293a10 10 0 0 0-.342.463a10 10 0 0 0-.215.315a10 10 0 0 0-.282.472a10 10 0 0 0-.193.354a10 10 0 0 0-.233.497a10 10 0 0 0-.156.367a10 10 0 0 0-.178.512a10 10 0 0 0-.122.386a10 10 0 0 0-.17.688L33.42 156.55a9.5 9.5 0 0 0 5.625 10.614l82.023 34.578l31.62 162.133l-116.534 25.313a9.5 9.5 0 0 0-7.5 9.156l-1.062 76.47A9.5 9.5 0 0 0 39.967 484l146.468-46.813l24.123-4.677c.177.003.353.015.53.015c9.956 0 19.332-4.742 25.88-12.472c6.543-7.724 9.966-17.79 9.956-28.16v-.026c.006-6.574-1.372-13.037-4.045-18.855l-25.273-130.57l125.774 53.02l.155.058a10 10 0 0 0 .545.197a10 10 0 0 0 .35.11a10 10 0 0 0 .543.138a10 10 0 0 0 .416.086a10 10 0 0 0 .483.073a10 10 0 0 0 .482.05a10 10 0 0 0 .43.02a10 10 0 0 0 .54.004a10 10 0 0 0 .363-.01l83.406-5.28a9.5 9.5 0 0 0 7.97-5.438l50.522-106.954l.008-.014v-.002l.02-.047a9.5 9.5 0 0 0-5.51-13.137a93.5 93.5 0 0 0-23.956-9.148L152.273 36.688a10 10 0 0 0-.802-.268c-13.317-3.843-27.364-6.01-42.185-6.018zM82.938 44.125a9.5 9.5 0 0 1 3.687.72l290.75 116.53a9.51 9.51 0 0 1 5.77 10.79a9.5 9.5 0 0 0-.707 1.46l-.836 2.07a9.51 9.51 0 0 1-11.29 3.336L79.563 62.47a9.5 9.5 0 0 1 3.376-18.345zm357.308 128.367c4.4.038 8.75.508 13.068 1.404l14.74 5.72l-23.67 50.114c.912-4.058 1.378-8.082 1.335-11.855c-.1-8.732-2.94-15.95-7.845-19.563s-11.688-3.48-18.375.25c-1.65.92-3.305 2.063-4.906 3.375c.614-.822 1.19-1.72 1.687-2.687c1.417-2.757 2.248-5.952 2.22-8.78c-.032-2.835-.945-5.243-2.563-6.47a4.35 4.35 0 0 0-2.75-.906c-1.01.016-2.102.332-3.156.937c-2.107 1.212-4.08 3.52-5.5 6.282c-1.417 2.764-2.25 5.948-2.217 8.782c.03 2.833.945 5.242 2.562 6.47c1.617 1.225 3.798 1.147 5.906-.064c-3.416 3.562-6.546 7.9-9.092 12.72c-4.608 8.716-7.226 18.798-7.125 27.53s3 15.98 7.906 19.594c4.904 3.614 3.45 11.624 3.45-11.624 0 0 0 0 0 0"
    />
    <circle className="camera-record" cx="410" cy="190" r="22" />
  </svg>
)

const serviceIcon = (service: string) => {
  if (service === 'ACCESS CONTROL') {
    return <GPSIcon />
  }

  if (service === 'Video Monitoring') {
    return <VideoIcon />
  }

  if (service === 'Close Protection') {
    return <BodyGuardIcon />
  }

  if (service === 'Residential security') {
    return <EventIcon />
  }

  return null
}

export default function ServicesStrip() {
  return (
    <section aria-label="Service highlights" className="w-full bg-[#0E151D] text-[#EEEDEB]">
      <Container className="flex h-[160px] items-center justify-between gap-8">
        <ul className="flex flex-1 items-center gap-20 overflow-hidden text-sm uppercase tracking-[0.25em] text-[#EEEDEB]/95 pl-8 lg:pl-11">
          {services.map((service, index) => {
            const [first, second] = service.split(' ')
            return (
              <li
                key={service}
                className={`flex items-center gap-3 ${service === 'ACCESS CONTROL' ? 'service-item--gps' : service === 'Video Monitoring' ? 'service-item--video' : service === 'Close Protection' ? 'service-item--alarm' : service === 'Residential security' ? 'service-item--event' : ''}`}
              >
                <span className="flex h-14 w-14 items-center justify-center text-current">
                  {serviceIcon(service)}
                </span>
                <span className="text-left leading-tight text-current">
                  {first}
                  <br />
                  {second}
                </span>
              </li>
            )
          })}
        </ul>

        <Button2 href="/services" className="button2--light text-sm tracking-[0.35em] transition text-[#EEEDEB] hover:text-[#FFFFFF]">
          View all services
        </Button2>
      </Container>
    </section>
  )
}
