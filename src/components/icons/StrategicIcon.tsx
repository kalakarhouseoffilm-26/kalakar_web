import type { SVGProps } from 'react'

export function StrategicIcon({
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
      <path d="M12 1 L23 12 L12 23 L1 12 Z M12 6 L18 12 L12 18 L6 12 Z M12 9 L15 12 L12 15 L9 12 Z" />
    </svg>
  )
}
