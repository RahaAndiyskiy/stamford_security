import Header from '@/components/layout/Header'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesStrip from '@/components/sections/ServicesStrip'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex flex-col flex-1">
        <HeroSection />
        <ServicesStrip />
        <AboutSection />
      </main>
    </div>
  )
}
