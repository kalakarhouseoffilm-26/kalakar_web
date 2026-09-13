import type { SVGProps } from 'react'

export function PartnershipIcon({
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
      <path d="M3 4 H13 V10 H9 V14 H3 Z M11 10 H21 V20 H11 V14 H15 V10 Z" />
    </svg>
  )
}
