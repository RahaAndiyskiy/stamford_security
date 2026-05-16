import type { AnchorHTMLAttributes, ReactNode } from 'react'

interface Button2Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  className?: string
}

export function Button2({ children, className = '', href = '#', ...props }: Button2Props) {
  return (
    <a
      href={href}
      className={`button2 inline-flex items-center justify-center gap-2 bg-transparent text-[#0E151D] uppercase tracking-[0.20em] ${className}`}
      {...props}
    >
      <span>{children}</span>
    </a>
  )
}
