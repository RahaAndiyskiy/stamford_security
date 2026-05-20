"use client"

import { useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'

export default function RequestForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }, [])

  useEffect(() => {
    if (!submitted) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setSubmitted(false)
    }, 5000)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [submitted])

  if (submitted) {
    return (
      <div
        className="cursor-pointer"
        onClick={() => setSubmitted(false)}
      >
        <div className="relative overflow-hidden rounded-md border border-[#0E151D]/15 bg-white p-8 shadow-[0_30px_80px_-35px_rgba(14,21,29,0.08)]">
          <div
            className="pointer-events-none absolute inset-0 opacity-5"
            style={{
              backgroundImage: "url('/Stamford Security logos-24.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center 50%',
              backgroundSize: '120%',
            }}
          />
          <div className="relative flex h-[420px] flex-col items-center justify-center text-center text-[#0E151D]">
            <p className="text-2xl font-semibold">Thank you for your request!</p>
            <p className="mt-4 max-w-md text-sm leading-6 text-[#0E151D]/80">
              Our specialist will contact you within 24 hours. Best regards!
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-md border border-[#0E151D]/15 bg-[#F7F7FF] p-8 shadow-[0_30px_80px_-35px_rgba(14,21,29,0.08)] transition duration-700 ease-out will-change-transform focus-within:shadow-[0_35px_110px_-25px_rgba(14,21,29,1)] focus-within:animate-form-sway">
      <div className="mb-8 text-center">
        <span className="text-sm uppercase tracking-[0.35em] text-[#0E151D]/70">Let’s talk</span>
        <h2 className="mt-4 text-3xl font-semibold text-[#0E151D]">Request a callback</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 text-[#0E151D]">
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
        <label className="flex flex-col gap-2 text-sm font-medium text-[#0E151D]/70">
          Service interest (optional)
          <select
            name="service"
            defaultValue=""
            className="h-14 w-full border-b border-[#0E151D]/20 bg-transparent px-0 text-sm text-[#0E151D] outline-none transition-colors duration-200 ease-out focus:border-[#0E151D]/20 focus:ring-0"
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="Retail Security">Retail Security</option>
            <option value="Close Protection">Close Protection</option>
            <option value="Access Control System">Access Control System</option>
            <option value="Event Security">Event Security</option>
            <option value="Hotel Security">Hotel Security</option>
            <option value="Residential security">Residential security</option>
            <option value="Other">Other</option>
          </select>
        </label>
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
  )
}
