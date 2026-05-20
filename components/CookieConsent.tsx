'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Button2 } from '@/components/ui/Button2'

const STORAGE_KEY = 'stamford_cookie_consent'

export default function CookieConsent() {
  const [consent, setConsent] = useState<'accepted' | 'declined' | null>(null)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored === 'accepted' || stored === 'declined') {
        setConsent(stored)
      } else {
        setConsent(null)
      }
    } catch {
      setConsent(null)
    }
  }, [])

  function saveConsent(value: 'accepted' | 'declined') {
    try {
      window.localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // ignore
    }
    setConsent(value)
  }

  if (consent !== null) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-[#0E151D] text-[#EEEDEB] shadow-[0_-12px_30px_-18px_rgba(0,0,0,0.6)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="space-y-2 sm:space-y-0">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#EEEDEB]/80">Cookies policy</p>
          <p className="max-w-3xl text-sm leading-6 text-[#EEEDEB]/90">
            We use cookies to improve your experience on this site. You can accept all cookies or decline optional cookies and continue with essential site functionality only.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button2 href="#" onClick={() => saveConsent('declined')} className="px-4 py-3 text-sm tracking-[0.24em] text-[#EEEDEB] border border-[#EEEDEB]/30 hover:text-[#FFFFFF] hover:border-[#FFFFFF]">
            Decline
          </Button2>
          <Button
            onClick={() => saveConsent('accepted')}
            className="px-4 py-3 text-sm tracking-[0.24em] bg-transparent text-[#EEEDEB] border border-[#EEEDEB]/30 hover:bg-[#EEEDEB]/10 hover:text-[#EEEDEB]"
          >
            Accept cookies
          </Button>
        </div>
      </div>
    </div>
  )
}
