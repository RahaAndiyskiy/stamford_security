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
            <div className="space-y-8">
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

              <div className="grid gap-6 rounded-none border border-[#0E151D]/15 bg-[#F6F5F3] p-8 text-[#0E151D] shadow-sm shadow-black/5">
                <div className="grid gap-3">
                  <span className="text-sm uppercase tracking-[0.35em] text-[#0E151D]/70">Why request a consultation?</span>
                  <ul className="list-disc  pl-5 text-[#0E151D]/85">
                    <li>Receive a tailored security assessment for your site.</li>
                    <li>Discuss budget, timetable and compliance requirements.</li>
                    <li>Find the right mix of people, technology and processes.</li>
                  </ul>
                </div>
                <div className="grid gap-2 text-sm text-[#0E151D]/75">
                  <p className="uppercase tracking-[0.35em] text-[#0E151D]/70">Office</p>
                  <p>Venture House, 2 Arlington Square, Bracknell RG12 1WA</p>
                  <p className="mt-4 uppercase tracking-[0.35em] text-[#0E151D]/70">Call</p>
                  <p>+44 1344 951005</p>
                </div>
              </div>
            </div>

            <div className="rounded-none border border-[#0E151D]/15 bg-[#F7F7FF] p-8 shadow-[0_30px_80px_-35px_rgba(14,21,29,0.08)] transition duration-700 ease-out will-change-transform focus-within:shadow-[0_35px_110px_-25px_rgba(14,21,29,1)] focus-within:animate-form-sway">
              <div className="mb-8 text-center">
                <span className="text-sm uppercase tracking-[0.35em] text-[#0E151D]/70">Let’s talk</span>
                <h2 className="mt-4 text-3xl font-semibold text-[#0E151D]">Request a callback</h2>
              </div>

              <form className="space-y-3 text-[#0E151D]">
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-medium">
                    <span className="inline-flex items-center gap-1">
                      Full name
                      <span className="text-[#0E151D]">*</span>
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="h-12 w-full rounded-sm border-[1px] border-[#0E151D] bg-[#F7F7FF]/80 px-4 text-sm text-[#0E151D] outline-none transition focus:border-[#0E151D] focus:ring-2 focus:ring-[#0E151D]/10"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium">
                    <span className="inline-flex items-center gap-1">
                      Email address
                      <span className="text-[#0E151D]">*</span>
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-sm border-[1px] border-[#0E151D] bg-[#F7F7FF]/80 px-4 text-sm text-[#0E151D] outline-none transition focus:border-[#0E151D] focus:ring-2 focus:ring-[#0E151D]/10"
                    />
                  </label>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-medium">
                    Phone
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Optional phone number"
                      className="h-12 w-full rounded-sm border-[1px] border-[#0E151D] bg-[#F7F7FF]/80 px-4 text-sm text-[#0E151D] outline-none transition focus:border-[#0E151D] focus:ring-2 focus:ring-[#0E151D]/10"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium">
                    Company or project
                    <input
                      type="text"
                      name="company"
                      placeholder="Company name or project"
                      className="h-12 w-full rounded-sm border-[1px] border-[#0E151D] bg-[#F7F7FF]/80 px-4 text-sm text-[#0E151D] outline-none transition focus:border-[#0E151D] focus:ring-2 focus:ring-[#0E151D]/10"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm font-medium">
                  Message
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Briefly describe your security needs"
                    className="min-h-[140px] w-full rounded-sm border-[1px] border-[#0E151D] bg-[#F7F7FF]/80 px-4 py-2 text-sm text-[#0E151D] outline-none transition focus:border-[#0E151D] focus:ring-2 focus:ring-[#0E151D]/10"
                  />
                </label>
                <Button
                  type="submit"
                  className="w-full rounded-none bg-[#0E151D] px-6 py-2 text-sm uppercase tracking-[0.25em] text-white"
                >
                  Send request
                </Button>
                <p className="mt-4 text-center text-sm text-[#0E151D]/50">
                  <a href="/gdpr" className="underline hover:text-[#0E151D]">
                    GDPR Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScrollProvider>
  )
}
