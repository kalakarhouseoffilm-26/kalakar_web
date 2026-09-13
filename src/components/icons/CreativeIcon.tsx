import type { SVGProps } from 'react'

export function CreativeIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 1 L16 9 L13 11 L18 14 L12 23 L6 14 L11 11 L8 9 Z" />
    </svg>
  )
}
