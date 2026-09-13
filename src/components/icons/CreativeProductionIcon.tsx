import type { SVGProps } from 'react'

export function CreativeProductionIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M5 4 H8 V7 H5 Z M10 4 H13 V7 H10 Z M3 8 H15 V19 H3 Z M15 11 L21 8 V19 L15 16 Z" />
    </svg>
  )
}
