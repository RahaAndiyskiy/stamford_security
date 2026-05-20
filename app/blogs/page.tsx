import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import BlogsSection from '@/components/sections/BlogsSection'

export default function BlogsPage() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex min-h-screen flex-col bg-[#EEEDEB] text-[#0E151D]">
        <Header />
        <BlogsSection />
        <Footer />
      </div>
    </SmoothScrollProvider>
  )
}
