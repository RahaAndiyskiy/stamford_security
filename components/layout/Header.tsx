"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

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

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-[100] w-full bg-[#F6F5F3] shadow-sm shadow-black/5">
      <Container className="grid min-h-[60px] grid-cols-[auto_1fr_auto] items-center gap-0">
        <div className="flex items-center">
          <Link href="/" className="inline-flex items-center transition duration-200 hover:scale-95">
            <Image
              src="/Stamford Security logos-23 1.svg"
              alt="Stamford Security logo"
              width={720}
              height={180}
              className="h-[50px] w-auto overflow-visible"
            />
          </Link>
        </div>

        <nav aria-label="Primary navigation" className="hidden lg:flex justify-center">
          <ul className="flex items-center gap-8 text-[16px] uppercase tracking-[0.20em] text-[#0E151D]/80">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="menu-link">
                  <span className="menu-link__text">{item.label}</span>
                  <span className="menu-link__text menu-link__text--clone">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-end lg:justify-start">
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-sm bg-slate-950 text-[10px] font-medium uppercase tracking-[0.20em] text-white transition duration-200 hover:bg-slate-900 lg:hidden"
          >
            {mobileOpen ? '×' : '☰'}
          </button>

          <div className="hidden lg:flex items-center gap-0">
            <a
              href="https://wa.me/441344951005"
              target="_blank"
              rel="noreferrer"
              aria-label="Stamford Security on WhatsApp"
              className="group flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-200"
            >
              <WhatsAppIcon className="h-7 w-7 transition-transform duration-200 group-hover:scale-110" />
            </a>
            <a
              href="https://x.com/stamfsecurity"
              target="_blank"
              rel="noreferrer"
              aria-label="Stamford Security on X"
              className="group flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-200"
            >
              <XIcon className="h-7 w-7 transition-transform duration-200 group-hover:scale-110" />
            </a>
            <a
              href="https://www.facebook.com/StamfordSafetyServices"
              target="_blank"
              rel="noreferrer"
              aria-label="Stamford Security on Facebook"
              className="group flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-200"
            >
              <FacebookIcon className="h-7 w-7 transition-transform duration-200 group-hover:scale-110" />
            </a>
            <Button href="/request" className="h-[50px] w-[280px]">
              Request a consultation
            </Button>
          </div>
        </div>
      </Container>

      <div
        className={`overflow-hidden bg-[#F6F5F3] p-0 shadow-2xl shadow-black/20 transition-[max-height,opacity] duration-200 ease-out lg:hidden ${
          mobileOpen
            ? 'max-h-[calc(100vh-4.375rem)] opacity-100 pointer-events-auto'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav aria-label="Mobile navigation" className="mt-2 space-y-4 pl-6">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block border-b border-[#0E151D]/10 pb-4 text-[18px] uppercase tracking-[0.25em] text-[#0E151D]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex justify-center items-center gap-4">
          <a
            href="https://wa.me/441344951005"
            target="_blank"
            rel="noreferrer"
            aria-label="Stamford Security on WhatsApp"
            className="group flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-200"
          >
            <WhatsAppIcon className="h-7 w-7 transition-transform duration-200 group-hover:scale-110" />
          </a>
          <a
            href="https://x.com/stamfsecurity"
            target="_blank"
            rel="noreferrer"
            aria-label="Stamford Security on X"
            className="group flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-200"
          >
            <XIcon className="h-7 w-7 transition-transform duration-200 group-hover:scale-110" />
          </a>
          <a
            href="https://www.facebook.com/StamfordSafetyServices"
            target="_blank"
            rel="noreferrer"
            aria-label="Stamford Security on Facebook"
            className="group flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-200"
          >
            <FacebookIcon className="h-7 w-7 transition-transform duration-200 group-hover:scale-110" />
          </a>
        </div>

        <div className="mt-8">
          <Button href="/request" className="h-[50px] w-full">
            Request a consultation
          </Button>
        </div>
      </div>
    </header>
  )
}
