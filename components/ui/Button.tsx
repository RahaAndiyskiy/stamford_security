import Image from 'next/image'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  type?: never
}

type ButtonSubmitProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined
  type?: 'button' | 'submit' | 'reset'
}

type ButtonProps = {
  children: ReactNode
  className?: string
} & (ButtonLinkProps | ButtonSubmitProps)

export function Button({ children, className = '', href, type = 'button', ...props }: ButtonProps) {
  const commonClasses = `button inline-flex items-center justify-center gap-3 rounded-sm bg-slate-950 text-[10px] font-medium uppercase tracking-[0.20em] text-white ${className}`

  if (href) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a href={href} className={commonClasses} {...anchorProps}>
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

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type={type} className={commonClasses} {...buttonProps}>
      <span className="button__text">{children}</span>
      <span className="button__arrow-shell" aria-hidden="true">
        <span className="button__arrow button__arrow--base">
          <Image src="/Arrow 1.svg" alt="" width={16} height={16} className="block" />
        </span>
        <span className="button__arrow button__arrow--clone">
          <Image src="/Arrow 1.svg" alt="" width={16} height={16} className="block" />
        </span>
      </span>
    </button>
  )
}
