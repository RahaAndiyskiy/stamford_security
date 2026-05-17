"use client"

import { useEffect, type PropsWithChildren } from 'react'
import Lenis from 'lenis'

export default function SmoothScrollProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1 - Math.pow(1 - t, 4)),
      lerp: 0.07,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1,
      wheelMultiplier: 1,
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
