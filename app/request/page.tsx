import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import { Button } from '@/components/ui/Button'
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

            <div className="rounded-md border border-[#0E151D]/15 bg-[#F7F7FF] p-8 shadow-[0_30px_80px_-35px_rgba(14,21,29,0.08)] transition duration-700 ease-out will-change-transform focus-within:shadow-[0_35px_110px_-25px_rgba(14,21,29,1)] focus-within:animate-form-sway">
              <div className="mb-8 text-center">
                <span className="text-sm uppercase tracking-[0.35em] text-[#0E151D]/70">Let’s talk</span>
                <h2 className="mt-4 text-3xl font-semibold text-[#0E151D]">Request a callback</h2>
              </div>

              <form className="space-y-5 text-[#0E151D]">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="relative block text-sm font-medium input-underline">
                    <input
                      type="text"
                      name="name"
                      placeholder=" "
                      required
                      className="peer w-full border-b border-[#0E151D]/20 bg-transparent px-0 pb-1 pt-5 text-sm text-[#0E151D] outline-none transition-colors duration-200 ease-out focus:border-[#0E151D]/20 focus:ring-0"
                    />
                    <span className="pointer-events-none absolute left-0 top-0 text-sm text-[#0E151D]/50 transition-all duration-200 ease-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#0E151D]">
                      Full name <span className="text-[#0E151D]">*</span>
                    </span>
                  </label>
                  <label className="relative block text-sm font-medium input-underline">
                    <input
                      type="email"
                      name="email"
                      placeholder=" "
                      required
                      className="peer w-full border-b border-[#0E151D]/20 bg-transparent px-0 pb-1 pt-5 text-sm text-[#0E151D] outline-none transition-colors duration-200 ease-out focus:border-[#0E151D]/20 focus:ring-0"
                    />
                    <span className="pointer-events-none absolute left-0 top-0 text-sm text-[#0E151D]/50 transition-all duration-200 ease-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#0E151D]">
                      Email address <span className="text-[#0E151D]">*</span>
                    </span>
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="relative block text-sm font-medium input-underline">
                    <input
                      type="tel"
                      name="phone"
                      placeholder=" "
                      className="peer w-full border-b border-[#0E151D]/20 bg-transparent px-0 pb-1 pt-5 text-sm text-[#0E151D] outline-none transition-colors duration-200 ease-out focus:border-[#0E151D]/20 focus:ring-0"
                    />
                    <span className="pointer-events-none absolute left-0 top-0 text-sm text-[#0E151D]/50 transition-all duration-200 ease-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#0E151D]">
                      Phone
                    </span>
                  </label>
                  <label className="relative block text-sm font-medium input-underline">
                    <input
                      type="text"
                      name="company"
                      placeholder=" "
                      className="peer w-full border-b border-[#0E151D]/20 bg-transparent px-0 pb-1 pt-5 text-sm text-[#0E151D] outline-none transition-colors duration-200 ease-out focus:border-[#0E151D]/20 focus:ring-0"
                    />
                    <span className="pointer-events-none absolute left-0 top-0 text-sm text-[#0E151D]/50 transition-all duration-200 ease-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#0E151D]">
                      Company or project
                    </span>
                  </label>
                </div>
                <label className="relative block text-sm font-medium input-underline">
                  <textarea
                    name="message"
                    rows={5}
                    placeholder=" "
                    className="peer min-h-[140px] w-full border-b border-[#0E151D]/20 bg-transparent px-0 pb-1 pt-5 text-sm text-[#0E151D] outline-none transition-colors duration-200 ease-out focus:border-[#0E151D]/20 focus:ring-0"
                  />
                  <span className="pointer-events-none absolute left-0 top-0 text-sm text-[#0E151D]/50 transition-all duration-200 ease-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#0E151D]">
                    Message
                  </span>
                </label>
                <label className="flex items-start gap-3 text-sm text-[#0E151D]">
                  <input
                    type="checkbox"
                    name="gdpr"
                    required
                    className="mt-1 h-4 w-4 rounded-sm border-[#0E151D] text-[#0E151D] focus:ring-[#0E151D]"
                  />
                  <span className="leading-5">
                    I agree to the{' '}
                    <a href="/gdpr" className="underline text-[#0E151D] hover:text-[#0E151D]">
                      GDPR Privacy Policy
                    </a>
                    .
                  </span>
                </label>
                <Button
                  type="submit"
                  className="w-full rounded-none bg-[#0E151D] px-6 py-2 text-sm uppercase tracking-[0.25em] text-white"
                >
                  Send request
                </Button>
              </form>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScrollProvider>
  )
}
