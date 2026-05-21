import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import RequestForm from '@/components/request/RequestForm'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import { Button2 } from '@/components/ui/Button2'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/lib/siteConfig'

export const metadata = {
  title: `Request Consultation | ${siteConfig.title}`,
  description: 'Request a consultation with Stamford Security Services for tailored security support.',
}

export default function RequestPage() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#EEEDEB] text-[#0E151D]">
        <Header />

        <main className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8">
          <div className="space-y-6">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#0E151D]/70">
                Request Consultation
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-[#0E151D] sm:text-4xl">
                Start your security project with Stamford Security <span className="text-[#0E151D]/65">Services.</span>
              </h1>
              <p className="mt-6 max-w-xl text-md leading-6 text-[#0E151D]/65">
                Tell us about your requirements and one of our specialists will contact you to discuss the best approach for your business, property or event.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
              <div className="order-2 lg:order-1">
                <div className="rounded-md grid gap-7 border border-[#0E151D]/15 bg-[#F6F5F3] p-7 text-[#0E151D] shadow-sm shadow-black/5">
                  <div className="space-y-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-[#0E151D]/70">WHY STAMFORD</p>
                    <div className="space-y-2 text-[#0E151D]/85 text-sm leading-4">
                      <p>• Receive a tailored security assessment for your project.</p>
                      <p>• Discuss operational requirements, budgets and timelines.</p>
                      <p>• Build the right mix of personnel, technology and security processes.</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-end gap-6 border-t border-[#0E151D]/10 pt-4 text-[#0E151D]">
                    <div className="grid gap-0.5 min-w-[84px]">
                      <span className="text-[1.9rem] font-semibold leading-none">20+</span>
                      <span className="uppercase tracking-[0.35em] text-[#0E151D]/70 text-[10px]">YEARS</span>
                      <span className="uppercase tracking-[0.35em] text-[#0E151D]/70 text-[10px]">EXPERIENCE</span>
                    </div>
                    <div className="grid gap-0.5 min-w-[72px]">
                      <span className="text-[1.9rem] font-semibold leading-none">24</span>
                      <span className="uppercase tracking-[0.35em] text-[#0E151D]/70 text-[9px]">RESPONSE WITHIN</span>
                      <span className="uppercase tracking-[0.35em] text-[#0E151D]/70 text-[9px]">24 HOURS</span>
                    </div>
                    <div className="grid gap-0.5 min-w-[40px]">
                      <span className="text-[1.9rem] font-semibold leading-none">UK</span>
                      <span className="uppercase tracking-[0.35em] text-[#0E151D]/70 text-[10px]">NATIONWIDE</span>
                      <span className="uppercase tracking-[0.35em] text-[#0E151D]/70 text-[10px]">COVERAGE</span>
                    </div>
                  </div>

                  <div className="border-t border-[#0E151D]/10 pt-3 text-sm leading-5 text-[#0E151D]/85">
                    <div className="flex flex-wrap justify-between gap-8">
                      <div className="min-w-[45%]">
                        <p className="uppercase tracking-[0.35em] text-[#0E151D]/70 text-xs">OFFICE</p>
                        <div className="mt-3 grid gap-1 text-sm text-[#0E151D]/85">
                          <p>Venture House,</p>
                          <p>2 Arlington Square,</p>
                          <p>Bracknell RG12 1WA</p>
                        </div>
                      </div>
                      <div className="min-w-[45%] text-right">
                        <p className="uppercase tracking-[0.35em] text-[#0E151D]/70 text-xs">CONTACT</p>
                        <p className="mt-3 text-sm text-[#0E151D]/85">+44 1344 951005</p>
                        <div className="mt-4 flex justify-end gap-3">
                          <a
                            href="https://wa.me/441344951005"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Stamford Security on WhatsApp"
                            className="group flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-200"
                          >
                            <img src="/WhatsApp.svg" alt="WhatsApp logo" className="h-7 w-7 transition-transform duration-200 group-hover:scale-110" />
                          </a>
                          <a
                            href="https://x.com/stamfsecurity"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Stamford Security on X"
                            className="group flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-200"
                          >
                            <img src="/X.svg" alt="X logo" className="h-7 w-7 transition-transform duration-200 group-hover:scale-110" />
                          </a>
                          <a
                            href="https://www.facebook.com/StamfordSafetyServices"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Stamford Security on Facebook"
                            className="group flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-200"
                          >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 transition-transform duration-200 group-hover:scale-110" aria-hidden="true">
                              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54v-2.2c0-2.513 1.493-3.89 3.777-3.89 1.094 0 2.238.194 2.238.194v2.46h-1.26c-1.241 0-1.628.771-1.628 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.99 22 12z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <RequestForm />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScrollProvider>
  )
}
