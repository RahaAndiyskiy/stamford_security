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

        <main className="mx-auto w-full max-w-6xl px-6 py-28 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="space-y-6">
              <div className="max-w-2xl">
                <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#0E151D]/70">
                  Request Consultation
                </p>
                <h1 className="text-4xl font-semibold leading-tight text-[#0E151D] sm:text-4xl">
                  Start your security project with Stamford Security Services.
                </h1>
                <p className="mt-6 max-w-xl text-md leading-6 text-[#0E151D]/65">
                  Tell us about your requirements and one of our specialists will contact you to discuss the best approach for your business, property or event.
                </p>
              </div>

              <div className="rounded-md grid gap-3 border border-[#0E151D]/15 bg-[#F6F5F3] p-2 text-[#0E151D] shadow-sm shadow-black/5">
                <div className="space-y-3">
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
                    <span className="uppercase tracking-[0.35em] text-[#0E151D]/70 text-[10px]">YEARS EXPERIENCE</span>
                  </div>
                  <div className="grid gap-0.5 min-w-[72px]">
                    <span className="text-[1.9rem] font-semibold leading-none">24/7</span>
                    <span className="uppercase tracking-[0.35em] text-[#0E151D]/70 text-[10px]">OPERATIONAL SUPPORT</span>
                  </div>
                  <div className="grid gap-0.5 min-w-[40px]">
                    <span className="text-[1.9rem] font-semibold leading-none">UK</span>
                    <span className="uppercase tracking-[0.35em] text-[#0E151D]/70 text-[10px]">NATIONWIDE COVERAGE</span>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <RequestForm />
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScrollProvider>
  )
}
