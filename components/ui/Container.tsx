import type { HTMLAttributes, ReactNode } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <div className={`page-container ${className}`} {...props}>
      {children}
    </div>
  )
}
