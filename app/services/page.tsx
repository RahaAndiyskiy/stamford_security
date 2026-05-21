import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import ScrollToTopButton from '@/components/ui/ScrollToTopButton'
import { Container } from '@/components/ui/Container'
import { Button2 } from '@/components/ui/Button2'
import { siteConfig } from '@/lib/siteConfig'

const services = [
  {
    title: 'Security Consultation',
    subtitle: 'ADVICE. STRATEGY. PROTECTION.',
    description: 'Stamford Security Services provides specialist security consultation for businesses, property owners and event planners. We assess risk, design tailored protection plans and make practical recommendations that strengthen safety without disrupting daily operations.\n\nOur consultants support perimeter planning, access control, CCTV deployment, incident response and compliance with industry best practice. We focus on clear, actionable security strategies that protect people, assets and premises.\n\nEvery consultation is customised to your site and objectives, helping you make confident decisions about prevention, monitoring and emergency readiness.',
    src: '/Industries/Consultation.webp',
  },
  {
    title: 'Access Control System',
    subtitle: 'CONTROL. ACCESS. PROFESSIONALISM.',
    description: 'Managing the movement of staff and visitors is essential across environments of all sizes — from corporate facilities to high-security sites where controlled access and verification are critical.\n\nStamford Security Services provides professional access control support across office buildings, university campuses, hospitals, industrial sites, warehouses and other environments where people, visitors and deliveries require active management.\n\nOur officers are selected for their professionalism, presentation and customer-focused approach, helping ensure that both public reception areas and private spaces are managed efficiently and securely.\n\nOur SIA licensed personnel are experienced in:',
    bulletPoints: [
      'Visitor screening and access verification',
      'Reception and front desk duties',
      'Visitor and vehicle management',
      'Mail handling and delivery coordination',
      'Day and night access control operations',
    ],
    src: '/Industries/Access Control.webp',
  },
  {
    title: 'Close Protection',
    subtitle: 'PROTECTION. DISCRETION. CONFIDENCE.',
    description: 'Close protection requires trust, preparation and the ability to adapt to changing environments while maintaining complete professionalism and discretion.\n\nStamford Security Services provides close protection support for VIPs, executives, families, high-net-worth individuals and clients requiring additional security during travel, private events or within residential environments.\n\nEvery assignment is approached individually. Our personnel are selected to match the client’s specific requirements, helping create a secure environment that allows daily activities to continue with confidence and peace of mind.',
    src: '/Industries/BodyGarding new.webp',
  },
  {
    title: 'Residential security',
    subtitle: 'SURVEILLANCE. PROTECTION.',
    description: 'We offer comprehensive residential security solutions for homes, estates and managed property portfolios. Our services include professionally trained security officers, CCTV installation and fully monitored alarm systems.\n\nOur SIA licensed security guards deliver a fully integrated guarding and surveillance service for residential and property sites, including gated communities, apartments and high-value homes.\n\nWe guarantee that we’ll provide personnel capable of dealing with any situation relating to the services listed above. We are fully committed to providing you with the very best people and unrivalled contract management.\n\nSince our formation, we have gained a reputation as a highly experienced security company with a young, energetic and forward-thinking management team. Our team is able to provide the highest level of professionalism, which other security companies often struggle to attain.',
    src: '/Industries/Residental.webp',
  },
  {
    title: 'Retail Security',
    subtitle: 'SAFE. SECURE. CUSTOMER FOCUSED.',
    description: 'Retail environments require more than a visible security presence. They demand professionalism, awareness and a service approach that protects customers, staff and business operations.\n\nStamford Security Services provides retail security officers and plain-clothes store detectives to help reduce loss, support store teams and maintain a safe, welcoming environment.\n\nWe support a wide range of retail environments including:',
    bulletPoints: [
      'Boutiques',
      'Clothing & Accessory Stores',
      'Showrooms',
      'Galleries',
      'Shopping Centres',
      'Entertainment Complexes',
    ],
    src: '/Industries/Retail.webp',
  },
  {
    title: 'Event Security',
    subtitle: 'EVENTS. CONTROL. CONFIDENCE.',
    description: 'Successful events rely on more than organisation alone. Effective security management plays a key role in creating safe, controlled environments while ensuring guests, staff and operations move smoothly throughout the event.\n\nStamford Security Services provides experienced event security personnel for corporate events, private functions, receptions, exhibitions and venues requiring professional supervision and access control.\n\nOur teams are trained to support event operations with a calm, professional presence while maintaining safety and efficient crowd management throughout the event.\n\nAs SIA approved contractors, we provide fully trained and licensed personnel for venues requiring door supervision and event security support.',
    src: '/Industries/Event.webp',
  },
]

export const metadata = {
  title: `Services | ${siteConfig.title}`,
  description: 'Explore Stamford Security Services and discover tailored security solutions for your business, property or event.',
}

export default function ServicesPage() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#EEEDEB] text-[#0E151D]">
        <Header />

        <main className="w-full px-0 py-28">
          <Container className="!px-5">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#0E151D]/70">Services</p>
              <h1 className="mt-4 text-5xl font-semibold leading-[1.05] text-[#0E151D] sm:text-6xl">
                Security Services
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#7F7F7F]">
                Stamford Security delivers a full range of risk management and protection services for corporate, retail, residential and events environments.
              </p>
            </div>
          </Container>

          <section className="mt-20 space-y-20">
            {services.map((service, index) => {
              const isOdd = index % 2 === 0
              return (
                <Container key={service.title} className="overflow-hidden !px-5">
                  <div className={`grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] ${isOdd ? '' : 'lg:grid-cols-[1fr_1.2fr]'} `}>
                    <div className={`${isOdd ? '' : 'lg:order-2'} rounded-md overflow-hidden bg-white shadow-[0_35px_90px_-50px_rgba(14,21,29,0.22)]`}>
                      <Image
                        src={service.src}
                        alt={service.title}
                        width={760}
                        height={520}
                        className="h-full w-full object-cover"
                        priority={false}
                      />
                    </div>

                    <div className={`${isOdd ? '' : 'lg:order-1'} flex flex-col justify-center` }>
                      <div className="max-w-xl">
                        <p className="text-sm uppercase tracking-[0.35em] text-[#0E151D]/70">
                          {service.subtitle ?? service.title}
                        </p>
                        <h2 className="mt-2 text-3xl font-semibold text-[#0E151D] sm:text-4xl">
                          {service.title}
                        </h2>
                        {service.bulletPoints ? (
                          <>
                            {service.description.split('\n\n').map((paragraph, paragraphIndex) => (
                              <p key={paragraphIndex} className="mt-5 text-sm leading-6 text-[#7F7F7F]">
                                {paragraph}
                              </p>
                            ))}
                            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-6 text-[#7F7F7F]">
                              {service.bulletPoints.map((point) => (
                                <li key={point}>{point}</li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <p className="mt-5 text-sm leading-6 text-[#7F7F7F]">
                            {service.description}
                          </p>
                        )}
                        <div className="mt-10">
                          <Button2 href="/request">CONSULTATION</Button2>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              )
            })}
          </section>
        </main>

        <Footer />
        <ScrollToTopButton />
      </div>
    </SmoothScrollProvider>
  )
}
