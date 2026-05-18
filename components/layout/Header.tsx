import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#industries' },
  { label: 'Contact', href: '/#contacts' },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-[100] w-full bg-[#F6F5F3] shadow-sm shadow-black/5">
      <Container className="grid min-h-[70px] grid-cols-[auto_1fr_auto] items-center gap-8">
        <div className="flex items-center">
          <Image
            src="/Stamford Security logos-23 1.svg"
            alt="Stamford Security logo"
            width={720}
            height={180}
            className="h-[50px] w-auto overflow-visible"
          />
        </div>

        <nav aria-label="Primary navigation" className="flex justify-center">
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

        <Button href="/request" className="h-[50px] w-[280px]">
          Request a consultation
        </Button>
      </Container>
    </header>
  )
}
