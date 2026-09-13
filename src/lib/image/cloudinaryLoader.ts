'use client'

import { cloudName } from '@/lib/siteImages'

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}): string {
  if (
    src.startsWith('http://') ||
    src.startsWith('https://') ||
    src.startsWith('/') ||
    src.startsWith('data:')
  ) {
    return src
  }

  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality ?? 'auto'}`]
  return `https://res.cloudinary.com/${cloudName}/image/upload/${params.join(',')}/${src}`
}
