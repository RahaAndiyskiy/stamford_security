// About page uses shared global metadata and JSON-LD from `app/layout.tsx`.
// Smooth scrolling is enabled locally with `SmoothScrollProvider`.
import Header from '@/components/layout/Header'
import AboutStorySection from '@/components/sections/AboutStorySection'
import Footer from '@/components/layout/Footer'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'

export default function AboutPage() {
  return (
    <SmoothScrollProvider>
      <div className="about-page min-h-screen bg-[#EEEDEB] text-[#0E151D]">
        <Header />
        <AboutStorySection />
        <Footer />
      </div>
    </SmoothScrollProvider>
  )
}
