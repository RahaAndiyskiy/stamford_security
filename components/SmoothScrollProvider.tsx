"use client"

import { useEffect, type PropsWithChildren } from 'react'
import Lenis from 'lenis'

export default function SmoothScrollProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      easing: (t: number) => Math.min(1, 1 - Math.pow(1 - t, 4)),
      lerp: 0.2,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.5,
      wheelMultiplier: 1.75,
      autoRaf: true,
      anchors: true,
      prevent: () => false,
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
