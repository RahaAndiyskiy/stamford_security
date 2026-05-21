"use client"

import { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/ui/Container'

export default function AboutStorySection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const [progress, setProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const mediaQuery = window.matchMedia('(max-width: 1023px)')
    const updateMobile = () => setIsMobile(mediaQuery.matches)

    const updateProgress = () => {
      const headerOffset = 70
      const scrollable = section.offsetHeight - window.innerHeight
      const rawProgress = window.scrollY / scrollable
      const clamped = Math.min(1, Math.max(0, rawProgress))
      setProgress(clamped)
    }

    const handleScroll = () => {
      if (rafRef.current !== null) return
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null
        updateProgress()
      })
    }

    updateMobile()
    updateProgress()
    window.addEventListener('resize', updateMobile)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('resize', updateMobile)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const leftStyles = (() => {
    const fadeMultiplier = isMobile ? 1.4 : 1

    if (progress <= 0.35) {
      const phase = progress / 0.35
      return {
        transform: `translateY(${ -320 * phase }px)`,
        opacity: Math.max(0.05, 1 - 0.85 * phase * fadeMultiplier),
      }
    }

    return {
      transform: 'translateY(-320px)',
      opacity: isMobile ? 0.05 : 0.25,
    }
  })()

  const rightStyles = (() => {
    const fadeMultiplier = isMobile ? 1.4 : 1

    if (progress <= 0.2) {
      return { transform: 'translateY(180px)', opacity: isMobile ? 0.05 : 0.15 }
    }

    if (progress <= 0.45) {
      const phase = (progress - 0.2) / 0.25
      return {
        transform: `translateY(${ 180 * (1 - phase) }px)`,
        opacity: Math.min(1, (isMobile ? 0.05 : 0.15) + 0.85 * phase * fadeMultiplier),
      }
    }

    if (progress <= 0.75) {
      const phase = (progress - 0.45) / 0.3
      return {
        transform: `translateY(${ -220 * phase }px)`,
        opacity: Math.max(0.05, 1 - 0.75 * phase * fadeMultiplier),
      }
    }

    return {
      transform: 'translateY(-220px)',
      opacity: isMobile ? 0.05 : 0.35,
    }
  })()

  const missionStyles = (() => {
    const startY = isMobile ? 420 : 280
    const endY = isMobile ? -140 : -100

    if (progress <= 0.75) {
      return { transform: `translateY(${startY}px)`, opacity: 0 }
    }

    const phase = (progress - 0.75) / 0.25
    return {
      transform: `translateY(${startY * (1 - phase) + endY * phase}px)`,
      opacity: phase,
    }
  })()

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-[#EEEDEB] text-[#0E151D]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <Container className="relative h-full">
          <div className="relative h-full overflow-hidden">
            <span className="about-bg-number pointer-events-none select-none">
              2005
            </span>

            <div className="relative h-full">
              <div
                className="about-panel-left absolute left-0 top-[9vh] w-full max-w-[42rem] sm:w-[58%] lg:w-[48%]"
                style={leftStyles}
              >
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.35em] text-[#7F7F7F]/90">
                    ABOUT STAMFORD SECURITY
                  </span>
                  <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] text-[#0E151D] sm:text-6xl">
                    Looking after your safety since 2005.
                  </h1>
                  <p className="max-w-xl text-lg leading-7 text-[#0E151D]">
                    Since 2005, Stamford Security Services has delivered professional, tailored security solutions for businesses, properties and high-risk environments. Built on experience, reliability and long-term partnerships, we protect people, assets and operations with a service shaped around each client’s needs.
                  </p>
                </div>
              </div>

              <div
                className="about-panel-right absolute right-0 top-[38vh] w-full max-w-[40rem] sm:w-[48%] lg:w-[42%]"
                style={rightStyles}
              >
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.35em] text-[#7F7F7F]/90">
                    Our approach
                  </span>
                  <h2 className="max-w-xl text-4xl font-semibold leading-[1.08] text-[#0E151D] sm:text-5xl">
                    Security built on trust, preparation and consistency.
                  </h2>
                  <p className="max-w-xl text-lg leading-7 text-[#0E151D]">
                    Our team has built a reputation for professionalism, responsiveness and dependable service delivery across corporate environments, construction sites, executive protection and access control systems. We believe security is more than presence — it is preparation, attention and long-term commitment.
                  </p>
                </div>
              </div>

              <div
                className="about-panel-mission absolute left-0 top-[60vh] w-full max-w-[42rem] px-0 sm:px-4"
                style={missionStyles}
              >
                <div className="pt-10">
                  <span className="text-xs uppercase tracking-[0.35em] text-[#7F7F7F]/90">
                    OUR MISSION
                  </span>
                  <h2 className="mt-6 text-4xl font-semibold leading-[1.08] text-[#0E151D] sm:text-5xl">
                    Reliable. Flexible. Trusted.
                  </h2>
                  <p className="mt-6 text-lg leading-7 text-[#0E151D]">
                    Our mission is simple: to deliver reliable, flexible and cost-effective security services while building lasting relationships through quality, integrity and care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
