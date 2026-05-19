"use client"

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/ui/Container'

function WhatsAppIcon({ className }: { className?: string }) {
  return <img src="/WhatsApp.svg" alt="WhatsApp logo" className={className} />
}

function XIcon({ className }: { className?: string }) {
  return <img src="/X.svg" alt="X logo" className={className} />
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54v-2.2c0-2.513 1.493-3.89 3.777-3.89 1.094 0 2.238.194 2.238.194v2.46h-1.26c-1.241 0-1.628.771-1.628 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.99 22 12z" />
    </svg>
  )
}

export default function Footer() {
  const [mapVisible, setMapVisible] = useState(false)
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (mapVisible || !mapContainerRef.current) {
      return
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapVisible(true)
          observerRef.current?.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observerRef.current.observe(mapContainerRef.current)

    return () => {
      observerRef.current?.disconnect()
    }
  }, [mapVisible])

  return (
    <footer id="contacts" className="relative overflow-hidden bg-[#0E151D] text-[#EEEDEB]">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/Stamford Security logos-21.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '35% 60%',
          backgroundSize: '70%',
        }}
      />
      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#7F7F7F]">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#EEEDEB]">Stamford Security Services</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.2em] text-[#7F7F7F]">Email</p>
                <a href="mailto:info@stamfordsecurity.co.uk" className="block text-base text-[#EEEDEB] hover:text-slate-200">
                  info@stamfordsecurity.co.uk
                </a>
                <a href="mailto:hr@stamfordsecurity.co.uk" className="block text-base text-[#EEEDEB] hover:text-slate-200">
                  hr@stamfordsecurity.co.uk
                </a>
                <p className="text-sm text-[#7F7F7F]">For Job Only</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.2em] text-[#7F7F7F]">Phone</p>
                <p className="text-base text-[#EEEDEB]">+44 1344 951005</p>
                <p className="text-sm text-[#7F7F7F]">For Quotation Only</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.2em] text-[#7F7F7F]">Opening hours</p>
                <p className="text-base text-[#EEEDEB]">Monday — Friday: 8AM — 4PM</p>
                <p className="text-base text-[#EEEDEB]">Saturday: 10AM — 2PM</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.2em] text-[#7F7F7F]">Address</p>
                <address className="not-italic text-base text-[#EEEDEB]">
                  Venture House, 2 Arlington Square
                  <br />
                  Bracknell RG12 1WA
                </address>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-6 text-sm text-slate-400">
              <p>Company number 07786069</p>
              <p className="mt-2">
                <Link href="/gdpr" className="text-[#EEEDEB] hover:text-white">
                  GDPR Privacy Policy
                </Link>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div ref={mapContainerRef} className="overflow-hidden rounded-sm border border-slate-800 bg-slate-950/80 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.8)]">
              {mapVisible ? (
                <iframe
                  className="h-[360px] w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Stamford+Security+Services,+Venture+House,+2+Arlington+Square,+Bracknell+RG12+1WA&output=embed"
                  title="Stamford Security Services location map"
                />
              ) : (
                <div className="h-[360px] w-full" />
              )}
            </div>
            <div className="text-right text-sm text-[#7F7F7F]">
              <a
                href="https://maps.app.goo.gl/Gbs81F6UEYfLej2c9"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Open company pin in Google Maps
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
