import type { SVGProps } from 'react'

export function CinematicIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M4 3 H20 V21 H4 Z M6 5 H8 V7 H6 Z M6 9 H8 V11 H6 Z M6 13 H8 V15 H6 Z M6 17 H8 V19 H6 Z M16 5 H18 V7 H16 Z M16 9 H18 V11 H16 Z M16 13 H18 V15 H16 Z M16 17 H18 V19 H16 Z" />
    </svg>
  )
}
