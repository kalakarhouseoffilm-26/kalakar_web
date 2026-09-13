import type { SVGProps } from 'react'

export function DesignIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M3 3 H11 V11 H3 Z M13 3 H21 V11 H13 Z M3 13 H11 V21 H3 Z M13 13 H21 V21 H13 Z" />
    </svg>
  )
}
