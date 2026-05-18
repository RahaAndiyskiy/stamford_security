import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import GdprStorySection from '@/components/sections/GdprStorySection'
import { siteConfig } from '@/lib/siteConfig'

export const metadata = {
  title: `GDPR Policy | ${siteConfig.title}`,
  description: 'GDPR policy for Stamford Security, including personal data handling, processing, and subject rights.',
}

export default function GdprPage() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#EEEDEB] text-[#0E151D]/75">
        <Header />
        <GdprStorySection />
        <Footer />
      </div>
    </SmoothScrollProvider>
  )
}
