import type { SVGProps } from 'react'

export function MarketingIcon({
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
      <path d="M3 9 H8 L17 4 V20 L8 15 H3 Z M19 8 H22 V16 H19 Z" />
    </svg>
  )
}
