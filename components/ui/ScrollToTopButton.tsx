"use client"

import { useEffect, useState } from 'react'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => {
      const hero = document.getElementById('home')
      const heroHeight = hero?.offsetHeight ?? window.innerHeight
      setVisible(window.scrollY > heroHeight)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility)
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  if (!visible) {
    return null
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center bg-[#0E151D] text-[#EEEDEB] shadow-[0_14px_40px_rgba(0,0,0,0.18)] transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#EEEDEB]/40"
      aria-label="Scroll to top"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  )
}
