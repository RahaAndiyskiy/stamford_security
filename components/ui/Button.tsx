import Image from 'next/image'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  className?: string
}

export function Button({ children, className = '', href = '#', ...props }: ButtonProps) {
  return (
    <a
      href={href}
      className={`button inline-flex items-center justify-center gap-3 rounded-sm bg-slate-950 text-[10px] font-medium uppercase tracking-[0.20em] text-white ${className}`}
      {...props}
    >
      <span className="button__text">{children}</span>
      <span className="button__arrow-shell" aria-hidden="true">
        <span className="button__arrow button__arrow--base">
          <Image src="/Arrow 1.svg" alt="" width={16} height={16} className="block" />
        </span>
        <span className="button__arrow button__arrow--clone">
          <Image src="/Arrow 1.svg" alt="" width={16} height={16} className="block" />
        </span>
      </span>
    </a>
  )
}
