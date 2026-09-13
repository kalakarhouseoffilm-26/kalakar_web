import type { SVGProps } from 'react'

export function BrandingIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 1 L14.5 8.5 L22 11 L14.5 13.5 L12 21 L9.5 13.5 L2 11 L9.5 8.5 Z" />
    </svg>
  )
}
